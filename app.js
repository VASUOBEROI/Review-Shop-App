// Node-Core Modules.
const path=require('path');

// Prod-Dependencies.
const express=require('express');
const bodyParser=require('body-parser');

// Imports
const adminRouter=require('./routes/admin');
const walletRouter=require('./routes/wallet');
const shopRouter=require('./routes/shop');
const errorController=require('./controllers/error');
const shopController=require('./controllers/shop');


const app=express();

// Set the View Engine and exposing up the views
app.set('view-engine','ejs');
app.set('views','views');

// Middleware to Parse Incoming Request.
app.use(bodyParser.urlencoded({extended:false}));
// Middleware to Serve Static CSS/Js Files.Exposing the Public Directory.
app.use(express.static(path.join(__dirname,'public')));

// Routes:  /admin
app.use('/admin',adminRouter.Router);
// Routes: /wallet
app.use('/wallet',walletRouter.Router);
// Routes: /shop
app.use('/shop',shopRouter.Router);
// Default Route
app.get('/',shopController.getShopPage);
// Routes: wrongRoutes doesnot exists.
app.use('/',errorController.get404Page);


app.listen(3000);