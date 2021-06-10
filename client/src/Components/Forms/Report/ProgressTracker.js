import React, {Component} from 'react'

class ProgressTracker extends Component {
    render(){
        let classNameStep1 = "progress-step"
        let classNameStep2 = "progress-step"
        let classNameStep3 = "progress-step"
        let classNameStep4 = "progress-step"
        let classNameStep5 = "progress-step"
        if (this.props.currentStep === 1){
            classNameStep1 += " is-active"
        } else if (this.props.currentStep === 2){
            classNameStep1 += " is-complete"
            classNameStep2 += " is-active"
        } else if (this.props.currentStep === 3){
            classNameStep1 += " is-complete"
            classNameStep2 += " is-complete"
            classNameStep3 += " is-active"            
        } else if (this.props.currentStep === 4){
            classNameStep1 += " is-complete"
            classNameStep2 += " is-complete"
            classNameStep3 += " is-complete" 
            classNameStep4 += " is-active"
        } else if (this.props.currentStep === 5){
            classNameStep1 += " is-complete"
            classNameStep2 += " is-complete"
            classNameStep3 += " is-complete" 
            classNameStep4 += " is-complete" 
            classNameStep5 += " is-active"
        }
        return (
            <ul className="progress-tracker progress-tracker--text progress-tracker--center" style={{marginTop: "0", marginBottom: "1rem"}}>
                <li className={classNameStep1}>
                    <div className="progress-marker"></div>
                    <div className="progress-text">
                        <h4 className="progress-title">Step 1</h4>
                        Recruitment and Participants
                    </div>
                </li>
                <li className={classNameStep2}>
                    <div className="progress-marker"></div>
                    <div className="progress-text">
                        <h4 className="progress-title">Step 2</h4>
                        Project Funding
                    </div>
                </li>
                <li className={classNameStep3}>
                    <div className="progress-marker"></div>
                    <div className="progress-text">
                        <h4 className="progress-title">Step 3</h4>
                        Employment Outcomes
                    </div>
                </li>
                <li className={classNameStep4}>
                    <div className="progress-marker"></div>
                    <div className="progress-text">
                        <h4 className="progress-title">Step 4</h4>
                        Participant and Organizational Outcomes
                    </div>
                </li>
                <li className={classNameStep5}>
                    <div className="progress-marker"></div>
                    <div className="progress-text">
                        <h4 className="progress-title">Step 5</h4>
                        Feedback
                    </div>
                </li>
            </ul>
        )
    }
}

export default ProgressTracker