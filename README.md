Meteor-AMQP
===============
A wrapper around [node-amqp](https://npmjs.org/package/amqp) (npm amqp package) for use with [Meteorite](https://github.com/oortcloud/meteorite) on top of [Meteor](http://meteor.com)

##Install
mrt add amqp

##Usage

AMQP module is exposed this way by Meteor-AMQP:

    amqp = require('amqp');

To use it in your Meteor application, you can start right with a line like this:

    var connection = amqp.createConnection({ host: 'dev.rabbitmq.com' });

See AMQP [documentation](https://npmjs.org/package/amqp) for more details.
