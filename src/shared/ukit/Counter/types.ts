import { CSSProperties } from "react"

export type CounterPropsType = {
    count: number,
    style?: CSSProperties,
    className?: string,
    onIncrease?: () => void,
    onDecrease?: () => void
}