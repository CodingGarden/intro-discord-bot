module.exports = async (msg) => {
  await msg.channel.send('pong');
  console.log('Ping Pong! (sent)');
};
