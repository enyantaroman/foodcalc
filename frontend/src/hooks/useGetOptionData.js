import { useState, useEffect } from "react";
import Api from "../config/Api";

const useGetOptionData = (url) => {
    const [data, setData] = useState([]);

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

    return data;
}

export default useGetOptionData;