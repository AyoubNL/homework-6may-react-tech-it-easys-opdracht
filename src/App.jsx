import './App.css';
import './constants/sold.js';
import {useEffect} from "react";
import {amountSold} from "./constants/sold.js";
import {amountBought} from "./constants/bought.js";
import {available} from "./constants/available.js";
import {tvName} from "./constants/tvname.js";
import {tvPrice} from "./constants/tvprice.js";
import {tvSize} from "./constants/tvsize.js";
import minus from "./assets/minus.png";
import check from "./assets/check.png";



function App() {

    useEffect(() => {
        document.getElementById('amountSold').innerText = amountSold
        document.getElementById('amountBought').innerText = amountBought
        document.getElementById('available').innerText = available
        document.getElementById('tvname').innerText = tvName
        document.getElementById('tvprice').innerText = tvPrice
        document.getElementById('tvsize').textContent = tvSize
    }, []);

    function mostSold (){
        console.log('Meest verkocht eerst')
    }

    function cheap (){
        console.log('Goedkoopste eerst')
    }

    function use (){
        console.log('Meest geschikt voor sport eerst')
    }


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

                <span><img src={check}/>wifi<img src={minus}/>speech<img
                    src={check}/>hdr<img src={check}/>bluetooth<img
                    src={minus}/>ambilight</span>
            </div>

            <p>Alle tv's</p>

            <button onClick={mostSold}>Meest verkocht eerst</button>
            <button onClick={cheap}>Goedkoopste eerst</button>
            <button onClick={use}>Meest geschikt voor sport eerst</button>


        </div>
    );
}

export default App
