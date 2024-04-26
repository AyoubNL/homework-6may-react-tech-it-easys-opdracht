import {bestSellingTv} from "./inventory.js";
let tvSizeNew = bestSellingTv.availableSizes.map((availablesize) =>
{
    return ( availablesize+ ' inch ' + '('+  Math.round(availablesize * 2.54) + ' cm) ')
}
)


export let tvSize = tvSizeNew.join(' | ')



