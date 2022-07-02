import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import BasicTemplate from "../components/templates/BasicTemplate";
import StackList from "../components/organisms/StackList";
import useGetListData from "../../hooks/useGetListData";

const breadcrumbs = [
    <Link to={`/`} key="1">
        ホーム
    </Link>,
    <Typography key="2" color="text.primary">
        計算一覧
    </Typography>,
];

const CalcList = () => {
    const initState = {
        id: '',
        title: '',
        cost: 0,
    }

    const getListData = useGetListData(`calc/`, initState);
    return (
        <>
            <BasicTemplate breadcrumbs={breadcrumbs}>
                <h1>計算一覧</h1>
                {
                    getListData.loading?
                        <h2>...Loading</h2>
                        :
                        <StackList objs={getListData.data} />
                }
            </BasicTemplate>
        </>
    )
}

export default CalcList;