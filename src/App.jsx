import './App.css';
import './constants/sold.js';
import {useEffect} from "react";
import {amountSold} from "./constants/sold.js";
import {amountBought} from "./constants/bought.js";
import {available} from "./constants/available.js";
import {tvName} from "./constants/tvname.js";
import {tvPrice} from "./constants/tvprice.js";
import {tvSize} from "./constants/tvsize.js";


function App() {

    useEffect(() => {
        document.getElementById('amountSold').innerText = amountSold
        document.getElementById('amountBought').innerText = amountBought
        document.getElementById('available').innerText = available
        document.getElementById('tvname').innerText = tvName
        document.getElementById('tvprice').innerText = tvPrice
        document.getElementById('tvsize').textContent = tvSize
    }, []);

    return (<div>
            <h1>Tech it easy dashboard</h1>
            <p>Verkoopoverzicht</p>
            <section className='products'>
                <article>Aantal verkochte producten <p id='amountSold'></p></article>
                <article>Aantal ingekochte producten <p id='amountBought'></p></article>
                <article>Aantal te verkopen producten <p id='available'></p></article>
            </section>

            <p>Beste verkochte tv</p>

            <div className='bestselling'>
                <img className='samsung' src="src/assets/samsung.jpg"/>

                <span id={'tvname'}></span>
                <span id={'tvprice'}></span>
                <span id={'tvsize'}></span>

                <span><img src="src/assets/check.png"/>wifi<img src="src/assets/minus.png"/>speech<img
                    src="src/assets/check.png"/>hdr<img src="src/assets/check.png"/>bluetooth<img
                    src="src/assets/minus.png"/>ambilight</span>
            </div>

            <p>Alle tv's</p>

            <button>Meest verkocht eerst</button>
            <button>Goedkoopste eerst</button>
            <button>Meest geschikt voor sport eerst</button>


        </div>
    );
}

export default App
