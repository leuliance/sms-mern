const Validate = (values) => {
  let errors = {};
  if (!values.fullName) {
    errors.fullName = "Full name required";
  }
  if (!values.username) {
    errors.username = "Username required";
  }
  if (!values.gradeLevel) {
    errors.gradeLevel = "Grade Level required";
  }
  if (!values.subject) {
    errors.subject = "Subject required";
  }
  if (!values.password) {
    errors.password = "password required";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "password required";
  }
  if (values.confirmPassword === values.password) {
    errors.equalPassword = "passwords must be equal!";
  }

  return errors;
};
export default Validate;
