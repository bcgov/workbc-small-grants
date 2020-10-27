//import * as yup from 'yup'
//import "yup-phone"
var yup=require('yup')
require('yup-phone')

//export
var MainFormValidationSchema = yup.object().shape({
    operatingName: yup.string()
        .required('Please enter the organization name'),
    legalName: yup.string()
        .required('Please enter the legal name.'),
    missionStatement: yup.string()
        .max(255)
        .required('Please enter the mandate.'),
    organizationWebsite: yup.string().url()
        .required('Please enter the website.'),
    //How long, what type, min max?
    businessNumber: yup.string()
        .max(15, "Business number must be exactly 15 characters")
        .min(15, "Business number must be exactly 15 characters.")
        .required('Please enter your business number.'),
    confirmOrganizationNonProfit: yup.string()
        .matches("yes", "Only non-profits are eligible.")
        .required('Please select'),
    nonProfitClassification: yup.mixed()
        .oneOf(["cultureAndRecreation","education","healthServices","socialServices","environment","developerAndHousing","lawAndAdvocacy","religiousOrganizations","other"],"Please select a valid field.")
        .required('Please select your classification.'),
    nonProfitSubClassification: yup.string()
        .oneOf([
            "artsAndCulture",
            "recreation",
            "serviceClubsOrOrganizations",
            "primaryAndSecondaryEducation",
            "higherEducation",
            "otherEducation",
            "research",
            "hospitalsAndRehabilitation",
            "nursingHomes",
            "mentalHealthAndCrisisIntervention",
            "otherHealthServices",
            "socialServices",
            "emergencyAndRefugees",
            "incomeSupportAndMaintenance",
            "environment",
            "animals",
            "Economic Social and Community Development",
            "Housing",
            "Employment and Training",
            "Civic and Advocacy Organizations",
            "Law and Legal Services"
        ], "Please select a valid field.")
        .when("nonProfitClassification", {
            is: (value) => value !== "religiousOrganizations" && value !== "other",
            then: yup.string().required("Please select a subclassification.")
        }),
    nonProfitSubClassificationOther: yup.string()
        .when("nonProfitClassification", {
            is: "other",
            then: yup.string().required("Please specify.").max(255, "Max length is 255 characters.")
        }),    
    basedInBC: yup.boolean()
        .oneOf([true],"Your organization must be based in BC."),
    positionTitle: yup.string()
        .required("Please enter title"),
    firstName: yup.string()
        .required("Please enter first name."),
    lastName: yup.string()
        .required("Please enter last name"),
    contactEmail: yup.string().email("Please enter a valid email.")
        .required("Please enter email"),
    contactPhone: yup.string()
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
    contactAddress1: yup.string()
        .max(255,"Address too long, please use address line 2.")
        .required("Please enter address line 1."),
    contactAddress2: yup.string()
        .max(255,"Address too long"),
    contactCity: yup.string()
        .max(100,"City name too long")
        .required("Please enter city"),
    contactPostal: yup.string()
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
        .when("otherMailingAddress", {
            is: true,
            then: yup.string().matches(/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,"Please enter a valid Postal Code").required("Please enter a postal code.")
        }),   
    numberOfApplicants: yup.mixed()
        .oneOf(["1","2","3","4","5"], "Please choose a valid option.")
        .required("Please select number of applicants."),
    insuranceCoverage: yup.boolean()
        .oneOf([true],"Please confirm you have insurance coverage."),
    monitorCommit: yup.boolean()
        .oneOf([true],"Please confirm your commitment."),
    applicantType: yup.boolean()
        .oneOf([true],"Please confirm your understanding of eligibility requirements."),
    placementLength: yup.boolean()
        .oneOf([true],"Please confirm that the placement will be 12 weeks."),
    participantActivities: yup.string()
        .max(700, "Maximum of 700 characters is allowed")
        .required("Please describe the work opportunity"),
    participantExperiences: yup.array()
        .of(yup.string()
            .min(1)
            .oneOf([
                "Training",
                "On the job coaching",
                "Mentorship",
                "Flexible working arrangements",
                "Wrap around supports",
                "Other"
            ], "Please select a valid option.")
        )
        .required("Please select at least one experience."),
    otherExperience: yup.string()
        .when("participantExperiences", (participantExperiences, schema) => {
            return participantExperiences.indexOf("Other") > -1 ? schema.required("Please describe.").max(500,"Maximum of 500 characters is allowed") : schema.min(0)
        }),
    participantSkills: yup.array()
        .of(yup.string()
            .min(1)
            .oneOf([
                "Essential Skills",
                "Life Skills",
                "Training",
                "Employment Experience",
                "Self Employment Experience",
                "Other"
            ],"Please select a valid option.")
        )
        .required("Please select at least one skill."),
    otherSkill: yup.string()
        .when("participantSkills", (participantSkills, schema) => {
            return participantSkills.indexOf("Other") > -1 ? schema.required("Please describe.").max(500,"Maximum of 500 characters is allowed") : schema.min(0)
        }),
    additionalBenefits: yup.string()
        .max(700,"Maximum of 700 characters is allowed."),
    participantStipend: yup.boolean()
        .oneOf([true],"Please confirm that the minimum stipend being provided is $3600."),
    existingSupplierNumber: yup.string()
        .oneOf(["yes","no"])
        .required("Please select."),
    supplierNumber: yup.string()
        .when("existingSupplierNumber",{
            is: "yes",
            then: yup.string().min(7, "Supplier number must be exactly 7 characters.").max(7,"Supplier number must be exactly 7 characters.").required("Please enter your supplier number.")
        }),
    businessClassification: yup.string()
        .when("existingSupplierNumber",{
            is: "no",
            then: yup.string()
                .oneOf(["nonProfitAgency","corporationOrPrivateSectorAgency","publicSectorAgency","otherAgency"],"Please select a valid option")
                .required("Please select your business classification.")
        }),
    taxNumber: yup.number()  
        .when("existingSupplierNumber",{
            is: "no",
            then: yup.number()
            .typeError("Must be a number.")      
            .required("Please enter your tax number.")
        }),
    signatory1: yup.string()
        .required("Please enter the first organization signatory.")
        .test('match','Signatories must be different',function (signatory1){
            return signatory1 !== this.options.parent.signatory2
        }),     
    signatory2: yup.string()
        .required("Please enter the second organization signatory."),
    signingAuthorityConfirm: yup.boolean() 
        .oneOf([true],"Please confirm signing authorities."),
    organizationConsent: yup.boolean()
        .oneOf([true],"Please provide your consent."),
})

module.exports = MainFormValidationSchema
