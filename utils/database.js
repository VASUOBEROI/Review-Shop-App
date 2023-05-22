const Sequelize=require('sequelize');

const sequelize=new Sequelize('review-shop-app-db','root','Vasuoberoi@12',
{
dialect:'mysql',
host:'localhost'
});

module.exports=sequelize;