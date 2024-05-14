import React from 'react'

function Person({person}) {
  return (
    <h1 >I am {person.name}. I know {person.skill} and I am {person.age} years old.</h1>
  )
}

export default Person;