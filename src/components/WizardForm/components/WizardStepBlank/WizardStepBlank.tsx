import { useState } from 'react';
import { FormControlLabel, FormLabel, Radio, RadioGroup, InputLabel, OutlinedInput, TextareaAutosize, Grid, Box } from '@mui/material';
import CreatingRadioButton from '../../../CreatingPanel/components/CreatingRadioButton';
import { StyledBlankRadio } from './styledComponents';

const options = [
    {
        value: '1',
        description: 'Flat Blue',
        palette: [
            { fill: '#0066b3', border: '1px solid #0066b3' },
            { fill: '#fff', border: '1px solid #0066b3' },
        ],
    },
    {
        value: '2',
        description: 'Light Gray',
        palette: [
            { fill: '#808080', border: '1px solid #808080' },
            { fill: '#e4e4e4', border: '1px solid #e4e4e4' },
        ],
    },
    {
        value: '3',
        description: 'Dark Blue',
        palette: [
            { fill: '#3c5bae', border: '1px solid #3c5bae' },
            { fill: '#6e84c6', border: '1px solid #6e84c6' },
            { fill: '#6fd67e', border: '1px solid #6fd67e' },
        ],
    },
    {
        value: '4',
        description: 'Simple',
        palette: [
            { fill: '#e0e0e0', border: '1px solid #e0e0e0' },
            { fill: '#f8f8f8', border: '1px solid #f8f8f8' },
        ],
    },
];

export const WizardStepBlank = () => {
    const [radioBtn, setRadioBtn] = useState('1');

    return (
        <Grid sx={{ mt: 3, mb: 1 }} container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center">
            <Grid item xs={5}>
                <Box sx={{ mb: 2 }}>
                    <InputLabel>Application Name:</InputLabel>
                    <OutlinedInput fullWidth size="small" />
                </Box>
                <Box>
                    <InputLabel>Application Description:</InputLabel>
                    <TextareaAutosize aria-label="minimum height" minRows={6} style={{ width: '100%', boxSizing: 'border-box' }} />
                </Box>
            </Grid>
            <Grid item xs={4}>
                <StyledBlankRadio sx={{ width: '100%' }}>
                    <FormLabel id="demo-radio-buttons-palette-label">Theme:</FormLabel>
                    <RadioGroup
                        onChange={(e) => setRadioBtn(e.target.value)}
                        aria-labelledby="demo-radio-buttons-palette-label"
                        name="radio-buttons-palette"
                    >
                        {options.map(({ palette, value, description }) => (
                            <FormControlLabel
                                sx={{ margin: 0 }}
                                key={`${value}`}
                                value={value}
                                control={<Radio sx={{ display: 'none' }} />}
                                label={
                                    <CreatingRadioButton
                                        className="color-theme"
                                        description={description}
                                        palette={palette}
                                        checked={radioBtn === value}
                                    />
                                }
                            />
                        ))}
                    </RadioGroup>
                </StyledBlankRadio>
            </Grid>
        </Grid>
    );
};
