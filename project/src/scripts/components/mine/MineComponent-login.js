import $ from 'jquery'
// import {connect} from 'react-redux'
// import  MineComponent  from "./MineComponent"

class MineComponent_login extends React.Component {
    constructor(props,context) {
        super(props,context)
        this.state ={
            userID:'',
            password:''
        }
    }
    componentDidMount(){
        console.log(this)
    }
    
    login(){
        let that = this
        $.ajax({
            url:'http://datainfo.duapp.com/shopdata/userinfo.php',
            data:{
                status:'login',
                userID:that.state.userID,
                password:that.state.password
            },dataType:'json',
            success(results){
                console.log(results)
                that.props.login({name:results.userID})
            }
        })
    }
    changeValue(type,e){
        let obj = {}
        obj[type]=e.target.value
        this.setState(obj)
    }
    render() {
        return (
            <div className="mine_login">             
                     {/* {this.props.user.name||'未登录'} */}
                    <input onBlur={this.changeValue.bind(this,'userID')} type="text" className="userName" placeholder="请输入手机号码/邮箱"/>
                         <label htmlFor="" className="iconfont icon-kan userIcon"></label>
                    <input onBlur={this.changeValue.bind(this,'password')} type="text" className="userPassword" placeholder="请输入6-16位密码"/>
                         <label htmlFor="" className="iconfont icon-icon019 passIcon"></label>
                         <div className="pass">
                             <input type="text" className="userYanzheng" placeholder="请输入四位验证码"/>  
                             <span>ABCD</span>
                         </div>
                    <div className="fastBtn"><button onClick={this.login.bind(this)} className="fastLogin">立即登录</button></div>

                <p className="loginNav">
                    <a href="/mineR" className="newPeople" >新人注册</a>
                    <span className="phoneFast">手机号快速登录</span>
                    <span className="forgetPassword">忘记密码</span>
                </p>
            </div>
        )
    }
}
// const mapStateToProps = (state)=>{
//     return {
//         user:state.userInfo
//     }
// }
// const mapStateToProps = state=>state;

export default MineComponent_login
