export interface HeaderSection {
    getHeaderElement(headerText):string; // Missing type annotation for headerText in interface, not caught by eslint
}

class Header implements HeaderSection {
    getHeaderElement(headerText):string { // Missing type annotation for headerText in class, caught by eslint
        return `Header element: ${headerText}`;
    }
}

const header:Header = new Header();
console.log(header.getHeaderElement('Welcome'));