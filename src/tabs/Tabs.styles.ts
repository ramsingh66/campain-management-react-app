import styled from "@emotion/styled";

export const TabsContainer = styled.div`
  height: 100%;
  margin-top:20px;
`;


export const TabButton = styled.button`
  background: transparent;
  border:none;
  width: 150px;
  height: 30px;
  font-size:13px;
  color: ${(props: any) => props.primary ? 'green' : 'black'};
  border-bottom: ${(props: any) => props.primary ? '1px solid green' : 'none'};
  font-weight: 700;
  cursor: pointer;
`;

