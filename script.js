const itemss = document.querySelectorAll('.itemss');
const items = document.querySelectorAll('.item');

itemss.forEach((x, i) => {
  x.addEventListener('click', () => {
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


const spacecrafts = document.querySelector(".spacecrafts");
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


const launchers = document.querySelector(".launchers");
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
        info.push(item)
        const div = document.createElement("div");
        div.textContent = `${item.id} ${item.country} ${item.launch_date} ${item.mass} ${item.launcher}`;
        div.classList.add(index % 2 === 0 ? "even" : "odd");
        csItems.appendChild(div);
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
        const div = document.createElement("div");
        div.textContent = `${item.id} ${item.country} ${item.launch_date} ${item.mass} ${item.launcher}`;
        div.classList.add(index % 2 === 0 ? "even" : "odd");
        csItems.appendChild(div);
    });
});


const center = document.querySelector(".center");
var info2 = [];
fetch('https://isro.vercel.app/api/centres')
  .then(response => response.json())
  .then(data => {
      data?.centres?.forEach((item, index) => {
        info2.push(item)
        const div = document.createElement("div");
        div.textContent = `${item.id} ${item.name} ${item.Place} ${item.State} `;
        div.classList.add(index % 2 === 0 ? "even" : "odd");
        center.appendChild(div);
    });
    console.log(info2);
  })
  .catch(error => {
    console.error(error);
  });

const search2 = document.querySelector('.search2');
search2.addEventListener('input', ()=>{
    const filteredInfo2 = info2?.filter((item)=>{ 
        return item.State.toLowerCase() == search2.value.toLowerCase();
    });
    center.innerHTML = '';
    filteredInfo2.forEach((item, index) => {
        const div = document.createElement("div");
        div.textContent = `${item.id} ${item.name} ${item.Place} ${item.State}`;
        div.classList.add(index % 2 === 0 ? "even" : "odd");
        center.appendChild(div);
    });
});
