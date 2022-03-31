import React from 'react';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import arrowIcon from '../../../assets/arrow.svg';
import {
    Wrapper,
    Header,
    Expander,
    TitleWrapper,
    StyledIcon,
    Title,
    Update,
    UpdateTitle,
    UpdateValue,
    Preview,
    Tag,
    OptionsList,
    Option,
    Details,
    Description,
    DescriptionValue,
    Property,
    Value,
    WrapperMore,
    ListMore,
    OptionMore,
    TitleInput,
    Line,
    Link,
} from '../styledComponents';
import { DetailsTypes } from '../types';

const MoreButton = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const outsideRef = React.useRef<HTMLDivElement>(null);

    const handleOnClick = () => {
        setIsOpen((prevState) => !prevState);
    };

    useOutsideClick(outsideRef, () => setIsOpen(false));
    return (
        <WrapperMore ref={outsideRef}>
            <Option onClick={handleOnClick}>More...</Option>
            {isOpen && (
                <ListMore>
                    <OptionMore>Duplicate</OptionMore>
                    <OptionMore>Delete</OptionMore>
                    <OptionMore>Export</OptionMore>
                    <OptionMore>Upgrade</OptionMore>
                    <OptionMore>History</OptionMore>
                </ListMore>
            )}
        </WrapperMore>
    );
};

export const ApplicationCard = (props: { details: DetailsTypes }) => {
    const { details } = props;
    const [title, setTitle] = React.useState(details.title);
    const [isDetailsOpened, setIsDetailsOpened] = React.useState(false);
    const [isEditable, setIsEditable] = React.useState(false);
    const outsideRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        const isTitleEditable = isEditable && outsideRef.current !== null;
        if (isTitleEditable) outsideRef?.current?.focus();
    }, [isEditable]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setTitle(value);
    };

    const handleOnTitleClick = (e: React.MouseEvent<HTMLElement>) => {
        e?.stopPropagation();
        setIsEditable(true);
    };

    const handleExpanderClick = (e: React.MouseEvent<HTMLElement>) => {
        e?.stopPropagation();
        setIsDetailsOpened((prevState) => !prevState);
    };

    useOutsideClick(outsideRef, () => setIsEditable(false));
    return (
        <Wrapper>
            <Header>
                <Preview>
                    <Expander onClick={handleExpanderClick}>
                        <StyledIcon src={arrowIcon} isOpened={isDetailsOpened} />
                    </Expander>
                    <TitleWrapper isEditable={isEditable}>
                        {isEditable ? (
                            <TitleInput value={title} onChange={handleInputChange} ref={outsideRef} />
                        ) : (
                            <Title onClick={handleOnTitleClick}>{title}</Title>
                        )}

                        <Update onClick={handleExpanderClick}>
                            <UpdateTitle>Last update:</UpdateTitle>
                            <UpdateValue>{details.lastUpdate}</UpdateValue>
                        </Update>
                    </TitleWrapper>
                </Preview>
                <Tag color={details.status.color}>{details.status.title}</Tag>
            </Header>
            <OptionsList>
                <Link to="/visualiser">
                    <Option disabled={details.disabled.edit}>Edit</Option>
                </Link>
                <Option disabled={details.disabled.deploy}>Deploy</Option>
                <Option disabled={details.disabled.viewData}>View data</Option>
                <Option disabled={details.disabled.launch}>Launch</Option>
                <MoreButton />
            </OptionsList>
            <Details isOpened={isDetailsOpened}>
                <Description>Description:</Description>
                <DescriptionValue>{details.description}</DescriptionValue>
                <Line>
                    <Property>Administered by:</Property>
                    <Value>{details.administeredBy}</Value>
                </Line>
                <Line>
                    <Property>Created on:</Property>
                    <Value>{details.createdOn}</Value>
                </Line>
                <Line>
                    <Property>Last update:</Property>
                    <Value>{details.lastUpdate}</Value>
                </Line>
                <Line>
                    <Property>ID:</Property>
                    <Value>{details.id}</Value>
                </Line>
            </Details>
        </Wrapper>
    );
};
