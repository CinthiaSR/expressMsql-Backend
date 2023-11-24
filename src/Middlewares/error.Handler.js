export default function errorHandler(err, req, res, next) {
  const errors = err.errors || [{message: err.message}];
  if (err.errors || err.message) {
    res.status(err.status || 500).json({errors});
  }
}
