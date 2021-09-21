import {createSlice} from "@reduxjs/toolkit";
import {tCatImage, tState} from "../../global.types";


const initialState: tState = {
    cats: [],
    catsImage: [],
    catsTypes: [],
    page: 1,
    categoryId: null,
    loading: false,
    errorMessage: null
};

export const counterSlice = createSlice({
    name: "cats",
    initialState,
    reducers: {

        getCatsHandler(state, action) {
            state.cats = action.payload
        },

        getCatsImageHandler(state, action) {
            state.catsImage = action.payload.map((item: tCatImage) => ({
                id: item.id,
                url: item.url,
                categories: item.categories || []
            }))
        },

        changeCatsHandler(state, action) {
            if (action.payload.page === 1) {
                state.catsTypes = action.payload.data;
            } else {
                state.catsTypes = [...state.catsTypes, ...action.payload.data];
            }
        },

        setLoading(state, action) {
            state.loading = action.payload
        },

        changePage(state, action) {
            state.page = action.payload;
        },

        changeCategoryId(state, action) {
            state.page = 1;
            state.categoryId = action.payload;
        },

        setErrorMessage(state, action) {
            state.errorMessage = action.payload;
        },
    },
});

export const {
    changePage, setLoading,
    getCatsHandler, setErrorMessage,
    changeCategoryId, changeCatsHandler,
    getCatsImageHandler,
} = counterSlice.actions;

export default counterSlice.reducer;
