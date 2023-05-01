const path=require('path');
const fs=require('fs');
const rootDir=require('../utils/path');
const storePath=path.join(rootDir,'data','wallet.json');

module.exports=class Wallet{
    static addTransaction(transactionId,amount,transactionType)
    {
        fs.readFile(storePath,(err,fileContent)=>{
        let wallet={transactions:[],balance:0};
         if(!err)
         {
             wallet=JSON.parse(fileContent);
         }
         let updatedWallet={...wallet};
        let existingTransactionIndex=wallet.transactions.findIndex(trans=>trans.transactionId==transactionId);
        let existingTransaction=wallet.transactions[existingTransactionIndex];
          let transaction={transactionId:0};
        
          if(existingTransaction)
          {
             // Update Nothing.
          }else
          {
           transaction.transactionId=transactionId;
           updatedWallet.transactions=[...updatedCart.transactions,transaction];
           if(transactionType=="credit")
           {
            updatedWallet.balance=updatedWallet.balance+ +amount;    
           }else
           {
               updatedWallet.balance=updatedWallet.balance- +amount;  
           }
          }

         

         fs.writeFile(storePath,JSON.stringify(updatedWallet),err=>{
            console.log(err);
         })

        })

    }
 // Hardly we will need this function.
 // In case we wrongly entered data, Then we will require this.
 // Otherwise we would want to keep all our transactions.
    static deleteTransaction(transactionId,amount,transactionType)
    {
         fs.readFile(storePath,(err,fileContent)=>{
            let wallet={transactions:[],balance:0};
            if(!err)
            {
                wallet=JSON.parse(fileContent);
            }
            let transaction=wallet.transactions.find(trans=>trans.transactionId==transactionId);
            if(!transaction)
            {
                 console.log("Transaction Does not Exist in the Wallet");
                 return;
             }
           // We need to delete transaction,
           let updatedWallet={...wallet};
           if(transactionType=="credit")
           {
            // Wrongly Credited.
             updatedWallet.balance=updatedWallet.balance- +amount;
           }else
           {
            // Wrongly Debited.
             updatedWallet.balance=updatedWallet.balance+  +amount;
           }
           updatedWallet.transactions=updatedWallet.transactions.filter(trans=>trans.transactionId!=transactionId);
       fs.writeFile(storePath,JSON.stringify(updatedWallet),err=>{
        console.log(err);
       })          
    })
    }

}