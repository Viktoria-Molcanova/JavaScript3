document.getElementById('addReview').addEventListener('click', function() {
  const productName = document.getElementById('productName').value;
  const reviewText = document.getElementById('reviewText').value;

  if (productName && reviewText) {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
    if (!reviews[productName]) {
      reviews[productName] = [];
    }
    reviews[productName].push(reviewText);
    localStorage.setItem('reviews', JSON.stringify(reviews));
    displayReviews();
    document.getElementById('productName').value = '';
    document.getElementById('reviewText').value = '';
  } else {
    alert('Пожалуйста, заполните все поля.');
  }
});

function displayReviews() {
  const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
  const reviewsList = document.getElementById('reviewsList');
  reviewsList.innerHTML = '';

  for (const product in reviews) {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';

    reviews[product].forEach((review, index) => {
      const reviewDiv = document.createElement('div');
      reviewDiv.className = 'review';
      reviewDiv.innerHTML = `${review} <button onclick="deleteReview('${product}', ${index})">Удалить</button>`;
      productDiv.appendChild(reviewDiv);
    });

    reviewsList.appendChild(productDiv);
  }
}

function deleteReview(product, index) {
  const reviews = JSON.parse(localStorage.getItem('reviews'));
  reviews[product].splice(index, 1);
  if (reviews[product].length === 0) {
    delete reviews[product];
  }
  localStorage.setItem('reviews', JSON.stringify(reviews));
  displayReviews();
}


window.onload = displayReviews;
