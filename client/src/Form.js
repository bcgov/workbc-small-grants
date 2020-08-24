import React, { Component } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

class Form extends Component {
    state={
        startDate: new Date(),
        endDate: new Date()
    };
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
    reset = (event) => {
        var SEForm = document.getElementById("socialEnterpriseForm");
        var message = document.getElementById("errorMessage");
        SEForm.style.display ="none";
        message.style.display="none";
    }
    display = (event) => {
        var SEForm = document.getElementById("socialEnterpriseForm");
        var message = document.getElementById("errorMessage");
        message.style.display="none";
        SEForm.style.display ="block";
    }
    error = (event) => {
        var SEForm = document.getElementById("socialEnterpriseForm");
        var message = document.getElementById("errorMessage");
        SEForm.style.display ="none";
        message.style.display="block";
        
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form method="post" action="/" onsubmit="submitEmployer.disabled = true; return true;">
                            <div className="form-group">
                                <label className="col-form-label control-label" for="employer">Employer Name <span
                                    style={{ color: "red" }}>*</span></label>
                                <input type="text" className="form-control" id="employer" name="employer" />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">       
                                    <br/><h2 id="forms">Organization Contact</h2>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="col-form-label control-label" for="firstname">First Name <span
                                        style={{ color: "red" }}>*</span></label>
                                    <input type="text" className="form-control" id="firstname" name="firstname" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="col-form-label control-label" for="lastname">Last Name <span
                                        style={{ color: "red" }}>*</span></label>
                                    <input type="text" className="form-control" id="lastname" name="lasttname" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="col-form-label control-label" for="email">Email Address<span
                                        style={{ color: "red" }}>*</span></label>
                                        <small class="text-muted" id="email">  someone@example.com</small>
                                    <input type="text" className="form-control" id="email" name="email" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="col-form-label control-label" for="phone">Phone Number<span
                                        style={{ color: "red" }}>*</span></label>
                                        <small class="text-muted" id="email">  250-555-5555</small>
                                    <input type="text" className="form-control" id="phone" name="phone"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-form-label control-label" for="address">Street Address <span
                                    style={{ color: "red" }}>*  </span></label>
                                    <small class="text-muted" id="email">  1234 Main St</small>
                                <input type="text" className="form-control" id="address" name="address" />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="col-form-label control-label" for="city">City <span
                                        style={{ color: "red" }}>*</span></label>
                                    <input type="text" className="form-control" id="city" name="city" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="col-form-label control-label" for="postal">Postal Code <span
                                        style={{ color: "red" }}>*  </span></label>
                                        <small class="text-muted" id="email">  V0R2V5</small>
                                    <input type="text" className="form-control" id="postal" name="postal" />
                                </div>
                            </div>
                            <div className="form-group col-md-12">
                                <label className="col-form-label control-label" for="organization">Is your organization a non-profit or a social enterprise?</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="organization" value="Non-Profit" onChange={this.reset}/>
                                    <label className="form-check-label" for="organizationNonProfit">Non-Profit</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="organization" value="socialEnterprise" onChange={this.display}/>
                                    <label className="form-check-label" for="organizationSocialEnterprise">Social Enterprise</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="organization" value="neither" onChange={this.error}/>
                                    <label className="form-check-label" for="organizationneither">Neither</label>
                                </div>
                                <div className="invalid-feedback" id="errorMessage" style={{display:"none"}}> More evaluation is needed, please submit the form and we will be in contact.</div>
                            </div>
                            <div className="form-group col-md-12" id="socialEnterpriseForm" style={{display:"none"}}>
                                <label className="col-form-label control-label" for="socialEnterprise">Is your organization registered as a:</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="socialEnterprise" value="C3"/>
                                    <label className="form-check-label" for="socialEnterpriseC3">Communit Contribution Copmany (C3)</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="socialEnterprise" value="BenefitCompany"/>
                                    <label className="form-check-label" for="socialEnterpriseBenefitCompany">Benefit Company</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="socialEnterprise" value="Other"/>
                                    <label className="form-check-label" for="socialEnterpriseOther">Other</label>
                                </div>
                            </div>
                            <div className="form-group col-md-4">
                                    <label className="col-form-label control-label" for="applicants">How many applicants are you applying for funding for? <span
                                        style={{ color: "red" }}>*</span></label>
                                    <select className="form-control" id="applicants" name="applicants">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>  
                                    </select>
                                </div>
                            <div className="form-group col-md-12">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="responsible" name="responsible" value="responsible"/>
                                <label className="form-check-label control-label" for="responsible"><span
                                        style={{ color: "red" }}>*</span>
                                        Elibigble organizations must be based in or operating in British Columbia<br/><br/>
                                        An applicant must ensure the have <a href="https://www.worksafebc.com/en/insurance/need-coverage#%3A%7E%3Atext%3DWorkSafeBC%20insurance%20provides%20protection%20for%2Can%20occupational%20disease%20at%20work">
                                        WorkSafe BC insurance coverage</a> adequate to the needs of the placement.<br/><br/>
                                        Applicants must commit to:<br/>
                                        <ul>
                                            <li>Monitor and supoort the participant for the duration of the project;and</li>
                                            <li>Ensure that safe physical distancing practices and WorkSafe BC reqirements are adhered to.</li>
                                        </ul>
                                        </label>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">       
                                    <h3 id="forms">Start Date:</h3>
                                </div>
                                <div className="form-group col-md-4">       
                                    <h3 id="forms">End Date:</h3>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <DatePicker 
                                    selected={this.state.startDate}
                                    onChange={this.handleStartChange}
                                    />
                                </div>
                                <div className="form-group col-md-4">
                                    <DatePicker 
                                    selected={this.state.endDate}
                                    onChange={this.handleEndChange}
                                    />
                                </div>
                            </div>
                            <br/>
                            <div className="form-group col-md-12">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="qualify" name="qualify" value="qualify"/>
                                    <label className="form-check-label control-label" for="qualify"><span
                                            style={{ color: "red" }}>*</span>
                                            Applicants must be:<br/>
                                            <ul>
                                                <li>Receiving disability assistance</li>
                                                <li>Receiving income assistance under the Person with Persistent Multiple Barriers(PPMB) category</li>
                                            </ul>
                                            Participants must allso be legally eligible to work in British Columbia.<br/>
                                            The placement <b>must be</b> 12 weeks.
                                        </label>`
                                </div>
                            </div>
                            <br/>
                            <br/>
                            <div className="form-actions">
                                <button className="btn btn-primary" id="submitWorkBCWageSubsidy" type="submit">Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            )
        }
}
export default Form;