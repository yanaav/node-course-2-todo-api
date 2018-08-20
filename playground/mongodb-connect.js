//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

/*var obj = new ObjectID();
console.log(obj);*/



/*var user = {name:'luli', age:25};
var{name} = user;
console.log(name);*/

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{
 if(error){
    return console.log('unable to connect to data base');
 }
 console.log('connected to mongoDB server');


/* db.collection('Todos').insertOne({
       text:'go biking',
       completed: false
 }, (error,result) =>{
   if(error){
       return console.log('unable to insert' , error);
   }

   console.log(JSON.stringify(result.ops,undefined,2));
 });


db.collection('Users').insertOne({
    name:'yana',
    age: 25,
    location:'Israel'
},(error,result) =>{
    if(error)
    {
        return console.log('unable...', error);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
});

db.close();
*/
});
