import Container from "@/shared/ukit/Container";
import Section from "@/shared/ukit/Section";
import Headline, {HeadlineViews} from "@/shared/ukit/Headline";
import Button from "@/shared/ukit/Button";
import './OrderCompletionPage.scss';
import {ReactNode} from "react";
import Image from 'next/image';
import SuccessImage from "@/shared/assets/img/ConfirmedOrder.png";
import Link from "next/link";

const OrderCompletionPage = (): ReactNode => {
  return (
    <Container>
      <Section>
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