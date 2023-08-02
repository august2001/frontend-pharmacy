import { Row } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const WrapperHeader = styled(Row)`
    width: 1270px;
    padding: 10px 0;
    background-color: var(--primary-color);
    align-items: center;
    gap: 16px;
    flex-wrap: nowrap;
`

export const WrapperTextHeader = styled(Link)`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    text-align: left;
`

export const WrapperHeaderAccout = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    gap: 10px;
`
export const WrapperTextHeaderSmall = styled.span`
    font-size: 12px;
    color: #fff;
    white-space: nowrap;
`
export const WrapperContentPopup = styled.p`
    cursor: pointer;
    &:hover {
        color: rgb(26, 148, 255);
    }
`