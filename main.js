


let doc = document.body.clientHeight
console.log(doc)


let ticketsContainer = document.getElementById("ticketsContainer")
let btn = document.querySelector('button')
let bankName = document.querySelector('.bankName')
let microseconds = 2000
let tickets = [1,2,3,4,5,6,7,8,9,10,11,12]
let imbooked = false


ticketsContainer.style.width = "25vw"
btn.style.opacity = "0.7"
bankName.style.opacity = 1


let book = (whoisbooking) => {
  if (whoisbooking == 'me' && imbooked) {
    return alert("You already have a ticket.")
  }
  
  
  let newNum = tickets[tickets.length-1] +1
  tickets.push(newNum)
 // console.log(newNum)
  let ticket = document.createElement("div")
  ticket.classList.add("ticket")
  var p = document.createElement("p");
  let textNode = document.createTextNode(`T${newNum}`)
  p.appendChild(textNode)
 
  
  ticket.appendChild(p)
  
  if (whoisbooking == 'me') {
   let con = confirm("You are about to book a ticket.")
   
   if (!con) {
     return alert("Thank you, and have a good day 😊")
   }
   
  imbooked = true
  
  ticket.style.background = "green"

  let infoContent = "Your ticket number is T"+newNum+". Estimated waiting time: " + (tickets.slice(0, tickets.indexOf(newNum))).length * (microseconds/1000)+" seconds."
    alert(infoContent)
  }
  
  ticketsContainer.appendChild(ticket)
  
}

let loadTickets = (tickets) => {

for (let i=0; i < tickets.length; i++) {
  let currNum = tickets[i]
  let ticket = document.createElement("div")
  ticket.classList.add("ticket")
  var p = document.createElement("p");
  let textNode = document.createTextNode(`T${currNum}`)
  p.appendChild(textNode)
  
  ticket.appendChild(p)
  ticketsContainer.appendChild(ticket)
}

}


loadTickets(tickets)


let myInterval = setInterval( () => {
  let first = document.getElementsByClassName("ticket")[0]
  if (first.style.background == 'green') {
    imbooked = false
    let counterNumber = Math.ceil(Math.random()*10)
    alert("Proceed to counter number " + counterNumber )
    alert("Thank you for banking with us, it's been a pleasure serving you ☺️")
  }
  ticketsContainer.removeChild(first)
  tickets.shift()
  book('others')
  
  
}, microseconds)

