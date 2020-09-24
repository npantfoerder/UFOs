// Import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select('tbody');

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
};

function handleClick() {
    // Get the datetime value from the filter
    let date = d3.select('#datetime').property('value');

    let filteredData = tableData;

    // Check if a date was entered and filter the data using that date
    if (date) {
        // Keep only the rows where the 'datetime' value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will be the original data
    buildTable(filteredData);
};

// Add an event to listen for
d3.selectAll('#filter-btn').on('click', handleClick);

// Build the table when the page loads
buildTable(tableData);
