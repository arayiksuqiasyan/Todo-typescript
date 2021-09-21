import React, {useEffect} from "react";
import {Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";


import {RootState} from "../redux/store";
import {iCat, changeCat} from "../global.types";
import NavBarItem from "../componet/NavBarItem"
import {getCatsImages} from "../redux/catAction/catAction";
import {changePage, changeCategoryId} from "../redux/catRaducer/catRaducer"


export default NavBar

function NavBar() {
    const dispatch = useDispatch()
    const {cats, page, loading, categoryId, errorMessage} = useSelector((state: RootState) => state.cats)

    useEffect(() => {
        if (!loading) {
            dispatch(getCatsImages(categoryId, page))
        }
    }, [page, categoryId])

    const loadMore = () => {
        if (!loading) {
            dispatch(changePage(page + 1))
        }
    }

    const changeCatsTypes: changeCat = (id: number) => {
        if (!loading) {
            dispatch(changeCategoryId(id))
        }
    }

    return (
        <ul className="navigation-app">
            <h1>Categories</h1>
            <Button variant="contained" onClick={loadMore}>Load More</Button>
            <div className="types-container">
                {cats.map((cat: iCat) => {
                    return <NavBarItem cat={cat}
                                       key={cat.id}
                                       changeCatsTypes={changeCatsTypes}/>
                })}
            </div>
            <hr/>
            {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
        </ul>

    )
}
