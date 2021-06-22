import * as yup from 'yup'
import "yup-phone"
import 'core-js/stable';
import { yupToFormErrors } from 'formik';


export const ReportValidationSchema = yup.object().shape({
    applicationId: yup.string(),
    applicationIdM: yup.string()
        .when(['applicationId',], {
            is: (applicationId) => (typeof applicationId === "undefined" || applicationId.length < 10),
            then: yup.string().required("Please enter the application ID.")
                .min(10, "Must be 10 characters")
                .max(10, "Must be 10 characters"),
            otherwise: yup.string().min(0)
        }),
    recruitmentParticipantsSource: yup.array()
        .of(yup.string()
            .min(1)
            .oneOf([
                "Own Client Rosters",
                "Postings in the community",
                "Social media",
                "Networking with other organizations",
                "Recruitment assistance from WorkBC",
                "other"
            ], "Please select a valid option.")
        )
        .required("Recruitment Participants Source is required"),
    recruitmentOtherSourceExplain: yup.string()
        .when("recruitmentParticipantsSource", {
            is: (value) => value === "other",
            then: yup.string().max(500, "Text too long.").required("Please provide explanation of the other recruitment source.")
        }),
    participantsHoursPerWeek: yup.number().test(
        'is-decimal',
        'invalid decimal',
        value => (value + "").match(/^\d*.{1}\d*$/))
        .typeError("Must be a decimal number")
        .required('Please enter your participants hours per week.'),
    participantsAllCompletedPlacement: yup.string()
        .oneOf([
            "yes",
            "no"
        ], "Please select a valid option.")
        .required("Please select if all participants who began a work experience placement completed it"),
    participantsNotAbleToComplete: yup.string()
        .when("participantsAllCompletedPlacement", {
            is: (value) => value === "no",
            then: yup.string()
                .oneOf([
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                ], "Please select a valid field.")
                .required("How many participants were not able to complete their placements?")
        }),
    participantsAbleToFindNew: yup.string()
        .when("participantsAllCompletedPlacement", {
            is: (value) => value === "no",
            then: yup.string()
                .oneOf([
                    "yes",
                    "no"
                ], "Please select a valid option.")
                .required("Were you able to find new participants to complete the remainder of the placement?")
        }),
    participantsAbleToFindNewNoExplain: yup.string()
        .when("participantsAbleToFindNew", {
            is: (value) => value === "no",
            then: yup.string().max(500, "Text too long.").required("Please provide explanation of why you were not able to find new participants.")
        }),
    fundingStipendAmount: yup.number().test(
        'is-decimal',
        'invalid decimal',
        value => (value + "").match(/^\d*.{1}\d*$/))
        .typeError("Participant stipend must be a decimal number")
        .required('Please enter your participants stipend.'),
    fundingSupportsAmount: yup.number().test(
        'is-decimal',
        'invalid decimal',
        value => (value + "").match(/^\d*.{1}\d*$/))
        .typeError("Participant supports must be a decimal number")
        .required('Please enter your participants supports.'),
    fundingAdministrationOperationalExpense: yup.number().test(
        'is-decimal',
        'invalid decimal',
        value => (value + "").match(/^\d*.{1}\d*$/))
        .typeError("Administration/Operation expenses must be a decimal number")
        .required('Please enter your participants administration/operational expenses.'),
    fundingAdditional: yup.string()
        .oneOf([
            "yes",
            "no"
        ], "Please select a valid option.")
        .required("Was additional funding beyond the grant used to support participants?"),
    fundingAdditionalAmount: yup.number()
        .when("fundingAdditional", {
            is: (value) => value === "yes",
            then:
                yup.number().test(
                    'is-decimal',
                    'invalid decimal',
                    value => (value + "").match(/^\d*.{1}\d*$/))
                    .typeError("Additional funding must be a decimal number")
                    .required('How much additional funding was used?')
        }),
    fundingAdditionalUse: yup.string()
        .when("fundingAdditional", {
            is: (value) => value === "yes",
            then:
                yup.string()
                    .max(255, "Additional funding use too long")
                    .required('How was the additional funding used?')
        }),
    placementDetailsChange: yup.string()
        .oneOf([
            "yes",
            "no"
        ], "Please select a valid option.")
        .required("Did the details of the work experience placement change from what you submitted in your application?"),
    placementDetailsChangeExplanation: yup.string()
        .when("placementDetailsChange", {
            is: (value) => value === "yes",
            then: yup.string().max(500, "Text too long.").required("Please describe placement changes.")
        }),
    placementSupportsProvided: yup.array()
        .of(yup.string()
            .min(1)
            .oneOf([
                "Essential work clothing, supplies, tools or equipment",
                "Personal protective equipment",
                "Assistive technology",
                "On-the-job training",
                "Job coaching/mentorship",
                "Entry-level certification",
                "Transportation",
                "Childcare",
                "other"
            ], "Please select a valid option.")
        )
        .required("Please indicate the supports you provided to participants to help them succeed in their placements"),
    placementSupportsProvidedOther: yup.string()
        .when("placementSupportsProvided", (placementSupportsProvided, schema) => {
            if (placementSupportsProvided !== undefined) {
                return placementSupportsProvided.indexOf("other") > -1 ? schema.required("Please describe other supports.").max(500, "Maximum of 500 characters is allowed") : schema.min(0)
            }
        }),
    numberOfParticipantsStayedInPosition: yup.string()
        .oneOf([
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
        ], "Please select a valid field.")
        .required("Participants stayed in their positions and were hired by my organization"),
    numberOfParticipantsHiredDifferentRole: yup.string()
        .oneOf([
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
        ], "Please select a valid field.")
        .required("Participants were hired by my organization into a new/different role"),
    numberOfParticipantsFoundEmploymentElsewhere: yup.string()
        .oneOf([
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
        ], "Please select a valid field.")
        .required("Participants found employment elsewhere"),
    numberOfParticipantsConnectedToWorkBC: yup.string()
        .oneOf([
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
        ], "Please select a valid field.")
        .required("Participants were connected to WorkBC to receive additional supports"),
    numberOfParticipantsWillContinueEmploymentServicesAndSupportsCurrentOrg: yup.string()
        .oneOf([
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
        ], "Please select a valid field.")
        .required("Participants will continue to receive employment-related services and supports from my organization"),
    numberOfParticipantsWillContinueEmploymentServicesAndSupportsOtherOrg: yup.string()
        .oneOf([
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
        ], "Please select a valid field.")
        .required("Participants will receive employment-related services and supports through another organization"),
    numberOfParticipantsOther: yup.string()
        .oneOf([
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
        ], "Please select a valid field.")
        .required("Other participant outcomes"),
    numberOfParticipantsOtherDescribe: yup.string()
        .when("numberOfParticipantsOther", {
            is: (value) => (value !== "0" && value !== ""),
            then: yup.string().max(500, "Text too long.").required("Please explain other participant outcomes.")
        }),
    narrativeParticipantSuccessStories: yup.string()
        .max(5000),
    narrativeOrganizationBenefit: yup.string()
        .max(5000),
    narrativeCommunityBenefit: yup.string()
        .max(5000),
    narrativeImproveAboutProgram: yup.string()
        .max(5000),
    followUpWillingToHavePhoneConversation: yup.string()
        .oneOf([
            "yes",
            "no"
        ], "Please select a valid option.")
        .required("Would you be willing to have a brief telephone conversation to share additional insights into your experience with the WEOG?"),
    followUpContactName: yup.string()
        .when("followUpWillingToHavePhoneConversation", {
            is: (value) => value === "yes",
            then: yup.string().max(500, "Text too long.").required("Please provide a contact name.")
        }),
    followUpContactPhone: yup.string()
        .when("followUpWillingToHavePhoneConversation", {
            is: (value) => value === "yes",
            then: yup.string().max(500, "Text too long.").required("Please provide a contact phone.")
        }),
})