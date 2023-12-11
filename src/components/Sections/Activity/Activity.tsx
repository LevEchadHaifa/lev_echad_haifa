import React from "react";
import styled from "@emotion/styled";
import Carousel from "components/Carousel/Carousel";
import soldiers from "assets/images/activities/soldiers.jpeg";
import families from "assets/images/activities/families.jpg";
import hotels from "assets/images/activities/hotels.jpeg";
import elderly from "assets/images/activities/elderly.jpeg";
import agriculture from "assets/images/activities/agriculture.jpeg";
import clothing from "assets/images/activities/clothing.jpeg";
import { useTranslation } from "react-i18next";
import ActivityItem, { IActivityItemProps, ImageDescriptor } from "./ActivityItem";
import { Typography } from "@mui/material";

const NUM_ACTIVITIES = 6;
const NUM_DESCRIPTION_ITEMS = 2;


const images: ImageDescriptor[] = [
    {
        image: soldiers,
        position: {
            locX: 0,
            locY: 50
        }
    },
    {
        image: families,
        position: {
            locX: 0,
            locY: 0
        }
    },
    {
        image: hotels,
        position: {
            locX: 0,
            locY: 0
        }
    },
    {
        image: elderly,
        position: {
            locX: 0,
            locY: 0
        }
    },
    {
        image: agriculture,
        position: {
            locX: 50,
            locY: 0
        }
    },
    {
        image: clothing,
        position: {
            locX: 0,
            locY: 90
        }
    }
];
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
            <StyledTitle variant="subtitle2">{t("navbar.activity")}</StyledTitle>
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

const StyledTitle = styled(Typography)`
    width: 100%;
    /* padding-left: 5rem; */
`;



export default Activity;