import styled from "styled-components";

export const Table = styled.table`
    border: 1px solid #1c6ea4;
    background-color: white;
    width: 50%;
    text-align: center;
    border-collapse: collapse;
    color: black;
`;

export const Td  = styled.th`
    border: 1px solid #aaaaaa;
    padding: 10px 10px;
    font-size: 15px;
    font-weight: bold;
    color: #5b5858;
    border-left: 2px solid #d0e4f5;
`;

export const Th = styled.td`
    border: 1px solid #aaaaaa;
    padding: 10px 10px;
    font-size: 13px;
`;

export const Tr = styled.tr`
    &:nth-of-type(even) {
    background: #d0e4f5;
}
`;

export const TableHead = styled.thead`
    background: deepskyblue;
    border-bottom: 2px solid #444444;
`;