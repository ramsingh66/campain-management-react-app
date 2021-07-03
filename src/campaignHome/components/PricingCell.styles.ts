import styled from "@emotion/styled";
import { Image } from "./Table.styles";

export const DialogContainer = styled.div`
    height: 280px;
    .image_container{
        display: flex;
        .name_region{
            justify-content: flex-end;
        }
    }
    .pricing_header{
        margin-top: 7px;
        font-size: 15px;
        font-weight: 700;
    }
    .price_values{
        display: flex;
        flex-direction: row;
        justify-content: space-between;

    }
`;

export const DialogImage = styled(Image)`
  height: 120px;
  width: 120px;
`;