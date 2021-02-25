export default class Input {
    constructor({type, placeholder, isRequired}, className, attr) {
        this.type = type;
        this.placeholder = placeholder;
        this.isRequired = isRequired;
        this.className = className;
        this.attr = attr;
        this.self = document.createElement("input");
    };

    create() {
        this.self.type = this.type;
        if (this.isUsed(this.placeholder)) {
            this.self.placeholder = this.placeholder;
            this.self.required = this.isRequired;
        }
        this.self.classList.add(this.className);
        this.self.setAttribute('name', this.attr);
        return this.self;

};
    isUsed(prop) {
        return !(prop === null || prop === undefined || prop === "");
    };
};