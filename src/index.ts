 import {Payment} from "./classes/Payment.js"
 import { Invoice } from "./classes/Invoice.js"
 import { ListTemplate } from "./classes/ListTemplate.js"
 import { HasFormatter } from "./interfaces/HasFormatter.js"

console.log("Index.ts")

let docOne : HasFormatter
let docTwo : HasFormatter

docOne = new Invoice("julio","something",200)
docTwo = new Payment("juliana","something else", 300) 

let docs: HasFormatter[] = []
docs.push(docOne)
docs.push(docTwo)

console.log(docs)

interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const person: IsPerson = {
    name: 'Shaun',
    age: 30,
    speak(text: string): void {
        console.log(text)
    },
    spend(amount: number): number {
        console.log('I spent', amount)
        return amount
    }

}

const anotherPerson = (_person: IsPerson) => {
    console.log("your name is ", _person.name)
}
console.log(person)
anotherPerson(person)

const form = document.querySelector('.new-item-form') as HTMLFormElement

if (form) {
    // Here it goes something
    console.log(form.children)

    const type = document.querySelector('#type') as HTMLSelectElement
    const tofrom = document.querySelector('#tofrom') as HTMLInputElement
    const details = document.querySelector('#details') as HTMLInputElement
    const amount = document.querySelector('#amount') as HTMLInputElement

    form.addEventListener('submit', (e: Event) => {
        e.preventDefault() // to prevent the reload of the page

       let doc: HasFormatter
       let lista: ListTemplate = new ListTemplate(document.querySelector('.item-list') as HTMLUListElement)

       if (type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
       } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
       }
       lista.render(doc,type.value,"start")
       console.log(doc)

        // console.log(type.value, tofrom.value, details.value, amount.valueAsNumber)
    })

}