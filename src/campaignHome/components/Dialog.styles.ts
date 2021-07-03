import styled from "@emotion/styled";


export const DialogBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 99;
    height: 250px;
    width: 250px;
    background: white;
    display:flex;
    flex-direction:column;
    border: 1px solid grey;
    padding: 10px;
    .content{
        height: 220px;
    }
    .close_button {
        height: 30px;
        width: 70px;
        align-self: center;
        border: 1px solid black;
        background: transparent;
        cursor: pointer;
    }
`;