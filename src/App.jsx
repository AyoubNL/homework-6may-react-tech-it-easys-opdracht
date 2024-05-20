import './App.css';
import Amountbought from "./helpers/Amountbought.js";
import Tvprice from "./helpers/Tvprice.js";
import minus from "./assets/minus.png";
import check from "./assets/check.png";
import {bestSellingTv, inventory} from "./constants/inventory.js";
import Sport from "./helpers/Sport.js";
import Bestselling from "./helpers/Bestselling.js";
import Lowprice from "./helpers/Lowprice.js";
import Amountsold from "./helpers/Amountsold.js";
import Available from "./helpers/Available.js";
import Tvname from "./helpers/Tvname.js";
import Tvsize from "./helpers/Tvsize.js";


function App() {
    // function mostSold() {
    //     console.log('Meest verkocht eerst')
    // }
    //
    // function cheap() {
    //     console.log('Goedkoopste eerst')
    // }
    //
    // function use() {
    //     console.log('Meest geschikt voor sport eerst')
    // }


    return (<div>
            <h1>Tech it easy dashboard</h1>
            <p>Verkoopoverzicht</p>
            <section className='products'>
                <article>Aantal verkochte producten <p>{Amountsold()}</p></article>
                <article>Aantal ingekochte producten <p>{Amountbought()}</p></article>
                <article>Aantal te verkopen producten <p>{Available()}</p></article>
            </section>

            <p>Beste verkochte tv</p>

            <div className='bestselling'>
                <img className='tvfoto' src={bestSellingTv.sourceImg} alt="Afbeelding van het product"/>

                <span className='tvnamelayout'>{Tvname(bestSellingTv)}</span>
                <span className='tvpricelayout'>{Tvprice()}</span>
                <span className='tvsizelayout'>{Tvsize(bestSellingTv.availableSizes)}</span>

                <span><img src={check}/>wifi<img src={minus}/>speech<img
                    src={check}/>hdr<img src={check}/>bluetooth<img
                    src={minus}/>ambilight</span>
            </div>

            <p>Alle tv</p>

            <button type='button' onClick={Bestselling}>Meest verkocht eerst
            </button>
            <button type='button' onClick={Lowprice}>Goedkoopste eerst
            </button>
            <button type='button' onClick={Sport}>Meest geschikt voor sport eerst
            </button>

            {/*<Range/>*/}

            {inventory.map((product, index) => {

                return (

                    <div key={index} className='bestselling'>
                        <img className='tvfoto' src={product.sourceImg} alt="Afbeelding van het product"/>

                        <span className='tvnamelayout'>{Tvname(product)}</span>
                        <span className='tvpricelayout'>{Tvprice(product.price)}</span>
                        <span className='tvsizelayout'>{Tvsize(product.availableSizes)}</span>


                        {/*<img src={check}/>wifi<img src={minus}/>speech<img*/}
                        {/*src={check}/>hdr<img src={check}/>bluetooth<img*/}
                        {/*src={minus}/>ambilight</span>*/}


                    </div>

                )
            })}
        </div>
    );
}

export default App
