import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import BasicTemplate from "../components/templates/BasicTemplate";

const breadcrumbs = [
    <Link to={`/`} key="1">
        ホーム
    </Link>,
    <Typography key="2" color="text.primary">
        計算登録
    </Typography>,
];

const CalcCreate = () => {
    return (
        <>
            <BasicTemplate breadcrumbs={breadcrumbs}>
                <h1>計算登録</h1>
            </BasicTemplate>
        </>
    )
}

export default CalcCreate;