const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "BACKEND ERROR";
  const extraDetails = err.extraDetails || "Error From BackEnd";

  // Enhanced logging for different types of errors
  console.error(`Error Status: ${status}, Message: ${message}, Details: ${extraDetails}`);

  return res.status(status).json({ message, extraDetails });
};

module.exports = errorMiddleware;
