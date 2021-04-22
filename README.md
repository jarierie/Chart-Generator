- The dataSet should be an array of objects, it won't work if its an object. (data.datasets.map is not a function).

push the dataSet object in to the array through dispatch.

then assign the dataSet array from the global state to a variable on your component.

- This is from the global state through useSelector
  const data = [{
  dataSet: getData.dataset
  labels: getData.labels
  }]

  ***

  April 20, 2021

  add the input boxes from the material UI
  add buttons to choose what type of Chart they want to create
  option to save the chart
