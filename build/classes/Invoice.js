"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
class Invoice {
    constructor(cl, de, am) {
        this.client = cl;
        this.details = de;
        this.amount = am;
    }
    format() {
        return `${this.client} owes $ ${this.details} for ${this.amount}`;
    }
}
exports.Invoice = Invoice;
