const contentful = require("contentful");

const contentfulClient = contentful.createClient({
    space: process.env.contentfulSpace,
    environment: process.env.contentfulEnvironment,
    accessToken: process.env.contentfulAccessToken,
});

export default contentfulClient;