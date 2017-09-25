//第一个参数可以设置状态的默认值，不需要返回状态，返回值是什么，状态就是什么；

const reducer = (state={
	userInfo:{name:''}
},action)=>{
	let _state
	switch(action.type){
		case 'CHANGE_USER_INFO':
			_state = {}
			_state.userInfo = action.info
			return _state
			break;
        default :
            return state;
            break;
    }
}

export default reducer

