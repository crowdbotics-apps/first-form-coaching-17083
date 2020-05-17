import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView46819Reducer from '../features/CalendarView46819/redux/reducers';
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
CalendarView46819: CalendarView46819Reducer,
SignIn146814: SignIn146814Reducer,
SignUp146813: SignUp146813Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});