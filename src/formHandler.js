export const submit = (values) => {
  Object.keys(values).forEach((key) => {
    console.log(`${key}: ${values[key]}`);
  });
};
