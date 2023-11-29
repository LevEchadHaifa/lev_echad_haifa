import React, { useState } from "react";
import { createContext } from "react";
import { ISiteContext, Language, NavItem, SelectedItem } from "./types";
import { useTranslation } from "react-i18next";

interface ISiteProviderProps {
    children: React.ReactNode
}

export const SiteContext = createContext<ISiteContext>({
    lang: Language.En,
    changeLanguage: () => { },
    selectedItem: {
        elementId: "",
        index: 0
    },
    setSelectedItem: () => { },
    navItems: []
});

const SiteProvider = ({ children }: ISiteProviderProps) => {
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(Language.En);

    const { t } = useTranslation();

    const navItems: NavItem[] = [
        {
            label: t("about_us"),
            elementId: "about_us",
        },
        {
            label: t("activity"),
            elementId: "activity",
        },
        {
            label: t("packages"),
            elementId: "packages",
        },
        {
            label: t("contact_us"),
            elementId: "contact_us",
        },
    ];

    const [selectedItem, setSelectedItem] = useState<SelectedItem>({
        elementId: navItems[0]?.elementId,
        index: 0,
    });

    const value: ISiteContext = {
        lang: selectedLanguage,
        changeLanguage: setSelectedLanguage,
        selectedItem,
        setSelectedItem,
        navItems
    };

    return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
};

export default SiteProvider;

