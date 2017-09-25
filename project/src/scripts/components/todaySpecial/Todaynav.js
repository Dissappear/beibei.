


class Todaynav extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
          
        }
    }
    todaychangetypes(){
        type:{

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
            <div className="hotWordNav">
                <div className="swiper-container swiper-container-horizontal ">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide swiper-slide-active hotWord-item ">
                            <a href="#" className="hotWordColor">推荐</a>
                        </div>
                        <div  className="swiper-slide hotWord-item">
                            <a href="#/types" >童装</a>
                        </div>
                        <div className="swiper-slide hotWord-item">
                            <a href="#/types">童鞋</a>
                        </div>
                        <div className="swiper-slide hotWord-item">
                            <a href="#/types">婴童用品</a>
                        </div>
                        <div className="swiper-slide hotWord-item">
                            <a href="#/types">女装</a>
                        </div>
                        <div className="swiper-slide hotWord-item">
                            <a href="#/types">鞋包</a>
                        </div>
                        <div className="swiper-slide hotWord-item">
                            <a href="#/types">居家</a>
                        </div>
                        <div className="swiper-slide hotWord-item">
                            <a href="#/types">美妆</a>
                        </div>
                        <div className="swiper-slide hotWord-item">
                            <a href="#/types">美食</a>
                        </div>
                        <div className="swiper-slide hotWord-item">
                            <a href="#/types">下期预告</a>
                        </div>
                    </div>
                </div>

                <div className="hotWord-right">
                    <span className="opacity"></span>
                    <a href="#list">
                    <span className="listSearch iconfont icon-sousuo2-my001">
                    </span>
                    </a>
                    
                </div>
           </div>
        )
    }
   
}

export default Todaynav