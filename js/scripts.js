
const data = {
    members: [
        {
            email_address: email,
            status: 'subscribed',
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }
        }
    ]
};

const postData = JSON.stringify(data);

fetch('https://usX.api.mailchimp.com/3.0/lists/<YOUR_AUDIENCE_ID>', {
    method: 'POST',
    headers: {
        Authorization: 'auth <YOUR_API_KEY>'
    },
    body: postData
})
    .then(res.statusCode === 200 ?
        res.redirect('/success.html') :
        res.redirect('/fail.html'))
    .catch(err => console.log(err))