/*
* @Author: steven
* @Date:   2017-09-19 13:46:38
* @Last Modified by:   steven
* @Last Modified time: 2017-09-19 14:00:36
*/
const visibilityFilter = (state = 'SHOW_ALL',action) => {
	switch (action.type){
		case 'SET_VISIBILITY_FILTER':
			return action.filter
		default :
			return state
	}
}

export default visibilityFilter