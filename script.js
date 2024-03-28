document.addEventListener("DOMContentLoaded", function() {
  let dropdownBtn = document.querySelector(".dropbtn");
  let dropdownContent = document.querySelector(".dropdown-content");

  if (dropdownBtn && dropdownContent) { // Ensure dropdownBtn and dropdownContent are found
    dropdownBtn.addEventListener("click", function() {
      dropdownContent.classList.toggle("show");
    });

    window.addEventListener("click", function(event) {
      if (!event.target.matches(".dropbtn")) {
        let dropdowns = document.querySelectorAll(".dropdown-content");
        dropdowns.forEach(function(dropdown) {
          if (dropdown.classList.contains("show")) {
            dropdown.classList.remove("show");
          }
        });
      }
    });
  } else {
    console.error("Dropdown button or dropdown content not found.");
  }
});
document.getElementById('productForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var productImage = document.getElementById('productImage').value;
  var productTitle = document.getElementById('productTitle').value;
  var productPrice = document.getElementById('productPrice').value;

  var MyListItem = document.createElement('div');
  MyListItem.innerHTML = `
    <img src="${productImage}" alt="Product Image">
    <h2>${productTitle}</h2>
    <p>$${productPrice}</p>
  `;

  document.getElementById('MyList').appendChild(MyListItem);
  document.getElementById('productForm').reset();
});

document.getElementById("wishlist-btn").addEventListener("click", function() {
  document.getElementById("wishlist-modal").style.display = "block";
});

document.querySelector(".close").addEventListener("click", function() {
  document.getElementById("wishlist-modal").style.display = "none";
});

document.getElementById('productForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var productImage = document.getElementById('productImage').value;
  var productTitle = document.getElementById('productTitle').value;
  var productPrice = document.getElementById('productPrice').value;

  var MyListItem = document.createElement('div');
  MyListItem.innerHTML = `
    <img src="${productImage}" alt="Product Image">
    <h2>${productTitle}</h2>
    <p>$${productPrice}</p>
  `;

  document.getElementById('MyList').appendChild(MyListItem);
  document.getElementById('productForm').reset();
});

//wishlist///

document.getElementById('productForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var productImage = document.getElementById('productImage').value;
  var productTitle = document.getElementById('productTitle').value;
  var productPrice = document.getElementById('productPrice').value;

  var MyListItem = document.createElement('div');
  MyListItem.innerHTML = `
    <img src="${productImage}" alt="Product Image">
    <h2>${productTitle}</h2>
    <p>$${productPrice}</p>
  `;

  document.getElementById('MyList').appendChild(MyListItem);
  document.getElementById('productForm').reset();
});

document.getElementById("wishlist-btn").addEventListener("click", function() {
  document.getElementById("wishlist-modal").style.display = "block";
});

document.querySelector(".close").addEventListener("click", function() {
  document.getElementById("wishlist-modal").style.display = "none";
});

document.getElementById('productForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var productImage = document.getElementById('productImage').value;
  var productTitle = document.getElementById('productTitle').value;
  var productPrice = document.getElementById('productPrice').value;

  var MyListItem = document.createElement('div');
  MyListItem.innerHTML = `
    <img src="${productImage}" alt="Product Image">
    <h2>${productTitle}</h2>
    <p>$${productPrice}</p>
  `;

  document.getElementById('MyList').appendChild(MyListItem);
  document.getElementById('productForm').reset();
});


