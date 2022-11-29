(function () {
    let template = document.createElement("template");
    template.innerHTML = `
<div id="main">
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
        newHeader() {
            let endcell=this._shadowRoot.getElementById("tabla").getElementsByTagName("tr")[0].childNodes.length;
            console.log(endcell);
            let newcell= this._shadowRoot.getElementById("tabla").getElementsByTagName("tr")[rowIndex].createElement("th");
            
        }
        newTable(arrayTable){
            var table = document.createElement("Table");
            table.border = "1";
     
            //Get the count of columns.
            var columnCount = arrayTable[0].length;
     
            //Add the header row.
            var row = table.insertRow(-1);
            for (var i = 0; i < columnCount; i++) {
                var headerCell = document.createElement("th");
                headerCell.innerHTML = customers[0][i];
                row.appendChild(headerCell);
            }
     
            //Add the data rows.
            for (var i = 1; i < arrayTable.length; i++) {
                row = table.insertRow(-1);
                for (var j = 0; j < columnCount; j++) {
                    var cell = row.insertCell(-1);
                    cell.innerHTML = arrayTable[i][j];
                }
            
     
            var dvTable = this._shadowRoot.getElementById("main");
            dvTable.innerHTML = "";
            dvTable.appendChild(table);
        }
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
                let row=this._shadowRoot.getElementById("tabla").getElementsByTagName("tr")[rowIndex].getElementsByTagName("td")[cellIndex];
                let innertext=text
                console.log(innertext);
                console.log(cell);   
                cell.innerHTML=innertext                 
                }
        numberOfRows(){}

    }
    customElements.define("com-sample-box", Box);
})();
