import { IArticle } from "@/entities/Article";
import Button, { ButtonSize } from "@/shared/ukit/Button";
import './ArticleItem.scss';
import Link from "next/link";

export const ArticleItem = (articleData: IArticle) => {
    const { id, title, description, image } = articleData;
    return (
        <div className="ArticleItem">
            <div className="ArticleItem__picture" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="ArticleItem__data">
                <div className="ArticleItem__title">{ title }</div>
                <div className="ArticleItem__desc">{ description }</div>
                <Link className="ArticleItem__link" href={`/blog?id=${id}`}>
                    <Button size={ButtonSize.M} className="ArticleItem__btn">Читать</Button>
                </Link>
            </div>
        </div>
    )
}