// part 2
function Sum(a: number, b: number): number {
    return a + b;
}

console.log(Sum(1, 2));

// part 3
interface IPerson {
    name: string;
    age: number;
}

function Greeting(props: IPerson): void {
    console.log(`Hi ${props.name}!`);
}

let Person: IPerson = { name: "eve", age: 6 }
Greeting(Person);