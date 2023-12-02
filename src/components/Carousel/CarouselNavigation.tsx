import styled from "@emotion/styled";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { IconButton, Theme } from "@mui/material";
import React from "react";

interface ICarouselNavigationProps {
    numElements: number
    setLocX: React.Dispatch<React.SetStateAction<number>>
    movePercent: number
    locX: number
}

function CarouselNavigation({ numElements, setLocX, movePercent, locX }: ICarouselNavigationProps) {
    const moveNext = () => {
        setLocX((currLocX) => {
            if (currLocX < ((numElements - 1) * movePercent)) {
                return currLocX + movePercent;
            }

            return currLocX;
        });
    };

    const movePrev = () => {
        setLocX((currLocX) => {
            if (currLocX >= movePercent) {
                return currLocX - movePercent;
            }

            return currLocX;
        });
    };

    const goToIndex = (index: number) => {
        if (index >= 0 && index < numElements) {
            setLocX(index * movePercent);
        }
    };

    return (
        <StyledCarouselNavigation>
            <IconButton onClick={movePrev}>
                <ChevronLeft />
            </IconButton>
            <StyledNavIndicators>
                {Array(numElements).fill(true).map((_, index) =>
                    <StyledIndicator
                        key={index}
                        onClick={() => goToIndex(index)}
                        isSelected={locX / movePercent === index}
                    />
                )}
            </StyledNavIndicators>
            <IconButton onClick={moveNext}>
                <ChevronRight />
            </IconButton>
        </StyledCarouselNavigation>
    );
}

const StyledCarouselNavigation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    height: 4rem;
`;

const StyledNavIndicators = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`;

type StyledIndicatorProps = {
    isSelected: boolean
    theme?: Theme
}

const StyledIndicator = styled.div`
    background-color: ${({ isSelected, theme }: StyledIndicatorProps) =>
        isSelected
            ? theme?.palette.primary.main
            : "#ccc"};

    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    opacity: 1;
    transition: opacity 300ms ease-in-out;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
`;

export default CarouselNavigation;