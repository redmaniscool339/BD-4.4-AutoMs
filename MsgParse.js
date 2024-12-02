const mscalc = require("./msCalc.js")
var msgHolder =""

exports.MsgParse = function(bot){
 bot.on('message', message => {
if (message.content.indexOf('!!') === 0)
{

/// laser reactions 
if(message.content.indexOf('laser')  === 2) ///fun command
{
message.reply('pew pew')
}

///ms reactions
if(message.content.indexOf('ms') === 2){
var ogMsg = message.content

var msgSplit = ogMsg.replace('!!ms','')

msgSplit = msgSplit.split(',')

mscalc.msCalc(msgSplit, message)
}

if(message.content.indexOf('joinRoom') === 2){
msgHolder = message.content
msgHolder = msgHolder.replace('!!joinRoom','')
message.reply("/j " + msgHolder)

}
if(message.content.indexOf('leaveRoom') === 2){
msgHolder = message.content
msgHolder = msgHolder.replace('!!leaveRoom','')
message.reply("/part " + msgHolder)

}






}


});
}