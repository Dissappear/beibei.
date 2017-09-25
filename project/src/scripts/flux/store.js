
console.log(localStorage.todos.length)
const EventEmitter = require("events").EventEmitter
const store = Object.assign({},EventEmitter.prototype,{
    count:localStorage.todos&&localStorage.todos.length>2?JSON.parse(localStorage.todos)[JSON.parse(localStorage.todos).length-1].id:1,
    todos:localStorage.todos&&localStorage.todos.length>2?JSON.parse(localStorage.todos):[
        {id:1,title:'下班回家买菜',isFinished:false}
    ],
    getAll(){
        return this.todos
    },
    addNew(title){
        this.count++;
        this.todos.push({
            id:this.count,
            title,
            isFinished:false
        })
        console.log('6.store方法被调用之后更改数据，然后触发事件')
        this.emit("todos-change")
        localStorage.todos=JSON.stringify(this.todos)
    },
    finishTodo(id){
    	for(var i =0;i<this.todos.length;i++){
    		if(this.todos[i].id==id){
    			this.todos[i].isFinished=!this.todos[i].isFinished
    			break;
    		}
    	}
    	this.emit("todos-change")
    	localStorage.todos=JSON.stringify(this.todos)
    },
    removeTodo(id){
    	for(var i =0;i<this.todos.length;i++){
    		if(this.todos[i].id==id){
    			this.todos.splice(i,1)
    			break;
    		}
    	}
    	this.emit("todos-change")
    	localStorage.todos=JSON.stringify(this.todos)
    },
    addChangeListener(callback){
    	
        this.on("todos-change",callback)
    }
})


export default store