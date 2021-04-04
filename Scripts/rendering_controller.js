function renderGuildsBar() {
  localCache.guilds.forEach((guild) => {
    log(`Rendering guild with id: ${guild.id}`);
    // Call low level function for rendering a new guild.
    displayGuild_Localy(guild.id);
  });
}
log("Loaded. rendering_controller.js");
