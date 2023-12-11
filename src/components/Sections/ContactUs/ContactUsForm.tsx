import styled from "@emotion/styled";
import { Alert, MenuItem, Select, SelectChangeEvent, Theme, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ContactField, { ContactFieldKeys } from "./ContactField";
import countryCodes from "./countryCodes.json";
import emailjs from "@emailjs/browser";
import { LoadingButton } from "@mui/lab";

export const details = {
    firstName: "",
    lastName: "",
    email: "",
    dialCode: "",
    phoneNumber: "",
    content: ""
};

enum EmailSendStatus {
    Success = "success",
    AlreadySent = "alreadySent",
    Error = "error"
}


function ContactUsForm() {
    const [contactDetails, setContactDetails] = useState(details);
    const [errors, setErrors] = useState<Partial<typeof details>>({});
    const [emailSendStatus, setEmailSendStatus] = useState<EmailSendStatus | undefined>();
    const [isLoading, setIsLoading] = useState(false);

    const { t } = useTranslation();

    let tempErrorObj: Partial<typeof details> = {};

    const changeError = (name: string, errorName: string) => {
        tempErrorObj[name as ContactFieldKeys] = t(`contact_us_content.errors.${errorName}`);
    };

    const formRef = useRef<HTMLFormElement>(null);

    const changeDetails = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>) => {
        const {
            name,
            value
        } = event.target;

        setContactDetails((currDetails) => ({
            ...currDetails,
            [name]: value
        }));
    };

    const requiredFieldError = (name: string, value: string) => {
        if (!value) {
            changeError(name, "required");

            return true;
        }

        return false;
    };

    const verifyStrings = (name: string, value: string) => {
        if (requiredFieldError(name, value)) {
            return false;
        }

        return true;
    };

    const verifyEmail = (name: string, value: string) => {
        if (requiredFieldError(name, value)) {
            return false;
        }

        if (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value))) {
            changeError(name, "invalid_email");
            return false;
        }

        return true;
    };

    const verifyPhoneNumber = (name: string, value: string) => {
        if (requiredFieldError(name, value)) {
            return false;
        }

        console.log(value);

        if (!(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{3,6}$/.test(value))) {
            changeError(name, "invalid_phone_number");
            return false;
        }

        return true;
    };

    const testContactDetails = (name: string, value: string) => {
        switch (name) {
            case ContactFieldKeys.Email:
                return verifyEmail(name, value);
            case ContactFieldKeys.PhoneNumber:
                return verifyPhoneNumber(name, value);
            default:
                return verifyStrings(name, value);
        }
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        tempErrorObj = {};

        for (const key in contactDetails) {
            testContactDetails(key, contactDetails[key as ContactFieldKeys]);
        }

        setErrors(tempErrorObj);

        if (emailSendStatus === EmailSendStatus.Success || emailSendStatus === EmailSendStatus.AlreadySent) {
            setEmailSendStatus(EmailSendStatus.AlreadySent);
            return;
        }

        if (Object.keys(tempErrorObj).length === 0) {
            setIsLoading(true);
            emailjs
                .sendForm(
                    "contact_service",
                    "template_3o398z8",
                    formRef.current || "",
                    "Sum7smjQbBK8yr7c5"
                )
                .then(() => {
                    setEmailSendStatus(EmailSendStatus.Success);
                })
                .catch(() => {
                    setEmailSendStatus(EmailSendStatus.Error);
                }).finally(() => {
                    setIsLoading(false);
                });
        }
    };

    return (
        <StyledContactUsFormWrapper>
            <StyledTitle variant="subtitle2">Contact us</StyledTitle>
            <StyledContactUsForm ref={formRef} onSubmit={onSubmit}>
                <StyledHorizontalWrapper>
                    <ContactField
                        label="First name"
                        name={ContactFieldKeys.FirstName}
                        onChange={changeDetails}
                        contactDetails={contactDetails}
                        errors={errors}
                    />
                    <ContactField
                        label="Last name"
                        name={ContactFieldKeys.LastName}
                        onChange={changeDetails}
                        contactDetails={contactDetails}
                        errors={errors}
                    />
                </StyledHorizontalWrapper>
                <ContactField
                    label="Email address"
                    name={ContactFieldKeys.Email}
                    onChange={changeDetails}
                    contactDetails={contactDetails}
                    errors={errors}
                />
                <StyledPhoneNumberWrapper>
                    <Typography variant="h4">
                        Phone number
                    </Typography>
                    <StyledHorizontalWrapper>
                        <Select
                            name={ContactFieldKeys.DialCode}
                            value={contactDetails.dialCode}
                            onChange={changeDetails}
                            error={!!errors[ContactFieldKeys.DialCode]}
                            sx={{ width: "150px" }}
                        >
                            {countryCodes.map(code =>
                                <MenuItem key={code.code} value={code.dial_code}>
                                    {`${code.dial_code} (${code.code})`}
                                </MenuItem>
                            )}
                        </Select>
                        <ContactField
                            name={ContactFieldKeys.PhoneNumber}
                            onChange={changeDetails}
                            contactDetails={contactDetails}
                            errors={errors}
                        />
                    </StyledHorizontalWrapper>
                </StyledPhoneNumberWrapper>


                <ContactField
                    label="Tell us what you think..."
                    name={ContactFieldKeys.Content}
                    onChange={changeDetails}
                    contactDetails={contactDetails}
                    errors={errors}
                    multiline
                    rows={6}
                />
                <LoadingButton
                    variant="contained"
                    type="submit"
                    loading={isLoading}
                    loadingPosition="end"
                >
                    {t("send")}
                </LoadingButton>
            </StyledContactUsForm>
            {emailSendStatus === EmailSendStatus.Success &&
                <StyledAlert sx={{ fontSize: "20px" }} severity="success">{t("contact_us_content.email_success")}</StyledAlert>
            }

            {emailSendStatus === EmailSendStatus.Error &&
                <StyledAlert severity="error">{t("contact_us_content.email_error")}</StyledAlert>
            }

            {emailSendStatus === EmailSendStatus.AlreadySent &&
                <StyledAlert severity="info">{t("contact_us_content.already_sent")}</StyledAlert>
            }
        </StyledContactUsFormWrapper>
    );
}

type StyledContactUsFormWrapperProps = {
    theme?: Theme
}

const StyledContactUsFormWrapper = styled.div`
    background-color: #fff;
    box-shadow: ${({ theme }: StyledContactUsFormWrapperProps) => theme?.shadows[12]};
    border-radius: 20px;
    margin-top: 3rem;
    padding: 2rem;
    margin: 0 1rem;
`;

const StyledHorizontalWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: flex-start;
`;

const StyledPhoneNumberWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const StyledContactUsForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
`;

const StyledAlert = styled(Alert)`
    font-size: 20px;
    margin-top: 1rem;
`;

const StyledTitle = styled(Typography)`
    margin-bottom: 1rem;
`;

export default ContactUsForm;