import { Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import EditForm from "../components/organisms/EditForm";
import BasicTemplate from "../components/templates/BasicTemplate";
import { TextInput, TextArea, NumberInput } from "../components/molecules/Inputs";
import { useState } from "react";
import useGetDetailData from "../../hooks/useGetDetailData";

const breadcrumbs = [
    <Link to={`/`} key="1">
        ホーム
    </Link>,
    <Link to={`/food`} key="2">
        食材一覧
    </Link>,
    <Typography key="3" color="text.primary">
        食材詳細
    </Typography>,
];

const FoodDetail = () => {
    const initState = {
        id: '',
        name: '',
        content: '',
        cost: 0,
    }

    const [detail, setDetail] = useState(initState);
    const [readOnly, setReadOnly] = useState(true);
    const {id} = useParams();

    const changeEditData = (isState) => {
        setDetail(isState);
    }

    const changeReadOnly = (isState) => {
        setReadOnly(isState);
    }

    useGetDetailData(`food/${id}/`, changeEditData);

    return (
        <>
            <BasicTemplate breadcrumbs={breadcrumbs}>
                <h1>食材詳細</h1>
                <EditForm
                    url={`food/${detail.id}/`}
                    destroyRedirectPath={'http://localhost:3000/food'}
                    editMode={readOnly}
                    editModeChange={changeReadOnly}
                    updateData={detail}
                >
                    <TextInput
                        label='食材名'
                        name='name'
                        value={detail.name}
                        changeState={changeEditData}
                        isState={detail}
                        readOnly={readOnly}
                    />
                    <TextArea
                        label='食材説明'
                        name='content'
                        value={detail.content}
                        changeState={changeEditData}
                        isState={detail}
                        readOnly={readOnly}
                    />
                    <NumberInput
                        label='食材価格'
                        name='cost'
                        value={detail.cost}
                        changeState={changeEditData}
                        isState={detail}
                        readOnly={readOnly}
                    />
                </EditForm>
            </BasicTemplate>
        </>
    )
}

export default FoodDetail;