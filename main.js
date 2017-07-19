document.querySelector('#submit').addEventListener('click', () => {
  document.querySelector('.main-content').innerHTML = ""
  fetch(`https://crossorigin.me/http://www.recipepuppy.com/api/?q=${document.querySelector('#searchBox').value}`)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log(response.status)
          return
        }
        response.json().then(function(data) {
          var dataArray = data.results
          dataArray.forEach(function(dataArray) {
            document.querySelector('.main-content').innerHTML +=
              `
              <div class="search-results">
                <h2>${dataArray.title}</h2>
                <img src="${dataArray.thumbnail}" alt="">
              </div>
              `
          })
        })
      }
    )
  })
