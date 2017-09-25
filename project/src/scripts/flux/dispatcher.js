
import store from './store'
const Dispatcher = require('flux').Dispatcher
const dispatcher = new Dispatcher()

dispatcher.register((action)=>{
	console.log('4.dispatcher接收到actioncreator传递过来的信息，马上对信息进行判断')
    switch (action.type) {
        case 'ADD_NEW':
        console.log('5.dispatcher根据判断结果，调用store更改数据的方法')
          store.addNew(action.title)  
            break;
    	case 'FINISH_TODO':
    		store.finishTodo(action.id)
    		break;
    	case 'REMOVE_TODO':
    		store.removeTodo(action.id)
    		break;
        default:
            break;
    }
})

export default dispatcher