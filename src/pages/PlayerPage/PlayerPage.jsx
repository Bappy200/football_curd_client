import React from 'react'
import { Header, Players } from '../../components'
import { ronaldoImage } from '../../components/importImage'
import "./PlayerPage.css"


const headerInfo = {
    title: "World best Football",
    desc: "Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal.",
    image: ronaldoImage,
  }

function PlayerPage() {
  return (
    <>
        <Header {...headerInfo}/>
        <Players/>
    </>
  )
}

export default PlayerPage