import React from 'react'
import './Name.css'

export default function Name(props) {

  const {UserName,age} = props;

  return (
    <div> <h1>My name is {UserName} and age is {age}</h1></div>
  )
}



