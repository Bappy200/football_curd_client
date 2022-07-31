import React from 'react'
import { Col } from 'react-bootstrap';
import {messiImage} from '../importImage'
import "./PlayerCard.css"

     
function PlayerCard({player}) {

    const {id, name, salary,brithDate, logo} = player
    const getAge =()=>{ 
        const brithYear = new Date(brithDate).getFullYear();
        const currentYerar = new Date().getFullYear();

        return currentYerar - brithYear;
    }
  return (
    <Col sm={12} md={6} xl={4}>
        <div className='player_card'>
            <div className='player_card_image'>
                <img src={messiImage} alt="imagePLayer"/>
            </div>
            <div className='player_card_info text-center'>
                <h4 className='text-white text-uppercase mt-2'>{name}</h4>
                <p>Salary: <span>${salary}</span></p>
                <p>Year : {getAge()}</p>
                <button className='player_card_info_button'>viwe details</button>
            </div>
        </div>
    </Col>
  )
}

export default PlayerCard