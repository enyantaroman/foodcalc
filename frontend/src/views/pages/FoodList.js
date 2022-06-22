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
        食材一覧
    </Typography>,
];

const FoodList = () => {
    const initState = {
        id: '',
        name: '',
    }

    const getListData = useGetListData(`food/`, initState);

    return (
        <>
            <BasicTemplate breadcrumbs={breadcrumbs}>
                <h1>食材一覧</h1>
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

export default FoodList;