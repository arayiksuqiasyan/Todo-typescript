import React from "react";

import {iCat} from "../global.types";
import {changeCat} from "../global.types";

interface tProps {
    cat: iCat
    changeCatsTypes: changeCat
}

function NavBarItem({cat, changeCatsTypes}: tProps) {
    return (
        <li className="navigation-li"
            onClick={() => changeCatsTypes(cat.id)}>{cat.name}
        </li>
    )
}

export default NavBarItem