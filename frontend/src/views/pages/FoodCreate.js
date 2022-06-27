import { useState } from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import BasicTemplate from "../components/templates/BasicTemplate";
import CreateForm from "../components/organisms/CreateForm";
import { TextInput, TextArea, NumberInput }  from '../components/molecules/Inputs';

const breadcrumbs = [
    <Link to={`/`} key="1">
        ホーム
    </Link>,
    <Typography key="2" color="text.primary">
        食材登録
    </Typography>,
];

const FoodCreate = () => {
    const initCreateData = {
        name: '',
        content: '',
        cost: 0,
    }

    const [createData, setCreateData] = useState(initCreateData);

    const changeCreateData = (isState) => {
        setCreateData(isState);
    }

    return (
        <>
            <BasicTemplate breadcrumbs={breadcrumbs}>
                <h1>食材登録</h1>
                <CreateForm
                    resetState={changeCreateData}
                    isResetState={initCreateData}
                    createUrl={`food/`}
                    createData={createData}
                >
                    <TextInput
                        label='食材名'
                        name='name'
                        value={createData.name}
                        changeState={changeCreateData}
                        isState={createData}
                    />
                    <TextArea
                        label='食材説明'
                        name='content'
                        value={createData.content}
                        changeState={changeCreateData}
                        isState={createData}
                    />
                    <NumberInput
                        label='食材価格'
                        name='cost'
                        value={createData.cost}
                        changeState={changeCreateData}
                        isState={createData}
                    />
                </CreateForm>
            </BasicTemplate>
        </>
    )
}

export default FoodCreate;