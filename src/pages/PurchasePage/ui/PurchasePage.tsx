'use client';

import Section, {SectionPaggings} from "@/shared/ukit/Section";
import Container from "@/shared/ukit/Container";
import {Breadcrumb, Col, Row} from "antd";
import Headline, {HeadlineViews} from "@/shared/ukit/Headline";
import Link from "next/link";
import UserFormPurchase from "@/features/UserFormPurchase";
import './PurchasePage.scss';
import {FormStateType} from "@/features/UserFormPurchase/types";
import {useState} from "react";
import {useRouter} from 'next/navigation';
import ListProductsCart from "@/features/ListProductsCart";
import {ListProductViews} from "@/features/ListProductsCart/model";

const PurchasePage = () => {
  const router = useRouter();

  const breadcrumbs = [
    { title: <Link href="/">Главная</Link> },
    { title: <Link href="/cart">Корзина</Link> },
    { title: <div>Оформление заказа</div> }
  ];

  const [userData, setUserData] = useState<FormStateType>({
    address: null,
    email: null,
    firstName: null,
    phone: null,
    secondName: null
  });

  const onSubmit = (userFormData: FormStateType): void => {
    console.log(userFormData);
    router.push('/orderComplete');
  }

  return (
    <>
      <Section padding={SectionPaggings.S}>
        <Container>
          <Breadcrumb
            items={breadcrumbs}
          />
          <Headline view={HeadlineViews.H1} style={{ marginBottom: 0 }}>
            Оформление заказа
          </Headline>
        </Container>
      </Section>
      <Section style={{ paddingTop: '40px' }}>
        <Container>
          <Row>
            <Col span={12}>
              <Headline view={HeadlineViews.H4}>
                Сведения о покупателе
              </Headline>

              <UserFormPurchase
                className='purchaseForm'
                onSubmit={onSubmit}
              />
            </Col>
            <Col span={12}>
              <Headline view={HeadlineViews.H4}>
                Детали заказа
              </Headline>
              <ListProductsCart view={ListProductViews.SHORT} />
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
}

export default PurchasePage;