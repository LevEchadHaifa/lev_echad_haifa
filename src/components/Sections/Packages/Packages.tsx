import styled from "@emotion/styled";
import React from "react";

function Packages() {
    return (
        <StyledPackages
            id="packages"
        >
            Packages
        </StyledPackages>
    );
}


const StyledPackages = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

export default Packages;