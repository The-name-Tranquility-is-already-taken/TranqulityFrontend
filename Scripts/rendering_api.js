// Displays Guild on screen.
function displayGuild_Localy(id_t, name_t) {
  // function that creates new messages
  var bubbleObject = document.createElement("div");
  bubbleObject.classList.add("GuildBubble"); // Append ID For css
  bubbleObject.setAttribute("guildID", id_t); // Append ID For css
  bubbleObject.setAttribute("onclick", `selectGuild(${id_t})`);

  /* Testing */
  var GuildBubble_ContentRegion_Testing = document.createElement("div");

  var a_text = createGuildPfpObject();

  GuildBubble_ContentRegion_Testing.appendChild(a_text);
  bubbleObject.appendChild(GuildBubble_ContentRegion_Testing);

  document.getElementById("guildSideBar").appendChild(bubbleObject);
}

// Displays Message on screen within the message scroll div
function displayMessage_Localy(content) {
  // function that creates new messages
  var currentMessageID = ident++; // Increase message id - TESTING ONLY

  var messageObject = document.createElement("div");
  messageObject.classList.add("msg"); // ID For css
  messageObject.setAttribute("id", "msg" + currentMessageID); // place holder id backend team replace

  var profilePicObject = createPfpObject();

  document.getElementById("messageContentRegion").appendChild(messageObject); // message div in to container div

  // Add profile pic to message object
  document
    .getElementById("msg" + currentMessageID /* TESTING ONLY */)
    .appendChild(profilePicObject); // message div in to container div

  // Set the text for the message
  var textObject = document.createElement("div");
  messageObject.classList.add("msg_text"); // ID For css

  textObject.innerHTML = content;

  document
    .getElementById("msg" + currentMessageID /* TESTING ONLY */)
    .appendChild(textObject);
}

// Clear the displayed messages.
function clear_messages(log_t = true) {
  if (log_t) log("Clearing all displayed messages", "DEBUG");

  // Clear rendered messages.
  document.getElementById("messageContentRegion").innerHTML = "";
}

// Clear the displayed messages.
function clear_guildMenu(log_t = true) {
  if (log_t) log("Clearing all displayed guilds", "DEBUG");

  // Clear rendered messages.
  document.getElementById("guildSideBar").innerHTML = "";
}

// Clear the displayed messages.
function clear_channels(log_t = true) {
  if (log_t) log("Clearing all displayed channels", "DEBUG");

  log("TODO: Implement channel clearing.", "DEBUG");
  // Clear rendered messages.
  // document.getElementById("guildSideBar").innerHTML = "";
}

// Clear the screen fully resetting the rendering apis state.
function clear_screen() {
  log("Clearing everything.", "DEBUG");

  clear_messages(false);
  clear_guildMenu(false);
  clear_channels(false);
}

log("Loaded. rendering_api.js");
