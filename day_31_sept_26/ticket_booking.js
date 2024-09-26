const EmailManager = require("./email_manager");
const TicketManager = require("./ticket_manager");

const ticketManager = new TicketManager(3);
const emailManager = new EmailManager();

ticketManager.on('buyTicket', function (email, price, ticketBookingTime) {
    console.log(`${email} bought a ticket for Rs.${price}, at ${ticketBookingTime}`);
    emailManager.sendEmail(email, 'Great!!! Your Ticket is Booked Successfully');
});
ticketManager.on('noTicketAvailable', (email) => {
    emailManager.sendEmail(email, 'Sorry!!! Your Ticket booking is unSuccessful');
});

ticketManager.buy('person-1@gmail.com', 300);
ticketManager.buy('person-2@gmail.com', 200);
ticketManager.buy('person-3@gmail.com', 400);
ticketManager.buy('person-4@gmail.com', 250);