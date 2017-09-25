
import  MineComponent_register  from "./MineComponent-register"
import  MineComponent_login  from "./MineComponent-login"
import  PersonalComponent  from "./personalComponent"
import  Navsfooter  from "../NavsFooter"
import  {connect} from 'react-redux'
import  actions from '../../redux/actions'
class MineComponent extends React.Component {
    
    constructor(props,context) {
        super(props,context)
        this.state ={
            
        }
    }
    componentWillMount(){
        //console.log(this.props)
    }
    login(info){
        console.log(info)
        actions.changeUserInfo(info)
    }


    render() {
        //把userinfo从this.props中取出来
        let{userInfo} = this.props
        return (
            <div className="mine">
                {
                    userInfo.name?<PersonalComponent/>:<MineComponent_login login={this.login.bind(this)}/>
                }

                <Navsfooter color="/mine"/> 
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

export default connect(state=>state)(MineComponent)