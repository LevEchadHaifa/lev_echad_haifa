import { TextField } from "@mui/material";
import React from "react";
import { details } from "./ContactUsForm";

export enum ContactFieldKeys {
    FirstName = "firstName",
    LastName = "lastName",
    Email = "email",
    PhoneNumber = "phoneNumber",
    DialCode = "dialCode",
    Content = "content"
}

export interface IContactFieldProps {
    label?: string
    name: ContactFieldKeys
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    errors: Partial<typeof details>,
    contactDetails: typeof details
    multiline?: boolean
    rows?: number
}



function ContactField({
    label,
    name,
    errors,
    contactDetails,
    onChange,
    multiline,
    rows
}: IContactFieldProps) {
    return (
        <TextField
            label={label}
            name={name}
            error={!!errors[name]}
            helperText={errors[name]}
            onChange={onChange}
            value={contactDetails[name]}
            fullWidth
            multiline={multiline}
            rows={rows}
        />
    );
}

export default ContactField;