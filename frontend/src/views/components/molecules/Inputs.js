import { TextField, Select, MenuItem, FormControl } from "@mui/material";

export const TextInput = (props) => {
    const { label, name, value, changeState, isState } = props;

    const handleInputChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        changeState({...isState, [name]: value})
    }

    return (
        <FormControl fullWidth>
            <TextField
                label={label}
                name={name} 
                value={value}
                onChange={handleInputChange}
            />
        </FormControl>
    )
}

export const TextArea = (props) => {
    const { label, name, value, changeState, isState } = props;

    const handleInputChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        changeState({...isState, [name]: value})
    }

    return (
        <FormControl fullWidth>
            <TextField
                multiline
                rows={4}
                label={label}
                name={name} 
                value={value}
                onChange={handleInputChange}
             />
        </FormControl>
    )
}

export const SelectBox = () => {
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

export const PasswordInput = () => {
    return (
        <TextField
            type='password'
        />
    )
}

export const NumberInput = (props) => {
    const { label, name, value, changeState, isState } = props;

    const handleInputChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        changeState({...isState, [name]: value})
    }

    return (
        <TextField
            type='number'
            label={label}
            name={name} 
            value={value}
            onChange={handleInputChange}
         />
    )
}