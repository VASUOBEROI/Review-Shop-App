const path=require('path');
const fs=require('fs');

const rootDir=require('../utils/path');

const storePath=path.join(rootDir,'data','products.json');



module.exports=class Product{
    constructor(productTitle,productPrice,productRating,productReview)
    {
        this.productTitle=productTitle;
        this.productPrice=productReview;
        this.productRating=productRating;
        this.productReview=productReview;
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
            products.push(this);
            fs.writeFile(storePath,JSON.stringify(products),(err)=>{
                console.log(err);
            })
         })
    }

    static fetchAll(cb)
    {
        fs.readFile(storePath,(err,fileContent)=>{
            let notes=[];
            if(err)
            {
                 cb([]);
            }
            notes=JSON.parse(fileContent);
            cb(notes);
        })
       
    }
}

