import { StyledButton } from './styledComponents';

export const ButtonFileUpload = () => {
    return (
        <StyledButton>
            <input type="file" id="myFile" name="filename" />
        </StyledButton>
    );
};
