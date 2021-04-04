// Used by send button to listen for enter key presses.
function onKeyPressed(event) {
    var keyCode = event.which || event.keyCode;
    console.log(`keypressed called - ${keyCode}`);
    
    if (keyCode == 13) { // Enter Key
        if(document.getElementById("messageinput").value != "") {
            displayMessage_Localy(document.getElementById("messageinput").value);
        }

        // Used to clear the message field after sending the message.
        // Also handy if the message box fucks up. it shouldnt. but it might..
        document.getElementById("messageinput").value = ""; 
    }
}

// Unused currently mainly for reference
function Changewindow() {
    window.location.href = "guild.html";
}

// Used by guild bubbles
function selectGuild(id_t) {
    selectedGuild = id_t;
    console.log(`Selecting guild: ${id_t}`);

    clear_messages();
}
log("Loaded. listeners.js")