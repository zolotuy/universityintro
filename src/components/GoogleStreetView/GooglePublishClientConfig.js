const google = require('google.streetview.publish.v1');

const client = google.StreetViewPublishServiceClient({
    // optional auth parameters.
});

const photo = {};
client.createPhoto({photo: photo})
    .then(responses => {
        const response = responses[0];
        response.toJSON()
    })
    .catch(err => {
        console.error(err);
    });