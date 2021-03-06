import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import RegisterReducer from './RegisterReducer';
import HomeReducer from './HomeReducer';
import SearchReducer from './SearchReducer';
import ProfileReducer from './ProfileReducer';
import NavigationReducer from './NavigationReducer';
import TripReducer from './TripReducer';
import TripDetailReducer from './TripDetailReducer';

export default combineReducers({
    auth: AuthReducer,
    reg: RegisterReducer,
    home: HomeReducer,
    search: SearchReducer,
    profile: ProfileReducer,
    navigation: NavigationReducer,
    trip: TripReducer,
    tripDetail: TripDetailReducer
});