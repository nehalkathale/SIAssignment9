const express = require('express');
const axios = require('axios');
const { response } = require('express');
const PORT = process.env.PORT || 5000;
const app = express();

app.get("/say", async function (request, response) {
    try {
        var name = request.query.keyword;
        console.log(name);
        axios.get('https://1wurmw69c9.execute-api.us-east-1.amazonaws.com/Dev/myresource', {
            params: {
                keyword: name
            }
        })
            .then(function (AWSResponse) {
                response.send(AWSResponse.data)
            })
            .catch(error => {
                console.log("Error is", error);
            })
    } catch (error) {
        res.status(400).send(error.message)
    }
});

app.listen(PORT, () => console.log(`Server runs on port ${PORT}`));
