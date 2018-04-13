var circle = d3.selectAll("circle");
circle.style("fill", "steelblue");
circle.attr("r", 20);
circle.attr("cx", function() { return Math.random() * 720; });
