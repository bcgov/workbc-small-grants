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
        .matches("yes", "Only non-profits are eligible.")
        .required('Please select'),
    nonProfitClassification: yup.mixed()
        .oneOf(["cultureAndRecreation","education","healthServices","socialServices","environment","developerAndHousing","lawAndAdvocacy","religiousOrganizations","other"],"Please select a valid value.")
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
            is: (value) => value !== "religiousOrganizations",
            then: yup.string().required("Please select a subclassification.")
        }),
    nonProfitSubClassificationOther: yup.string()
        .when("nonProfitClassification", {
            is: "other",
            then: yup.string().required("Please specify.").max(255)
        }),    
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
            .oneOf(["Training","On the job coaching","Mentorship","Flexible working arrangements","Wrap around supports","Other"])
        )
        .required("Please select at least one experience."),
    otherExperience: yup.string()
        .when("experiences", (experiences, schema) => {
            return experiences.indexOf("Other") > -1 ? schema.required("Please describe.") : schema.min(0)
        }),
    skills: yup.array()
        .of(yup.string()
            .min(1)
            .oneOf(["Essential Skills","Life Skills","Training","Employment Experience","Self Employment Experience","Other"])
        )
        .required("Please select at least one skill."),
    otherSkill: yup.string()
        .when("skills", (skills, schema) => {
            return skills.indexOf("Other") > -1 ? schema.required("Please describe.") : schema.min(0)
        }),
    additionalBenefits: yup.string(),
    stipend: yup.number()
        .typeError("Must be a number.")
        .moreThan(3599,"Minimum stipend must be at least $3600")
        .required("Please enter stipend amount."),
    existingSupplierNumber: yup.string()
        .oneOf(["yes","no"])
        .required("Please select."),
    supplierNumber: yup.number()
        .when("existingSupplierNumber",{
            is: "yes",
            then: yup.number().required("Please enter your supplier number.")
        }),
    businessClassification: yup.string()
        .when("existingSupplierNumber",{
            is: "no",
            then: yup.string()
                .oneOf(["nonProfitAgency","corporationOrPrivateSectorAgency","publicSectorAgency","otherAgency"])
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
            console.log(this.options)
            return signatory1 !== this.options.parent.signatory2
        }),     
    signatory2: yup.string()
        .required("Please enter the second organization signatory."),
    signingAuthorityConfirm: yup.boolean() 
        .oneOf([true],"Required"),
    consent: yup.boolean()
        .oneOf([true],"Required"),
    
})
