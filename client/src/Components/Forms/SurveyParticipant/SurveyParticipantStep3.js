import React, { Component } from 'react'
import { Field } from 'formik'
import { feedBackClassName, feedBackInvalid } from '../Shared/ValidationMessages'

class SurveyParticipantStep3 extends Component {

    render() {
        if (this.props.currentStep !== 3) {
            return null
        }
        //else return step 3
        return (
            <div>

            </div>
        )
    }
}

export default SurveyParticipantStep3