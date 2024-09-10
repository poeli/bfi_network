fetch('data/bacterial_fungal_interactions.vega.json')
  .then(response => response.json())
  .then(data => {
    // Do something with the data
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

// // Load the JSON data
// const data = {
//     "nodes": [
//       {
//         "name": "Abiotrophia",
//         "count": 4,
//         "index": 123,
//         "group": "Bacteria"
//       },
//       {
//         "name": "Acetitomaculum",
//         "count": 1,
//         "index": 124,
//         "group": "Bacteria"
//       },
//       {
//         "name": "Acetobacterium",
//         "count": 1,
//         "index": 125,
//         "group": "Bacteria"
//       }
//     ],
//     "links": [
//       {
//         "source": 123,
//         "target": 124,
//         "found_in_16s": "Yes",
//         "found_in_prev": "Yes"
//       },
//       {
//         "source": 123,
//         "target": 125,
//         "found_in_16s": "Yes",
//         "found_in_prev": "Yes"
//       }
//     ]
//   };
  
//   // Define the text to filter on
//   const filterText = "Abiotrophia";
  
//   // Filter the nodes array
//   const filteredNodes = data.nodes.filter(node => node.name.includes(filterText));
  
//   // Create a map of original node indices to filtered node indices
//   const nodeIndexMap = {};
//   filteredNodes.forEach((node, i) => nodeIndexMap[node.index] = i);
  
//   // Update the links array to reference the filtered nodes
//   const filteredLinks = data.links.filter(link => {
//     const sourceIndex = nodeIndexMap[link.source];
//     const targetIndex = nodeIndexMap[link.target];
//     return sourceIndex !== undefined && targetIndex !== undefined;
//   }).map(link => ({
//     ...link,
//     source: nodeIndexMap[link.source],
//     target: nodeIndexMap[link.target]
//   }));
  
//   // Create the filtered data object
//   const filteredData = {
//     nodes: filteredNodes,
//     links: filteredLinks
//   };
  
//   // Output the filtered data
//   console.log(filteredData);