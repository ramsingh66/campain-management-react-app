import styled from "@emotion/styled";

export const Row = styled.div`
display:flex;
flex-direction: row;
width:100%;
height: 50px;
max-width: 800px;
font-size: 11px;
font-weight: 600;
align-items: center;
border: 1px solid #19191926;
border-top: none;
padding: 0 5px;
.name_region {
    display: flex;
    flex-direction: column;
    font-size: 11px;
    .region{
        font-style: italic;
    }
}
.price_button,
.csv_link ,
.report_link {
    text-decoration:none;
    color: black;
    font-size: 11px;
    background: transparent;
    border:none;
    cursor: pointer;
    padding: 0 20px 0 0;
    :hover {
        color: blue;
    }
}

.date_input{
    cursor: pointer !important;
    border: 1px solid #1919196e;
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


export const Cell25Percent = styled.div`
width: 25%;
display:flex;
`;

export const Cell35Percent = styled.div`
width: 35%;
display:flex;
`;

export const Image = styled.img`
height: 27px;
width: 27px;
padding-right: 5px;
.small{
    height: 18px;
    width: 18px; 
}
`;

export const SmallImage = styled(Image)`
    height: 18px;
    width: 18px; 
`;

export const DateCell = styled(Cell20Percent)`
display:flex;
flex-direction: column;
.duration{
    font-style: italic;
}
`;
