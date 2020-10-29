import * as actionTypes from '../types'



export const showLoading = () => {
    return {
        type: actionTypes.START_LOADING
    };
};
export const hideLoading = () => {
    return {
        type: actionTypes.STOP_LOADING
    };
};

export const showSignOutOverlay = () => {
    return {
        type: actionTypes.OVERLAY_SHOW_SIGNOUT
    };
};

export const hideSignOutOverlay = () => {
    return {
        type: actionTypes.OVERLAY_HIDE_SIGNOUT
    };
};

export const showRatingOverlay = () => {
    return {
        type: actionTypes.OVERLAY_SHOW_RATING
    };
};

export const hideRatingOverlay = () => {
    return {
        type: actionTypes.OVERLAY_HIDE_RATING
    };
};

export const failed = error => {
    //Message.showError(error);
    //return openSnackbar({ message: error, autoHideDuration: 6000 });
    return { type: actionTypes.FAILED, error: error };
};


export const clearError = () => {
    //Message.showError(error);
    //return openSnackbar({ message: error, autoHideDuration: 6000 });
    return { type: actionTypes.CLEAR_ERROR };
};
