import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import BasicTemplate from "../components/templates/BasicTemplate";

const breadcrumbs = [
    <Link to={`/`} key="1">
        ホーム
    </Link>,
    <Link to={`/calc`} key="2">
        計算一覧
    </Link>,
    <Typography key="3" color="text.primary">
        計算詳細
    </Typography>,
];

const CalcDetail = () => {
    return (
        <>
            <BasicTemplate breadcrumbs={breadcrumbs}>
                <h1>計算詳細</h1>
            </BasicTemplate>
        </>
    )
}

export default CalcDetail;