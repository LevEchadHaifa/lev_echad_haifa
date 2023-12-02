import styled from "@emotion/styled";
import React from "react";

export interface ICarouselItemProps {
    locX: number,
    index: number,
    item: React.ReactNode,
    movePercent: number
}

function CarouselItem({ locX, index, item, movePercent }: ICarouselItemProps) {
    const left = (movePercent * (index)) - locX;

    return (
        <StyledCarouselItem
            left={left}
            isSelected={left === 0}
        >{item}</StyledCarouselItem>
    );
}

type StyledCarouselItemProps = {
    left: number
    isSelected: boolean
}

const StyledCarouselItem = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: ${({ left }: StyledCarouselItemProps) => `${left}%`};
    transition: left 300ms ease-in-out, transform 300ms ease-in-out;
    transform: ${({ isSelected }: StyledCarouselItemProps) => isSelected ? "scale(1)" : "scale(0.75)"}
`;

export default CarouselItem;