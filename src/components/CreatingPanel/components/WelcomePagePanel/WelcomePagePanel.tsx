import { Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ActionButton from './components/ActionButtun';
import { IconCreateApp } from '../../../_shared/icons/IconCreateApp';
import { IconImportApp } from '../../../_shared/icons/IconImportApp';
import { IconOverviewVideo } from '../../../_shared/icons/IconOverviewVideo';
import { IconTutorials } from '../../../_shared/icons/IconTutorials';
import { Container, Title, ClosedButton, Text, PositionListButtons } from './styledComponents';
import { WelcomePagePanelProps } from './types';
import { ActionButtonProps, ActionClick } from './components/ActionButtun/types';

const options: ActionButtonProps[] = [
    {
        title: 'Create a new app',
        description: 'Design a solution to fit your needs.',
        icon: <IconCreateApp />,
        action: {
            key: 'click',
            value: 1,
        },
    },
    {
        title: 'Import an app',
        description: 'Start with an existing "HCL Domino Volt" app.',
        icon: <IconImportApp />,
        action: {
            key: 'click',
            value: 3,
        },
    },
    {
        title: 'Overview video',
        description: 'Learn basic concepts of "HCL Domino Volt."',
        icon: <IconOverviewVideo />,
        action: {
            key: 'link',
            value: 'https://help.hcltechsw.com/domino_volt/1.0.4/ovr_video.html',
        },
    },
    {
        title: 'Tutorials',
        description: 'Follow tutorials to help you get started.',
        icon: <IconTutorials />,
        action: {
            key: 'link',
            value: 'https://help.hcltechsw.com/domino_volt/1.0.4/tut_tutorials_toc.html',
        },
    },
];

export const WelcomePagePanel = ({ onClose, show, openModal }: WelcomePagePanelProps) => {
    const handleClick = ({ key, value }: ActionClick) => {
        switch (key) {
            case 'click':
                openModal(Number(value));
                break;

            case 'link':
                window.open(value?.toString(), '_blank');
                break;

            default:
                openModal(1);
        }
    };

    return (
        <Container show={show}>
            <Title variant="h5" component="div">
                Welcome to HCL Domino Volt
            </Title>
            <ClosedButton aria-label="close" size="medium" onClick={onClose}>
                <CloseIcon fontSize="inherit" />
            </ClosedButton>

            <Text variant="subtitle2">
                Quickly build and deploy compelling, interactive data collection applications. Solutions designed with HCL Domino Volt are
                agile and easily modified to accommodate changing business requirements
            </Text>

            <PositionListButtons container spacing={2} columns={{ xs: 4, sm: 12, md: 12 }}>
                {options.map(({ title, description, icon, action }) => (
                    <Grid item xs={2} sm={3} md={3} key={title}>
                        <ActionButton
                            title={title}
                            description={description}
                            icon={icon}
                            onClick={() => handleClick({ key: action?.key, value: action?.value })}
                        />
                    </Grid>
                ))}
            </PositionListButtons>
        </Container>
    );
};
