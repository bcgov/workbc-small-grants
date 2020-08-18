import React from 'react'

function Form() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <form method="post" action="/" onsubmit="submitEmployer.disabled = true; return true;">
                        <div className="form-group">
                            <label className="col-form-label control-label" for="employer">Employer Name <span
                                style={{ color: "red" }}>*</span></label>
                            <input type="text" className="form-control" id="employer" name="employer"
                                value="" />
                            { /*<% if (errors.employer) { %>
                        <div class="invalid-feedback"><%= errors.employer.msg %></div>
                    <%  %> */ }
                        </div>
                    </form>
                </div>
            </div>
        </div>


    )
}


export default Form;