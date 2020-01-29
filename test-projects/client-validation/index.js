const { Keystone } = require('@ksjs/keystone');
const { Text, Password, Checkbox } = require('@ksjs/fields');
const { GraphQLApp } = require('@ksjs/app-graphql');
const { AdminUIApp } = require('@ksjs/app-admin-ui');
const { StaticApp } = require('@ksjs/app-static');

const { staticRoute, staticPath } = require('./config');

const { MongooseAdapter } = require('@ksjs/adapter-mongoose');

const keystone = new Keystone({
  name: 'Cypress Test Project Client Validation',
  adapter: new MongooseAdapter(),
});

keystone.createList('User', {
  fields: {
    name: { type: Text },
    email: { type: Text, isUnique: true },
    password: { type: Password, isRequired: true },
    isAdmin: { type: Checkbox },
  },
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new StaticApp({ path: staticRoute, src: staticPath }),
    new AdminUIApp({ enableDefaultRoute: true }),
  ],
};
