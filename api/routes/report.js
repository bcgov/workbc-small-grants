const express = require("express")
const csrf = require("csurf")
const ReportValidationSchema = require("../schemas/ReportValidationSchema")
const { saveReport } = require("../utils/mongoOperations")

const router = express.Router()
const csrfProtection = csrf({ cookie: true })

router.get("/", csrfProtection, (req, res) => {
    const token = req.csrfToken()
    res.cookie("XSRF-TOKEN", token)
    res.send({
        csrfToken: token
    })
})

router.post("/", csrfProtection, async (req, res) => {
    // clean the body
    // clean(req.body);
    console.log(req.body)
    ReportValidationSchema.validate(req.body, { abortEarly: false })
        .then(async () => {
            try {
                const item = req.body
                await saveReport(item).then(async (r) => {
                    console.log(r.result)
                    if (r.result.ok === 1) {
                        res.send({
                            ok: "ok"
                        })
                    }
                })
            } catch (error) {
                console.log(error)
                res.send({
                    saveErr: "saveErr"
                })
            }
        })
        .catch((errors) => {
            const err = {}
            errors.inner.forEach((e) => {
                err[e.path] = e.message
            })
            res.send({
                err
            })
        })
})

module.exports = router
