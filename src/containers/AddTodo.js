/*
* @Author: steven
* @Date:   2017-09-19 14:47:30
* @Last Modified by:   steven
* @Last Modified time: 2017-09-19 16:33:19
*/
import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

let AddTodo = ({dispatch})=>{
	let input
	return(
		<div>
			<form onSubmit={e=>{
				e.preventDefault()
				if(!input.value.trim()){
					return
				}
				dispatch(addTodo(input.value))
				input.value=''
			}}>
			<input ref={node =>{
				input = node
			}}/>
			<button type="submit">
				Add Todo
			</button>
			</form>
		</div>
	)
}
AddTodo = connect()(AddTodo)

export default AddTodo