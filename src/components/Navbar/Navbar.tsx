import React, { useCallback, useContext, useState } from "react";
import NavbarItem from "./NavbarItem";
import { SelectedDims } from "./types";
import styled from "@emotion/styled";
import { Button, IconButton, Theme, Typography } from "@mui/material";
import { Close, Menu } from "@mui/icons-material";
import { SiteContext } from "context/SiteContext";
import Logo from "assets/logo.svg";
import { useTranslation } from "react-i18next";


function Navbar(): JSX.Element {
    const [selectedDims, setSelectedDims] = useState<SelectedDims>();

    const selectDims = useCallback((dims: SelectedDims) => {
        setSelectedDims(dims);
    }, []);

    const [displayLinks, setDisplayLinks] = useState(false);

    const toggleDisplayLinks = () => {
        setDisplayLinks(currValue => {
            if (currValue) {
                return false;
            }

            return true;
        });
    };

    const {
        selectedItem,
        navItems
    } = useContext(SiteContext);

    const { t } = useTranslation();

    return (
        <StyledNavBar>
            <StyledMenuIconWrapper>
                <IconButton size="large" onClick={toggleDisplayLinks}>
                    {displayLinks
                        ? <Close fontSize="inherit" />
                        : <Menu fontSize="inherit" />
                    }
                </IconButton>
            </StyledMenuIconWrapper>
            <NavbarContentWrapper>
                <StyledLogo src={Logo} />
                <StyledNavbarWrapper displayLinks={displayLinks}>
                    <StyledLinksList>
                        {navItems.map((navItem) => (
                            <NavbarItem
                                key={navItem.elementId}
                                navItem={navItem}
                                selectedItem={selectedItem}
                                selectDims={selectDims}
                                toggleLinks={setDisplayLinks}
                            />
                        ))}
                    </StyledLinksList>
                    <StyledIndicator selectedDims={selectedDims} />
                </StyledNavbarWrapper>
            </NavbarContentWrapper>
            <StyledButton variant="contained">
                <Typography variant="button">
                    {t("navbar.donate")}
                </Typography>
            </StyledButton>
        </StyledNavBar>
    );
}


const StyledNavBar = styled.nav`
    display: flex;
    position: fixed;
    justify-content: space-between;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 100;
    /* justify-content: space-between; */
    height: 7rem;
    background-color: #fff;
    transition: box-shadow 0.3s ease-in-out;
    padding: 1rem 1rem 0 1rem;
    box-sizing: border-box;
`;


const StyledLogo = styled.img`
    padding: 1rem;
`;

const NavbarContentWrapper = styled.div`
    display: flex;
`;

type StyledNavbarWrapperProps = {
    displayLinks: boolean
}

const StyledNavbarWrapper = styled.div`
    width: 40rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: top 200ms ease-in-out, opacity 300ms ease-in;

    @media (max-width: 980px) {
        display: flex;
        visibility: ${({ displayLinks }: StyledNavbarWrapperProps) => displayLinks ? "visible" : "hidden"};
        top: ${({ displayLinks }: StyledNavbarWrapperProps) => displayLinks ? "0" : "-50px"};
        left: 0;
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 50;
        margin-top: 7rem;
        font-weight: bold;
        font-size: 2.5rem;
        opacity: ${({ displayLinks }: StyledNavbarWrapperProps) => displayLinks ? "1" : "0"};
        background-color: #fff;
    }
`;

const StyledLinksList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 6.7rem;
    padding-top: 1rem;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 980px) {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 2rem;
        padding-top: 0;
        height: 100%;
        margin: 0;
    }
`;

type StyledIndicatorProps = {
    selectedDims?: SelectedDims,
    theme?: Theme
}

const StyledIndicator = styled.div`
    width: 0;
    height: 0.3rem;
    position: relative;
    position: absolute;
    left: 0;
    background-color: ${({ theme }: StyledIndicatorProps) => theme?.palette.primary.main};
    bottom: 0;
    transition: left 0.4s ease-in-out, width 0.4s ease-in-out;
    width: ${({ selectedDims }: StyledIndicatorProps) => `${selectedDims?.width}px`};
    left: ${({ selectedDims }: StyledIndicatorProps) => `${selectedDims?.offset}px`};
    border-radius: 5px;
`;

const StyledMenuIconWrapper = styled.div`
    display: none;
    
    @media (max-width: 980px) {
        width: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

// const StyledMenuIcon = styled(IconButton)`
//     font-size: 1.5rem;
// `;


const StyledButton = styled(Button)`
    width: 9rem;
    height: 3.5rem;
    border-radius: 8px;
    align-self: center;
    box-shadow: 0 0 50 #000;
`;

export default React.memo(Navbar);
