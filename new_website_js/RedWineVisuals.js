d3.csv("../static/winequality-white.csv").then(function (wData){
    console.log(wData);
});  

  function handleVisualization() {
    const selectedOption = document.getElementById('visualization-dropdown').value;
    const visualizationContainer = document.getElementById('visualization-container');
    
    // Clear the existing visualization (if any)
    visualizationContainer.innerHTML = '';
    
    // Add your logic to create the desired visualization based on the selected option
    switch (selectedOption) {
      case 'visualization1':
        // Code for Visualization 1
        // Replace the following lines with your own code to create the visualization
        
        // Sample data for the bar chart
        const data = [
          { label: 'Category A', value: 10 },
          { label: 'Category B', value: 20 },
          { label: 'Category C', value: 15 },
          { label: 'Category D', value: 5 },
        ];
        
        // Set up the SVG container
        const svg = d3.select('#visualization-container')
          .append('svg')
          .attr('width', 400)
          .attr('height', 300);
        
        // Set up the scales
        const xScale = d3.scaleBand()
          .domain(data.map(d => d.label))
          .range([0, 300])
          .padding(0.1);
        
        const yScale = d3.scaleLinear()
          .domain([0, d3.max(data, d => d.value)])
          .range([0, 200]);
        
        // Create the bars
        svg.selectAll('rect')
          .data(data)
          .enter()
          .append('rect')
          .attr('x', d => xScale(d.label))
          .attr('y', d => 300 - yScale(d.value))
          .attr('width', xScale.bandwidth())
          .attr('height', d => yScale(d.value))
          .attr('fill', 'steelblue');
        
        break;
      case 'visualization2':
        // Code for Visualization 2
        // Replace the following line with your own code to create the visualization
        visualizationContainer.innerHTML = '<p>Visualization 2</p>';
        break;
      case 'visualization3':
        // Code for Visualization 3
        // Replace the following line with your own code to create the visualization
        visualizationContainer.innerHTML = '<p>Visualization 3</p>';
        break;
      case 'visualization4':
        // Code for Visualization 4
        // Replace the following line with your own code to create the visualization
        visualizationContainer.innerHTML = '<p>Visualization 4</p>';
        break;
      default:
        break;
    }
  }
  
  // Event listener for the dropdown change event
  document.getElementById('visualization-dropdown').addEventListener('change', handleVisualization);
  