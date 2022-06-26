import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import {DataCenter} from '../context/DataProvider.js';
import {DataContext} from '../context/DataProvider.js';

export const ProductoItem = ({key, tittle, image, category, price, id}) => {



const value = useContext(DataContext);
const addCarrito = value.addCarrito;



return (

	<div key={id} className='producto'>
		<link to={`/producto/${id}`}> 
			<div className='producto__img'>
				<img src={image} alt={title} />
			</div>
		</link>
		<div className='producto__footer'>
			<h1>{title}</h1>
			<p>{category}></p>
			<p className='price'>${price}</p>
		</div>
		<div className='bottom'> 
			<button onClick={() => addCarrito(id)} className='btn'>Añadir al carrito></button>
		</div>
			<link to ={`/producto/${id}`}> className='btn'>Vista</link>
	</div>
	);
}
