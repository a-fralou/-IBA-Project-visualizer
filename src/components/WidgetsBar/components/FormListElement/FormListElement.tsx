import { useState, useRef, ChangeEvent, MouseEvent } from 'react';
import Icons from '../../../_shared/icons';
import { useOutsideClick } from '../../../../hooks/useOutsideClick';
import { FormListElementTypes } from './types';
import { Form, FormTitle, FormTitleInput, Option, IconWrapper, OpenDetails, SubForm } from './styledComponents';

export const FormListElement = ({ data }: { data: FormListElementTypes }) => {
    const [isDetailsOpened, setIsDetailsOpened] = useState(false);
    const [isEditingEnabled, setIsEditingEnabled] = useState(false);
    const [isSubEditingEnabled, setIsSubEditingEnabled] = useState(false);
    const [title, setTitle] = useState(data.title);
    const [sub, setSub] = useState(data.subForm);
    const outsideRef = useRef<HTMLInputElement>(null);
    const outsideSubRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;

        if (name === 'title') {
            setTitle(value);
        } else {
            setSub(value);
        }
    };

    const handleOnOpenDetailsClick = (event: MouseEvent<HTMLElement>) => {
        event?.stopPropagation();
        setIsDetailsOpened((prevState) => !prevState);
    };

    const handleEditingEnableClick = () => {
        setIsEditingEnabled(true);
    };

    const handleSubEditingEnableClick = () => {
        setIsSubEditingEnabled(true);
    };

    useOutsideClick(outsideRef, () => setIsEditingEnabled(false));
    useOutsideClick(outsideSubRef, () => setIsSubEditingEnabled(false));

    const { IconMenu, IconArrowRight } = Icons;
    return (
        <div>
            <Form>
                <OpenDetails onClick={handleOnOpenDetailsClick}>
                    <IconWrapper isOpened={isDetailsOpened}>
                        <IconArrowRight />
                    </IconWrapper>
                    {isEditingEnabled ? (
                        <FormTitleInput name="title" ref={outsideRef} value={title} onChange={handleInputChange} autoFocus />
                    ) : (
                        <FormTitle onClick={handleEditingEnableClick}>{title}</FormTitle>
                    )}
                </OpenDetails>
                <Option isOpened={isDetailsOpened}>
                    <IconMenu />
                </Option>
            </Form>
            {isDetailsOpened && (
                <SubForm>
                    {isSubEditingEnabled ? (
                        <FormTitleInput name="sub" ref={outsideSubRef} value={sub} onChange={handleInputChange} autoFocus />
                    ) : (
                        <FormTitle onClick={handleSubEditingEnableClick}>{sub}</FormTitle>
                    )}
                    <Option isOpened={isDetailsOpened}>
                        <IconMenu />
                    </Option>
                </SubForm>
            )}
        </div>
    );
};
