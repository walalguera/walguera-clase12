import React, {useContext} from 'react';
import {DataContext} from 'context/DataProvider';
import {ProductoItem} from './productos/ProductoItem.js';

export const ProductosLista = () => { 
    const value= useContext(DataContext)
    const [productos] = value.productos;
    return ( 
        <>
        <h1 className='produ'>PRODUCTOS</h1>
        <div className='productos'
            {
            productos.map(Producto =>(
            <ProdurctoItem
            key={producto.id}
            title={producto.title}
            image={producto.iamge}
            category={producto.categoria}
            price={producto.precio}
            id={producto.id}
                            />
                        ))
            }
        </div>
            </>
            )
        }


 
