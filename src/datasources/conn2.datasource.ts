import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'conn2',
  connector: 'mongodb',
  url: 'mongodb+srv://oscar:admin@cluster0.wczc8.mongodb.net/Prueba2',
  host: 'cluster0.wczc8.mongodb.net',
  port: 27017,
  user: 'oscar',
  password: 'admin',
  database: 'Prueba2',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class Conn2DataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'conn2';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.conn2', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
