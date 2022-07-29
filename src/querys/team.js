import {gql} from "@apollo/client"

const GET_TEAMS = gql`
    query getTeams{
        teams{
            name
            establish
            totalCost
            logo
        }
    }
`

const GET_TEAM = gql`
    query getTeam(id: ID!){
        team(id: $id){
            name
            about
            establish
            totalCost
            logo
            coverImage
            players{
                name
                salary
                brithDate
                height
            }
        }
    }
`
const  ADD_TEAM = gql`
    mutation addTeam(name: String!, about: String!, totalCost: Int!, establish: String!, logo: String!, coverImage: String!){
        addPlayer(name: $name, about: $about, totalCost: $totalCost, establish: $establish, logo: $logo, coverImage: $coverImage){
            name
            about
            salary
            teamId
            establish
        }
    }
`

const UPDATE_TEAM = gql`
    mutation updateTeam(id: ID!, name: String!, about: String!, totalCost: Int!, establish: String!, logo: String!, coverImage: String!){
        updateTeam(id: $id, name: $name, about: $about, totalCost: $totalCost, establish: $establish, logo: $logo, coverImage: $coverImage){
            name
            about
            salary
            teamId
            establish
        }
    }
`

const DELETE_TEAM = gql`
    mutation deleteTeam(id: ID!){     
        deleteTeam(id: $id){
            name
            salary
            teamId
            establish
        }
    }
`

export {GET_TEAM, GET_TEAMS, ADD_TEAM, UPDATE_TEAM, DELETE_TEAM};