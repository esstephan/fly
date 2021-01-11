import axios from 'axios';

export type SMSData = {
    message: string,
    originNumber: string,
    destinationNumber: string,
    sendAt: string,
}

function SendSMS (data: SMSData) {
    var url = 'https://api.textlocal.in/send/?apikey=########&numbers=########&sender=TXTLCL&message='+encodeURIComponent('#####');
    // Make a request for a user with a given ID
    axios.get(url)
    .then(function (response) {
    // handle success
    console.log("------ SMS Gateway Response ------");
    console.log(response.data);
    })
    .catch(function (error) {
    // handle error
    console.log(error);
    })
    .finally(function () {
    // always executed
    });   
}