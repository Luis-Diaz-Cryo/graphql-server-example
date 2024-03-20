import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from '@apollo/server/standalone'

import db from './Db.js'
import { typeDefs } from "./Schema.js"


const resolvers = {
    Query: {
        empleados(){
            return db.empleados
        },
        perfiles(){
            return db.perfiles
        },
        roles(){
            return db.roles
        },
        empleado(_, args) {
            
            return db.empleados.find((empleado) => empleado.id === args.id)      
        },
        perfil(_, args) {
            
            return db.perfiles.find((perfil) => perfil.empId === args.empId)      
        },
        rol(_, args) {
            
            return db.roles.find((rol) => rol.nombre === args.nombre)      
        }
    }
}


const server = new ApolloServer({

    //typedefs ---- definicions of the types of data
    typeDefs,
    //resolvers ---- resolver define the type of queries 
    resolvers


})

const {url} = await startStandaloneServer(server,{
    listen: {port: 4000}
})

console.log(`Server ready at port ${url}`)