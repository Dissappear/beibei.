import Navsfooter from "../NavsFooter"

import LooknewList from "./LooknewList"

// import LookNewHeader from "./LookNewHeader"

import Jsonp from "jsonp"

import Fetch from '../../modules/fetch'

class LookNewComponent extends React.Component {
    
    constructor(props, context) {
        
        super(props, context)
        this.state = {
            goodList:[],
            whichOne:""
        }
    }
   
    render() {
        
        return ( 
            <div>
                <div className="nav-container">
                    <div className="nav-list swiper-wrapper">  
                        <span className="nav-item swiper-slide " data-cate="" onClick={this.changeWhichOne.bind(this,"")}><b   className={this.state.whichOne==""?"checkedPink":""}>精选</b></span>  
                        <span className="nav-item swiper-slide" data-cate="activity" onClick={this.changeWhichOne.bind(this,"activity")}><b className={this.state.whichOne=="activity"?"checkedPink":""}>买一送一</b></span>  
                        <span className="nav-item swiper-slide" data-cate="9kuai9" onClick={this.changeWhichOne.bind(this,"9kuai9")}><b className={this.state.whichOne=="9kuai9"?"checkedPink":""}>9.9元</b></span>  
                        <span className="nav-item swiper-slide" data-cate="nvzhuang" onClick={this.changeWhichOne.bind(this,"nvzhuang")}><b className={this.state.whichOne=="nvzhuang"?"checkedPink":""}>女装</b></span>  
                        <span className="nav-item swiper-slide" data-cate="tongzhuang" onClick={this.changeWhichOne.bind(this,"tongzhuang")}><b className={this.state.whichOne=="tongzhuang"?"checkedPink":""}>童装</b></span>  
                        <span className="nav-item swiper-slide" data-cate="tongxie" onClick={this.changeWhichOne.bind(this,"tongxie")}><b className={this.state.whichOne=="tongxie"?"checkedPink":""}>童鞋</b></span>  
                        <span className="nav-item swiper-slide" data-cate="wanju" onClick={this.changeWhichOne.bind(this,"wanju")}><b className={this.state.whichOne=="wanju"?"checkedPink":""}>玩具</b></span>  
                        <span className="nav-item swiper-slide" data-cate="xiebao" onClick={this.changeWhichOne.bind(this,"xiebao")}><b className={this.state.whichOne=="xiebao"?"checkedPink":""}>鞋包</b></span>  
                        <span className="nav-item swiper-slide" data-cate="yongpin" onClick={this.changeWhichOne.bind(this,"yongpin")}><b className={this.state.whichOne=="yongpin"?"checkedPink":""}>用品</b></span>  
                        <span className="nav-item swiper-slide" data-cate="jujia" onClick={this.changeWhichOne.bind(this,"jujia")}><b className={this.state.whichOne=="jujia"?"checkedPink":""}>居家</b></span>  
                        <span className="nav-item swiper-slide" data-cate="meizhuang" onClick={this.changeWhichOne.bind(this,"meizhuang")}><b className={this.state.whichOne=="meizhuang"?"checkedPink":""}>美妆</b></span>  
                    </div> 
                </div>
                <div className="zhanwei"></div>
                <LooknewList  whichOne = {this.state.whichOne}  isLoading={this.state.isLoading}/>
                
                <Navsfooter color="/looknew" />
            </div>
        )
    }
    // componentDidMount() {
    //     this.setState({
    //         whichOne:this.refs.header.state.whichOne
    //     })
    //     // this.state.whichOne=this.refs.header.state.whichOne
        
    // }
    changeWhichOne(type,e) {
        console.log(1)
        e.preventDefault();
        this.setState({
            whichOne:type
        })
        this.state.whichOne = type;
     }
     componentDidMount(){
        
        this.state.swiper=new Swiper(".nav-container",{
            freeMode : false,
            slidesPerView : 'auto',
            freeModeSticky : true 

        })
    }

}

export default LookNewComponent