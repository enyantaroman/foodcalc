import Api from "../config/Api"

const destroy = (url, redirectPath) => {
    Api.delete(url)
        .then((res) => {
            window.location.href = redirectPath
        })
        .catch((err) => {
            throw new Error(err);
        })
        .finally(() => {

        })
}

export default destroy;