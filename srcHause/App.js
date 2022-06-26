
import './index.css';
import Productoslistas from './hojas-de-estilo/Productoslista.css';
import { Header } from './componentes/Header.js';
import { Productoslista }  from './componentes/Productos.js';
import { ProductoItem } from './componentes/ProductoItem.js';
import Data from './Data.js'
import 'boxicons';

function App() {
  return (
    <div className="App">
            <Header />
            <Productoslista />
            <ProductoItem />
            <Data />
            <ProductoItem 
             key='1' 
             title='Titulo'
             image=''
             category='cat'
             price='10'
             id='1'
             />
    </div>
  );
}

export default App;
