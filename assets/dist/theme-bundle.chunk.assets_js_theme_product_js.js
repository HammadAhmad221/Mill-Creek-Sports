"use strict";
(self["webpackChunkbigcommerce_surfup"] = self["webpackChunkbigcommerce_surfup"] || []).push([["assets_js_theme_product_js"],{

/***/ "./assets/js/theme/common/utils/safe-string.js":
/*!*****************************************************!*\
  !*** ./assets/js/theme/common/utils/safe-string.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   safeString: () => (/* binding */ safeString)
/* harmony export */ });
/**
 * This function parses HTML entities in strings
 * @param str: String
 * @returns String
*/
var safeString = function safeString(str) {
  var d = new DOMParser();
  return d.parseFromString(str, 'text/html').body.textContent;
};

/***/ }),

/***/ "./assets/js/theme/halothemes/haloBundleProducts.js":
/*!**********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloBundleProducts.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _haloCalculateFreeShipping__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./haloCalculateFreeShipping */ "./assets/js/theme/halothemes/haloCalculateFreeShipping.js");


function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  var relate_tab = "#related-product";
  var $bundle = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-bundle-products');
  showBundle();
  jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('click', '.halo-toggle-options', function (event) {
    event.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-toggle-options').not(jquery__WEBPACK_IMPORTED_MODULE_2___default()(this)).removeClass('is-focus');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-detail-options').not(jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).next('.halo-detail-options')).removeClass('is-open');
    if (!jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).next('.halo-detail-options').hasClass('is-open')) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).addClass('is-focus');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).next('.halo-detail-options').addClass('is-open');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).next('.halo-detail-options').removeClass('is-open');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).removeClass('is-focus');
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('click', '.halo-option-close', function (event) {
    event.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-detail-options').removeClass('is-open');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-toggle-options').removeClass('is-focus');
  });
  jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('click', function (event) {
    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-detail-options').hasClass('is-open')) {
      if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(event.target).closest('.halo-detail-options').length === 0 && jquery__WEBPACK_IMPORTED_MODULE_2___default()(event.target).closest('.halo-toggle-options').length === 0) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-detail-options').removeClass('is-open');
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-toggle-options').removeClass('is-focus');
      }
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('change', '.halo-detail-checkbox', function () {
    var id = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr('id').replace('fbt_product', '');
    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).is(':checked') == false) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + id + '"]').removeClass('isChecked');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + id + '"]').addClass('isChecked');
    }
    totalPrice();
  });
  jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('click', '#halo-addAll', function (event) {
    var $form = jquery__WEBPACK_IMPORTED_MODULE_2___default()('form', jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-bundle-products'));
    var arrPro = new Array();
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-detail-checkbox').each(function (i, val) {
      if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(val).is(':checked')) {
        arrPro.push(i);
      }
    });
    var check = false;
    if (arrPro.length > 0) {
      check = checkProduct($form, arrPro);
    }
    if (check) {
      if (arrPro.length > 0) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-bundle-products .loadingOverlay').show();
        addToCart($form, 0, arrPro);
      }
    } else {
      var errorMessage = 'Please make sure all options have been filled in.';
      if (errorMessage) {
        // Strip the HTML from the error message
        var tmp = document.createElement('DIV');
        tmp.innerHTML = errorMessage;
        return alert(tmp.textContent || tmp.innerText);
      }
    }
    event.preventDefault();
  });
  function showBundle() {
    var options = {
      template: {
        item: 'halothemes/products/halo-bundle-products-tmp',
        options: 'halothemes/products/halo-bundle-products-options'
      }
    };
    var prodBundleId = [];
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-bundle-products').removeClass('halo-block-disable');
    firstItem();
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-bundle-products .bundle-product-right').append('<div class="halo-product-total"><div class="total-price"><span class="text">Total price:</span><span class="price"></span></div><a class="button button--tertiary halo-product-total-button" id="halo-addAll">Add All To Bag</a></div>');
    jquery__WEBPACK_IMPORTED_MODULE_2___default().each(context.productCustomFields, function (index, obj) {
      if (obj.name == '__bundleid') {
        prodBundleId = JSON.parse('[' + obj.value + ']');
      }
    });
    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-bundle-products').length > 0 && prodBundleId.length == 0) {
      var num = 0;
      var list = [];
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(relate_tab + ' .card').each(function (i, val) {
        list.push({
          i: i,
          data: ""
        });
        var pId = jquery__WEBPACK_IMPORTED_MODULE_2___default()(val).data('product-id');
        if (pId != undefined) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.product.getById(pId, options, function (err, response) {
            if (err) {
              return false;
            }
            list.forEach(function (element) {
              if (element.i == i) {
                element.data = response;
              }
            });
            num++;
            if (num == jquery__WEBPACK_IMPORTED_MODULE_2___default()(relate_tab + ' .card').length) {
              showList(list);
            }
          });
        }
      });
    } else if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-bundle-products').length > 0 && prodBundleId.length > 0) {
      var num = 0;
      var list = [];
      jquery__WEBPACK_IMPORTED_MODULE_2___default().each(prodBundleId, function (i, val) {
        list.push({
          i: i,
          data: ""
        });
        var pId = prodBundleId[i];
        if (pId != undefined) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.product.getById(pId, options, function (err, response) {
            if (err) {
              return false;
            }
            list.forEach(function (element) {
              if (element.i == i) {
                element.data = response;
              }
            });
            num++;
            if (num == prodBundleId.length) {
              showList(list);
            }
          });
        }
      });
    }
  }
  function firstItem() {
    var firstItem = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-bundle-products .halo-product-list .halo-product-item:first-child'),
      pId = firstItem.data('product-id'),
      $form = firstItem.find('form'),
      hasOptions = $form.find('[data-fbt-option-change]').length,
      hasDefaultOptions = $form.find('[data-default]').length;
    if (hasDefaultOptions && hasOptions) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.productAttributes.optionChange(pId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
        var attributesData = response.data || {};
        var attributesContent = response.content || {};
        updateProductAttributes($form, attributesData);
        if (hasDefaultOptions) {
          updateView($form, attributesData, attributesContent);
        } else {
          updateDefaultAttributesForOOS(attributesData);
        }
      });
    }
  }
  function showList(list) {
    list.forEach(function (element) {
      var response = element.data;
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-bundle-products .halo-product-list').append(response.item);
      if (response.options.trim() != "") {
        var pId = jquery__WEBPACK_IMPORTED_MODULE_2___default()(response.item).data('product-id');
        var $form = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-bundle-products .halo-product-list .halo-product-item[data-product-id="' + pId + '"] form');
        $form.append(response.options);
        var $productOptionsElement = jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-fbt-option-change]', $form);
        var hasOptions = $productOptionsElement.html().trim().length;
        var hasDefaultOptions = jquery__WEBPACK_IMPORTED_MODULE_2___default()(response.options).find('[data-default]').length;
        if (hasDefaultOptions && hasOptions) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.productAttributes.optionChange(pId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
            var attributesData = response.data || {};
            var attributesContent = response.content || {};
            updateProductAttributes($form, attributesData);
            if (hasDefaultOptions) {
              updateView($form, attributesData, attributesContent);
            } else {
              updateDefaultAttributesForOOS(attributesData);
            }
          });
        }
        setProductVariant();
      }
    });
    productOptions();
    showSlickSlider();
    totalPrice();
  }
  function showSlickSlider() {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-bundle-products .halo-product-list').slick({
      dots: true,
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      mobileFirst: true,
      infinite: false,
      nextArrow: "<div class='slick-next slick-arrow'>next</div>",
      prevArrow: "<div class='slick-prev slick-arrow'>prev</div>",
      responsive: [{
        breakpoint: 1440,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 4,
          dots: false,
          arrows: true
        }
      }, {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          arrows: true
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }]
    });
  }
  function checkProduct(form, arrPro) {
    var check = true;
    for (var i = 0, len = arrPro.length; i < len; i++) {
      var k = arrPro[i];
      var $form = jquery__WEBPACK_IMPORTED_MODULE_2___default()(form[k]);
      if ($form.find('[data-fbt-option-change]').length) {
        check = checkBeforeAdd($form);
        if (check == false) return false;
      }
    }
    return check;
  }
  function checkBeforeAdd($attributes) {
    var check = true;
    $attributes.find('input:text, input:password, input:file, textarea').each(function () {
      if (!jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).prop('required')) {} else {
        if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).val()) {} else {
          jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).focus();
          check = false;
        }
      }
    });
    $attributes.find('select').each(function () {
      if (!jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).prop('required')) {} else {
        if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).val()) {} else {
          jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).focus();
          check = false;
        }
      }
    });
    var att = "";
    $attributes.find('input:radio, input:checkbox').each(function () {
      if (att != jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr("name")) {
        att = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr("name");
        if (!jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).prop('required')) {
          if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr("type") == "checkbox") {
            if (jquery__WEBPACK_IMPORTED_MODULE_2___default()("[name='" + att + "']:checked").val()) {}
          }
          if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr("type") == "radio") {
            if (jquery__WEBPACK_IMPORTED_MODULE_2___default()("[name='" + att + "']:checked").val()) {}
          }
        } else {
          if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr("type") == "checkbox") {
            if (jquery__WEBPACK_IMPORTED_MODULE_2___default()("[name='" + att + "']:checked").val()) {} else {
              check = false;
            }
          }
          if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr("type") == "radio") {
            if (jquery__WEBPACK_IMPORTED_MODULE_2___default()("[name='" + att + "']:checked").val()) {} else {
              check = false;
            }
          }
        }
      }
    });
    return check;
  }
  function addToCart(form, i, arrP) {
    if (i >= arrP.length) {
      window.location = '/cart.php';
      return;
    }
    if (window.FormData === undefined) {
      return;
    }
    var k = arrP[i];
    // Add item to cart
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.itemAdd(filterEmptyFilesFromForm(new FormData(form[k])), function (err, response) {
      var errorMessage = err || response.data.error;
      if (errorMessage) {
        // Strip the HTML from the error message
        var tmp = document.createElement('DIV');
        tmp.innerHTML = errorMessage;
        alert(tmp.textContent || tmp.innerText);
      }
      i++;
      if (i >= arrP.length) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-bundle-products .loadingOverlay').hide();
        updateCartContent(response.data.cart_item.id);
        return;
      }
      addToCart(form, i, arrP);
    });
  }
  function updateCartContent(cartItemId, onComplete) {
    var $body = jquery__WEBPACK_IMPORTED_MODULE_2___default()('body');
    var loadingClass = 'is-loading';
    var $cartDropdown = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#cart-preview-dropdown');
    var $cartLoading = jquery__WEBPACK_IMPORTED_MODULE_2___default()('<div class="loadingOverlay"></div>');
    var $sideCartBlock = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#sideBlock_cart');
    setTimeout(function () {
      $sideCartBlock.show();
      $body.toggleClass('openCartSidebar is-side-block');
      $sideCartBlock.toggleClass('is-open');
    }, 500);
    $cartDropdown.addClass(loadingClass).html($cartLoading);
    $cartLoading.show();
    getCartContent(cartItemId, function (err, response) {
      if (err) {
        return;
      }
      $cartDropdown.removeClass(loadingClass).html(response);
      $cartLoading.hide();
      var quantity = jquery__WEBPACK_IMPORTED_MODULE_2___default()(response).find('[data-cart-quantity]').data('cartQuantity') || 0;
      $body.trigger('cart-quantity-update', quantity);
      (0,_haloCalculateFreeShipping__WEBPACK_IMPORTED_MODULE_4__["default"])(context);
      if (onComplete) {
        onComplete(response);
      }
    });
  }
  function getCartContent(cartItemId, onComplete) {
    var options = {
      template: 'common/cart-preview'
    };
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.getContent(options, onComplete);
  }
  function totalPrice() {
    var total = 0,
      pos = 0,
      symbol = "$";
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item.isChecked').each(function (i, val) {
      var currency, price, s;
      if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(val).find('.price-section .price.price--withTax').length) {
        currency = jquery__WEBPACK_IMPORTED_MODULE_2___default()(val).find('.price-section .price.price--withTax').text();
      } else {
        currency = jquery__WEBPACK_IMPORTED_MODULE_2___default()(val).find('.price-section .price.price--withoutTax').text();
      }
      price = parseFloat(currency.replace(/[^0-9.-]+/g, ""));
      s = currency.replace(parseFloat(price).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","), "");
      if (isNaN(parseFloat(s.replace(/[^0-9.-]+/g, "")))) {
        symbol = s;
      }
      if (currency.indexOf(symbol) != -1) {
        pos = currency.indexOf(symbol);
      }
      total = total + price;
    });
    total = parseFloat(total).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (pos == 0) {
      total = symbol + total;
    } else {
      total = total + symbol;
    }
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-total .price').html(total);
  }
  function productOptions() {
    totalPrice();
    var $form = jquery__WEBPACK_IMPORTED_MODULE_2___default()('form', jquery__WEBPACK_IMPORTED_MODULE_2___default()(document));
    var $productOptionsElement = jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-fbt-option-change]', $form);
    jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('change', '#halo-bundle-products form [data-fbt-option-change]', function (event) {
      productOptionsChanged(event);
      setProductVariant(event);
    });
  }
  function setProductVariant() {
    var unsatisfiedRequiredFields = [];
    var options = [];
    jquery__WEBPACK_IMPORTED_MODULE_2___default().each(jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-fbt-option-change] [data-product-attribute]'), function (index, value) {
      var optionLabel = value.children[0].innerText;
      var optionTitle = optionLabel.split(':')[0].trim();
      var required = optionLabel.toLowerCase().includes('required');
      var type = value.getAttribute('data-product-attribute');
      if ((type === 'input-file' || type === 'input-text' || type === 'input-number') && value.querySelector('input').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'textarea' && value.querySelector('textarea').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'date') {
        var isSatisfied = Array.from(value.querySelectorAll('select')).every(function (select) {
          return select.selectedIndex !== 0;
        });
        if (isSatisfied) {
          var dateString = Array.from(value.querySelectorAll('select')).map(function (x) {
            return x.value;
          }).join('-');
          options.push(optionTitle + ":" + dateString);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-select') {
        var select = value.querySelector('select');
        var selectedIndex = select.selectedIndex;
        if (selectedIndex !== 0) {
          options.push(optionTitle + ":" + select.options[selectedIndex].innerText);
          jquery__WEBPACK_IMPORTED_MODULE_2___default()(value.children[0]).find('[data-option-value]').text(select.options[selectedIndex].innerText);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-rectangle' || type === 'set-radio' || type === 'swatch' || type === 'input-checkbox' || type === 'product-list') {
        var checked = value.querySelector(':checked');
        if (checked) {
          if (type === 'set-rectangle' || type === 'set-radio' || type === 'product-list') {
            var label = checked.labels[0].innerText;
            if (label) {
              options.push(optionTitle + ":" + label);
              jquery__WEBPACK_IMPORTED_MODULE_2___default()(value.children[0]).find('[data-option-value]').text(label);
            }
          }
          if (type === 'swatch') {
            var _label = checked.labels[0].children[0];
            if (_label) {
              options.push(optionTitle + ":" + _label.title);
              jquery__WEBPACK_IMPORTED_MODULE_2___default()(value.children[0]).find('[data-option-value]').text(_label.title);
            }
          }
          if (type === 'input-checkbox') {
            options.push(optionTitle + ":Yes");
          }
          return;
        }
        if (type === 'input-checkbox') {
          options.push(optionTitle + ":No");
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
    });
  }
  function productOptionsChanged(event) {
    var $changedOption = jquery__WEBPACK_IMPORTED_MODULE_2___default()(event.target);
    var $form = $changedOption.parents('form');
    var productId = jquery__WEBPACK_IMPORTED_MODULE_2___default()('[name="product_id"]', $form).val();
    if ($changedOption.attr('type') === 'file' || window.FormData === undefined) {
      return;
    }
    if ($changedOption.attr('id') === 'fbt_product' + productId) {
      return;
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.productAttributes.optionChange(productId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
      var productAttributesData = response.data || {};
      var productAttributesContent = response.content || {};
      showProductImage(productId, productAttributesData);
      updateProductAttributes($form, productAttributesData);
      updateView($form, productAttributesData, productAttributesContent);
      totalPrice();
    });
    return false;
  }
  function updateProductAttributes($scope, data) {
    var behavior = data.out_of_stock_behavior;
    var inStockIds = data.in_stock_attributes;
    var outOfStockMessage = " (" + data.out_of_stock_message + ")";
    if (behavior !== 'hide_option' && behavior !== 'label_option') {
      return;
    }
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-attribute-value]', $scope).each(function (i, attribute) {
      var $attribute = jquery__WEBPACK_IMPORTED_MODULE_2___default()(attribute);
      var attrId = parseInt($attribute.data('productAttributeValue'), 10);
      if (inStockIds.indexOf(attrId) !== -1) {
        enableAttribute($attribute, behavior, outOfStockMessage);
      } else {
        disableAttribute($attribute, behavior, outOfStockMessage);
      }
    });
  }
  function disableAttribute($attribute, behavior, outOfStockMessage) {
    if (getAttributeType($attribute) === 'set-select') {
      return disableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.hide();
    } else {
      $attribute.addClass('unavailable');
    }
  }
  function disableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    var $select = $attribute.parent();
    if (behavior === 'hide_option') {
      $attribute.toggleOption(false);
      if ($select.val() === $attribute.attr('value')) {
        $select[0].selectedIndex = 0;
      }
    } else {
      $attribute.attr('disabled', 'disabled');
      $attribute.html($attribute.html().replace(outOfStockMessage, '') + outOfStockMessage);
    }
  }
  function enableAttribute($attribute, behavior, outOfStockMessage) {
    if (getAttributeType($attribute) === 'set-select') {
      return enableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.show();
    } else {
      $attribute.removeClass('unavailable');
    }
  }
  function enableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    if (behavior === 'hide_option') {
      $attribute.toggleOption(true);
    } else {
      $attribute.prop('disabled', false);
      $attribute.html($attribute.html().replace(outOfStockMessage, ''));
    }
  }
  function getAttributeType($attribute) {
    var $parent = $attribute.closest('[data-product-attribute]');
    return $parent ? $parent.data('productAttribute') : null;
  }
  function showProductImage(productId, data) {
    if (lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1___default()(data.image)) {
      var mainImageUrl = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].tools.image.getSrc(data.image.data, context.themeSettings.productgallery_size);
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + productId + '"]').find('img').attr({
        'srcset': mainImageUrl,
        'data-srcset': jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr('srcset')
      });
    } else {
      var _mainImageUrl = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + productId + '"]').find('img').attr('data-srcset');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + productId + '"]').find('img').attr({
        'srcset': _mainImageUrl,
        'data-srcset': jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr('srcset')
      });
    }
  }
  function updateView($scope, data, content) {
    if (content === void 0) {
      content = null;
    }
    var viewModel = getViewModel($scope);
    showMessageBox(data.stock_message || data.purchasing_message);
    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default()(data.price)) {
      updatePriceView(viewModel, data.price);
    }
    var productId = jquery__WEBPACK_IMPORTED_MODULE_2___default()('[name="product_id"]', $scope).val();
    if (!data.purchasable || !data.instock) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + productId + '"]').removeClass('isChecked');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#fbt_product' + productId).prop('checked', false).prop('disabled', true);
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + productId + '"]').removeClass('hasOptions--selected');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + productId + '"]').addClass('isChecked');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#fbt_product' + productId).prop('checked', true).prop('disabled', false);
      if ($scope.find('[data-fbt-option-change]').length) {
        var check = checkBeforeAdd($scope);
        if (check == true) {
          jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + productId + '"]').addClass('hasOptions--selected');
        }
      }
    }
  }
  function updateDefaultAttributesForOOS($scope, data) {
    var productId = jquery__WEBPACK_IMPORTED_MODULE_2___default()('[name="product_id"]', $scope).val();
    if (!data.purchasable || !data.instock) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + productId + '"]').removeClass('isChecked');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#fbt_product' + productId).prop('checked', false).prop('disabled', true);
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + productId + '"]').removeClass('hasOptions--selected');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + productId + '"]').addClass('isChecked');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#fbt_product' + productId).prop('checked', true).prop('disabled', false);
      if ($scope.find('[data-fbt-option-change]').length) {
        var check = checkBeforeAdd($scope);
        if (check == true) {
          jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + productId + '"]').addClass('hasOptions--selected');
        }
      }
    }
  }
  function getViewModel($scope) {
    return {
      $priceWithTax: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-price-with-tax]', $scope),
      $priceWithoutTax: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-price-without-tax]', $scope),
      rrpWithTax: {
        $div: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.rrp-price--withTax', $scope),
        $span: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-rrp-with-tax]', $scope)
      },
      rrpWithoutTax: {
        $div: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.rrp-price--withoutTax', $scope),
        $span: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-rrp-price-without-tax]', $scope)
      },
      nonSaleWithTax: {
        $div: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.non-sale-price--withTax', $scope),
        $span: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-non-sale-price-with-tax]', $scope)
      },
      nonSaleWithoutTax: {
        $div: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.non-sale-price--withoutTax', $scope),
        $span: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-non-sale-price-without-tax]', $scope)
      },
      priceSaved: {
        $div: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.price-section--saving', $scope),
        $span: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-price-saved]', $scope)
      },
      priceNowLabel: {
        $span: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.price-now-label', $scope)
      },
      priceLabel: {
        $span: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.price-label', $scope)
      },
      $weight: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.productView-info [data-product-weight]', $scope),
      $increments: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.form-field--increments :input', $scope),
      $addToCart: jquery__WEBPACK_IMPORTED_MODULE_2___default()('#form-action-addToCart', $scope),
      $wishlistVariation: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-wishlist-add] [name="variation_id"]', $scope),
      stock: {
        $container: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.form-field--stock', $scope),
        $input: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-stock]', $scope)
      },
      $sku: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-sku]'),
      $upc: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-upc]'),
      quantity: {
        $text: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.incrementTotal', $scope),
        $input: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[name=qty\\[\\]]', $scope)
      },
      $bulkPricing: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.productView-info-bulkPricing', $scope)
    };
  }
  function showMessageBox(message) {
    var $messageBox = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.productAttributes-message');
    if (message) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.alertBox-message', $messageBox).text(message);
      $messageBox.show();
    } else {
      $messageBox.hide();
    }
  }
  function clearPricingNotFound(viewModel) {
    viewModel.rrpWithTax.$div.hide();
    viewModel.rrpWithoutTax.$div.hide();
    viewModel.nonSaleWithTax.$div.hide();
    viewModel.nonSaleWithoutTax.$div.hide();
    viewModel.priceSaved.$div.hide();
    viewModel.priceNowLabel.$span.hide();
    viewModel.priceLabel.$span.hide();
  }
  function updatePriceView(viewModel, price) {
    clearPricingNotFound(viewModel);
    if (price.with_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithTax.html(price.with_tax.formatted);
    }
    if (price.without_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithoutTax.html(price.without_tax.formatted);
    }
    if (price.rrp_with_tax) {
      viewModel.rrpWithTax.$div.show();
      viewModel.rrpWithTax.$span.html(price.rrp_with_tax.formatted);
    }
    if (price.rrp_without_tax) {
      viewModel.rrpWithoutTax.$div.show();
      viewModel.rrpWithoutTax.$span.html(price.rrp_without_tax.formatted);
    }
    if (price.saved) {
      viewModel.priceSaved.$div.show();
      viewModel.priceSaved.$span.html(price.saved.formatted);
    }
    if (price.non_sale_price_with_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithTax.$span.html(price.non_sale_price_with_tax.formatted);
    }
    if (price.non_sale_price_without_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithoutTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithoutTax.$span.html(price.non_sale_price_without_tax.formatted);
    }
  }
  function filterEmptyFilesFromForm(formData) {
    try {
      for (var _iterator = _createForOfIteratorHelperLoose(formData), _step; !(_step = _iterator()).done;) {
        var _step$value = _step.value,
          key = _step$value[0],
          val = _step$value[1];
        if (val instanceof File && !val.name && !val.size) {
          formData["delete"](key);
        }
      }
    } catch (e) {
      console.error(e);
    }
    return formData;
  }
}

/***/ }),

/***/ "./assets/js/theme/halothemes/haloPrevNextProduct.js":
/*!***********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloPrevNextProduct.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  if (context.themeSettings.halo_prev_next_product == true) {
    var token = context.token;
    var curCode = $('.body').data('currency-code');
    if ($(window).width() > 1024) {
      if ($('.productView-nextProducts').length) {
        var getProduct = function getProduct(arr) {
          return fetch('/graphql', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
              query: "\n                        query MyQuery {\n                            site {\n                                products (entityIds: [" + arr + "]) {\n                                  edges {\n                                    product: node {\n                                      ...ProductFields\n                                      }\n                                    }\n                                }\n                                currency (currencyCode: " + curCode + ") {\n                                    display {\n                                        symbol\n                                        symbolPlacement\n                                        decimalToken\n                                        thousandsToken\n                                        decimalPlaces\n                                    }\n                                }\n                            }\n                        }\n                        fragment ProductFields on Product {\n                            id\n                            entityId\n                            name\n                            path\n                            defaultImage {\n                                img70px: url(width: 70)\n                                altText\n                            }\n                            prices {\n                                priceRange {\n                                    min {\n                                        ...MoneyFields\n                                    }\n                                    max {\n                                        ...MoneyFields\n                                    }\n                                }\n                                retailPrice {\n                                    ...MoneyFields\n                                }\n                                basePrice {\n                                    ...MoneyFields\n                                }\n                                price {\n                                    ...MoneyFields\n                                }\n                            }\n                        }\n                        fragment MoneyFields on Money {\n                            value\n                            currencyCode\n                        }\n                    "
            })
          }).then(function (res) {
            return res.json();
          }).then(function (res) {
            return res.data;
          });
        };
        var formatMoney = function formatMoney(n, c, d, t) {
          var c = isNaN(c = Math.abs(c)) ? 2 : c,
            d = d == undefined ? "." : d,
            t = t == undefined ? "," : t,
            s = n < 0 ? "-" : "",
            i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
            j = (j = i.length) > 3 ? j % 3 : 0;
          return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
        };
        var renderProduct = function renderProduct(product, curDisplay) {
          if (product != undefined) {
            $.each(product, function (index, element) {
              var item = element.product,
                symbol = curDisplay.symbol,
                symbolPlacement = curDisplay.symbolPlacement.toLowerCase(),
                decimalToken = curDisplay.decimalToken,
                decimalPlaces = curDisplay.decimalPlaces,
                thousandsToken = curDisplay.thousandsToken;
              var title, price;
              if ($('.body').hasClass('is-login') || context.themeSettings.restrict_to_login !== true) {
                if (item.prices.priceRange.min.value < item.prices.priceRange.max.value && context.themeSettings.price_ranges) {
                  var priceMin = (symbolPlacement == "left" ? symbol : "") + formatMoney(item.prices.priceRange.min.value, decimalPlaces, decimalToken, thousandsToken) + (symbolPlacement != "left" ? symbol : "");
                  var priceMax = (symbolPlacement == "left" ? symbol : "") + formatMoney(item.prices.priceRange.max.value, decimalPlaces, decimalToken, thousandsToken) + (symbolPlacement != "left" ? symbol : "");
                  price = '<div class="price-section price-section--withoutTax non-sale-price--withoutTax price-none" style="display: none;">\
                                                <span data-product-non-sale-price-without-tax="" class="price price--non-sale"></span>\
                                            </div>\
                                            <div class="price-section price-section--withoutTax">\
                                                <span data-product-price-without-tax="" class="price price--withoutTax">' + priceMin + ' - ' + priceMax + '</span>\
                                            </div>';
                } else {
                  var priceDef = (symbolPlacement == "left" ? symbol : "") + formatMoney(item.prices.price.value, decimalPlaces, decimalToken, thousandsToken) + (symbolPlacement != "left" ? symbol : "");
                  if (item.prices.retailPrice == null) {
                    if (item.prices.basePrice.value > item.prices.price.value) {
                      var priceBas = (symbolPlacement == "left" ? symbol : "") + formatMoney(item.prices.basePrice.value, decimalPlaces, decimalToken, thousandsToken) + (symbolPlacement != "left" ? symbol : "");
                      price = '<div class="price-section price-section--withoutTax non-sale-price--withoutTax">\
                                                        <span data-product-non-sale-price-without-tax="" class="price price--non-sale">' + priceBas + '</span>\
                                                    </div>\
                                                    <div class="price-section price-section--withoutTax">\
                                                        <span data-product-price-without-tax="" class="price price--withoutTax">' + priceDef + '</span>\
                                                    </div>';
                    } else {
                      price = '<div class="price-section price-section--withoutTax non-sale-price--withoutTax price-none" style="display: none;">\
                                                        <span data-product-non-sale-price-without-tax="" class="price price--non-sale"></span>\
                                                    </div>\
                                                    <div class="price-section price-section--withoutTax">\
                                                        <span data-product-price-without-tax="" class="price price--withoutTax">' + priceDef + '</span>\
                                                    </div>';
                    }
                  } else {
                    if (item.prices.retailPrice.value > item.prices.price.value) {
                      var priceRet = (symbolPlacement == "left" ? symbol : "") + formatMoney(item.prices.retailPrice.value, decimalPlaces, decimalToken, thousandsToken) + (symbolPlacement != "left" ? symbol : "");
                      price = '<div class="price-section price-section--withoutTax non-sale-price--withoutTax">\
                                                        <span data-product-non-sale-price-without-tax="" class="price price--non-sale">' + priceRet + '</span>\
                                                    </div>\
                                                    <div class="price-section price-section--withoutTax">\
                                                        <span data-product-price-without-tax="" class="price price--withoutTax">' + priceDef + '</span>\
                                                    </div>';
                    } else {
                      price = '<div class="price-section price-section--withoutTax non-sale-price--withoutTax price-none" style="display: none;">\
                                                        <span data-product-non-sale-price-without-tax="" class="price price--non-sale"></span>\
                                                    </div>\
                                                    <div class="price-section price-section--withoutTax">\
                                                        <span data-product-price-without-tax="" class="price price--withoutTax">' + priceDef + '</span>\
                                                    </div>';
                    }
                  }
                }
              } else {
                price = '<p translate>Log in for pricing</p>';
              }
              var productTitle;
              if (context.themeSettings.card_title_type == 'clamp') {
                productTitle = '<a href="' + item.path + '" class="clamp" style="-webkit-box-orient: vertical; -webkit-line-clamp: 1;" aria-label="Link Go To This Product">' + item.name + '</a>';
              } else {
                productTitle = '<a href="' + item.path + '" class="clamp" aria-label="Link Go To This Product">' + item.name + '</a>';
              }
              var html_card = '<div class="card card-prevNext" data-product-id="' + item.entityId + '">\
                                                <div class="card-prevNext-image">\
                                                    <a class="card-link" href="' + item.path + '" aria-label="Link Go To This Product">\
                                                        <div class="card-img-container">\
                                                            <img class="card-image" src="' + item.defaultImage.img70px + '" alt="' + item.defaultImage.altText + '" title="' + item.defaultImage.altText + '" />\
                                                        </div>\
                                                    </a>\
                                                </div>\
                                                <div class="card-content">\
                                                    <h4 class="card-title">' + productTitle + '</h4>\
                                                    <div class="card-price" data-test-info-type="price">' + price + '</div>\
                                                </div>\
                                            </div>';
              if (item.entityId == prevId) {
                if (item.path !== undefined) {
                  $prodIcons.find('.prev-icon').attr('href', item.path);
                  $prodIcons.find('.prev-icon').removeClass('disable');
                  $prodWrap.find('#prev-product-modal').append(html_card);
                } else {
                  $prodIcons.find('.prev-icon').remove();
                  $prodWrap.find('#prev-product-modal').remove();
                }
              }
              if (item.entityId == nextId) {
                if (item.path !== undefined) {
                  $prodIcons.find('.next-icon').attr('href', item.path);
                  $prodIcons.find('.next-icon').removeClass('disable');
                  $prodWrap.find('#next-product-modal').append(html_card);
                } else {
                  $prodIcons.find('.next-icon').remove();
                  $prodWrap.find('#next-product-modal').remove();
                }
              }
            });
          }
        };
        var productId = $('.productView-nextProducts').data('product-id'),
          nextId = productId + 1,
          prevId = productId - 1,
          nextLink,
          prevLink,
          list;
        var $prodWrap = $('.productView-nextProducts .next-prev-modal'),
          $prodIcons = $('.productView-nextProducts .next-prev-icons');
        if (prevId != undefined && nextId != undefined) {
          list = [prevId, nextId];
          getProduct(list).then(function (data) {
            renderProduct(data.site.products.edges, data.site.currency.display);
          });
        }
        $prodIcons.on('mouseover', function () {
          $prodWrap.addClass('is-active');
        }).on('mouseleave', function () {
          $prodWrap.removeClass('is-active');
          $('#next-product-modal').removeClass('is-show');
          $('#prev-product-modal').removeClass('is-show');
        });
        $('.next-icon', $prodIcons).on('mouseover', function () {
          if (!$(this).hasClass('disable')) {
            $('#prev-product-modal').removeClass('is-show');
            $('#next-product-modal').addClass('is-show');
          } else {
            $('#prev-product-modal').removeClass('is-show');
          }
        });
        $('.prev-icon', $prodIcons).on('mouseover', function () {
          if (!$(this).hasClass('disable')) {
            $('#next-product-modal').removeClass('is-show');
            $('#prev-product-modal').addClass('is-show');
          } else {
            $('#next-product-modal').removeClass('is-show');
          }
        });
        $prodWrap.on('mouseover', function () {
          $prodWrap.addClass('is-active');
        }).on('mouseleave', function () {
          $prodWrap.removeClass('is-active');
        });
      }
    }
  }
}

/***/ }),

/***/ "./assets/js/theme/halothemes/haloStickyAddToCart.js":
/*!***********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloStickyAddToCart.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__($scope, context) {
  if ($('#form-action-addToCart').length) {
    var scroll = $('#form-action-addToCart').offset(),
      h_statc = $('#halo_sticky_addToCart').outerHeight(),
      scrollTop = scroll.top;
    $(window).scroll(function () {
      var $sticky = $('#halo_sticky_addToCart');
      if ($(window).scrollTop() > scrollTop + 400) {
        if (!$('#halo_sticky_addToCart').hasClass('show_sticky')) {
          $('#halo_sticky_addToCart').addClass('show_sticky');
          if ($(window).width() > 550) {
            $('#recently_bought_list').css("bottom", $('#halo_sticky_addToCart').outerHeight() + 40);
            $('.halo-ask-an-expert').css("bottom", $('#halo_sticky_addToCart').outerHeight() + 40);
          } else {
            if ($('#halo_sticky_addToCart').length) {
              $('#recently_bought_list').css("bottom", $('#halo_sticky_addToCart').outerHeight() + 30);
              $('.halo-ask-an-expert').css("bottom", $('#halo_sticky_addToCart').outerHeight() + 130);
            } else {
              $('#recently_bought_list').css("bottom", 30);
              $('.halo-ask-an-expert').css("bottom", 150);
            }
          }
        }
      } else {
        $('#halo_sticky_addToCart').removeClass('show_sticky');
        $('.pop-up-option').removeClass('is-open');
        $('body').removeClass('openPopupOption');
        $('.choose_options_add').removeClass('is-active');
        $('#recently_bought_list').css("bottom", 30);
        if ($(window).width() > 550) {
          $('.halo-ask-an-expert').css("bottom", 30);
        } else {
          $('.halo-ask-an-expert').css("bottom", 150);
        }
      }
    });
    $(document).on('click', '.choose_options_add', function (event) {
      $(this).toggleClass('is-active');
      $('.pop-up-option').toggleClass('is-open');
      $('body').addClass('openPopupOption');
    });
    $(document).on('click', '.pop-up-option .btn-close', function (event) {
      $(".pop-up-option").removeClass('is-open');
      $('body').removeClass('openPopupOption');
      $('.choose_options_add').removeClass('is-active');
    });
    window.onload = function () {
      if ($(window).scrollTop() > scrollTop + 400) {
        if (!$('#halo_sticky_addToCart').hasClass('show_sticky')) {
          $('#halo_sticky_addToCart').addClass('show_sticky');
          if ($(window).width() > 550) {
            $('#recently_bought_list').css("bottom", $('#halo_sticky_addToCart').outerHeight() + 40);
            $('.halo-ask-an-expert').css("bottom", $('#halo_sticky_addToCart').outerHeight() + 40);
          } else {
            if ($('#halo_sticky_addToCart').length) {
              $('#recently_bought_list').css("bottom", $('#halo_sticky_addToCart').outerHeight() + 30);
              $('.halo-ask-an-expert').css("bottom", $('#halo_sticky_addToCart').outerHeight() + 130);
            } else {
              $('#recently_bought_list').css("bottom", 30);
              $('.halo-ask-an-expert').css("bottom", 150);
            }
          }
        }
      }
    };
  }
}

/***/ }),

/***/ "./assets/js/theme/halothemes/haloYoutubeVideo.js":
/*!********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloYoutubeVideo.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ youtubeCarouselFactory)
/* harmony export */ });
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

function youtubeCarouselFactory($scope) {
  if ($scope.find('[data-youtube]').length > 0) {
    if (typeof window.onYouTubeIframeAPIReady === 'undefined') {
      window.onYouTubeIframeAPIReady = initCarousel.bind(window, $scope);
      var tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/player_api';
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      initCarousel($scope);
    }
  }
}
function haloYoutubeSlick(slick) {
  var $slick = $(slick),
    $videos = $slick.find('[data-youtube]');
  bindEvents(slick);
  function bindEvents() {
    if ($slick.hasClass('slick-initialized')) {
      onSlickInit();
    }
    $slick.on('init', onSlickInit);
    $slick.on('beforeChange', onSlickBeforeChange);
    $slick.on('afterChange', onSlickAfterChange);
  }
  function onPlayerReady(event) {
    $(event.target.getIframe()).closest('.slick-slide').data('youtube-player', event.target);
    setTimeout(function () {
      if ($(event.target.getIframe()).closest('.slick-slide').hasClass('slick-active')) {
        $slick.slick('slickPause');
        event.target.playVideo();
      }
    }, 200);
  }
  function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
      $slick.slick('slickPause');
    }
    if (event.data === YT.PlayerState.ENDED) {
      $slick.slick('slickNext');
    }
  }
  function onSlickInit() {
    $videos.each(function (j, vid) {
      var $vid = $(vid);
      var id = "youtube_player_" + lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()();
      $vid.attr('id', id);
      var player = new YT.Player(id, {
        host: 'http://www.youtube.com',
        videoId: $vid.data('youtube'),
        wmode: 'transparent',
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          enablejsapi: 1,
          fs: 0,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          wmode: 'transparent'
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange
        }
      });
    });
  }
  function onSlickBeforeChange() {
    var player = $slick.find('.slick-slide.slick-active').data('youtube-player');
    if (player) {
      player.stopVideo();
      $slick.removeClass('slick-slider--playvideo');
    }
  }
  function onSlickAfterChange() {
    var player = $slick.find('.slick-slide.slick-active').data('youtube-player');
    if (player) {
      $slick.slick('slickPause');
      $slick.addClass('slick-slider--playvideo');
      player.playVideo();
    }
  }
}
function initCarousel($scope) {
  $scope.each(function (i, slick) {
    var $slick = $(slick);
    if ($slick.find('[data-youtube]').length > 0) {
      $slick.addClass('slick-slider--video');
      haloYoutubeSlick(slick);
    }
  });
}

/***/ }),

/***/ "./assets/js/theme/product.js":
/*!************************************!*\
  !*** ./assets/js/theme/product.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _product_reviews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product/reviews */ "./assets/js/theme/product/reviews.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _product_video_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/video-gallery */ "./assets/js/theme/product/video-gallery.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _halothemes_haloPrevNextProduct__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./halothemes/haloPrevNextProduct */ "./assets/js/theme/halothemes/haloPrevNextProduct.js");
/* harmony import */ var _halothemes_haloBundleProducts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./halothemes/haloBundleProducts */ "./assets/js/theme/halothemes/haloBundleProducts.js");
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/modular/sortable.esm.js");
/* harmony import */ var _halothemes_haloStickyAddToCart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./halothemes/haloStickyAddToCart */ "./assets/js/theme/halothemes/haloStickyAddToCart.js");
/* harmony import */ var _halothemes_haloYoutubeVideo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./halothemes/haloYoutubeVideo */ "./assets/js/theme/halothemes/haloYoutubeVideo.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/*
 Import all product specific js
 */












var Product = /*#__PURE__*/function (_PageManager) {
  function Product(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.url = window.location.href;
    _this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
    _this.$bulkPricingLink = $('[data-reveal-id="modal-bulk-pricing"]');
    _this.reviewModal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_6__["default"])('#modal-review-form')[0];
    return _this;
  }
  _inheritsLoose(Product, _PageManager);
  var _proto = Product.prototype;
  _proto.onReady = function onReady() {
    var _this2 = this;
    // Listen for foundation modal close events to sanitize URL after review.
    $(document).on('close.fndtn.reveal', function () {
      if (_this2.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
        window.history.replaceState(null, document.title, window.location.pathname);
      }
    });
    var validator;

    // Init collapsible
    (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["default"])();
    this.productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_3__["default"]($('.productView'), this.context, window.BCData.product_attributes);
    this.productDetails.setProductVariant();
    (0,_product_video_gallery__WEBPACK_IMPORTED_MODULE_4__["default"])();
    this.bulkPricingHandler();
    (0,_halothemes_haloPrevNextProduct__WEBPACK_IMPORTED_MODULE_7__["default"])(this.context);
    if (this.context.themeSettings.halo_bundle_products_enable == true) {
      (0,_halothemes_haloBundleProducts__WEBPACK_IMPORTED_MODULE_8__["default"])(this.context);
    }
    if (this.context.themeSettings.halo_compare_colors == true) {
      this.compareColors();
    }
    (0,_halothemes_haloStickyAddToCart__WEBPACK_IMPORTED_MODULE_10__["default"])($('.productView__top'), this.context);
    (0,_halothemes_haloYoutubeVideo__WEBPACK_IMPORTED_MODULE_11__["default"])($('.productView__top [data-slick]'));
    var $reviewForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.classifyForm)('.writeReview-form');
    if ($reviewForm.length === 0) return;
    var review = new _product_reviews__WEBPACK_IMPORTED_MODULE_1__["default"]($reviewForm);
    $(document).on(_global_modal__WEBPACK_IMPORTED_MODULE_6__.ModalEvents.opened, '#modal-review-form', function () {
      return _this2.reviewModal.setupFocusTrap();
    });
    $('body').on('click', '[data-reveal-id="modal-review-form"]', function () {
      validator = review.registerValidation(_this2.context);
      _this2.ariaDescribeReviewInputs($reviewForm);
    });
    $reviewForm.on('submit', function () {
      if (validator) {
        validator.performCheck();
        return validator.areAll('valid');
      }
      return false;
    });
    this.productReviewHandler();
  };
  _proto.ariaDescribeReviewInputs = function ariaDescribeReviewInputs($form) {
    $form.find('[data-input]').each(function (_, input) {
      var $input = $(input);
      var msgSpanId = $input.attr('name') + "-msg";
      $input.siblings('span').attr('id', msgSpanId);
      $input.attr('aria-describedby', msgSpanId);
    });
  };
  _proto.productReviewHandler = function productReviewHandler() {
    if (this.url.indexOf('#write_review') !== -1) {
      this.$reviewLink.trigger('click');
    }
  };
  _proto.bulkPricingHandler = function bulkPricingHandler() {
    if (this.url.indexOf('#bulk_pricing') !== -1) {
      this.$bulkPricingLink.trigger('click');
    }
  };
  _proto.compareColors = function compareColors() {
    $('.halo-compareColors-swatch .form-option').on('click', function (event) {
      $(this).toggleClass('show-color');
      var title = $(this).find('.form-option-variant').attr('title'),
        id = $(this).data('product-swatch-value'),
        $color,
        $color2,
        $color3,
        $img;
      if ($(this).hasClass('show-color')) {
        if ($(this).find('.form-option-variant--color').length) {
          $color = $(this).find('.form-option-variant--color').attr('style');
          $('.halo-compareColors-image').append('<div class="item item-color item-' + id + '"><span class="color" style="' + $color + ';"></span><span class="title">' + title + '</span></div>');
        } else if ($(this).find('.form-option-variant--color2').length) {
          $color = $(this).find('.form-option-variant--color2 span:nth-child(1)').attr('style');
          $color2 = $(this).find('.form-option-variant--color2 span:nth-child(2)').attr('style');
          $('.halo-compareColors-image').append('<div class="item item-color item-' + id + '"><span class="color color2"><span style="' + $color + ';"></span><span style="' + $color2 + ';"></span></span><span class="title">' + title + '</span></div>');
        } else if ($(this).find('.form-option-variant--color3').length) {
          $color = $(this).find('.form-option-variant--color3 span:nth-child(1)').attr('style');
          $color2 = $(this).find('.form-option-variant--color3 span:nth-child(2)').attr('style');
          $color3 = $(this).find('.form-option-variant--color3 span:nth-child(3)').attr('style');
          $('.halo-compareColors-image').append('<div class="item item-color item-' + id + '"><span class="color color3"><span style="' + $color + ';"></span><span style="' + $color2 + ';"></span><span style="' + $color3 + ';"></span></span><span class="title">' + title + '</span></div>');
        } else if ($(this).find('.form-option-variant--pattern').length) {
          $img = $(this).find('.form-option-variant--pattern').attr('style').split("'")[1];
          $('.halo-compareColors-image').append('<div class="item item-partern item-' + id + '"><span class="image"><img src=' + $img + ' alt=' + title + ' title=' + title + '></span><span class="title">' + title + '</span></div>');
        }
      } else {
        $('.halo-compareColors-image .item-' + id + '').remove();
      }
      if ($(window).width() >= 1025) {
        var el = document.getElementById('color-swatch-image');
        new sortablejs__WEBPACK_IMPORTED_MODULE_9__["default"](el, {
          animation: 150
        });
      }
    });
  };
  return Product;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/theme/product/reviews.js":
/*!********************************************!*\
  !*** ./assets/js/theme/product/reviews.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* harmony import */ var _common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils/safe-string */ "./assets/js/theme/common/utils/safe-string.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");





var _default = /*#__PURE__*/function () {
  function _default($reviewForm) {
    this.validator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_0__["default"])({
      submit: $reviewForm.find('input[type="submit"]'),
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_4__.announceInputErrorMessage
    });
    this.$reviewsContent = $('#product-reviews');
    this.$collapsible = $('[data-collapsible]', this.$reviewsContent);
    this.initLinkBind();
    this.injectPaginationLink();
    this.collapseReviews();
  }

  /**
   * On initial page load, the user clicks on "(12 Reviews)" link
   * The browser jumps to the review page and should expand the reviews section
   */
  var _proto = _default.prototype;
  _proto.initLinkBind = function initLinkBind() {
    var _this = this;
    var $content = $('#productReviews-content', this.$reviewsContent);
    $('#productReview_link').on('click', function () {
      $('.productView-reviewTabLink').trigger('click');
      if (!$content.hasClass('is-open')) {
        _this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__.CollapsibleEvents.click);
      }
    });
  };
  _proto.collapseReviews = function collapseReviews() {
    // We're in paginating state, do not collapse
    if (window.location.hash && window.location.hash.indexOf('#product-reviews') === 0) {
      return;
    }

    // force collapse on page load
    this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__.CollapsibleEvents.click);
  }

  /**
   * Inject ID into the pagination link
   */;
  _proto.injectPaginationLink = function injectPaginationLink() {
    var $nextLink = $('.pagination-item--next .pagination-link', this.$reviewsContent);
    var $prevLink = $('.pagination-item--previous .pagination-link', this.$reviewsContent);
    if ($nextLink.length) {
      $nextLink.attr('href', $nextLink.attr('href') + " #tab-reviews");
    }
    if ($prevLink.length) {
      $prevLink.attr('href', $prevLink.attr('href') + " #tab-reviews");
    }
  };
  _proto.registerValidation = function registerValidation(context) {
    this.context = context;
    this.validator.add([{
      selector: '[name="revrating"]',
      validate: 'presence',
      errorMessage: (0,_common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__.safeString)(this.context.reviewRating)
    }, {
      selector: '[name="revtitle"]',
      validate: 'presence',
      errorMessage: (0,_common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__.safeString)(this.context.reviewSubject)
    }, {
      selector: '[name="revtext"]',
      validate: 'presence',
      errorMessage: (0,_common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__.safeString)(this.context.reviewComment)
    }, {
      selector: '.writeReview-form [name="email"]',
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_2__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.reviewEmail
    }]);
    return this.validator;
  };
  _proto.validate = function validate() {
    return this.validator.performCheck();
  };
  return _default;
}();


/***/ }),

/***/ "./assets/js/theme/product/video-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/video-gallery.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoGallery: () => (/* binding */ VideoGallery),
/* harmony export */   "default": () => (/* binding */ videoGallery)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
var VideoGallery = /*#__PURE__*/function () {
  function VideoGallery($element) {
    this.$player = $element.find('[data-video-player]');
    this.$videos = $element.find('[data-video-item]');
    this.currentVideo = {};
    this.bindEvents();
  }
  var _proto = VideoGallery.prototype;
  _proto.selectNewVideo = function selectNewVideo(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    this.currentVideo = {
      id: $target.data('videoId'),
      $selectedThumb: $target
    };
    this.setMainVideo();
    this.setActiveThumb();
  };
  _proto.setMainVideo = function setMainVideo() {
    this.$player.attr('src', "//www.youtube.com/embed/" + this.currentVideo.id);
  };
  _proto.setActiveThumb = function setActiveThumb() {
    this.$videos.removeClass('is-active');
    this.currentVideo.$selectedThumb.addClass('is-active');
  };
  _proto.bindEvents = function bindEvents() {
    this.$videos.on('click', this.selectNewVideo.bind(this));
  };
  return VideoGallery;
}();
function videoGallery() {
  var pluginKey = 'video-gallery';
  var $videoGallery = $("[data-" + pluginKey + "]");
  $videoGallery.each(function (index, element) {
    var $el = $(element);
    var isInitialized = $el.data(pluginKey) instanceof VideoGallery;
    if (isInitialized) {
      return;
    }
    $el.data(pluginKey, new VideoGallery($el));
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9wcm9kdWN0X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUlDLEdBQUcsRUFBSztFQUMvQixJQUFNQyxDQUFDLEdBQUcsSUFBSUMsU0FBUyxDQUFDLENBQUM7RUFDekIsT0FBT0QsQ0FBQyxDQUFDRSxlQUFlLENBQUNILEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQ0ksSUFBSSxDQUFDQyxXQUFXO0FBQy9ELENBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUnNCO0FBQ3dCO0FBRXFCO0FBRXBFLDZCQUFlLG9DQUFTSSxPQUFPLEVBQUU7RUFDN0IsSUFBTUMsVUFBVSxHQUFHLGtCQUFrQjtFQUNyQyxJQUFNQyxPQUFPLEdBQUdMLDZDQUFDLENBQUMsdUJBQXVCLENBQUM7RUFFMUNNLFVBQVUsQ0FBQyxDQUFDO0VBRVpOLDZDQUFDLENBQUNPLFFBQVEsQ0FBQyxDQUFDQyxFQUFFLENBQUMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFVBQVNDLEtBQUssRUFBRTtJQUM1REEsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUV0QlYsNkNBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDVyxHQUFHLENBQUNYLDZDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQ1ksV0FBVyxDQUFDLFVBQVUsQ0FBQztJQUM5RFosNkNBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDVyxHQUFHLENBQUNYLDZDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNhLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUNELFdBQVcsQ0FBQyxTQUFTLENBQUM7SUFFMUYsSUFBSSxDQUFDWiw2Q0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDYSxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMs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QXdYLE1BQUEsQ0FFRHVFLGNBQWMsR0FBZCxTQUFBQSxjQUFjQSxDQUFBLEVBQUc7SUFDYixJQUFJLENBQUNqSSxPQUFPLENBQUNyVSxXQUFXLENBQUMsV0FBVyxDQUFDO0lBQ3JDLElBQUksQ0FBQ2djLFlBQVksQ0FBQ0ksY0FBYyxDQUFDamMsUUFBUSxDQUFDLFdBQVcsQ0FBQztFQUMxRCxDQUFDO0VBQUE0WCxNQUFBLENBRUR6RCxVQUFVLEdBQVYsU0FBQUEsVUFBVUEsQ0FBQSxFQUFHO0lBQ1QsSUFBSSxDQUFDRCxPQUFPLENBQUN6VSxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ3FjLGNBQWMsQ0FBQ3JJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUM1RCxDQUFDO0VBQUEsT0FBQWlJLFlBQUE7QUFBQTtBQUdVLFNBQVNqRixZQUFZQSxDQUFBLEVBQUc7RUFDbkMsSUFBTTJGLFNBQVMsR0FBRyxlQUFlO0VBQ2pDLElBQU1DLGFBQWEsR0FBR3BkLENBQUMsWUFBVW1kLFNBQVMsTUFBRyxDQUFDO0VBRTlDQyxhQUFhLENBQUN6YixJQUFJLENBQUMsVUFBQ3FCLEtBQUssRUFBRWlCLE9BQU8sRUFBSztJQUNuQyxJQUFNb1osR0FBRyxHQUFHcmQsQ0FBQyxDQUFDaUUsT0FBTyxDQUFDO0lBQ3RCLElBQU1xWixhQUFhLEdBQUdELEdBQUcsQ0FBQzdaLElBQUksQ0FBQzJaLFNBQVMsQ0FBQyxZQUFZVixZQUFZO0lBRWpFLElBQUlhLGFBQWEsRUFBRTtNQUNmO0lBQ0o7SUFFQUQsR0FBRyxDQUFDN1osSUFBSSxDQUFDMlosU0FBUyxFQUFFLElBQUlWLFlBQVksQ0FBQ1ksR0FBRyxDQUFDLENBQUM7RUFDOUMsQ0FBQyxDQUFDO0FBQ04sQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ2NvbW1lcmNlLXN1cmZ1cC8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvc2FmZS1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2Utc3VyZnVwLy4vYXNzZXRzL2pzL3RoZW1lL2hhbG90aGVtZXMvaGFsb0J1bmRsZVByb2R1Y3RzLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLXN1cmZ1cC8uL2Fzc2V0cy9qcy90aGVtZS9oYWxvdGhlbWVzL2hhbG9QcmV2TmV4dFByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2Utc3VyZnVwLy4vYXNzZXRzL2pzL3RoZW1lL2hhbG90aGVtZXMvaGFsb1N0aWNreUFkZFRvQ2FydC5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1zdXJmdXAvLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvWW91dHViZVZpZGVvLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLXN1cmZ1cC8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0LmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLXN1cmZ1cC8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0L3Jldmlld3MuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2Utc3VyZnVwLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QvdmlkZW8tZ2FsbGVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgZnVuY3Rpb24gcGFyc2VzIEhUTUwgZW50aXRpZXMgaW4gc3RyaW5nc1xuICogQHBhcmFtIHN0cjogU3RyaW5nXG4gKiBAcmV0dXJucyBTdHJpbmdcbiovXG5leHBvcnQgY29uc3Qgc2FmZVN0cmluZyA9IChzdHIpID0+IHtcbiAgICBjb25zdCBkID0gbmV3IERPTVBhcnNlcigpO1xuICAgIHJldHVybiBkLnBhcnNlRnJvbVN0cmluZyhzdHIsICd0ZXh0L2h0bWwnKS5ib2R5LnRleHRDb250ZW50O1xufTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBoYWxvQ2FsY3VsYXRlRnJlZVNoaXBwaW5nIGZyb20gJy4vaGFsb0NhbGN1bGF0ZUZyZWVTaGlwcGluZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgICBjb25zdCByZWxhdGVfdGFiID0gXCIjcmVsYXRlZC1wcm9kdWN0XCI7XG4gICAgY29uc3QgJGJ1bmRsZSA9ICQoJyNoYWxvLWJ1bmRsZS1wcm9kdWN0cycpO1xuXG4gICAgc2hvd0J1bmRsZSgpO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5oYWxvLXRvZ2dsZS1vcHRpb25zJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAkKCcuaGFsby10b2dnbGUtb3B0aW9ucycpLm5vdCgkKHRoaXMpKS5yZW1vdmVDbGFzcygnaXMtZm9jdXMnKTtcbiAgICAgICAgJCgnLmhhbG8tZGV0YWlsLW9wdGlvbnMnKS5ub3QoJCh0aGlzKS5uZXh0KCcuaGFsby1kZXRhaWwtb3B0aW9ucycpKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuXG4gICAgICAgIGlmICghJCh0aGlzKS5uZXh0KCcuaGFsby1kZXRhaWwtb3B0aW9ucycpLmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLWZvY3VzJyk7XG4gICAgICAgICAgICAkKHRoaXMpLm5leHQoJy5oYWxvLWRldGFpbC1vcHRpb25zJykuYWRkQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQodGhpcykubmV4dCgnLmhhbG8tZGV0YWlsLW9wdGlvbnMnKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaXMtZm9jdXMnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5oYWxvLW9wdGlvbi1jbG9zZScsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgJCgnLmhhbG8tZGV0YWlsLW9wdGlvbnMnKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAkKCcuaGFsby10b2dnbGUtb3B0aW9ucycpLnJlbW92ZUNsYXNzKCdpcy1mb2N1cycpO1xuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoJCgnLmhhbG8tZGV0YWlsLW9wdGlvbnMnKS5oYXNDbGFzcygnaXMtb3BlbicpKSB7XG4gICAgICAgICAgICBpZiAoKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcuaGFsby1kZXRhaWwtb3B0aW9ucycpLmxlbmd0aCA9PT0gMCkgJiYgKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcuaGFsby10b2dnbGUtb3B0aW9ucycpLmxlbmd0aCA9PT0gMCkpe1xuICAgICAgICAgICAgICAgICQoJy5oYWxvLWRldGFpbC1vcHRpb25zJykucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgICAgICAkKCcuaGFsby10b2dnbGUtb3B0aW9ucycpLnJlbW92ZUNsYXNzKCdpcy1mb2N1cycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5oYWxvLWRldGFpbC1jaGVja2JveCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJykucmVwbGFjZSgnZmJ0X3Byb2R1Y3QnLCAnJyk7XG5cbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICQoJy5oYWxvLXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgaWQgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ2lzQ2hlY2tlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBpZCArICdcIl0nKS5hZGRDbGFzcygnaXNDaGVja2VkJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0b3RhbFByaWNlKCk7XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2hhbG8tYWRkQWxsJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkKCdmb3JtJywgJCgnI2hhbG8tYnVuZGxlLXByb2R1Y3RzJykpO1xuICAgICAgICB2YXIgYXJyUHJvID0gbmV3IEFycmF5KCk7XG5cbiAgICAgICAgJCgnLmhhbG8tZGV0YWlsLWNoZWNrYm94JykuZWFjaChmdW5jdGlvbihpLCB2YWwpIHtcbiAgICAgICAgICAgIGlmICgkKHZhbCkuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICAgICBhcnJQcm8ucHVzaChpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGNoZWNrID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGFyclByby5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjaGVjayA9IGNoZWNrUHJvZHVjdCgkZm9ybSwgYXJyUHJvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGVjaykge1xuICAgICAgICAgICAgaWYgKGFyclByby5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgJCgnI2hhbG8tYnVuZGxlLXByb2R1Y3RzIC5sb2FkaW5nT3ZlcmxheScpLnNob3coKTtcblxuICAgICAgICAgICAgICAgIGFkZFRvQ2FydCgkZm9ybSwgMCwgYXJyUHJvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9ICdQbGVhc2UgbWFrZSBzdXJlIGFsbCBvcHRpb25zIGhhdmUgYmVlbiBmaWxsZWQgaW4uJztcblxuICAgICAgICAgICAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIC8vIFN0cmlwIHRoZSBIVE1MIGZyb20gdGhlIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgICAgICAgICBjb25zdCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgICAgICB0bXAuaW5uZXJIVE1MID0gZXJyb3JNZXNzYWdlO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KHRtcC50ZXh0Q29udGVudCB8fCB0bXAuaW5uZXJUZXh0KTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHNob3dCdW5kbGUoKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTogJ2hhbG90aGVtZXMvcHJvZHVjdHMvaGFsby1idW5kbGUtcHJvZHVjdHMtdG1wJyxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogJ2hhbG90aGVtZXMvcHJvZHVjdHMvaGFsby1idW5kbGUtcHJvZHVjdHMtb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgdmFyIHByb2RCdW5kbGVJZCA9IFtdO1xuXG4gICAgICAgICQoJyNoYWxvLWJ1bmRsZS1wcm9kdWN0cycpLnJlbW92ZUNsYXNzKCdoYWxvLWJsb2NrLWRpc2FibGUnKTtcblxuICAgICAgICBmaXJzdEl0ZW0oKTtcblxuICAgICAgICAkKCcjaGFsby1idW5kbGUtcHJvZHVjdHMgLmJ1bmRsZS1wcm9kdWN0LXJpZ2h0JykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiaGFsby1wcm9kdWN0LXRvdGFsXCI+PGRpdiBjbGFzcz1cInRvdGFsLXByaWNlXCI+PHNwYW4gY2xhc3M9XCJ0ZXh0XCI+VG90YWwgcHJpY2U6PC9zcGFuPjxzcGFuIGNsYXNzPVwicHJpY2VcIj48L3NwYW4+PC9kaXY+PGEgY2xhc3M9XCJidXR0b24gYnV0dG9uLS10ZXJ0aWFyeSBoYWxvLXByb2R1Y3QtdG90YWwtYnV0dG9uXCIgaWQ9XCJoYWxvLWFkZEFsbFwiPkFkZCBBbGwgVG8gQmFnPC9hPjwvZGl2PicpO1xuXG4gICAgICAgICQuZWFjaChjb250ZXh0LnByb2R1Y3RDdXN0b21GaWVsZHMsIGZ1bmN0aW9uKGluZGV4LCBvYmopIHtcbiAgICAgICAgICAgIGlmIChvYmoubmFtZSA9PSAnX19idW5kbGVpZCcpIHtcbiAgICAgICAgICAgICAgICBwcm9kQnVuZGxlSWQgPSBKU09OLnBhcnNlKCdbJytvYmoudmFsdWUrJ10nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCQoJyNoYWxvLWJ1bmRsZS1wcm9kdWN0cycpLmxlbmd0aCA+IDAgJiYgcHJvZEJ1bmRsZUlkLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICB2YXIgbnVtID0gMDtcbiAgICAgICAgICAgIHZhciBsaXN0ID0gW107XG5cbiAgICAgICAgICAgICQocmVsYXRlX3RhYiArICcgLmNhcmQnKS5lYWNoKGZ1bmN0aW9uKGksIHZhbCkge1xuICAgICAgICAgICAgICAgIGxpc3QucHVzaCh7aTppLCBkYXRhOiBcIlwifSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgcElkID0gJCh2YWwpLmRhdGEoJ3Byb2R1Y3QtaWQnKTtcblxuICAgICAgICAgICAgICAgIGlmIChwSWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0LmdldEJ5SWQocElkLCBvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50LmkgPT0gaSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGF0YSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBudW0rKztcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobnVtID09ICQocmVsYXRlX3RhYiArICcgLmNhcmQnKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dMaXN0KGxpc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICgkKCcjaGFsby1idW5kbGUtcHJvZHVjdHMnKS5sZW5ndGggPiAwICYmIHByb2RCdW5kbGVJZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgbnVtID0gMDtcbiAgICAgICAgICAgIHZhciBsaXN0ID0gW107XG5cbiAgICAgICAgICAgICQuZWFjaChwcm9kQnVuZGxlSWQsIGZ1bmN0aW9uKGksIHZhbCl7XG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKHtpOmksIGRhdGE6IFwiXCJ9KTtcblxuICAgICAgICAgICAgICAgIHZhciBwSWQgPSBwcm9kQnVuZGxlSWRbaV07XG5cbiAgICAgICAgICAgICAgICBpZiAocElkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdC5nZXRCeUlkKHBJZCwgb3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudC5pID09IGkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRhdGEgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtKys7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG51bSA9PSBwcm9kQnVuZGxlSWQubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TGlzdChsaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaXJzdEl0ZW0oKXtcbiAgICAgICAgY29uc3QgZmlyc3RJdGVtID0gJCgnI2hhbG8tYnVuZGxlLXByb2R1Y3RzIC5oYWxvLXByb2R1Y3QtbGlzdCAuaGFsby1wcm9kdWN0LWl0ZW06Zmlyc3QtY2hpbGQnKSxcbiAgICAgICAgICAgIHBJZCA9IGZpcnN0SXRlbS5kYXRhKCdwcm9kdWN0LWlkJyksXG4gICAgICAgICAgICAkZm9ybSA9IGZpcnN0SXRlbS5maW5kKCdmb3JtJyksXG4gICAgICAgICAgICBoYXNPcHRpb25zID0gJGZvcm0uZmluZCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJykubGVuZ3RoLFxuICAgICAgICAgICAgaGFzRGVmYXVsdE9wdGlvbnMgPSAkZm9ybS5maW5kKCdbZGF0YS1kZWZhdWx0XScpLmxlbmd0aDtcblxuICAgICAgICBpZiAoaGFzRGVmYXVsdE9wdGlvbnMgJiYgaGFzT3B0aW9ucykge1xuICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZShwSWQsICRmb3JtLnNlcmlhbGl6ZSgpLCAncHJvZHVjdHMvYnVsay1kaXNjb3VudC1yYXRlcycsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlc0RhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNDb250ZW50ID0gcmVzcG9uc2UuY29udGVudCB8fCB7fTtcblxuICAgICAgICAgICAgICAgIHVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKCRmb3JtLCBhdHRyaWJ1dGVzRGF0YSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaGFzRGVmYXVsdE9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlVmlldygkZm9ybSwgYXR0cmlidXRlc0RhdGEsIGF0dHJpYnV0ZXNDb250ZW50KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyhhdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93TGlzdChsaXN0KXtcbiAgICAgICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGVsZW1lbnQuZGF0YTtcblxuICAgICAgICAgICAgJCgnI2hhbG8tYnVuZGxlLXByb2R1Y3RzIC5oYWxvLXByb2R1Y3QtbGlzdCcpLmFwcGVuZChyZXNwb25zZS5pdGVtKTtcblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9wdGlvbnMudHJpbSgpICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgcElkID0gJChyZXNwb25zZS5pdGVtKS5kYXRhKCdwcm9kdWN0LWlkJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgJGZvcm0gPSAkKCcjaGFsby1idW5kbGUtcHJvZHVjdHMgLmhhbG8tcHJvZHVjdC1saXN0IC5oYWxvLXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgcElkICsgJ1wiXSBmb3JtJyk7XG5cbiAgICAgICAgICAgICAgICAkZm9ybS5hcHBlbmQocmVzcG9uc2Uub3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNFbGVtZW50ID0gJCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJywgJGZvcm0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhc09wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbGVtZW50Lmh0bWwoKS50cmltKCkubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhc0RlZmF1bHRPcHRpb25zID0gJChyZXNwb25zZS5vcHRpb25zKS5maW5kKCdbZGF0YS1kZWZhdWx0XScpLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIGlmIChoYXNEZWZhdWx0T3B0aW9ucyAmJiBoYXNPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UocElkLCAkZm9ybS5zZXJpYWxpemUoKSwgJ3Byb2R1Y3RzL2J1bGstZGlzY291bnQtcmF0ZXMnLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlc0RhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlc0NvbnRlbnQgPSByZXNwb25zZS5jb250ZW50IHx8IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVQcm9kdWN0QXR0cmlidXRlcygkZm9ybSwgYXR0cmlidXRlc0RhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzRGVmYXVsdE9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVWaWV3KCRmb3JtLCBhdHRyaWJ1dGVzRGF0YSwgYXR0cmlidXRlc0NvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyhhdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNldFByb2R1Y3RWYXJpYW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByb2R1Y3RPcHRpb25zKCk7XG4gICAgICAgIHNob3dTbGlja1NsaWRlcigpO1xuICAgICAgICB0b3RhbFByaWNlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd1NsaWNrU2xpZGVyKCl7XG4gICAgICAgICQoJyNoYWxvLWJ1bmRsZS1wcm9kdWN0cyAuaGFsby1wcm9kdWN0LWxpc3QnKS5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IFwiPGRpdiBjbGFzcz0nc2xpY2stbmV4dCBzbGljay1hcnJvdyc+bmV4dDwvZGl2PlwiLFxuICAgICAgICAgICAgcHJldkFycm93OiBcIjxkaXYgY2xhc3M9J3NsaWNrLXByZXYgc2xpY2stYXJyb3cnPnByZXY8L2Rpdj5cIixcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDE0NDAsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDY0MCxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrUHJvZHVjdChmb3JtLCBhcnJQcm8pIHtcbiAgICAgICAgdmFyIGNoZWNrID0gdHJ1ZTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyUHJvLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgayA9IGFyclByb1tpXTtcbiAgICAgICAgICAgIHZhciAkZm9ybSA9ICQoZm9ybVtrXSk7XG4gICAgICAgICAgICBpZiAoJGZvcm0uZmluZCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY2hlY2sgPSBjaGVja0JlZm9yZUFkZCgkZm9ybSk7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrID09IGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrQmVmb3JlQWRkKCRhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHZhciBjaGVjayA9IHRydWU7XG4gICAgICAgICRhdHRyaWJ1dGVzLmZpbmQoJ2lucHV0OnRleHQsIGlucHV0OnBhc3N3b3JkLCBpbnB1dDpmaWxlLCB0ZXh0YXJlYScpLmVhY2goZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGlmICghJCh0aGlzKS5wcm9wKCdyZXF1aXJlZCcpKSB7fSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSkge30gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRhdHRyaWJ1dGVzLmZpbmQoJ3NlbGVjdCcpLmVhY2goZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGlmICghJCh0aGlzKS5wcm9wKCdyZXF1aXJlZCcpKSB7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykudmFsKCkpIHt9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgYXR0ID0gXCJcIjtcbiAgICAgICAgJGF0dHJpYnV0ZXMuZmluZCgnaW5wdXQ6cmFkaW8sIGlucHV0OmNoZWNrYm94JykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChhdHQgIT0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKSkge1xuXG4gICAgICAgICAgICAgICAgYXR0ID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcbiAgICAgICAgICAgICAgICBpZiAoISQodGhpcykucHJvcCgncmVxdWlyZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKFwidHlwZVwiKSA9PSBcImNoZWNrYm94XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKFwiW25hbWU9J1wiICsgYXR0ICsgXCInXTpjaGVja2VkXCIpLnZhbCgpKSB7fVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmF0dHIoXCJ0eXBlXCIpID09IFwicmFkaW9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0nXCIgKyBhdHQgKyBcIiddOmNoZWNrZWRcIikudmFsKCkpIHt9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKFwidHlwZVwiKSA9PSBcImNoZWNrYm94XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKFwiW25hbWU9J1wiICsgYXR0ICsgXCInXTpjaGVja2VkXCIpLnZhbCgpKSB7fSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmF0dHIoXCJ0eXBlXCIpID09IFwicmFkaW9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0nXCIgKyBhdHQgKyBcIiddOmNoZWNrZWRcIikudmFsKCkpIHt9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjaGVjaztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRUb0NhcnQoZm9ybSwgaSwgYXJyUCkge1xuICAgICAgICBpZiAoaSA+PSBhcnJQLmxlbmd0aCkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy9jYXJ0LnBocCc7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBrID0gYXJyUFtpXTtcbiAgICAgICAgLy8gQWRkIGl0ZW0gdG8gY2FydFxuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtQWRkKGZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybShuZXcgRm9ybURhdGEoZm9ybVtrXSkpLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyIHx8IHJlc3BvbnNlLmRhdGEuZXJyb3I7XG5cbiAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAvLyBTdHJpcCB0aGUgSFRNTCBmcm9tIHRoZSBlcnJvciBtZXNzYWdlXG4gICAgICAgICAgICAgICAgY29uc3QgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgICAgICAgICAgdG1wLmlubmVySFRNTCA9IGVycm9yTWVzc2FnZTtcbiAgICAgICAgICAgICAgICBhbGVydCh0bXAudGV4dENvbnRlbnQgfHwgdG1wLmlubmVyVGV4dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGkrKztcblxuICAgICAgICAgICAgaWYgKGkgPj0gYXJyUC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAkKCcjaGFsby1idW5kbGUtcHJvZHVjdHMgLmxvYWRpbmdPdmVybGF5JykuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUNhcnRDb250ZW50KHJlc3BvbnNlLmRhdGEuY2FydF9pdGVtLmlkKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYWRkVG9DYXJ0KGZvcm0sIGksIGFyclApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVDYXJ0Q29udGVudChjYXJ0SXRlbUlkLCBvbkNvbXBsZXRlKSB7XG4gICAgICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuICAgICAgICBjb25zdCBsb2FkaW5nQ2xhc3MgPSAnaXMtbG9hZGluZyc7XG4gICAgICAgIGNvbnN0ICRjYXJ0RHJvcGRvd24gPSAkKCcjY2FydC1wcmV2aWV3LWRyb3Bkb3duJyk7XG4gICAgICAgIGNvbnN0ICRjYXJ0TG9hZGluZyA9ICQoJzxkaXYgY2xhc3M9XCJsb2FkaW5nT3ZlcmxheVwiPjwvZGl2PicpO1xuICAgICAgICBjb25zdCAkc2lkZUNhcnRCbG9jayA9ICQoJyNzaWRlQmxvY2tfY2FydCcpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgXG4gICAgICAgICAgICAkc2lkZUNhcnRCbG9jay5zaG93KCk7XG4gICAgICAgICAgICAkYm9keS50b2dnbGVDbGFzcygnb3BlbkNhcnRTaWRlYmFyIGlzLXNpZGUtYmxvY2snKTtcbiAgICAgICAgICAgICRzaWRlQ2FydEJsb2NrLnRvZ2dsZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgJGNhcnREcm9wZG93blxuICAgICAgICAgICAgLmFkZENsYXNzKGxvYWRpbmdDbGFzcylcbiAgICAgICAgICAgIC5odG1sKCRjYXJ0TG9hZGluZyk7XG4gICAgICAgICRjYXJ0TG9hZGluZ1xuICAgICAgICAgICAgLnNob3coKTtcblxuICAgICAgICBnZXRDYXJ0Q29udGVudChjYXJ0SXRlbUlkLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJGNhcnREcm9wZG93blxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhsb2FkaW5nQ2xhc3MpXG4gICAgICAgICAgICAgICAgLmh0bWwocmVzcG9uc2UpO1xuICAgICAgICAgICAgJGNhcnRMb2FkaW5nXG4gICAgICAgICAgICAgICAgLmhpZGUoKTtcblxuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSAkKHJlc3BvbnNlKS5maW5kKCdbZGF0YS1jYXJ0LXF1YW50aXR5XScpLmRhdGEoJ2NhcnRRdWFudGl0eScpIHx8IDA7XG5cbiAgICAgICAgICAgICRib2R5LnRyaWdnZXIoJ2NhcnQtcXVhbnRpdHktdXBkYXRlJywgcXVhbnRpdHkpO1xuICAgICAgICAgICAgaGFsb0NhbGN1bGF0ZUZyZWVTaGlwcGluZyhjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKG9uQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q2FydENvbnRlbnQoY2FydEl0ZW1JZCwgb25Db21wbGV0ZSkge1xuICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2NvbW1vbi9jYXJ0LXByZXZpZXcnXG4gICAgICAgIH07XG5cbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0Q29udGVudChvcHRpb25zLCBvbkNvbXBsZXRlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b3RhbFByaWNlKCkge1xuICAgICAgICB2YXIgdG90YWwgPSAwLFxuICAgICAgICAgICAgcG9zID0gMCxcbiAgICAgICAgICAgIHN5bWJvbCA9IFwiJFwiO1xuXG4gICAgICAgICQoJy5oYWxvLXByb2R1Y3QtaXRlbS5pc0NoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uKGksIHZhbCkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbmN5LFxuICAgICAgICAgICAgICAgIHByaWNlLCBzO1xuXG4gICAgICAgICAgICBpZiAoJCh2YWwpLmZpbmQoJy5wcmljZS1zZWN0aW9uIC5wcmljZS5wcmljZS0td2l0aFRheCcpLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgY3VycmVuY3kgPSAkKHZhbCkuZmluZCgnLnByaWNlLXNlY3Rpb24gLnByaWNlLnByaWNlLS13aXRoVGF4JykudGV4dCgpO1xuICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgIGN1cnJlbmN5ID0gJCh2YWwpLmZpbmQoJy5wcmljZS1zZWN0aW9uIC5wcmljZS5wcmljZS0td2l0aG91dFRheCcpLnRleHQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJpY2UgPSBwYXJzZUZsb2F0KGN1cnJlbmN5LnJlcGxhY2UoL1teMC05Li1dKy9nLCBcIlwiKSk7XG5cbiAgICAgICAgICAgIHMgPSBjdXJyZW5jeS5yZXBsYWNlKHBhcnNlRmxvYXQocHJpY2UpLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpLCBcIlwiKTtcblxuICAgICAgICAgICAgaWYgKGlzTmFOKHBhcnNlRmxvYXQocy5yZXBsYWNlKC9bXjAtOS4tXSsvZywgXCJcIikpKSl7XG4gICAgICAgICAgICAgICAgc3ltYm9sID0gcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN1cnJlbmN5LmluZGV4T2Yoc3ltYm9sKSAhPSAtMSl7XG4gICAgICAgICAgICAgICAgcG9zID0gY3VycmVuY3kuaW5kZXhPZihzeW1ib2wpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0b3RhbCA9IHRvdGFsICsgcHJpY2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRvdGFsID0gcGFyc2VGbG9hdCh0b3RhbCkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XG5cbiAgICAgICAgaWYgKHBvcyA9PSAwKXtcbiAgICAgICAgICAgIHRvdGFsID0gc3ltYm9sICsgdG90YWw7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHRvdGFsID0gdG90YWwgKyBzeW1ib2w7XG4gICAgICAgIH1cblxuICAgICAgICAkKCcuaGFsby1wcm9kdWN0LXRvdGFsIC5wcmljZScpLmh0bWwodG90YWwpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2R1Y3RPcHRpb25zKCkge1xuICAgICAgICB0b3RhbFByaWNlKCk7XG5cbiAgICAgICAgY29uc3QgJGZvcm0gPSAkKCdmb3JtJywgJChkb2N1bWVudCkpO1xuXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQgPSAkKCdbZGF0YS1mYnQtb3B0aW9uLWNoYW5nZV0nLCAkZm9ybSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcjaGFsby1idW5kbGUtcHJvZHVjdHMgZm9ybSBbZGF0YS1mYnQtb3B0aW9uLWNoYW5nZV0nLCBldmVudCA9PiB7XG4gICAgICAgICAgICBwcm9kdWN0T3B0aW9uc0NoYW5nZWQoZXZlbnQpO1xuICAgICAgICAgICAgc2V0UHJvZHVjdFZhcmlhbnQoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRQcm9kdWN0VmFyaWFudCgpIHtcbiAgICAgICAgY29uc3QgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcyA9IFtdO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gW107XG5cbiAgICAgICAgJC5lYWNoKCQoJ1tkYXRhLWZidC1vcHRpb24tY2hhbmdlXSBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKSwgKGluZGV4LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uTGFiZWwgPSB2YWx1ZS5jaGlsZHJlblswXS5pbm5lclRleHQ7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25UaXRsZSA9IG9wdGlvbkxhYmVsLnNwbGl0KCc6JylbMF0udHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWlyZWQgPSBvcHRpb25MYWJlbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdyZXF1aXJlZCcpO1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHZhbHVlLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZScpO1xuXG4gICAgICAgICAgICBpZiAoKHR5cGUgPT09ICdpbnB1dC1maWxlJyB8fCB0eXBlID09PSAnaW5wdXQtdGV4dCcgfHwgdHlwZSA9PT0gJ2lucHV0LW51bWJlcicpICYmIHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWUgPT09ICcnICYmIHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICd0ZXh0YXJlYScgJiYgdmFsdWUucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKS52YWx1ZSA9PT0gJycgJiYgcmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2RhdGUnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNTYXRpc2ZpZWQgPSBBcnJheS5mcm9tKHZhbHVlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpKS5ldmVyeSgoc2VsZWN0KSA9PiBzZWxlY3Quc2VsZWN0ZWRJbmRleCAhPT0gMCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNTYXRpc2ZpZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZVN0cmluZyA9IEFycmF5LmZyb20odmFsdWUucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykpLm1hcCgoeCkgPT4geC52YWx1ZSkuam9pbignLScpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7ZGF0ZVN0cmluZ31gKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1zZWxlY3QnKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ID0gdmFsdWUucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IHNlbGVjdC5zZWxlY3RlZEluZGV4O1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke3NlbGVjdC5vcHRpb25zW3NlbGVjdGVkSW5kZXhdLmlubmVyVGV4dH1gKTtcbiAgICAgICAgICAgICAgICAgICAgJCh2YWx1ZS5jaGlsZHJlblswXSkuZmluZCgnW2RhdGEtb3B0aW9uLXZhbHVlXScpLnRleHQoc2VsZWN0Lm9wdGlvbnNbc2VsZWN0ZWRJbmRleF0uaW5uZXJUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtcmVjdGFuZ2xlJyB8fCB0eXBlID09PSAnc2V0LXJhZGlvJyB8fCB0eXBlID09PSAnc3dhdGNoJyB8fCB0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnIHx8IHR5cGUgPT09ICdwcm9kdWN0LWxpc3QnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJzpjaGVja2VkJyk7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtcmVjdGFuZ2xlJyB8fCB0eXBlID09PSAnc2V0LXJhZGlvJyB8fCB0eXBlID09PSAncHJvZHVjdC1saXN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBjaGVja2VkLmxhYmVsc1swXS5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWx9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh2YWx1ZS5jaGlsZHJlblswXSkuZmluZCgnW2RhdGEtb3B0aW9uLXZhbHVlXScpLnRleHQobGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzd2F0Y2gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGNoZWNrZWQubGFiZWxzWzBdLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2xhYmVsLnRpdGxlfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodmFsdWUuY2hpbGRyZW5bMF0pLmZpbmQoJ1tkYXRhLW9wdGlvbi12YWx1ZV0nKS50ZXh0KGxhYmVsLnRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9Olllc2ApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06Tm9gKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2R1Y3RPcHRpb25zQ2hhbmdlZChldmVudCkge1xuICAgICAgICBjb25zdCAkY2hhbmdlZE9wdGlvbiA9ICQoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkY2hhbmdlZE9wdGlvbi5wYXJlbnRzKCdmb3JtJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9ICQoJ1tuYW1lPVwicHJvZHVjdF9pZFwiXScsICRmb3JtKS52YWwoKTtcblxuICAgICAgICBpZiAoJGNoYW5nZWRPcHRpb24uYXR0cigndHlwZScpID09PSAnZmlsZScgfHwgd2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkY2hhbmdlZE9wdGlvbi5hdHRyKCdpZCcpID09PSAnZmJ0X3Byb2R1Y3QnICsgcHJvZHVjdElkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UocHJvZHVjdElkLCAkZm9ybS5zZXJpYWxpemUoKSwgJ3Byb2R1Y3RzL2J1bGstZGlzY291bnQtcmF0ZXMnLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RBdHRyaWJ1dGVzQ29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQgfHwge307XG4gICAgICAgICAgICBzaG93UHJvZHVjdEltYWdlKHByb2R1Y3RJZCwgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgICAgIHVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKCRmb3JtLCBwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xuICAgICAgICAgICAgdXBkYXRlVmlldygkZm9ybSwgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhLCBwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnQpO1xuICAgICAgICAgICAgdG90YWxQcmljZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKCRzY29wZSwgZGF0YSkge1xuICAgICAgICBjb25zdCBiZWhhdmlvciA9IGRhdGEub3V0X29mX3N0b2NrX2JlaGF2aW9yO1xuICAgICAgICBjb25zdCBpblN0b2NrSWRzID0gZGF0YS5pbl9zdG9ja19hdHRyaWJ1dGVzO1xuICAgICAgICBjb25zdCBvdXRPZlN0b2NrTWVzc2FnZSA9IGAgKCR7ZGF0YS5vdXRfb2Zfc3RvY2tfbWVzc2FnZX0pYDtcblxuICAgICAgICBpZiAoYmVoYXZpb3IgIT09ICdoaWRlX29wdGlvbicgJiYgYmVoYXZpb3IgIT09ICdsYWJlbF9vcHRpb24nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZV0nLCAkc2NvcGUpLmVhY2goKGksIGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGF0dHJpYnV0ZSA9ICQoYXR0cmlidXRlKTtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJJZCA9IHBhcnNlSW50KCRhdHRyaWJ1dGUuZGF0YSgncHJvZHVjdEF0dHJpYnV0ZVZhbHVlJyksIDEwKTtcblxuICAgICAgICAgICAgaWYgKGluU3RvY2tJZHMuaW5kZXhPZihhdHRySWQpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGVuYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaXNhYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc2FibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmIChnZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpID09PSAnc2V0LXNlbGVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBkaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaGlkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5hZGRDbGFzcygndW5hdmFpbGFibGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc2FibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkYXR0cmlidXRlLnBhcmVudCgpO1xuXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS50b2dnbGVPcHRpb24oZmFsc2UpO1xuXG4gICAgICAgICAgICBpZiAoJHNlbGVjdC52YWwoKSA9PT0gJGF0dHJpYnV0ZS5hdHRyKCd2YWx1ZScpKSB7XG4gICAgICAgICAgICAgICAgJHNlbGVjdFswXS5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaHRtbCgkYXR0cmlidXRlLmh0bWwoKS5yZXBsYWNlKG91dE9mU3RvY2tNZXNzYWdlLCAnJykgKyBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbmFibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmIChnZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpID09PSAnc2V0LXNlbGVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBlbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnJlbW92ZUNsYXNzKCd1bmF2YWlsYWJsZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW5hYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUudG9nZ2xlT3B0aW9uKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaHRtbCgkYXR0cmlidXRlLmh0bWwoKS5yZXBsYWNlKG91dE9mU3RvY2tNZXNzYWdlLCAnJykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0QXR0cmlidXRlVHlwZSgkYXR0cmlidXRlKSB7XG4gICAgICAgIGNvbnN0ICRwYXJlbnQgPSAkYXR0cmlidXRlLmNsb3Nlc3QoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpO1xuXG4gICAgICAgIHJldHVybiAkcGFyZW50ID8gJHBhcmVudC5kYXRhKCdwcm9kdWN0QXR0cmlidXRlJykgOiBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dQcm9kdWN0SW1hZ2UocHJvZHVjdElkLCBkYXRhKSB7XG4gICAgICAgIGlmIChfLmlzUGxhaW5PYmplY3QoZGF0YS5pbWFnZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IG1haW5JbWFnZVVybCA9IHV0aWxzLnRvb2xzLmltYWdlLmdldFNyYyhcbiAgICAgICAgICAgICAgICBkYXRhLmltYWdlLmRhdGEsXG4gICAgICAgICAgICAgICAgY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3RnYWxsZXJ5X3NpemVcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICQoJy5oYWxvLXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgcHJvZHVjdElkICsgJ1wiXScpLmZpbmQoJ2ltZycpLmF0dHIoe1xuICAgICAgICAgICAgICAgICdzcmNzZXQnOiBtYWluSW1hZ2VVcmwsXG4gICAgICAgICAgICAgICAgJ2RhdGEtc3Jjc2V0JzogJCh0aGlzKS5hdHRyKCdzcmNzZXQnKSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBtYWluSW1hZ2VVcmwgPSAkKCcuaGFsby1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5maW5kKCdpbWcnKS5hdHRyKCdkYXRhLXNyY3NldCcpO1xuICAgICAgICAgICAgJCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykuZmluZCgnaW1nJykuYXR0cih7XG4gICAgICAgICAgICAgICAgJ3NyY3NldCc6IG1haW5JbWFnZVVybCxcbiAgICAgICAgICAgICAgICAnZGF0YS1zcmNzZXQnOiAkKHRoaXMpLmF0dHIoJ3NyY3NldCcpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVWaWV3KCRzY29wZSwgZGF0YSwgY29udGVudCA9IG51bGwpIHtcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gZ2V0Vmlld01vZGVsKCRzY29wZSk7XG5cbiAgICAgICAgc2hvd01lc3NhZ2VCb3goZGF0YS5zdG9ja19tZXNzYWdlIHx8IGRhdGEucHVyY2hhc2luZ19tZXNzYWdlKTtcblxuICAgICAgICBpZiAoXy5pc09iamVjdChkYXRhLnByaWNlKSkge1xuICAgICAgICAgICAgdXBkYXRlUHJpY2VWaWV3KHZpZXdNb2RlbCwgZGF0YS5wcmljZSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcHJvZHVjdElkID0gJCgnW25hbWU9XCJwcm9kdWN0X2lkXCJdJywgJHNjb3BlKS52YWwoKTtcblxuICAgICAgICBpZiAoIWRhdGEucHVyY2hhc2FibGUgfHwgIWRhdGEuaW5zdG9jaykge1xuICAgICAgICAgICAgJCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ2lzQ2hlY2tlZCcpO1xuXG4gICAgICAgICAgICAkKCcjZmJ0X3Byb2R1Y3QnICsgcHJvZHVjdElkKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cbiAgICAgICAgICAgICQoJy5oYWxvLXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgcHJvZHVjdElkICsgJ1wiXScpLnJlbW92ZUNsYXNzKCdoYXNPcHRpb25zLS1zZWxlY3RlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykuYWRkQ2xhc3MoJ2lzQ2hlY2tlZCcpO1xuXG4gICAgICAgICAgICAkKCcjZmJ0X3Byb2R1Y3QnICsgcHJvZHVjdElkKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSkucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIGlmICgkc2NvcGUuZmluZCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoZWNrID0gY2hlY2tCZWZvcmVBZGQoJHNjb3BlKTtcblxuICAgICAgICAgICAgICAgIGlmIChjaGVjayA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5oYWxvLXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgcHJvZHVjdElkICsgJ1wiXScpLmFkZENsYXNzKCdoYXNPcHRpb25zLS1zZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKCRzY29wZSwgZGF0YSkge1xuICAgICAgICB2YXIgcHJvZHVjdElkID0gJCgnW25hbWU9XCJwcm9kdWN0X2lkXCJdJywgJHNjb3BlKS52YWwoKTtcblxuICAgICAgICBpZiAoIWRhdGEucHVyY2hhc2FibGUgfHwgIWRhdGEuaW5zdG9jaykge1xuICAgICAgICAgICAgJCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ2lzQ2hlY2tlZCcpO1xuICAgICAgICAgICAgJCgnI2ZidF9wcm9kdWN0JyArIHByb2R1Y3RJZCkucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgJCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ2hhc09wdGlvbnMtLXNlbGVjdGVkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcuaGFsby1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5hZGRDbGFzcygnaXNDaGVja2VkJyk7XG4gICAgICAgICAgICAkKCcjZmJ0X3Byb2R1Y3QnICsgcHJvZHVjdElkKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSkucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIGlmICgkc2NvcGUuZmluZCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoZWNrID0gY2hlY2tCZWZvcmVBZGQoJHNjb3BlKTtcblxuICAgICAgICAgICAgICAgIGlmIChjaGVjayA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5oYWxvLXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgcHJvZHVjdElkICsgJ1wiXScpLmFkZENsYXNzKCdoYXNPcHRpb25zLS1zZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFZpZXdNb2RlbCgkc2NvcGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICRwcmljZVdpdGhUYXg6ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgICRwcmljZVdpdGhvdXRUYXg6ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIHJycFdpdGhUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucnJwLXByaWNlLS13aXRoVGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtd2l0aC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBycnBXaXRob3V0VGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aG91dFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcnJwLXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm9uU2FsZVdpdGhUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcubm9uLXNhbGUtcHJpY2UtLXdpdGhUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGgtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm9uU2FsZVdpdGhvdXRUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcubm9uLXNhbGUtcHJpY2UtLXdpdGhvdXRUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VTYXZlZDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5wcmljZS1zZWN0aW9uLS1zYXZpbmcnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXNhdmVkXScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VOb3dMYWJlbDoge1xuICAgICAgICAgICAgICAgICRzcGFuOiAkKCcucHJpY2Utbm93LWxhYmVsJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZUxhYmVsOiB7XG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJy5wcmljZS1sYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJHdlaWdodDogJCgnLnByb2R1Y3RWaWV3LWluZm8gW2RhdGEtcHJvZHVjdC13ZWlnaHRdJywgJHNjb3BlKSxcbiAgICAgICAgICAgICRpbmNyZW1lbnRzOiAkKCcuZm9ybS1maWVsZC0taW5jcmVtZW50cyA6aW5wdXQnLCAkc2NvcGUpLFxuICAgICAgICAgICAgJGFkZFRvQ2FydDogJCgnI2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCcsICRzY29wZSksXG4gICAgICAgICAgICAkd2lzaGxpc3RWYXJpYXRpb246ICQoJ1tkYXRhLXdpc2hsaXN0LWFkZF0gW25hbWU9XCJ2YXJpYXRpb25faWRcIl0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgc3RvY2s6IHtcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyOiAkKCcuZm9ybS1maWVsZC0tc3RvY2snLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRpbnB1dDogJCgnW2RhdGEtcHJvZHVjdC1zdG9ja10nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICRza3U6ICQoJ1tkYXRhLXByb2R1Y3Qtc2t1XScpLFxuICAgICAgICAgICAgJHVwYzogJCgnW2RhdGEtcHJvZHVjdC11cGNdJyksXG4gICAgICAgICAgICBxdWFudGl0eToge1xuICAgICAgICAgICAgICAgICR0ZXh0OiAkKCcuaW5jcmVtZW50VG90YWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRpbnB1dDogJCgnW25hbWU9cXR5XFxcXFtcXFxcXV0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICRidWxrUHJpY2luZzogJCgnLnByb2R1Y3RWaWV3LWluZm8tYnVsa1ByaWNpbmcnLCAkc2NvcGUpLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dNZXNzYWdlQm94KG1lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgJG1lc3NhZ2VCb3ggPSAkKCcucHJvZHVjdEF0dHJpYnV0ZXMtbWVzc2FnZScpO1xuXG4gICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgICAkKCcuYWxlcnRCb3gtbWVzc2FnZScsICRtZXNzYWdlQm94KS50ZXh0KG1lc3NhZ2UpO1xuICAgICAgICAgICAgJG1lc3NhZ2VCb3guc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJG1lc3NhZ2VCb3guaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKSB7XG4gICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gdXBkYXRlUHJpY2VWaWV3KHZpZXdNb2RlbCwgcHJpY2UpIHtcbiAgICAgICAgY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKTtcblxuICAgICAgICBpZiAocHJpY2Uud2l0aF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kcHJpY2VXaXRoVGF4Lmh0bWwocHJpY2Uud2l0aF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS53aXRob3V0X3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLiRwcmljZVdpdGhvdXRUYXguaHRtbChwcmljZS53aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLnJycF93aXRoX3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kc3Bhbi5odG1sKHByaWNlLnJycF93aXRoX3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLnJycF93aXRob3V0X3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kc3Bhbi5odG1sKHByaWNlLnJycF93aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLnNhdmVkKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRzcGFuLmh0bWwocHJpY2Uuc2F2ZWQuZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uaGlkZSgpO1xuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRzcGFuLmh0bWwocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uaGlkZSgpO1xuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRzcGFuLmh0bWwocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybShmb3JtRGF0YSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIGZvcm1EYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIEZpbGUgJiYgIXZhbC5uYW1lICYmICF2YWwuc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm9ybURhdGE7XG4gICAgfVxufVxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29udGV4dCkge1xuICAgIGlmIChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaGFsb19wcmV2X25leHRfcHJvZHVjdCA9PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gY29udGV4dC50b2tlbjtcbiAgICAgICAgY29uc3QgY3VyQ29kZSA9ICQoJy5ib2R5JykuZGF0YSgnY3VycmVuY3ktY29kZScpO1xuXG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDEwMjQpIHtcbiAgICAgICAgICAgIGlmICgkKCcucHJvZHVjdFZpZXctbmV4dFByb2R1Y3RzJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb2R1Y3RJZCA9ICQoJy5wcm9kdWN0Vmlldy1uZXh0UHJvZHVjdHMnKS5kYXRhKCdwcm9kdWN0LWlkJyksXG4gICAgICAgICAgICAgICAgICAgIG5leHRJZCA9IHByb2R1Y3RJZCArIDEsXG4gICAgICAgICAgICAgICAgICAgIHByZXZJZCA9IHByb2R1Y3RJZCAtIDEsXG4gICAgICAgICAgICAgICAgICAgIG5leHRMaW5rLCBwcmV2TGluaywgbGlzdDtcblxuICAgICAgICAgICAgICAgIGNvbnN0ICRwcm9kV3JhcCA9ICQoJy5wcm9kdWN0Vmlldy1uZXh0UHJvZHVjdHMgLm5leHQtcHJldi1tb2RhbCcpLFxuICAgICAgICAgICAgICAgICAgICAkcHJvZEljb25zID0gJCgnLnByb2R1Y3RWaWV3LW5leHRQcm9kdWN0cyAubmV4dC1wcmV2LWljb25zJyk7XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRQcm9kdWN0KGFycikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoKCcvZ3JhcGhxbCcsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdG9rZW5cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBgXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSBNeVF1ZXJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMgKGVudGl0eUlkczogW2ArYXJyK2BdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdDogbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5IChjdXJyZW5jeUNvZGU6IGArY3VyQ29kZStgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xQbGFjZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsVG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aG91c2FuZHNUb2tlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxQbGFjZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50IFByb2R1Y3RGaWVsZHMgb24gUHJvZHVjdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nNzBweDogdXJsKHdpZHRoOiA3MClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZVJhbmdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXRhaWxQcmljZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VQcmljZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCBNb25leUZpZWxkcyBvbiBNb25leSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeUNvZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH0pLFxuICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihwcmV2SWQgIT0gdW5kZWZpbmVkICYmIG5leHRJZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdCA9IFtwcmV2SWQsIG5leHRJZF07XG5cbiAgICAgICAgICAgICAgICAgICAgZ2V0UHJvZHVjdChsaXN0KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyUHJvZHVjdChkYXRhLnNpdGUucHJvZHVjdHMuZWRnZXMsIGRhdGEuc2l0ZS5jdXJyZW5jeS5kaXNwbGF5KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZm9ybWF0TW9uZXkobiwgYywgZCwgdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IGlzTmFOKGMgPSBNYXRoLmFicyhjKSkgPyAyIDogYyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGQgPSBkID09IHVuZGVmaW5lZCA/IFwiLlwiIDogZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSB0ID09IHVuZGVmaW5lZCA/IFwiLFwiIDogdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBuIDwgMCA/IFwiLVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBTdHJpbmcocGFyc2VJbnQobiA9IE1hdGguYWJzKE51bWJlcihuKSB8fCAwKS50b0ZpeGVkKGMpKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBqID0gKGogPSBpLmxlbmd0aCkgPiAzID8gaiAlIDMgOiAwO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzICsgKGogPyBpLnN1YnN0cigwLCBqKSArIHQgOiBcIlwiKSArIGkuc3Vic3RyKGopLnJlcGxhY2UoLyhcXGR7M30pKD89XFxkKS9nLCBcIiQxXCIgKyB0KSArIChjID8gZCArIE1hdGguYWJzKG4gLSBpKS50b0ZpeGVkKGMpLnNsaWNlKDIpIDogXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcmVuZGVyUHJvZHVjdChwcm9kdWN0LCBjdXJEaXNwbGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJC5lYWNoKHByb2R1Y3QsIChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBlbGVtZW50LnByb2R1Y3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbCA9IGN1ckRpc3BsYXkuc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xQbGFjZW1lbnQgPSBjdXJEaXNwbGF5LnN5bWJvbFBsYWNlbWVudC50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsVG9rZW4gPSBjdXJEaXNwbGF5LmRlY2ltYWxUb2tlbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFBsYWNlcyA9IGN1ckRpc3BsYXkuZGVjaW1hbFBsYWNlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRzVG9rZW4gPSBjdXJEaXNwbGF5LnRob3VzYW5kc1Rva2VuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aXRsZSwgcHJpY2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCgnLmJvZHknKS5oYXNDbGFzcygnaXMtbG9naW4nKSB8fCBjb250ZXh0LnRoZW1lU2V0dGluZ3MucmVzdHJpY3RfdG9fbG9naW4gIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ucHJpY2VzLnByaWNlUmFuZ2UubWluLnZhbHVlIDwgaXRlbS5wcmljZXMucHJpY2VSYW5nZS5tYXgudmFsdWUgJiYgY29udGV4dC50aGVtZVNldHRpbmdzLnByaWNlX3Jhbmdlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VNaW4gPSAoc3ltYm9sUGxhY2VtZW50ID09IFwibGVmdFwiID8gc3ltYm9sIDogXCJcIikgKyAoZm9ybWF0TW9uZXkoaXRlbS5wcmljZXMucHJpY2VSYW5nZS5taW4udmFsdWUsIGRlY2ltYWxQbGFjZXMsIGRlY2ltYWxUb2tlbiwgdGhvdXNhbmRzVG9rZW4pKSArIChzeW1ib2xQbGFjZW1lbnQgIT0gXCJsZWZ0XCIgPyBzeW1ib2wgOiBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlTWF4ID0gKHN5bWJvbFBsYWNlbWVudCA9PSBcImxlZnRcIiA/IHN5bWJvbCA6IFwiXCIpICsgKGZvcm1hdE1vbmV5KGl0ZW0ucHJpY2VzLnByaWNlUmFuZ2UubWF4LnZhbHVlLCBkZWNpbWFsUGxhY2VzLCBkZWNpbWFsVG9rZW4sIHRob3VzYW5kc1Rva2VuKSkgKyAoc3ltYm9sUGxhY2VtZW50ICE9IFwibGVmdFwiID8gc3ltYm9sIDogXCJcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlID0gJzxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXdpdGhvdXRUYXggbm9uLXNhbGUtcHJpY2UtLXdpdGhvdXRUYXggcHJpY2Utbm9uZVwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGhvdXQtdGF4PVwiXCIgY2xhc3M9XCJwcmljZSBwcmljZS0tbm9uLXNhbGVcIj48L3NwYW4+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0td2l0aG91dFRheFwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXg9XCJcIiBjbGFzcz1cInByaWNlIHByaWNlLS13aXRob3V0VGF4XCI+JytwcmljZU1pbisnIC0gJytwcmljZU1heCsnPC9zcGFuPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZURlZiA9IChzeW1ib2xQbGFjZW1lbnQgPT0gXCJsZWZ0XCIgPyBzeW1ib2wgOiBcIlwiKSArIChmb3JtYXRNb25leShpdGVtLnByaWNlcy5wcmljZS52YWx1ZSwgZGVjaW1hbFBsYWNlcywgZGVjaW1hbFRva2VuLCB0aG91c2FuZHNUb2tlbikpICsgKHN5bWJvbFBsYWNlbWVudCAhPSBcImxlZnRcIiA/IHN5bWJvbCA6IFwiXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5wcmljZXMucmV0YWlsUHJpY2UgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnByaWNlcy5iYXNlUHJpY2UudmFsdWUgPiBpdGVtLnByaWNlcy5wcmljZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUJhcyA9IChzeW1ib2xQbGFjZW1lbnQgPT0gXCJsZWZ0XCIgPyBzeW1ib2wgOiBcIlwiKSArIChmb3JtYXRNb25leShpdGVtLnByaWNlcy5iYXNlUHJpY2UudmFsdWUsIGRlY2ltYWxQbGFjZXMsIGRlY2ltYWxUb2tlbiwgdGhvdXNhbmRzVG9rZW4pKSArIChzeW1ib2xQbGFjZW1lbnQgIT0gXCJsZWZ0XCIgPyBzeW1ib2wgOiBcIlwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZSA9ICc8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS13aXRob3V0VGF4IG5vbi1zYWxlLXByaWNlLS13aXRob3V0VGF4XCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGhvdXQtdGF4PVwiXCIgY2xhc3M9XCJwcmljZSBwcmljZS0tbm9uLXNhbGVcIj4nK3ByaWNlQmFzKyc8L3NwYW4+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXdpdGhvdXRUYXhcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXg9XCJcIiBjbGFzcz1cInByaWNlIHByaWNlLS13aXRob3V0VGF4XCI+JytwcmljZURlZisnPC9zcGFuPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlID0gJzxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXdpdGhvdXRUYXggbm9uLXNhbGUtcHJpY2UtLXdpdGhvdXRUYXggcHJpY2Utbm9uZVwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3Qtbm9uLXNhbGUtcHJpY2Utd2l0aG91dC10YXg9XCJcIiBjbGFzcz1cInByaWNlIHByaWNlLS1ub24tc2FsZVwiPjwvc3Bhbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0td2l0aG91dFRheFwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1wcmljZS13aXRob3V0LXRheD1cIlwiIGNsYXNzPVwicHJpY2UgcHJpY2UtLXdpdGhvdXRUYXhcIj4nK3ByaWNlRGVmKyc8L3NwYW4+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnByaWNlcy5yZXRhaWxQcmljZS52YWx1ZSA+IGl0ZW0ucHJpY2VzLnByaWNlLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlUmV0ID0gKHN5bWJvbFBsYWNlbWVudCA9PSBcImxlZnRcIiA/IHN5bWJvbCA6IFwiXCIpICsgKGZvcm1hdE1vbmV5KGl0ZW0ucHJpY2VzLnJldGFpbFByaWNlLnZhbHVlLCBkZWNpbWFsUGxhY2VzLCBkZWNpbWFsVG9rZW4sIHRob3VzYW5kc1Rva2VuKSkgKyAoc3ltYm9sUGxhY2VtZW50ICE9IFwibGVmdFwiID8gc3ltYm9sIDogXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlID0gJzxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXdpdGhvdXRUYXggbm9uLXNhbGUtcHJpY2UtLXdpdGhvdXRUYXhcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3Qtbm9uLXNhbGUtcHJpY2Utd2l0aG91dC10YXg9XCJcIiBjbGFzcz1cInByaWNlIHByaWNlLS1ub24tc2FsZVwiPicrcHJpY2VSZXQrJzwvc3Bhbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0td2l0aG91dFRheFwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1wcmljZS13aXRob3V0LXRheD1cIlwiIGNsYXNzPVwicHJpY2UgcHJpY2UtLXdpdGhvdXRUYXhcIj4nK3ByaWNlRGVmKyc8L3NwYW4+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSAnPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0td2l0aG91dFRheCBub24tc2FsZS1wcmljZS0td2l0aG91dFRheCBwcmljZS1ub25lXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRob3V0LXRheD1cIlwiIGNsYXNzPVwicHJpY2UgcHJpY2UtLW5vbi1zYWxlXCI+PC9zcGFuPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS13aXRob3V0VGF4XCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LXByaWNlLXdpdGhvdXQtdGF4PVwiXCIgY2xhc3M9XCJwcmljZSBwcmljZS0td2l0aG91dFRheFwiPicrcHJpY2VEZWYrJzwvc3Bhbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZSA9ICc8cCB0cmFuc2xhdGU+TG9nIGluIGZvciBwcmljaW5nPC9wPic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb2R1Y3RUaXRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGV4dC50aGVtZVNldHRpbmdzLmNhcmRfdGl0bGVfdHlwZSA9PSAnY2xhbXAnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZSA9ICc8YSBocmVmPVwiJytpdGVtLnBhdGgrJ1wiIGNsYXNzPVwiY2xhbXBcIiBzdHlsZT1cIi13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7IC13ZWJraXQtbGluZS1jbGFtcDogMTtcIiBhcmlhLWxhYmVsPVwiTGluayBHbyBUbyBUaGlzIFByb2R1Y3RcIj4nK2l0ZW0ubmFtZSsnPC9hPidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGUgPSAnPGEgaHJlZj1cIicraXRlbS5wYXRoKydcIiBjbGFzcz1cImNsYW1wXCIgYXJpYS1sYWJlbD1cIkxpbmsgR28gVG8gVGhpcyBQcm9kdWN0XCI+JytpdGVtLm5hbWUrJzwvYT4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaHRtbF9jYXJkID0gJzxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtcHJldk5leHRcIiBkYXRhLXByb2R1Y3QtaWQ9XCInK2l0ZW0uZW50aXR5SWQrJ1wiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1wcmV2TmV4dC1pbWFnZVwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJjYXJkLWxpbmtcIiBocmVmPVwiJytpdGVtLnBhdGgrJ1wiIGFyaWEtbGFiZWw9XCJMaW5rIEdvIFRvIFRoaXMgUHJvZHVjdFwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWltZy1jb250YWluZXJcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImNhcmQtaW1hZ2VcIiBzcmM9XCInK2l0ZW0uZGVmYXVsdEltYWdlLmltZzcwcHgrJ1wiIGFsdD1cIicraXRlbS5kZWZhdWx0SW1hZ2UuYWx0VGV4dCsnXCIgdGl0bGU9XCInK2l0ZW0uZGVmYXVsdEltYWdlLmFsdFRleHQrJ1wiIC8+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJjYXJkLXRpdGxlXCI+Jytwcm9kdWN0VGl0bGUrJzwvaDQ+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1wcmljZVwiIGRhdGEtdGVzdC1pbmZvLXR5cGU9XCJwcmljZVwiPicrcHJpY2UrJzwvZGl2PlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uZW50aXR5SWQgPT0gcHJldklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnBhdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2RJY29ucy5maW5kKCcucHJldi1pY29uJykuYXR0cignaHJlZicsIGl0ZW0ucGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJvZEljb25zLmZpbmQoJy5wcmV2LWljb24nKS5yZW1vdmVDbGFzcygnZGlzYWJsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2RXcmFwLmZpbmQoJyNwcmV2LXByb2R1Y3QtbW9kYWwnKS5hcHBlbmQoaHRtbF9jYXJkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kSWNvbnMuZmluZCgnLnByZXYtaWNvbicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2RXcmFwLmZpbmQoJyNwcmV2LXByb2R1Y3QtbW9kYWwnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5lbnRpdHlJZCA9PSBuZXh0SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5wYXRoICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2RJY29ucy5maW5kKCcubmV4dC1pY29uJykuYXR0cignaHJlZicsIGl0ZW0ucGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJvZEljb25zLmZpbmQoJy5uZXh0LWljb24nKS5yZW1vdmVDbGFzcygnZGlzYWJsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2RXcmFwLmZpbmQoJyNuZXh0LXByb2R1Y3QtbW9kYWwnKS5hcHBlbmQoaHRtbF9jYXJkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2RJY29ucy5maW5kKCcubmV4dC1pY29uJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJvZFdyYXAuZmluZCgnI25leHQtcHJvZHVjdC1tb2RhbCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkcHJvZEljb25zLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAkcHJvZFdyYXAuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgJHByb2RXcmFwLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnI25leHQtcHJvZHVjdC1tb2RhbCcpLnJlbW92ZUNsYXNzKCdpcy1zaG93Jyk7XG4gICAgICAgICAgICAgICAgICAgICQoJyNwcmV2LXByb2R1Y3QtbW9kYWwnKS5yZW1vdmVDbGFzcygnaXMtc2hvdycpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJCgnLm5leHQtaWNvbicsICRwcm9kSWNvbnMpLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2Rpc2FibGUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3ByZXYtcHJvZHVjdC1tb2RhbCcpLnJlbW92ZUNsYXNzKCdpcy1zaG93Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjbmV4dC1wcm9kdWN0LW1vZGFsJykuYWRkQ2xhc3MoJ2lzLXNob3cnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNwcmV2LXByb2R1Y3QtbW9kYWwnKS5yZW1vdmVDbGFzcygnaXMtc2hvdycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkKCcucHJldi1pY29uJywgJHByb2RJY29ucykub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnZGlzYWJsZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjbmV4dC1wcm9kdWN0LW1vZGFsJykucmVtb3ZlQ2xhc3MoJ2lzLXNob3cnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNwcmV2LXByb2R1Y3QtbW9kYWwnKS5hZGRDbGFzcygnaXMtc2hvdycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI25leHQtcHJvZHVjdC1tb2RhbCcpLnJlbW92ZUNsYXNzKCdpcy1zaG93Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICRwcm9kV3JhcC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgJHByb2RXcmFwLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICRwcm9kV3JhcC5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oJHNjb3BlLCBjb250ZXh0KXtcbiAgICBpZiAoJCgnI2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCcpLmxlbmd0aCkge1xuICAgICAgICB2YXIgc2Nyb2xsID0gJCgnI2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCcpLm9mZnNldCgpLFxuICAgICAgICAgICAgaF9zdGF0YyA9ICQoJyNoYWxvX3N0aWNreV9hZGRUb0NhcnQnKS5vdXRlckhlaWdodCgpLFxuICAgICAgICAgICAgc2Nyb2xsVG9wID0gc2Nyb2xsLnRvcDtcblxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zdCAkc3RpY2t5ID0gJCgnI2hhbG9fc3RpY2t5X2FkZFRvQ2FydCcpO1xuXG4gICAgICAgICAgICBpZigkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiBzY3JvbGxUb3AgKyA0MDApe1xuXG4gICAgICAgICAgICAgICAgaWYoISQoJyNoYWxvX3N0aWNreV9hZGRUb0NhcnQnKS5oYXNDbGFzcygnc2hvd19zdGlja3knKSl7XG4gICAgICAgICAgICAgICAgICAgICQoJyNoYWxvX3N0aWNreV9hZGRUb0NhcnQnKS5hZGRDbGFzcygnc2hvd19zdGlja3knKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA1NTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNyZWNlbnRseV9ib3VnaHRfbGlzdCcpLmNzcyhcImJvdHRvbVwiLCAkKCcjaGFsb19zdGlja3lfYWRkVG9DYXJ0Jykub3V0ZXJIZWlnaHQoKSArIDQwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5oYWxvLWFzay1hbi1leHBlcnQnKS5jc3MoXCJib3R0b21cIiwgJCgnI2hhbG9fc3RpY2t5X2FkZFRvQ2FydCcpLm91dGVySGVpZ2h0KCkgKyA0MCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZigkKCcjaGFsb19zdGlja3lfYWRkVG9DYXJ0JykubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjcmVjZW50bHlfYm91Z2h0X2xpc3QnKS5jc3MoXCJib3R0b21cIiwgJCgnI2hhbG9fc3RpY2t5X2FkZFRvQ2FydCcpLm91dGVySGVpZ2h0KCkgKyAzMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmhhbG8tYXNrLWFuLWV4cGVydCcpLmNzcyhcImJvdHRvbVwiLCAkKCcjaGFsb19zdGlja3lfYWRkVG9DYXJ0Jykub3V0ZXJIZWlnaHQoKSArIDEzMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNyZWNlbnRseV9ib3VnaHRfbGlzdCcpLmNzcyhcImJvdHRvbVwiLCAzMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmhhbG8tYXNrLWFuLWV4cGVydCcpLmNzcyhcImJvdHRvbVwiLCAxNTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICQoJyNoYWxvX3N0aWNreV9hZGRUb0NhcnQnKS5yZW1vdmVDbGFzcygnc2hvd19zdGlja3knKTtcbiAgICAgICAgICAgICAgICAkKCcucG9wLXVwLW9wdGlvbicpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdvcGVuUG9wdXBPcHRpb24nKTtcblxuICAgICAgICAgICAgICAgICQoJy5jaG9vc2Vfb3B0aW9uc19hZGQnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICAkKCcjcmVjZW50bHlfYm91Z2h0X2xpc3QnKS5jc3MoXCJib3R0b21cIiwgMzApO1xuXG4gICAgICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gNTUwKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5oYWxvLWFzay1hbi1leHBlcnQnKS5jc3MoXCJib3R0b21cIiwgMzApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5oYWxvLWFzay1hbi1leHBlcnQnKS5jc3MoXCJib3R0b21cIiwgMTUwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsJy5jaG9vc2Vfb3B0aW9uc19hZGQnLCBmdW5jdGlvbihldmVudCl7XG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICQoJy5wb3AtdXAtb3B0aW9uJykudG9nZ2xlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnb3BlblBvcHVwT3B0aW9uJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsJy5wb3AtdXAtb3B0aW9uIC5idG4tY2xvc2UnLCBmdW5jdGlvbihldmVudCl7XG4gICAgICAgICAgICAkKFwiLnBvcC11cC1vcHRpb25cIikucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnb3BlblBvcHVwT3B0aW9uJyk7XG4gICAgICAgICAgICAkKCcuY2hvb3NlX29wdGlvbnNfYWRkJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IHNjcm9sbFRvcCArIDQwMCl7XG4gICAgICAgICAgICAgICAgaWYoISQoJyNoYWxvX3N0aWNreV9hZGRUb0NhcnQnKS5oYXNDbGFzcygnc2hvd19zdGlja3knKSl7XG4gICAgICAgICAgICAgICAgICAgICQoJyNoYWxvX3N0aWNreV9hZGRUb0NhcnQnKS5hZGRDbGFzcygnc2hvd19zdGlja3knKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA1NTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNyZWNlbnRseV9ib3VnaHRfbGlzdCcpLmNzcyhcImJvdHRvbVwiLCAkKCcjaGFsb19zdGlja3lfYWRkVG9DYXJ0Jykub3V0ZXJIZWlnaHQoKSArIDQwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5oYWxvLWFzay1hbi1leHBlcnQnKS5jc3MoXCJib3R0b21cIiwgJCgnI2hhbG9fc3RpY2t5X2FkZFRvQ2FydCcpLm91dGVySGVpZ2h0KCkgKyA0MCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZigkKCcjaGFsb19zdGlja3lfYWRkVG9DYXJ0JykubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjcmVjZW50bHlfYm91Z2h0X2xpc3QnKS5jc3MoXCJib3R0b21cIiwgJCgnI2hhbG9fc3RpY2t5X2FkZFRvQ2FydCcpLm91dGVySGVpZ2h0KCkgKyAzMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmhhbG8tYXNrLWFuLWV4cGVydCcpLmNzcyhcImJvdHRvbVwiLCAkKCcjaGFsb19zdGlja3lfYWRkVG9DYXJ0Jykub3V0ZXJIZWlnaHQoKSArIDEzMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNyZWNlbnRseV9ib3VnaHRfbGlzdCcpLmNzcyhcImJvdHRvbVwiLCAzMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmhhbG8tYXNrLWFuLWV4cGVydCcpLmNzcyhcImJvdHRvbVwiLCAxNTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24geW91dHViZUNhcm91c2VsRmFjdG9yeSgkc2NvcGUpIHtcbiAgICBpZiAoJHNjb3BlLmZpbmQoJ1tkYXRhLXlvdXR1YmVdJykubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeSA9IGluaXRDYXJvdXNlbC5iaW5kKHdpbmRvdywgJHNjb3BlKTtcblxuICAgICAgICAgICAgY29uc3QgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgICAgICB0YWcuc3JjID0gJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3BsYXllcl9hcGknO1xuICAgICAgICAgICAgY29uc3QgZmlyc3RTY3JpcHRUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XG4gICAgICAgICAgICBmaXJzdFNjcmlwdFRhZy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YWcsIGZpcnN0U2NyaXB0VGFnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluaXRDYXJvdXNlbCgkc2NvcGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYWxvWW91dHViZVNsaWNrKHNsaWNrKSB7XG4gICAgdmFyICRzbGljayA9ICQoc2xpY2spLFxuICAgICAgICAkdmlkZW9zID0gJHNsaWNrLmZpbmQoJ1tkYXRhLXlvdXR1YmVdJyk7XG5cbiAgICAgYmluZEV2ZW50cyhzbGljayk7XG5cbiAgICBmdW5jdGlvbiBiaW5kRXZlbnRzKCkge1xuICAgICAgICBpZiAoJHNsaWNrLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgICAgICAgICBvblNsaWNrSW5pdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgJHNsaWNrLm9uKCdpbml0Jywgb25TbGlja0luaXQpO1xuICAgICAgICAkc2xpY2sub24oJ2JlZm9yZUNoYW5nZScsIG9uU2xpY2tCZWZvcmVDaGFuZ2UpO1xuICAgICAgICAkc2xpY2sub24oJ2FmdGVyQ2hhbmdlJywgb25TbGlja0FmdGVyQ2hhbmdlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblBsYXllclJlYWR5KGV2ZW50KSB7XG4gICAgICAgICQoZXZlbnQudGFyZ2V0LmdldElmcmFtZSgpKS5jbG9zZXN0KCcuc2xpY2stc2xpZGUnKS5kYXRhKCd5b3V0dWJlLXBsYXllcicsIGV2ZW50LnRhcmdldCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoJChldmVudC50YXJnZXQuZ2V0SWZyYW1lKCkpLmNsb3Nlc3QoJy5zbGljay1zbGlkZScpLmhhc0NsYXNzKCdzbGljay1hY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICRzbGljay5zbGljaygnc2xpY2tQYXVzZScpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5wbGF5VmlkZW8oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMjAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblBsYXllclN0YXRlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5kYXRhID09PSBZVC5QbGF5ZXJTdGF0ZS5QTEFZSU5HKSB7XG4gICAgICAgICAgICAkc2xpY2suc2xpY2soJ3NsaWNrUGF1c2UnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC5kYXRhID09PSBZVC5QbGF5ZXJTdGF0ZS5FTkRFRCkge1xuICAgICAgICAgICAgJHNsaWNrLnNsaWNrKCdzbGlja05leHQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uU2xpY2tJbml0KCkge1xuICAgICAgICAkdmlkZW9zLmVhY2goKGosIHZpZCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHZpZCA9ICQodmlkKTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gYHlvdXR1YmVfcGxheWVyXyR7Xy51bmlxdWVJZCgpfWA7XG5cbiAgICAgICAgICAgICR2aWQuYXR0cignaWQnLCBpZCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHBsYXllciA9IG5ldyBZVC5QbGF5ZXIoaWQsIHtcbiAgICAgICAgICAgICAgICBob3N0OiAnaHR0cDovL3d3dy55b3V0dWJlLmNvbScsXG4gICAgICAgICAgICAgICAgdmlkZW9JZDogJHZpZC5kYXRhKCd5b3V0dWJlJyksXG4gICAgICAgICAgICAgICAgd21vZGU6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgcGxheWVyVmFyczoge1xuICAgICAgICAgICAgICAgICAgICBhdXRvcGxheTogMCxcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbHM6IDAsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVrYjogMSxcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlanNhcGk6IDEsXG4gICAgICAgICAgICAgICAgICAgIGZzOiAwLFxuICAgICAgICAgICAgICAgICAgICByZWw6IDAsXG4gICAgICAgICAgICAgICAgICAgIHNob3dpbmZvOiAwLFxuICAgICAgICAgICAgICAgICAgICBpdl9sb2FkX3BvbGljeTogMyxcbiAgICAgICAgICAgICAgICAgICAgbW9kZXN0YnJhbmRpbmc6IDEsXG4gICAgICAgICAgICAgICAgICAgIHdtb2RlOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgICAgICAgICAgIG9uUmVhZHk6IG9uUGxheWVyUmVhZHksXG4gICAgICAgICAgICAgICAgICAgIG9uU3RhdGVDaGFuZ2U6IG9uUGxheWVyU3RhdGVDaGFuZ2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblNsaWNrQmVmb3JlQ2hhbmdlKCkge1xuICAgICAgICBjb25zdCBwbGF5ZXIgPSAkc2xpY2suZmluZCgnLnNsaWNrLXNsaWRlLnNsaWNrLWFjdGl2ZScpLmRhdGEoJ3lvdXR1YmUtcGxheWVyJyk7XG5cbiAgICAgICAgaWYgKHBsYXllcikge1xuICAgICAgICAgICAgcGxheWVyLnN0b3BWaWRlbygpO1xuICAgICAgICAgICAgJHNsaWNrLnJlbW92ZUNsYXNzKCdzbGljay1zbGlkZXItLXBsYXl2aWRlbycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25TbGlja0FmdGVyQ2hhbmdlKCkge1xuICAgICAgICBjb25zdCBwbGF5ZXIgPSAkc2xpY2suZmluZCgnLnNsaWNrLXNsaWRlLnNsaWNrLWFjdGl2ZScpLmRhdGEoJ3lvdXR1YmUtcGxheWVyJyk7XG5cbiAgICAgICAgaWYgKHBsYXllcikge1xuICAgICAgICAgICAgJHNsaWNrLnNsaWNrKCdzbGlja1BhdXNlJyk7XG4gICAgICAgICAgICAkc2xpY2suYWRkQ2xhc3MoJ3NsaWNrLXNsaWRlci0tcGxheXZpZGVvJyk7XG4gICAgICAgICAgICBwbGF5ZXIucGxheVZpZGVvKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGluaXRDYXJvdXNlbCgkc2NvcGUpIHtcbiAgICAkc2NvcGUuZWFjaCgoaSwgc2xpY2spID0+IHtcbiAgICAgICAgY29uc3QgJHNsaWNrID0gJChzbGljayk7XG5cbiAgICAgICAgaWYgKCRzbGljay5maW5kKCdbZGF0YS15b3V0dWJlXScpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICRzbGljay5hZGRDbGFzcygnc2xpY2stc2xpZGVyLS12aWRlbycpO1xuXG4gICAgICAgICAgICBoYWxvWW91dHViZVNsaWNrKHNsaWNrKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiLypcbiBJbXBvcnQgYWxsIHByb2R1Y3Qgc3BlY2lmaWMganNcbiAqL1xuaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCBSZXZpZXcgZnJvbSAnLi9wcm9kdWN0L3Jldmlld3MnO1xuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuL2NvbW1vbi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgUHJvZHVjdERldGFpbHMgZnJvbSAnLi9jb21tb24vcHJvZHVjdC1kZXRhaWxzJztcbmltcG9ydCB2aWRlb0dhbGxlcnkgZnJvbSAnLi9wcm9kdWN0L3ZpZGVvLWdhbGxlcnknO1xuaW1wb3J0IHsgY2xhc3NpZnlGb3JtIH0gZnJvbSAnLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XG5pbXBvcnQgbW9kYWxGYWN0b3J5LCB7IE1vZGFsRXZlbnRzIH0gZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IGhhbG9QcmV2TmV4dFByb2R1Y3QgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9QcmV2TmV4dFByb2R1Y3QnO1xuaW1wb3J0IGhhbG9CdW5kbGVQcm9kdWN0cyBmcm9tICcuL2hhbG90aGVtZXMvaGFsb0J1bmRsZVByb2R1Y3RzJztcbmltcG9ydCBTb3J0YWJsZSBmcm9tICdzb3J0YWJsZWpzJztcbmltcG9ydCBoYWxvU3RpY2t5QWRkVG9DYXJ0IGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvU3RpY2t5QWRkVG9DYXJ0JztcbmltcG9ydCBoYWxvWW91dHViZUNhcm91c2VsIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvWW91dHViZVZpZGVvJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLnVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB0aGlzLiRyZXZpZXdMaW5rID0gJCgnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtcmV2aWV3LWZvcm1cIl0nKTtcbiAgICAgICAgdGhpcy4kYnVsa1ByaWNpbmdMaW5rID0gJCgnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtYnVsay1wcmljaW5nXCJdJyk7XG4gICAgICAgIHRoaXMucmV2aWV3TW9kYWwgPSBtb2RhbEZhY3RvcnkoJyNtb2RhbC1yZXZpZXctZm9ybScpWzBdO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIC8vIExpc3RlbiBmb3IgZm91bmRhdGlvbiBtb2RhbCBjbG9zZSBldmVudHMgdG8gc2FuaXRpemUgVVJMIGFmdGVyIHJldmlldy5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2Nsb3NlLmZuZHRuLnJldmVhbCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVybC5pbmRleE9mKCcjd3JpdGVfcmV2aWV3JykgIT09IC0xICYmIHR5cGVvZiB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgZG9jdW1lbnQudGl0bGUsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCB2YWxpZGF0b3I7XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZVxuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICB0aGlzLnByb2R1Y3REZXRhaWxzID0gbmV3IFByb2R1Y3REZXRhaWxzKCQoJy5wcm9kdWN0VmlldycpLCB0aGlzLmNvbnRleHQsIHdpbmRvdy5CQ0RhdGEucHJvZHVjdF9hdHRyaWJ1dGVzKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0RGV0YWlscy5zZXRQcm9kdWN0VmFyaWFudCgpO1xuXG4gICAgICAgIHZpZGVvR2FsbGVyeSgpO1xuXG4gICAgICAgIHRoaXMuYnVsa1ByaWNpbmdIYW5kbGVyKCk7XG4gICAgICAgIGhhbG9QcmV2TmV4dFByb2R1Y3QodGhpcy5jb250ZXh0KTtcblxuICAgICAgICBpZiAodGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3MuaGFsb19idW5kbGVfcHJvZHVjdHNfZW5hYmxlID09IHRydWUpIHtcbiAgICAgICAgICAgIGhhbG9CdW5kbGVQcm9kdWN0cyh0aGlzLmNvbnRleHQpOyAgIFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9fY29tcGFyZV9jb2xvcnMgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5jb21wYXJlQ29sb3JzKCk7XG4gICAgICAgIH0gICBcblxuICAgICAgICBoYWxvU3RpY2t5QWRkVG9DYXJ0KCQoJy5wcm9kdWN0Vmlld19fdG9wJyksIHRoaXMuY29udGV4dCk7XG4gICAgICAgIGhhbG9Zb3V0dWJlQ2Fyb3VzZWwoJCgnLnByb2R1Y3RWaWV3X190b3AgW2RhdGEtc2xpY2tdJykpO1xuXG4gICAgICAgIGNvbnN0ICRyZXZpZXdGb3JtID0gY2xhc3NpZnlGb3JtKCcud3JpdGVSZXZpZXctZm9ybScpO1xuXG4gICAgICAgIGlmICgkcmV2aWV3Rm9ybS5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgICAgICBjb25zdCByZXZpZXcgPSBuZXcgUmV2aWV3KCRyZXZpZXdGb3JtKTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbihNb2RhbEV2ZW50cy5vcGVuZWQsICcjbW9kYWwtcmV2aWV3LWZvcm0nLCAoKSA9PiB0aGlzLnJldmlld01vZGFsLnNldHVwRm9jdXNUcmFwKCkpO1xuXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtcmV2aWV3LWZvcm1cIl0nLCAoKSA9PiB7XG4gICAgICAgICAgICB2YWxpZGF0b3IgPSByZXZpZXcucmVnaXN0ZXJWYWxpZGF0aW9uKHRoaXMuY29udGV4dCk7XG4gICAgICAgICAgICB0aGlzLmFyaWFEZXNjcmliZVJldmlld0lucHV0cygkcmV2aWV3Rm9ybSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRyZXZpZXdGb3JtLm9uKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdG9yKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJvZHVjdFJldmlld0hhbmRsZXIoKTtcbiAgICB9XG5cbiAgICBhcmlhRGVzY3JpYmVSZXZpZXdJbnB1dHMoJGZvcm0pIHtcbiAgICAgICAgJGZvcm0uZmluZCgnW2RhdGEtaW5wdXRdJykuZWFjaCgoXywgaW5wdXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9ICQoaW5wdXQpO1xuICAgICAgICAgICAgY29uc3QgbXNnU3BhbklkID0gYCR7JGlucHV0LmF0dHIoJ25hbWUnKX0tbXNnYDtcblxuICAgICAgICAgICAgJGlucHV0LnNpYmxpbmdzKCdzcGFuJykuYXR0cignaWQnLCBtc2dTcGFuSWQpO1xuICAgICAgICAgICAgJGlucHV0LmF0dHIoJ2FyaWEtZGVzY3JpYmVkYnknLCBtc2dTcGFuSWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm9kdWN0UmV2aWV3SGFuZGxlcigpIHtcbiAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyN3cml0ZV9yZXZpZXcnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuJHJldmlld0xpbmsudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJ1bGtQcmljaW5nSGFuZGxlcigpIHtcbiAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyNidWxrX3ByaWNpbmcnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuJGJ1bGtQcmljaW5nTGluay50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcGFyZUNvbG9ycygpIHtcbiAgICAgICAgJCgnLmhhbG8tY29tcGFyZUNvbG9ycy1zd2F0Y2ggLmZvcm0tb3B0aW9uJykub24oJ2NsaWNrJywgIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ3Nob3ctY29sb3InKTtcblxuICAgICAgICAgICAgdmFyIHRpdGxlID0gJCh0aGlzKS5maW5kKCcuZm9ybS1vcHRpb24tdmFyaWFudCcpLmF0dHIoJ3RpdGxlJyksXG4gICAgICAgICAgICAgICAgaWQgPSAkKHRoaXMpLmRhdGEoJ3Byb2R1Y3Qtc3dhdGNoLXZhbHVlJyksXG4gICAgICAgICAgICAgICAgJGNvbG9yLCAkY29sb3IyLCAkY29sb3IzLCAkaW1nO1xuXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnc2hvdy1jb2xvcicpKXtcbiAgICAgICAgICAgICAgICBpZigkKHRoaXMpLmZpbmQoJy5mb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvcicpLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICRjb2xvciA9ICQodGhpcykuZmluZCgnLmZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yJykuYXR0cignc3R5bGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAkKCcuaGFsby1jb21wYXJlQ29sb3JzLWltYWdlJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiaXRlbSBpdGVtLWNvbG9yIGl0ZW0tJytpZCsnXCI+PHNwYW4gY2xhc3M9XCJjb2xvclwiIHN0eWxlPVwiJyskY29sb3IrJztcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJ0aXRsZVwiPicrdGl0bGUrJzwvc3Bhbj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoJCh0aGlzKS5maW5kKCcuZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IyJykubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgJGNvbG9yID0gJCh0aGlzKS5maW5kKCcuZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IyIHNwYW46bnRoLWNoaWxkKDEpJykuYXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgJGNvbG9yMiA9ICQodGhpcykuZmluZCgnLmZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yMiBzcGFuOm50aC1jaGlsZCgyKScpLmF0dHIoJ3N0eWxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgJCgnLmhhbG8tY29tcGFyZUNvbG9ycy1pbWFnZScpLmFwcGVuZCgnPGRpdiBjbGFzcz1cIml0ZW0gaXRlbS1jb2xvciBpdGVtLScraWQrJ1wiPjxzcGFuIGNsYXNzPVwiY29sb3IgY29sb3IyXCI+PHNwYW4gc3R5bGU9XCInKyRjb2xvcisnO1wiPjwvc3Bhbj48c3BhbiBzdHlsZT1cIicrJGNvbG9yMisnO1wiPjwvc3Bhbj48L3NwYW4+PHNwYW4gY2xhc3M9XCJ0aXRsZVwiPicrdGl0bGUrJzwvc3Bhbj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoJCh0aGlzKS5maW5kKCcuZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IzJykubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgJGNvbG9yID0gJCh0aGlzKS5maW5kKCcuZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IzIHNwYW46bnRoLWNoaWxkKDEpJykuYXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgJGNvbG9yMiA9ICQodGhpcykuZmluZCgnLmZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yMyBzcGFuOm50aC1jaGlsZCgyKScpLmF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgICAgICRjb2xvcjMgPSAkKHRoaXMpLmZpbmQoJy5mb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvcjMgc3BhbjpudGgtY2hpbGQoMyknKS5hdHRyKCdzdHlsZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICQoJy5oYWxvLWNvbXBhcmVDb2xvcnMtaW1hZ2UnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJpdGVtIGl0ZW0tY29sb3IgaXRlbS0nK2lkKydcIj48c3BhbiBjbGFzcz1cImNvbG9yIGNvbG9yM1wiPjxzcGFuIHN0eWxlPVwiJyskY29sb3IrJztcIj48L3NwYW4+PHNwYW4gc3R5bGU9XCInKyRjb2xvcjIrJztcIj48L3NwYW4+PHNwYW4gc3R5bGU9XCInKyRjb2xvcjMrJztcIj48L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPVwidGl0bGVcIj4nK3RpdGxlKyc8L3NwYW4+PC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKCQodGhpcykuZmluZCgnLmZvcm0tb3B0aW9uLXZhcmlhbnQtLXBhdHRlcm4nKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAkaW1nID0gJCh0aGlzKS5maW5kKCcuZm9ybS1vcHRpb24tdmFyaWFudC0tcGF0dGVybicpLmF0dHIoJ3N0eWxlJykuc3BsaXQoXCInXCIpWzFdO1xuXG4gICAgICAgICAgICAgICAgICAgICQoJy5oYWxvLWNvbXBhcmVDb2xvcnMtaW1hZ2UnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJpdGVtIGl0ZW0tcGFydGVybiBpdGVtLScraWQrJ1wiPjxzcGFuIGNsYXNzPVwiaW1hZ2VcIj48aW1nIHNyYz0nKyRpbWcrJyBhbHQ9Jyt0aXRsZSsnIHRpdGxlPScrdGl0bGUrJz48L3NwYW4+PHNwYW4gY2xhc3M9XCJ0aXRsZVwiPicrdGl0bGUrJzwvc3Bhbj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgJCgnLmhhbG8tY29tcGFyZUNvbG9ycy1pbWFnZSAuaXRlbS0nK2lkKycnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID49IDEwMjUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3Itc3dhdGNoLWltYWdlJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbmV3IFNvcnRhYmxlKGVsLCB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogMTUwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBub2QgZnJvbSAnLi4vY29tbW9uL25vZCc7XG5pbXBvcnQgeyBDb2xsYXBzaWJsZUV2ZW50cyB9IGZyb20gJy4uL2NvbW1vbi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgZm9ybXMgZnJvbSAnLi4vY29tbW9uL21vZGVscy9mb3Jtcyc7XG5pbXBvcnQgeyBzYWZlU3RyaW5nIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzL3NhZmUtc3RyaW5nJztcbmltcG9ydCB7IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcigkcmV2aWV3Rm9ybSkge1xuICAgICAgICB0aGlzLnZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICRyZXZpZXdGb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nKSxcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kcmV2aWV3c0NvbnRlbnQgPSAkKCcjcHJvZHVjdC1yZXZpZXdzJyk7XG4gICAgICAgIHRoaXMuJGNvbGxhcHNpYmxlID0gJCgnW2RhdGEtY29sbGFwc2libGVdJywgdGhpcy4kcmV2aWV3c0NvbnRlbnQpO1xuXG4gICAgICAgIHRoaXMuaW5pdExpbmtCaW5kKCk7XG4gICAgICAgIHRoaXMuaW5qZWN0UGFnaW5hdGlvbkxpbmsoKTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZVJldmlld3MoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbiBpbml0aWFsIHBhZ2UgbG9hZCwgdGhlIHVzZXIgY2xpY2tzIG9uIFwiKDEyIFJldmlld3MpXCIgbGlua1xuICAgICAqIFRoZSBicm93c2VyIGp1bXBzIHRvIHRoZSByZXZpZXcgcGFnZSBhbmQgc2hvdWxkIGV4cGFuZCB0aGUgcmV2aWV3cyBzZWN0aW9uXG4gICAgICovXG4gICAgaW5pdExpbmtCaW5kKCkge1xuICAgICAgICBjb25zdCAkY29udGVudCA9ICQoJyNwcm9kdWN0UmV2aWV3cy1jb250ZW50JywgdGhpcy4kcmV2aWV3c0NvbnRlbnQpO1xuXG4gICAgICAgICQoJyNwcm9kdWN0UmV2aWV3X2xpbmsnKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAkKCcucHJvZHVjdFZpZXctcmV2aWV3VGFiTGluaycpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICBpZiAoISRjb250ZW50Lmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRjb2xsYXBzaWJsZS50cmlnZ2VyKENvbGxhcHNpYmxlRXZlbnRzLmNsaWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29sbGFwc2VSZXZpZXdzKCkge1xuICAgICAgICAvLyBXZSdyZSBpbiBwYWdpbmF0aW5nIHN0YXRlLCBkbyBub3QgY29sbGFwc2VcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoICYmIHdpbmRvdy5sb2NhdGlvbi5oYXNoLmluZGV4T2YoJyNwcm9kdWN0LXJldmlld3MnKSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9yY2UgY29sbGFwc2Ugb24gcGFnZSBsb2FkXG4gICAgICAgIHRoaXMuJGNvbGxhcHNpYmxlLnRyaWdnZXIoQ29sbGFwc2libGVFdmVudHMuY2xpY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluamVjdCBJRCBpbnRvIHRoZSBwYWdpbmF0aW9uIGxpbmtcbiAgICAgKi9cbiAgICBpbmplY3RQYWdpbmF0aW9uTGluaygpIHtcbiAgICAgICAgY29uc3QgJG5leHRMaW5rID0gJCgnLnBhZ2luYXRpb24taXRlbS0tbmV4dCAucGFnaW5hdGlvbi1saW5rJywgdGhpcy4kcmV2aWV3c0NvbnRlbnQpO1xuICAgICAgICBjb25zdCAkcHJldkxpbmsgPSAkKCcucGFnaW5hdGlvbi1pdGVtLS1wcmV2aW91cyAucGFnaW5hdGlvbi1saW5rJywgdGhpcy4kcmV2aWV3c0NvbnRlbnQpO1xuXG4gICAgICAgIGlmICgkbmV4dExpbmsubGVuZ3RoKSB7XG4gICAgICAgICAgICAkbmV4dExpbmsuYXR0cignaHJlZicsIGAkeyRuZXh0TGluay5hdHRyKCdocmVmJyl9ICN0YWItcmV2aWV3c2ApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRwcmV2TGluay5sZW5ndGgpIHtcbiAgICAgICAgICAgICRwcmV2TGluay5hdHRyKCdocmVmJywgYCR7JHByZXZMaW5rLmF0dHIoJ2hyZWYnKX0gI3RhYi1yZXZpZXdzYCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWdpc3RlclZhbGlkYXRpb24oY29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLnZhbGlkYXRvci5hZGQoW3tcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW25hbWU9XCJyZXZyYXRpbmdcIl0nLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHNhZmVTdHJpbmcodGhpcy5jb250ZXh0LnJldmlld1JhdGluZyksXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW25hbWU9XCJyZXZ0aXRsZVwiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogc2FmZVN0cmluZyh0aGlzLmNvbnRleHQucmV2aWV3U3ViamVjdCksXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW25hbWU9XCJyZXZ0ZXh0XCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBzYWZlU3RyaW5nKHRoaXMuY29udGV4dC5yZXZpZXdDb21tZW50KSxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcud3JpdGVSZXZpZXctZm9ybSBbbmFtZT1cImVtYWlsXCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1zLmVtYWlsKHZhbCk7XG4gICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5yZXZpZXdFbWFpbCxcbiAgICAgICAgfV0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcjtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBWaWRlb0dhbGxlcnkge1xuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuJHBsYXllciA9ICRlbGVtZW50LmZpbmQoJ1tkYXRhLXZpZGVvLXBsYXllcl0nKTtcbiAgICAgICAgdGhpcy4kdmlkZW9zID0gJGVsZW1lbnQuZmluZCgnW2RhdGEtdmlkZW8taXRlbV0nKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8gPSB7fTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgc2VsZWN0TmV3VmlkZW8oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlbyA9IHtcbiAgICAgICAgICAgIGlkOiAkdGFyZ2V0LmRhdGEoJ3ZpZGVvSWQnKSxcbiAgICAgICAgICAgICRzZWxlY3RlZFRodW1iOiAkdGFyZ2V0LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0TWFpblZpZGVvKCk7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlVGh1bWIoKTtcbiAgICB9XG5cbiAgICBzZXRNYWluVmlkZW8oKSB7XG4gICAgICAgIHRoaXMuJHBsYXllci5hdHRyKCdzcmMnLCBgLy93d3cueW91dHViZS5jb20vZW1iZWQvJHt0aGlzLmN1cnJlbnRWaWRlby5pZH1gKTtcbiAgICB9XG5cbiAgICBzZXRBY3RpdmVUaHVtYigpIHtcbiAgICAgICAgdGhpcy4kdmlkZW9zLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8uJHNlbGVjdGVkVGh1bWIuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJHZpZGVvcy5vbignY2xpY2snLCB0aGlzLnNlbGVjdE5ld1ZpZGVvLmJpbmQodGhpcykpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlkZW9HYWxsZXJ5KCkge1xuICAgIGNvbnN0IHBsdWdpbktleSA9ICd2aWRlby1nYWxsZXJ5JztcbiAgICBjb25zdCAkdmlkZW9HYWxsZXJ5ID0gJChgW2RhdGEtJHtwbHVnaW5LZXl9XWApO1xuXG4gICAgJHZpZGVvR2FsbGVyeS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCAkZWwgPSAkKGVsZW1lbnQpO1xuICAgICAgICBjb25zdCBpc0luaXRpYWxpemVkID0gJGVsLmRhdGEocGx1Z2luS2V5KSBpbnN0YW5jZW9mIFZpZGVvR2FsbGVyeTtcblxuICAgICAgICBpZiAoaXNJbml0aWFsaXplZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgJGVsLmRhdGEocGx1Z2luS2V5LCBuZXcgVmlkZW9HYWxsZXJ5KCRlbCkpO1xuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbInNhZmVTdHJpbmciLCJzdHIiLCJkIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwiYm9keSIsInRleHRDb250ZW50IiwiJCIsInV0aWxzIiwiaGFsb0NhbGN1bGF0ZUZyZWVTaGlwcGluZyIsImNvbnRleHQiLCJyZWxhdGVfdGFiIiwiJGJ1bmRsZSIsInNob3dCdW5kbGUiLCJkb2N1bWVudCIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm5vdCIsInJlbW92ZUNsYXNzIiwibmV4dCIsImhhc0NsYXNzIiwiYWRkQ2xhc3MiLCJ0YXJnZXQiLCJjbG9zZXN0IiwibGVuZ3RoIiwiaWQiLCJhdHRyIiwicmVwbGFjZSIsImlzIiwidG90YWxQcmljZSIsIiRmb3JtIiwiYXJyUHJvIiwiQXJyYXkiLCJlYWNoIiwiaSIsInZhbCIsInB1c2giLCJjaGVjayIsImNoZWNrUHJvZHVjdCIsInNob3ciLCJhZGRUb0NhcnQiLCJlcnJvck1lc3NhZ2UiLCJ0bXAiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYWxlcnQiLCJpbm5lclRleHQiLCJvcHRpb25zIiwidGVtcGxhdGUiLCJpdGVtIiwicHJvZEJ1bmRsZUlkIiwiZmlyc3RJdGVtIiwiYXBwZW5kIiwicHJvZHVjdEN1c3RvbUZpZWxkcyIsImluZGV4Iiwib2JqIiwibmFtZSIsIkpTT04iLCJwYXJzZSIsInZhbHVlIiwibnVtIiwibGlzdCIsImRhdGEiLCJwSWQiLCJ1bmRlZmluZWQiLCJhcGkiLCJwcm9kdWN0IiwiZ2V0QnlJZCIsImVyciIsInJlc3BvbnNlIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJzaG93TGlzdCIsImZpbmQiLCJoYXNPcHRpb25zIiwiaGFzRGVmYXVsdE9wdGlvbnMiLCJwcm9kdWN0QXR0cmlidXRlcyIsIm9wdGlvbkNoYW5nZSIsInNlcmlhbGl6ZSIsImF0dHJpYnV0ZXNEYXRhIiwiYXR0cmlidXRlc0NvbnRlbnQiLCJjb250ZW50IiwidXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMiLCJ1cGRhdGVWaWV3IiwidXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MiLCJ0cmltIiwiJHByb2R1Y3RPcHRpb25zRWxlbWVudCIsImh0bWwiLCJzZXRQcm9kdWN0VmFyaWFudCIsInByb2R1Y3RPcHRpb25zIiwic2hvd1NsaWNrU2xpZGVyIiwic2xpY2siLCJkb3RzIiwiYXJyb3dzIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJtb2JpbGVGaXJzdCIsImluZmluaXRlIiwibmV4dEFycm93IiwicHJldkFycm93IiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsImZvcm0iLCJsZW4iLCJrIiwiY2hlY2tCZWZvcmVBZGQiLCIkYXR0cmlidXRlcyIsInByb3AiLCJmb2N1cyIsImF0dCIsImFyclAiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIkZvcm1EYXRhIiwiY2FydCIsIml0ZW1BZGQiLCJmaWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0iLCJlcnJvciIsImhpZGUiLCJ1cGRhdGVDYXJ0Q29udGVudCIsImNhcnRfaXRlbSIsImNhcnRJdGVtSWQiLCJvbkNvbXBsZXRlIiwiJGJvZHkiLCJsb2FkaW5nQ2xhc3MiLCIkY2FydERyb3Bkb3duIiwiJGNhcnRMb2FkaW5nIiwiJHNpZGVDYXJ0QmxvY2siLCJzZXRUaW1lb3V0IiwidG9nZ2xlQ2xhc3MiLCJnZXRDYXJ0Q29udGVudCIsInF1YW50aXR5IiwidHJpZ2dlciIsImdldENvbnRlbnQiLCJ0b3RhbCIsInBvcyIsInN5bWJvbCIsImN1cnJlbmN5IiwicHJpY2UiLCJzIiwidGV4dCIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiaXNOYU4iLCJpbmRleE9mIiwicHJvZHVjdE9wdGlvbnNDaGFuZ2VkIiwidW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcyIsIm9wdGlvbkxhYmVsIiwiY2hpbGRyZW4iLCJvcHRpb25UaXRsZSIsInNwbGl0IiwicmVxdWlyZWQiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwidHlwZSIsImdldEF0dHJpYnV0ZSIsInF1ZXJ5U2VsZWN0b3IiLCJpc1NhdGlzZmllZCIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZXZlcnkiLCJzZWxlY3QiLCJzZWxlY3RlZEluZGV4IiwiZGF0ZVN0cmluZyIsIm1hcCIsIngiLCJqb2luIiwiY2hlY2tlZCIsImxhYmVsIiwibGFiZWxzIiwidGl0bGUiLCIkY2hhbmdlZE9wdGlvbiIsInBhcmVudHMiLCJwcm9kdWN0SWQiLCJwcm9kdWN0QXR0cmlidXRlc0RhdGEiLCJwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnQiLCJzaG93UHJvZHVjdEltYWdlIiwiJHNjb3BlIiwiYmVoYXZpb3IiLCJvdXRfb2Zfc3RvY2tfYmVoYXZpb3IiLCJpblN0b2NrSWRzIiwiaW5fc3RvY2tfYXR0cmlidXRlcyIsIm91dE9mU3RvY2tNZXNzYWdlIiwib3V0X29mX3N0b2NrX21lc3NhZ2UiLCJhdHRyaWJ1dGUiLCIkYXR0cmlidXRlIiwiYXR0cklkIiwicGFyc2VJbnQiLCJlbmFibGVBdHRyaWJ1dGUiLCJkaXNhYmxlQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlVHlwZSIsImRpc2FibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUiLCIkc2VsZWN0IiwicGFyZW50IiwidG9nZ2xlT3B0aW9uIiwiZW5hYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlIiwiJHBhcmVudCIsIl9pc1BsYWluT2JqZWN0IiwiaW1hZ2UiLCJtYWluSW1hZ2VVcmwiLCJ0b29scyIsImdldFNyYyIsInRoZW1lU2V0dGluZ3MiLCJwcm9kdWN0Z2FsbGVyeV9zaXplIiwidmlld01vZGVsIiwiZ2V0Vmlld01vZGVsIiwic2hvd01lc3NhZ2VCb3giLCJzdG9ja19tZXNzYWdlIiwicHVyY2hhc2luZ19tZXNzYWdlIiwiX2lzT2JqZWN0IiwidXBkYXRlUHJpY2VWaWV3IiwicHVyY2hhc2FibGUiLCJpbnN0b2NrIiwiJHByaWNlV2l0aFRheCIsIiRwcmljZVdpdGhvdXRUYXgiLCJycnBXaXRoVGF4IiwiJGRpdiIsIiRzcGFuIiwicnJwV2l0aG91dFRheCIsIm5vblNhbGVXaXRoVGF4Iiwibm9uU2FsZVdpdGhvdXRUYXgiLCJwcmljZVNhdmVkIiwicHJpY2VOb3dMYWJlbCIsInByaWNlTGFiZWwiLCIkd2VpZ2h0IiwiJGluY3JlbWVudHMiLCIkYWRkVG9DYXJ0IiwiJHdpc2hsaXN0VmFyaWF0aW9uIiwic3RvY2siLCIkY29udGFpbmVyIiwiJGlucHV0IiwiJHNrdSIsIiR1cGMiLCIkdGV4dCIsIiRidWxrUHJpY2luZyIsIm1lc3NhZ2UiLCIkbWVzc2FnZUJveCIsImNsZWFyUHJpY2luZ05vdEZvdW5kIiwid2l0aF90YXgiLCJmb3JtYXR0ZWQiLCJ3aXRob3V0X3RheCIsInJycF93aXRoX3RheCIsInJycF93aXRob3V0X3RheCIsInNhdmVkIiwibm9uX3NhbGVfcHJpY2Vfd2l0aF90YXgiLCJub25fc2FsZV9wcmljZV93aXRob3V0X3RheCIsImZvcm1EYXRhIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSIsIl9zdGVwIiwiZG9uZSIsIl9zdGVwJHZhbHVlIiwia2V5IiwiRmlsZSIsInNpemUiLCJlIiwiY29uc29sZSIsImhhbG9fcHJldl9uZXh0X3Byb2R1Y3QiLCJ0b2tlbiIsImN1ckNvZGUiLCJ3aWR0aCIsImdldFByb2R1Y3QiLCJhcnIiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJzdHJpbmdpZnkiLCJxdWVyeSIsInRoZW4iLCJyZXMiLCJqc29uIiwiZm9ybWF0TW9uZXkiLCJuIiwiYyIsInQiLCJNYXRoIiwiYWJzIiwiU3RyaW5nIiwiTnVtYmVyIiwiaiIsInN1YnN0ciIsInNsaWNlIiwicmVuZGVyUHJvZHVjdCIsImN1ckRpc3BsYXkiLCJzeW1ib2xQbGFjZW1lbnQiLCJkZWNpbWFsVG9rZW4iLCJkZWNpbWFsUGxhY2VzIiwidGhvdXNhbmRzVG9rZW4iLCJyZXN0cmljdF90b19sb2dpbiIsInByaWNlcyIsInByaWNlUmFuZ2UiLCJtaW4iLCJtYXgiLCJwcmljZV9yYW5nZXMiLCJwcmljZU1pbiIsInByaWNlTWF4IiwicHJpY2VEZWYiLCJyZXRhaWxQcmljZSIsImJhc2VQcmljZSIsInByaWNlQmFzIiwicHJpY2VSZXQiLCJwcm9kdWN0VGl0bGUiLCJjYXJkX3RpdGxlX3R5cGUiLCJwYXRoIiwiaHRtbF9jYXJkIiwiZW50aXR5SWQiLCJkZWZhdWx0SW1hZ2UiLCJpbWc3MHB4IiwiYWx0VGV4dCIsInByZXZJZCIsIiRwcm9kSWNvbnMiLCIkcHJvZFdyYXAiLCJyZW1vdmUiLCJuZXh0SWQiLCJuZXh0TGluayIsInByZXZMaW5rIiwic2l0ZSIsInByb2R1Y3RzIiwiZWRnZXMiLCJkaXNwbGF5Iiwic3dhbCIsInNjcm9sbCIsIm9mZnNldCIsImhfc3RhdGMiLCJvdXRlckhlaWdodCIsInNjcm9sbFRvcCIsInRvcCIsIiRzdGlja3kiLCJjc3MiLCJvbmxvYWQiLCJ5b3V0dWJlQ2Fyb3VzZWxGYWN0b3J5Iiwib25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkiLCJpbml0Q2Fyb3VzZWwiLCJiaW5kIiwidGFnIiwic3JjIiwiZmlyc3RTY3JpcHRUYWciLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJoYWxvWW91dHViZVNsaWNrIiwiJHNsaWNrIiwiJHZpZGVvcyIsImJpbmRFdmVudHMiLCJvblNsaWNrSW5pdCIsIm9uU2xpY2tCZWZvcmVDaGFuZ2UiLCJvblNsaWNrQWZ0ZXJDaGFuZ2UiLCJvblBsYXllclJlYWR5IiwiZ2V0SWZyYW1lIiwicGxheVZpZGVvIiwib25QbGF5ZXJTdGF0ZUNoYW5nZSIsIllUIiwiUGxheWVyU3RhdGUiLCJQTEFZSU5HIiwiRU5ERUQiLCJ2aWQiLCIkdmlkIiwiX3VuaXF1ZUlkIiwicGxheWVyIiwiUGxheWVyIiwiaG9zdCIsInZpZGVvSWQiLCJ3bW9kZSIsInBsYXllclZhcnMiLCJhdXRvcGxheSIsImNvbnRyb2xzIiwiZGlzYWJsZWtiIiwiZW5hYmxlanNhcGkiLCJmcyIsInJlbCIsInNob3dpbmZvIiwiaXZfbG9hZF9wb2xpY3kiLCJtb2Rlc3RicmFuZGluZyIsImV2ZW50cyIsIm9uUmVhZHkiLCJvblN0YXRlQ2hhbmdlIiwic3RvcFZpZGVvIiwiUGFnZU1hbmFnZXIiLCJSZXZpZXciLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCJQcm9kdWN0RGV0YWlscyIsInZpZGVvR2FsbGVyeSIsImNsYXNzaWZ5Rm9ybSIsIm1vZGFsRmFjdG9yeSIsIk1vZGFsRXZlbnRzIiwiaGFsb1ByZXZOZXh0UHJvZHVjdCIsImhhbG9CdW5kbGVQcm9kdWN0cyIsIlNvcnRhYmxlIiwiaGFsb1N0aWNreUFkZFRvQ2FydCIsImhhbG9Zb3V0dWJlQ2Fyb3VzZWwiLCJQcm9kdWN0IiwiX1BhZ2VNYW5hZ2VyIiwiX3RoaXMiLCJjYWxsIiwidXJsIiwiaHJlZiIsIiRyZXZpZXdMaW5rIiwiJGJ1bGtQcmljaW5nTGluayIsInJldmlld01vZGFsIiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJfdGhpczIiLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwicGF0aG5hbWUiLCJ2YWxpZGF0b3IiLCJwcm9kdWN0RGV0YWlscyIsIkJDRGF0YSIsInByb2R1Y3RfYXR0cmlidXRlcyIsImJ1bGtQcmljaW5nSGFuZGxlciIsImhhbG9fYnVuZGxlX3Byb2R1Y3RzX2VuYWJsZSIsImhhbG9fY29tcGFyZV9jb2xvcnMiLCJjb21wYXJlQ29sb3JzIiwiJHJldmlld0Zvcm0iLCJyZXZpZXciLCJvcGVuZWQiLCJzZXR1cEZvY3VzVHJhcCIsInJlZ2lzdGVyVmFsaWRhdGlvbiIsImFyaWFEZXNjcmliZVJldmlld0lucHV0cyIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsInByb2R1Y3RSZXZpZXdIYW5kbGVyIiwiXyIsImlucHV0IiwibXNnU3BhbklkIiwic2libGluZ3MiLCIkY29sb3IiLCIkY29sb3IyIiwiJGNvbG9yMyIsIiRpbWciLCJlbCIsImdldEVsZW1lbnRCeUlkIiwiYW5pbWF0aW9uIiwiZGVmYXVsdCIsIm5vZCIsIkNvbGxhcHNpYmxlRXZlbnRzIiwiZm9ybXMiLCJhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIiwiX2RlZmF1bHQiLCJzdWJtaXQiLCJ0YXAiLCIkcmV2aWV3c0NvbnRlbnQiLCIkY29sbGFwc2libGUiLCJpbml0TGlua0JpbmQiLCJpbmplY3RQYWdpbmF0aW9uTGluayIsImNvbGxhcHNlUmV2aWV3cyIsIiRjb250ZW50IiwiY2xpY2siLCJoYXNoIiwiJG5leHRMaW5rIiwiJHByZXZMaW5rIiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsInJldmlld1JhdGluZyIsInJldmlld1N1YmplY3QiLCJyZXZpZXdDb21tZW50IiwiY2IiLCJyZXN1bHQiLCJlbWFpbCIsInJldmlld0VtYWlsIiwiVmlkZW9HYWxsZXJ5IiwiJGVsZW1lbnQiLCIkcGxheWVyIiwiY3VycmVudFZpZGVvIiwic2VsZWN0TmV3VmlkZW8iLCIkdGFyZ2V0IiwiY3VycmVudFRhcmdldCIsIiRzZWxlY3RlZFRodW1iIiwic2V0TWFpblZpZGVvIiwic2V0QWN0aXZlVGh1bWIiLCJwbHVnaW5LZXkiLCIkdmlkZW9HYWxsZXJ5IiwiJGVsIiwiaXNJbml0aWFsaXplZCJdLCJzb3VyY2VSb290IjoiIn0=