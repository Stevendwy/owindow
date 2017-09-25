/*
* @Author: steven
* @Date:   2017-09-19 14:41:15
* @Last Modified by:   steven
* @Last Modified time: 2017-09-19 16:23:39
*/
import React from 'react';
import PropTypes from 'prop-types';

const Link = ({active,children,onClick})=>{
	if (active) {
		return <span>{children}</span>
	}

	return(
		//eslint-disable-next-line
		<a href="#"
			onClick={e=>{
				e.preventDefault()
				onClick()
			}}>
			{children}
		</a>
		)
}

Link.propTypes = {
	active:PropTypes.bool.isRequired,
	children:PropTypes.node.isRequired,
	onClick:PropTypes.func.isRequired
}

export default Link