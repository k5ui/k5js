const { Keystone } = require('@ksjs/keystone');
const { GraphQLApp } = require('@ksjs/app-graphql');
const { AdminUIApp } = require('@ksjs/app-admin-ui');
/* keystone-cli: generated-code */
const { MongooseAdapter: Adapter } = require('@ksjs/adapter-mongoose');
const PROJECT_NAME = 'My KeystoneJS Project';
/* /keystone-cli: generated-code */

/**
 * You've got a new KeystoneJS Project! Things you might want to do next:
 * - Add adapter config options (See: https://keystonejs.com/keystonejs/adapter-mongoose/)
 * - Select configure access control and authentication (See: https://keystonejs.com/api/access-control)
 */

const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter(),
});

module.exports = {
  keystone,
  apps: [new GraphQLApp(), new AdminUIApp({ enableDefaultRoute: true })],
};
