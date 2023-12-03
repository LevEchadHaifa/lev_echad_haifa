import styled from "@emotion/styled";
import { Theme } from "@mui/material";
import React from "react";

function PackageItem() {
    return (
        <StyledPackageItem>

        </StyledPackageItem>
    );
}

type StyledPackageItemProps = {
    theme?: Theme
}

const StyledPackageItem = styled.div`
    width: 400px;
    height: 400px;
    border-radius: 10px;
    box-shadow: ${({ theme }: StyledPackageItemProps) => theme?.shadows[12]};
    background-color: ${({ theme }: StyledPackageItemProps) => theme?.palette.primary.main};
    color: #ccc;
`;

export default PackageItem;