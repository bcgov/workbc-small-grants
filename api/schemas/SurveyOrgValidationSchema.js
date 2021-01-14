var yup=require('yup')

var SurveyOrgValidationSchema = yup.object().shape({
    easeOfNavigatingWebsite: yup.string()
        .required("Please rate the ease of website navigation.")
        .oneOf([
            '1poor',
            '2fair',
            '3good',
            '4veryGood',
            '5excellent'
        ]),
    easeOfUnderstandingAppGuide: yup.string()
        .required("Please rate the ease of understanding the application guide.")
        .oneOf([
            '1poor',
            '2fair',
            '3good',
            '4veryGood',
            '5excellent'            
        ]),
    satisfactionSpeedOfService: yup.string()
        .required("Please rate your satisfaction with the speed of service.")
        .oneOf([
            '1poor',
            '2fair',
            '3good',
            '4veryGood',
            '5excellent'            
        ]),        
    //step 2
    valueOfProgram: yup.string()
        .required("Please rate the value of the program.")
        .oneOf([
            '1poor',
            '2fair',
            '3good',
            '4veryGood',
            '5excellent'            
        ]),
    participantNumber: yup.string()
        .required("Please select your number of participants.")
        .oneOf([
            '1',
            '2',
            '3',
            '4',
            '5,'
        ]),
    participant1Experience: yup.string()
        .when('participantNumber', (participantNumber, schema) => {
            if (participantNumber !== undefined){
                return Number(participantNumber) >= 1 
                    ? 
                        schema.required("Please rate participant 1 experience")
                        .oneOf([
                            '1poor',
                            '2fair',
                            '3good',
                            '4veryGood',
                            '5excellent'            
                        ])
                    :
                        schema.min(0)
            }
        }),
    participant2Experience: yup.string()
    .when('participantNumber', (participantNumber, schema) => {
        if (participantNumber !== undefined){
            return Number(participantNumber) >= 2 
                ? 
                    schema.required("Please rate participant 2 experience")
                    .oneOf([
                        '1poor',
                        '2fair',
                        '3good',
                        '4veryGood',
                        '5excellent'            
                    ])
                :
                    schema.min(0)
        }
    }),
    participant3Experience: yup.string()
    .when('participantNumber', (participantNumber, schema) => {
        if (participantNumber !== undefined){
            return Number(participantNumber) >= 3 
                ? 
                    schema.required("Please rate participant 3 experience")
                    .oneOf([
                        '1poor',
                        '2fair',
                        '3good',
                        '4veryGood',
                        '5excellent'            
                    ])
                :
                    schema.min(0)
        }
    }),
    participant4Experience: yup.string()
    .when('participantNumber', (participantNumber, schema) => {
        if (participantNumber !== undefined){
            return Number(participantNumber) >= 4 
                ? 
                    schema.required("Please rate participant 4 experience")
                    .oneOf([
                        '1poor',
                        '2fair',
                        '3good',
                        '4veryGood',
                        '5excellent'            
                    ])
                :
                    schema.min(0)
        }
    }),
    participant5Experience: yup.string()
    .when('participantNumber', (participantNumber, schema) => {
        if (participantNumber !== undefined){
            return Number(participantNumber) === 5 
                ? 
                    schema.required("Please rate participant 5 experience")
                    .oneOf([
                        '1poor',
                        '2fair',
                        '3good',
                        '4veryGood',
                        '5excellent'            
                    ])
                :
                    schema.min(0)
        }
    }),
    likelyToHirePeopleWithBarriersInFuture: yup.string()
        .required("Please select how likely are you to hire people with barriers to employment in the future.")
        .oneOf([
            '1highlyUnlikely',
            '2unlikely',
            '3neitherLikelyOrUnlikely',
            '4likely',
            '5highlyLikely'            
        ]),    
    difficultyHiringPeopleWithBarriersComment: yup.string()
        .max(1000),
    //step 3
    likelyToParticipateInSimilarProgram: yup.string()
        .required("Please rate how likely are you to participate in a similar program.")
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

module.exports = SurveyOrgValidationSchema