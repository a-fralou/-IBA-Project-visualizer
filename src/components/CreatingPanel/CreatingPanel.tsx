import { useState } from 'react';
import { IconButton, InputAdornment, Dialog, DialogTitle, createTheme, ThemeProvider, OutlinedInput } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';
import { CreatingPanelElement, CreatingHelpIcon, CreatingButton } from './styledComponents';
import WizardForm from '../WizardForm';
import WelcomePagePanel from './components/WelcomePagePanel';

const theme = createTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#0066B3',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            light: '#0066ff',
            main: '#0044ff',
            contrastText: '#ffcc00',
        },
    },
    shape: {
        borderRadius: 0,
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                // The props to change the default for.
                disableRipple: true,
            },
        },

        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    textTransform: 'capitalize',
                    fontWeight: 'normal',
                },
                sizeSmall: {
                    padding: '0 20px',
                    fontSize: 14,
                },
                outlined: {
                    borderColor: '#0066B3',
                },
            },
        },
        MuiIconButton: {
            defaultProps: {
                disableRipple: true,
            },
        },

        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: '#000',
                },
            },
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: '#000',
                },
            },
        },

        MuiStepLabel: {
            styleOverrides: {
                label: {
                    fontSize: 14,
                    color: '#000',
                },
            },
        },

        MuiCheckbox: {
            defaultProps: {
                disableRipple: true,
            },
        },

        MuiOutlinedInput: {
            styleOverrides: {
                input: {
                    padding: 0,
                    paddingLeft: 2,
                },
                root: {
                    paddingRight: 8,
                    '&.Mui-focused fieldset': {
                        border: '2px solid #000 !important',
                    },
                    background: '#fff',
                },
            },
        },

        MuiDialog: {
            styleOverrides: {
                paper: {
                    border: '3px solid rgba(2, 2, 2, 0.4)',
                },
            },
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: '#1C262E',
                    color: '#fff',
                    fontSize: 15,
                    padding: '5px 5px 5px 15px',
                },
            },
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    padding: 23,
                },
            },
        },
    },
});

export const CreatingPanel = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [startPanel, setStartPanel] = useState(true);

    const openPanel = () => {
        setStartPanel(true);
    };

    const closePanel = () => {
        setStartPanel(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <CreatingPanelElement>
                <CreatingButton variant="contained" onClick={openModal}>
                    New Application
                </CreatingButton>
                <OutlinedInput
                    size="small"
                    fullWidth
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton aria-label="toggle password visibility" edge="end" size="small">
                                <SearchIcon fontSize="inherit" />
                            </IconButton>
                        </InputAdornment>
                    }
                />
                {!startPanel && (
                    <CreatingHelpIcon size="small" onClick={openPanel}>
                        <InfoIcon fontSize="inherit" />
                    </CreatingHelpIcon>
                )}
            </CreatingPanelElement>

            <WelcomePagePanel onClose={closePanel} show={startPanel} openModal={openModal} />

            <Dialog
                fullWidth
                maxWidth="md"
                open={isOpen}
                onClose={closeModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Create a new app
                    <IconButton aria-label="close" size="medium" color="inherit" onClick={closeModal}>
                        <CloseIcon fontSize="inherit" color="inherit" />
                    </IconButton>
                </DialogTitle>

                <WizardForm closeModal={closeModal} />
            </Dialog>
        </ThemeProvider>
    );
};
