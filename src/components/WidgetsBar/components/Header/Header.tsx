import { Option, OptionsWpapper, IconWrapper, Title, TitleWrapper } from './styledComponents';
import { HeaderTypes } from './types';
import Icons from '../../../_shared/icons';

export const Header = (props: HeaderTypes) => {
    const { isOpened, onTitleClick, title } = props;

    const handleTitleClick = () => {
        onTitleClick();
    };

    const { IconPlus, IconArrowRight } = Icons;
    return (
        <TitleWrapper>
            <Title onClick={handleTitleClick}>{title}</Title>
            <OptionsWpapper>
                <Option type="button">
                    <IconPlus />
                </Option>
                <Option onClick={onTitleClick} type="button">
                    <IconWrapper isOpened={isOpened}>
                        <IconArrowRight />
                    </IconWrapper>
                </Option>
            </OptionsWpapper>
        </TitleWrapper>
    );
};
