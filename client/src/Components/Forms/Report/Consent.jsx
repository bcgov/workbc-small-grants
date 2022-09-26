import React from "react"

function Consent() {
    return (
        <div className="row" style={{ marginTop: "2em" }}>
            <div className="col-md-12">
                <h4>Collection Notice</h4>
                <p className="small">
                    All information is being collected under the authority of the{" "}
                    <a
                        href="https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96165_03#section26"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Freedom of Information and Protection of Privacy Act, Section 26(e).
                    </a>{" "}
                    If you have any questions about the collection or use of this information, please contact the{" "}
                    <a href="mailto:workexperiencegrants@gov.bc.ca">Ministry of Social Development and Poverty Reduction.</a>
                </p>
            </div>
        </div>
    )
}

export default Consent
