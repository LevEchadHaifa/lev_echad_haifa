import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import Activity from "./Activity/Activity";
import Packages from "./Packages/Packages";
import ContactUs from "./ContactUs/ContactUs";

interface IProps {
    elementId: string;
}

function SiteSecitonsMap({ elementId }: IProps): JSX.Element {
    switch (elementId) {
        case "about_us":
            return <AboutUs />;

        case "activity":
            return <Activity />;

        case "packages":
            return <Packages />;

        case "contact_us":
            return <ContactUs />;

        default:
            return <></>;
    }
}

export default SiteSecitonsMap;
