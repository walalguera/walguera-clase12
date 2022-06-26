import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Inicio} from './page/incio';
import {ProductosList} from './page/productos';
import {ProductoDetalles} from './page/productos/ProductosDetalles';

exports default function Page ()  {
	return(
		<section>
			<Routes>
				<Route path='/' exact element={<Inicio/>} />
				<Route path='/productos' exact element={<ProductosList/>} />
				<Route path='producto/:id' exact element={<ProductoDetalles/>} />
			</Routes>
		</section>
		);
}