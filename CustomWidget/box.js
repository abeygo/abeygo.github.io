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
        newCell() {
            let newcell = this._shadowRoot.getElementById("tabla").getElementsByTagName("tr")[0].insertCell();
        }
        newHeader() {
            let endcell = this._shadowRoot.getElementById("tabla").getElementsByTagName("tr")[0].childNodes.length;
            console.log(endcell);
            let newcell = this._shadowRoot.getElementById("tabla").getElementsByTagName("tr")[rowIndex].createElement("th");

        }

        newRow() {


            let totalRows = this._shadowRoot.getElementById("tabla").getElementsByTagName("tr").length;
            let row = this._shadowRoot.getElementById("tabla").insertRow();
            let endcell = this._shadowRoot.getElementById("tabla").getElementsByTagName("tr")[0].childNodes.length;

            for (let i = 0; i < endcell - 1; i++) {

                let newcell = this._shadowRoot.getElementById("tabla").getElementsByTagName("tr")[totalRows].insertCell();
            }
        }
        selectRow(index) {
            let tableRow = this._shadowRoot.getElementById("tabla").getElementsByTagName("tr")[index];
            console.log(tableRow);
        }
        setCellText(rowIndex, cellIndex, text) {
            let cell = this._shadowRoot.getElementById("tabla").getElementsByTagName("tr")[rowIndex].getElementsByTagName("td")[cellIndex];
            cell.innerHTML = text
            console.log(cell);
        }
        numberOfRows() {
            let row = this._shadowRoot.getElementById("tabla").getElementsByTagName("tr").length;
            console.log(row);

        }
        tableToCSV(){
            let csv_data = [];
            let rows = this._shadowRoot.getElementById("tabla").getElementsByTagName("tr");
            for (var i = 0; i < rows.length; i++){
                let cols = rows[i].querySelectorAll('td');
                let csvrow=[];
                for (var j = 0; j < cols.length; j++) {
                    csvrow.push(cols[j].innerHTML);
                }
                csv_data.push(csvrow.join(";"));
            }
            csv_data = csv_data.join('\n');
            console.log(csv_data);
            let CSVFile = new Blob([csv_data], {
                type: "text/csv"
            });
 
            var temp_link = document.createElement('a');
 
            temp_link.download = "Box.csv";
            var url = window.URL.createObjectURL(CSVFile);
            temp_link.href = url;
 
            temp_link.style.display = "none";
            document.body.appendChild(temp_link);
 
            temp_link.click();
            document.body.removeChild(temp_link);
        }
        downloadCSVFile() {
 
            let CSVFile = new Blob([], {
                type: "text/csv"
            });
 
            var temp_link = document.createElement('a');
 
            temp_link.download = "Box.csv";
            var url = window.URL.createObjectURL(CSVFile);
            temp_link.href = url;
 
            temp_link.style.display = "none";
            document.body.appendChild(temp_link);
 
            temp_link.click();
            document.body.removeChild(temp_link);
        }






    }
    customElements.define("com-sample-box", Box);
})();
