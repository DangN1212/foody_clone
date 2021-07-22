import { API_CODE, API_METHOD, API_URL } from '../../network/constant';
import { callRequest } from '../../network/request';
import { AUTH } from '../constant';

const signIn = params => {
    return {
        type: AUTH.sign_in,
        payload: params
    };
};

const signOut = () => {
    return {
        type: AUTH.sign_out
    };
};

const asyncSigIn = params => {
    return async dispatch => {
        const response = await callRequest(API_URL.LOGIN, API_METHOD.POST, {
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

export { signIn, asyncSigIn, signOut };
