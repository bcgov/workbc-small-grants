import * as yup from 'yup'
import 'core-js/stable';

export const ClientFormValidationSchema = yup.object().shape({
    applicationId: yup.string(),
    applicationIdM: yup.string()
        .when('applicationId', {
            is: "none",
            then: yup.string().required("Please enter the organization ID.").min(10).max(10),
            otherwise: yup.string().min(0)
        }),
    noOrgId: yup.boolean(),
    organizationNameM: yup.string()
        .when('noOrgId', {
            is: true,
            then: yup.string().required("Please enter the organization name.").max(255),
            otherwise: yup.string().min(0)
        }),
    clientName: yup.string()
        .max(10)
        .required("Please enter first name."),
    clientLastName: yup.string()
        .required("Please enter last name"),
    clientDOB: yup.date()
        .max(new Date())
        .required("Please enter your date of birth."),    
    clientEmail: yup.string().email("Please enter a valid email.")
        .required("Please enter email"),
    clientAddress1: yup.string()
        .max(255,"Address too long, please use address line 2.")
        .required("Please enter address line 1."),
    clientAddress2: yup.string()
        .max(255,"Address too long"),
    clientConsent: yup.boolean()
        .oneOf([true],"You must agree before submitting.")
})