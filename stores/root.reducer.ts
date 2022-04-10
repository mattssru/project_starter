import { combineReducers } from 'redux'
import authenReducer, { IAuthenState } from './authen/authen.reducer'
import generalReducer, { IGeneralState } from './general/general.reducer'

// ----------------------------- Application

// ----------------------------- Application

export const rootPersist = ['authenReducer', 'generalReducer']
export const authenPersist = ['authenReducer']

export interface IStates {
    authenReducer: IAuthenState;
    generalReducer: IGeneralState;
}
export default combineReducers({
    authenReducer,
    generalReducer
})