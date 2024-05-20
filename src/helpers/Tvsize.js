function Tvsize(sizes) {

    let productSize = '';


    for (let i = 0; i < sizes.length; i++) {

        let firstSize = sizes[i]
        let secondSize = Math.round(sizes[i] * 2.54)

        productSize = productSize + ` ${firstSize} inch (${secondSize} cm)`


        if (i < sizes.length - 1) {

            productSize = `${productSize} |`;
        }

    }


    return productSize

}

export default Tvsize

// let tvSizeNew = bestSellingTv.availableSizes.map((availablesize) =>
// {
//     return ( availablesize+ ' inch ' + '('+  Math.round(availablesize * 2.54) + ' cm) ')
// }
// )
// export let tvsize = tvSizeNew.join(' | ')

// let tvSizeProducts = inventory.map((availablesizeproducts) =>
//     {
//         return ( availablesizeproducts.availableSizes+ ' inch ' + '('+  Math.round(availablesizeproducts.availableSizes * 2.54) + ' cm) ')}
//     )
//
// export let sizeProducts = tvSizeProducts.join(' | ')
//
// console.log(sizeProducts
//``