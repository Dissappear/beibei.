
import NavsFooter from "../NavsFooter"
import TodayNav from "./Todaynav"
import TodayBanner from "./TodayBanner"
import TodayHotImgs from "./todayHotImgs"
import Todaygoods from "./todaygoods"

class TodatSpecial extends React.Component{
    constructor(props,context) {
        super(props,context)
        this.state={
            type:'foryou'
        }

    
    } 
   
    getInitialState() {
        return {
            type:'foryou'
        }
    }
    changeType(type) {
        this.setState({
            type:type
        })
    }
    render() {
        return (
            <div >
                <TodayNav/>
                <TodayBanner/>
                <TodayHotImgs/>
                <Todaygoods/>
                <NavsFooter/>
            </div>
        )
    }
   
}

export default TodatSpecial