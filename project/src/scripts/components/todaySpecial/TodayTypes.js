
import NavsFooter from "../NavsFooter"
import TodayNav from "./Todaynav"
import Todaygoods from "./todaygoods"

class TodatTypes extends React.Component{
    constructor(props,context) {
        super(props,context)
        this.state={
            goodList:[],
            changURL:''

        }

    
    } 
    componentDidMount(){
        this.state.swiper=new Swiper(".swiper-container",{
            freeMode : true,
            slidesPerView : 'auto',
            freeModeSticky : true ,
            
        })
    }
    render() {
        return (
            <div>
               <div className="hotWordNav">
                <div className="swiper-container swiper-container-horizontal ">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide swiper-slide-active hotWord-item " ><a href="#" className={this.state.changURL==""?"hotWordColor":""}>推荐</a></div>
                        <div  className="swiper-slide hotWord-item"  onClick={this.todayChangeUrl.bind(this,"dress---0")}><a href="#/types" className={this.state.changURL=="dress---0"?"hotWordColor":""}>童装</a></div>
                        <div className="swiper-slide hotWord-item"  onClick={this.todayChangeUrl.bind(this,"shoes---0")}><a href="#/types" className={this.state.changURL=="shoes---0"?"hotWordColor":""}>童鞋</a></div>
                        <div className="swiper-slide hotWord-item" onClick={this.todayChangeUrl.bind(this,"daily_goods---0")}> <a href="#/types" className={this.state.changURL=="daily_goods---0"?"hotWordColor":""}>婴童用品</a></div>
                        <div className="swiper-slide hotWord-item" onClick={this.todayChangeUrl.bind(this,"woman_dress---0")}><a href="#/types" className={this.state.changURL=="woman_dress---0"?"hotWordColor":""}>女装</a></div>
                        <div className="swiper-slide hotWord-item" onClick={this.todayChangeUrl.bind(this,"woman_shoes_bags---0")}> <a href="#/types" className={this.state.changURL=="woman_shoes_bags---0"?"hotWordColor":""}>鞋包</a></div>
                        <div className="swiper-slide hotWord-item" onClick={this.todayChangeUrl.bind(this,"house---0")}> <a href="#/types" className={this.state.changURL=="house---0"?"hotWordColor":""}>居家</a></div>
                        <div className="swiper-slide hotWord-item" onClick={this.todayChangeUrl.bind(this,"beauty---0")}> <a href="#/types" className={this.state.changURL=="beauty---0"?"hotWordColor":""}>美妆</a>  </div>
                        <div className="swiper-slide hotWord-item" onClick={this.todayChangeUrl.bind(this,"food---0")}>  <a href="#/types" className={this.state.changURL=="food---0"?"hotWordColor":""}>美食</a></div>
                        <div className="swiper-slide hotWord-item" onClick={this.todayChangeUrl.bind(this,"")}><a href="#/types" className={this.state.changURL==""?"hotWordColor":""}>下期预告</a></div>
                    </div>
                </div>
                <div className="hotWord-right">
                    <span className="opacity"></span>
                    <a href="#/list">
                    <span className="listSearch iconfont icon-sousuo2-my001">
                    </span>
                    </a>
                </div>
            </div>
                
                <Todaygoods ref="listshow"  changURL={this.state.changURL} isLoading={this.state.isLoading} />
                <NavsFooter/>
                </div>
        )
    }
   todayChangeUrl(type,e){
        e.preventDefault()
        this.setState({
            changURL:type
        })
        this.state.changURL = type
   }

}

export default TodatTypes