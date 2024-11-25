import InputMask from "react-input-mask";
import {ReactNode} from "react";
import './PhoneInput.scss';
import {Form} from "antd";

type PhoneInputProps = {
  value?: string,
  onChange?: Function
}

export const PhoneInput = (
  { value, onChange }: PhoneInputProps
): ReactNode => {
  const { status } = Form.Item.useStatus();
  const mask = "+7 (999) 999-99-99";

  return (
    <InputMask
      className={`PhoneInput PhoneInput_${status}`}
      mask={mask}
      onChange={onChange}
      value={value}
      placeholder={mask}
    />
  )
}