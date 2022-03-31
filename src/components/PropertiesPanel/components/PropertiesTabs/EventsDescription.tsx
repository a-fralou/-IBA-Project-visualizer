import { EventsDescriptionContainer, EventsDescriptionName, EventsDescriptionList } from '../../styledComponents';
import { IconEvent } from '../../../_shared/icons/IconEvent';

const EventsDescriptionItems = [
    'afterSave',
    'beforeSave',
    'onDestruct',
    'onHide',
    'onLoad',
    'onNew',
    'onShow',
    'onShowActionButtons',
    'validateButtonPressed',
];

export const EventsDescription = () => (
    <EventsDescriptionContainer>
        <div>Run a formula, call a service, or execute custom JavaScript from an event.</div>
        <EventsDescriptionName>Client Side:</EventsDescriptionName>
        <EventsDescriptionList>
            {EventsDescriptionItems.map((item) => (
                <li key={item}>
                    <IconEvent />
                    {item}
                </li>
            ))}
        </EventsDescriptionList>
    </EventsDescriptionContainer>
);
