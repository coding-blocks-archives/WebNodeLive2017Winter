$(function () {

    let productList = $('#product-list')

    fetchProducts(function (products) {
        productList.empty()
        for (product of products) {
            productList.append(createProductCard(product))
        }
    })

})