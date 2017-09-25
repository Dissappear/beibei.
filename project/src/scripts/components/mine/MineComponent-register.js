


// import  MineComponent  from "./MineComponent"

class MineComponent_register extends React.Component {
    constructor(props,context) {
        super(props,context)
        this.state ={
            
        }
    }
    render() {
        return (
            <div className="mine_register">
                
                <input type="text" className="userPhoneName" placeholder="请输入手机号"/>
                      <button className="btnFind">获取验证码</button>
                      <label htmlFor="" className="iconfont icon-yinger DL-yzm"></label>
                
                <input type="text" className="userPhonePassword iconfont icon-yinger" placeholder="请输入短信验证码"/>
                      <label htmlFor="" className="iconfont icon-yinger DX-yzm"></label>
                <input type="text" className="userYanzheng" placeholder="请设置密码(6-16个字符)"/>
                      <label htmlFor="" className="iconfont icon-yinger SZ-mm"></label>
                <div className="fastBtn"><button className="fastLogin">免费注册</button></div>
                <p className="agreement">
                    <h4>注册贝贝,即表示您同意</h4>
                    <h4><span>( 贝贝网使用协议 )和( 社区使用协议 )</span></h4>
                </p>
              
            </div>
        )
    }
}

export default MineComponent_register