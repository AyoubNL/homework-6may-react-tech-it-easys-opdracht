import {amountSold} from "./sold.js";
import {amountBought} from "./bought.js";

export let available = (amountBought - amountSold)