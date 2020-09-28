import React, {Component} from 'react'
import { BsCheckCircle } from "react-icons/bs"
import { IconContext } from 'react-icons'

class ThankyouClient extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Thank you, your application has been received</h1>
                        <button className="btn btn-success d-print-none" onClick={() => window.print()}>Print Confirmation</button>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et metus sit amet mi eleifend maximus. Quisque et sodales urna. Cras hendrerit porta rhoncus. Sed elementum nisl orci, eu elementum purus consectetur ac. Mauris malesuada justo justo, sed consectetur odio molestie varius. 
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
                        <br />
                    </div>
                </div>
            </div>
        )
    }
}

export default ThankyouClient