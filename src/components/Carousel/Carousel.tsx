import styled from "@emotion/styled";
import React, { useState } from "react";
import CarouselItem from "./CarouselItem";
import CarouselNavigation from "./CarouselNavigation";
import { IconButton, Theme } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

export interface ICarouselProps {
    children: React.ReactNode
}



function Carousel({ children }: ICarouselProps): JSX.Element {
    const [locX, setLocX] = useState(0);
    const movePercent = 100;
    const numElements = React.Children.count(children);

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

    const displayLeft = locX / movePercent > 0;
    const displayRight = locX / movePercent < numElements - 1;

    return (
        <StyledCarousel>
            <StyledContentWrapper>
                <StyledNavigationButtonsWrapper>
                    <StyledNavigationButtons>
                        <StyledButtonWrapper display={displayLeft}>
                            {displayLeft &&
                                <IconButton onClick={movePrev}>
                                    <ChevronLeft />
                                </IconButton>
                            }
                        </StyledButtonWrapper>
                        <StyledButtonWrapper display={displayRight}>
                            {displayRight &&
                                <IconButton onClick={moveNext}>
                                    <ChevronRight />
                                </IconButton>
                            }
                        </StyledButtonWrapper>
                    </StyledNavigationButtons>
                </StyledNavigationButtonsWrapper>
                <StyledCarouselContent>
                    {React.Children.map(children, (child, index) =>
                        <CarouselItem
                            index={index}
                            item={child}
                            locX={locX}
                            movePercent={movePercent}
                        />
                    )}
                </StyledCarouselContent>

            </StyledContentWrapper>
            <CarouselNavigation
                numElements={numElements}
                locX={locX}
                setLocX={setLocX}
                movePercent={movePercent}
            />

        </StyledCarousel>
    );
}

const StyledNavigationButtonsWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
`;

const StyledNavigationButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 650px;
    height: 100%;
`;

const StyledCarousel = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    position: relative;
`;

const StyledCarouselContent = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    align-items: center;
    position: relative;
    padding: 2rem;
    transform-origin: center; 
    overflow: hidden;
`;

const StyledContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

type StyledButtonWrapperProps = {
    display: boolean
    theme?: Theme
}

const StyledButtonWrapper = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ display }: StyledButtonWrapperProps) => display ? "#bbb" : "transparent"} ;
    z-index: 2;
    box-shadow: ${({ theme, display }: StyledButtonWrapperProps) => display ? theme?.shadows[5] : theme?.shadows[0]};
`;

export default Carousel;