console.log("let's build some charts!")

// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart', 'timeline']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawAllocationChart);
google.charts.setOnLoadCallback(drawSemestersChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.


function drawChart() {

	// Create the data table.
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Score Range');
	data.addColumn('number', 'Games');
	data.addRows([
	  ['0-100', 2],
	  ['100-200', 5],
	  ['200-300', 3]
	]);

	// Set chart options
	var options = {'title':'Bowling Score Incidences',
	               'width':400,
	               'height':300};

	// Instantiate and draw our chart, passing in some options.
	var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
	chart.draw(data, options);
}

function drawSemestersChart() {

	// Create the data table.
	var data = new google.visualization.arrayToDataTable(
		[
			['Semester', 'Credits', {role: 'style'}],
	    	['Fall 2018', 0, '#114789'],
	    	['Spring 2019', 0, '#8faeff'],
	    	['Fall 2019', 1, '#114789'],
	    	['Spring 2020', 1, '#8faeff'],
	    	['Fall 2020', 3, '#114789'],
	    	['Spring 2021', 3, '#8faeff'],
	    	['Fall 2021', 3, '#114789'],
	    	['Spring 2022', 3, '#8faeff']
    	]
    );

	// data.addColumn({ type: 'string', id: 'Semester' });
 //    data.addColumn({ type: 'number', id: 'Credits' });


    // data.addRows([
    // 	['Fall 2018', 0],
    // 	['Spring 2019', 0],
    // 	['Fall 2019', 1],
    // 	['Spring 2020', 1],
    // 	['Fall 2020', 3],
    // 	['Spring 2021', 3],
    // 	['Fall 2021', 3],
    // 	['Spring 2022', 3]
    // ]);

	// Set chart options
	var options = {'title':'Credits per semester',
	               'width':400,
	               'height':300};

	// Instantiate and draw our chart, passing in some options.
	var chart = new google.visualization.BarChart(document.getElementById('semesters'));
	chart.draw(data, options);
}

function drawAllocationChart() {

	// Create the data table.
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Expense');
	data.addColumn('number', 'Cents');
	data.addRows([
	  ['Administrative Costs', 4],
	  ['Fundraising', 16],
	  ['Youth Programs', 36],
	  ['Adult Programs', 44]
	]);

	// Set chart options
	var options = {'title':'Each Dollar Donated Goes To',
	               'width':400,
	               'height':300,
	               'pieHole': 0.5,
	           	   'colors': ['#8AD1C2', '#9F8AD1', '#D18A99', '#BCD18A']};

	// Instantiate and draw our chart, passing in some options.
	var chart = new google.visualization.PieChart(document.getElementById('allocation'));
	chart.draw(data, options);
}


