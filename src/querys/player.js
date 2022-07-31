import {gql} from "@apollo/client"

const GET_PLAYERS = gql`
    query getPlayers{
        players{
            id
            name
            salary
            brithDate
            height
            logo
        }
    }
`

const GET_PLAYER = gql`
    query getPlayer($id: ID!){
        player(id: $id){
            id
            name
            about
            salary
            height
            brithDate
            logo
            coverImage
            team{
            name
            }
        }
    }
`
const  ADD_PLAYER = gql`
    mutation addPlayer($name: String!, $about: String!, $salary: Int!, $height: Float!, $brithDate: String!, $teamId: ID!, $logo: String!, $coverImage: String!){
        addPlayer(name: $name, about: $about, salary: $salary, height: $height, brithDate: $brithDate, teamId: $teamId, logo: $logo, coverImage: $coverImage){
            name
            about
            salary
            teamId
            brithDate
            logo
            coverImage
        }
    }
`

const UPDATE_PLAYER = gql`
    mutation updatePlayer($id: ID!, $name: String!, $about: String!, $salary: Int!, $height: Float!, $brithDate: String!, $teamId: ID!, $logo: String!, $coverImage: String!){
        updatePlayer(id: $id, name: $name, about: $about, salary: $salary, height: $height, brithDate: $brithDate,teamId: $teamId, logo: $logo, coverImage: $coverImage){
            name
            about
            salary
            height
            teamId
        }
    }
`

const DELETE_PLAYER = gql`
    mutation deletePlayer($id: ID!){
        deletePlayer(id: $id){
            name
            salary
            teamId
        }
    }
`

export {GET_PLAYER, GET_PLAYERS, ADD_PLAYER, UPDATE_PLAYER, DELETE_PLAYER};