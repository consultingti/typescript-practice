"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Payment_js_1 = require("./classes/Payment.js");
const Invoice_js_1 = require("./classes/Invoice.js");
const ListTemplate_js_1 = require("./classes/ListTemplate.js");
console.log("Index.ts");
let docOne;
let docTwo;
docOne = new Invoice_js_1.Invoice("julio", "something", 200);
docTwo = new Payment_js_1.Payment("juliana", "something else", 300);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
const person = {
    name: 'Shaun',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
const anotherPerson = (_person) => {
    console.log("your name is ", _person.name);
};
console.log(person);
anotherPerson(person);
const form = document.querySelector('.new-item-form');
if (form) {
    // Here it goes something
    console.log(form.children);
    const type = document.querySelector('#type');
    const tofrom = document.querySelector('#tofrom');
    const details = document.querySelector('#details');
    const amount = document.querySelector('#amount');
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // to prevent the reload of the page
        let doc;
        let lista = new ListTemplate_js_1.ListTemplate(document.querySelector('.item-list'));
        if (type.value === 'invoice') {
            doc = new Invoice_js_1.Invoice(tofrom.value, details.value, amount.valueAsNumber);
        }
        else {
            doc = new Payment_js_1.Payment(tofrom.value, details.value, amount.valueAsNumber);
        }
        lista.render(doc, type.value, "start");
        console.log(doc);
        // console.log(type.value, tofrom.value, details.value, amount.valueAsNumber)
    });
}
