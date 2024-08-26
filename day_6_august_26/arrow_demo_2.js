let user = {
    fName: 'sachin',
    lName: ' tendulkar',
    fullName1: function () { // this = user
        console.log(this.fName, this.lName, this)
    },
    fullName2: () => { // this = {}
        console.log(this.fName, this.lName, this)
    }
}
user.fullName1();  // sachin tendulkar
user.fullName2();  // undefined undefined