const { gql }=require('apollo-server');

const typeDefs=gql`

type app{
      lat: Float
      lng:Float
    }

    type obj{
      Monday: String
      Tuesday: String
      Wednesday: String
      Thursday: String
      Friday: String
      Saturday: String
      Sunday: String
    }

    type arr{
    
      name: String
        date: String
        rating: Int
        comments:String
    }


type restaurantsdata{
    id: Int
    name:  String
    neighborhood:String
    photograph: String
    address: String
    latlng: app
    cuisine_type: String
    operating_hours: obj
   reviews:[arr]
  

}
type Query{

restaurants:[restaurantsdata!]!
getrestaurant(id:ID):restaurantsdata

}

`;
module.exports={typeDefs};


