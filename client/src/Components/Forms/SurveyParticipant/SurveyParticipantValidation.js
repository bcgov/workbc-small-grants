import * as yup from 'yup'
import 'core-js/stable';


export const SurveyParticipantValidationSchema = yup.object().shape({
    easeOfApplicationCompletion: yup.string()
        .required("Please rate the ease of website navigation.")
        .oneOf([
            '1stronglyDisagree',
            '2disagree',
            '3neitherAgreeNorDisagree',
            '4agree',
            '5stronglyAgree'
        ]),       
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
        .required("Please rate your increased ability to participate in the labour market.")
        .oneOf([
            '1stronglyDisagree',
            '2disagree',
            '3neitherAgreeNorDisagree',
            '4agree',
            '5stronglyAgree'            
        ]),
    //step3
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
    experienceBetterComments: yup.string()
        .max(1000, "Max characters for comments is 1000.")
})
