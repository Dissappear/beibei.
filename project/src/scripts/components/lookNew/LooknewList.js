
import Fetch from '../../modules/fetch'

class LooknewList extends React.Component {
    constructor(props,context) {
        
        super(props,context)
        this.state={
            goods:[],
            timeNow:"",
            isLoading:""
        }
    }
    getTimeNow() {//专门获取当前的时间戳的函数
        let timeNow = Math.round(Date.now()/1000)
        return timeNow

    }
    
    getNewGoodList(whichData) {
        let that = this
        let whichOne = this.props.whichOne
        //接收从父组件传递来得参数，目的是更改当前的获取的参数
        if(whichData) {
             whichOne = whichData.whichOne
        }
        
        this.setState({
            isLoading:true
        })
        let str = ''
        let str1 = 'newly'
        //下面的判断有两个目的，一是是否重新获取时间戳，二是是否拼接str达到获取不同数据的目的
        if(!whichOne) {
            this.state.timeNow = this.getTimeNow()
        }else {
            str = str + whichOne +"-"
            str1 = "channel"
        }
        let timeNow = this.state.timeNow
        
       
        // http://dsapi.beibei.com/discovery/newly_recom_get/1-1505963522.html
        Fetch.Get('http://127.0.0.1:9000/looknew/discovery/'+str1+'_recom_get/1-'+str+timeNow+'.html').then(
            res=>{
                //数据的问题产生的原因是这个位置不能使用localhost的接口只能使用127.0.0.1
                
                return res.json()
            }).then(json=>{
               
            that.setState({
                goods:json.newly_recommend_products,
                isLoading:false
            })
            
        })

        // Fetch.Get('http://127.0.0.1:9000/fonts/iconfont.css').then(
        //     res=>{
        //         console.log(res)
        //         return res.json()
        //     }).then(json=>{
        //     console.log(json)
                
        // })
    }
    componentWillReceiveProps(props) {
        this.getNewGoodList(props)
    }
     formatNum(num) {
      let  num1 = String(num/100);
        if(num1.indexOf(".")>-1) {
       let    arr = num1.split(".")
            arr[1] = "."+arr[1]
            return arr
        }else {
            let arr = [];
            arr.push(num1)
            arr.push("")
            return arr
        }
    }
     formatTime(time) {
        let time1 = time*1000;
        let time2 = new Date(time1).getMinutes();
        let time3 = new Date().getMinutes();
        
        if(time3-time2>= 60) {
            return Math.floor((time3-time2)/60 )+"小时前";
        }else {
            return (time3-time2)+"分钟前"
        }
        

    }
    showGoodList() {
        
        let arr=[]
        this.state.goods.forEach((good,i)=>{
         let url = "#/detail?iid="+good.iid   
           
            arr.push(
                <a href={url} className="list__show">
                <div className="list__img">
                    <img src={good.img} />
                </div>
                <div className="info__wrapper">
                    <div className="price__wrapper">
                        <span className="price">
                            ￥
                            <span>{this.formatNum(good.price)[0]}</span>
                            {this.formatNum(good.price)[1]}
                        </span>
                        <span className="discount__tag">
                            {good.discount_desc}
                        </span>
                    </div>
                    <div className="list__title">
                        {good.title}
                    </div>
                    <div className="sub__info">
                        <span className="list__time">
                            {this.formatTime(good.time)}
                        </span>
                        <span className="num__desc">
                            {good.buying_info}
                        </span>
                    </div>
                </div>
            </a>
            )
        })
        return arr
    }
    componentDidMount(props) {
        this.getNewGoodList(props)
    }
    
    render() {
        return (
            <div id="looknew__wrapper">
            <div className="new__list" id="scroller">
               
                    {this.showGoodList()}
                    {/*下面这个div是在加载的时候数据还没有获取到的时候显示的内容*/}
                    {
                        this.state.isLoading?<div className="LooklistGlass"></div>:""
                    }
              
                
              </div> 
            </div>
        )
    }
   
}

LooknewList.defaultProps={
    whichOne:""
}
export default LooknewList