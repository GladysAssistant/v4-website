const axios = require('axios');

exports.handler = function(event, context, callback) {
  const body = JSON.parse(event.body);
  const { payload } = body;
  console.log(payload);
  const listId = payload.language === 'fr' ? '1mXJoEWEl' : 'haflMsWmU';
  const accessToken = process.env.EMAIL_LIST_ACCESS_TOKEN;
  axios.post(`https://email-list.gladysassistant.com/api/subscribe/${listId}?access_token=${accessToken}`, {
    EMAIL:  payload.email,
    FIRST_NAME: payload.firstname,
    REQUIRE_CONFIRMATION: true
  })
  .then((res) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          EMAIL: body.email,
          FIRST_NAME: body.firstname,
          REQUIRE_CONFIRMATION: true
        })
      });
  })
  .catch((err) => {
    console.log(err);
    callback(err.response.data);
  });
}