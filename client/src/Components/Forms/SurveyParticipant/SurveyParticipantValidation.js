import * as yup from 'yup'
import 'core-js/stable';


export const SurveyParticipantValidationSchema = yup.object().shape({
    easeOfNavigatingWebsite: yup.string()
        .required("Please rate the ease of website navigation.")
        .oneOf([
            '1poor',
            '2fair',
            '3good',
            '4veryGood',
            '5excellent'
        ]),       
    //step 2
    overallExperienceWithEmployer: yup.string()
        .required("Please rate your overall experience with your employer.")
        .oneOf([
            '1poor',
            '2fair',
            '3good',
            '4veryGood',
            '5excellent'            
        ]),
    levelOfSupportsReceived: yup.string()
        .required("Please rate the level of supports you received.")
        .oneOf([
            '1poor',
            '2fair',
            '3good',
            '4veryGood',
            '5excellent'            
        ]),
    increasedAbilityToParticipateInLM: yup.string()
        .required("Please rate your increased ability to participate in the labour market.")
        .oneOf([
            '1poor',
            '2fair',
            '3good',
            '4veryGood',
            '5excellent'            
        ]),
    //step3
    likelyToParticipateInSimilarProgram: yup.string()
        .required("Please select how likely are you to participate in a similar program in the future.")
        .oneOf([
            '1highlyUnlikely',
            '2unlikely',
            '3neitherLikelyOrUnlikely',
            '4likely',
            '5highlyLikely'            
        ]),    
    likelyToRecommendGrant: yup.string()
        .required("Please rate how likely are you to recommend this grant.")
        .oneOf([
            '1highlyUnlikely',
            '2unlikely',
            '3neitherLikelyOrUnlikely',
            '4likely',
            '5highlyLikely'            
        ]), 
    //step 4
    experienceBetterComments: yup.string()
        .max(1000, "Max characters for comments is 1000.")
})
