const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');


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
 * Lists the first 10 courses the user has access to.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */

function listWorks(auth){
  const classroom = google.classroom({version: 'v1', auth});
  classroom.courses.courseWork.list({
    courseId:24205361123,
  },(err, res) => {
    if (err) return console.error('The API returned an error: ' + err);
    const courseWork = res.data.courseWork;
    if (courseWork && courseWork.length) {
      console.log('Courses:');
      const Tony = new Discord.WebhookClient('725459542384836719', 'FQRXsk_1v0rxs-ebx03yEaDyxfxfu45vnEcpgt0VmaB9z54a2KdFFpNfBKY4qrCrMRuB');
      courseWork.forEach((courseWorks) => {
        const embed = new MessageEmbed()
        .setTitle(courseWorks.title)
        .setColor(0xffffff)
        .setDescription(courseWorks.description);
        Tony.send(embed);
      });
    } else {
      console.log('No courses found.');
    }

  });
}


 


  //cliente id: 720654947304-3pgktkcb90rbtp5q8p5hi5f5pgjbmktm.apps.googleusercontent.com
  // client secre: 3Z4iiV--DxVnF1AaOyryHGa9