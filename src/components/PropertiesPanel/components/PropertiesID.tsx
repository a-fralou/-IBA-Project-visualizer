import InputAdornment from '@mui/material/InputAdornment';
import { TextFieldProperties, StyledBorderColorIcon } from '../styledComponents';

export const PropertiesID = () => (
    <TextFieldProperties
        size="small"
        fullWidth
        disableUnderline
        endAdornment={
            <InputAdornment position="end" disablePointerEvents>
                <StyledBorderColorIcon fontSize="inherit" />
            </InputAdornment>
        }
    />
);
