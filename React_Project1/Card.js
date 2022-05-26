import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src={`../images/${props.item.img}`} className="card--img" />
            <div className="cardData">
            <div className="card--stats">
                <img src="../images/pointer.png" className="card--pointer" width="9px" height="11px" />
                <span className="lcn">{props.item.location}</span>
                <span className="map-link"><a href={`${props.item.googleMapsUrl}`} > View on Google maps </a></span>
            </div>
            <div className="card--desc">
                <span className="title">{props.item.title}</span>
                <p className="dates">{props.item.startDate} - {props.item.endDate}</p>
                <p className="desc">{props.item.description}</p>                
            </div>
            </div>
        </div>
    )
}