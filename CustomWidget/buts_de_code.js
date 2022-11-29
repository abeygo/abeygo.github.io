/* var x = this._shadowRoot.getElementsByTagName("tr");
            var txt = "";
            var i;
            for (i = 0; i < x.length; i++) {
                txt = txt + "The index of Row " + (i + 1) + " is: " + x[i].rowIndex;
                console.log(txt); */
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

                newTable(arrayTable){
                    var table = document.createElement("Table");
                    table.border = "1";
             
                    //Get the count of columns.
                    var columnCount = arrayTable[0].length;
             
                    //Add the header row.
                    var row = table.insertRow(-1);
                    for (var i = 0; i < columnCount; i++) {
                        var headerCell = document.createElement("th");
                        headerCell.innerHTML = arrayTable[0][i];
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