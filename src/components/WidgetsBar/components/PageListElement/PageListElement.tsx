import { useRef, useState, ChangeEvent } from 'react';
import Icons from '../../../_shared/icons';
import { useOutsideClick } from '../../../../hooks/useOutsideClick';
import { PageListElementTypes } from './types';
import { Page, PageTitle, PageTitleInput, Option, OptionText, OptionTile, OptionsList } from './styledComponents';

export const PageListElement = ({ data }: { data: PageListElementTypes }) => {
    const [isSelected, setIsSelected] = useState(false);
    const [isEditingEnabled, setIsEditingEnabled] = useState(false);
    const [isOptionsOpened, setIsOptionsOpened] = useState(false);
    const [title, setTitle] = useState(data.title);
    const outsideRef = useRef<HTMLDivElement>(null);
    const outsideInputRef = useRef<HTMLInputElement>(null);
    const outsideOptionsRef = useRef<HTMLDivElement>(null);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setTitle(value);
    };

    const handlePageClick = () => {
        if (isSelected) return;
        setIsSelected(true);
    };

    const handleToggleOptionsOpened = () => {
        setIsOptionsOpened((prevState) => !prevState);
    };

    const handleEditingEnableClick = () => {
        setIsEditingEnabled(true);
    };

    useOutsideClick(outsideOptionsRef, () => setIsOptionsOpened(false));
    useOutsideClick(outsideInputRef, () => setIsEditingEnabled(false));
    useOutsideClick(outsideRef, () => setIsSelected(false));

    const { IconMenu, IconPlus, IconProperties, IconDelete } = Icons;
    return (
        <Page ref={outsideRef} onClick={handlePageClick} isSelected={isSelected}>
            {isEditingEnabled ? (
                <PageTitleInput value={title} onChange={handleInputChange} autoFocus ref={outsideInputRef} />
            ) : (
                <PageTitle isSelected={isSelected} onClick={handleEditingEnableClick}>
                    {title}
                </PageTitle>
            )}
            <Option onClick={handleToggleOptionsOpened}>
                <IconMenu />
            </Option>
            <OptionsList isOpened={isOptionsOpened} ref={outsideOptionsRef}>
                <OptionTile>
                    <IconProperties />
                    <OptionText>Properties</OptionText>
                </OptionTile>
                <OptionTile>
                    <IconPlus />
                    <OptionText>Add App Page</OptionText>
                </OptionTile>
                <OptionTile>
                    <IconDelete />
                    <OptionText>Delete</OptionText>
                </OptionTile>
            </OptionsList>
        </Page>
    );
};
