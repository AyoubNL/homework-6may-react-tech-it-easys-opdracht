import {inventory} from "../constants/inventory.js";


function Sport () {

    inventory.sort((a,b)=> {

        return b.refreshRate - a.refreshRate

    })

    console.log(inventory)

}




export default Sport



// const sport = inventory.sort((a,b)=>
//
//     {
//         return b.refreshRate - a.refreshRate
//
//     }
//
// )
//
// // export default sport



