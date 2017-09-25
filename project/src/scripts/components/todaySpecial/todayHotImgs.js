


class todayHotImgs extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {

        }
    }
   
    render() {
        return (
            <div className="todayHotImgs">
                <div className="today-imgs-left">
                    <img src="http://h0.hucdn.com/images/201731/a520e33a564f8e4d_310x430.jpg" alt=""/>
                </div>
                <div className="today-imgs-right">
                    <div className="today-imgs-right__item">
                        <img src="http://h0.hucdn.com/images/201731/e699d8553f160197_220x215.jpg" alt=""/>
                    </div>
                    <div className="today-imgs-right__item">
                        <img src="http://b2.hucdn.com/upload/hmp/1703/22/64874481497252_220x215.png" alt=""/>
                    </div>
                    <div className="today-imgs-right__item">
                        <img src="http://h0.hucdn.com/images/201731/20374f313f60fd41_220x215.jpg" alt=""/>
                    </div>
                    <div className="today-imgs-right__item">
                        <img src="http://h0.hucdn.com/images/201731/2a59551786148d78_220x215.png" alt=""/>
                    </div>
                </div>
            </div>
        )
    }

}

export default todayHotImgs