import React from "react"
import {tChangedCats} from "../global.types";

interface tProps {
    type: tChangedCats
}

function CardItem({type}: tProps) {
    return (
        <li className="item-cat">
            <img src={type.url} alt="#" style={{width: "100%", height: "100%"}}/>
        </li>
    )
}

export default CardItem