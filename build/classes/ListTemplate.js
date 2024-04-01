"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTemplate = void 0;
class ListTemplate {
    constructor(lista) {
        this.lista = lista;
    }
    render(item, heading, position) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        const pitem = document.createElement('p');
        h4.innerHTML = heading;
        pitem.innerHTML = item.format();
        li.append(h4);
        li.append(pitem);
        if (position === 'start') {
            this.lista.prepend(li);
        }
        else {
            this.lista.append(li);
        }
    }
}
exports.ListTemplate = ListTemplate;
