const { EventEmitter } = require('events');

// TicketManager class is extending EventEmitter
// so that we can use EventEmitter methods(on(), emit()) with our object
class TicketManager extends EventEmitter {
    constructor(ticketCount) {
        super();
        this.ticketCount = ticketCount;
    }
    buy(email, price) {
        if (this.ticketCount > 0) {
            this.ticketCount--;
            const ticketBookingTime = new Date().toLocaleTimeString();
            this.emit('buyTicket', email, price, ticketBookingTime);
        } else {
            this.emit('noTicketAvailable', email);
        }
    }
}
module.exports = TicketManager;