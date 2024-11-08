export type ButtonPropsType = {
    children: React.ReactNode | React.ReactElement | string,
    isFullView?: boolean,
    isPrimary?: boolean,
    isCenter?: boolean,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    size?: ButtonSize,
    className?: string
}

export enum ButtonSize {
    XS = 'xs',
    S = 's',
    M = 'm',
    L = 'l',
    XL = 'xl'
}