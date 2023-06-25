module.exports.formatResponse = (code, msg, data) => {

    return {
        "code": code,
        "message": msg,
        "data": data
    }
}