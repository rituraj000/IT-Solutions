const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const status = 422;
    const message = "Fill Input Properly";
    const extraDetails = err.errors && err.errors.length > 0 ? err.errors[0].message : "Validation error";
    const error = {
      status,
      message,
      extraDetails,
    };
    console.log("Validation error details:", err);
    res.status(status).json(error);
  }
};

module.exports = validate;
