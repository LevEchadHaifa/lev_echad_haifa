import styled from "@emotion/styled";
import React from "react";

export interface ICarouselItemProps {
    locX: number,
    index: number,
    movePercent: number,
    item: React.ReactNode,
}

function CarouselItem({ locX, index, item, movePercent }: ICarouselItemProps) {

    return (
        <StyledCarouselItem
            locX={locX}
            isSelected={locX / movePercent === index}
        >
            {item}
        </StyledCarouselItem>
    );
}

type StyledCarouselItemProps = {
    locX: number
    isSelected: boolean
}

const StyledCarouselItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: left 300ms ease-in-out, transform 300ms ease-in-out;
    transform-origin: center;
    transform: 
        ${({ locX, isSelected }: StyledCarouselItemProps) => `translateX(-${locX}%) ${isSelected ? "scale(1)" : "scale(0.75)"}`};
    min-height: 100%;
    min-width: 100%;
`;

export default CarouselItem;