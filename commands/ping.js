module.exports = {
  name: "ping",
  cooldown: 10,
  description: "(ma premiere commande )Afficher le ping moyen du bot",
  execute(message) {
    message.reply(`📈 Average ping to API: ${Math.round(message.client.ws.ping)} ms`).catch(console.error);
  }
};
