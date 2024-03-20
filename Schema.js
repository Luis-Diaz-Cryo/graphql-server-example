export const typeDefs = `#graphql
    type Empleado{
        id: ID!
        nombre: String!
        direccion: String!
        telefono: Int!
        cargo: String!
    }

    type Perfil{
        empId : ID!
        habilidades : String!
        experencias : String!
        certificaciones: String!
    }

    type Rol{
        nombre: String
        responsibilidades: [String!]!
    }


    type Query{ #defines the entry points

        empleados: [Empleado]
        empleado(id: ID!): Empleado
        perfiles: [Perfil]
        perfil(empId : ID!): Perfil
        roles: [Rol]
        rol(nombre: String!): Rol



    }





`;