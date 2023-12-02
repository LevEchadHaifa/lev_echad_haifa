import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import img from "assets/images/main.png";

function AboutUs() {
    const { t } = useTranslation();

    return (
        <StyledAboutUs
            id="about_us"
        >
            <StyledAboutUsImageWrapper />
            <StyledAboutUsTextWrapper>
                <StyledTextWrapper>
                    <Typography variant="h2">
                        {t("about_us_content.we_are_title")}
                    </Typography>
                    <Typography variant="h1">
                        {t("about_us_content.lev_echad")}
                    </Typography>
                    <p>
                        <Typography variant="body1">
                            {t("about_us_content.p1")}
                        </Typography>
                    </p>
                    <p>
                        <Typography variant="body1">
                            {t("about_us_content.p2")}
                        </Typography>
                    </p>
                    <p>
                        <Typography variant="body1">
                            {t("about_us_content.p3")}
                        </Typography>
                    </p>
                    <p>
                        <Typography variant="body1">
                            {t("about_us_content.p4")}
                        </Typography>
                    </p>
                </StyledTextWrapper>
            </StyledAboutUsTextWrapper>
        </StyledAboutUs>
    );
}

const StyledAboutUs = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-top: 7rem;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

const StyledAboutUsImageWrapper = styled.div`
    
    background-image: url(${img});
    background-size: cover;
    width: 100%;

    @media (min-width: 1000px) { 
        flex: 4;
        height: auto;
    }

    @media (max-width: 1000px) {
        height: 300px;
    }
`;

const StyledAboutUsTextWrapper = styled.div`
    flex: 5;
    padding: 2rem;
    margin-left: 2rem;

    @media (min-width: 100px) {
        height: auto;
    }
`;

const StyledTextWrapper = styled.div`
    max-width: 40rem;
`;

export default AboutUs;