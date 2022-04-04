// Immediately Invoked Function Expression to limit access to our
// variables and prevent
((() => {

  d3.json('data/TACCdata.json').then(data => {

    let vis1 = firstVis()
      ('#vis-svg-1', data);
    
  })

})());
