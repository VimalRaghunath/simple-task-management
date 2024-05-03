const tryCatch = (tryCatchHandler) => {
      return async (req, res, next) => {
        try {
            await tryCatchHandler(req, res, next)
        } catch (error) {
            res.status(500)
            res.json({
                status:"Failure",
                message: "error",
                error_message: error.message,
            })

            return next(error)
        }
    }
}

module.exports = tryCatch