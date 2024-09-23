exports.myError = (err, req, res, next) => {
    console.log('my error')
    const errorStatus = err.status || 500;
    const errorMessage = err.message || 'Something went wrong, Try again!';

    return res.status(errorStatus).json({
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
        success: false,
    });
};