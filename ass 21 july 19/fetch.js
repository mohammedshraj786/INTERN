const url = 'https://data.covid19india.org/state_district_wise.json';
function fetchData(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error');
          }
          return response.json();
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }
//   function printData(data) {
//     document.getElementById('result').textContent = JSON.stringify(data, null, 2);
//   }
//   fetchData(url)
//     .then((data) => {
//       printData(data);
//     })
//     .catch((error) => {
//       console.error('Error', error);
//     });
