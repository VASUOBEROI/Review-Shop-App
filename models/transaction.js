const path=require('path');
const fs=require('fs');
const rootDir=require('../utils/path');
const storePath=path.join(rootDir,'data','transactions.json');
const Wallet=require('./wallet');

module.exports=class Transaction{
constructor(transactionId,transactionDate,transactionType,transactionMode,transactionAmount,transactionDescription)
{
this.transactionId=transactionId;
this.transactionDate=transactionDate;
this.transactionType=transactionType;
this.transactionMode=transactionMode;
this.transactionAmount=transactionAmount;
this.transactionDescription=transactionDescription;
}
save()
{
   // for both new transaction and updating previous transaction.
   fs.readFile(storePath,(err,fileContent)=>{
    let transactions=[];
    if(!err)
    {
         transactions=JSON.parse(fileContent);
    }
    if(this.transactionId)
    {
         // TransactionId already exists meaning its an update.

         let existingTransactionIndex=transactions.findIndex(trans=>trans.transactionId==this.transactionId)
         transactions[existingTransactionIndex]=this;
         fs.writeFile(storePath,JSON.stringify(transactions),err=>{
            console.log(err);
         })
    }else
    {
        // New Transaction.
        this.transactionId=Math.random();
        transactions.push(this);
        fs.writeFile(storePath,JSON.stringify(transactions),err=>{
            console.log(err);
            if(!err)
            {
                // Adding new Transaction To Wallet as well.
                // For transaction Update we dont need to update in Wallet.
                // Because wallet is only storing transactionsiD.
                Wallet.addTransaction(this.transactionId,this.transactionAmount,this.transactionType);
            }
        })
         
    }
   })

}
static delete(transactionId)
{
fs.readFile(storePath,(err,fileContent)=>{
    let transactions=[];
    if(!err)
    {
         transactions=JSON.parse(fileContent);
    }
    let transaction=transactions.find(trans=>trans.transactionId==transactionId);
    transactions=transactions.filter(trans=>trans.transactionId!=transactionId);
    fs.writeFile(storePath,JSON.stringify(transactions),err=>{
        if(!err)
        {
             // Delete the transaction from wallet also.
             Wallet.deleteTransaction(transactionId,transaction.transactionAmount,transaction.transactionType);
        }
    })
})
}
static fetchAll(cb)
{
  fs.readFile(storePath,(err,fileContent)=>{
    let transactions=[];
    if(!err)
    {
         transactions=JSON.parse(fileContent);
    }
    cb(transactions);
  })
}

static fetchOne(transactionId,cb)
{
     fs.readFile(storePath,(err,fileContent)=>{
        let transactions=[];
        if(!err)
        {
             transactions=JSON.parse(fileContent);
        }
        let transaction=transactions.find(trans=>trans.transactionId==transactionId);
        cb(transaction);
     })
}
    
}