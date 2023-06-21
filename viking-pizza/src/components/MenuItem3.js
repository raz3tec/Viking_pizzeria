import React from 'react'

function MenuItem3({ name, description, price }) {
  return (
    <div className="menuItem3">
        <h1 className="NameNoNum"> {name} </h1>
        <h4> {description} </h4>
        <div className='priceBox3'><p className="priceText3"> {price} :-</p></div>
    </div>
  )
}

export default MenuItem3