import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";

interface IPackageContentItemsProps {
    isOpen: boolean
    items: string[]
}

function PackageContentItems({ isOpen, items }: IPackageContentItemsProps) {
    return (
        <StyledPackageItems isOpen={isOpen}>
            {items.map((item, index) =>
                <StyledItem key={index}>
                    <Typography variant="body2">
                        {item}
                    </Typography>

                </StyledItem>
            )}
        </StyledPackageItems>
    );
}

type StyledPackageItemsProps = {
    isOpen: boolean
}

const StyledPackageItems = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    visibility: ${({ isOpen }: StyledPackageItemsProps) => isOpen ? "visible" : "hidden"};
    transition: opacity 200ms ease-in-out;
    opacity: ${({ isOpen }: StyledPackageItemsProps) => isOpen ? "1" : "0"};
    height: ${({ isOpen }: StyledPackageItemsProps) => isOpen ? "auto" : "0"};
    overflow: hidden;
    
`;

const StyledItem = styled.div`
    padding: 0.5rem;
    font-weight: 600;
    border-bottom: 1px solid #ccc;
`;

export default PackageContentItems;