import React from "react";

const Card = ({ data }) => {

    return (
        <div className="card">
            <div>
                <p>{data.id}</p>
            </div>
            <div>
                <p>{data.name}</p>
            </div>
            <div>
                <p>{data.types.type.name}</p>
            </div>
        </div>
    )
}

export default Card