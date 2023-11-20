const contentful = require("contentful");

const contentfulClient = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE,
    environment: process.env.CONTENTFUL_ENVIRONMENT,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export default contentfulClient;