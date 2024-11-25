import {Nullable} from "@/shared/types";

export type UserFormPurchaseProps = {
  className?: string,
  onSubmit: (data: FormStateType) => void
}

export type FormStateType = {
  address: Nullable<string>
  email: Nullable<string>
  firstName: Nullable<string>
  phone: Nullable<string>
  secondName: Nullable<string>
}