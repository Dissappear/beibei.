

import {Link} from "react-router"

class NavsFooter extends React.Component{
    constructor(props,context) {
        super(props,context)
        this.state= {

        }
    }
    render() {
        let {color} = this.props
        return (
            <div className="navsfooter">

                <Link to="/today" className={color=="/today"?"changePink":""}>
                    <span className="iconfont icon-icon019"></span>
                    <span>今日特卖</span>
                </Link>
                <Link to="/pintuan" >
                    <span className="iconfont icon-pintuan"></span>
                    <span>拼团</span>
                </Link>
                <Link to="/looknew" className={color=="/looknew"?"changePink":""}>
                    <span className="iconfont icon-kan"></span>
                    <span>逛新品</span>
                </Link>
                <Link to="/buycar" className={color=="/buycar"?"changePink":""}>
                    <span className="iconfont icon-yingerche"></span>
                    <span>购物车</span>
                </Link>
                <Link to="/mine" className={color=="/mine"?"changePink":""}>
                    <span className="iconfont icon-yinger"></span>
                    <span>我的</span>
                </Link>
            </div>
            
        )
    }
}

NavsFooter.defaultProps = {
    color:"/today"
}

export default NavsFooter