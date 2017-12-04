var savedFile = {
  extension: 'jpg',
  name: 'repost',
  size: 14004
};

//before
const fileSummary = (file) => {
  return `The file ${file.name}.${file.extension} 
                is of size ${file.size}`;
}
//After

const fileSummary1 = ({name, extension, size}) => {
  return `The file ${name}/${extension} is of size${size}`;
}
fileSummary1(savedFile);
