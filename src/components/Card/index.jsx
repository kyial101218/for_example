import React from 'react'
import css from './Card.module.css'

const Card = (props) => {
    
    const {full_name,position, id} = props
    
    const avatar_styles = {
            border: '1px solid black',
            height: 100,
            width: 100,
            borderRadius: '5px',
            backgroundColor: 'grey'
        }

    return (
        <div className={css.card}>
            <div 
            style={avatar_styles}
                 ></div>
            <div className='description'>
                <h2>{full_name}</h2>
                <b>{position}</b>
                <p>{id}</p>
            </div>
        </div>
    )
}

export {Card}