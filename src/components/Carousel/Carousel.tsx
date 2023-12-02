import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import CarouselItem from "./CarouselItem";
import CarouselNavigation from "./CarouselNavigation";
import useWindowDim from "utils/hooks/useWindowDim";

export interface ICarouselProps {
    children: React.ReactNode
}



function Carousel({ children }: ICarouselProps): JSX.Element {
    const [locX, setLocX] = useState(0);
    const [movePercent, setMovePercent] = useState(60);

    const { width } = useWindowDim();

    useEffect(() => {
        if (width <= 800) {
            setMovePercent(100);
        }

        if (width > 800) {
            setMovePercent(60);
        }
    }, [width]);
    const numElements = React.Children.count(children);

    return (
        <StyledCarousel>
            <StyledContentWrapper>
                <StyledCarouselContent>
                    {React.Children.map(children, (child, index) =>
                        <CarouselItem
                            movePercent={movePercent}
                            index={index}
                            item={child}
                            locX={locX}
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
    justify-content: center;
    align-items: center;
`;

const StyledContentWrapper = styled.div`
    width: 100%;
    height: 100%;
`;


export default Carousel;