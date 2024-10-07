import React from 'react'

type Props = {
    title : string
    className : string
    onClick : () => void
}

const Button = (props: Props) => {
  return (
    <div className={props.className} onClick={props.onClick}>{props.title}</div>
  )
}

export default Button