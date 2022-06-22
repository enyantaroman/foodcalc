import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import BasicTemplate from "../components/templates/BasicTemplate";
import GridList from "../components/organisms/GridList";
import useGetListData from "../../hooks/useGetListData";

const breadcrumbs = [
    <Link to={`/`} key="1">
        ホーム
    </Link>,
    <Typography key="2" color="text.primary">
        メニュー一覧
    </Typography>,
];

const MenuList = () => {
    const initState = {
        id: '',
        name: '',
    }

    const getListData = useGetListData(`menu/`, initState);

    return (
        <>
            <BasicTemplate breadcrumbs={breadcrumbs}>
                <h1>メニュー一覧</h1>
                {
                    getListData.loading?
                        <h2>...Loading</h2>
                        :
                        <GridList objs={getListData.data} />
                }
            </BasicTemplate>
        </>
    )
}

export default MenuList;