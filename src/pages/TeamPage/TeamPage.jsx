import React from 'react'
import { Header, Teams } from '../../components'
import { naymer } from '../../components/importImage'
import "./TeanPage.css"

const headerInfo = {
    title: "World best Team",
    desc: "Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal.",
    image: naymer,
  }
function TeamPage() {
  return (
    <>
        <Header {...headerInfo}/>
        <Teams/>
    </>
  )
}

export default TeamPage