import styled from "@emotion/styled";

export const Row = styled.div`
display:flex;
flex-direction: row;
width:100%;
height: 50px;
max-width: 800px;
font-size: 12px;
font-weight: 600;
align-items: center;
.name_region {
    display: flex;
    flex-direction: column;
    font-size: 11px;
    .region{
        font-style: italic;
    }
}
`;

export const HeaderRow = styled(Row)`
height: 30px;
font-size: 12px;
font-weight: 700;
color: #191919b5;
background: #00000012;
`;

export const Cell20Percent = styled.div`
width: 20%;
display:flex;
`;


export const Cell30Percent = styled.div`
width: 30%;
display:flex;
`;

export const Image = styled.img`
height: 27px;
width: 27px;
padding-right: 5px;
`;

export const DateCell = styled(Cell20Percent)`
display:flex;
flex-direction: column;
.duration{
    font-style: italic;
}
`;
