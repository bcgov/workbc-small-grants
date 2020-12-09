import React, { Component } from 'react'
import { Field } from 'formik'
import { feedBackClassName, feedBackInvalid } from '../Shared/ValidationMessages'

class SurveyParticipantStep1 extends Component {

    render() {
        if (this.props.currentStep !== 1) {
            return null
        }
        //else return step 1
        return (
            <div>

            </div>
        )
    }
}

export default SurveyParticipantStep1