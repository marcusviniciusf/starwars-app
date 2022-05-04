const formatDate = (date: string): string => {
  const [year, month, day] = date.split('-');
  return `${month}-${day}-${year}`;
};

export {formatDate};
