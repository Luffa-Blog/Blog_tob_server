module.exports.isTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date instanceof Date && !isNaN(date);
}