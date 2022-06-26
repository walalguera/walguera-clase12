
import React from 'react';
import Nike from '../images/Nike.jpg';

export const header = () => { 
return ( 
<header>
<a href="#">
<div className="logo">
<img src={Nike} alt = "logo" width="150" />
</div>
</a>
<ul>
<li>
<a href="#">Inicio</a>
</li>
<li>
<a href="#">Productos</a>
</li>
</ul>
<div className="cart">
<box-icon name ="cart"></box-icon>
<span classname="item_total">
</span>
</div>

</header>

);
}
export default header;