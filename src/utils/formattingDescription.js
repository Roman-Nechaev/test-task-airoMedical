const formattingDescription = text => {
  let newFormat = text;
  if (newFormat.length > 50) {
    newFormat = text.slice(0, 100) + '...';
  }
  return newFormat;
};

export default formattingDescription;
