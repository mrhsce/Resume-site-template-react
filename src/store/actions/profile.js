import { profile } from '../services';
import * as actionTypes from '../types';
import { showLoading, hideLoading, failed } from './actionBase';
import wrapper from './wrapper';
import $ from "jquery";

const loaded = data => {
    return {
        type: actionTypes.PROFILE_LOADED,
        data
    };
};


export const getProfile = () => {
    return async dispatch => {
        $.ajax({
            url:'./resumeData.json',
            dataType:'json',
            cache: false,
            success: function(data){
                dispatch(loaded(data));
            }.bind(this),
            error: function(xhr, status, err){
                dispatch(failed(err));
            }
        });
    };
};

export const getResume = () => async (dispatch) => {
    dispatch(showLoading());
    // await wrapper(profile.getResume());
    profile.getResume()
    dispatch(hideLoading());
};
