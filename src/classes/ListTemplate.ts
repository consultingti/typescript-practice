import { HasFormatter } from "../interfaces/HasFormatter";

export class ListTemplate{
    constructor (private lista: HTMLUListElement)
    {
    
    }

    render(item: HasFormatter, heading: string, position: 'start' | 'end'){
        const li = document.createElement('li')
        const h4 = document.createElement('h4') 
        const pitem = document.createElement('p')
        
        h4.innerHTML = heading
        pitem.innerHTML = item.format()

        li.append(h4)
        li.append(pitem)

        if (position === 'start'){
            this.lista.prepend(li)
        }
        else{
            this.lista.append(li)
        }
    }
}