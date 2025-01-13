import Container from "@/shared/ukit/Container";
import Section, {SectionPaggings} from "@/shared/ukit/Section";
import Headline, {HeadlineViews} from "@/shared/ukit/Headline";
import Button from "@/shared/ukit/Button";
import './OrderCompletionPage.scss';
import {ReactNode} from "react";
import Image from 'next/image';
import SuccessImage from "@/shared/assets/img/ConfirmedOrder.png";
import Link from "next/link";
import {Breadcrumb} from "antd";

const OrderCompletionPage = (): ReactNode => {
  const breadcrumbs = [
    { title: <Link href="/">Главная</Link> },
    { title: 'Завершение оформления заказа' }
  ];

  return (
    <Container>
      <Section padding={SectionPaggings.S} style={{ paddingBottom: '0' }}>
        <Breadcrumb items={breadcrumbs} />
      </Section>
      <Section style={{ paddingTop: '0' }}>
        <div className="grid grid-cols-2 gap-1 items-center">
          <div className="">
            <div className="labelCompleteOrder">Оформление заказа завершено</div>
            <Headline view={HeadlineViews.H1} style={{lineHeight: '1.3'}}>
              Ваш заказ успешно оформлен!
            </Headline>
            <div className="textDetailOrder">
              Вся информация по заказу отправлена вам на почту. Отследить статус заказа
              можно по ссылке из письма.
            </div>
            <Link href="/">
              <Button isPrimary={true} className="btnContinueOrder">Продолжить покупки</Button>
            </Link>
          </div>
          <div>
            <Image
              src={SuccessImage}
              alt="Заказ успешно оформлен"
            />
          </div>
        </div>
      </Section>
    </Container>
  );
}
export default OrderCompletionPage;