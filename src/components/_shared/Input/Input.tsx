import { InputElement, InputWrapper, InputIcon } from './styledComponents';
import { InputProps } from './types';

export const Input = ({ onChange, icon }: InputProps) => {
    return (
        <InputWrapper>
            <InputElement onChange={onChange} />
            {icon && <InputIcon>{icon}</InputIcon>}
        </InputWrapper>
    );
};
