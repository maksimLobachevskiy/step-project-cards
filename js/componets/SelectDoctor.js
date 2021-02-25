export default class SelectDoctor {
    constructor(options, name, title) {
        this.options = options;
        this.name = name;
        this.title = title;
    }

    create() {
        const inputSelect = document.createElement("select");
        inputSelect.setAttribute("name", this.name);
        inputSelect.setAttribute("required", "required");
        inputSelect.className = "form-select mb-2";
        inputSelect.append(new Option(this.title, "", true, true));
        this.options.forEach((key) => {
            inputSelect.append(new Option(key));
        })
        const inputTitle = inputSelect.options[0];
        inputTitle.setAttribute("disabled", "disabled");
        inputTitle.setAttribute("hidden", "hidden");
        return inputSelect;
    }
}
