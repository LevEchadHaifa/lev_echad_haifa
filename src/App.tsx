import React from "react";
import Navbar from "components/Navbar/Navbar";
import SiteSections from "components/Sections/SiteSections";
import styled from "@emotion/styled";
import { Theme, Typography } from "@mui/material";
import { Favorite } from "@mui/icons-material";


function App() {
    return (
        <div className="App">
            <Navbar />
            <SiteSections />
            <StyledCredit>
                <Typography variant="body2">
                    Built with <StyledLoveIcon /> by&nbsp;
                    <StyledCreditLink
                        href="https://dvirbar.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Dvir Bartov
                    </StyledCreditLink>
                </Typography>
            </StyledCredit>
        </div>
    );
}

const StyledCredit = styled.div`
    background-color: #ccc;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 1rem;
    align-items: center;
`;


type StyledCredintLinkProps = {
    theme?: Theme
}

const StyledLoveIcon = styled(Favorite)`
    color: ${({ theme }: StyledCredintLinkProps) => theme?.palette.primary.main};
`;


const StyledCreditLink = styled.a`
    color: ${({ theme }: StyledCredintLinkProps) => theme?.palette.primary.main};
`;

export default App;
