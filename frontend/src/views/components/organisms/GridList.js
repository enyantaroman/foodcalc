import { Grid, Pagination } from "@mui/material";
import CardItem from "../molecules/CardItem";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const GridList = (props) => {
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
            <Grid
                container
                spacing={{ xs: 2, md: 3}}
                columns={{ xs: 4, sm: 8, md: 12}}
            >
                {displayedItems.map(obj => (
                    <Grid
                        item
                        xs={2} sm={4} md={4}
                        key={obj.id}
                    >
                        <Link to={`${obj.id}`} style={{ textDecoration: 'none'}}>
                            <CardItem
                                img={'storage/images/free.jpg'}
                                name={obj.name}
                            />
                        </Link>
                    </Grid>
                ))}
            </Grid>
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

export default GridList;