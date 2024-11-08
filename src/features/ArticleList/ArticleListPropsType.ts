import { IArticle } from "@/entities/Article"

export type ArticleListPropsType = {
    list: IArticle[],
    visibleCount: number,
    view: ArticleListView
}

export enum ArticleListView {
    Column = 'column',
    Row = 'row'
}