var playlist = {BlocParty: "Helicopter", Meatloaf: "Bat out of hell", Editors: "Munich", MichaelJackson: "Thriller"};

function updatePLaylist (obj, name, title) {
  Object.assign({}, obj, {name: title});
  return obj
}

function removeFromPlaylist(name, title) {
  
}