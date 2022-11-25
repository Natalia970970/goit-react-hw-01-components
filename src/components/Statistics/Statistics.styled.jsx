import styled from "styled-components";

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