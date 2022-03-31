import ApplicationsList from '../../components/ApplicationsList';
import type { DetailsTypes } from '../../components/ApplicationsList/types';
import CreatingPanel from '../../components/CreatingPanel';
import Header, { HeaderMenuItem } from '../../components/Header';
import { HeaderMenu } from '../../components/Header/components/HeaderMenu';
import { MenuItemText } from '../../components/Header/styledComponents';
import { IconChevron } from '../../components/_shared/icons/IconChevron';
import { IconHelp } from '../../components/_shared/icons/IconHelp';
import { IconUser } from '../../components/_shared/icons/IconUser';
import { Content, Logo } from './styledComponents';

const mockData: DetailsTypes[] = Array(24)
    .fill({})
    .map((_, index) => ({
        title: `Title text ${index}`,
        lastUpdate: `01/${index + 1}/22, 14:00`,
        disabled: {
            edit: index % 2 === 0,
            deploy: index % 3 !== 0,
            viewData: true,
            launch: true,
        },
        description:
            ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores commodi eligendi sit error aperiam expedita, magni totam numquam repellendus consequatur consectetur est tempora quis incidunt eius sunt, esse ab quasi sapientedolorem unde. Sint consequuntur, laborum nobis molestias deserunt iusto at veritatis rerum! Voluptatibus.',
        administeredBy: 'Test User',
        createdOn: `${index + 1}/1/22, 1:51`,
        id: `a01df3af-533e-4096-8699-eaeba26256ef${index}`,
        status: {
            title: index % 3 === 0 ? 'Running' : 'Undeployed',
            color: index % 3 === 0 ? '#BEEB9A' : '#c8b9da',
        },
    }));

export const Manager = () => (
    <>
        <Header>
            <Logo />
            <HeaderMenu>
                <HeaderMenuItem>
                    <IconHelp width={20} height={20} />
                    <IconChevron variant="down" width={12} height={12} />
                </HeaderMenuItem>
                <HeaderMenuItem>
                    <IconUser width={20} height={20} />
                    <MenuItemText>Test user</MenuItemText>
                    <IconChevron variant="down" width={12} height={12} />
                </HeaderMenuItem>
            </HeaderMenu>
        </Header>
        <Content>
            <CreatingPanel />
            <ApplicationsList itemsData={mockData} />
        </Content>
    </>
);
