import {GHE} from "../entry";

export default function plug() {
    const element = GHE("#content")
    element.innerHTML = '<p class="text-emty">No items have been added</p>'
}
