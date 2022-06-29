import Api from "../config/Api";

const update = (url, data) => {
    Api.put(url, JSON.stringify(data))
    .then((res) => {
    })
    .catch((err) => {
        throw new Error(err);
    })
    .finally(() => {

    })
}

export default update;