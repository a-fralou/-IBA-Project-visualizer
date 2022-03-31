import { FormBuilder as FormIOBuilder } from '@formio/react';
import { Container } from './styledComponents';

const DEFAULT_FORMBUILDER_SETTINGS = {
    form: { display: 'form' },
    options: {
        builder: {
            premium: false,
        },
    },
};

export const FormBuilder: React.FC = () => (
    <Container>
        <FormIOBuilder {...DEFAULT_FORMBUILDER_SETTINGS} />
    </Container>
);
