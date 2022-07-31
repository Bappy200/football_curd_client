import { useQuery } from '@apollo/client';
import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { GET_TEAM } from '../../querys/team';
import Header from '../Header/Header';
import { ronaldoImage } from '../importImage';
import PlayerCard from '../PlayerCard/PlayerCard';
import TeamCard from '../TeamCard/TeamCard';
import "./TeamDetails.css"

function TeamDetails() {
    const {id} = useParams()
    const {loading, error, data} = useQuery(GET_TEAM,{
        variables:{id: id}
    })



//   const headerInfo = {
//     title: name,
//     desc: about,
//     image: ronaldoImage,
//   }
  console.log(data);


    if(loading){
        return <p>logingggg,....</p>
    }
    else if(error){
        <p>something is errrorrr</p>
    }else{
        return (
            <>
                <Header title={data.team.name} desc={data.team.about} image={ronaldoImage}/>
                <div className='team_details_player_section'>
                    <Container>
                        <div className='text-center'>
                            <h2 className='text-uppercase fs-2 fw-bold text-white'>all players of {data.team.name}</h2>
                            <p className='text-uppercase text-white'>world top player is heare</p>  
                                        
                        </div>
                        <Row>
                            {
                        
                            data.team?.players.map(player=>(
                                <PlayerCard key={player.id} player={player}/>
                                ))
                            
                            }
                        </Row>
                    </Container>
                </div>
        
            </>
          )
    }

}

export default TeamDetails