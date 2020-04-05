export const getLanguageFullname = (shortName: string): string => {
  switch (shortName) {
    case 'en':
      return 'English';
    default:
      return 'Unknown';
  }
};
