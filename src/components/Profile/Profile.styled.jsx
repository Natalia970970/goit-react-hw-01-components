import styled from "styled-components";

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px;
    background-color: lightblue;
`;

export const ProfileCard =styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 4px
`;

export const Description = styled.div`
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 20px;
    border: 1px solid silver;
    border-radius: 4px 4px 0 0;
    display: flex;
`;

export const Info = styled.p`
    text-align: center;
    font-weight: 700;
    font-size: 24px;
    color: black;
    margin: 0;
    margin-bottom: 10px;
`;

export const Avatar = styled.img`
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 20px;
`;

export const Stats = styled.ul`
    padding: 0;
    display: flex;
    list-style: none;
    margin: 0;
    background-color: azure;
    border-radius: 0 0 4px 4px;
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 70px;
    height: 70px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    border: 1px solid silver;
        &:first-of-type {
            border-radius: 0 0 0 4px;
        }
        &:last-child {
            border-radius: 0 0 4px 0;
        }
`;