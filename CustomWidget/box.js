(function() {
    let template = document.createElement("template");
    template.innerHTML = `
<div>
<table>
                <thead>
                <tr>
                    <th>name</th>
                    <th>height</th>
                    <th>place</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Monte Falco</td>
                    <td>1658</td>
                    <td>Parco Foreste Casentinesi</td>
                </tr>
                <tr>
                    <td>Monte Falterona</td>
                    <td>1654</td>
                    <td>Parco Foreste Casentinesi</td>
                </tr>
                </tbody>
</table>
</div>
		
    `;
    class Box extends HTMLElement {
        constructor() {
            super();
            let shadowRoot = this.attachShadow({mode: "open"});
            shadowRoot.appendChild(template.content.cloneNode(true));
            this.addEventListener("click", event => {
                var event = new Event("onClick");
                this.dispatchEvent(event);
            });
            this._props = {};
        }
        onCustomWidgetBeforeUpdate(changedProperties) {
            this._props = { ...this._props, ...changedProperties };
        }
        onCustomWidgetAfterUpdate(changedProperties) {
            if ("color" in changedProperties) {
                this.style["background-color"] = changedProperties["color"];
            }
            if ("opacity" in changedProperties) {
                this.style["opacity"] = changedProperties["opacity"];
            }
        }
    }
    customElements.define("com-sample-box", Box);
})();
