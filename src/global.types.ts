export interface iCat {
    id: number;
    name?: string;
}

export interface tCatImage {
    id: string
    url: string
    categories?: {
        id: number
        name: string
    }[]
}

export interface tChangedCats {
    breeds?: []
    categories: {
        id: number
        name: string
    }[] | []
    height: number
    id: string
    url: string
    width: number
}

export type changeCat = {
    (id: number, page?: number): void
}


export type tState = {
    cats: iCat[];
    catsImage: tCatImage[];
    catsTypes: tChangedCats[]
    page: number,
    categoryId: number | null,
    loading: boolean,
    errorMessage: string | null
};
