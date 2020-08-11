const fs = require("fs");
const readline = require("readline");
const { google } = require("googleapis");
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const client = new Discord.Client();

var date = new Date();

var dayjs = require("dayjs")

const Tony = new Discord.WebhookClient(
  "725459542384836719",
  "FQRXsk_1v0rxs-ebx03yEaDyxfxfu45vnEcpgt0VmaB9z54a2KdFFpNfBKY4qrCrMRuB"
);
const ChrisQ = new Discord.WebhookClient(
  "725497950788386837",
  "kyW9IFehuRhE79k9jmgCUT1FrmFOcpfAGsXSnAG-DR1xMuOJd_DUfuGW59JHP-OA8zAo"
);
const Alexandre = new Discord.WebhookClient(
  "725498023555104861",
  "jXhhBlsLjQrMetqtcUssgChDSb8L6ZEVbu237r-o86g4M_6KoQdgIx6a9RjNJToOKO3o"
);
const Talita = new Discord.WebhookClient(
  "725498298722680845",
  "51aP38X372pZewqMLXikZVnwYr3cPj37Ttp2oMHcKKOVRCtMdHz4C5ebO6XVJWeZiJMw"
);
const Leo = new Discord.WebhookClient(
  "725498396093317211",
  "DUUEY6FqGgC_iS9P7X0Fzg8rTf_osO6wWB2xhTbQELN6LyY-21dPJon6RIE7YsXIhBS0"
);
const Boris = new Discord.WebhookClient(
  "725498504184856577",
  "NB2oa41A6ZmuToQHy9KEu6wXLtd3JUQBah5Lv3E80me5ue3BIZXapqp8ezUHqzF_M_nV"
);
const Elaine = new Discord.WebhookClient(
  "725498592047005917",
  "n7ABhg3SRrpiCGJuet3lJLVW_RQZPYFyHiAFU55qZb_xsqPxKR9yty2257XwhOHKzc8-"
);
const ChrisE = new Discord.WebhookClient(
  "725498661941018705",
  "bj3kidsGvkCDZNR-MV1GqAQA7U4BwVcJdSo8k41_F8xGYWeWcS61-TjW9uLvXDJPyX4X"
);

const Hitler = new Discord.WebhookClient(
  "742402913317683272",
  "aOXKslBrEHIfwsBYGzeBERKdERIbQncUutuQLXEBIwMqPp1klHGCclakBOxZP9y1zQPO"
);
const Trivago = new Discord.WebhookClient(
  "742406264885084240",
  "ZtJcMzOQJ-J59y50cVkntiXp0eXXgJhCLH9C-YgPOGRqtQs8_wtgfPF_rTyq2vApaCfy"
);


// If modifying these scopes, delete token.json.
const SCOPES = ["https://www.googleapis.com/auth/classroom.coursework.me"];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = "token.json";

// Load client secrets from a local file.

fs.readFile("credentials.json", (err, content) => {
  if (err) return console.log("Error loading client secret file:", err);
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
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

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
    access_type: "offline",
    scope: SCOPES,
  });
  console.log("Authorize this app by visiting this url:", authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Enter the code from that page here: ", (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error("Error retrieving access token", err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log("Token stored to", TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

/**
 * Aplicação em si, daqui para  baixo que a magica de fato começa
 */
function onServer() {
  client.on("ready", () => {
    console.log("Eureca!");
    client.user.setActivity("escreva 'eureca' e lança a braba ");
  });
  client.login("NzI1ODcyNjI2NDE2NzQ2NDk3.XwxTTg.jt6kldzhaVHfQZF2lpslgmpKVjA");
 
}

function listWorks(auth) {
  const classroom = google.classroom({ version: "v1", auth });
  onServer();

  client.on("message",(message) => {
    if(message.content === "eureca"){
      message.channel.send("Aulas que funcionam(por enquanto)\n portugues \n redação \n biologia \n matematica \n geografia \n sociologia \n ingles \n historia \n filosofia \n quimica \n fisica \n tcc \n maker \n aula \n chamada \n boa noite!   ")
    }
  })

  client.on("message",(message)=>{
    if(message.content === "boa noite!"){
      message.channel.send("Boa dia, animal")
    }
  })

  client.on("message", (message) => {
    if (message.content === "historia") {
      classroom.courses.courseWork.list(
        {
          courseId: 60327930072,
        },
        (err, res) => {
          if (err) return console.error("The API returned an error: " + err);
          const courseWork = res.data.courseWork;
          if (courseWork && courseWork.length) {
            console.log("Courses:");
            const lastWork = courseWork.shift();
            const embed = new MessageEmbed()
              .setTitle(lastWork.title)
              .setColor(0x0000ff)
              .setDescription(
                lastWork.description + "\n Link:" + lastWork.alternateLink
              );
            //message.channel.send(embed);
            Leo.send(embed);
          } else {
            console.log("No courses found.");
          }
        }
      );
    }
  });

  client.on("message", (message) => {
    if (message.content === "fisica") {
      classroom.courses.courseWork.list(
        {
          courseId: 24205361123,
        },
        (err, res) => {
          if (err) return console.error("The API returned an error: " + err);
          const courseWork = res.data.courseWork;

          if (courseWork && courseWork.length) {
            console.log("Courses:");
            const lastWork = courseWork.shift();
            const embed = new MessageEmbed()
              .setTitle(lastWork.title)
              .setColor(0x0000ff)
              .setDescription(
                lastWork.description + "\n Link:" + lastWork.alternateLink
              );
            Tony.send(embed);
            //message.channel.send(embed);
          } else {
            console.log("No courses found.");
          }
        }
      );
    }
  });

  client.on("message", (message) => {
    if (message.content === "portugues") {
      classroom.courses.courseWork.list(
        {
          courseId: 60369455656,
        },
        (err, res) => {
          if (err) return console.error("The API returned an error: " + err);
          const courseWork = res.data.courseWork;

          if (courseWork && courseWork.length) {
            console.log("Courses:");
            const lastWork = courseWork.shift();
            const embed = new MessageEmbed()
              .setTitle(lastWork.title)
              .setColor(0x0000ff)
              .setDescription(
                lastWork.description + "\n Link:" + lastWork.alternateLink
              );
            Alexandre.send(embed);
          } else {
            console.log("No courses found.");
          }
        }
      );
    }
  });

  client.on("message", (message) => {
    if (message.content === "geografia") {
      classroom.courses.courseWork.list(
        {
          courseId: 60373040356,
        },
        (err, res) => {
          if (err) return console.error("The API returned an error: " + err);
          const courseWork = res.data.courseWork;

          if (courseWork && courseWork.length) {
            console.log("Courses:");
            const lastWork = courseWork.shift();
            const embed = new MessageEmbed()
              .setTitle(lastWork.title)
              .setColor(0x0000ff)
              .setDescription(
                lastWork.description + "\n Link:" + lastWork.alternateLink
              );
            Talita.send(embed);
          } else {
            console.log("No courses found.");
          }
        }
      );
    }
  });

  client.on("message", (message) => {
    if (message.content === "matematica") {
      classroom.courses.courseWork.list(
        {
          courseId: 61746734185,
        },
        (err, res) => {
          if (err) return console.error("The API returned an error: " + err);
          const courseWork = res.data.courseWork;

          if (courseWork && courseWork.length) {
            console.log("Courses:");
            const lastWork = courseWork.shift();
            const embed = new MessageEmbed()
              .setTitle(lastWork.title)
              .setColor(0x0000ff)
              .setDescription(
                lastWork.description + "\n Link:" + lastWork.alternateLink
              );
            Boris.send(embed);
          } else {
            console.log("No courses found.");
          }
        }
      );
    }
  });

  client.on("message", (message) => {
    if (message.content === "biologia") {
      classroom.courses.courseWork.list(
        {
          courseId: 60439137882,
        },
        (err, res) => {
          if (err) return console.error("The API returned an error: " + err);
          const courseWork = res.data.courseWork;

          if (courseWork && courseWork.length) {
            console.log("Courses:");
            const lastWork = courseWork.shift();
            const embed = new MessageEmbed()
              .setTitle(lastWork.title)
              .setColor(0x0000ff)
              .setDescription(
                lastWork.description + "\n Link:" + lastWork.alternateLink
              );
            Elaine.send(embed);
          } else {
            console.log("No courses found.");
          }
        }
      );
    }
  });

  client.on("message", (message) => {
    if (message.content === "ingles") {
      classroom.courses.courseWork.list(
        {
          courseId: 60421191545,
        },
        (err, res) => {
          if (err) return console.error("The API returned an error: " + err);
          const courseWork = res.data.courseWork;

          if (courseWork && courseWork.length) {
            console.log("Courses:");
            const lastWork = courseWork.shift();
            const embed = new MessageEmbed()
              .setTitle(lastWork.title)
              .setColor(0x0000ff)
              .setDescription(
                lastWork.description + "\n Link:" + lastWork.alternateLink
              );
            ChrisE.send(embed);
          } else {
            console.log("No courses found.");
          }
        }
      );
    }
  });

  client.on("message", (message) => {
    if (message.content === "quimica") {
      classroom.courses.courseWork.list(
        {
          courseId: 60382416186,
        },
        (err, res) => {
          if (err) return console.error("The API returned an error: " + err);
          const courseWork = res.data.courseWork;
          if (courseWork && courseWork.length) {
            console.log("Courses:");
            const lastWork = courseWork.shift();
            const embed = new MessageEmbed()
              .setTitle(lastWork.title)
              .setColor(0x0000ff)
              .setDescription(
                lastWork.description + "\n Link:" + lastWork.alternateLink
              );
            ChrisQ.send(embed);
          } else {
            console.log("No courses found.");
          }
        }
      );
    }
  });

  client.on("message", (message) => {
    if (message.content === "filosofia") {
      classroom.courses.courseWork.list(
        {
          courseId: 60371409098,
        },
        (err, res) => {
          if (err) return console.error("The API returned an error: " + err);
          const courseWork = res.data.courseWork;
          if (courseWork && courseWork.length) {
            console.log("Courses:");
            const lastWork = courseWork.shift();
            const embed = new MessageEmbed()
              .setTitle(lastWork.title)
              .setColor(0x0000ff)
              .setDescription(
                lastWork.description + "\n Link:" + lastWork.alternateLink
              );
            Leo.send(embed);
          } else {
            console.log("No courses found.");
          }
        }
      );
    }
  });
  client.on("message", (message) => {
    if (message.content === "maker") {
      classroom.courses.courseWork.list(
        {
          courseId: 40356280324,
        },
        (err, res) => {
          if (err) return console.error("The API returned an error: " + err);
          const courseWork = res.data.courseWork;
          if (courseWork && courseWork.length) {
            console.log("Courses:");
            const lastWork = courseWork.shift();
            const embed = new MessageEmbed()
              .setTitle(lastWork.title)
              .setColor(0x0000ff)
              .setDescription(
                lastWork.description + "\n Link:" + lastWork.alternateLink
              );
            Trivago.send(embed);
          } else {
            console.log("No courses found.");
          }
        }
      );
    }
  });
  client.on("message", (message) => {
    if (message.content === "sociologia") {
      classroom.courses.courseWork.list(
        {
          courseId: 60373040364,
        },
        (err, res) => {
          if (err) return console.error("The API returned an error: " + err);
          const courseWork = res.data.courseWork;
          if (courseWork && courseWork.length) {
            console.log("Courses:");
            const lastWork = courseWork.shift();
            const embed = new MessageEmbed()
              .setTitle(lastWork.title)
              .setColor(0x0000ff)
              .setDescription(
                lastWork.description + "\n Link:" + lastWork.alternateLink
              );
            Talita.send(embed);
          } else {
            console.log("No courses found.");
          }
        }
      );
    }
  });
  client.on("message", (message) => {
    if (message.content === "tcc") {
      classroom.courses.courseWork.list(
        {
          courseId: 60382416201,
        },
        (err, res) => {
          if (err) return console.error("The API returned an error: " + err);
          const courseWork = res.data.courseWork;
          if (courseWork && courseWork.length) {
            console.log("Courses:");
            const lastWork = courseWork.shift();
            const embed = new MessageEmbed()
              .setTitle(lastWork.title)
              .setColor(0x0000ff)
              .setDescription(
                lastWork.description + "\n Link:" + lastWork.alternateLink
              );
            Hitler.send(embed);
          } else {
            console.log("No courses found.");
          }
        }
      );
    }
  });
  client.on("message", (message) => {
    if (message.content === "redação") {
      classroom.courses.courseWork.list(
        {
          courseId: 60327158802,
        },
        (err, res) => {
          if (err) return console.error("The API returned an error: " + err);
          const courseWork = res.data.courseWork;
          if (courseWork && courseWork.length) {
            console.log("Courses:");
            const lastWork = courseWork.shift();
            const embed = new MessageEmbed()
              .setTitle(lastWork.title)
              .setColor(0x0000ff)
              .setDescription(
                lastWork.description + "\n Link:" + lastWork.alternateLink
              );
            Alexandre.send(embed);
          } else {
            console.log("No courses found.");
          }
        }
      );
    }
  });

  client.on("message", (message) => {
    if (message.content === "chamada") {
      message.channel.send(
        `Ta ai para você <3 \n Raphael Branco Pieroni \n Felipe Abreu Mendes \n Lucas Amano Shinohara \n  Thiago Tanaka Ferreira \n  https://docs.google.com/forms/d/e/1FAIpQLSf_z-VUR2sM9ROYIioE02LJhWQXkOXTireH0DnIXjbcwoFO2Q/viewform?usp=pp_url&entry.516042267=3º+EM&entry.1550906963=A&entry.75214940=${"Elaine+Aparecida+Monteiro"}&entry.1232749539=${"Biologia"}`
      );
    }
  });

  /* id do formulario
1(serie) = 516042267
2(turma) = 1550906963
3(nome) = 1194150185 
4(professor) = 75214940
5(aula) = 1232749539 */

function newTime(){
  time = {
    seconds: date.getSeconds(),
     dia : date.getDay(),
     horas : date.getHours(),
     minutos : date.getMinutes(),
     atest: date.toLocaleString(),
  };

  console.log(time.atest)
  return time

}
  function getAula(message, aula, name) {
    message.channel.send(
      "Bom dia! parece que a aula agora é... **" +
        aula +
        `**\nPrencha a chamada por aqui <3 \nRaphael Branco Pieroni  
Links: https://docs.google.com/forms/d/e/1FAIpQLSf_z-VUR2sM9ROYIioE02LJhWQXkOXTireH0DnIXjbcwoFO2Q/viewform?usp=pp_url&entry.516042267=3º+EM&entry.1194150185=Raphael+Branco+Pieroni&entry.1550906963=A&entry.75214940=${name}&entry.1232749539=${aula}
\nFelipe Abreu Mendes 
https://docs.google.com/forms/d/e/1FAIpQLSf_z-VUR2sM9ROYIioE02LJhWQXkOXTireH0DnIXjbcwoFO2Q/viewform?usp=pp_url&entry.516042267=3º+EM&entry.1194150185=Felipe+Abreu+Mendes&entry.1550906963=A&entry.75214940=${name}&entry.1232749539=${aula}
\nLucas Amano Shinohara 
https://docs.google.com/forms/d/e/1FAIpQLSf_z-VUR2sM9ROYIioE02LJhWQXkOXTireH0DnIXjbcwoFO2Q/viewform?usp=pp_url&entry.516042267=3º+EM&entry.1194150185=Lucas+Amano+Shinohara&entry.1550906963=A&entry.75214940=${name}&entry.1232749539=${aula}
\nThiago Tanaka Ferreira \n
https://docs.google.com/forms/d/e/1FAIpQLSf_z-VUR2sM9ROYIioE02LJhWQXkOXTireH0DnIXjbcwoFO2Q/viewform?usp=pp_url&entry.516042267=3º+EM&entry.1194150185=Thiago+Tanaka+Ferreira&entry.1550906963=A&entry.75214940=${name}&entry.1232749539=${aula}
\n `


    ),  
    console.log("reset");
    console.log(dayjs().date());
  }

  client.on("message", (message) => {
    if (message.content === "aula" || message.content === "Aula") {
      newTime()

      //segunda
      if (time.dia == 1){
      if (time.horas == 8 ||  time.horas == 9 && time.minutos < 30) {
        getAula(message, "Química", "Christiane+Meire+Santos+Neves");
      } else if (time.horas == 9 && time.minutos > 30 || time.horas == 10 && time.minutos < 15)
         {
        getAula(message, "Filosofia", "Leonardo+Caetano+Da+Silva");
      } else if (time.horas == 10 && time.minutos > 34 || time.horas == 11) {
        getAula(message, "Português", "Alexandre+José+Sposito");
      } else if (time.horas == 12 && time.minutos < 46) {
        getAula(message, "Física", "Antonio+Ullaco+Anselmi");
      } else if (time.horas == 13 || time.horas ==  12 && time.minutos > 45) {
        getAula(message, "Inglês", "Christiane+Canuto");
      }
    }

       else if(time.dia ==  2){
        //terça
         if (time.horas == 8 || time.horas == 9 && time.minutos < 30) {
          getAula(message, "Geografia", "Talita+De+Faria+Leite+Vivacqua");
        } else if (time.horas == 10 && time.minutos > 35 || time.horas == 11 && time.minutos < 20)
         {
          getAula(message, "Ed.+Física", "Guilherme+Melanin+Silva");
        } else if (time.horas == 11 && time.minutos > 20) {
          getAula(message, "Redação", "Dolores+Alves+O.+Campos");
        } else if (time.horas == 12) {
          getAula(message, "Matemática", "Boris+Dos+Santos");
        
        
      }
    
      }

        //quarta

      else if(time.dia == 3){
        if (time.horas == 7) {
        getAula(message, "Maker", "Filipe+R.+Oliveira+Zertus");
      } else if (time.horas == 8 && time.minutos > 45 || time.horas == 9) {
        getAula(message, "Biologia", "Elaine+Aparecida+Monteiro");
      } else if (time.horas == 10 && time.minutos > 35 || time.horas == 11) {
        getAula(message, "Português", "Alexandre+José+Sposito");
      }
    }

        //quinta
      else if(time.dia ==  4){
       if (time.horas == 7) {
        getAula(message, "Sociologia", "Talita+De+Faria+Leite+Vivacqua");
      } else if (time.horas == 8 && time.minutos > 45 || time.horas == 9 || time.horas == 10 && time.minutos < 15) {
        getAula(message, "Matemática", "Boris+Dos+Santos");
      } else if (time.horas == 10 && time.minutos > 35 || time.horas == 11) {
        getAula(message, "História", "Leonardo+Caetano+Da+Silva");
      } 
    }
      //sexta
      else if(time.dia ==  5){
        if (time.horas == 7 && minutos > 15) {
         getAula(message, "Geografia", "Talita+De+Faria+Leite+Vivacqua");
       } else if (time.horas == 8 && time.minutos < 45) {
         getAula(message, "TCC", "Christiane+Meire+Santos+Neves");
       } else if (time.horas == 8 && time.minutos > 45 || time.horas == 9 && time.minutos < 30 ) {
         getAula(message, "Química", "Christiane+Meire+Santos+Neves");
       } else if (time.horas == 10 && time.minutos > 35 || time.horas == 11) {
        getAula(message, "Biologia", "Elaine+Aparecida+Monteiro");
      } else if (time.horas == 15 || time.horas == 13 && time.minutos < 30) {
        getAula(message, "Física", "Antonio+Ullaco+Anselmi");
      } 
  
      }
    
    else {
      getAula(message, "Liberdade!", null);
    }
    }
  });
}

//cliente id: 720654947304-3pgktkcb90rbtp5q8p5hi5f5pgjbmktm.apps.googleusercontent.com
// client secre: 3Z4iiV--DxVnF1AaOyryHGa9
