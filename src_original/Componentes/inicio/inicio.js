import React from 'react';
import {Link} from 'react-router-dom';
import Portada from '../../images/imag01.jpg'

export default function Inicio(){
	return (
		<div className='inicio'>
			<link to='/'>
			<h1>Home</h1>
			</Link>
			<link to='productos'>
			<H1>Productos</H1>
			</link>>
			<img src="{Portada}" alt="" />
		</div>
		)
}
