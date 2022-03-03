const { UserList }=require('./fakedata')

const resolvers={
    Query:{
        restaurants:()=>{
            return UserList;
        },
        //Get Specific Data by id
         getrestaurant:(_,{id})=>{
            return UserList.find(restaurantsdata=>restaurantsdata.id==id)

        }
    },

  
  
}

module.exports={resolvers}