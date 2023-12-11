import styled from "@emotion/styled";
import { Theme, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import PackageItem, { IPackageItemProps } from "./PackageItem";
import { TFunction } from "i18next";

const NUM_PACKAGES_PER_TYPE = 2;

const soldiersPackages: IPackageItemProps[] = [];
const evacuatedPackages: IPackageItemProps[] = [];

enum PackagesTypes {
    Soldiers = "soldiers",
    Evacuated = "evacuated"
}

const arrMap = {
    [PackagesTypes.Soldiers]: soldiersPackages,
    [PackagesTypes.Evacuated]: evacuatedPackages
};

const mapPackages = (name: PackagesTypes, t: TFunction<"translation", undefined>) => {
    for (let packagesIndex = 0; packagesIndex < NUM_PACKAGES_PER_TYPE; packagesIndex++) {
        let itemIndex = 0;
        const items = [];
        const keyBase = `packages_content.data.${name}.packages.${packagesIndex}`;
        let currentKey = `${keyBase}.items.${itemIndex}`;
        while (t(currentKey) !== currentKey) {
            items.push(t(currentKey));
            itemIndex++;
            currentKey = `${keyBase}.items.${itemIndex}`;
        }

        arrMap[name].push({
            items,
            price: t(`${keyBase}.price`),
            image: t(`${keyBase}.image`)
        });
    }
};

function Packages() {
    const { t } = useTranslation();

    if (soldiersPackages.length === 0 || evacuatedPackages.length === 0) {
        mapPackages(PackagesTypes.Soldiers, t);
        mapPackages(PackagesTypes.Evacuated, t);

        console.log(soldiersPackages);
        console.log(evacuatedPackages);

    }

    return (
        <StyledPackages
            id="packages"
        >
            {Object.keys(arrMap).map((key) =>
                <StyledPackageTypeBlock key={key}>
                    <StyledTitle>
                        <StyledPackagesFor variant="subtitle2">
                            {t("packages_content.packages_for")}
                        </StyledPackagesFor>
                        <Typography variant="subtitle2">
                            {t(`packages_content.data.${key}.type_name`)}
                        </Typography>
                    </StyledTitle>
                    <StyledPackagesList>
                        {arrMap[key as PackagesTypes].map(packageItem =>
                            <PackageItem
                                key={key}
                                {...packageItem}
                            />
                        )}
                    </StyledPackagesList>

                </StyledPackageTypeBlock>
            )}

        </StyledPackages>
    );
}

type StyledPacakgesProps = {
    theme?: Theme
}

const StyledPackages = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7rem;
    padding: 8rem 0; 
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const StyledPackagesList = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5rem;

    @media(max-width: 1000px) {
        flex-direction: column;
    }
`;

const StyledPackageTypeBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
`;

const StyledTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    & > * {
        color: #fff;
    }
`;

const StyledPackagesFor = styled(Typography)`
    font-weight: 600;
    text-transform: none;
    transform: scale(0.85);
    transform-origin: left;
`;

export default Packages;