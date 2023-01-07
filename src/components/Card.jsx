import { Children } from 'react'
import { AiFillRightCircle } from 'react-icons/ai'
import './card.css'

const Card = ({children, className, onClick}) => {

  return (
   <article className={'card ${className}'} onClick={onClick}>
     {children}
   </article>
  )
}

export default Card