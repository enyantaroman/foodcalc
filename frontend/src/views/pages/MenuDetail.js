import { Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import BasicTemplate from "../components/templates/BasicTemplate";
import EditForm from "../components/organisms/EditForm";
import FoodInputSet from "../components/organisms/FoodInputSet";
import { TextInput, TextArea }  from '../components/molecules/Inputs';
import useGetOptionData from "../../hooks/useGetOptionData";
import useGetDetailData from "../../hooks/useGetDetailData";

const breadcrumbs = [
    <Link to={`/`} key="1">
        ホーム
    </Link>,
    <Link to={`/menu`} key="2">
        メニュー一覧
    </Link>,
    <Typography key="3" color="text.primary">
        メニュー詳細
    </Typography>,
];

const MenuDetail = () => {
    const initState = {
        name: '', content: '',
        food_id1: '', food_number1: 0,
        food_id2: '', food_number2: 0,
        food_id3: '', food_number3: 0,
        food_id4: '', food_number4: 0,
        food_id5: '', food_number5: 0,
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

    const getOptionData = useGetOptionData('food/');

    useGetDetailData(`menu/${id}/`, changeEditData);

    return (
        <>
            <BasicTemplate breadcrumbs={breadcrumbs}>
                <h1>メニュー詳細</h1>
                <EditForm
                    url={`menu/${detail.id}/`}
                    destroyRedirectPath={'http://localhost:3000/food'}
                    editMode={readOnly}
                    editModeChange={changeReadOnly}
                    updateData={detail}
                >
                    <TextInput
                        label='メニュー名'
                        name='name'
                        value={detail.name}
                        changeState={changeEditData}
                        isState={detail}
                        readOnly={readOnly}
                    />
                    <TextArea
                        label='メニュー説明'
                        name='content'
                        value={detail.content}
                        changeState={changeEditData}
                        isState={detail}
                        readOnly={readOnly}
                    />
                    <FoodInputSet
                        index={1}
                        valId={detail.food_id1}
                        valNum={detail.food_number1}
                        changeState={changeEditData}
                        isState={detail}
                        option={getOptionData}
                        readOnly={readOnly}
                    />
                    <FoodInputSet
                        index={2}
                        valId={detail.food_id2}
                        valNum={detail.food_number2}
                        changeState={changeEditData}
                        isState={detail}
                        option={getOptionData}
                        readOnly={readOnly}
                    />
                    <FoodInputSet
                        index={3}
                        valId={detail.food_id3}
                        valNum={detail.food_number3}
                        changeState={changeEditData}
                        isState={detail}
                        option={getOptionData}
                        readOnly={readOnly}
                    />
                    <FoodInputSet
                        index={4}
                        valId={detail.food_id4}
                        valNum={detail.food_number4}
                        changeState={changeEditData}
                        isState={detail}
                        option={getOptionData}
                        readOnly={readOnly}
                    />
                    <FoodInputSet
                        index={5}
                        valId={detail.food_id5}
                        valNum={detail.food_number5}
                        changeState={changeEditData}
                        isState={detail}
                        option={getOptionData}
                        readOnly={readOnly}
                    />
                </EditForm>
            </BasicTemplate>
        </>
    )
}

export default MenuDetail;