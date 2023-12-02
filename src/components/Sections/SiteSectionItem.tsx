import styled from "@emotion/styled";
import useElementReach from "components/Navbar/useElementReach";
import { SiteContext } from "context/SiteContext";
import { NavItem } from "context/types";
import React, { useContext, useRef } from "react";
import useWindowDim from "utils/hooks/useWindowDim";
import SiteSecitonsMap from "./SiteSectionsMap";

interface ISiteSectionItemProps {
    sectionItem: NavItem;
    index: number;
}

function SiteSectionItem({
    sectionItem,
    index,
}: ISiteSectionItemProps): JSX.Element {
    const {
        setSelectedItem
    } = useContext(SiteContext);

    const {
        width,
        height
    } = useWindowDim();

    const ref = useRef<HTMLDivElement>(null);
    const onElementReach = () => {
        setSelectedItem({
            elementId: sectionItem.elementId,
            index
        });
    };

    useElementReach(ref, () => onElementReach());

    return (
        <StyledSiteSectionItem
            minHeight={height}
            width={width}
            ref={ref}
            style={{ minHeight: height, width }}
        >
            <SiteSecitonsMap elementId={sectionItem.elementId} />
        </StyledSiteSectionItem>
    );
}

type StyledSiteSectionItemProps = {
    minHeight: number,
    width: number
}

const StyledSiteSectionItem = styled.div`
    display: flex;
    justify-content: center;
    margin: 0;
    min-height: 50rem;
    min-height: ${({ minHeight }: StyledSiteSectionItemProps) => `${minHeight}px`};
    width: ${({ width }: StyledSiteSectionItemProps) => `${width}px`};
    position: relative;
    /* overflow-x: hidden; */
`;

export default SiteSectionItem;