// class for taking the age from the ZooTicket and calculating the price as per age
class Guest {
    constructor(age) {
        this.age = age;
        this.entrancePrice = this.calculateEntrancePrice();
    }

    calculateEntrancePrice() {
        if (this.age <= 2) {
            return 0;
        } else if (this.age < 18) {
            return 100;
        } else if (this.age < 60) {
            return 500;
        } else {
            return 300;
        }
    }
}

//class for taking the age, calculating the total amount and displaying the output
class ZooTicket {
    constructor() {
        this.guests = [];
    }

    addGuest(age) {
        const guest = new Guest(age);
        this.guests.push(guest);
    }

    calculateTotalPrice() {
        return this.guests.reduce((total, guest) => total + guest.entrancePrice, 0);
    }

    displayTicketDetails() {
      
        console.log(`Ticket issued for ${this.guests.length} guests and the total amount is ${this.calculateTotalPrice()}`);
    }
    securityCheckDetails(){
        this.guests.forEach((guest, index) => {
            console.log(`Guest ${index + 1} (age: ${guest.age})`);
        });
    }
}

const zooTicket = new ZooTicket();
zooTicket.addGuest(15);
zooTicket.addGuest(20);
zooTicket.displayTicketDetails();
console.log("At Security Check:");
zooTicket.securityCheckDetails();

const zooTicket2 = new ZooTicket();
zooTicket2.addGuest(70);
zooTicket2.addGuest(50);
zooTicket2.displayTicketDetails();
console.log("At Security Check:");
zooTicket2.securityCheckDetails();

const zooTicket3 = new ZooTicket();
zooTicket3.addGuest(70);
zooTicket3.displayTicketDetails();
console.log("At Security Check:");
zooTicket3.securityCheckDetails();