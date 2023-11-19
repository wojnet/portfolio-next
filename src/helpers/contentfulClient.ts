const contentful = require("contentful");

const contentfulClient = contentful.createClient({
    space: 'owr99aagca52',
    environment: 'master',
    accessToken: 'BSSojPf7A57d_Iams0WecuB6oo4plfGZ-P48rI-Z9NM'
});

export default contentfulClient;