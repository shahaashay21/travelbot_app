import { URL } from '../Config/Config';
import axios from 'axios';
import { PROCESS_MY_FEED, RENDER_MY_FEED, ERROR_MY_FEED } from './Types';
import { Actions } from 'react-native-router-flux';

export const getMyFeed = () => {
    return (dispatch) => {
        dispatch({type: PROCESS_MY_FEED});

        getTripFeed(dispatch);
    }
}

export const updateUserLike = (like_by_me, tripId, userId) => {
    return (dispatch) => {
        var sendData = {like_by_me, trip_id: tripId, userId};
        axios.post(URL+'/likeTrip', sendData, {
            timeout: 2000
        }).then(response => {
            response = response.data
            if(response.success){
                getTripFeed(dispatch);
            }else {
                dispatch ({ type: ERROR_MY_FEED });
            }
        }).catch(() => dispatch ({ type: ERROR_MY_FEED }))
    }
}

const getTripFeed = (dispatch) => {
        // axios.get(URL+'/trip/feed', {
        axios.post(URL+'/mytimeline', {
            timeout: 2000
        }).then(response => {
            response = response.data;
            dispatch({ type: RENDER_MY_FEED, payload: response });
        }).catch(() => dispatch ({ type: ERROR_MY_FEED }))
}

export const deleteTrip = (trip_id) => {
    return (dispatch) => {
        var sendData = {trip_id};
        axios.post(URL+'/trip/remove', sendData, {
            timeout: 2000
        }).then(response => {
            response = response.data
            if(response == "done"){
                getTripFeed(dispatch);
            }else {
                dispatch ({ type: ERROR_MY_FEED });
            }
        }).catch(() => dispatch ({ type: ERROR_MY_FEED }))
    }
}