import React, { useEffect, useState } from "react";
import { SelectedDims } from "./types";
import styled from "@emotion/styled";
import { Theme, Typography } from "@mui/material";
import useWindowDim from "utils/hooks/useWindowDim";
import { NavItem, SelectedItem } from "context/types";

interface IProps {
    navItem: NavItem;
    selectedItem: SelectedItem;
    selectDims: (dims: SelectedDims) => void;
    toggleLinks: (display: boolean) => void;
}

function NavbarItem({
    navItem,
    selectedItem,
    selectDims,
    toggleLinks,
}: IProps): JSX.Element {
    const isSelectedItem = selectedItem.elementId === navItem.elementId;
    const scrollToItem = (elementId: string) => {
        const element = document.getElementById(elementId);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    const [ref, setRef] = useState<HTMLLIElement | null>(null);

    const { width } = useWindowDim();

    useEffect(() => {
        if (isSelectedItem) {
            selectDims({
                width: ref?.offsetWidth || 0,
                offset: ref?.offsetLeft || 0,
            });
        }
    }, [width, ref, isSelectedItem]);

    const handleClick = () => {
        toggleLinks(false);
        scrollToItem(navItem.elementId);
    };

    return (
        <StyledNavbarItem
            ref={(newRef) => setRef(newRef)}
            onClick={() => handleClick()}
            isSelected={isSelectedItem}
        >
            <StyledItemText
                isSelected={isSelectedItem}
                variant="caption"
            >
                {navItem.label}
            </StyledItemText>
        </StyledNavbarItem>
    );
}

type StyledNavbarItemProps = {
    isSelected: boolean
    theme?: Theme
}

const StyledNavbarItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: color 0.4s ease-in-out, background-color 100ms ease-in-out;
    justify-content: center;
    height: 100%;
    padding: 0 1rem;

    @media(max-width: 980px) {
        height: auto;
        padding: 1rem;  
        width: 100%;
        border-radius: 5px;
        background-color: ${({ isSelected, theme }: StyledNavbarItemProps) => isSelected ? theme?.palette.primary.main : "#fff"};
        left: 0;

        &:active {
            background-color: #ddd;
        }
    }
`;

type StyledItemTextProps = {
    isSelected: boolean
    theme?: Theme
}

const StyledItemText = styled(Typography)`
    transition: color 0.2s ease-in-out;

    color: ${({ theme, isSelected }: StyledItemTextProps) => isSelected ? theme?.palette.primary.main : "#000"};

    @media(max-width: 980px) {
        color: ${({ isSelected }: StyledItemTextProps) => isSelected ? "#fff" : "#000"}
    }
`;

export default React.memo(NavbarItem);
