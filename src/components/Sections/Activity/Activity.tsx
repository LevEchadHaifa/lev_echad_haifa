import React from "react";
import styled from "@emotion/styled";
import Carousel from "components/Carousel/Carousel";
import main from "assets/images/main.png";
import { useTranslation } from "react-i18next";
import ActivityItem, { IActivityItemProps } from "./ActivityItem";

const NUM_ACTIVITIES = 7;
const NUM_DESCRIPTION_ITEMS = 2;
const images: string[] = [main, main, main, main, main, main, main];
const activities: IActivityItemProps[] = [];

function Activity() {
    const { t } = useTranslation();


    if (activities.length === 0) {
        for (let activityIndex = 0; activityIndex < NUM_ACTIVITIES; activityIndex++) {
            activities[activityIndex] = {
                index: activityIndex,
                img: images[activityIndex],
                title: t(`activity_content.${activityIndex}.title`),
                description: []
            };

            for (let descriptionIndex = 0; descriptionIndex < NUM_DESCRIPTION_ITEMS; descriptionIndex++) {
                const currentTranslationKey = `activity_content.${activityIndex}.desc.${descriptionIndex}`;
                const currentTranslation = t(currentTranslationKey);

                if (currentTranslationKey !== currentTranslation) {
                    activities[activityIndex].description.push(currentTranslation);
                }
            }

        }
    }


    return (
        <StyledActivity
            id="activity"
        >
            <Carousel>
                {activities.map((activity, index) =>
                    <ActivityItem
                        key={index}
                        {...activity}
                    />
                )}
            </Carousel>
        </StyledActivity>
    );
}

const StyledActivity = styled.div`
    width: 100%;
    padding-top: 10rem;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

// const StyledTitle = styled(Typography)`
//     font-weight: 600;
//     padding-left: 2rem;
// `;



export default Activity;