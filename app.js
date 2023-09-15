const { User } = require("./worker");

var accountCounter = 0;

async function main()
{
    try 
    {
        const randomUsername = Array(20)
        .fill(0)
        .map(() => Math.random().toString(36).substring(2, 3))
        .join("");
    
        const randomPassword = Array(12)
        .fill(0)
        .map(() => Math.random().toString(36).substring(2, 3))
        .join("");
    
        const randomEMail = Array(12)
        .fill(0)
        .map(() => Math.random().toString(36).substring(2, 3))
        .join("");
    
        let spammedAccount = new User(randomUsername, randomPassword, randomEMail);
        if(await spammedAccount.register()) {
            accountCounter++;
            console.log(`Successfully created account. [${accountCounter}]`);
            console.log(`-> ${spammedAccount.name} : ${spammedAccount.password} : ${spammedAccount.email}`);
        }
    } 
    catch (error) 
    {
        console.log("Failed while spamming & creating Accounts. Server is maybe offline.")
    }
}

setInterval(() => {
    main();
}, 5);
