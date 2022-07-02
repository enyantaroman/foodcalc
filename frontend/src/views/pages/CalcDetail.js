import { Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import EditCalcForm from "../components/organisms/EditCalcForm";
import BasicTemplate from "../components/templates/BasicTemplate";
import { TextInput } from "../components/molecules/Inputs";
import CalcMenuSelectBox from "../components/organisms/CalcMenuSelectBox";
import { useState } from "react";
import useGetOptionData from "../../hooks/useGetOptionData";
import useGetDetailData from "../../hooks/useGetDetailData";
import FoodInputSet from "../components/organisms/FoodInputSet";


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
    const initState = {
        title: '', cost: 0,
        menu_id1: '', menu_id2: '', menu_id3: '', menu_id4: '', menu_id5: '', 
        food_id1: '', food_number1: 0, food_id2: '', food_number2: 0, food_id3: '', food_number3: 0,
        food_id4: '', food_number4: 0, food_id5: '', food_number5: 0, food_id6: '', food_number6: 0,
        food_id7: '', food_number7: 0, food_id8: '', food_number8: 0, food_id9: '', food_number9: 0,
        food_id10: '', food_number10: 0, food_id11: '', food_number11: 0, food_id12: '', food_number12: 0,
        food_id13: '', food_number13: 0, food_id14: '', food_number14: 0, food_id15: '', food_number15: 0,
        food_id16: '', food_number16: 0, food_id17: '', food_number17: 0, food_id18: '', food_number18: 0,
        food_id19: '', food_number19: 0, food_id20: '', food_number20: 0, food_id21: '', food_number21: 0,
        food_id22: '', food_number22: 0, food_id23: '', food_number23: 0, food_id24: '', food_number24: 0,
        food_id25: '', food_number25: 0
    }

    const [detail, setDetail] = useState(initState);
    const [menuDisp, setMenuDisp] = useState(true);
    const [foodDisp, setFoodDisp] = useState(true);
    const {id} = useParams();

    const changeEditData = (isState) => {
        setDetail(isState);
    }

    const changeMenuDisp = (isState) => {
        setMenuDisp(isState);
    }

    const changeFoodDisp = (isState) => {
        setFoodDisp(isState);
    }
    
    const getMenuOptionData = useGetOptionData('menu/');
    const getFoodOptionData = useGetOptionData('food/');

    useGetDetailData(`calc/${id}/`, changeEditData);
    return (
        <>
            <BasicTemplate breadcrumbs={breadcrumbs}>
                <h1>計算詳細</h1>
                <EditCalcForm
                    url={`food/${detail.id}/`}
                    destroyRedirectPath={'http://localhost:3000/calc'}
                    changeMenuDisp={changeMenuDisp}
                    menuDisp={menuDisp}
                    changeFoodDisp={changeFoodDisp}
                    foodDisp={foodDisp}
                >
                    <TextInput
                        label='計算タイトル'
                        name='title'
                        value={detail.title}
                        changeState={changeEditData}
                        isState={detail}
                    />
                    {
                        menuDisp?
                        <>
                            <CalcMenuSelectBox
                                label={'メニュー1'}
                                name={'menu_id1'}
                                value={detail.menu_id1}
                                option={getMenuOptionData}
                                readOnly={true}
                            />
                            <CalcMenuSelectBox
                                label={'メニュー2'}
                                name={'menu_id2'}
                                value={detail.menu_id2}
                                option={getMenuOptionData}
                                readOnly={true}
                            />
                            <CalcMenuSelectBox
                                label={'メニュー3'}
                                name={'menu_id3'}
                                value={detail.menu_id3}
                                option={getMenuOptionData}
                                readOnly={true}
                            />
                            <CalcMenuSelectBox
                                label={'メニュー4'}
                                name={'menu_id4'}
                                value={detail.menu_id4}
                                option={getMenuOptionData}
                                readOnly={true}
                            />
                            <CalcMenuSelectBox
                                label={'メニュー5'}
                                name={'menu_id5'}
                                value={detail.menu_id5}
                                option={getMenuOptionData}
                                readOnly={true}
                            />
                        </>
                        :
                        <h1>メニューは非表示中</h1>
                    }
                    {
                        foodDisp?
                        <>
                            <FoodInputSet
                                index={1}
                                valId={detail.food_id1}
                                valNum={detail.food_number1}
                                option={getFoodOptionData}
                                readOnly={true}
                            />
                            <FoodInputSet
                                index={2}
                                valId={detail.food_id2}
                                valNum={detail.food_number2}
                                option={getFoodOptionData}
                                readOnly={true}
                            />
                            <FoodInputSet
                                index={3}
                                valId={detail.food_id3}
                                valNum={detail.food_number3}
                                option={getFoodOptionData}
                                readOnly={true}
                            />
                            <FoodInputSet
                                index={4}
                                valId={detail.food_id4}
                                valNum={detail.food_number4}
                                option={getFoodOptionData}
                                readOnly={true}
                            />
                            <FoodInputSet
                                index={5}
                                valId={detail.food_id5}
                                valNum={detail.food_number5}
                                option={getFoodOptionData}
                                readOnly={true}
                            />
                            <FoodInputSet
                                index={6}
                                valId={detail.food_id6}
                                valNum={detail.food_number6}
                                option={getFoodOptionData}
                                readOnly={true}
                            />
                            <FoodInputSet
                                index={7}
                                valId={detail.food_id7}
                                valNum={detail.food_number7}
                                option={getFoodOptionData}
                                readOnly={true}
                            />
                            <FoodInputSet
                                index={8}
                                valId={detail.food_id8}
                                valNum={detail.food_number8}
                                option={getFoodOptionData}
                                readOnly={true}
                            />
                            <FoodInputSet
                                index={9}
                                valId={detail.food_id9}
                                valNum={detail.food_number9}
                                option={getFoodOptionData}
                                readOnly={true}
                            />
                            <FoodInputSet
                                index={10}
                                valId={detail.food_id10}
                                valNum={detail.food_number10}
                                option={getFoodOptionData}
                                readOnly={true}
                            />
                            <FoodInputSet
                                index={11}
                                valId={detail.food_id11}
                                valNum={detail.food_number11}
                                option={getFoodOptionData}
                                readOnly={true}
                            />
                            <FoodInputSet
                                index={12}
                                valId={detail.food_id12}
                                valNum={detail.food_number12}
                                option={getFoodOptionData}
                                readOnly={true}
                            />
                            <FoodInputSet
                                index={13}
                                valId={detail.food_id13}
                                valNum={detail.food_number13}
                                option={getFoodOptionData}
                                readOnly={true}
                            />
                            <FoodInputSet
                                index={14}
                                valId={detail.food_id14}
                                valNum={detail.food_number14}
                                option={getFoodOptionData}
                                readOnly={true}
                            />
                            <FoodInputSet
                                index={15}
                                valId={detail.food_id15}
                                valNum={detail.food_number15}
                                option={getFoodOptionData}
                                readOnly={true}
                            />
                            <FoodInputSet
                                index={16}
                                valId={detail.food_id16}
                                valNum={detail.food_number16}
                                option={getFoodOptionData}
                                readOnly={true}
                            />
                            <FoodInputSet
                                index={17}
                                valId={detail.food_id17}
                                valNum={detail.food_number17}
                                option={getFoodOptionData}
                                readOnly={true}
                            />
                            <FoodInputSet
                                index={18}
                                valId={detail.food_id18}
                                valNum={detail.food_number18}
                                option={getFoodOptionData}
                                readOnly={true}
                            />
                            <FoodInputSet
                                index={19}
                                valId={detail.food_id19}
                                valNum={detail.food_number19}
                                option={getFoodOptionData}
                                readOnly={true}
                            />
                            <FoodInputSet
                                index={20}
                                valId={detail.food_id20}
                                valNum={detail.food_number20}
                                option={getFoodOptionData}
                                readOnly={true}
                            />
                            <FoodInputSet
                                index={21}
                                valId={detail.food_id21}
                                valNum={detail.food_number21}
                                option={getFoodOptionData}
                                readOnly={true}
                            />
                            <FoodInputSet
                                index={22}
                                valId={detail.food_id22}
                                valNum={detail.food_number22}
                                option={getFoodOptionData}
                                readOnly={true}
                            />
                            <FoodInputSet
                                index={23}
                                valId={detail.food_id23}
                                valNum={detail.food_number23}
                                option={getFoodOptionData}
                                readOnly={true}
                            />
                            <FoodInputSet
                                index={24}
                                valId={detail.food_id24}
                                valNum={detail.food_number24}
                                option={getFoodOptionData}
                                readOnly={true}
                            />
                            <FoodInputSet
                                index={25}
                                valId={detail.food_id25}
                                valNum={detail.food_number25}
                                option={getFoodOptionData}
                                readOnly={true}
                            />
                        </>
                        :
                        <h1>食材は非表示中</h1>
                    }
                </EditCalcForm>
            </BasicTemplate>
        </>
    )
}

export default CalcDetail;