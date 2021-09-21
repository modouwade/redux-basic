import axios from 'axios';

export const GET_POST = 'GET_POST'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST' 
export const ADD_LIKE = 'ADD_LIKE' 


export const getPosts = () => {
    return (dispatch) => {
        return axios
        .get('http://localhost:3000/posts?_sort=id$_order=desc')
        .then((res) => {
            dispatch({
                type : GET_POST, payload : res.data
            });
        })
        .catch( (err) => console.log(err));
    }
}

export const addPosts = (data) => {
    return (dispatch) => {
        return axios
        .post('http://localhost:3000/posts', data)
        .then((res) => {
            dispatch({
                type : ADD_POST, payload : data
            });
        })
        .catch( (err) => console.log(err));
    }
}

export const editPosts = (data) => {
    return (dispatch) => {
        return axios({
            method : 'put',
            url : `http://localhost:3000/posts/${data.id}`,
            data : {...data}
        })
        .then((res) => {
            dispatch({
                type : EDIT_POST,
                payload : { ...data }
            });
        })
        .catch( (err) => console.log(err));
    }
}

export const deletePosts = (postId) => {
    return (dispatch) => {
        return axios({
            method : 'delete',
            url : `http://localhost:3000/posts/${postId}`,
        })
        .then((res) => {
            dispatch({
                type : DELETE_POST,
                payload : { postId }
            });
        })
        .catch( (err) => console.log(err));
    }
}


export const addLikes = (data) => {
    return (dispatch) => {
        return axios({
            method : 'put',
            url : `http://localhost:3000/posts/${data.id}`,
            data : {...data}
        })
        .then((res) => {
            dispatch({
                type : ADD_LIKE,
                payload : { ...data }
            });
        })
        .catch( (err) => console.log(err));
    }
}

