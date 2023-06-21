import React from 'react'

function MenuItem2({ name, description, price }) {
  return (
    <div className="menuItem2">
        <h1 className="NameNoNum"> {name} </h1>
        <h4> {description} </h4>
        <div className='priceBox2'><p className="priceText2"> {price} :-</p></div>
    </div>
  )
}

export default MenuItem2