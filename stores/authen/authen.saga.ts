import { put, takeLatest } from "redux-saga/effects";
import { ActionReducer } from "services/action.reducer";
import { IActionSaga } from "services/action.saga";
import { callPost } from "services/api.services";
import authService from "services/auth.service";
import { GeneralAction } from "stores/general/general.action";
import { AuthenAction } from "./authen.action";

const hostAuth = `${process.env.NEXT_PUBLIC_API_URL}`;

function* authenLoginR(e: IActionSaga) {
    const { username, password } = e.payload;

    try {
        
        const { token } = yield callPost(`${hostAuth}/api/v1/authen/login`, {
            username,
            password
        }) || {};

        //  เก็บข้อมูลสำคัญไว้ใน authen.reducer
        yield put(ActionReducer({ type: AuthenAction.AUTHEN_LOGIN_S, payload: { token } }));

        // กำหนด Authorization ใน Axios
        authService.setAuthorization(token);

        //Success
        e.onSuccess();

    }catch(err) {
        e.onFailure(err);
    }
}

function* authenLogoutR(e: IActionSaga) {
    const { force } = e.payload;
    try {
        if(force !== true) {
            yield callPost(`${hostAuth}/api/v1/authen/logout`);
        }
        //ลบ Authorization Token ใน Axios
        authService.removeAuthorization();
    }catch(err) {
        e.onFailure(err);
    }
}

function* authenTokenR(e: IActionSaga) {
    const { token, isFormAuthen } = e.payload;
    try {

        if(isFormAuthen) {
            yield put(ActionReducer({ type: AuthenAction.AUTHEN_LOGIN_S, payload: { token } }))
        }

        const userInfo = yield callPost(`${hostAuth}/api/v1/authen/loginToken`);

        yield put(ActionReducer({ type: GeneralAction.GENERAL_TOKEN_S, payload: { userInfo } }))

        e.onSuccess(userInfo)
    }catch(err) {
        e.onFailure(err);
    }
}

export default [
    takeLatest(AuthenAction.AUTHEN_LOGIN_R, (e: IActionSaga) => authenLoginR(e)),
    takeLatest(AuthenAction.AUTHEN_LOGOUT_R, (e: IActionSaga) => authenLogoutR(e)),
    takeLatest(AuthenAction.AUTHEN_TOKEN_R, (e: IActionSaga) => authenTokenR(e))
];