import { useState } from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import BasicTemplate from "../components/templates/BasicTemplate";
import CreateForm from "../components/organisms/CreateForm";
import { TextInput, TextArea }  from '../components/molecules/Inputs';
import useGetOptionData from "../../hooks/useGetOptionData";
import FoodInputSet from "../components/organisms/FoodInputSet";

const breadcrumbs = [
    <Link to={`/`} key="1">
        ホーム
    </Link>,
    <Typography key="2" color="text.primary">
        メニュー登録
    </Typography>,
];

const MenuCreate = () => {
    const initCreateData = {
        name: '', content: '',
        food_id1: '', food_number1: 0,
        food_id2: '', food_number2: 0,
        food_id3: '', food_number3: 0,
        food_id4: '', food_number4: 0,
        food_id5: '', food_number5: 0,
    }

    const [createData, setCreateData] = useState(initCreateData);

    const changeCreateData = (isState) => {
        setCreateData(isState);
    }

    const getOptionData = useGetOptionData('food/');

    return (
        <>
            <BasicTemplate breadcrumbs={breadcrumbs}>
                <h1>メニュー登録</h1>
                <CreateForm
                    resetState={changeCreateData}
                    isResetState={initCreateData}
                    createUrl={`menu/`}
                    createData={createData}
                >
                    <TextInput
                        label='メニュー名'
                        name='name'
                        value={createData.name}
                        changeState={changeCreateData}
                        isState={createData}
                    />
                    <TextArea
                        label='メニュー説明'
                        name='content'
                        value={createData.content}
                        changeState={changeCreateData}
                        isState={createData}
                    />
                    <FoodInputSet
                        index={1}
                        valId={createData.food_id1}
                        valNum={createData.food_number1}
                        changeState={changeCreateData}
                        isState={createData}
                        option={getOptionData}
                    />
                    <FoodInputSet
                        index={2}
                        valId={createData.food_id2}
                        valNum={createData.food_number2}
                        changeState={changeCreateData}
                        isState={createData}
                        option={getOptionData}
                    />
                    <FoodInputSet
                        index={3}
                        valId={createData.food_id3}
                        valNum={createData.food_number3}
                        changeState={changeCreateData}
                        isState={createData}
                        option={getOptionData}
                    />
                    <FoodInputSet
                        index={4}
                        valId={createData.food_id4}
                        valNum={createData.food_number4}
                        changeState={changeCreateData}
                        isState={createData}
                        option={getOptionData}
                    />
                    <FoodInputSet
                        index={5}
                        valId={createData.food_id5}
                        valNum={createData.food_number5}
                        changeState={changeCreateData}
                        isState={createData}
                        option={getOptionData}
                    />
                </CreateForm>
            </BasicTemplate>
        </>
    )
}

export default MenuCreate;