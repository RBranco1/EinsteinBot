const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const client = new Discord.Client();

var date = new Date();


const Tony = new Discord.WebhookClient('725459542384836719', 'FQRXsk_1v0rxs-ebx03yEaDyxfxfu45vnEcpgt0VmaB9z54a2KdFFpNfBKY4qrCrMRuB');
const ChrisQ = new Discord.WebhookClient('725497950788386837', 'kyW9IFehuRhE79k9jmgCUT1FrmFOcpfAGsXSnAG-DR1xMuOJd_DUfuGW59JHP-OA8zAo');
const Alexandre = new Discord.WebhookClient('725498023555104861', 'jXhhBlsLjQrMetqtcUssgChDSb8L6ZEVbu237r-o86g4M_6KoQdgIx6a9RjNJToOKO3o');
const Talita = new Discord.WebhookClient('725498298722680845', '51aP38X372pZewqMLXikZVnwYr3cPj37Ttp2oMHcKKOVRCtMdHz4C5ebO6XVJWeZiJMw');
const Leo = new Discord.WebhookClient('725498396093317211', 'DUUEY6FqGgC_iS9P7X0Fzg8rTf_osO6wWB2xhTbQELN6LyY-21dPJon6RIE7YsXIhBS0');
const Boris = new Discord.WebhookClient('725498504184856577', 'NB2oa41A6ZmuToQHy9KEu6wXLtd3JUQBah5Lv3E80me5ue3BIZXapqp8ezUHqzF_M_nV');
const Elaine = new Discord.WebhookClient('725498592047005917', 'n7ABhg3SRrpiCGJuet3lJLVW_RQZPYFyHiAFU55qZb_xsqPxKR9yty2257XwhOHKzc8-');
const ChrisE = new Discord.WebhookClient('725498661941018705', 'bj3kidsGvkCDZNR-MV1GqAQA7U4BwVcJdSo8k41_F8xGYWeWcS61-TjW9uLvXDJPyX4X');;





// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/classroom.coursework.me'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';

// Load client secrets from a local file.

fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Classroom API.
  authorize(JSON.parse(content), listWorks);
});


/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

/**
* Aplicação em si, daqui para  baixo que a magica de fato começa
 */
function onServer(){
  client.on('ready', () => {
    console.log('I am ready!');
   
  });
  client.login('NzI1ODcyNjI2NDE2NzQ2NDk3.XwXHGA.EPL8rVyNOXXQeWZFxog5gZJ919A');
  }

function getAula(message, aula){
  if(message.content === 'aula'){
    message.channel.send("Bom dia! parece que a aula agora é: " + aula);
}
} 


function listWorks(auth){
  const classroom = google.classroom({version: 'v1', auth});
  onServer()

  client.on('message', message => {
    if (message.content === 'historia') {
      classroom.courses.courseWork.list({
        courseId:60327930072,
      },(err, res) => {
        if (err) return console.error('The API returned an error: ' + err);
        const courseWork = res.data.courseWork; 
        if (courseWork && courseWork.length) {
          console.log('Courses:');
          const lastWork = courseWork.shift()
          const embed = new MessageEmbed()
          .setTitle(lastWork.title)
          .setColor(0x0000FF)
          .setDescription(lastWork.description + "\n Link:" + lastWork.alternateLink);
           //message.channel.send(embed);
          Leo.send(embed)
          
        } else {
          console.log('No courses found.');
        }
    
      });
    }
  });

  client.on('message', message => {

    if(message.content === 'fisica'){
  classroom.courses.courseWork.list({
    courseId:24205361123,
     },(err, res) => {
       if (err) return console.error('The API returned an error: ' + err);
      const courseWork = res.data.courseWork;

    if (courseWork && courseWork.length) {
      console.log('Courses:');
      const lastWork = courseWork.shift()
      const embed = new MessageEmbed()
      .setTitle(lastWork.title)
      .setColor(0x0000FF)
      .setDescription(lastWork.description + "\n Link:" + lastWork.alternateLink);
        Tony.send(embed);
       //message.channel.send(embed);
      

    } else {
      console.log('No courses found.');
    }
    
  });
}
});

client.on('message', message => {
  if(message.content === 'portugues'){  

  classroom.courses.courseWork.list({
    courseId:60369455656,
  },(err, res) => {
    if (err) return console.error('The API returned an error: ' + err);
    const courseWork = res.data.courseWork;

    if (courseWork && courseWork.length) {
      console.log('Courses:');
      const lastWork = courseWork.shift()
      const embed = new MessageEmbed()
      .setTitle(lastWork.title)
      .setColor(0x0000FF)
      .setDescription(lastWork.description + "\n Link:" + lastWork.alternateLink);
        Alexandre.send(embed);
      
    } else {
      console.log('No courses found.');
    }
    
  });
}
});

client.on('message', message => {
  if(message.content === 'geografia'){  

  classroom.courses.courseWork.list({
    courseId:60373040356,
  },(err, res) => {
    if (err) return console.error('The API returned an error: ' + err);
    const courseWork = res.data.courseWork;

    if (courseWork && courseWork.length) {
      console.log('Courses:');
      const lastWork = courseWork.shift()
      const embed = new MessageEmbed()
      .setTitle(lastWork.title)
      .setColor(0x0000FF)
      .setDescription(lastWork.description + "\n Link:" + lastWork.alternateLink);
        Talita.send(embed);
      

    } else {
      console.log('No courses found.');
    }
    
  });
}
});

client.on('message', message => {
  if(message.content === 'matematica'){  

  classroom.courses.courseWork.list({
    courseId:61746734185,
  },(err, res) => {
    if (err) return console.error('The API returned an error: ' + err);
    const courseWork = res.data.courseWork;

    if (courseWork && courseWork.length) {
      console.log('Courses:');
      const lastWork = courseWork.shift()
      const embed = new MessageEmbed()
      .setTitle(lastWork.title)
      .setColor(0x0000FF)
      .setDescription(lastWork.description + "\n Link:" + lastWork.alternateLink);
       Boris.send(embed);
      

    } else {
      console.log('No courses found.');
   }
    
  });
}
});

  
client.on('message', message => {
  if(message.content === 'biologia'){  
  
  classroom.courses.courseWork.list({
    courseId:60439137882,
  },(err, res) => {
    if (err) return console.error('The API returned an error: ' + err);
    const courseWork = res.data.courseWork;

    if (courseWork && courseWork.length) {
      console.log('Courses:');
      const lastWork = courseWork.shift()
      const embed = new MessageEmbed()
      .setTitle(lastWork.title)
      .setColor(0x0000FF)
      .setDescription(lastWork.description + "\n Link:" + lastWork.alternateLink);
      Elaine.send(embed);
      

    } else {
      console.log('No courses found.');
    }
    
  });
}
});

client.on('message', message => {
  if(message.content === 'ingles'){  

  classroom.courses.courseWork.list({
    courseId:60421191545,
  },(err, res) => {
    if (err) return console.error('The API returned an error: ' + err);
    const courseWork = res.data.courseWork;

    if (courseWork && courseWork.length) {
      console.log('Courses:');
      const lastWork = courseWork.shift()
      const embed = new MessageEmbed()
      .setTitle(lastWork.title)
      .setColor(0x0000FF)
      .setDescription(lastWork.description + "\n Link:" + lastWork.alternateLink);
       ChrisE.send(embed);
      

    } else {
      console.log('No courses found.');
      }
    
  });
}
});


client.on('message', message => {
  if(message.content === 'quimica'){  
  classroom.courses.courseWork.list({
    courseId:60382416186,
  },(err, res) => {
    if (err) return console.error('The API returned an error: ' + err);
    const courseWork = res.data.courseWork;
    if (courseWork && courseWork.length) {
      console.log('Courses:');
      const lastWork = courseWork.shift();
      const embed = new MessageEmbed()
      .setTitle(lastWork.title)
      .setColor(0x0000FF)
      .setDescription(lastWork.description + "\n Link:" + lastWork.alternateLink);
        ChrisQ.send(embed);
      

    } else {
      console.log('No courses found.');
    }
  });
    }

  });


  client.on('message', message => {
    if(message.content === 'chamada'){
      message.channel.send('Ta ai para você <3 \n Raphael Branco Pieroni \n Felipe Abreu Mendes \n Lucas Amano Shinohara \n  Thiago Tanaka Ferreira \n https://docs.google.com/forms/d/e/1FAIpQLSf_z-VUR2sM9ROYIioE02LJhWQXkOXTireH0DnIXjbcwoFO2Q/viewform');
    }
  })

  client.on('message', message => {
    var dia = date.getDay();
    var horas = date.getHours();
    var minutos = date.getMinutes();
    if(dia == 1, horas >= 8 && horas < 10, minutos <= 30){
      getAula(message, "quimica")
    } else if(dia ==1, horas >= 9 && horas < 11, minutos < 15){
      getAula(message, "filosofia")
    } else if(dia == 1, horas >= 10 && horas <= 12)
    
    }
  )

}




 


  //cliente id: 720654947304-3pgktkcb90rbtp5q8p5hi5f5pgjbmktm.apps.googleusercontent.com
  // client secre: 3Z4iiV--DxVnF1AaOyryHGa9