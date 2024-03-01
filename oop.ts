import inquirer from "inquirer";

class Student {
    name:string
    constructor(name:string){
        this.name = name
    }
}
class Person{
   object:Student[]=[]

   addStudent(obj:Student){
    this.object.push(obj)
   }
}
const persons = new Person()
const programStart = async(persons:Person) =>{
    do {
    let answer = await inquirer.prompt({
        type:"list",
        name:"user",
        message:"What you want to:",
        choices:["Project" , "Talk to Friend", ]
    })
    if(answer.user == "Project"){
        console.log("I have completed all my Typescript Project.... \n");
        
    }
    if(answer.user == "Talk to Friend"){
        let again = await inquirer.prompt({
            type:"input",
            name:"again",
            message:"Enter your Friend Name\n"
        })
        const name1 = persons.object.find(val => val.name == again.again)
        if(!name1){
            const newstudent = new Student(again.again)
            persons.addStudent(newstudent)
            console.log(`Hello ${newstudent.name } , Did you learn Typescript?\n`);
            console.log( persons.object)
        }
        if(name1){
            console.log(`Congratulation ${name1.name}, for completed all Typescript project....\n`);
            console.log( persons.object)
        } 
    }
    } while (true);   
}
programStart(persons)