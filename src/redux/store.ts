import {configureStore} from '@reduxjs/toolkit'
import cats from './catRaducer/catRaducer'
import type {tState as tCats} from '../global.types'

export default configureStore({
    reducer: {
        cats,
    },
})
export type RootState = {
    cats: tCats
}