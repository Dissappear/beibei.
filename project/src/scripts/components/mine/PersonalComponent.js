
import {connect} from 'react-redux'

// import  Navsfooter  from "../NavsFooter"

class PersonalComponent extends React.Component {
    
    constructor(props,context) {
        super(props,context)
        this.state ={
            userID:'',
            password:''
        }
    }
    conponentDidMount(){
        console.log(state)
    }
    render() {
        
        return (
            <div className="mine_container">
                <div className="mine_header">
                    <div className="mine_box">
                        <div className="mine_portrait"><a href=""></a></div> 
                    </div>
                        
                    <div className="mine_right">
                        <p className="mine_nick">{this.props.user.name||'未登录'}</p>
                        <p className="mine_age">宝宝年龄：<span>0岁</span></p>
                    </div>
                </div>
                 <div className="mine_nav">
                        <p><i htmlFor="" className="iconfont icon-yingerche "></i>收藏</p>
                        <p><i htmlFor="" className="iconfont icon-icon019 "></i>我的拼团</p>
                        <p><i htmlFor="" className="iconfont icon-yingerche "></i>足迹</p>
                </div>
                <div className="mine_banner"></div>
                <div className="mine_order">
                    <a href="">
                        我的订单
                        <span>查看全部订单 》</span>
                    </a>
                </div>
                <div className="mine_sumbox">
                    <ul>
                        <li>
                            <span><i htmlFor="" className="iconfont icon-yingerche "></i></span>
                            <span>待付款</span>
                        </li>
                        <li>
                            <span><i htmlFor="" className="iconfont icon-icon019 "></i></span>
                            <span>待收货</span>
                        </li>
                        <li>
                            <span><i htmlFor="" className="iconfont icon-yingerche "></i></span>
                            <span>评价返现</span>
                        </li>
                        <li>
                            <span><i htmlFor="" className="iconfont icon-icon019 "></i></span>
                            <span>我的售后</span>
                        </li>
                    </ul>
                </div>
                <div className="mine_wallet">
                    <a href="">我的钱包</a>
                </div>
                <div className="mine_store">
                    <ul>
                        <li><span>4张</span><span>现金券</span></li>
                        <li><span>0个</span><span>贝壳</span></li>
                        <li><span>￥0.00</span><span>余额</span></li>
                    </ul>
                </div>
                <div className="mine_info">
                    <ul>
                    
                        <li><label htmlFor="" className="iconfont icon-icon019 "></label><a href=""><span>收货地址</span><span>》</span></a></li>
                        <li><label htmlFor="" className="iconfont icon-icon019 "></label><a href=""><span>客服中心</span><span>》</span></a></li>
                        <li><label htmlFor="" className="iconfont icon-icon019 "></label><a href=""><span>会员卡</span><span>铂金卡享9折【进入领红包】》</span></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        user:state.userInfo
    }
}
// const mapStateToProps = state=>state;

export default connect(mapStateToProps)(PersonalComponent)