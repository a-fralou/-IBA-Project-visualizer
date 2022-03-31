import { useState } from 'react';
import Header from '../Header';
import FormListElement from '../FormListElement';
import { Wrapper } from './styledComponents';

const FAKE_FORMS = [
    {
        title: 'Form 1',
        id: '1',
        subForm: 'sub-form-1',
    },
    {
        title: 'Form 2',
        id: '2',
        subForm: 'sub-form-1',
    },
];

export const Forms = () => {
    const [isOpened, setIsOpened] = useState(false);

    const handleTitleClick = () => {
        setIsOpened((prev) => !prev);
    };

    return (
        <Wrapper>
            <Header isOpened={isOpened} onTitleClick={handleTitleClick} title="Forms" />
            {isOpened && (
                <div>
                    {FAKE_FORMS.map((item) => (
                        <FormListElement data={item} key={item.id} />
                    ))}
                </div>
            )}
        </Wrapper>
    );
};
