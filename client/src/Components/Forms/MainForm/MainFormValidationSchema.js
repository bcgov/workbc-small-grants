import { yupToFormErrors } from 'formik'
import * as yup from 'yup'
import "yup-phone"


export const MainFormValidationSchema = yup.object().shape({
    operatingName: yup.string()
        .required('Please enter the Organization Name'),
    legalName: yup.string()
        .required('Please enter the legal name.'),
    missionStatement: yup.string()
        .max(255)
        .required('Please enter the mission statement.'),
    website: yup.string().url()
        .required('Please enter the website.'),
    //How long, what type, min max?
    businessNumber: yup.number()
        .typeError('Must be a number')
        .required('Please enter your business number.'),
    confirmOrganizationNonProfit: yup.string()
        .matches("yes", " ")
        .required('Please'),
    nonProfitClassification: yup.mixed()
        .oneOf(["cultureAndRecreation","education","healthServices","socialServices","environment","developerAndHousing","lawAndAdvocacy","religiousOrganizations","other"],"Please select a valid value.")
        .required('Please select your classification.'),
    nonProfitSubClassification: yup.mixed()
        .oneOf([])
        .required("Please select a subclassification."),   
    basedInBC: yup.boolean()
        .oneOf([true],"Your organization must be based in BC."),
    positionTitle: yup.string()
        .required("Please enter title"),
    firstName: yup.string()
        .required("Please enter first name."),
    lastName: yup.string()
        .required("Please enter last name"),
    email: yup.string().email("Please enter a valid email.")
        .required("Please enter email"),
    phone: yup.string()
        .phone("CA", false, "Please enter a valid number.")
        .required("Please enter phone."),
    positionTitleAlternate: yup.string()
        .required("Please enter title"),
    firstNameAlternate: yup.string()
        .required(),
    lastNameAlternate: yup.string()
        .required(),
    emailAlternate: yup.string().email("Please enter a valid email")
        .required("Please enter email"),
    phoneAlternate: yup.string()
        .phone("CA", false, "Please enter a valid number.")
        .required("Please enter phone"),
    otherMailingAddress: yup.boolean(),
    address1: yup.string()
        .max(255,"Address too long, please use address line 2.")
        .required("Please enter address line 1."),
    address2: yup.string()
        .max(255,"Address too long"),
    city: yup.string()
        .max(100,"City name too long")
        .required("Please enter city"),
    postal: yup.string()
        .matches(/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,"Please enter a valid Postal Code")
        .required("Please enter a postal code."),
    mailingAddress1: yup.string()
        .max(255,"Address too long, please use address line 2.")
        .when("otherMailingAddress", {
            is: true,
            then: yup.string().required("Please enter address line 1.")
        }),
    mailingAddress2: yup.string()
        .max(255,"Address too long"),
    mailingCity: yup.string()
        .max(100,"City name too long")
        .when("otherMailingAddress", {
            is: true,
            then: yup.string().required("Please enter city")
        }),    
    mailingPostal: yup.string()
        .matches(/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,"Please enter a valid Postal Code")
        .when("otherMailingAddress", {
            is: true,
            then: yup.string().required("Please enter a postal code.")
        }),   
    applicants: yup.mixed()
        .oneOf(["1","2","3","4","5"])
        .required("Please select number of applicants."),
    insuranceCoverage: yup.boolean()
        .oneOf([true],"Required"),
    monitorCommit: yup.boolean()
        .oneOf([true],"Required"),
    applicantType: yup.boolean()
        .oneOf([true],"Required"),
    placementLength: yup.boolean()
        .oneOf([true],"Required"),
    participantActivities: yup.string()
        .max(700, "Maximum of 700 characters is allowed")
        .required("Please describe the work opportunity"),
    experiences: yup.array()
        .of(yup.string()
            .min(1)
            .oneOf(["Training","Mentorship","Other"])
        )
        .required("Please select at least one experience."),
    otherExperience: yup.string()
        .when("experiences", (experiences, schema) => {
            return experiences.indexOf("Other") > -1 ? schema.required() : null
        })
        
    /*
    skills
    otherSkill
    additionalBenefits
    stipend
    existingSupplierNumber
    supplierNumber
    businessClassification
    taxNumber
    signatory1
    signatory2
    signingAuthorityConfirm
    consent
    */
})
