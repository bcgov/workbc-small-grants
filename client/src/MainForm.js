import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

import FormStep1 from './FormStep1'
import FormStep2 from './FormStep2'
import FormStep3 from './FormStep3'
import ProgressTracker from './ProgressTracker'

class MainForm extends Component {
    constructor(){
        super()
        this.state={
            currentStep: 1,
            //step 1
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            postal: '',
            organizationName: '',
            businessNumber: '',
            sectorInformation: '',
            organizationType: '',
            socialEnterpriseType: '',
            existingSupplierNumber: '',
            supplierNumber: '',
            legalName: '',
            dba: '',
            businessClassification: '',
            taxNumber: '',
            
            //step 2
            workExperience: '',
            stipend: '',
            //step 3
            applicants: ''

        }
        this.handleStartChange = this.handleStartChange.bind(this)
        this.handleEndChange = this.handleStartChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this._next = this._next.bind(this)
        this._prev = this._prev.bind(this)
    }

    handleChange = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    handleStartChange = date => {
        this.setState({
            startDate: date
        });
    };
    handleEndChange = date => {
        this.setState({
            endDate: date
        });
    };

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.history.push('/thankyou')
    }

    _next() {
        this.setState( prevState => {
            return {
                currentStep: prevState.currentStep >= 2 ? 3 : prevState.currentStep + 1
            }
        })
    }

    _prev() {
        this.setState( prevState => {
            return {
                currentStep: prevState.currentStep <= 1 ? 1 : prevState.currentStep - 1 
            } 
        })
    }

    get previousButton(){
        let currentStep = this.state.currentStep;
        if(currentStep !== 1){
          return (
            <button 
              className="btn btn-secondary" 
              type="button" onClick={this._prev}>
            Previous
            </button>
          )
        }
        return null;
    }

    get nextButton(){
        let currentStep = this.state.currentStep;
        if(currentStep < 3){
          return (
            <button 
              className="btn btn-primary float-right" 
              type="button" onClick={this._next}>
            Next
            </button>        
          )
        }
        return null;
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ProgressTracker currentStep={this.state.currentStep}/>
                        <form onSubmit={this.handleSubmit}>
                            <FormStep1 
                                currentStep={this.state.currentStep}
                                handleChange={this.handleChange}
                                {...this.state}
                            />
                            <FormStep2
                                currentStep={this.state.currentStep}
                                handleChange={this.handleChange}
                                {...this.state}
                            />
                            <FormStep3
                                currentStep={this.state.currentStep}
                                handleChange={this.handleChange}
                                {...this.state}
                            />
                            {this.previousButton}
                            {this.nextButton}

                            {/*<div className="form-actions">
                                <button className="btn btn-primary" id="submitWorkBCWageSubsidy" type="submit">Submit
                                </button>
                               </div>*/}
                        </form>
                    </div>
                </div>
            </div>


            )
        }
}
export default withRouter(MainForm);