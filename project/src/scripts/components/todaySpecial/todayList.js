import $ from 'jquery'

class Todaliat extends React.Component{
    constructor(props,context) {
        super(props,context)
        this.state={
            goods:[],
            good:[]
        }
    } 
    today_listGetItem(){
        let that=this
        let arr=[]
        let good=[]
        $.ajax({
            url:"http://sapi.beibei.com/item/category-1.html?callback=BeibeiItemCategoryGet",
            data:"GET",
            dataType:"jsonp",
            jsonpCallback:"BeibeiItemCategoryGet",
            success:function(result){
                result.main_categorys.forEach((item,i)=>{
                    arr.push(result.main_categorys[i])
                    good.push(result.main_categorys[i].subdivision_categorys)
                })
               
                that.setState({
                    goods:arr,
                })
                console.log(arr)
               good.forEach((item,i)=>{
               console.log(item[i].title)     
                })
                // console.log(result)
            }


            })
        }
        todayListShowItem(){
            let items=[]
            this.state.goods.forEach((item,i)=>{
                items.push(
                    <div className="today_list-listLogs">
                    <div className="today_list-title"></div>
                    <div className="today_list-content">
                        <a href="#" className="today_list-content-item">
                            <img src="//b1.hucdn.com/upload/category/1607/08/47777251304120_150x150.png!160x160.webp" alt=""/>
                            <p>纸尿裤</p>
                        </a>
                    </div>
                </div>
                )
                return items
            })
        }
    render() {
        return (
                <div>
                    <div className="today_list-headerSearch">
                        <span className="iconfont icon-sousuo2-my001 "></span>
                        <input type="text" placeholder="发现你喜欢的商品"/>
                    </div>
                    
                </div>
        )   
    }
    componentWillMount(){
        this.today_listGetItem()
    }
}

export default Todaliat