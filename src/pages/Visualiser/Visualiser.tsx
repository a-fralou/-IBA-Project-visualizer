import { useMemo } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import PropertiesPanel from '../../components/PropertiesPanel';
import WidgetsBar from '../../components/WidgetsBar';
import Canvas from '../../components/Canvas';
import { CanvasContext } from '../../context/canvas.context';
import { useCanvas } from '../../hooks/useCanvas';
import { ContentWrapper } from './styledComponents';
import FormBuilder from '../../components/FormBuilder';

export const Visualiser = () => {
    const { droppingItem, dropItemToCanvas } = useCanvas();

    const value = useMemo(
        () => ({
            droppingItem,
            dropItemToCanvas,
        }),
        [droppingItem]
    );

    const customCanvas = window.location.search?.includes('custom');

    return (
        <>
            <Header />
            <Sidebar />
            {customCanvas ? (
                <ContentWrapper>
                    <CanvasContext.Provider value={value}>
                        <WidgetsBar />
                        <Canvas />
                        <PropertiesPanel />
                    </CanvasContext.Provider>
                </ContentWrapper>
            ) : (
                <FormBuilder />
            )}
        </>
    );
};
