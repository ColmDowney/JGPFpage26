interface user
{
    name: string;
    email: string;
    age: number;
}

function greetUser(user: user): string 
{
    return `Hello, ${user.name}! you are ${user.age} years old.`;
}

const user1: user = {
    name: "Alice",
    email: "alice@gmail.,com",
    age: 30
};

console.log(greetUser(user1));