'use client';

import { bestProductList, getBreadcrumbProduct } from "@/entities/Product";
import Container from "@/shared/ukit/Container";
import Headline, { HeadlineViews } from "@/shared/ukit/Headline";
import ProductsSlider from "@/widgets/ProductsSlider";
import Section, { SectionPaggings } from "@/shared/ukit/Section";
import ProductInfo from "@/widgets/ProductInfo";
import { useParams } from 'next/navigation'
import { useProductData } from "@/entities/Product/hooks/useProductData";
import { getCategoryBreadcrumbsItems } from "@/entities/Category";
import { Breadcrumb } from "antd";
import {ReactNode} from "react";

const ProductPage = (): ReactNode => {
    const params = useParams<{ id: string }>() ?? null;

    const productData = params && params?.id !== null 
                            ? useProductData(Number(params.id)) 
                            : null;

    let breadcrumbs = getCategoryBreadcrumbsItems(productData?.categoryID);

    if (productData) {
        const breadcrumbProduct = productData.name 
                ? getBreadcrumbProduct(productData.name, productData.id) 
                : null;

        if (breadcrumbProduct) {
            breadcrumbs.push(breadcrumbProduct)
        }
    }

    return (
        <Container>
            <Section padding={SectionPaggings.S}>
                <Breadcrumb items={breadcrumbs} />
            </Section>
            <Section style={{ paddingTop: '0' }}>
                { productData
                    ? ( <ProductInfo {...productData} /> ) 
                    : ( <div>Нет такого товара</div> )
                }
            </Section>

            <Section>
                <Headline view={HeadlineViews.H4}>
                    Смотрите также
                </Headline>
                <ProductsSlider productList={bestProductList} />
            </Section>
        </Container>
    );
}
export default ProductPage;