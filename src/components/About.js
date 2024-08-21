import React from 'react'
import User from './User'
import UserClass from './UserClass'

const About = () => {
  return (
      <div>
          <h1 >About</h1>
          <User name={"Jyothi Vallabhu: Function base"} />

          <h4>UserClass BaseComponent</h4>
          <UserClass name={"comming from class base component"} />
      </div>
  )
}

export default About