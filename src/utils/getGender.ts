export const getGender = (genderId: number): string => {
  switch (genderId) {
    case 1:
      return 'female';
    case 2:
      return 'male';
    default:
      return 'unknown';
  }
};
