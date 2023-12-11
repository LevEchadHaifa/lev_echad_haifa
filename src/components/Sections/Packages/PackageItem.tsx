import styled from "@emotion/styled";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Button, Theme, Typography } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PackageContentItems from "./PackageContentItems";
import useWindowDim from "utils/hooks/useWindowDim";

export interface IPackageItemProps {
    items: string[],
    image: string,
    price: string
}

function PackageItem({ items, image, price }: IPackageItemProps) {
    const { t, i18n } = useTranslation();

    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen((currOpen) => !currOpen);
    };

    const { width: windowWidth } = useWindowDim();

    return (
        <StyledPackageItem width={windowWidth - 20}>
            <StyledPackageDetails isOpen={open}>
                <Button onClick={toggleOpen}>
                    {open
                        ? <>
                            {t("packages_content.package_content_hide")}
                            <ExpandMore />
                        </>
                        : <>
                            {t("packages_content.package_content_see")}
                            <ExpandLess />
                        </>
                    }
                </Button>
                <PackageContentItems
                    isOpen={open}
                    items={items}
                />
                <StyledFooter>
                    <Typography variant="h3">{price}</Typography>
                    <a
                        href={`https://www.jgive.com/new/${i18n.language}/${t("packages_content.currency")}/donation-targets/113436`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <StyledDonateButton fullWidth color="secondary" size="large" variant="contained">{t("navbar.donate")}</StyledDonateButton>
                    </a>
                </StyledFooter>

            </StyledPackageDetails>
            <StyledPackageBackground image={image} />
        </StyledPackageItem >
    );
}

const StyledFooter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
`;

type StyledWindowWidthProps = {
    width: number
}

const StyledPackageItem = styled.div`
    width: 400px;
    height: 550px;
    background-color: transparent;
    position: relative;

    @media(max-width: 600px) {
        height: 500px;
    }

    @media(max-width: 450px) {
        width: ${({ width }: StyledWindowWidthProps) => `${width}px`};
        height: ${({ width }: StyledWindowWidthProps) => `${width * 1.3}px`}
    }
`;

type StyledPackageBackgroundProps = {
    image: string
    theme?: Theme
}

const StyledPackageBackground = styled.div`
    width: 100%;
    padding-top: 100%;
    border-radius: 20px;
    box-shadow: ${({ theme }: StyledPackageBackgroundProps) => theme?.shadows[12]};
    background-image: ${({ image }: StyledPackageBackgroundProps) => `url(${image})`};
    background-size: cover;
    position: relative;
`;

type StyledPackageDetailsProps = {
    theme?: Theme
    isOpen: boolean
}

const StyledPackageDetails = styled.div`
    position: absolute;
    background-color: #fff;
    transition: height 200ms ease-in-out;
    bottom: 0;
    border-radius: 20px;
    z-index: 2;
    padding: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.1rem;

    height: ${({ isOpen }: StyledPackageDetailsProps) => isOpen ? "550px" : "170px"};

    @media(max-width: 600px) {
        height: ${({ isOpen }: StyledPackageDetailsProps) => isOpen ? "450px" : "140px"};
    }

    box-shadow: ${({ theme }: StyledPackageDetailsProps) => theme?.shadows[12]};
`;

const StyledDonateButton = styled(Button)`
    width: 10rem;
    height: 3rem;
`;


export default PackageItem;