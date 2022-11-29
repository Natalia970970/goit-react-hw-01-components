import styled from "styled-components";

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
};

export const StatList = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
`;

export const StatListItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 50px;
    height: 50px;
    padding: 10px;
    color: white;
    background-color: ${props => {
    switch (props.children[0].props.children) {
        case '.docx':
            return `${getRandomHexColor()}`;
        case '.pdf':
            return `${getRandomHexColor()}`;
        case '.mp3':
            return `${getRandomHexColor()}`;
        case '.psd':
            return `${getRandomHexColor()}`;
        default:
            return 'lightblue';
        }
    }};
`;

export const StatTitle = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50px;
    padding: 10px;
    color: white;
    font-weight: 700;
    font-size: large;
`;