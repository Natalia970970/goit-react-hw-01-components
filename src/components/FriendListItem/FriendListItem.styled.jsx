import styled from "styled-components";


export const FriendCard = styled.li`
    display: flex;
    gap: 20px;
    width: 300px;
    height: 90px;
    align-items: center;
    background-color: #fff;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 30%), 0px 1px 1px rgb(0 0 0 / 24%),
        0px 2px 1px rgb(0 0 0 / 30%);
    border-radius: 4px;
    margin-bottom: 20px;
`;

export const Online = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: limegreen;
    margin-left: 10px;
`;
export const Offline = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: tomato;
    margin-left: 10px;
`;