
//actioncreator里有很多的方法，这些方法供view来调用的

//可以写一些异步操作，例如，view点击按钮后触发actions里面的某一个方法来动态来获取数据，然后再去更改store

import dispatcher from './dispatcher'
const actioncreator = {
    addNew(title){
    	console.log('3.actioncreator方法被调用，创建一个action，传递给dispatcher')
        let action = {
            title:title,
            type:'ADD_NEW'
        }
        dispatcher.dispatch(action)
    },
    finishTodo(id){
    	
    	dispatcher.dispatch({
    		id,
    		type:'FINISH_TODO'
    	})
    },
    removeTodo(id){
    	dispatcher.dispatch({
    		id,
    		type:'REMOVE_TODO'
    	})
    }
}

export default actioncreator