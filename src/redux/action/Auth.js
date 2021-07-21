import { API_CODE, API_URL } from '../../network/constant';
import req from '../../network/request';
import { AUTH } from '../constant';

const signIn = params => {
    console.log('123', params);
    return {
        type: AUTH.sign_in,
        payload: params
    };
};

const asyncSigIn = params => {
    return async dispatch => {
        const response = await req.post(API_URL.LOGIN, {
            email: params.email,
            password: params.password
        });

        if (response.status === API_CODE.SUCCESS) {
            dispatch(
                signIn({ email: params.email, token: response.data.data.token })
            );

            return true;
        } else {
            return false;
        }
    };
};

export { signIn, asyncSigIn };
