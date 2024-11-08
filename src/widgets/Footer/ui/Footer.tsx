import Container from "@/shared/ukit/Container";
import Logo from "@/shared/ukit/Logo";
import './Footer.scss';
import Headline, { HeadlineViews } from "@/shared/ukit/Headline";
import { submenuList } from "../data/submenuList";
import Menu from "@/shared/ukit/Menu";
import { categoriesList, ICategory } from "@/entities/Category";

export const Footer = () => {
    const categoriesMenu = categoriesList.map((category: ICategory) => {
        return {
            label: category.name, 
            link: `/category?id=${category.id}`
        } 
    })

    return (
        <footer className="Footer">
            <Container>
                <Logo classNameImg="Footer__logo"/>
                <div className="Footer__grid">
                    <div className="Footer__column">
                        <Headline view={HeadlineViews.H6} style={{ marginBottom: '15px' }}>Контакты</Headline>
                        <a className="Footer__contactItem" href="#">shop@tavmusic.ru</a>
                        <a className="Footer__contactItem" href="#">+7 (495) 165-66-95</a>
                        <address className="Footer__address">г. Москва <br />проезд завода Серп и Молот, д. 6, подъезд 1, этаж 4, офис 37</address>
                    </div>
                    <div className="Footer__column">
                        <Headline view={HeadlineViews.H6} style={{ marginBottom: '15px' }}>Категории товаров</Headline>
                        <Menu list={categoriesMenu} />
                    </div>
                    <div className="Footer__column">
                        <Headline view={HeadlineViews.H6} style={{ marginBottom: '15px' }}>О нас</Headline>
                        <Menu list={submenuList} />
                    </div>
                </div>
                <div className="Footer__copyright">
                    Copyright © 2024
                </div>
            </Container>
        </footer>
    )
}