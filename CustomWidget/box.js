(function () {
    let template = document.createElement("template");
    template.innerHTML = `
<div id="main">
<table>
    <tbody id="tabla">
        <tr>
          
        
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
            let row = this._shadowRoot.getElementById("tabla").getElementsByTagName("tr").length
            let endcell = this._shadowRoot.getElementById("tabla").getElementsByTagName("tr")[rowIndex].childNodes.length;
            console.log(endcell);
            let newcell = this._shadowRoot.getElementById("tabla").getElementsByTagName("tr")[0].insertCell();
        }
        newHeader() {
            let endcell = this._shadowRoot.getElementById("tabla").getElementsByTagName("tr")[0].childNodes.length;
            console.log(endcell);
            let newcell = this._shadowRoot.getElementById("tabla").getElementsByTagName("tr")[rowIndex].createElement("th");

        }

        newRow() {
            
            let totalRows = this._shadowRoot.getElementById("tabla").getElementsByTagName("tr").length;
            console.log("totalrows" + totalRows);
            let row = this._shadowRoot.getElementById("tabla").insertRow();
            let endcell = this._shadowRoot.getElementById("tabla").getElementsByTagName("tr")[0].childNodes.length;
            console.log(endcell);
            let lastrow = this._shadowRoot.getElementById("tabla").getElementsByTagName("tr")[totalRows-1]

            for (let i = 0; i < endcell; i++) {
                
                let newcell = this._shadowRoot.getElementById("tabla").getElementsByTagName("tr")[lastrow].insertCell();
            }
        }
        selectRow(index) {
            let tableRow = this._shadowRoot.getElementById("tabla").getElementsByTagName("tr")[index];
            console.log(tableRow);
        }
        setCellText(rowIndex, cellIndex, text) {
            let cell = this._shadowRoot.getElementById("tabla").getElementsByTagName("tr")[rowIndex].getElementsByTagName("td")[cellIndex];
            cell.innerText = text
            console.log(cell);
        }
        numberOfRows() {
            let row = this._shadowRoot.getElementById("tabla").getElementsByTagName("tr").length;
            console.log(row);

        }

    }
    customElements.define("com-sample-box", Box);
})();
