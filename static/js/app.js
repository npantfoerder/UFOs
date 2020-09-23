// Import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var body = d3.select('tbody');

function buildTable(data) {
    // Clear any existing data
    tbody.html('');

    // Loop through each object in the data
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append('tr');

        // Loop through each field in dataRow
        Object.values(dataRow).forEach((val) => {
            // Append a cell to the table row
            let cell = row.append('td')

            // Add the value to the cell
            cell.text(val);
        });
    });
}