

import Navsfooter from "../NavsFooter"

class GroupBuyComponent extends React.Component{
    constructor(props,context) {
        super(props,context)
        this.state= {

        }
    }
    render() {
        return (
            <div style={{
                width:"100%",
                height: "100%",
                textAlign:"center",
                lineHeight:"100%",
                fontSize:"50px",
                color: "red"
            }}>
                 <p> 开发中敬请期待！！！ </p>

                 <Navsfooter color="/looknew" />
            </div>
        )
    }
}
export default GroupBuyComponent