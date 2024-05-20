import {inventory} from "../constants/inventory.js";

function Amountsold(){

    let totalamount = 0

    for (let i = 0; i < inventory.length; i++) {

        totalamount = totalamount + inventory[i].sold

    }

    return totalamount
}

export default Amountsold