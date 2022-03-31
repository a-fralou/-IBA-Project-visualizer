import { useState } from 'react';
import Icons from '../../../_shared/icons';
import { WidgetsSectionTypes } from './types';
import { Wrapper, Title, TitleButton, IconWrapper, List } from './styledComponents';
import { WidgetItem } from './components/WidgetItem';

export const WidgetsSections = ({ data }: WidgetsSectionTypes) => {
    const [isOpened, setIsOpened] = useState(true);

    const handleOnTitleClick = () => {
        setIsOpened((prevState) => !prevState);
    };

    const { IconArrowRight } = Icons;
    return (
        <Wrapper>
            <TitleButton onClick={handleOnTitleClick}>
                <Title>{data.title}</Title>
                <IconWrapper isOpened={isOpened}>
                    <IconArrowRight />
                </IconWrapper>
            </TitleButton>
            <List isOpened={isOpened}>
                {data.elements.map((item) => {
                    return <WidgetItem key={item.id} item={item} icons={Icons} />;
                })}
            </List>
        </Wrapper>
    );
};
