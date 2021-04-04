const delay = ms => new Promise(res => setTimeout(res, ms));

var selectedGuild = 1;

// Enums dont exist?????
var GUILD = 1;
var TEXT_MESSAGE = 2;
var TEXT_CHANNEL = 3;

var ident = 0;  // TESTING ONLY

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
