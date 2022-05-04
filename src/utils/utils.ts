const getUrlId = (url: string): string => {
  const id = url.split('/').filter(Boolean).pop();
  return id || '';
};

const removeLineBreaks = (text: string): string => {
  const withoutCarriage = text.replace(/\r/gm, ' ');
  const withoutNewLines = withoutCarriage.replace(/\n/gm, '');
  return withoutNewLines;
};

export {getUrlId, removeLineBreaks};
