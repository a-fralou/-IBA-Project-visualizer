import { Stack } from '@mui/material';
import { DividingLine } from '../styledComponents';

export const ControlsPanel: React.FC = ({ children }) => (
    <>
        <DividingLine />
        <Stack direction="row" justifyContent="space-between">
            {children}
        </Stack>
        <DividingLine />
    </>
);
