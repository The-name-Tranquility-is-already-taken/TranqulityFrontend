function addGuildToCache(id_t, name_T, description_T) {
  failed = false;
  localCache.guilds.forEach((e) => {
    if (e.id == id_t) {
      console.log(`Guild already in cache. ${id_t}.`);
      // TODO: Report this bug to Server
      //       If this happens it means that the Server set multiple servers of
      //       the same ID
      failed = true;
    }
  });
  if (failed) return;
  var obj = {
    localTest: false,
    id: id_t,
    name: name_T,
    description: description_T,
    type: GUILD,
    fetchedChannels: false,
    fetchedMembers: false,
    channels: [],
    members: [],
  };
  localCache.guilds.push(obj);
}

function fullyResetCache() {
  localCache = {
    loaded: false,
    localData: {
      loaded: false,
      id: -1,
      username: "",
      token: "", // Will change ofc lmao
    },
    guilds: [],
  };
}
