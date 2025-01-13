import Container from "@/shared/ukit/Container";
import Section, {SectionPaggings, SectionViews} from "@/shared/ukit/Section";
import Link from "next/link";
import {Breadcrumb} from "antd";
import Headline, {HeadlineViews} from "@/shared/ukit/Headline";
import {ReactNode} from "react";
import './OrderTrackingPage.scss';
import {ProductsTableColumns} from "@/features/ProductsTable/types";
import {productList} from "@/entities/Product";
import {stateProductItem} from "@/app";
import ProductsTable from "@/features/ProductsTable";

const OrderTrackingPage = (): ReactNode => {
  const breadcrumbs = [
    { title: <Link href="/">Главная</Link> },
    { title: 'Отслеживание заказа' }
  ];

  const products: stateProductItem[] = [
    {
      product: productList[0],
      count: 2
    },
    {
      product: productList[1],
      count: 5
    },
    {
      product: productList[4],
      count: 3
    }
  ];

  const ProductsTableConfig: ProductsTableColumns[] = [
    ProductsTableColumns.IMAGE,
    ProductsTableColumns.TITLE,
    ProductsTableColumns.PRICE,
    ProductsTableColumns.COUNT,
    ProductsTableColumns.SUM_PRICE
  ];

  return (
    <>
      <Section padding={SectionPaggings.S} style={{ paddingBottom: '0' }}>
        <Container>
          <Breadcrumb items={breadcrumbs} />
        </Container>
      </Section>
      <Section style={{ padding: '10px 0' }}>
        <Container>
          <Headline view={HeadlineViews.H1} style={{ lineHeight: '1.3' }}>
            Заказ №1
          </Headline>
        </Container>
      </Section>
      <Section view={SectionViews.Gray} padding={SectionPaggings.S}>
        <Container>
          <div className="grid grid-cols-4">
          <div>
            <div className="order-detail-label">Статус:</div>
            <div>Оплачен</div>
          </div>
          <div>
            <div className="order-detail-label">Дата заказа:</div>
            <div>Вчера 17:05</div>
          </div>
          <div>
            <div className="order-detail-label">Получатель:</div>
            <div>Виктор Поздняков</div>
          </div>
          <div>
            <div className="order-detail-label">Адрес доставки:</div>
            <div>Россия, Краснодарский край, г. Дудинка, ул. Горького, д.38</div>
          </div>
        </div>
        </Container>
      </Section>
      <Section padding={SectionPaggings.S}>
        <Container>
          <div className="order-detail-label">Cостав заказа:</div>
          <ProductsTable
            products={products}
            columnsConfig={ProductsTableConfig}
          />
        </Container>
      </Section>
    </>
  );
}
export default OrderTrackingPage;