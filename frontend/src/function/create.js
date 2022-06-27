import Api from "../config/Api";

const create = (resetState, isResetState, url, data) => {
    Api.post(url, JSON.stringify(data))
    .then((res) => {
        resetState(isResetState);
    })
    .catch((err) => {
        throw new Error(err);
    })
    .finally(() => {

    })
}

export default create;