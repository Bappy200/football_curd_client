import React from 'react'
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {messiImage} from '../importImage'
import "./TeamCard.css"


//#5B4972
function TeamCard({team}) {

    const {id, name, totalCost, establish, logo} = team
    console.log(team)
    const getAge =()=>{ 
        const brithYear = new Date(establish).getFullYear();
        const currentYerar = new Date().getFullYear();

        return currentYerar - brithYear;
    }
  return (
    <Col sm={12} md={6} xl={4}>
        <div className='team_card'>
            <div className='team_card_image'>
                <img src={messiImage} alt="imageteam"/>
            </div>
            <div className='team_card_info text-center'>
                <h4 className='text-white text-uppercase mt-2'>{name}</h4>
                <p>Total Cost: <span>${totalCost}</span></p>
                <p>Year : {getAge()}</p>
                <Link to={`/teamDetails/${id}`} className='team_card_info_button'>viwe details</Link>
            </div>
        </div>
    </Col>
  )
}

export default TeamCard