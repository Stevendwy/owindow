/*
* @Author: steven
* @Date:   2017-09-19 13:46:38
* @Last Modified by:   steven
* @Last Modified time: 2017-09-19 13:57:40
*/
const todos = (state = [],action) => {
	switch (action.type){
		case 'ADD_TODO':
			return [
			...state,{
				id:action.id,
				text:action.text,
				completed:false
			}
		]
		case 'TOGGLE_TODO':
			return state.map(todo => 
				(todo.id === action.id) ? {...todo,completed : !todo.completed}:todo)
		default:
			return state
	}
}

export default todos