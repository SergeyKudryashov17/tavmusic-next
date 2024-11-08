import { CSSProperties } from "react"

export type arrowPropsType = {
    style?: CSSProperties, 
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => {}
}