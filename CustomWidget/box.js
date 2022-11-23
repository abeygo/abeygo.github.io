(function() {
    let template = document.createElement("template");
    template.innerHTML = `
<div>
<table id="tabla">
   
</table>
</div>
<style>
table, td, tr {
  border: 1px solid black;
  background-color:blue;
}
</style>
		
    `;
    class Box extends HTMLElement {
        constructor() {
            super();
            this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(template.content.cloneNode(true));
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
	otraLinea (){
	    let tabla = this._shadowRoot.getElementById("tabla").getElementsByTagName("tbody")[0];
	    tabla.insertRow();
	}
	generateTableHead(tabla) {
  	    let thead = table.createTHead();
            let row = thead.insertRow();
	}
    }
    customElements.define("com-sample-box", Box);
})();
