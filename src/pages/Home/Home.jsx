import React from 'react'
import {Header, Players, Teams} from '../../components'
import { messi } from '../../components/importImage'
import "./home.css"

const headerInfo = {
  title: "Football World",
  desc: "Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal.",
  image: messi,
}

function Home() {
  return (
    <div className='home_page'>

        <Header {...headerInfo}/>
        <Players needSixPlayer={true} />
        <Teams needSixTeam={true}/>
    </div>
  )
}     

export default Home