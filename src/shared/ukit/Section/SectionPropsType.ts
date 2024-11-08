import { CSSProperties } from "react"

export type SectionPropsType = {
    children: JSX.Element | JSX.Element[],
    className?: string,
    style?: CSSProperties,
    view?: SectionViews,
    padding?: SectionPaggings
}

export enum SectionViews {
    Default = 'default',
    Gray = 'gray'
}

export enum SectionPaggings {
    Default = 'default',
    S = 'small'
}