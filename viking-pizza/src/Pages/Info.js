import React from 'react'
import "../styles/Info.css";

function Info() {
    return (
        <div className="infoContatiner">
            <div className="opentid">
                <div className="opentidContainer">
                    <h1 className="oppettider">Våra öppettider</h1>
                    <h2 className="sommar">Öppettider 1/6 - 31/8</h2>
                    <p className="oppettidDatum">Måndag - Fredag : 11,00-22,00</p>
                    <p className="oppettidDatum">Lördag - Söndag : 12,00-22,00</p>
                    <h2 className="sommar">Öppettider 1/9 - 31/5</h2>
                    <p className="oppettidDatum">Måndag - Torsdag : 11,00-21,00</p>
                    <p className="oppettidDatum">Fredag : 11,00-22,00</p>
                    <p className="oppettidDatum">Lördag : 12,00-22,00</p>
                    <p className="oppettidDatum">Söndag : 12,00-21,00</p>
                </div>
            </div>
            <div className="familjepizza">
                <h1 className="familjepizzaTitle">Priser familjepizza</h1>
                <p className="familjepizzaText">Prisklass 105-110:- = 295:-</p>
                <p className="familjepizzaText">Prisklass 115-120:- = 305:-</p>
                <p className="familjepizzaText">Prisklass 125-130:- = 335:-</p>
                <p className="familjepizzaText">Prisklass 135-140:- = 350:-</p>
                <div className="ribbon-2"><p className="dricka">2 LITER DRICKA INGÅR</p></div>
            </div>
        </div>
    )
}

export default Info