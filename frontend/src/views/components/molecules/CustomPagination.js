import { useState } from "react";
import { Pagination } from "@mui/material";

const CustomPagination = () => {

    const [page, setPage] = useState(1); //ページ番号
    const [pageCount, setPageCount] = useState(); //ページ数

    return (
        <Pagination count={pageCount} page={page} color="primary" />
    )
}

export default CustomPagination;