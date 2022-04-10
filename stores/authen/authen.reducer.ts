import { IActionReducer } from "services/action.reducer"
import { AuthenAction } from "./authen.action";

export interface IAuthenState {
    isLoggedIn: boolean;
    token: string | undefined;
}
const AuthenState = {
    isLoggedIn: false, // true Login แล้ว
    token: undefined, // token ที่ได้หลังจาก Login
} as IAuthenState

export default (state = AuthenState, e: IActionReducer) => {
    switch (e.type) {

        case AuthenAction.AUTHEN_LOGIN_S: {
            const { token } = e.payload;
            return { ...state, isLoggedIn: true, token }
        }

        case AuthenAction.AUTHEN_LOGOUT_S: {
            return { ...state, ...AuthenState };
        }

        default: {
            return state;
        }
    }
    
}