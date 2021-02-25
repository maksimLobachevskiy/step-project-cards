export default class Select {
    constructor(optionsArr, className, value) {
        this.options = optionsArr;
        this.self = document.createElement("select");
        this.className = className;
        this.value = value;
    };

    create() {
        this.options.forEach(opt => {
            const optionNode = document.createElement("option");
            optionNode.textContent = opt;
            this.self.classList.add(this.className);
            this.self.append(optionNode);
        });

        return this.self;
    };
};