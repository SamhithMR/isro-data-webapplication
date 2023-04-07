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