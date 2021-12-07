import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Conn2DataSource} from '../datasources';
import {Ticket, TicketRelations} from '../models';

export class TicketRepository extends DefaultCrudRepository<
  Ticket,
  typeof Ticket.prototype.id,
  TicketRelations
> {
  constructor(
    @inject('datasources.conn2') dataSource: Conn2DataSource,
  ) {
    super(Ticket, dataSource);
  }
}
