import styled from 'styled-components';

export const Container = styled.section`
    display: grid;
    grid-template-areas:
        'header'
        'content';
    grid-template-columns: 100%;
    grid-template-rows: minmax(min-content, min-content) 1fr;
    padding: 0;
    max-width: 100%;
    height: 100%;
    position: relative;
`;
