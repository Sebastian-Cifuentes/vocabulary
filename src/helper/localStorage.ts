export const getData = () => {
    return {
        token: localStorage.getItem('token')
    }
}

export const setToken = () => {
    return localStorage.getItem('token');
}