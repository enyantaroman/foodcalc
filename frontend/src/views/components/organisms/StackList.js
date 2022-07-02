import { Grid, Stack, Pagination } from "@mui/material";
import StickItem from "../molecules/StickItem";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const StackList = (props) => {
    const {objs} = props;

    // ページネーションの処理
    const [page, setPage] = useState(1); //ページ番号
    const [pageCount, setPageCount] = useState(); //ページ数
    const [allItems, setAllItems] = useState([]); //全データ
    const [displayedItems, setDisplayedItems] = useState([]) //表示データ
    const displayNum = 6; //1ページあたりの項目数
    useEffect(() => {
      setAllItems(objs);
      // ページカウントの計算（今回は6項目/ページなので2ページ）
      setPageCount(Math.ceil(objs.length/displayNum));
      // 表示データを抽出
      setDisplayedItems(objs.slice(((page - 1) * displayNum), page * displayNum))
    }, [objs, page])
    const handleChange = (event, index) => {
        //ページ移動時にページ番号を更新
        setPage(index);
        //ページ移動時に表示データを書き換える
        setDisplayedItems(allItems.slice(((index - 1) * displayNum), index * displayNum))
    }
    return (
        <>
            <Stack spacing={4}>
                {displayedItems.map(obj => (
                    <Link to={`${obj.id}`} style={{ textDecoration: 'none'}} key={obj.id}>
                        <StickItem
                            title={obj.title}
                            cost={obj.cost}
                        />
                    </Link>
                ))}
            </Stack>
            <Grid
                container
                justifyContent={'center'}
                p={5}
            >
                <Pagination count={pageCount} page={page} color="primary" onChange={handleChange} />
            </Grid>
        </>
    )
}

export default StackList;