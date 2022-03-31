import AppPages from './components/AppPages';
import Forms from './components/Forms';
import ResizableElement from './components/ResizableElement';
import ElementsList from './components/WidgetsList';
import { Wrapper } from './styledComponents';

export const WidgetsBar = () => {
    return (
        <Wrapper>
            <div>
                <AppPages />
                <Forms />
            </div>
            <ResizableElement>
                <ElementsList />
            </ResizableElement>
        </Wrapper>
    );
};
