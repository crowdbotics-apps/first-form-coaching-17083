import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn146814Reducer from '../features/SignIn146814/redux/reducers'
import SignUp146813Reducer from '../features/SignUp146813/redux/reducers'
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn146814: SignIn146814Reducer,
SignUp146813: SignUp146813Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});