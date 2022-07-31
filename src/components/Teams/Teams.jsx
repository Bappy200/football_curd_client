import React from 'react'
import { Container, Row } from 'react-bootstrap'
import "./Teams.css"
import {useQuery} from "@apollo/client"
import { GET_TEAMS } from '../../querys/team'
import TeamCard from '../TeamCard/TeamCard'
function Teams({needSixTeam}) {   
  const {loading, error, data} = useQuery(GET_TEAMS);

       
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
    <div className='teams_container' style={{ background: needSixTeam ? "linear-gradient(to left,rgb(24 25 52), #0b1320)" : "linear-gradient(to left,rgb(38, 24, 52), #4c2358)"}}>
        <Container>
            <div className='text-center'>
                <h2 className='text-uppercase fs-2 fw-bold text-white'>top teams</h2>
                <p className='text-uppercase text-white'>world top team is heare</p>  
                               
            </div>
            <Row>
                {
                  needSixTeam ? (
                    data.teams.slice(0,3).map(team=>(
                      <TeamCard key={team.id} team={team}/>
                    ))
                  ):(
                    data.teams.map(team=>(
                      <TeamCard key={team.id} team={team}/>
                    ))
                  )
                }
            </Row>
        </Container>
      </div>
    )
  }
  
}

export default Teams