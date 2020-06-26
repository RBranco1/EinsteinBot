'use strict';

const Discord = require('discord.js');

const client = new Discord.Client();

function onServer(){
client.on('ready', () => {
  console.log('I am ready!');
});
}



client.on('message', message => {
 
  if (message.content === 'historia') {
    message.channel.send('pong');
  }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('NzI1ODcyNjI2NDE2NzQ2NDk3.XvVD0Q.GC0EwXCwtl6KK8YiR2dhbppBxM4');


const Tony = new Discord.WebhookClient('725459542384836719', 'FQRXsk_1v0rxs-ebx03yEaDyxfxfu45vnEcpgt0VmaB9z54a2KdFFpNfBKY4qrCrMRuB');
const ChrisQ = new Discord.WebhookClient('725497950788386837', 'kyW9IFehuRhE79k9jmgCUT1FrmFOcpfAGsXSnAG-DR1xMuOJd_DUfuGW59JHP-OA8zAo');
const Alexandre = new Discord.WebhookClient('725498023555104861', 'jXhhBlsLjQrMetqtcUssgChDSb8L6ZEVbu237r-o86g4M_6KoQdgIx6a9RjNJToOKO3o');
const Talita = new Discord.WebhookClient('725498298722680845', '51aP38X372pZewqMLXikZVnwYr3cPj37Ttp2oMHcKKOVRCtMdHz4C5ebO6XVJWeZiJMw');
const Leo = new Discord.WebhookClient('725498396093317211', 'DUUEY6FqGgC_iS9P7X0Fzg8rTf_osO6wWB2xhTbQELN6LyY-21dPJon6RIE7YsXIhBS0');
const Boris = new Discord.WebhookClient('725498504184856577', 'NB2oa41A6ZmuToQHy9KEu6wXLtd3JUQBah5Lv3E80me5ue3BIZXapqp8ezUHqzF_M_nV');
const Elaine = new Discord.WebhookClient('725498592047005917', 'n7ABhg3SRrpiCGJuet3lJLVW_RQZPYFyHiAFU55qZb_xsqPxKR9yty2257XwhOHKzc8-');
const ChrisE = new Discord.WebhookClient('725498661941018705', 'bj3kidsGvkCDZNR-MV1GqAQA7U4BwVcJdSo8k41_F8xGYWeWcS61-TjW9uLvXDJPyX4X');



onServer()







//Rota para listar tarefas https://classroom.googleapis.com/v1/courses/24205361123/courseWork?key=AIzaSyAw3fnApXs__LstjV7v0xypyFUu74E-h84 HTTP/1.1

//Authorization: Bearer [YOUR_ACCESS_TOKEN]
//Accept: application/json


//tony = https://discordapp.com/api/webhooks/725459542384836719/FQRXsk_1v0rxs-ebx03yEaDyxfxfu45vnEcpgt0VmaB9z54a2KdFFpNfBKY4qrCrMRuB
//courseid:24205361123

//ChrisQ = https://discordapp.com/api/webhooks/725497950788386837/kyW9IFehuRhE79k9jmgCUT1FrmFOcpfAGsXSnAG-DR1xMuOJd_DUfuGW59JHP-OA8zAo
//courseid:60382416186

//Alexandre = https://discordapp.com/api/webhooks/725498023555104861/jXhhBlsLjQrMetqtcUssgChDSb8L6ZEVbu237r-o86g4M_6KoQdgIx6a9RjNJToOKO3o
//courseid:60369455656

//Talita = https://discordapp.com/api/webhooks/725498298722680845/51aP38X372pZewqMLXikZVnwYr3cPj37Ttp2oMHcKKOVRCtMdHz4C5ebO6XVJWeZiJMw
//courseid:60373040356

//leo = https://discordapp.com/api/webhooks/725498396093317211/DUUEY6FqGgC_iS9P7X0Fzg8rTf_osO6wWB2xhTbQELN6LyY-21dPJon6RIE7YsXIhBS0
//courseid:60327930072

//Boris = https://discordapp.com/api/webhooks/725498504184856577/NB2oa41A6ZmuToQHy9KEu6wXLtd3JUQBah5Lv3E80me5ue3BIZXapqp8ezUHqzF_M_nV
//courseid:61746734185

//Elaine = https://discordapp.com/api/webhooks/725498592047005917/n7ABhg3SRrpiCGJuet3lJLVW_RQZPYFyHiAFU55qZb_xsqPxKR9yty2257XwhOHKzc8-
//courseid:60439137882

//ChrisE = https://discordapp.com/api/webhooks/725498661941018705/bj3kidsGvkCDZNR-MV1GqAQA7U4BwVcJdSo8k41_F8xGYWeWcS61-TjW9uLvXDJPyX4X
//courseid:60421191545

