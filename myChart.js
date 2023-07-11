d3.json("visualization/qualityRedWineDF.json").then(data => {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new myChart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(d => d.quality), // Quality scores
            datasets: [{
                label: '# of Wines',
                data: data.map(d => d.frequency), // Frequency of each quality score
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}).catch(error => console.error('Error:', error));

d3.json("visualization/qualityWhiteWineDF.json").then(data => {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart2 = new myChart2(ctx, {
        type: 'bar',
        data: {
            labels: data.map(d => d.quality), // Quality scores
            datasets: [{
                label: '# of Wines',
                data: data.map(d => d.frequency), // Frequency of each quality score
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}).catch(error => console.error('Error:', error));
