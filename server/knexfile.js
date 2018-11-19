// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://rama:loganx@localhost/community-forum',
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  },
};