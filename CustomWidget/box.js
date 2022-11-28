(function () {
    let template = document.createElement("template");
    template.innerHTML = `
<div>
<table id="tabla">
    <tr>
        <th>Texte</th>
        <th>Date de publication</th>
        <th>Publié par</th>
        <th>Date de publication</th>
   </tr>

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
        otraLinea(length,comment) {
            let tabla = this._shadowRoot.getElementById("tabla");
            for (let j = 0;j<length; j++) {
                let row = tabla.insertRow();
                for (let i = 0; i < 6; i++) {
                    row.insertCell(i)
                    let cell=row.childNodes[i]
                    cell.innerHTML=comment
                }
            }


        }
        generateTableHead(table_id, separator = ',') {
            // Select rows from table_id
            var rows = document.querySelectorAll('table#' + table_id + ' tr');
            // Construct csv
            var csv = [];
            for (var i = 0; i < rows.length; i++) {
                var row = [], cols = rows[i].querySelectorAll('td, th');
                for (var j = 0; j < cols.length; j++) {
                    // Clean innertext to remove multiple spaces and jumpline (break csv)
                    var data = cols[j].innerText.replace(/(\r\n|\n|\r)/gm, '').replace(/(\s\s)/gm, ' ')
                    // Escape double-quote with double-double-quote (see https://stackoverflow.com/questions/17808511/properly-escape-a-double-quote-in-csv)
                    data = data.replace(/"/g, '""');
                    // Push escaped string
                    row.push('"' + data + '"');
                }
                csv.push(row.join(separator));
            }
            var csv_string = csv.join('\n');
            // Download it
            var filename = 'export_' + table_id + '_' + new Date().toLocaleDateString() + '.csv';
            var link = document.createElement('a');
            link.style.display = 'none';
            link.setAttribute('target', '_blank');
            link.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv_string));
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

    }
    customElements.define("com-sample-box", Box);
})();
