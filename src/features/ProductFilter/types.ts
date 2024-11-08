export type ProductFilterPros = {
    config: FilterProps[]
}

export type FilterProps = {
    id: string,
    title: string,
    options: FilterOptions[]
}

export type FilterOptions = {
    type: OptionView,
    label: string,
    value: string | number
}

export enum OptionView {
    CHECKBOX = 'checkbox',
    RADIO = 'radio'
}