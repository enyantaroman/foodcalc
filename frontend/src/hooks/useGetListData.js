import { useState, useEffect } from "react";
import Api from "../config/Api";

const useGetListData = (url, initState) => {
    const [data, setData] = useState(initState);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Api.get(url)
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                throw new Error(err)
            })
            .finally(() => {

            })
    }, [url])

    return {data:data, loading:loading};
}

export default useGetListData;