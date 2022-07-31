import React from 'react'
import { Container, Row } from 'react-bootstrap'
import "./Players.css"
import {GET_PLAYERS} from "../../querys/player"
import {useQuery} from "@apollo/client"
import PlayerCard from '../PlayerCard/PlayerCard'
import AddPlayer from '../AddPlayer/AddPlayer'
function Players({needSixPlayer}) {
  const {loading, error, data} = useQuery(GET_PLAYERS);

       
  // console.log();
  // if loding true
  if(loading){      
       return <p>Loding</p>
  }
  // if error
  else if(error){
    return <p>some thing is errror</p>
  }
  else{
    return (
      <div className='players_container'>
        <Container>
            <div className='text-center'>
                <h2 className='text-uppercase fs-2 fw-bold text-white'>All Players</h2>
                <p className='text-uppercase text-white'>world top player is heare</p>
                <AddPlayer/>
            </div>
            <Row>
                {
                  needSixPlayer ? (
                    data.players.slice(0,3).map(player=>(
                      <PlayerCard key={player.id} player={player}/>
                    ))
                  ):(
                    data.players.map(player=>(
                      <PlayerCard key={player.id} player={player}/>
                    ))
                  )
                }
            </Row>
        </Container>
      </div>
    )
  }
  
}

export default Players