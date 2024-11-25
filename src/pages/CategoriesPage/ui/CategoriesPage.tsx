'use client'

// import { getCategoryData, getChildCategories, ICategory } from "@/entities/Category";
// import SubCategoriesList from "@/features/SubcategoriesList";
// import Container from "@/shared/ukit/Container";
// import Headline, { HeadlineViews } from "@/shared/ukit/Headline";
// import Section from "@/shared/ukit/Section";
// import { SectionPaggings, SectionViews } from "@/shared/ukit/Section/SectionPropsType";
// import { Breadcrumb } from 'antd';
// import { useParams } from "next/navigation";
// import './CategoriesPage.scss';
// import ProductFilter, { OptionView } from "@/features/ProductFilter";
// import ProductList from "@/widgets/ProductList";
// import getProductsFromCategory from "@/features/GetProductsFromCategory";
// import { getBreadcrumbs } from "../utils/getBreadcrumbs";
// import Link from "next/link";
// import getBrandsFromProducts from "@/features/GetBrandFromProducts";
// import { IBrand } from "@/entities/Brand";

const CategoriesPage = () => {
    return ('Тест');

    // const params = useParams<{ slug: string }>() ?? null;
    // const categoryData = params?.slug ? getCategoryData(params?.slug) : null;
    // const hasCategoryData = categoryData !== null;

    // const categoryTitle = hasCategoryData ? categoryData.name : 'Неизвестно';
    // const subCategories = hasCategoryData ? getChildCategories(categoryData.id) : [];
    // const productsList = hasCategoryData ? getProductsFromCategory(categoryData.id) : [];
    // const brandsList = productsList.length > 0 ? getBrandsFromProducts(productsList) : []; 

    // const breadcrumbs = [{ title: <Link href="/">Главная</Link> }, ...getBreadcrumbs(categoryData?.id)];

    // const filterCategoriesOptions = subCategories.map((cat: ICategory) => {
    //     return {
    //         type: OptionView.CHECKBOX,
    //         label: cat.name,
    //         value: cat.slug
    //     }
    // });
    // const filterBrandsOptions = brandsList.map((brand: IBrand) => {
    //     return {
    //         type: OptionView.CHECKBOX,
    //         label: brand.title,
    //         value: brand.id
    //     }
    // })

    // const filtersConfig = [
    //     {
    //         id: 'category',
    //         title: 'Категории',
    //         options: filterCategoriesOptions
    //     },
    //     {
    //         id: 'brand',
    //         title: 'Бренды',
    //         options: filterBrandsOptions
    //     }
    // ];

    // return (
    //     <>
    //         <Section padding={SectionPaggings.S}>
    //             <Container>
    //                 {/* <Breadcrumb
    //                     items={breadcrumbs}
    //                 /> */}
    //                 <Headline view={HeadlineViews.H1} style={{ marginBottom: 0 }}>
    //                     {categoryTitle}
    //                 </Headline>
    //             </Container>
    //         </Section>
    //         { Boolean(subCategories.length) && (
    //             <Section view={SectionViews.Gray} padding={SectionPaggings.S}>
    //                 <Container>
    //                     <SubCategoriesList list={subCategories}/>
    //                 </Container>
    //             </Section>
    //         )}
    //         <Section>
    //             <Container>
    //                 <div className="categoriesWrapper">
    //                     <div>
    //                         <ProductFilter config={filtersConfig}/>
    //                     </div>
    //                     <div>
    //                         <ProductList list={productsList}/>
    //                     </div>
    //                 </div>
    //             </Container>
    //         </Section>
    //     </>
    // );
}

export default CategoriesPage;

