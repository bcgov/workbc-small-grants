var yup = require('yup')

var SurveyOrgValidationSchema = yup.object().shape({
    easeOfApplicationCompletion: yup.string()
        .required("Please rate the ease of website navigation.")
        .oneOf([
            '1stronglyDisagree',
            '2disagree',
            '3neitherAgreeNorDisagree',
            '4agree',
            '5stronglyAgree'   
        ]),
    speedApplicationProcessed: yup.string()
        .required("Please rate the speed the application was processed.")
        .oneOf([
            '1stronglyDisagree',
            '2disagree',
            '3neitherAgreeNorDisagree',
            '4agree',
            '5stronglyAgree'             
        ]),
    experienceOnlineApplicationComments: yup.string()
        .max(1000, "Max characters for online application comments is 1000."),   
    //step 2
    participantContributionValuable: yup.string()
        .required("Please rate the participant contribution value.")
        .oneOf([
            '1stronglyDisagree',
            '2disagree',
            '3neitherAgreeNorDisagree',
            '4agree',
            '5stronglyAgree'              
        ]),
    hiredPeopleWithBarriersBefore: yup.string()
        .required("Please select if your organization has hired people with barriers in the past.")
        .oneOf([
            '1stronglyDisagree',
            '2disagree',
            '3neitherAgreeNorDisagree',
            '4agree',
            '5stronglyAgree'            
        ]), 
    hirePeopleWithBarriersFuture: yup.string()
        .required("Please select how likely are you to hire people with barriers to employment in the future.")
        .oneOf([
            '1stronglyDisagree',
            '2disagree',
            '3neitherAgreeNorDisagree',
            '4agree',
            '5stronglyAgree'            
        ]), 
    experienceWithWorkParticipantsComments: yup.string()
        .max(1000, "Max characters for experience with participants comments is 1000."),
    //step 3
    likelyToParticipateInSimilarProgram: yup.string()
        .required("Please rate how likely are you to participate in a similar program.")
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
    bestPartOfProgramComments: yup.string()
        .max(1000, "Max characters for best part of program comments is 1000."),
    experienceBetterComments: yup.string()
        .max(1000, "Max characters for experience better comments is 1000.")
})


module.exports = SurveyOrgValidationSchema