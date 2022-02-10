export const getInitials = fullName => {
  const fullNameArr = fullName.split(' ');
  if (fullNameArr.length > 1) {
    return fullNameArr[0].toUpperCase()[0] + fullNameArr[1].toUpperCase()[0];
  }
  return 'NN';
};
