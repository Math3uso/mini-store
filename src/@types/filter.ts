// export type Filter = {
//     category:string;
//     size:string;
// }

export type Filter = {
    type: string,
    options: string[]
}

export type FilterSelect = {
    type: string;
    filter: string;
}

export type FilterElement = {
    category?: string;
    size?: string;
    color?: string;
    name?: string
}
export type FilterTypes = "category" | "size" | "color" | "name";