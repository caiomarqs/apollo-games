const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const validateEmail = (email: string) => {
  const isInvalid = re.test(email) === false;

  if (isInvalid) {
    return 'Email invalido';
  }
  return;
};
