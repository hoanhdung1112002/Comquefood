// Menu__btn
const menuBtn = document.querySelector('.menu__btn');
const navBar = document.querySelector('.navbar')
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navBar.classList.toggle('active');
})

const btns = document.querySelectorAll('.nav__btn');
const slides = document.querySelectorAll('.video__slider');
const contents = document.querySelectorAll('.home__content');

var sliderNav = function(manual) {
    btns.forEach((btn) => {
        btn.classList.remove('active')
    })
    slides.forEach((btn) => {
        btn.classList.remove('active')
    })
    contents.forEach((content) => {
        content.classList.remove('active')
    })
    btns[manual].classList.add('active');
    slides[manual].classList.add('active');
    contents[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        sliderNav(i);
    });
});

// Product
// Modal Cart
const cartBtn = document.querySelectorAll('button');
cartBtn.forEach(function(btn, index) {
  btn.addEventListener('click', function(event) {
    var btnItem = event.target;
    var product = btnItem.parentElement;
    var productImg = product.querySelector('img').src;
    var productName = product.querySelector('.product__item-name').innerText;
    var productPrice = product.querySelector('.product__item-price-current').innerText;
    console.log(productImg,productPrice, productName)
    addCart(productImg,productPrice, productName);

  })
})
  // Add cart
  function addCart(productImg,productPrice, productName) {
    var addTr = document.createElement('tr');
    var cartItem = document.querySelectorAll('tbody tr');
    for (var i = 0; i < cartItem.length; i++) {
      var Nameproduct = document.querySelectorAll('.modal__cart-info-name');
      if (Nameproduct[i].innerHTML === productName) {
        alert('Sản phẩm đã tồn tại...');
        return;
      }
    }
    var trContent = ' <tr>\n'+
    '                <td>\n'+
    '                  <div class="modal__cart-info">\n'+
    '                    <img src="'+productImg+'" alt="" class="modal__cart-info-img">\n'+
    '                    <div class="modal__cart-info-content">\n'+
    '                      <p class="modal__cart-info-name">'+productName+'</p>\n'+
    '                    </div>\n'+
    '                  </div>\n'+
    '                </td>\n'+
    '                <td>\n'+
    '                  <span class="product__item-price-current">'+productPrice+'</span>\n'+
    '                </td>\n'+
    '                <td>\n'+
    '                  <input type="number" class="modal__cart-quantily" min="0" value="1">\n'+
    '                </td>\n'+
    '                <td>\n'+
    '                  <button class="modal__cart-active">Xoá</button>\n'+
    '                </td>\n'+
    '              </tr>';
    addTr.innerHTML = trContent;
    console.log(trContent);
    var cartTable = document.querySelector('tbody');
    cartTable.append(addTr);
    deleteCart();
  }
// Delete cart

function deleteCart(){
  var cartItem = document.querySelectorAll("tbody tr")
  // console.log(cartItem);
  for (var i=0;i<cartItem.length;i++){
      var productT = document.querySelectorAll(".modal__cart-active")
     productT[i].addEventListener("click",function(event) {
        var cartDelete = event.target;
          var cartitemR = cartDelete.parentElement.parentElement;
          cartitemR.remove();
        //  console.log(cartitemR)
    })
  }
}

// Cart Close Open
var modalBtn = document.querySelector('.fa-cart-plus');
var modal = document.querySelector('.modal__over-lay ');
var modalClose = document.querySelector('.fa-times');
var modalMobile = document.querySelector('.content__cart')

modalBtn.addEventListener('click', function(e) {
  modal.classList.add('modal__active');
})
modalClose.addEventListener('click', function() {
  modal.classList.remove('modal__active');
})
modalMobile.addEventListener('click', function() {
  modal.classList.add('modal__active');
})

// Filter: Lọc sản phẩm
const name_item = document.querySelectorAll('.product__item-name');
const search_item = document.getElementById('search__product');
const product__item_element = document.querySelectorAll('.product__item-element');
const filter__btn = document.querySelectorAll('#filter__button .filter__btn');
const filter__price = document.querySelectorAll('.product__item-price-current')

// Search Item
search_item.addEventListener('keyup', searchItem);
function searchItem() {
  let valueItem = search_item.value.toLowerCase();
  Array.from(product__item_element).forEach(function(ele) {
    let nameItem = ele.querySelector('.product__item-name').textContent;
    if (nameItem.toLowerCase().indexOf(valueItem) !== -1) {
      ele.style.display = 'block';
    }else {
      ele.style.display = 'none';
    }
  })
}

// Filter
Array.from(filter__btn).forEach(function(element) {
  element.addEventListener('click', function(event) {
    for(let i = 0; i < filter__btn.length; i++) {
      filter__btn[i].classList.remove('active__color');
    }
    this.classList.add('active__color');
    let name__filter = element.dataset.filter;
  
  Array.from(product__item_element).forEach(function(ele) {
    if (ele.dataset.item === name__filter || name__filter === 'all__product') {
      ele.style.display = 'block';
    }else {
      ele.style.display = 'none';
    }
    
    })
  })
})