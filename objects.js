var playlist = {BlocParty: "Helicopter", Meatloaf: "Bat out of hell", Editors: "Munich", MichaelJackson: "Thriller"};

function updatePlaylist (obj, name, title) {
  Object.assign({}, obj, {name: title});
  return obj
}

function removeFromPlaylist(obj, name) {
  delete obj.name;
  return obj;
}