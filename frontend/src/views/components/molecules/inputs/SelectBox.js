import { Select, MenuItem } from "@mui/material";

const SelectBox = () => {
    const option = [];

    return (
        <Select
            sx={{width: 300, mr: 5}}
        >
            <MenuItem value=''>選択しない</MenuItem>
            {option.map((obj) => (
                <MenuItem key={obj.id} value={obj.id}>{obj.name}</MenuItem>
            ))}
        </Select>
    )
}

export default SelectBox;