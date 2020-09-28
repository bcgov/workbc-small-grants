import React, {Component} from 'react'
import { BsCheckCircle } from "react-icons/bs"
import { IconContext } from 'react-icons'

class ThankyouOrg extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Thank you, your application has been received</h1>
                        <h3>Application ID: {this.props.location.state !== undefined && this.props.location.state._id}</h3>
                        <button className="btn btn-success d-print-none" onClick={() => window.print()}>Print Confirmation</button>
                        <p>
                            In porta placerat velit vitae fermentum. Phasellus eu ante gravida, ullamcorper sem id, efficitur magna.
                            Nunc consectetur magna eu dictum aliquet. Aenean non cursus lacus, a accumsan diam.
                            Nullam velit tortor, varius fringilla aliquet vitae, sagittis nec urna. Mauris mollis convallis libero, sed viverra augue. Donec sodales accumsan dolor a dignissim. Vivamus nec consectetur nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    </p>
                        <IconContext.Provider
                            value={{
                                color: "green",
                                className: "bi",
                                title: "success icon",
                                size: "8em",
                                style: { verticalAlign: 'middle' }
                            }}>
                            <div className="text-center">
                                <BsCheckCircle />
                            </div>
                        </IconContext.Provider>
                        <br /><p>
                            Sed pretium est vel eros lacinia lacinia. Sed ac arcu sed sapien eleifend mollis. Mauris ut risus at felis fermentum auctor quis vel arcu. Aenean pretium urna lacus, consequat convallis tellus porta vitae. Suspendisse tempus erat et leo ornare convallis. Etiam placerat ex sit amet interdum suscipit. Curabitur placerat nunc a posuere sollicitudin. Cras tincidunt dui eget nisl iaculis varius.
                    </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ThankyouOrg