import { useEffect } from "react";
import Api from "../config/Api";

const useGetDetailData = (url, setData) => {

    useEffect(() => {
        Api.get(url)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                throw new Error(err)
            })
            .finally(() => {

            })
    }, [url])
}

export default useGetDetailData;