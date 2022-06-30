import { TextField, Select, MenuItem, FormControl, InputLabel } from "@mui/material";

export const TextInput = (props) => {
    const { label, name, value, changeState, isState, readOnly } = props;

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
                InputProps={{ readOnly: readOnly }}
            />
        </FormControl>
    )
}

export const TextArea = (props) => {
    const { label, name, value, changeState, isState, readOnly } = props;

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
                InputProps={{ readOnly: readOnly }}
             />
        </FormControl>
    )
}

export const SelectBox = (props) => {
    const { label, name, value, changeState, isState, option, readOnly } = props;

    const handleInputChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        changeState({...isState, [name]: value})
    }

    return (
        <FormControl fullWidth>
            <InputLabel id={label}>{label}</InputLabel>
            <Select
                labelId={label}
                label={label}
                name={name} 
                value={value}
                onChange={handleInputChange}
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

export const PasswordInput = () => {
    return (
        <TextField
            type='password'
        />
    )
}

export const NumberInput = (props) => {
    const { label, name, value, changeState, isState, readOnly } = props;

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
            InputProps={{ readOnly: readOnly }}            
         />
    )
}