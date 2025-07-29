let username = prompt("Enter your username(admin/user):");
let password = prompt("Enter your password: ");
let role, securitylevel;
if ((username=== "admin"|| username==="user")&& password==="1234")
{
    role = username;
    securitylevel=username==="admin" ?"high":"low";
    alert(`Login successful! Role: ${role}, Security Level: ${securitylevel}`);
} else {
    alert("Invalid credentials! Access denied. ");
    throw new Error("program stopped due to invalid login. ");

}



let name = prompt("what is your name?");
let age = parseInt(prompt("what is your age?"));

let coffeetype= prompt("what type of coffee would you like?(espresso, latte, cappuccino): "). toLowerCase();
let quantity = parseInt(prompt("how many cups would you like?"));

let pricepercup;
if(coffeetype==="espresso")
{
    pricepercup=2.5;
} else if(coffeetype==="latte")
{
    pricepercup=3.5;
} else if(coffeetype==="cappuccino")
{
    pricepercup=4;

}
else 
{
    alert("invalid coffee type. ");
    throw new Error("program stop due to invalid coffee selection.");

}




let originaltotal=pricepercup*quantity;

let discount=0;

if(age<18 || age >60)
{
    discount= originaltotal*0.10
}

let finaltotal= originaltotal-discount;




let split = parseInt(prompt("how many people are splitting the bills?(1, 2, or 3):"));
if(![1, 2, 3].includes(split))
{
    alert ("invalid number of people. Defaulting to 1.");
    split=1;
}


let tippercent= parseInt(prompt("Enter tip precentage(0, 5, 10, or 15):"));
if(![0, 5, 10, 15].includes(tippercent))
{
    alert("invalid tip precentage. Defaulting to 0.");
    tippercent=0;
}


let tipamount=finaltotal*(tippercent/100);
let totalwithtip=finaltotal+tipamount;
let perperson=totalwithtip/split;




alert(
    `Hello ${name}!\n`+
    `you ordered ${quantity} ${coffeetype}(s).\n`+ `original total: $${originaltotal.toFixed(2)}\n`+`Discount: $${discount.toFixed(2)}\n`+`tip:$${tipamount.toFixed(2)}\n`+`total with tip: $${totalwithtip.toFixed(2)}\n`+`split between ${split} person(s):$${perperson.toFixed(2)} each`
);


