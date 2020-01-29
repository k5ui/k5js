const { Keystone } = require('@ksjs/keystone');
const { Text } = require('@ksjs/fields');
const { GraphQLApp } = require('@ksjs/app-graphql');
const { AdminUIApp } = require('@ksjs/app-admin-ui');
const { NuxtApp } = require('@ksjs/app-nuxt');

/* keystone-cli: generated-code */
const { MongooseAdapter: Adapter } = require('@ksjs/adapter-mongoose');
const PROJECT_NAME = 'Nuxt';
/* /keystone-cli: generated-code */

const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter(),
});

keystone.createList('Todo', {
  schemaDoc: 'A list of things which need to be done',
  fields: {
    name: { type: Text, schemaDoc: 'This is the thing you need to do' },
  },
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp(),
    new NuxtApp({
      srcDir: 'src',
      buildDir: 'dist',
    }),
  ],
};
