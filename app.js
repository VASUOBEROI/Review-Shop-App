// Node-Core Modules.
const path=require('path');

// Prod-Dependencies.
const express=require('express');
const bodyParser=require('body-parser');

// Imports
const adminRouter=require('./routes/admin');
const errorController=require('./controllers/error');


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




// Routes: wrongRoutes doesnot exists.
app.use('/',errorController.get404Page);


app.listen(3000);