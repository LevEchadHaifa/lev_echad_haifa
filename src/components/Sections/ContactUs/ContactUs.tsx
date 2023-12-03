import React from "react";
import ContactUsForm from "./ContactUsForm";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Facebook from "assets/images/Facebook.svg";
import WhatsApp from "assets/images/WhatsApp.svg";
import Instagram from "assets/images/Instagram.svg";

function ContactUs() {
    const { t } = useTranslation();
    return (
        <StyledContactUs
            id="contact_us"
        >
            <ContactUsForm />
            <StyledSocialMediaBlock>
                <Typography variant="h4">{t("contact_us_content.social_media")}</Typography>
                <StyledSocialMediaDetails>
                    <a
                        href="https://www.facebook.com/levechadhaifa"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <StyledSocialMediaIcon src={Facebook} />
                    </a>
                    <a
                        href="https://www.instagram.com/lev1haifa/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <StyledSocialMediaIcon src={Instagram} />
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <StyledSocialMediaIcon src={WhatsApp} />
                    </a>
                </StyledSocialMediaDetails>
            </StyledSocialMediaBlock>
        </StyledContactUs>
    );
}

const StyledContactUs = styled.div`
    padding-top: 10rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;

`;

const StyledSocialMediaBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
`;

const StyledSocialMediaDetails = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`;

const StyledSocialMediaIcon = styled.img`
    width: 50px;
    height: 50px;
`;

export default ContactUs;