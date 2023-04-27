const path=require('path');
const fs=require('fs');

const rootDir=require('../utils/path');

const storePath=path.join(rootDir,'data','products.json');



module.exports=class Product{
    constructor(productId,productTitle,productPrice,productRating,productReview,productImgUrl)
    {
        this.productId=productId;
        this.productTitle=productTitle;
        this.productPrice=productPrice;
        this.productRating=productRating;
        this.productReview=productReview;
        this.productImgUrl=productImgUrl;
        // this.price=price;
    }
    save()
    {     
       fs.readFile(storePath,(err,fileContent)=>{
        let products=[];
        if(!err)
        {
             products=JSON.parse(fileContent);
        }

        if(this.productId)
        {
            let existingProductIndex=products.findIndex(prod=>prod.productId==this.productId);
            let updatedProducts=[...products];
            updatedProducts[existingProductIndex]=this;
        fs.writeFile(storePath,JSON.stringify(updatedProducts),err=>{
            console.log(err);
        })
        }else
        {
            this.productId=Math.random();
            products.push(this);
           fs.writeFile(storePath,JSON.stringify(products),err=>{
            console.log(err);
           })
        }  


       })
         
    }

    static fetchAll(cb)
    {
        fs.readFile(storePath,(err,fileContent)=>{
            let products=[];
            if(err)
            {
                 cb([]);
            }
            products=JSON.parse(fileContent);
            cb(products);
        })
       
    }
    
    static fetchOne(productId,cb)
    {
        // We want to Fetch One Product Only.
        // Currently Database is not added so there is no method to fetch Single Product.
        // So we need to fetch all Products.

        fs.readFile(storePath,(err,fileContent)=>{
            let products=[];
            if(!err)
            {
                products=JSON.parse(fileContent); 
            }
            let product=products.find(p=> p.productId==productId);
            // console.log(product);
            cb(productId,product);
           })
         
    }




}

