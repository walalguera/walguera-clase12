import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Inicio from './page/incio';
import {ProductosList} from './page/productos';
import {ProductoDetalles} from './page/productos/ProductosDetalles';

exports default function Page ()  {
	return(
		<section>
			<Switch>
				<Route path='/' exact component={Inicio} />
				<Route path='/productos' exact component={ProductosList} />
				<Route path='producto/:id' exact component={ProductoDetalles} />
			</Switch>
		</section>
		);
}