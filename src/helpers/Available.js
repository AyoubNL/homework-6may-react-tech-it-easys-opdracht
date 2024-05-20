import Amountsold from "./Amountsold.js";
import Amountbought from "./Amountbought.js";


function Available() {

   return Amountbought() - Amountsold()
}

export default Available