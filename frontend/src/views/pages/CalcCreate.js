import { useState } from "react";
import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import BasicTemplate from "../components/templates/BasicTemplate";
import CalcForm from "../components/organisms/CalcForm";
import CreateCalcForm from "../components/organisms/CreateCalcForm";
import FoodInputSet from "../components/organisms/FoodInputSet";
import { TextInput, NumberInput }  from '../components/molecules/Inputs';
import useGetOptionData from "../../hooks/useGetOptionData";
import CalcMenuSelectBox from "../components/organisms/CalcMenuSelectBox";

const breadcrumbs = [
    <Link to={`/`} key="1">
        ホーム
    </Link>,
    <Typography key="2" color="text.primary">
        計算登録
    </Typography>,
];

const CalcCreate = () => {
    const initCreateData = {
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

    const initCalcData = { 
        food_number1: 0, food_number2: 0, food_number3: 0, food_number4: 0, food_number5: 0,
        food_number6: 0, food_number7: 0, food_number8: 0, food_number9: 0, food_number10: 0,
        food_number11: 0, food_number12: 0, food_number13: 0, food_number14: 0, food_number15: 0,
        food_number16: 0, food_number17: 0, food_number18: 0, food_number19: 0, food_number20: 0,
        food_number21: 0, food_number22: 0, food_number23: 0, food_number24: 0, food_number25: 0,
    }

    const [createData, setCreateData] = useState(initCreateData);
    const [calcData, setCalcData] = useState(initCalcData);
    const [readOnly, setReadOnly] = useState(false);

    const changeCreateData = (isState) => {
        setCreateData(isState);
    }

    const changeCalcData = (isState) => {
        setCalcData(isState);
    }

    const changeReadOnly = (isState) => {
        setReadOnly(isState);
    }

    const getMenuOptionData = useGetOptionData('menu/');
    const getFoodOptionData = useGetOptionData('food/');

    return (
        <>
            <BasicTemplate breadcrumbs={breadcrumbs}>
                <h1>計算登録</h1>
                <CalcForm
                    resetState={changeCreateData}
                    isResetState={initCreateData}
                    resetCalcState={changeCalcData}
                    isResetCalcState={initCalcData}
                    calcMode={readOnly}
                    calcModeChange={changeReadOnly}
                    createData={createData}
                    createDataChange={changeCreateData}
                    calcData={calcData}
                    calcDataChange={changeCalcData}
                >
                    <TextInput
                        label='計算タイトル'
                        name='title'
                        value={createData.title}
                        changeState={changeCreateData}
                        isState={createData}
                    />
                    <CalcMenuSelectBox
                        label={'メニュー1'}
                        name={'menu_id1'}
                        value={createData.menu_id1}
                        changeState={changeCreateData}
                        isState={createData}
                        changeCalcState={changeCalcData}
                        isCalcState={calcData}
                        option={getMenuOptionData}
                        readOnly={readOnly}
                    />
                    <CalcMenuSelectBox
                        label={'メニュー2'}
                        name={'menu_id2'}
                        value={createData.menu_id2}
                        changeState={changeCreateData}
                        isState={createData}
                        changeCalcState={changeCalcData}
                        isCalcState={calcData}
                        option={getMenuOptionData}
                        readOnly={readOnly}
                    />
                    <CalcMenuSelectBox
                        label={'メニュー3'}
                        name={'menu_id3'}
                        value={createData.menu_id3}
                        changeState={changeCreateData}
                        isState={createData}
                        changeCalcState={changeCalcData}
                        isCalcState={calcData}
                        option={getMenuOptionData}
                        readOnly={readOnly}
                    />
                    <CalcMenuSelectBox
                        label={'メニュー4'}
                        name={'menu_id4'}
                        value={createData.menu_id4}
                        changeState={changeCreateData}
                        isState={createData}
                        changeCalcState={changeCalcData}
                        isCalcState={calcData}
                        option={getMenuOptionData}
                        readOnly={readOnly}
                    />
                    <CalcMenuSelectBox
                        label={'メニュー5'}
                        name={'menu_id5'}
                        value={createData.menu_id5}
                        changeState={changeCreateData}
                        isState={createData}
                        changeCalcState={changeCalcData}
                        isCalcState={calcData}
                        option={getMenuOptionData}
                        readOnly={readOnly}
                    />
                </CalcForm>
                {
                    readOnly?
                    <CreateCalcForm
                        calcModeChange={changeReadOnly}
                        calcMode={readOnly}
                        resetState={changeCreateData}
                        isResetState={initCreateData}
                        resetCalcState={changeCalcData}
                        isResetCalcState={initCalcData}
                        createUrl={`calc/`}
                        createData={createData}
                    >
                        <FoodInputSet
                            index={1}
                            valId={createData.food_id1}
                            valNum={createData.food_number1}
                            changeState={changeCreateData}
                            isState={createData}
                            option={getFoodOptionData}
                            readOnly={true}
                        />
                        <FoodInputSet
                            index={2}
                            valId={createData.food_id2}
                            valNum={createData.food_number2}
                            changeState={changeCreateData}
                            isState={createData}
                            option={getFoodOptionData}
                            readOnly={true}
                        />
                        <FoodInputSet
                            index={3}
                            valId={createData.food_id3}
                            valNum={createData.food_number3}
                            changeState={changeCreateData}
                            isState={createData}
                            option={getFoodOptionData}
                            readOnly={true}
                        />
                        <FoodInputSet
                            index={4}
                            valId={createData.food_id4}
                            valNum={createData.food_number4}
                            changeState={changeCreateData}
                            isState={createData}
                            option={getFoodOptionData}
                            readOnly={true}
                        />
                        <FoodInputSet
                            index={5}
                            valId={createData.food_id5}
                            valNum={createData.food_number5}
                            changeState={changeCreateData}
                            isState={createData}
                            option={getFoodOptionData}
                            readOnly={true}
                        />
                        <FoodInputSet
                            index={6}
                            valId={createData.food_id6}
                            valNum={createData.food_number6}
                            changeState={changeCreateData}
                            isState={createData}
                            option={getFoodOptionData}
                            readOnly={true}
                        />
                        <FoodInputSet
                            index={7}
                            valId={createData.food_id7}
                            valNum={createData.food_number7}
                            changeState={changeCreateData}
                            isState={createData}
                            option={getFoodOptionData}
                            readOnly={true}
                        />
                        <FoodInputSet
                            index={8}
                            valId={createData.food_id8}
                            valNum={createData.food_number8}
                            changeState={changeCreateData}
                            isState={createData}
                            option={getFoodOptionData}
                            readOnly={true}
                        />
                        <FoodInputSet
                            index={9}
                            valId={createData.food_id9}
                            valNum={createData.food_number9}
                            changeState={changeCreateData}
                            isState={createData}
                            option={getFoodOptionData}
                            readOnly={true}
                        />
                        <FoodInputSet
                            index={10}
                            valId={createData.food_id10}
                            valNum={createData.food_number10}
                            changeState={changeCreateData}
                            isState={createData}
                            option={getFoodOptionData}
                            readOnly={true}
                        />
                        <FoodInputSet
                            index={11}
                            valId={createData.food_id11}
                            valNum={createData.food_number11}
                            changeState={changeCreateData}
                            isState={createData}
                            option={getFoodOptionData}
                            readOnly={true}
                        />
                        <FoodInputSet
                            index={12}
                            valId={createData.food_id12}
                            valNum={createData.food_number12}
                            changeState={changeCreateData}
                            isState={createData}
                            option={getFoodOptionData}
                            readOnly={true}
                        />
                        <FoodInputSet
                            index={13}
                            valId={createData.food_id13}
                            valNum={createData.food_number13}
                            changeState={changeCreateData}
                            isState={createData}
                            option={getFoodOptionData}
                            readOnly={true}
                        />
                        <FoodInputSet
                            index={14}
                            valId={createData.food_id14}
                            valNum={createData.food_number14}
                            changeState={changeCreateData}
                            isState={createData}
                            option={getFoodOptionData}
                            readOnly={true}
                        />
                        <FoodInputSet
                            index={15}
                            valId={createData.food_id15}
                            valNum={createData.food_number15}
                            changeState={changeCreateData}
                            isState={createData}
                            option={getFoodOptionData}
                            readOnly={true}
                        />
                        <FoodInputSet
                            index={16}
                            valId={createData.food_id16}
                            valNum={createData.food_number16}
                            changeState={changeCreateData}
                            isState={createData}
                            option={getFoodOptionData}
                            readOnly={true}
                        />
                        <FoodInputSet
                            index={17}
                            valId={createData.food_id17}
                            valNum={createData.food_number17}
                            changeState={changeCreateData}
                            isState={createData}
                            option={getFoodOptionData}
                            readOnly={true}
                        />
                        <FoodInputSet
                            index={18}
                            valId={createData.food_id18}
                            valNum={createData.food_number18}
                            changeState={changeCreateData}
                            isState={createData}
                            option={getFoodOptionData}
                            readOnly={true}
                        />
                        <FoodInputSet
                            index={19}
                            valId={createData.food_id19}
                            valNum={createData.food_number19}
                            changeState={changeCreateData}
                            isState={createData}
                            option={getFoodOptionData}
                            readOnly={true}
                        />
                        <FoodInputSet
                            index={20}
                            valId={createData.food_id20}
                            valNum={createData.food_number20}
                            changeState={changeCreateData}
                            isState={createData}
                            option={getFoodOptionData}
                            readOnly={true}
                        />
                        <FoodInputSet
                            index={21}
                            valId={createData.food_id21}
                            valNum={createData.food_number21}
                            changeState={changeCreateData}
                            isState={createData}
                            option={getFoodOptionData}
                            readOnly={true}
                        />
                        <FoodInputSet
                            index={22}
                            valId={createData.food_id22}
                            valNum={createData.food_number22}
                            changeState={changeCreateData}
                            isState={createData}
                            option={getFoodOptionData}
                            readOnly={true}
                        />
                        <FoodInputSet
                            index={23}
                            valId={createData.food_id23}
                            valNum={createData.food_number23}
                            changeState={changeCreateData}
                            isState={createData}
                            option={getFoodOptionData}
                            readOnly={true}
                        />
                        <FoodInputSet
                            index={24}
                            valId={createData.food_id24}
                            valNum={createData.food_number24}
                            changeState={changeCreateData}
                            isState={createData}
                            option={getFoodOptionData}
                            readOnly={true}
                        />
                        <FoodInputSet
                            index={25}
                            valId={createData.food_id25}
                            valNum={createData.food_number25}
                            changeState={changeCreateData}
                            isState={createData}
                            option={getFoodOptionData}
                            readOnly={true}
                        />
                        <NumberInput
                            label='計算金額'
                            name='cost'
                            value={createData.cost}
                            changeState={changeCreateData}
                            isState={createData}
                            readOnly={true}
                        />
                    </CreateCalcForm>
                    :
                    <Box>計算してください</Box>
                }
            </BasicTemplate>
        </>
    )
}

export default CalcCreate;