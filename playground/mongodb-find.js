
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{
 if(error){
    return console.log('unable to connect to data base');
 }
 console.log('connected to mongoDB server');

 /*db.collection('Todos').find().toArray().then((docs) =>{
     console.log('Todos');
     console.log(JSON.stringify(docs, undefined, 2));

 }, (error) =>{
     console.log('unable....', error);
 });*/

 /*db.collection('Todos').find().count().then((count) =>{
    console.log('Todos count: ' + count);
}, (error) =>{
    console.log('unable....', error);
});*/

db.collection('Users').find({name:'yana'}).toArray().then((docs) =>{
    console.log('all yanas: ');
    console.log(JSON.stringify(docs, undefined, 2));
}, (error) =>{
    console.log('unable....', error);
});



//db.close();

});
