const path=require('path');
const fs=require('fs');

const rootDir=require('../utils/path');

const storePath=path.join(rootDir,'data','products.json');



module.exports=class Product{
    constructor(productTitle,productReview,productUrl)
    {
        this.productTitle=productTitle;
        this.productReview=productReview;
        this.productUrl=productUrl;
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

    static fetchAll()
    {

    }
}

