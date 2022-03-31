import { useState } from 'react';
import { TabsProps } from '@mui/material/Tabs';
import { TabOne } from './TabOne';
import { PropertiesDescription } from './PropertiesDescription';
import { PropertiesWidth } from './PropertiesWidth';
import { EventsDescription } from './EventsDescription';
import { TabsProperties, TabProperties, TabsContainer } from '../../styledComponents';

export const PropertiesTabs = () => {
    const [value, setValue] = useState(0);

    const handleChange: TabsProps['onChange'] = (event, newValue: number) => {
        setValue(newValue);
    };

    return (
        <TabsContainer>
            <TabsProperties value={value} onChange={handleChange}>
                <TabProperties label="Properties" disableRipple />
                <TabProperties label="Events" disableRipple />
            </TabsProperties>

            <TabOne value={value} index={0}>
                <PropertiesDescription />
                <PropertiesWidth />
            </TabOne>

            <TabOne value={value} index={1}>
                <EventsDescription />
            </TabOne>
        </TabsContainer>
    );
};
