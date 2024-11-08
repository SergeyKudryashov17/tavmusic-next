'use client';

import BigSlider from "@/features/BigSlider";
import ListBenefits from "@/features/ListBenefits";
import ProductsSlider from "@/widgets/ProductsSlider";
import Container from "@/shared/ukit/Container";
import Headline, { HeadlineViews } from "@/shared/ukit/Headline";
import Section, { SectionViews } from "@/shared/ukit/Section";
import GridCategories from "@/widgets/GridCategories";
import BrandSlider from "@/features/BrandSlider";
import ArticleList from "@/features/ArticleList";
import { ArticleListView } from "@/features/ArticleList";

import { bestProductList } from '@/entities/Product/data/BestProductsList';
import { stockMoscow } from "@/entities/Product/data/stockMoscow";
import { brandList } from "@/entities/Brand";
import { articleList } from "@/entities/Article";
import { getMainCategories } from "@/entities/Category";

const MainPage = () => {
    const mainCategories = getMainCategories();

    return (
        <>
            <BigSlider />

            <Section>
                <Container>
                    <Headline view={HeadlineViews.Section}>
                        Категории товаров
                    </Headline>
                    <GridCategories listCategories={mainCategories}/>
                </Container>
            </Section>

            <Section view={SectionViews.Gray}>
                <Container>
                    <Headline view={HeadlineViews.Section}>
                        Наши преимущества
                    </Headline>
                    <ListBenefits />
                </Container>
            </Section>

            <Section>
                <Container>
                    <Headline view={HeadlineViews.Section} style={{ marginBottom: '5px' }}>
                        Лучшие предложения
                    </Headline>
                    <ProductsSlider productList={bestProductList} />
                </Container>
            </Section>

            <Section view={SectionViews.Gray}>
                <Container>
                    <Headline view={HeadlineViews.Section} style={{ marginBottom: '5px' }}>
                        В наличии в Москве
                    </Headline>
                    <ProductsSlider productList={stockMoscow} />
                </Container>
            </Section>

            <Section>
                <Container>
                    <Headline view={HeadlineViews.Section} style={{ marginBottom: '5px' }}>
                        Бренды
                    </Headline>
                    <BrandSlider brandList={brandList} />
                </Container>
            </Section>

            <Section view={SectionViews.Gray}>
                <Container>
                    <Headline view={HeadlineViews.Section}>
                        Блог
                    </Headline>
                    <ArticleList 
                        visibleCount={3} 
                        list={articleList} 
                        view={ArticleListView.Column}
                    />
                </Container>
            </Section>
        </>
    );
}

export default MainPage;