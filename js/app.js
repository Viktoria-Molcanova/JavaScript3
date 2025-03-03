function loadReviews() {
  const productList = document.getElementById('productList');
  productList.innerHTML = '';
  for (let i = 0; i < localStorage.length; i++) {
    const productName = localStorage.key(i);
    const listItem = document.createElement('li');
    listItem.textContent = productName;
    listItem.onclick = () => showReviews(productName);
    productList.appendChild(listItem);
  }
}

function addReview() {
  const productName = document.getElementById('productName').value;
  const reviewText = document.getElementById('reviewText').value;
  const reviews = localStorage.getItem(productName) ? JSON.parse(localStorage.getItem(productName)) : [];
  reviews.push(reviewText);
  localStorage.setItem(productName, JSON.stringify(reviews));
  loadReviews();
}

function showReviews(productName) {
  const reviews = JSON.parse(localStorage.getItem(productName));
  alert(reviews.join('\n'));
}

loadReviews();
