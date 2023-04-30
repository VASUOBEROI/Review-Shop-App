const fs=require('fs');
const path=require('path');
const rootDir=require('../utils/path');

const storePath=path.join(rootDir,'data','cart.json');

// Cart functionality:
// Add Product to Cart.
// Delete Product to Cart.

module.exports=class Cart{
 static addProduct(productId,productPrice)
 {
    // Cart will be a Object that will have 2 key value pairs.
    // First will be array of product objects and second key value pair will be TotalPrice.
    // Each element of the Array : Product Object will have 2 key value pairs : ProdId,Qty.

     fs.readFile(storePath,(err,fileContent)=>{
        let cart={products:[],totalPrice:0};
        if(!err)
        {
            cart=JSON.parse(fileContent);
        }
        let existingProductIndex=cart.products.findIndex(prod=>prod.productId===productId);
        let existingProduct=cart.products[existingProductIndex];
        let updatedProduct={Qty:0,productId:0};
         if(existingProduct)
         {
             updatedProduct={...existingProduct};
             updatedProduct.Qty=updatedProduct.Qty+1;
             cart.products=[...cart.products];
             cart.products[existingProductIndex]=updatedProduct;
         }else
         {
            updatedProduct.Qty=1;
            updatedProduct.productId=productId;
            cart.products=[...cart.products,updatedProduct];
         }
         cart.totalPrice=cart.totalPrice+ +productPrice;
        fs.writeFile(storePath,JSON.stringify(cart),(err)=>{
            console.log(err);
        })
        
     })

 }
 static deleteProduct(productId,productPrice)
 {
    // Reading the Cart.
    fs.readFile(storePath,(err,fileContent)=>{
        let cart={products:[],totalPrice:0};
        if(!err)
        {
            cart=JSON.parse(fileContent);
        }
        // First Check if the product is present in Cart or not.
        const product=cart.products.find(prod=>prod.productId===productId);
        if(!product)
        {
             return;
        }
       let updatedCart={...cart};
       updatedCart.products=updatedCart.products.filter(prod=>prod.productId!==productId);
       updatedCart.totalPrice=updatedCart.totalPrice-product.Qty*productPrice;

      // Again writing the Cart Back to File.
      fs.writeFile(storePath,JSON.stringify(updatedCart),err=>{
        console.log(err);
      })

    })

 }

}