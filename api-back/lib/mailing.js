const nodeMailer = require('nodemailer');
const {google} = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const CLIENT_ID = "1021003012894-huggh80t8bkminc263nfprgunhk1547i.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REFRESH_TOKEN = "1//04fYmLFEPqYuGCgYIARAAGAQSNwF-L9IrMZUmysTZdAdu0g6lc4YV9cJuWW9QSrOJQiJ7glnhAQ8A2cKpaPtrigBur_OTVRCpPjY";
const ACCESS_TOKEN = "ya29.A0ARrdaM9RkXUZpd-9MIuOw8hMG2Zbk_pgTtkrOJeAbkCiB7UEXRRGhhjsIl1xiA47VJY2dNOstyYpeItoxxaJKyOOcOVSw8pUqNRXw90tIAYkFpDHtMB74R4QRRN08rZj7Mf-LbW-L-MCvg80kZ9OsrBix79Q";

module.exports = (mailTo, subject, title, text)=>{
    const oauth2Client = new OAuth2(
        CLIENT_ID, // client Id
        CLIENT_SECRET, // Client Secret
        "https://developers.google.com/oauthplayground", // Redirect URL
    )

    oauth2Client.setCredentials({
        refresh_token: REFRESH_TOKEN
    })

    console.log("oauth2Client",oauth2Client);

    let transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAUTH2',
            user: "carlosceren2807@gmail.com",
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            refreshToken: REFRESH_TOKEN,
            accessToken: ACCESS_TOKEN
        }
    })

    // Mail model
    let mailOptions = {
        from: '"CS Corporativo" <carlosceren2807@gmail.com>',
        to: mailTo,
        subject: subject,
        text: text,
        html: '<b>'+title+'</b><p>'+text+'</p>'
    };

    transporter.sendMail(mailOptions, (error,info)=>{
        if(error){
            console.log("ERROR SENDING THE MAIL");
            return console.log(error)
        }
        console.log('Message %s sent: %s',info.messageId, info.response);
    });

}
