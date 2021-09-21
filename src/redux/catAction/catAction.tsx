import {getCatsHandler, changeCatsHandler, setLoading, setErrorMessage} from "../catRaducer/catRaducer"

type tActionCreator = (action: { payload: any; type: string; }) => void

type tDispatch = (id?: number | null, page?: number) => (actionCreator: tActionCreator) => void

export const getCats: tDispatch = () => (dispatch: tActionCreator) =>
    fetch("https://api.thecatapi.com/v1/categories")
        .then(res => res.json())
        .then(data => dispatch(getCatsHandler(data)))

export const getCatsImages: tDispatch = (id, page) => (dispatch: tActionCreator) => {
    let url = "https://api.thecatapi.com/v1/images/search?limit=20";
    if (page) {
        url += `&page=${page}`;
    }
    if (id) {
        url += `&category_ids=${id}`
    }

    dispatch(setLoading(true))
    return fetch(url)
        .then(res => res.json())
        .then(data => {
            dispatch(setLoading(false))
            dispatch(setErrorMessage(null))
            return dispatch(changeCatsHandler({data, page}));
        })
        .catch((error: Error) => {
            dispatch(setErrorMessage(error.message))
            dispatch(setLoading(false))
        })
}







