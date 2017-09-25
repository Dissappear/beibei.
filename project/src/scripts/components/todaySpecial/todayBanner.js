


class todayBanner extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {

        }
    }
    componentDidMount(){
        this.state.swiper=new Swiper(".bannerImgs",{
           loop:true,
           autoplay:2000,
           autoplayDisableOnInteraction:true,
           pagination:'.swiper-pagination',
           paginationClickable:true
        })
    }
    render() {
        return (
            <div className="todayBanner">
                <div className="swiper-container bannerImgs swiper-container-horizontal ">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide swiper-slide-active ">
                        <img  className ="todayBanner-img" src="http://h0.hucdn.com/images/201738/68d060ffaf160f83_750x250.jpg!gg.jpg?webp=0" alt=""/>
                         </div>
                        <div className="swiper-slide">
                        <img  className ="todayBanner-img" src="http://h0.hucdn.com/images/201726/c3fcc5657a39af12_750x250.jpg!gg.jpg?webp=0" alt=""/>
                        </div>
                        <div className="swiper-slide">
                        <img  className ="todayBanner-img" src="http://h0.hucdn.com/images/201733/7f2bdd1c12a17282_750x250.jpg!gg.jpg?webp=0" alt=""/>
                        </div>
                        <div className="swiper-slide ">
                        <img  className ="todayBanner-img" src="http://h0.hucdn.com/images/201734/cac9daa093f6d3be_750x250.jpg!gg.jpg?webp=0" alt=""/>
                        </div>
                        <div className="swiper-slide ">
                        <img  className ="todayBanner-img" src="http://h0.hucdn.com/images/201733/63d37827ba32133a_750x250.jpg!gg.jpg?webp=0" alt=""/>
                        </div>

                    </div>
                    <div className="swiper-pagination"></div>
                </div>

              
           </div>
        )
    }

}

export default todayBanner