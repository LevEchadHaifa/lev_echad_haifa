export enum Language {
    En = "en",
    He = "he"
}

export interface SelectedItem {
    elementId: string;
    index: number;
}

export interface ISiteContext {
    lang: Language
    changeLanguage: (lang: Language) => void
    selectedItem: SelectedItem
    setSelectedItem: (newItem: SelectedItem) => void
    navItems: NavItem[]
}

export interface NavItem {
    label: string;
    elementId: string;
}
