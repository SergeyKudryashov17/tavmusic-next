import { cartActions } from "../../model/cartSlice";
import { getDispatchedActions } from "../utils/getDispatchedActions";

export const cartActionsDispatch = getDispatchedActions(cartActions);