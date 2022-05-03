const axios = require("axios");
const download = require("download");
const Promise = require("bluebird");
const path = require("path");

const testimonialsInFr = require("../src/components/testimonials.fr.json");

const DISCOURSE_FORUM_DOMAIN = "https://community.gladysassistant.com";

async function getImage(username) {
  console.log(`Getting image url for ${username}`);
  const { data } = await axios.get(
    `${DISCOURSE_FORUM_DOMAIN}/u/${username}.json`
  );
  const userAvatar = data.user.avatar_template.replace("{size}", "100");
  const userAvatarUrl = `${DISCOURSE_FORUM_DOMAIN}/${userAvatar}`;
  return {
    url: userAvatarUrl,
    extension: path.extname(userAvatarUrl),
  };
}

async function downloadImage(url, username, extension) {
  console.log(`Downloading image for ${username}, ${url}, ${extension}`);
  await download(url, `static/img/testimonials/`, {
    filename: `${username}${extension}`,
  });
}

async function getAll() {
  await Promise.each(testimonialsInFr, async (testimonial) => {
    const { url, extension } = await getImage(testimonial.username);
    await downloadImage(url, testimonial.username, extension);
  });
}

getAll();
