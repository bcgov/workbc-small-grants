import React from "react"

const Report2022 = (props) => (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <p>
                    If you are not redirected in a few seconds please click <a href={redirect(props)}>here</a>
                </p>
                {redirect(props)}
            </div>
        </div>
    </div>
)

function redirect(props) {
    let link = process.env.REACT_APP_REPORT_LINK
    if (typeof props.match.params.id !== "undefined") {
        link += `&id=${props.match.params.id}`
    }

    window.location.replace(link)
}

export default Report2022
