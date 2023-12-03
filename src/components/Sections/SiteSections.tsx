import React, { useContext } from "react";
import styled from "@emotion/styled";
import { SiteContext } from "context/SiteContext";
import SiteSectionItem from "./SiteSectionItem";

function SiteSections(): JSX.Element {
    const { navItems } = useContext(SiteContext);

    return (
        <StyledSiteSections>
            {
                navItems.map((item, index) => (
                    <SiteSectionItem
                        key={item.elementId}
                        sectionItem={item}
                        index={index}
                    />
                ))
            }
        </StyledSiteSections>
    );
}

const StyledSiteSections = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 4rem;
`;

export default SiteSections;