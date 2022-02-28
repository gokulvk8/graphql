const express=require('express');
const { buildSchema }=require('graphql');
const { graphqlHTTP }=require('express-graphql');

const app=express();

const schema=buildSchema(`
type restaurants{
    id: Int
    name: String 
    neighborhood: String 
    photograph: String 
    address: String 
   
}

type Query{
    
    hello:String

    getUsers:[restaurants]
}


`)

const root={
    hello:()=>{
        return 'Hello world!'
    },
  
    getUsers:()=>{
        const restaurants=[
         {   "id": 1,
            "name": "Mission Chinese Food",
            "neighborhood": "Manhattan",
            "photograph": "1.jpg",
            "address": "171 E Broadway, New York, NY 10002",
           
        },
        {
            "id": 2,
            "name": "Emily",
            "neighborhood": "Brooklyn",
            "photograph": "2.jpg",
            "address": "919 Fulton St, Brooklyn, NY 11238",
            
        }
    ]
        return restaurants
    }
}

app.use('/graphql',graphqlHTTP({
    graphiql:true,
    schema:schema,
    rootValue:root
}))


app.listen(4000,()=> console.log('server on port 4000'))