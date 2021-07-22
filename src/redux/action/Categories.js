import { API_CODE, API_METHOD, API_URL } from '../../network/constant';
import req, { callRequest } from '../../network/request';
import { CATEGORIES } from '../constant';

const getCategories = params => {
    return {
        type: CATEGORIES.get,
        payload: params
    };
};

const asyncGetCategories = () => {
    return async dispatch => {
        // console.log(req.defaults.headers.common['Authorization']);
        const res = await callRequest(API_URL.GET_CATEGORIES, API_METHOD.GET);
        if (res.status === API_CODE.SUCCESS) {
            dispatch(getCategories(res.data.data));
        }
    };
};

export { getCategories, asyncGetCategories };
