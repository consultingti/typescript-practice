import {HasFormatter} from '../interfaces/HasFormatter.js'

export class Invoice implements HasFormatter {
    client: string;
    details: string
    amount: number
    
    constructor(cl:string, de: string, am: number)
    {
        this.client = cl
        this.details = de
        this.amount = am
    }

    format(){
        return `${this.client} owes $ ${this.details} for ${this.amount}`
    }
}