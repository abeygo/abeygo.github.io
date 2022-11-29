(function () {
    let template = document.createElement("template");
    template.innerHTML = `
<div>
<table>
    <tbody id="tabla">
        <tr>
            <th>Texte</th>
            <th>Date de publication</th>
            <th>Publié par</th>
            <th>Date de publication</th>
        </tr>
    </tbody>

</table>
</div>
<style>
table {
  border: 1px solid black;
  background-color:blue;
}
th, td {
    border: 1px solid black;
    background-color:blue;
    width:30px
    height:10px
  }

</style>
		
    `;
    class Box extends HTMLElement {
        constructor() {
            super();
            this._shadowRoot = this.attachShadow({ mode: "open" });
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
        newCell(rowIndex) {
            let endcell=this._shadowRoot.getElementById("tabla").getElementsByTagName("tr")[rowIndex].childNodes.length;
            console.log(endcell);
            let newcell= this._shadowRoot.getElementById("tabla").getElementsByTagName("tr")[rowIndex].insertCell(endcell/2);
            
        }
        
        newRow() {
            let tabla = this._shadowRoot.getElementById("tabla");
            let row = tabla.insertRow();
        }
        selectRow(index) {
            let tableRow = this._shadowRoot.getElementById("tabla").getElementsByTagName("tr")[index];
            console.log(tableRow);
                }
        setCellText(rowIndex,cellIndex, text) {
                let cell=this._shadowRoot.getElementById("tabla").getElementsByTagName("tr")[rowIndex].getElementsByTagName("tr")[cellIndex];
                let innertext=text
                console.log(innertext);
                console.log(cell);   
                cell.innerHTML=innertext                 
                }

    }
    customElements.define("com-sample-box", Box);
})();
