import * as yup from 'yup'
import 'core-js/stable';

export const ClientFormValidationSchema = yup.object().shape({
    applicationId: yup.string(),
    applicationIdM: yup.string()
        .when(['applicationId','noOrgId'], {
            is: (applicationId, noOrgId) => (typeof applicationId === "undefined" || applicationId.length < 10) && !noOrgId,
            then: yup.string().required("Please enter the application ID.")
                .min(10, "Must be 10 characters")
                .max(10, "Must be 10 characters"),
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
        .oneOf([true],"You must agree before submitting."),
    /*
    livingOnReserveCommunity: yup.string()
        .oneOf(["treaty","nonTreaty"],"Please select an accepted value."),
    receivingAssistanceFrom: yup.string()
        .oneOf(["federally","provincially","other"],"Please select an accepted value."),
    pwdDesignationOrganization: yup.string()
        .max(250,"Organization Name too long."),
    ppmbDesignationOrganization: yup.string()
        .max(250,"Organization Name too long."),
    */
    approximateHours: yup.string()
        .required("Please select approximate hours.")
        .oneOf(["10hours", "20hours"], "Invalid value"),
    receivingAssistanceFromFirstNationOrTribalCouncil: yup.string()
        .required("Please select if you are currently receiving income assistance or disability assistance from a First Nation or Tribal Council.")
        .oneOf(["yes", "no"], "Invalid value")
})