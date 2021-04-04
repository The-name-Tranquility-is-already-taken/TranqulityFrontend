// Created a pfp object to be used
function createPfpObject(
  type = "MESSAGE",
  userID = undefined,
  UserName = undefined
) {
  var profilePicObject = document.createElement("img");
  if (type == "MESSAGE") {
    profilePicObject.classList.add("messagePfp"); // ID For css
  } else if (type == "GUILD") {
    profilePicObject.classList.add("guildPfp"); // ID For css
  }
  profilePicObject.setAttribute("src", "../../Assets/pfp.png"); // place holder id backend team replace
  return profilePicObject;
}
//#region pfp wrappers
// Created a guild pfp object to be used
function createGuildPfpObject(userID = undefined, UserName = undefined) {
  return createPfpObject("GUILD", userID, UserName);
}
// Created a guild pfp object to be used
function createMessagePfpObject(userID = undefined, UserName = undefined) {
  return createPfpObject("MESSAGE", userID, UserName);
}
//#endregion

// Testing function.
function test() {
  console.log(`Running test!`);

  var localUserState = localCache.localData;

  localCache = { localUserState, guilds: [] };

  clear_screen();

  // Begin to re-populate guild cache
  addGuildToCache(1, "Guild Name.", "Descriptionnn");
  // Begin to re-populate guild cache
  addGuildToCache(2, "Guild Name.", "Descriptionnn");

  // Attempt to add 2 guilds of the same id.
  addGuildToCache(2, "Guild Name.", "Descriptionnn");

  renderGuildsBar();
}
log("Loaded. main.js");
