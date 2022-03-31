import { createTheme, ThemeProvider } from '@mui/material';
import { Container, PropertiesNameContainer, PropertiesIDContainer } from './styledComponents';
import { PropertiesName } from './components/PropertiesName';
import { PropertiesID } from './components/PropertiesID';
import { PropertiesTabs } from './components/PropertiesTabs/PropertiesTabs';
import { IconForm } from '../_shared/icons/IconForm';

const theme = createTheme({
    shape: {
        borderRadius: 0,
    },
    components: {
        MuiSelect: {
            styleOverrides: {
                select: {
                    padding: 0,
                    paddingLeft: '5px',
                    fontSize: '12px',
                    maxWidth: '100%',
                    width: '100%',
                    backgroundColor: 'white',
                    borderColor: 'black ',
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    margin: 0,
                    padding: 0,
                    minHeight: 0,
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    minHeight: 0,
                    minWidth: '80px',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'black',
                    },
                },
            },
        },
    },
});

export const PropertiesPanel = () => (
    <Container>
        <ThemeProvider theme={theme}>
            <PropertiesNameContainer>
                <IconForm />
                <PropertiesName />
            </PropertiesNameContainer>
            <PropertiesIDContainer>
                <span>ID:</span>
                <PropertiesID />
            </PropertiesIDContainer>
            <PropertiesTabs />
        </ThemeProvider>
    </Container>
);
