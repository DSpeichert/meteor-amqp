Package.describe({
  summary: 'AMQP driver for node',
  git: 'https://github.com/DSpeichert/meteor-amqp'
});

Npm.depends({
  "amqp": "0.1.7"
});

Package.on_use(function(api, where) {
  api.add_files('amqp.js', 'server');
  if (api.export) {
    api.export("amqp", "server");
  }
});
