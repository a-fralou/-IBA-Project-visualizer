import { useState } from 'react';
import PageListElement from '../PageListElement';
import Header from '../Header';
import { Wrapper, List } from './styledComponents';

const FAKE_PAGES = [
    {
        title: 'Start page',
        id: '2',
    },
    {
        title: 'Settings Page',
        id: '3',
    },
];

export const AppPages = () => {
    const [isOpened, setIsOpened] = useState(false);

    const handleTitleClick = () => {
        setIsOpened((prevState) => !prevState);
    };

    return (
        <Wrapper>
            <Header isOpened={isOpened} onTitleClick={handleTitleClick} title="App Pages" />
            {isOpened && (
                <List>
                    {FAKE_PAGES.map((item) => {
                        return <PageListElement key={item.id} data={item} />;
                    })}
                </List>
            )}
        </Wrapper>
    );
};
