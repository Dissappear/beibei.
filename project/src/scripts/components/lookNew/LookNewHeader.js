import Navsfooter from "../NavsFooter"




class LookNewHeader extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            whichOne:""
        }
    }
    render() {
        return ( 
            <div className="nav-container">
                <div className="nav-list swiper-wrapper">  
                    <span className="nav-item swiper-slide " data-cate=""><b  className={this.state.whichOne==""?"checkedPink":""}>精选</b></span>  
                    <span className="nav-item swiper-slide" data-cate="activity" className={this.state.whichOne=="activity"?"checkedPink":""}><b >买一送一</b></span>  
                    <span className="nav-item swiper-slide" data-cate="9kuai9"><b className={this.state.whichOne=="9kuai9"?"checkedPink":""}>9.9元</b></span>  
                    <span className="nav-item swiper-slide" data-cate="nvzhuang"><b className={this.state.whichOne=="nvzhuang"?"checkedPink":""}>女装</b></span>  
                    <span className="nav-item swiper-slide" data-cate="tongzhuang"><b className={this.state.whichOne=="tongzhuang"?"checkedPink":""}>童装</b></span>  
                    <span className="nav-item swiper-slide" data-cate="tongxie"><b className={this.state.whichOne=="tongxie"?"checkedPink":""}>童鞋</b></span>  
                    <span className="nav-item swiper-slide" data-cate="wanju"><b className={this.state.whichOne=="wanju"?"checkedPink":""}>玩具</b></span>  
                    <span className="nav-item swiper-slide" data-cate="xiebao"><b className={this.state.whichOne=="xiebao"?"checkedPink":""}>鞋包</b></span>  
                    <span className="nav-item swiper-slide" data-cate="yongpin"><b className={this.state.whichOne=="yongpin"?"checkedPink":""}>用品</b></span>  
                    <span className="nav-item swiper-slide" data-cate="jujia"><b className={this.state.whichOne=="jujia"?"checkedPink":""}>居家</b></span>  
                    <span className="nav-item swiper-slide" data-cate="meizhuang"><b className={this.state.whichOne=="meizhuang"?"checkedPink":""}>美妆</b></span>  
                </div> 
             </div>
        )
    }
    
    componentDidMount(){
        
        this.state.swiper=new Swiper(".nav-container",{
            freeMode : false,
            slidesPerView : 'auto',
            freeModeSticky : true 

        })
    }
    
    

}

export default LookNewHeader