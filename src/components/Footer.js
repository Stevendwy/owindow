/*
* @Author: steven
* @Date:   2017-09-19 14:41:15
* @Last Modified by:   steven
* @Last Modified time: 2017-09-19 14:44:59
*/
import React from 'react';
import FilterLink from '../containers/FilterLink';

const Footer = ()=>(
	<p>
		show:
		{""}
		<FilterLink filter="SHOW_ALL">All</FilterLink>
		{","}
		<FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
		{","}
		<FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
	</p>
)

export default Footer