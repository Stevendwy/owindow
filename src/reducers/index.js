/*
* @Author: steven
* @Date:   2017-09-19 13:46:38
* @Last Modified by:   steven
* @Last Modified time: 2017-09-19 13:49:39
*/
import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
	todos,
	visibilityFilter
})

export default todoApp