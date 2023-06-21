import React from 'react'

function MenuItem({ idList, name, description, price }) {
  return (
    <div className="menuItem">
        <div className="ribbonMenu"><p className="ribbonText">{idList}</p></div>
        <h1> {name} </h1>
        <h4> {description} </h4>
        <div className='priceBox'><p className="priceText"> {price} :-</p></div>
    </div>
  )
}

export default MenuItem