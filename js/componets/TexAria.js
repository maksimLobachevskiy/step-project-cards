export default class TextArea {
    constructor({placeholder, isRequired}, className, attr) {
        this.placeholder = placeholder;
        this.isRequired = isRequired;
        this.className = className;
        this.attr = attr;
        this.self = document.createElement("textarea");
    }

    create() {
        this.self.placeholder = this.placeholder;
        this.self.required = this.isRequired;
        this.self.classList.add(this.className);
        this.self.setAttribute('name', this.attr);
        return this.self;
    }
}