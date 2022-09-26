import { useField, useFormikContext } from "formik"
import React from "react"
import DatePicker from "react-datepicker"

export const DatePickerField = ({ ...props }) => {
    const { setFieldValue } = useFormikContext()
    const [field] = useField(props)
    return (
        <DatePicker
            {...field}
            maxDate={new Date()}
            {...props}
            selected={(field.value && new Date(field.value)) || null}
            onChange={(val) => {
                setFieldValue(field.name, val)
            }}
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
        />
    )
}

export const MonthPickerField = ({ ...props }) => {
    const { setFieldValue } = useFormikContext()
    const [field] = useField(props)
    return (
        <DatePicker
            maxDate={new Date()}
            {...field}
            {...props}
            selected={(field.value && new Date(field.value)) || null}
            onChange={(val) => {
                setFieldValue(field.name, val)
            }}
            dateFormat="MM/yyyy"
            minDate={new Date("2020/11/01")}
            showMonthYearPicker
        />
    )
}
