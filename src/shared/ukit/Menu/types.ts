export type MenuItemType = {
    link: string,
    label: string
}

export type MenuPropsType = {
    list: MenuItemType[],
    className?: string
}