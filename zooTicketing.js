// guests arriving at rthe gate
// input -> number of guests and the age
// i.e.either  [23] => index+1 will be the number of the guest or {1:23}
// <= 2 ==>0
// >2  && <18 ==>100
//>=18 && <60 ==> 500
//>=60 ==> 300

// Your software should issue an entrance ticket and display the total charges on the ticket based on
// the number of guests and their age.

// this could mean  => if there are 2 guests with age 15 and 20 ==> total =600

//security personal should be able to validate the ticket ==> how?
//ans - display guests and the age
// format ==> Guest 1 (age : 15) Guest 2 (age : 20)

// Guests enter
// take ticket == > conditions
// issue ticket (dispaly total charges based on number of guests and age)

// Security
// get ticket data ==> Guest 1 (age : 15) Guest 2 (age : 20)

// function approach 
function gatePass(age) {
    const entrancePrice = getTheRateOnAge(age);
    return { age, entrancePrice };
}
function getTheRateOnAge(age){
    if(age<=2){
        return 0;
    }else if(age > 2 && age < 18){
        return 100;
    }else if(age >=18 && age<60){
        return 500;
    }
    else{
        return 300;
    }
}
function totalGuests(data,price){
    const total = data.length;
    console.log(`Your entrance ticket is issued for ${total} guests and youe total charges are ${price}`)

}

function securityCheck(data){
    data.map((d,id)=>{
        console.log(`Guest ${id + 1} (age : ${d.age})`)
    } )
}

function issueTicket(age){
        const ticket = age.map(a=>gatePass(a))
        const totalPrice = ticket.reduce((acc,cuur)=> getTheRateOnAge(cuur) + acc ,0)
        totalGuests(ticket,totalPrice)
        securityCheck(ticket)
        return totalPrice;
}

const pass = issueTicket([15,20])
