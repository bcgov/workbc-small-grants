import React, { Component } from 'react'
import { Field } from 'formik'
import { feedBackClassName, feedBackInvalid } from '../Shared/ValidationMessages'

class SurveyParticipantStep4 extends Component {

    render() {
        if (this.props.currentStep !== 4) {
            return null
        }
        //else return step 4
        return (
            <div>

            </div>
        )
    }
}

export default SurveyParticipantStep4