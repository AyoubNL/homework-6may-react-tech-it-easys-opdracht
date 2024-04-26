import {bestSellingTv} from "./inventory.js";

export let tvSize = bestSellingTv.availableSizes.map((availablesize) =>
{
    return ( availablesize+ ' inch ' + '('+  Math.round(availablesize * 2.54) + ' cm) ')
}
)



