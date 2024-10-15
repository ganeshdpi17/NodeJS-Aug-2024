const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "sanjaysamantra2@gmail.com",
        pass: "vqnz angb vioh jbmu", // google app password
    }
});

let mailOptions = {
    from: 'sanjaysamantra2@gmail.com',
    to: ['pritampadhy@ymail.com', 'rangasravinandanahs@gmail.com', 'shindevilas1994@gmail.com'],
    subject: "Sending Email From NodeJS",
    html: `
        <h1>This is a Test Email</h1>
        <h3 style='color:red;text-align:center'>Congratulations!!</h3>
        <p>Please follow the below instructions to claim your money</p>
        <pre>
            Hello
            Hiiiiiiiiii
            Good Morning
        </pre>
    `
}

transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
        console.log(err)
    } else {
        console.log('email sent succesfully!!!')
    }
})