/*
* @Author: steven
* @Date:   2017-09-19 15:04:29
* @Last Modified by:   steven
* @Last Modified time: 2017-09-19 15:07:03
*/

let nextTodoId = 0
export const addTodo = (text) => ({
	type:'ADD_TODO',
	id:nextTodoId++,
	text
})

export const setVisibilityFilter = (filter) =>({
	type:'SET_VISIBILITY_FILTER',
	filter
})

export const toggleTodo = (id) =>({
	type:'TOGGLE_TODO',
	id
})