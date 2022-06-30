import { Grid } from "@mui/material";
import { SelectBox, NumberInput } from "../molecules/Inputs";
const FoodInputSet = (props) => {
    const { index, valId, valNum, changeState, isState, option, readOnly } = props;
    return (
        <Grid
            container
            rowSpacing={2}
            columns={16}
        >
            <Grid item xs={16} sm={10} md={6}>
                <SelectBox
                    label={'食材' + index}
                    name={'food_id' + index}
                    value={valId}
                    changeState={changeState}
                    isState={isState}
                    option={option}
                    readOnly={readOnly}
                />
            </Grid>
            <Grid item xs={16} sm={6} md={6}>
                <NumberInput
                    label={'食材' + index + 'の個数'}
                    name={'food_number' + index}
                    value={valNum}
                    changeState={changeState}
                    isState={isState}
                    readOnly={readOnly}
                />
            </Grid>
        </Grid>
    )
}

export default FoodInputSet;