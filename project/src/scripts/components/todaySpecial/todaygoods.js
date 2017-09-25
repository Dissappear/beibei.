

import $ from 'jquery'

class todaygoods extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            isLoading:'',
            goods:[],
            mart_showTitle:''
        }
    }
    todayGET(datalist){
        let that=this
        let changURL=this.props.changURL
        if(datalist){
            changURL=datalist.changURL
        }
        this.setState({
            isLoading:true
        })
        let str=''
        let str1='new'
        let str2="New"
        if(changURL){
            str=str+changURL
            str1='channel'
            str2="Channel"
        }
        let goods=[]
        let url="http://sapi.beibei.com/martshow/"+str1+"/1-"+str+".html?callback=BeibeiMartshow"+str2+"Get"
        $.ajax({
            url:url,
            data:"GET",
            dataType:"jsonp",
            jsonpCallback:"BeibeiMartshow"+str2+"Get",
            success:function(result){
                result.martshows.forEach((items,i)=>{
                   if(result.martshows[i].type=="compact_item_show"){
                    goods.push(result.martshows[i])
                    } 
                })
                
                that.setState({
                   goods:goods,
                    mart_showTitle:result.martshows_title.title
                })
                
            }
        })
    
    
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
      componentWillReceiveProps(props) {
        this.todayGET(props)
    }
    todayShowGoods(){
        // this.state.goods.length=5;
        let arr = []
       
        this.state.goods.forEach((good,i)=>{
        //   console.log(this.state.goods[i].compact_item_show.items[1].iid)
        //     console.log(this.state.goods[i].compact_item_show)
        let good1Num=this.state.goods[i].compact_item_show.items[0].iid
        let good2Num=this.state.goods[i].compact_item_show.items[1].iid
         let url = "#/detail?iid="+good1Num
         let url1 = "#/detail?iid="+good2Num
            arr.push(
                
                <div className="todaygood">
                <div className="today-title">
                    <img src={this.state.goods[i].compact_item_show.brand_logo} alt=""/>
                    <span className="today-item-name">{this.state.goods[i].compact_item_show.brand_name}</span>
                    <span className="today-item-info">{this.state.goods[i].compact_item_show.title}</span>
                    <span className=" today-much iconfont icon-you"></span>
                </div>
                <div className="today-content">
                    <a href={url} className="today-content-item">
                        <div>
                            <div className="today-content-item-img">
                                <img src={this.state.goods[i].compact_item_show.items[0].img} alt=""/>
                            </div>
                            <div className="today-content-item-details">
                                <div className="today-item-price">
                                    <p className="today-item-price-new">
                                        <span className="currency">￥</span>
                                        <span className="price-num">{this.formatNum(this.state.goods[i].compact_item_show.items[0].price)[0]}</span>
                                        <span className="price-little">{this.formatNum(this.state.goods[i].compact_item_show.items[0].price)[1]}</span>
                                    </p>
                                    <p className="today-item-price-old">
                                    ￥{this.formatNum(this.state.goods[i].compact_item_show.items[0].price_ori)}
                                    </p>
                                </div>
                                <p className="today-item-title">{this.state.goods[i].compact_item_show.items[0].title}</p>
                            </div>
                        </div>
                   </a>
                   <a href={url1} className="today-content-item">
                        <div >
                            <div className="today-content-item-img">
                                <img src={this.state.goods[i].compact_item_show.items[1].img} alt=""/>
                            </div>
                            <div className="today-content-item-details">
                                <div className="today-item-price">
                                    <p className="today-item-price-new">
                                        <span className="currency">￥</span>
                                        <span className="price-num">{this.formatNum(this.state.goods[i].compact_item_show.items[1].price)[0]}</span>
                                        <span className="price-little">{this.formatNum(this.state.goods[i].compact_item_show.items[1].price)[1]}</span>
                                    </p>
                                    <p className="today-item-price-old">
                                            ￥{this.formatNum(this.state.goods[i].compact_item_show.items[0].price_ori)}
                                    </p>
                                </div>
                                <p className="today-item-title">{this.state.goods[i].compact_item_show.items[1].title}</p>
                            </div>
                        </div>
                   </a>
                </div>
                
          </div>
            )
            
        })
        return arr
    }  
    
    componentWillMount(props){
        this.todayGET(props)
    }
    render() {
       
        return (
            <div className="todaygoods">
              <h2>今日特卖 每天早9点准时更新</h2>
              {this.todayShowGoods()}
            </div>
        )
    }
   
}

export default todaygoods