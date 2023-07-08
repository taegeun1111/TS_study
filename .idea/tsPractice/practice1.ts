//함수

function add1(num1:number, num2:number):number{
    return num1+num2;
}


//optional로 사용 가능 name이 있으면 name으로 출력, 아니면 world
function hello(name?:string){
    return `Hello, ${name||"world"}`;
}

function hello2(name = "world"){
    return `Hello, ${name}`;
}

const result1 = hello();
const result2 = hello();

function hello3(name:string, age?:number):string{
    if (age !== undefined){
        return `Hello, ${name}. You are ${age}.`;
    }else{
        return `Hello, ${name}`;
    }
}

console.log(hello3("Sam"));
console.log(hello3("Sam",30));

function add2(...nums:number[]){
    return nums.reduce((result,num) => result + num, 0)
}

add2(1,2,3);
add2(1,2,3,4,5,6,7,8,9,10);


interface User{
    name : string;
}

const Sam :User = {name:'Sam'}

function showName(this:User){
    console.log(this.name)
}

const a = showName.bind(Sam);
a();


