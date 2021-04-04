const delay = ms => new Promise(res => setTimeout(res, ms));
	
var selectedGuild = 1;

var localCache = {
    localData: {
        id: 123,
        username: "pp",
        token: "ofnsonf" // Will change ofc lmao
    },
    guilds: [
        {
            id: 1,
            name: "Testing guild[local only]",
            description: "blah",
            localTest: true,
            type: GUILD,
            channels: [
                {
                    id: 1,
                    name: "Blah channel",
                    description: "BLAH",
                    type: TEXT_CHANNEL,
                    messages: [
                        {
                            id: 1,
                            authorID: 1,
                            parentID: 1,
                            type: TEXT_MESSAGE,
                            content: [
                                {
                                    text: "Hello, World!"
                                }
                            ]
                        }
                    ]
                }
            ],
            members: [ {
                id: 123
            }]
        }
    ]
}

var GUILD = 1;
var TEXT_MESSAGE = 2;
var TEXT_CHANNEL = 3;

var ident = 0;  // TESTING ONLY

// Created a pfp object to be used
function createPfpObject(userID = undefined, UserName = undefined)
{
    var profilePicObject 	= document.createElement("img");  
    profilePicObject.classList.add("pfp");	// ID For css
    profilePicObject.setAttribute("src", "pfp.png");           // place holder id backend team replace
    return profilePicObject;
}

// Displays Message on screen within the message scroll div
function displayMessage_Localy(content) {		// function that creates new messages
    var currentMessageID = ident++;     // Increase message id - TESTING ONLY

    var messageObject 		= document.createElement("div");  
    messageObject.classList.add("msg");	// ID For css
    messageObject.setAttribute("id", "msg" + currentMessageID);           // place holder id backend team replace
    
    var profilePicObject 	= createPfpObject();  
    
    document.getElementById("messagescroll").appendChild(messageObject);  // message div in to container div
    
    // Add profile pic to message object
    document.getElementById("msg" + currentMessageID /* TESTING ONLY */ ).appendChild(profilePicObject);  // message div in to container div

    // Set the text for the message
    var textObject = document.createElement("div");  
    messageObject.classList.add("msg_text");	// ID For css

    textObject.innerHTML = content;
    
    document.getElementById("msg" + currentMessageID /* TESTING ONLY */ )
        .appendChild(textObject);
}

// Created a pfp object to be used
function createPfpObject(userID = undefined, UserName = undefined)
{
    var profilePicObject 	= document.createElement("img");  
    profilePicObject.classList.add("pfp");	// ID For css
    profilePicObject.setAttribute("src", "pfp.png");           // place holder id backend team replace
    return profilePicObject;
}

// Displays Guild on screen.
function displayGuild_Localy(id_t) {		// function that creates new messages
    var bubbleObject 		= document.createElement("div");  
    bubbleObject.classList.add("GuildBubble");	// Append ID For css
    bubbleObject.setAttribute("guildID", id_t);	// Append ID For css
    bubbleObject.setAttribute("onclick", `selectGuild(${id_t})`);

    /* Testing */
    var GuildBubble_ContentRegion_Testing = document.createElement("div"); 

    var a_text 		= document.createElement("a");
    a_text.setAttribute("href", `server_${id_t}.html`);           // place holder id backend team replace
    
    console.log(a_text);
    GuildBubble_ContentRegion_Testing.appendChild(a_text);
    bubbleObject					 .appendChild(GuildBubble_ContentRegion_Testing);
    
    
    document.getElementById("guildSideBar").appendChild(bubbleObject);
}

function addGuildToCache(id_T, name_T, description_T) {
    localCache.guilds.forEach(e => {
        if(e.id == id_T) {
            console.log(`Guild already in cache. ${id_T}.`);
            return;
        }
    });
    var obj = {
        localTest: false,
        id: id_T,
        name: name_T,
        description: description_T,
        type: GUILD,
        fetchedChannels: false,
        fetchedMembers: false,
        channels: 	[ ],
        members: 	[ ]
    }
    localCache.guilds.push(obj);
}

function renderGuilds() {
    localCache.guilds.forEach(guild => {
        console.log(`Rendering guild: ${guild.id}`);
        displayGuild_Localy(guild.id);
    })
}

function partiallyReloadClient() {
    console.log(`Partially reloading client!`);

    var localUserState = localCache.localData; 
    
    localCache = { 
        localUserState, 
        guilds: []
    };

    // Clear rendered messages.
    document.getElementById("messagescroll").innerHTML = "";

    // Clear rendered guild bubbles.
    document.getElementById("guildSideBar").innerHTML = "";

    // Begin to re-populate guild cache
    addGuildToCache(1, "Guild Name.", "Descriptionnn");

    renderGuilds();
}

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

function Changewindow() {
    window.location.href = "guild.html";
}

function selectGuild(id_t) {
    selectedGuild = id_t;
    console.log(`Selecting guild: ${id_t}`);
}