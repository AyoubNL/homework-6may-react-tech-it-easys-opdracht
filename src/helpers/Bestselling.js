import {inventory} from "../constants/inventory.js";


function Bestselling () {
    inventory.sort((a, b) =>
    {
        return b.sold - a.sold
    });

console.log(inventory)
}

export default Bestselling



// let bestselling = inventory.sort((a, b) => {
//     return b.sold - a.sold;
// })
//
//
// export default bestselling

