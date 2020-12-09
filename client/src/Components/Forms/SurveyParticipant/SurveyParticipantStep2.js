import React, { Component } from 'react'
import { Field } from 'formik'
import { feedBackClassName, feedBackInvalid } from '../Shared/ValidationMessages'

class SurveyParticipantStep2 extends Component {

    render() {
        if (this.props.currentStep !== 2) {
            return null
        }
        //else return step 2
        return (
            <div>

            </div>
        )
    }
}

export default SurveyParticipantStep2