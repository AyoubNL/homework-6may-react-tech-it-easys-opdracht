import {inventory} from "../constants/inventory.js";

function Lowprice() {

    inventory.sort((a,b) => {

        return a.price - b.price

    })

    console.log(inventory)
}

export default Lowprice




// let lowprice = inventory.sort((a, b)  => {
//
// return a.price - b.price
//
// })


// export default lowprice