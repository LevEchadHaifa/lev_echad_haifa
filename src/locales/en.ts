import packages_winter_en from "assets/images/packages/winter_en.jpeg";
import packages_field_en from "assets/images/packages/field_en.jpeg";
import packages_families_en from "assets/images/packages/families_en.png";
import packages_babies_en from "assets/images/packages/babies_en.png";


const englishLocale = {
    "navbar": {
        "about_us": "About us",
        "activity": "What we do",
        "packages": "Packages",
        "contact_us": "Contact us",
        "donate": "Donate"
    },
    "about_us_content": {
        "we_are_title": "We are Haifa branch of",
        "lev_echad": "Lev Echad",
        "p1": "The Haifa branch of the civil aid organization Lev Echad",
        "p2": "We are The Haifa branch of the civil aid organization Lev Echad. Established in 2006, Lev Echad is a charity organization focused on aiding civilians during times of crisis. Lev Echad has centers all over israel.",
        "p3": "3 Days after the outbreak of the War in Gaza, the Haifa branch of Lev Echad was established. Since then it has responded to over 25000 requests for aid, from providing equipment to our soldiers on the frontlines to aiding evicted civilians and families of reservists back in the homefront.",
        "p4": "The Haifa Branch coordinates the operations of over 600 regular volunteers who assist in running our support network, which includes various activity categories."
    },
    "activity_content": [
        {
            "title": "Logistical support for soldiers in field",
            "desc": [
                "Processing around 70 requests a week",
                "Donations of essential combat support items, including warm clothes, socks, shirts, and personal care products, \
                    to improve conditions in the field. Additionally, when possible, food donations"
            ]
        },
        {
            "title": "Logistical Support for evicted Families",
            "desc": [
                "Processing around 80 requests a week",
                "Donations of food, furniture, games and books for children, equipment and food for babies"
            ]
        },
        {
            "title": "Establishing educational programs for children staying in hotel",
            "desc": [
                "We currently operate in 15 hotels in haifa and 7 hotels in the surrounding area",
                "Recurring educational program during the afternoons"
            ]
        },
        {
            "title": "Mapping the needs of Haifa’s senior citizens",
            "desc": [
                "A team of 50 volunteers works in collaboration with the Haifa municipality to evaluate the needs of Haifa's senior citizens, offering them support during emergencies"
            ]
        },
        {
            "title": "Restoration of bomb shelters",
            "desc": [
                "A team of volunteers which coordinates with the Haifa municipality to clean and restore civilian bomb shelters. So far we have resotred 58 shelters"
            ]
        },
        {
            "title": "Assisting the agricultural sector",
            "desc": [
                "In collaboration with Emergency Farmers Support non profit"
            ]
        },
        {
            "title": "Free Clothing Store for evacuated citizens",
            "desc": [
                "A second-hand store with free clothes for citizens who were evacuated during the war, operated by our regular volunteers."
            ]
        }
    ],
    "packages_content": {
        "currency": "usd",
        "package_content_see": "see package content",
        "package_content_hide": "hide package content",
        "data": {
            "soldiers": {
                "type_name": "Packages for soldiers",
                "packages": [
                    {
                        "title": "Winter Care Package For Soldiers",
                        "items": [
                            "Thermal long sleeved top",
                            "Thermal Leggings",
                            "Fleece Neck Warmers",
                            "T shirts",
                            "Socks",
                            "Underwear"
                        ],
                        "price": "50$",
                        "image": packages_winter_en
                    },
                    {
                        "title": "Outdoor Care Package for Soldiers",
                        "items": [
                            "Propane Tank",
                            "Leatherman multi - tool knife",
                            "Tactical headlamp",
                            "Protein bar",
                            "Field Coffee kit"
                        ],
                        "price": "80$",
                        "image": packages_field_en
                    },
                ]
            },
            "evacuated": {
                "type_name": "Packages for evacuated people",
                "packages": [
                    {
                        "title": "Care package for evacuated families",
                        "items": [
                            "Pasta/Rice",
                            "Cooking oil",
                            "Sauces and spreads",
                            "Canned goods",
                            "Deodorant",
                            "Shampoo",
                            "Books/games"
                        ],
                        "price": "40$",
                        "image": packages_families_en
                    },
                    {
                        "title": "Care package for evacuated babies",
                        "items": [
                            "Baby formula",
                            "Diapers",
                            "Wet wipes",
                            "Baby soap",
                            "Pacifiers"
                        ],
                        "price": "75$",
                        "image": packages_babies_en
                    },
                ]
            }
        }

    },
    "contact_us_content": {
        "send": "send",
        "errors": {
            "required": "required field",
            "invalid_email": "Email address is invalid",
            "invalid_phone_number": "phone number is invalid",
        },
        "email_success": "Your message was sent successfully!",
        "email_error": "Sorry, we were unable to send your message.",
        "already_sent": "Your message was already sent (:",
        "social_media": "We're also available on:"
    }
};

export default englishLocale;