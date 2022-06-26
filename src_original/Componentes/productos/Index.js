import React from 'react';
import IMG from '../../images/imag01.jpg';


export const Productoslista = () => {
    return (
        <>
        <h1 className='title'>PROUDTOS</h1>
          <div className='productos'></div>
          <a href="#">
            <div className='producto_img'>
                <img src="{IMG}" alt="" />
            </div>
          </a>
          <div className='producto__footer'>
            <h1>title</h1>
            <p>Categoria </p>
            <p className='price'>$320</p>
          </div>
          <div className='buttom'>
            <button className='btn'>Añadir al carrito</button>
                <div>
                    <a href="#" className='btn'>

                        Vista
                    </a>
                </div>
          </div>
        </div>
        <div className='productos'></div>
        <a href="#">
        
            <div className='producto_img'>
                <img src="{IMG}" alt="" />
            </div>
        </a>
        <div className='producto__footer'>
        <h1>title</h1>
        <p>Categoria</p>
        <p className='price'>$520 </p>
        </div>
        <div className='buttonm'>
         <button className='btn'>Añadir al carrito</button>
         <div>
            <a href="#" className='btn'>

                Visita
            </a>
         </div>   
        </div>
        </div>
        <div className='productos'></div>
        <a href="#">

            <div className='producto_img'>
                <img src="{IMG}" alt="" />
            </div>
        </a>
        );
}



