document.addEventListener('DOMContentLoaded', () => {
    const data = [
        { name: 'A', value: 30 },
        { name: 'B', value: 80 },
        { name: 'C', value: 45 },
        { name: 'D', value: 60 },
        { name: 'E', value: 20 },
        { name: 'F', value: 90 },
        { name: 'G', value: 55 }
    ];

    const svg = d3.select('#bar-chart');
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = +svg.attr('width') - margin.left - margin.right;
    const height = +svg.attr('height') - margin.top - margin.bottom;

    const x = d3.scaleBand()
        .domain(data.map(d => d.name))
        .range([0, width])
        .padding(0.1);

    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)])
        .nice()
        .range([height, 0]);

    const chart = svg.append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    chart.append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x));

    chart.append('g')
        .attr('class', 'y-axis')
        .call(d3.axisLeft(y));

    const tooltip = d3.select('#tooltip');

    chart.selectAll('.bar')
        .data(data)
        .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', d => x(d.name))
        .attr('y', d => y(d.value))
        .attr('width', x.bandwidth())
        .attr('height', d => height - y(d.value))
        .on('mouseover', function(event, d) {
            tooltip.style('opacity', 1)
                .html(`Name: ${d.name}<br>Value: ${d.value}`)
                .style('left', `${event.pageX + 5}px`)
                .style('top', `${event.pageY - 28}px`);
        })
        .on('mouseout', function() {
            tooltip.style('opacity', 0);
        });
});
