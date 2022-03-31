import { useRef, useEffect } from 'react';
import { Wrapper, Draggable, Resizable, Swipe } from './styledComponents';

export const ResizableElement: React.FC = ({ children }) => {
    const refResizable = useRef<HTMLDivElement>(null);
    const refDraggable = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let clientY = 0;
        let clientHeight = 0;

        const onMouseMoveTopResize = (event: MouseEvent) => {
            const differ = clientY - event.clientY;
            const trueHeight = clientHeight + differ;
            if (!refResizable.current) return;
            refResizable.current.style.height = `${trueHeight}px`;
        };

        const onMouseUpTopResize = () => {
            document.removeEventListener('mousemove', onMouseMoveTopResize);
        };

        const onMouseDownTopResize = (event: MouseEvent) => {
            clientY = event.clientY;
            clientHeight = Number(refResizable?.current?.clientHeight || 500);
            document.addEventListener('mousemove', onMouseMoveTopResize);
            document.addEventListener('mouseup', onMouseUpTopResize);
        };

        const swipe = refDraggable.current;
        if (!swipe) return;
        swipe.addEventListener('mousedown', onMouseDownTopResize);

        // eslint-disable-next-line consistent-return
        return () => {
            swipe.removeEventListener('mousedown', onMouseDownTopResize);
        };
    }, []);

    return (
        <Wrapper>
            <Draggable ref={refDraggable}>
                <Swipe />
            </Draggable>
            <Resizable ref={refResizable}>{children}</Resizable>
        </Wrapper>
    );
};
