// select all elements with class "itemss"
const itemss = document.querySelectorAll('.itemss');

// select all elements with class "item"
const items = document.querySelectorAll('.item');

// add event listener to each element with class "itemss"
itemss.forEach((x, i) => {
  x.addEventListener('click', () => {

    // remove "clicked" class from all elements with class "itemss"
    itemss.forEach((item)=>{
        item.classList.remove('clicked')
    })

    // add "clicked" class to the clicked element
    x.classList.add('clicked');

    // show the corresponding element with class "item" and hide others
    items.forEach((y, j) => {
      if (i === j) {
        y.classList.add('display');
        y.classList.remove('hidden');
      } else {
        y.classList.remove('display');
        y.classList.add('hidden');
      }
    });
  });
});


// select the element with class "spacecrafts"
const spacecrafts = document.querySelector(".spacecrafts");

// fetch data from the API and display it
fetch('https://isro.vercel.app/api/spacecrafts')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    data?.spacecrafts?.forEach((item, index) => {
        const div = document.createElement("div");
        div.textContent = `${item.id}. ${item.name}`;
        div.classList.add(index % 2 === 0 ? "even" : "odd");
        spacecrafts.appendChild(div);
    });
  })
  .catch(error => {
    console.error(error);
  });


// select the element with class "launchers"
const launchers = document.querySelector(".launchers");

// fetch data from the API and display it
fetch('https://isro.vercel.app/api/launchers')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    data?.launchers?.forEach((item, index) => {
        const div = document.createElement("div");
        div.textContent = `${item.id}`;
        div.classList.add(index % 2 === 0 ? "even" : "odd");
        launchers.appendChild(div);
    });
  })
  .catch(error => {
    console.error(error);
  });


  const csItems = document.querySelector(".csItems");
  var info = [];
  fetch('https://isro.vercel.app/api/customer_satellites')
    .then(response => response.json())
    .then(data => {
      data?.customer_satellites?.forEach((item, index) => {
        info.push(item);
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${item.id}</td><td>${item.country}</td><td>${item.launch_date}</td><td>${item.mass}</td><td>${item.launcher}</td>`;
        tr.classList.add(index % 2 === 0 ? "even" : "odd");
        csItems.appendChild(tr);
      });
      console.log(info);
    })
    .catch(error => {
      console.error(error);
    });
  
  const search = document.querySelector('.search');
  search.addEventListener('input', ()=>{
      const filteredInfo = info?.filter((item)=>{ 
          return item.country.toLowerCase() == search.value.toLowerCase();
      });
      csItems.innerHTML = '';
      filteredInfo.forEach((item, index) => {
          const tr = document.createElement("tr");
          tr.innerHTML = `<td>${item.id}</td><td>${item.country}</td><td>${item.launch_date}</td><td>${item.mass}</td><td>${item.launcher}</td>`;
          tr.classList.add(index % 2 === 0 ? "even" : "odd");
          csItems.appendChild(tr);
      });
  });
  


  const centers = document.querySelector(".centers");
  var info2 = [];
  fetch('https://isro.vercel.app/api/centres')
    .then(response => response.json())
    .then(data => {
      data?.centres?.forEach((item, index) => {
        info2.push(item);
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${item.id}</td><td>${item.name}</td><td>${item.Place}</td><td>${item.State}</td>`;
        tr.classList.add(index % 2 === 0 ? "even" : "odd");
        centers.appendChild(tr);
      });
    })
    .catch(error => {
      console.error(error);
    });
  
  const search2 = document.querySelector('.search2');
  search2.addEventListener('input', ()=>{
      const filteredInfo2 = info2?.filter((item)=>{ 
          return item.State.toLowerCase() == search2.value.toLowerCase();
      });
      centers.innerHTML = '';
      filteredInfo2.forEach((item, index) => {
          const tr = document.createElement("tr");
          tr.innerHTML = `<td>${item.id}</td><td>${item.name}</td><td>${item.Place}</td><td>${item.State}</td>`;
          tr.classList.add(index % 2 === 0 ? "even" : "odd");
          centers.appendChild(tr);
      });
  });
