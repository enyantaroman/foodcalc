import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Api from "../../../config/Api";

const CalcMenuSelectBox = (props) => {
    const { label, name, value, changeState, isState, changeCalcState, isCalcState, option, readOnly } = props;

    const calcMenu = (e) => {
        // 選択したメニューIDとその値を取得する
        const name = e.target.name
        const value = e.target.value
        
        let objs = {} // 選択したメニューに対する食材{food_id1: 1, food_number1: 1, food_id2: 2, food_number2: 1, food_id3: 3, …}
        let objs2 = {} // 選択したメニューに対する食材IDと食材の個数を対応させたもの{1: 1, 2: 1, 3: 1, null: 0}
        let objs3 = {} // 選択したメニューに対する食材IDだけのもの(nullを除く){food_id1: '1', food_id2: '2', food_id3: '3'}
        let objs4 = {} // 選択したメニューに対する食材の個数だけのもの(nullを除く){food_number1: 1, food_number2: 1, food_number3: 1}
        let objs5 = {} // 選択した全てのメニューに対する食材の個数を合計したもの{food_number1: 3, food_number2: 3, food_number3: 4, food_number4: 4, food_number5: 5, …}
        Api.get(`menu/${value}/`)
            .then((res) => {
                // 選択したメニューに対する食材を取得
                if (res.data.food_id1) objs.food_id1 = res.data.food_id1;
                if (res.data.food_number1) objs.food_number1 = res.data.food_number1
                if (res.data.food_id1) objs.food_id2 = res.data.food_id2;
                if (res.data.food_number1) objs.food_number2 = res.data.food_number2
                if (res.data.food_id1) objs.food_id3 = res.data.food_id3;
                if (res.data.food_number1) objs.food_number3 = res.data.food_number3
                if (res.data.food_id1) objs.food_id4 = res.data.food_id4;
                if (res.data.food_number1) objs.food_number4 = res.data.food_number4
                if (res.data.food_id1) objs.food_id5 = res.data.food_id5;
                if (res.data.food_number1) objs.food_number5 = res.data.food_number5

                // 選択したメニューに対する食材IDと食材の個数を対応させる
                objs2[objs.food_id1] = objs.food_number1;
                objs2[objs.food_id2] = objs.food_number2;
                objs2[objs.food_id3] = objs.food_number3;
                objs2[objs.food_id4] = objs.food_number4;
                objs2[objs.food_id5] = objs.food_number5;

                // 選択したメニューに対する食材IDだけを取得する
                // 選択したメニューに対する食材の個数だけを取得する
                Object.keys(objs2).forEach((key, index) => {
                    if (key === "null") return;
                    objs3['food_id' + (index+1)] = key
                    objs4['food_number' + (index+1)] = objs2[key]
                })

                // 選択した全てのメニューに対する食材の個数を合計する
                const temp = Object.keys(objs4)
                objs5 = temp.reduce((sum, value) => {
                    const x = isCalcState[value] === undefined ? 0 : isCalcState[value];
                    const y = objs4[value] === undefined ? 0 : objs4[value];
                    sum[value] = x + y;
                    return sum;
                }, {})

                // メニューIDと食材IDを登録データに格納する
                changeState({...isState, ...objs3, [name]: value})
                // 食材の個数を計算データに格納する
                changeCalcState({...isCalcState, ...objs5})
            })

    }
    return (
        <FormControl fullWidth>
            <InputLabel id={label}>{label}</InputLabel>
            <Select
                labelId={label}
                label={label}
                name={name} 
                value={value}
                onChange={(e) => {calcMenu(e);}}
                inputProps={{ readOnly: readOnly }}
                sx={{width: 300, mr: 5}}
            >
                <MenuItem value=''>選択しない</MenuItem>
                {option.map((obj) => (
                    <MenuItem key={obj.id} value={obj.id}>{obj.name}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default CalcMenuSelectBox;