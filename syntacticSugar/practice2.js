function saveFile(url, data) {
  $.ajax({ method: 'POST', url, data});
}

const url = "http://fileupload.com";
const data = { color: "red"};

saveFile(url,data);
