export function FormValidation(setErrors, itemToValidate) {
  const errors = {};

  Object.keys(itemToValidate).map((key) => {
    if (!itemToValidate[key] && key !== "id") {
      let objectKey =
        key.substring(key.length - 2) === "Id" ? key.slice(0, -2) : key;
      errors[objectKey] = `${objectKey.replace(
        /(\w)(\w*)/g,
        function (g0, g1, g2) {
          return g1.toUpperCase() + g2.toLowerCase();
        }
      )} is required`;
    }
  });

  setErrors(errors);
  // Form is valid if the errors object still has no properties
  return Object.keys(errors).length === 0;
}
