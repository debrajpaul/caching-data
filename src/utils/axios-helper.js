import axios from "axios";
function get(url) {
    return axios
        .get(url)
        .then(r => r.data)
        .catch(e => {
            return Promise.reject(e);
        });
}
function post(url, body) {
    return axios
        .post(url, body)
        .then(r => r.data)
        .catch(e => {
            return Promise.reject(e);
        });
}
export default {
    get,
    post
};
