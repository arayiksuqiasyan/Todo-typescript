import React, {UIEvent} from "react"
import {useDispatch, useSelector} from "react-redux";

import {RootState} from "../redux/store";
import CardItem from "../componet/CardItem";
import {tChangedCats} from "../global.types";
import {changePage} from "../redux/catRaducer/catRaducer";

function Card() {
    const dispatch = useDispatch();

    const {page, loading, catsTypes} = useSelector((state: RootState) => state.cats)

    const loadMore = () => {
        if (!loading) {
            dispatch(changePage(page + 1))
        }
    }

    const handleOnScroll = (event: UIEvent) => {
        const {scrollTop, clientHeight, scrollHeight} = (event.nativeEvent.target as HTMLUListElement);
        if (scrollTop + clientHeight + 500 >= scrollHeight) {
            loadMore()
        }
    }

    return (
        <div className={`${loading ? 'loading' : ''}`}>
            <ul className={`card-container`}
                onScroll={handleOnScroll}
            >
                {catsTypes.map((type: tChangedCats) =>
                    <CardItem key={type.id}
                              type={type}
                    />
                )}
            </ul>
        </div>
    )
}

export default Card