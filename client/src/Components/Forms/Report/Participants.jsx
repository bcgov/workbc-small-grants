import { ErrorMessage, Field, FieldArray } from "formik"
import React, { Component } from "react"
import { feedBackClassName, feedBackInvalid } from "../Shared/ValidationMessages"

class ParticipantsForm extends Component {
    get participantsNotAbleToComplete() {
        const participantsWeeksCompleted = []
        for (let i = 1; i <= this.props.values.numberOfParticipantsNotAbleToComplete; i += 1) {
            participantsWeeksCompleted.push("")
        }

        if (this.props.values.participantsAllCompletedPlacement === "no") {
            return (
                <div>
                    <div className="form-group">
                        <label className="col-form-label control-label" htmlFor="numberOfParticipantsNotAbleToComplete">
                            How many participants were not able to complete their placements?<span style={{ color: "red" }}>*</span>
                        </label>
                        <Field
                            as="select"
                            className={`form-control ${feedBackClassName(
                                this.props.errors,
                                this.props.touched,
                                "numberOfParticipantsNotAbleToComplete"
                            )}`}
                            id="numberOfParticipantsNotAbleToComplete"
                            name="numberOfParticipantsNotAbleToComplete"
                            onChange={(e) => {
                                this.props.handleChange(e)
                                const arr = []
                                for (let i = 0; i < e.target.value; i += 1) {
                                    arr.push({ weeksCompleted: "" })
                                }
                                this.props.setFieldValue("participantsNotAbleToComplete", arr)
                            }}
                        >
                            <option value="">Please select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </Field>
                        {feedBackInvalid(this.props.errors, this.props.touched, "numberOfParticipantsNotAbleToComplete")}
                    </div>
                    <br />

                    <FieldArray
                        name="participantsNotAbleToComplete"
                        render={() => (
                            <div>
                                {participantsWeeksCompleted.map((participant, index) => (
                                    <div key={index}>
                                        <div className="form-group">
                                            <label className="col-form-label control-label">
                                                How many weeks did participant #{index + 1} complete? (*if final week was a partial week, count it as
                                                a full week)
                                                <span style={{ color: "red" }}>*</span>
                                            </label>
                                            <Field
                                                as="select"
                                                className="form-control"
                                                id={`participantsNotAbleToComplete[${index}].weeksCompleted`}
                                                name={`participantsNotAbleToComplete[${index}].weeksCompleted`}
                                            >
                                                <option value="">Please select</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                            </Field>
                                            <ErrorMessage name={`participantsNotAbleToComplete[${index}].weeksCompleted`} className="field-error">
                                                {(msg) => <div style={{ color: "red", weight: "bold" }}>{msg}</div>}
                                            </ErrorMessage>
                                            {this.props.values.participantsNotAbleToComplete[index].weeksCompleted !== "" &&
                                                this.props.values.participantsNotAbleToComplete[index].weeksCompleted < 9 && (
                                                    <div className="form-group">
                                                        <label className="col-form-label control-label" htmlFor="participantsAbleToFindNew">
                                                            Were you able to find a new participant to complete the remainder of this placement?
                                                            <span style={{ color: "red" }}>*</span>
                                                        </label>
                                                        <div className="form-check">
                                                            <Field
                                                                className="form-check-input"
                                                                type="radio"
                                                                name={`participantsNotAbleToComplete[${index}].newParticipantFound`}
                                                                id={`participantsNotAbleToComplete[${index}].newParticipantFound`}
                                                                value="yes"
                                                            />
                                                            <label className="form-check-label" htmlFor="yes">
                                                                Yes
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <Field
                                                                className="form-check-input"
                                                                type="radio"
                                                                name={`participantsNotAbleToComplete[${index}].newParticipantFound`}
                                                                id={`participantsNotAbleToComplete[${index}].newParticipantFound`}
                                                                value="no"
                                                            />
                                                            <label className="form-check-label" htmlFor="no">
                                                                No
                                                            </label>
                                                        </div>
                                                        <ErrorMessage
                                                            name={`participantsNotAbleToComplete[${index}].newParticipantFound`}
                                                            className="field-error"
                                                        >
                                                            {(msg) => <div style={{ color: "red", weight: "bold" }}>{msg}</div>}
                                                        </ErrorMessage>
                                                    </div>
                                                )}
                                            {(this.props.values.participantsNotAbleToComplete[index].newParticipantFound === "yes" ||
                                                this.props.values.participantsNotAbleToComplete[index].newParticipantFound === "no") && (
                                                <div className="form-group">
                                                    <label
                                                        className="col-form-label control-label"
                                                        htmlFor={`participantsNotAbleToComplete[${index}].explanation`}
                                                    >
                                                        Please explain
                                                        <span style={{ color: "red" }}>*</span>
                                                    </label>
                                                    <Field
                                                        className="form-control"
                                                        id={`participantsNotAbleToComplete[${index}].explanation`}
                                                        name={`participantsNotAbleToComplete[${index}].explanation`}
                                                    />
                                                    <ErrorMessage
                                                        name={`participantsNotAbleToComplete[${index}].explanation`}
                                                        className="field-error"
                                                    >
                                                        {(msg) => <div style={{ color: "red", weight: "bold" }}>{msg}</div>}
                                                    </ErrorMessage>
                                                </div>
                                            )}
                                        </div>
                                        <br />
                                    </div>
                                ))}
                            </div>
                        )}
                    />
                </div>
            )
        }
        return null
    }

    get participantNotAbleToFindNew() {
        if (this.props.values.participantsAbleToFindNew === "no") {
            return (
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="participantsAbleToFindNewNoExplain">
                        Please explain <span style={{ color: "red" }}>*</span>
                    </label>
                    <Field
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "participantsAbleToFindNewNoExplain")}`}
                        id="participantsAbleToFindNewNoExplain"
                        name="participantsAbleToFindNewNoExplain"
                    />
                    {feedBackInvalid(this.props.errors, this.props.touched, "participantsAbleToFindNewNoExplain")}
                </div>
            )
        }
        return null
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <h2 id="forms">Participants</h2>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="participantsNumber">
                        How many participants started their placement? <span style={{ color: "red" }}>*</span>
                    </label>
                    <Field
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "participantsNumber")}`}
                        id="participantsNumber"
                        name="participantsNumber"
                    />
                    {feedBackInvalid(this.props.errors, this.props.touched, "participantsNumber")}
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="participantsHoursPerWeek">
                        On average, how many hours per week were participants able to participate in the work experience placement?{" "}
                        <span style={{ color: "red" }}>*</span>
                    </label>
                    <Field
                        className={`form-control ${feedBackClassName(this.props.errors, this.props.touched, "participantsHoursPerWeek")}`}
                        id="participantsHoursPerWeek"
                        name="participantsHoursPerWeek"
                    />
                    {feedBackInvalid(this.props.errors, this.props.touched, "participantsHoursPerWeek")}
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="participantsAllCompletedPlacement">
                        Were all participants who began a work experience placement able to complete it?: <span style={{ color: "red" }}>*</span>
                    </label>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(
                                this.props.errors,
                                this.props.touched,
                                "participantsAllCompletedPlacement"
                            )}`}
                            type="radio"
                            name="participantsAllCompletedPlacement"
                            value="yes"
                        />
                        <label className="form-check-label" htmlFor="yes">
                            Yes
                        </label>
                    </div>
                    <div className="form-check">
                        <Field
                            className={`form-check-input ${feedBackClassName(
                                this.props.errors,
                                this.props.touched,
                                "participantsAllCompletedPlacement"
                            )}`}
                            type="radio"
                            name="participantsAllCompletedPlacement"
                            value="no"
                        />
                        <label className="form-check-label" htmlFor="no">
                            No
                        </label>
                        {feedBackInvalid(this.props.errors, this.props.touched, "participantsAllCompletedPlacement")}
                    </div>
                </div>
                {this.participantsNotAbleToComplete}
            </div>
        )
    }
}

export default ParticipantsForm
