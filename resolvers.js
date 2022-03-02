const { UserList }=require('./fakedata')

const resolvers={
    Query:{
        restaurants:()=>{
            return UserList;
        }
    }
}

module.exports={resolvers}