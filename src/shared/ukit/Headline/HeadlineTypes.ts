import { CSSProperties } from "react"

export type HeadlinePropsType = {
    children: string | JSX.Element,
    view: HeadlineViews,
    style?: CSSProperties
}

export enum HeadlineViews {
    Page = 'page',
    Section = 'section',
    H1 = 'h1',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6'
}