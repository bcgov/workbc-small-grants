var yup = require('yup')

var SurveyParticipantValidationSchema = yup.object().shape({
    easeOfApplicationCompletion: yup.string()
        .required("Please rate the ease of website navigation.")
        .oneOf([
            '1stronglyDisagree',
            '2disagree',
            '3neitherAgreeNorDisagree',
            '4agree',
            '5stronglyAgree'
        ]),
    experienceOnlineApplicationComments: yup.string()
        .max(1000, "Max characters for online experience comments is 1000."),
    //step 2
    overallExperienceWithEmployer: yup.string()
        .required("Please rate your overall experience with your employer.")
        .oneOf([
            '1stronglyDisagree',
            '2disagree',
            '3neitherAgreeNorDisagree',
            '4agree',
            '5stronglyAgree'
        ]),
    levelOfSupportsReceived: yup.string()
        .required("Please rate the level of supports you received.")
        .oneOf([
            '1stronglyDisagree',
            '2disagree',
            '3neitherAgreeNorDisagree',
            '4agree',
            '5stronglyAgree'
        ]),
    increasedAbilityToParticipateInLM: yup.string()
        .required("Please select Prior to this experience, I have received other WorkBC services or participated in other WorkBC programs.")
        .oneOf([
            '1stronglyDisagree',
            '2disagree',
            '3neitherAgreeNorDisagree',
            '4agree',
            '5stronglyAgree'
        ]),
    //step3
    receivedOtherWorkBCServicesOrPrograms: yup.string()
        .required("Please select how likely are you to participate in a similar program in the future.")
        .oneOf([
            '1stronglyDisagree',
            '2disagree',
            '3neitherAgreeNorDisagree',
            '4agree',
            '5stronglyAgree'
        ]),
    likelyToParticipateInSimilarProgram: yup.string()
        .required("Please select how likely are you to participate in a similar program in the future.")
        .oneOf([
            '1stronglyDisagree',
            '2disagree',
            '3neitherAgreeNorDisagree',
            '4agree',
            '5stronglyAgree'
        ]),
    likelyToRecommendGrant: yup.string()
        .required("Please rate how likely are you to recommend this grant.")
        .oneOf([
            '1stronglyDisagree',
            '2disagree',
            '3neitherAgreeNorDisagree',
            '4agree',
            '5stronglyAgree'
        ]),
    //step 4
    bestPartOfTheProgramComments: yup.string()
        .max(1000, "Max characters of best of part of program comments is 1000."),
    experienceBetterComments: yup.string()
        .max(1000, "Max characters to make experience better comments is 1000.")

})


module.exports = SurveyOrgValidationSchema