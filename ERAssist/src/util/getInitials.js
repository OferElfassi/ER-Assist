export const getInitials = fullName => {
  const fullNameArr = fullName.split(' ');
  return fullNameArr[0].toUpperCase()[0] + fullNameArr[1].toUpperCase()[0];
};
