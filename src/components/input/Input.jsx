import React from 'react'
import './Input.css'

const Input = ({ ...props }) => {
  console.log(props);

  return (
    <input
      className={props.className}
      placeholder={props.placeholder}
      type={props.type}
      {...props}>
    </input>
  )
}

export default Input