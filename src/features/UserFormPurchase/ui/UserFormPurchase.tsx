import {ConfigProvider, Form, Input} from "antd";
import {FormStateType, UserFormPurchaseProps} from "../types";
import Button from "@/shared/ukit/Button";
import './UserFormPurchase.scss';
import {PhoneInput} from "./PhoneInput/PhoneInput";
import {ReactNode} from "react";

export const UserFormPurchase = (
  { className, onSubmit }: UserFormPurchaseProps
): ReactNode => {
  const onFinish = (formData: FormStateType): void => {
    onSubmit(formData);
  };

  return (
    <div className={`UserFormPurchase ${className}`}>
      <ConfigProvider
        theme={{
          components: {
            Form: {
              labelColor: 'var(--secondary-color)',
              labelFontSize: 16
            },
          },
        }}
      >
        <Form
          layout={'vertical'}
          onFinish={onFinish}
        >
          <Form.Item
            label="Имя"
            name="firstName"
            rules={[
              { required: true, message: 'Пожалуйста, введите своё имя' }
            ]}
          >
            <Input
              size="large"
            />
          </Form.Item>
          <Form.Item
            label="Фамилия"
            name="secondName"
          >
            <Input
              size="large"
            />
          </Form.Item>
          <Form.Item
            label="Телефон"
            name="phone"
            rules={[
              { required: true, message: 'Пожалуйста, введите номер телефона' },
              () => ({
                validator(_, value) {
                  if (value === undefined) {
                    return Promise.resolve();
                  }
                  if (value.indexOf('_') === -1) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Введите полный номер телефона'));
                },
              }),
            ]}
          >
            <PhoneInput />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Пожалуйста, введите email' },
              { type: 'email', message: 'Пожалуйста, введите корректный email' }
            ]}
          >
            <Input
              size="large"
            />
          </Form.Item>
          <Form.Item
            label="Полный адрес доставки"
            name="address"
            rules={[{ required: true, message: 'Пожалуйста, введите адрес' }]}
          >
            <Input
              size="large"
            />
          </Form.Item>
          <Form.Item>
            <Button
              className="UserFormPurchase__submit"
            >
              Оформить заказ
            </Button>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </div>
  )
}