import React from "react";

function Card(props) {
    return (
        <div className="card">
            <div className="card-header">
                <h3 className="center-text">{props.title}</h3>
            </div>
            <div className="card-body">
                <img onClick={(e) => props.getProjectDesc(e)} data-title={props.dataTitle} src={props.url}
                    alt={props.alt} />
            </div>
        </div>
    )
}

export default Card;