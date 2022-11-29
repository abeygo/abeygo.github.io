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
        otraLinea(length, text) {
            let tabla = this._shadowRoot.getElementById("tabla");
                let row = tabla.insertRow();
                    row.insertCell(length)
                    let cell = row.childNodes[i]
                    cell.innerHTML = text
                }
            


        }
        generateTableHead() {
            var x = this._shadowRoot.getElementsByTagName("tr");
            var txt = "";
            var i;
            for (i = 0; i < x.length; i++) {
                txt = txt + "The index of Row " + (i + 1) + " is: " + x[i].rowIndex;
                console.log(txt);
                // Select rows from table_id
                // Construct csv
                /* var csv = [];
               
                var csv_string = csv.join('\n');
                // Download it
                var filename = 'export_' + new Date().toLocaleDateString() + '.csv';
                var link = document.createElement('a');
                link.style.display = 'none';
                link.setAttribute('target', '_blank');
                link.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv_string));
                link.setAttribute('download', filename);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link); */
            }
        }

    }
    customElements.define("com-sample-box", Box);
})();
