const Telegraf = require('telegraf');

module.exports = async function (context) {
  const bot = new Telegraf(process.env['BOT_TOKEN']);

  await bot.launch();
  await bot.telegram.sendPoll(
    process.env['CHAT_ID'],
    'Θα παίξουμε σήμερα?',
    ['Ναι :D', 'Όχι :('],
    {
      type: 'quiz',
      is_anonymous: false,
      correct_option_id: 0,
    }
  );
  await bot.stop();
};
