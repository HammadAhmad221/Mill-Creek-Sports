"use strict";
(self["webpackChunkbigcommerce_surfup"] = self["webpackChunkbigcommerce_surfup"] || []).push([["assets_js_theme_category_js"],{

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Category)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./halothemes/haloAddOptionForProduct */ "./assets/js/theme/halothemes/haloAddOptionForProduct.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }






var Category = /*#__PURE__*/function (_CatalogPage) {
  function Category(context) {
    var _this;
    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = (0,_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__.createTranslationDictionary)(context);
    return _this;
  }
  _inheritsLoose(Category, _CatalogPage);
  var _proto = Category.prototype;
  _proto.setLiveRegionAttributes = function setLiveRegionAttributes($element, roleType, ariaLiveStatus) {
    $element.attr({
      role: roleType,
      'aria-live': ariaLiveStatus
    });
  };
  _proto.makeShopByPriceFilterAccessible = function makeShopByPriceFilterAccessible() {
    var _this2 = this;
    if (!$('[data-shop-by-price]').length) return;
    if ($('.navList-action').hasClass('is-active')) {
      $('a.navList-action.is-active').focus();
    }
    $('a.navList-action').on('click', function () {
      return _this2.setLiveRegionAttributes($('span.price-filter-message'), 'status', 'assertive');
    });
  };
  _proto.onReady = function onReady() {
    var _this3 = this;
    this.arrangeFocusOnSortBy();
    $('[data-button-type="add-cart"]').on('click', function (e) {
      return _this3.setLiveRegionAttributes($(e.currentTarget).next(), 'status', 'polite');
    });
    this.makeShopByPriceFilterAccessible();
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context.urls);
    this.initFacetedSearch();
    if (!$('#facetedSearch').length) {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.on('sortBy-submitted', this.onSortBySubmit);

      // Refresh range view when shop-by-price enabled
      var urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has('search_query')) {
        $('.reset-filters').show();
      }
      $('input[name="price_min"]').attr('value', urlParams.get('price_min'));
      $('input[name="price_max"]').attr('value', urlParams.get('price_max'));
    }
    $('a.reset-btn').on('click', function () {
      return _this3.setLiveRegionsAttributes($('span.reset-message'), 'status', 'polite');
    });
    this.ariaNotifyNoProducts();
    this.category_sidebar();
    this.showMoreProducts();
    this.showProductsPerPage();
    this.categoryHeader();
  };
  _proto.ariaNotifyNoProducts = function ariaNotifyNoProducts() {
    var $noProductsMessage = $('[data-no-products-notification]');
    if ($noProductsMessage.length) {
      $noProductsMessage.focus();
    }
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this4 = this;
    var _this$validationDicti = this.validationDictionary,
      onMinPriceError = _this$validationDicti.price_min_evaluation,
      onMaxPriceError = _this$validationDicti.price_max_evaluation,
      minPriceNotEntered = _this$validationDicti.price_min_not_entered,
      maxPriceNotEntered = _this$validationDicti.price_max_not_entered,
      onInvalidPrice = _this$validationDicti.price_invalid_value;
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var productsPerPage = this.context.categoryProductsPerPage;
    var requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: productsPerPage
          }
        }
      },
      template: {
        productListing: 'category/product-listing',
        sidebar: 'category/sidebar'
      },
      showMore: 'category/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $('body').triggerHandler('compareReset');
      var $productListing = $('#product-listing-container').offset().top - 145;
      $('html, body').animate({
        scrollTop: $productListing
      }, 100);
      _this4.category_sidebar();
      _this4.showProductsPerPage();
      _this4.showMoreProducts();
      var $topProduct = $('#faceted-search-container #ProductCarouselTopSellers .productCarousel');
      if ($topProduct.length) {
        $topProduct.slick();
      }
    }, {
      validationErrorMessages: {
        onMinPriceError: onMinPriceError,
        onMaxPriceError: onMaxPriceError,
        minPriceNotEntered: minPriceNotEntered,
        maxPriceNotEntered: maxPriceNotEntered,
        onInvalidPrice: onInvalidPrice
      }
    });
  };
  _proto.category_sidebar = function category_sidebar() {
    if ($('.all-categories-list').length > 0) {
      $('ul.all-categories-list li').each(function () {
        var breadLink = $('.page-type-product #breadcrumbs-wrapper ul li.breadcrumb.is-active').prev('.breadcrumb').children('a').attr('href');
        if ($(this).children('a').attr('href') == window.location || $(this).children('a').attr('href') == window.location.pathname) {
          $(this).addClass('current-cat');
          $(this).children('.dropdown-category-list').addClass('cat-expanded').siblings('.icon-dropdown').addClass('is-clicked');
          $(this).parents('.dropdown-category-list').addClass('cat-expanded').siblings('.icon-dropdown').addClass('is-clicked');
        }
        if ($(this).children('a').attr('href') == breadLink) {
          $(this).addClass('current-cat');
          $(this).parents('.dropdown-category-list').addClass('cat-expanded').siblings('.icon-dropdown').addClass('is-clicked');
        }
      });
      $('.all-categories-list .icon-dropdown').on('click', function () {
        $(this).parent().siblings().removeClass('is-clicked');
        $(this).parent().siblings().find("> .dropdown-category-list").slideUp("slow");
        $(this).parent().siblings().find("> .icon-dropdown").removeClass('is-clicked');
        $(this).parent().find("> .dropdown-category-list").slideToggle("slow");
        $(this).parent().siblings().removeClass('open');
        $(this).parents('.all-categories-list').find('.current-cat').removeClass('current-cat');
        if ($(this).hasClass('is-clicked')) {
          $(this).removeClass('is-clicked');
          $(this).parent().removeClass('open');
        } else {
          $(this).addClass('is-clicked');
          $(this).parent().addClass('open');
        }
      });
    }
  };
  _proto.showProductsPerPage = function showProductsPerPage() {
    try {
      var url = new URL(window.location.href);
      var c = url.searchParams.get("limit");
      if (c != null) {
        var limit = document.querySelectorAll('select#limit option');
        Array.prototype.forEach.call(limit, function (element) {
          if (element.value == c) {
            element.selected = true;
          }
        });
      }
    } catch (e) {}
  };
  _proto.showMoreProducts = function showMoreProducts() {
    var context = this.context;
    var $showMore = $('.category__showMoreBtn');
    var $showMoreBtn = $('.category__showMoreBtn > a');
    var $pagination_next = $(".pagination-item--next");
    if ($pagination_next.length) {
      $showMore.addClass('is-show');
    }
    $showMoreBtn.on('click', function (event) {
      event.preventDefault();
      var nextPage = $(".pagination-item--current").next(),
        link = nextPage.find("a").attr("href");
      $showMoreBtn.addClass('btn-loading');
      $.ajax({
        type: 'get',
        url: link.replace("http://", "//"),
        success: function success(data) {
          if ($(data).find('#product-listing-container .productGrid').length > 0) {
            $('#product-listing-container [data-product-compare] > ul').append($(data).find('#product-listing-container [data-product-compare] > ul').children().not('.product-advertisment'));
            $('.pagination-list').html($(data).find(".pagination-list").html());
            $showMoreBtn.removeClass('btn-loading').blur();
            if (Number($(data).find('.pagination-info .end').text()) <= Number($(data).find('.pagination-info .total').text())) {
              $('.pagination .pagination-info .end').text($(data).find('.pagination-info .end').text());
            } else {
              $('.pagination .pagination-info .end').text($(data).find('.pagination-info .total').text());
            }
            nextPage = $(".pagination-item--current").next();
            if (nextPage.length === 0) {
              $showMoreBtn.addClass('disable').text('No more products');
            }
            (0,_halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_5__["default"])(context);
          }
        }
      });
    });
  };
  _proto.categoryHeader = function categoryHeader() {
    if (this.context.themeSettings.category_header_type == 'banner') {
      if (!$('.categoryHeader__img').length) {
        $('.categoryHeader').removeClass('categoryHeader--img');
      }
    }
  };
  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./assets/js/theme/common/utils/translations-utils.js":
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTranslationDictionary: () => (/* binding */ createTranslationDictionary)
/* harmony export */ });
var TRANSLATIONS = 'translations';
var isTranslationDictionaryNotEmpty = function isTranslationDictionaryNotEmpty(dictionary) {
  return !!Object.keys(dictionary[TRANSLATIONS]).length;
};
var chooseActiveDictionary = function chooseActiveDictionary() {
  for (var i = 0; i < arguments.length; i++) {
    var dictionary = JSON.parse(i < 0 || arguments.length <= i ? undefined : arguments[i]);
    if (isTranslationDictionaryNotEmpty(dictionary)) {
      return dictionary;
    }
  }
};

/**
 * defines Translation Dictionary to use
 * @param context provides access to 3 validation JSONs from en.json:
 * validation_messages, validation_fallback_messages and default_messages
 * @returns {Object}
 */
var createTranslationDictionary = function createTranslationDictionary(context) {
  var validationDictionaryJSON = context.validationDictionaryJSON,
    validationFallbackDictionaryJSON = context.validationFallbackDictionaryJSON,
    validationDefaultDictionaryJSON = context.validationDefaultDictionaryJSON;
  var activeDictionary = chooseActiveDictionary(validationDictionaryJSON, validationFallbackDictionaryJSON, validationDefaultDictionaryJSON);
  var localizations = Object.values(activeDictionary[TRANSLATIONS]);
  var translationKeys = Object.keys(activeDictionary[TRANSLATIONS]).map(function (key) {
    return key.split('.').pop();
  });
  return translationKeys.reduce(function (acc, key, i) {
    acc[key] = localizations[i];
    return acc;
  }, {});
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXRlZ29yeV9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2Y7QUFDb0I7QUFDSjtBQUNtQztBQUN0QjtBQUFBLElBRTVDTSxRQUFRLDBCQUFBQyxZQUFBO0VBQ3pCLFNBQUFELFNBQVlFLE9BQU8sRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFDakJBLEtBQUEsR0FBQUYsWUFBQSxDQUFBRyxJQUFBLE9BQU1GLE9BQU8sQ0FBQztJQUNkQyxLQUFBLENBQUtFLG9CQUFvQixHQUFHUCxtR0FBMkIsQ0FBQ0ksT0FBTyxDQUFDO0lBQUMsT0FBQUMsS0FBQTtFQUNyRTtFQUFDRyxjQUFBLENBQUFOLFFBQUEsRUFBQUMsWUFBQTtFQUFBLElBQUFNLE1BQUEsR0FBQVAsUUFBQSxDQUFBUSxTQUFBO0VBQUFELE1BQUEsQ0FFREUsdUJBQXVCLEdBQXZCLFNBQUFBLHVCQUF1QkEsQ0FBQ0MsUUFBUSxFQUFFQyxRQUFRLEVBQUVDLGNBQWMsRUFBRTtJQUN4REYsUUFBUSxDQUFDRyxJQUFJLENBQUM7TUFDVkMsSUFBSSxFQUFFSCxRQUFRO01BQ2QsV0FBVyxFQUFFQztJQUNqQixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUFMLE1BQUEsQ0FFRFEsK0JBQStCLEdBQS9CLFNBQUFBLCtCQUErQkEsQ0FBQSxFQUFHO0lBQUEsSUFBQUMsTUFBQTtJQUM5QixJQUFJLENBQUNDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDQyxNQUFNLEVBQUU7SUFFdkMsSUFBSUQsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUNFLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRTtNQUM1Q0YsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUNHLEtBQUssQ0FBQyxDQUFDO0lBQzNDO0lBRUFILENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDSSxFQUFFLENBQUMsT0FBTyxFQUFFO01BQUEsT0FBTUwsTUFBSSxDQUFDUCx1QkFBdUIsQ0FBQ1EsQ0FBQyxDQUFDLDJCQUEyQixDQUFDLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQztJQUFBLEVBQUM7RUFDaEksQ0FBQztFQUFBVixNQUFBLENBRURlLE9BQU8sR0FBUCxTQUFBQSxPQUFPQSxDQUFBLEVBQUc7SUFBQSxJQUFBQyxNQUFBO0lBQ04sSUFBSSxDQUFDQyxvQkFBb0IsQ0FBQyxDQUFDO0lBRTNCUCxDQUFDLENBQUMsK0JBQStCLENBQUMsQ0FBQ0ksRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDSSxDQUFDO01BQUEsT0FBS0YsTUFBSSxDQUFDZCx1QkFBdUIsQ0FBQ1EsQ0FBQyxDQUFDUSxDQUFDLENBQUNDLGFBQWEsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7SUFBQSxFQUFDO0lBRWxJLElBQUksQ0FBQ1osK0JBQStCLENBQUMsQ0FBQztJQUV0Q25CLG9FQUFlLENBQUMsSUFBSSxDQUFDTSxPQUFPLENBQUMwQixJQUFJLENBQUM7SUFFbEMsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQyxDQUFDO0lBRXhCLElBQUksQ0FBQ1osQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUNDLE1BQU0sRUFBRTtNQUM3QixJQUFJLENBQUNZLGNBQWMsR0FBRyxJQUFJLENBQUNBLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztNQUNwRHJDLDZEQUFLLENBQUMyQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDUyxjQUFjLENBQUM7O01BRWpEO01BQ0EsSUFBTUUsU0FBUyxHQUFHLElBQUlDLGVBQWUsQ0FBQ0MsTUFBTSxDQUFDQyxRQUFRLENBQUNDLE1BQU0sQ0FBQztNQUU3RCxJQUFJSixTQUFTLENBQUNLLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRTtRQUMvQnBCLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDcUIsSUFBSSxDQUFDLENBQUM7TUFDOUI7TUFFQXJCLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDSixJQUFJLENBQUMsT0FBTyxFQUFFbUIsU0FBUyxDQUFDTyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7TUFDdEV0QixDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQ0osSUFBSSxDQUFDLE9BQU8sRUFBRW1CLFNBQVMsQ0FBQ08sR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFFO0lBRUF0QixDQUFDLENBQUMsYUFBYSxDQUFDLENBQUNJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7TUFBQSxPQUFNRSxNQUFJLENBQUNpQix3QkFBd0IsQ0FBQ3ZCLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7SUFBQSxFQUFDO0lBRTlHLElBQUksQ0FBQ3dCLG9CQUFvQixDQUFDLENBQUM7SUFDM0IsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3ZCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsQ0FBQztJQUN2QixJQUFJLENBQUNDLG1CQUFtQixDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDQyxjQUFjLENBQUMsQ0FBQztFQUN6QixDQUFDO0VBQUF0QyxNQUFBLENBRURrQyxvQkFBb0IsR0FBcEIsU0FBQUEsb0JBQW9CQSxDQUFBLEVBQUc7SUFDbkIsSUFBTUssa0JBQWtCLEdBQUc3QixDQUFDLENBQUMsaUNBQWlDLENBQUM7SUFDL0QsSUFBSTZCLGtCQUFrQixDQUFDNUIsTUFBTSxFQUFFO01BQzNCNEIsa0JBQWtCLENBQUMxQixLQUFLLENBQUMsQ0FBQztJQUM5QjtFQUNKLENBQUM7RUFBQWIsTUFBQSxDQUVEc0IsaUJBQWlCLEdBQWpCLFNBQUFBLGlCQUFpQkEsQ0FBQSxFQUFHO0lBQUEsSUFBQWtCLE1BQUE7SUFDaEIsSUFBQUMscUJBQUEsR0FNSSxJQUFJLENBQUMzQyxvQkFBb0I7TUFMSDRDLGVBQWUsR0FBQUQscUJBQUEsQ0FBckNFLG9CQUFvQjtNQUNFQyxlQUFlLEdBQUFILHFCQUFBLENBQXJDSSxvQkFBb0I7TUFDR0Msa0JBQWtCLEdBQUFMLHFCQUFBLENBQXpDTSxxQkFBcUI7TUFDRUMsa0JBQWtCLEdBQUFQLHFCQUFBLENBQXpDUSxxQkFBcUI7TUFDQUMsY0FBYyxHQUFBVCxxQkFBQSxDQUFuQ1UsbUJBQW1CO0lBRXZCLElBQU1DLHdCQUF3QixHQUFHMUMsQ0FBQyxDQUFDLDRCQUE0QixDQUFDO0lBQ2hFLElBQU0yQyx1QkFBdUIsR0FBRzNDLENBQUMsQ0FBQywyQkFBMkIsQ0FBQztJQUM5RCxJQUFNNEMsZUFBZSxHQUFHLElBQUksQ0FBQzNELE9BQU8sQ0FBQzRELHVCQUF1QjtJQUM1RCxJQUFNQyxjQUFjLEdBQUc7TUFDbkJDLE1BQU0sRUFBRTtRQUNKQyxRQUFRLEVBQUU7VUFDTkMsYUFBYSxFQUFFLElBQUk7VUFDbkJDLFFBQVEsRUFBRTtZQUNOQyxLQUFLLEVBQUVQO1VBQ1g7UUFDSjtNQUNKLENBQUM7TUFDRFEsUUFBUSxFQUFFO1FBQ05DLGNBQWMsRUFBRSwwQkFBMEI7UUFDMUNDLE9BQU8sRUFBRTtNQUNiLENBQUM7TUFDREMsUUFBUSxFQUFFO0lBQ2QsQ0FBQztJQUVELElBQUksQ0FBQ0MsYUFBYSxHQUFHLElBQUk1RSw4REFBYSxDQUFDa0UsY0FBYyxFQUFFLFVBQUNXLE9BQU8sRUFBSztNQUNoRWYsd0JBQXdCLENBQUNnQixJQUFJLENBQUNELE9BQU8sQ0FBQ0osY0FBYyxDQUFDO01BQ3JEVix1QkFBdUIsQ0FBQ2UsSUFBSSxDQUFDRCxPQUFPLENBQUNILE9BQU8sQ0FBQztNQUU3Q3RELENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzJELGNBQWMsQ0FBQyxjQUFjLENBQUM7TUFFeEMsSUFBTUMsZUFBZSxHQUFHNUQsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUM2RCxNQUFNLENBQUMsQ0FBQyxDQUFDQyxHQUFHLEdBQUcsR0FBRztNQUUxRTlELENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQytELE9BQU8sQ0FBQztRQUNwQkMsU0FBUyxFQUFFSjtNQUNmLENBQUMsRUFBRSxHQUFHLENBQUM7TUFFUDlCLE1BQUksQ0FBQ0wsZ0JBQWdCLENBQUMsQ0FBQztNQUN2QkssTUFBSSxDQUFDSCxtQkFBbUIsQ0FBQyxDQUFDO01BQzFCRyxNQUFJLENBQUNKLGdCQUFnQixDQUFDLENBQUM7TUFFdkIsSUFBTXVDLFdBQVcsR0FBR2pFLENBQUMsQ0FBQyx1RUFBdUUsQ0FBQztNQUU5RixJQUFJaUUsV0FBVyxDQUFDaEUsTUFBTSxFQUFFO1FBQ3BCZ0UsV0FBVyxDQUFDQyxLQUFLLENBQUMsQ0FBQztNQUN2QjtJQUNKLENBQUMsRUFBRTtNQUNDQyx1QkFBdUIsRUFBRTtRQUNyQm5DLGVBQWUsRUFBZkEsZUFBZTtRQUNmRSxlQUFlLEVBQWZBLGVBQWU7UUFDZkUsa0JBQWtCLEVBQWxCQSxrQkFBa0I7UUFDbEJFLGtCQUFrQixFQUFsQkEsa0JBQWtCO1FBQ2xCRSxjQUFjLEVBQWRBO01BQ0o7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUFsRCxNQUFBLENBRURtQyxnQkFBZ0IsR0FBaEIsU0FBQUEsZ0JBQWdCQSxDQUFBLEVBQUc7SUFDZixJQUFJekIsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUNDLE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDdENELENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDb0UsSUFBSSxDQUFDLFlBQVc7UUFDN0MsSUFBTUMsU0FBUyxHQUFHckUsQ0FBQyxDQUFDLG9FQUFvRSxDQUFDLENBQUNzRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUNDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQzNFLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDeEksSUFBS0ksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDdUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDM0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJcUIsTUFBTSxDQUFDQyxRQUFRLElBQU1sQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN1RSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMzRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUlxQixNQUFNLENBQUNDLFFBQVEsQ0FBQ3NELFFBQVMsRUFBRTtVQUM5SHhFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3lFLFFBQVEsQ0FBQyxhQUFhLENBQUM7VUFDL0J6RSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN1RSxRQUFRLENBQUMseUJBQXlCLENBQUMsQ0FBQ0UsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ0QsUUFBUSxDQUFDLFlBQVksQ0FBQztVQUN0SHpFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzJFLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDRixRQUFRLENBQUMsY0FBYyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDRCxRQUFRLENBQUMsWUFBWSxDQUFDO1FBQ3hIO1FBQ0EsSUFBSXpFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3VFLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQzNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSXlFLFNBQVMsRUFBRTtVQUNsRHJFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3lFLFFBQVEsQ0FBQyxhQUFhLENBQUM7VUFDL0J6RSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMyRSxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQ0YsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ0QsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUV4SDtNQUNILENBQUMsQ0FBQztNQUVEekUsQ0FBQyxDQUFDLHFDQUFxQyxDQUFDLENBQUNJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBVztRQUM1REosQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDNEUsTUFBTSxDQUFDLENBQUMsQ0FBQ0YsUUFBUSxDQUFDLENBQUMsQ0FBQ0csV0FBVyxDQUFDLFlBQVksQ0FBQztRQUNyRDdFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzRFLE1BQU0sQ0FBQyxDQUFDLENBQUNGLFFBQVEsQ0FBQyxDQUFDLENBQUNJLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDQyxPQUFPLENBQUUsTUFBTyxDQUFDO1FBQy9FL0UsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDNEUsTUFBTSxDQUFDLENBQUMsQ0FBQ0YsUUFBUSxDQUFDLENBQUMsQ0FBQ0ksSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUNELFdBQVcsQ0FBQyxZQUFZLENBQUM7UUFDOUU3RSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM0RSxNQUFNLENBQUMsQ0FBQyxDQUFDRSxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQ0UsV0FBVyxDQUFFLE1BQU8sQ0FBQztRQUN4RWhGLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzRFLE1BQU0sQ0FBQyxDQUFDLENBQUNGLFFBQVEsQ0FBQyxDQUFDLENBQUNHLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDL0M3RSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMyRSxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQ0csSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDRCxXQUFXLENBQUMsYUFBYSxDQUFDO1FBRXZGLElBQUk3RSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNFLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRTtVQUNoQ0YsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDNkUsV0FBVyxDQUFDLFlBQVksQ0FBQztVQUNqQzdFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzRFLE1BQU0sQ0FBQyxDQUFDLENBQUNDLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDeEMsQ0FBQyxNQUFNO1VBQ0g3RSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN5RSxRQUFRLENBQUMsWUFBWSxDQUFDO1VBQzlCekUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDNEUsTUFBTSxDQUFDLENBQUMsQ0FBQ0gsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUNyQztNQUNMLENBQUMsQ0FBQztJQUNMO0VBQ0osQ0FBQztFQUFBbkYsTUFBQSxDQUVEcUMsbUJBQW1CLEdBQW5CLFNBQUFBLG1CQUFtQkEsQ0FBQSxFQUFHO0lBQ2xCLElBQUk7TUFDQSxJQUFJc0QsR0FBRyxHQUFHLElBQUlDLEdBQUcsQ0FBQ2pFLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDaUUsSUFBSSxDQUFDO01BQ3ZDLElBQUlDLENBQUMsR0FBR0gsR0FBRyxDQUFDSSxZQUFZLENBQUMvRCxHQUFHLENBQUMsT0FBTyxDQUFDO01BQ3JDLElBQUc4RCxDQUFDLElBQUksSUFBSSxFQUFDO1FBQ1QsSUFBSWpDLEtBQUssR0FBR21DLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMscUJBQXFCLENBQUM7UUFDNURDLEtBQUssQ0FBQ2pHLFNBQVMsQ0FBQ2tHLE9BQU8sQ0FBQ3RHLElBQUksQ0FBQ2dFLEtBQUssRUFBRSxVQUFTdUMsT0FBTyxFQUFFO1VBQ2xELElBQUdBLE9BQU8sQ0FBQ0MsS0FBSyxJQUFJUCxDQUFDLEVBQUM7WUFDbEJNLE9BQU8sQ0FBQ0UsUUFBUSxHQUFHLElBQUk7VUFDM0I7UUFDSixDQUFDLENBQUM7TUFDTjtJQUNKLENBQUMsQ0FBQyxPQUFNcEYsQ0FBQyxFQUFFLENBQUM7RUFDaEIsQ0FBQztFQUFBbEIsTUFBQSxDQUVEb0MsZ0JBQWdCLEdBQWhCLFNBQUFBLGdCQUFnQkEsQ0FBQSxFQUFHO0lBQ2YsSUFBTXpDLE9BQU8sR0FBRyxJQUFJLENBQUNBLE9BQU87SUFDNUIsSUFBTTRHLFNBQVMsR0FBRzdGLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQztJQUM3QyxJQUFNOEYsWUFBWSxHQUFHOUYsQ0FBQyxDQUFDLDRCQUE0QixDQUFDO0lBQ3BELElBQU0rRixnQkFBZ0IsR0FBRy9GLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQztJQUVwRCxJQUFJK0YsZ0JBQWdCLENBQUM5RixNQUFNLEVBQUU7TUFDekI0RixTQUFTLENBQUNwQixRQUFRLENBQUMsU0FBUyxDQUFDO0lBQ2pDO0lBRUFxQixZQUFZLENBQUMxRixFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUM0RixLQUFLLEVBQUs7TUFDaENBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7TUFFdEIsSUFBSUMsUUFBUSxHQUFHbEcsQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUNVLElBQUksQ0FBQyxDQUFDO1FBQ2hEeUYsSUFBSSxHQUFHRCxRQUFRLENBQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUNsRixJQUFJLENBQUMsTUFBTSxDQUFDO01BRTFDa0csWUFBWSxDQUFDckIsUUFBUSxDQUFDLGFBQWEsQ0FBQztNQUVwQ3pFLENBQUMsQ0FBQ29HLElBQUksQ0FBQztRQUNIQyxJQUFJLEVBQUUsS0FBSztRQUNYcEIsR0FBRyxFQUFFa0IsSUFBSSxDQUFDRyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQztRQUNsQ0MsT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQVdDLElBQUksRUFBRTtVQUNwQixJQUFJeEcsQ0FBQyxDQUFDd0csSUFBSSxDQUFDLENBQUMxQixJQUFJLENBQUMseUNBQXlDLENBQUMsQ0FBQzdFLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDcEVELENBQUMsQ0FBQyx3REFBd0QsQ0FBQyxDQUFDeUcsTUFBTSxDQUFDekcsQ0FBQyxDQUFDd0csSUFBSSxDQUFDLENBQUMxQixJQUFJLENBQUMsd0RBQXdELENBQUMsQ0FBQ1AsUUFBUSxDQUFDLENBQUMsQ0FBQ21DLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBRWxMMUcsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMwRCxJQUFJLENBQUMxRCxDQUFDLENBQUN3RyxJQUFJLENBQUMsQ0FBQzFCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDcEIsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUVuRW9DLFlBQVksQ0FBQ2pCLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQzhCLElBQUksQ0FBQyxDQUFDO1lBRTlDLElBQUlDLE1BQU0sQ0FBQzVHLENBQUMsQ0FBQ3dHLElBQUksQ0FBQyxDQUFDMUIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMrQixJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUlELE1BQU0sQ0FBQzVHLENBQUMsQ0FBQ3dHLElBQUksQ0FBQyxDQUFDMUIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUMrQixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7Y0FDaEg3RyxDQUFDLENBQUMsbUNBQW1DLENBQUMsQ0FBQzZHLElBQUksQ0FBQzdHLENBQUMsQ0FBQ3dHLElBQUksQ0FBQyxDQUFDMUIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMrQixJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzdGLENBQUMsTUFBTTtjQUNIN0csQ0FBQyxDQUFDLG1DQUFtQyxDQUFDLENBQUM2RyxJQUFJLENBQUM3RyxDQUFDLENBQUN3RyxJQUFJLENBQUMsQ0FBQzFCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDK0IsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMvRjtZQUVBWCxRQUFRLEdBQUdsRyxDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQ1UsSUFBSSxDQUFDLENBQUM7WUFFaEQsSUFBSXdGLFFBQVEsQ0FBQ2pHLE1BQU0sS0FBSyxDQUFDLEVBQUU7Y0FDdkI2RixZQUFZLENBQUNyQixRQUFRLENBQUMsU0FBUyxDQUFDLENBQUNvQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7WUFDN0Q7WUFFQS9ILCtFQUFhLENBQUNHLE9BQU8sQ0FBQztVQUMxQjtRQUNKO01BQ0osQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBSyxNQUFBLENBRURzQyxjQUFjLEdBQWQsU0FBQUEsY0FBY0EsQ0FBQSxFQUFHO0lBQ2IsSUFBRyxJQUFJLENBQUMzQyxPQUFPLENBQUM2SCxhQUFhLENBQUNDLG9CQUFvQixJQUFJLFFBQVEsRUFBRTtNQUM1RCxJQUFJLENBQUMvRyxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQ0MsTUFBTSxFQUFFO1FBQ25DRCxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQzZFLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQztNQUMzRDtJQUNKO0VBQ0osQ0FBQztFQUFBLE9BQUE5RixRQUFBO0FBQUEsRUFwT2lDTCxnREFBVzs7Ozs7Ozs7Ozs7Ozs7O0FDUGpELElBQU11SSxZQUFZLEdBQUcsY0FBYztBQUNuQyxJQUFNQywrQkFBK0IsR0FBRyxTQUFsQ0EsK0JBQStCQSxDQUFJQyxVQUFVO0VBQUEsT0FBSyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDRixVQUFVLENBQUNGLFlBQVksQ0FBQyxDQUFDLENBQUNoSCxNQUFNO0FBQUE7QUFDdEcsSUFBTXFILHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBc0JBLENBQUEsRUFBOEI7RUFDdEQsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdDLFNBQUEsQ0FBbUJ2SCxNQUFNLEVBQUVzSCxDQUFDLEVBQUUsRUFBRTtJQUNoRCxJQUFNSixVQUFVLEdBQUdNLElBQUksQ0FBQ0MsS0FBSyxDQUFvQkgsQ0FBQyxRQUFBQyxTQUFBLENBQUF2SCxNQUFBLElBQURzSCxDQUFDLEdBQUFJLFNBQUEsR0FBQUgsU0FBQSxDQUFERCxDQUFDLENBQUMsQ0FBQztJQUNwRCxJQUFJTCwrQkFBK0IsQ0FBQ0MsVUFBVSxDQUFDLEVBQUU7TUFDN0MsT0FBT0EsVUFBVTtJQUNyQjtFQUNKO0FBQ0osQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNdEksMkJBQTJCLEdBQUcsU0FBOUJBLDJCQUEyQkEsQ0FBSUksT0FBTyxFQUFLO0VBQ3BELElBQVEySSx3QkFBd0IsR0FBd0UzSSxPQUFPLENBQXZHMkksd0JBQXdCO0lBQUVDLGdDQUFnQyxHQUFzQzVJLE9BQU8sQ0FBN0U0SSxnQ0FBZ0M7SUFBRUMsK0JBQStCLEdBQUs3SSxPQUFPLENBQTNDNkksK0JBQStCO0VBQ25HLElBQU1DLGdCQUFnQixHQUFHVCxzQkFBc0IsQ0FBQ00sd0JBQXdCLEVBQUVDLGdDQUFnQyxFQUFFQywrQkFBK0IsQ0FBQztFQUM1SSxJQUFNRSxhQUFhLEdBQUdaLE1BQU0sQ0FBQ2EsTUFBTSxDQUFDRixnQkFBZ0IsQ0FBQ2QsWUFBWSxDQUFDLENBQUM7RUFDbkUsSUFBTWlCLGVBQWUsR0FBR2QsTUFBTSxDQUFDQyxJQUFJLENBQUNVLGdCQUFnQixDQUFDZCxZQUFZLENBQUMsQ0FBQyxDQUFDa0IsR0FBRyxDQUFDLFVBQUFDLEdBQUc7SUFBQSxPQUFJQSxHQUFHLENBQUNDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLENBQUM7RUFBQSxFQUFDO0VBRXBHLE9BQU9KLGVBQWUsQ0FBQ0ssTUFBTSxDQUFDLFVBQUNDLEdBQUcsRUFBRUosR0FBRyxFQUFFYixDQUFDLEVBQUs7SUFDM0NpQixHQUFHLENBQUNKLEdBQUcsQ0FBQyxHQUFHSixhQUFhLENBQUNULENBQUMsQ0FBQztJQUMzQixPQUFPaUIsR0FBRztFQUNkLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNWLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ2NvbW1lcmNlLXN1cmZ1cC8uL2Fzc2V0cy9qcy90aGVtZS9jYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1zdXJmdXAvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBob29rcyB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBDYXRhbG9nUGFnZSBmcm9tICcuL2NhdGFsb2cnO1xuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcbmltcG9ydCBGYWNldGVkU2VhcmNoIGZyb20gJy4vY29tbW9uL2ZhY2V0ZWQtc2VhcmNoJztcbmltcG9ydCB7IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSB9IGZyb20gJy4uL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMnO1xuaW1wb3J0IGhhbG9BZGRPcHRpb24gZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9BZGRPcHRpb25Gb3JQcm9kdWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcnkgZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeSA9IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeShjb250ZXh0KTtcbiAgICB9XG5cbiAgICBzZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkZWxlbWVudCwgcm9sZVR5cGUsIGFyaWFMaXZlU3RhdHVzKSB7XG4gICAgICAgICRlbGVtZW50LmF0dHIoe1xuICAgICAgICAgICAgcm9sZTogcm9sZVR5cGUsXG4gICAgICAgICAgICAnYXJpYS1saXZlJzogYXJpYUxpdmVTdGF0dXMsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG1ha2VTaG9wQnlQcmljZUZpbHRlckFjY2Vzc2libGUoKSB7XG4gICAgICAgIGlmICghJCgnW2RhdGEtc2hvcC1ieS1wcmljZV0nKS5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBpZiAoJCgnLm5hdkxpc3QtYWN0aW9uJykuaGFzQ2xhc3MoJ2lzLWFjdGl2ZScpKSB7XG4gICAgICAgICAgICAkKCdhLm5hdkxpc3QtYWN0aW9uLmlzLWFjdGl2ZScpLmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICAkKCdhLm5hdkxpc3QtYWN0aW9uJykub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5zZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkKCdzcGFuLnByaWNlLWZpbHRlci1tZXNzYWdlJyksICdzdGF0dXMnLCAnYXNzZXJ0aXZlJykpO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIHRoaXMuYXJyYW5nZUZvY3VzT25Tb3J0QnkoKTtcblxuICAgICAgICAkKCdbZGF0YS1idXR0b24tdHlwZT1cImFkZC1jYXJ0XCJdJykub24oJ2NsaWNrJywgKGUpID0+IHRoaXMuc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJChlLmN1cnJlbnRUYXJnZXQpLm5leHQoKSwgJ3N0YXR1cycsICdwb2xpdGUnKSk7XG5cbiAgICAgICAgdGhpcy5tYWtlU2hvcEJ5UHJpY2VGaWx0ZXJBY2Nlc3NpYmxlKCk7XG5cbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dC51cmxzKTtcblxuICAgICAgICB0aGlzLmluaXRGYWNldGVkU2VhcmNoKCk7XG5cbiAgICAgICAgaWYgKCEkKCcjZmFjZXRlZFNlYXJjaCcpLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG5cbiAgICAgICAgICAgIC8vIFJlZnJlc2ggcmFuZ2UgdmlldyB3aGVuIHNob3AtYnktcHJpY2UgZW5hYmxlZFxuICAgICAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcblxuICAgICAgICAgICAgaWYgKHVybFBhcmFtcy5oYXMoJ3NlYXJjaF9xdWVyeScpKSB7XG4gICAgICAgICAgICAgICAgJCgnLnJlc2V0LWZpbHRlcnMnKS5zaG93KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJ2lucHV0W25hbWU9XCJwcmljZV9taW5cIl0nKS5hdHRyKCd2YWx1ZScsIHVybFBhcmFtcy5nZXQoJ3ByaWNlX21pbicpKTtcbiAgICAgICAgICAgICQoJ2lucHV0W25hbWU9XCJwcmljZV9tYXhcIl0nKS5hdHRyKCd2YWx1ZScsIHVybFBhcmFtcy5nZXQoJ3ByaWNlX21heCcpKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJ2EucmVzZXQtYnRuJykub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5zZXRMaXZlUmVnaW9uc0F0dHJpYnV0ZXMoJCgnc3Bhbi5yZXNldC1tZXNzYWdlJyksICdzdGF0dXMnLCAncG9saXRlJykpO1xuXG4gICAgICAgIHRoaXMuYXJpYU5vdGlmeU5vUHJvZHVjdHMoKTtcbiAgICAgICAgdGhpcy5jYXRlZ29yeV9zaWRlYmFyKCk7XG4gICAgICAgIHRoaXMuc2hvd01vcmVQcm9kdWN0cygpO1xuICAgICAgICB0aGlzLnNob3dQcm9kdWN0c1BlclBhZ2UoKTtcbiAgICAgICAgdGhpcy5jYXRlZ29yeUhlYWRlcigpO1xuICAgIH1cblxuICAgIGFyaWFOb3RpZnlOb1Byb2R1Y3RzKCkge1xuICAgICAgICBjb25zdCAkbm9Qcm9kdWN0c01lc3NhZ2UgPSAkKCdbZGF0YS1uby1wcm9kdWN0cy1ub3RpZmljYXRpb25dJyk7XG4gICAgICAgIGlmICgkbm9Qcm9kdWN0c01lc3NhZ2UubGVuZ3RoKSB7XG4gICAgICAgICAgICAkbm9Qcm9kdWN0c01lc3NhZ2UuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBwcmljZV9taW5fZXZhbHVhdGlvbjogb25NaW5QcmljZUVycm9yLFxuICAgICAgICAgICAgcHJpY2VfbWF4X2V2YWx1YXRpb246IG9uTWF4UHJpY2VFcnJvcixcbiAgICAgICAgICAgIHByaWNlX21pbl9ub3RfZW50ZXJlZDogbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgcHJpY2VfbWF4X25vdF9lbnRlcmVkOiBtYXhQcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICBwcmljZV9pbnZhbGlkX3ZhbHVlOiBvbkludmFsaWRQcmljZSxcbiAgICAgICAgfSA9IHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnk7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuY2F0ZWdvcnlQcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvcF9ieV9wcmljZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiBwcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnY2F0ZWdvcnkvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnY2F0ZWdvcnkvc2lkZWJhcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd01vcmU6ICdjYXRlZ29yeS9zaG93LW1vcmUnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCAoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICAgICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcignY29tcGFyZVJlc2V0Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZyA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJykub2Zmc2V0KCkudG9wIC0gMTQ1O1xuXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAkcHJvZHVjdExpc3RpbmcsXG4gICAgICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgICAgICB0aGlzLmNhdGVnb3J5X3NpZGViYXIoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzUGVyUGFnZSgpO1xuICAgICAgICAgICAgdGhpcy5zaG93TW9yZVByb2R1Y3RzKCk7XG5cbiAgICAgICAgICAgIGNvbnN0ICR0b3BQcm9kdWN0ID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lciAjUHJvZHVjdENhcm91c2VsVG9wU2VsbGVycyAucHJvZHVjdENhcm91c2VsJyk7XG5cbiAgICAgICAgICAgIGlmICgkdG9wUHJvZHVjdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAkdG9wUHJvZHVjdC5zbGljaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JNZXNzYWdlczoge1xuICAgICAgICAgICAgICAgIG9uTWluUHJpY2VFcnJvcixcbiAgICAgICAgICAgICAgICBvbk1heFByaWNlRXJyb3IsXG4gICAgICAgICAgICAgICAgbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgICAgIG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgICAgICBvbkludmFsaWRQcmljZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNhdGVnb3J5X3NpZGViYXIoKSB7XG4gICAgICAgIGlmICgkKCcuYWxsLWNhdGVnb3JpZXMtbGlzdCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICQoJ3VsLmFsbC1jYXRlZ29yaWVzLWxpc3QgbGknKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBjb25zdCBicmVhZExpbmsgPSAkKCcucGFnZS10eXBlLXByb2R1Y3QgI2JyZWFkY3J1bWJzLXdyYXBwZXIgdWwgbGkuYnJlYWRjcnVtYi5pcy1hY3RpdmUnKS5wcmV2KCcuYnJlYWRjcnVtYicpLmNoaWxkcmVuKCdhJykuYXR0cignaHJlZicpO1xuICAgICAgICAgICAgICBpZiAoKCQodGhpcykuY2hpbGRyZW4oJ2EnKS5hdHRyKCdocmVmJykgPT0gd2luZG93LmxvY2F0aW9uKSB8fCAoJCh0aGlzKS5jaGlsZHJlbignYScpLmF0dHIoJ2hyZWYnKSA9PSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2N1cnJlbnQtY2F0Jyk7XG4gICAgICAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJy5kcm9wZG93bi1jYXRlZ29yeS1saXN0JykuYWRkQ2xhc3MoJ2NhdC1leHBhbmRlZCcpLnNpYmxpbmdzKCcuaWNvbi1kcm9wZG93bicpLmFkZENsYXNzKCdpcy1jbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmRyb3Bkb3duLWNhdGVnb3J5LWxpc3QnKS5hZGRDbGFzcygnY2F0LWV4cGFuZGVkJykuc2libGluZ3MoJy5pY29uLWRyb3Bkb3duJykuYWRkQ2xhc3MoJ2lzLWNsaWNrZWQnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5jaGlsZHJlbignYScpLmF0dHIoJ2hyZWYnKSA9PSBicmVhZExpbmspIHtcbiAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnY3VycmVudC1jYXQnKTtcbiAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuZHJvcGRvd24tY2F0ZWdvcnktbGlzdCcpLmFkZENsYXNzKCdjYXQtZXhwYW5kZWQnKS5zaWJsaW5ncygnLmljb24tZHJvcGRvd24nKS5hZGRDbGFzcygnaXMtY2xpY2tlZCcpO1xuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAkKCcuYWxsLWNhdGVnb3JpZXMtbGlzdCAuaWNvbi1kcm9wZG93bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnaXMtY2xpY2tlZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5maW5kKFwiPiAuZHJvcGRvd24tY2F0ZWdvcnktbGlzdFwiKS5zbGlkZVVwKCBcInNsb3dcIiApO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5maW5kKFwiPiAuaWNvbi1kcm9wZG93blwiKS5yZW1vdmVDbGFzcygnaXMtY2xpY2tlZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuZmluZChcIj4gLmRyb3Bkb3duLWNhdGVnb3J5LWxpc3RcIikuc2xpZGVUb2dnbGUoIFwic2xvd1wiICk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuYWxsLWNhdGVnb3JpZXMtbGlzdCcpLmZpbmQoJy5jdXJyZW50LWNhdCcpLnJlbW92ZUNsYXNzKCdjdXJyZW50LWNhdCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2lzLWNsaWNrZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy1jbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpcy1jbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd1Byb2R1Y3RzUGVyUGFnZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgIHZhciBjID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJsaW1pdFwiKTtcbiAgICAgICAgICAgIGlmKGMgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgdmFyIGxpbWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0I2xpbWl0IG9wdGlvbicpO1xuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobGltaXQsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudC52YWx1ZSA9PSBjKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2goZSkge31cbiAgICB9XG5cbiAgICBzaG93TW9yZVByb2R1Y3RzKCkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICBjb25zdCAkc2hvd01vcmUgPSAkKCcuY2F0ZWdvcnlfX3Nob3dNb3JlQnRuJyk7XG4gICAgICAgIGNvbnN0ICRzaG93TW9yZUJ0biA9ICQoJy5jYXRlZ29yeV9fc2hvd01vcmVCdG4gPiBhJyk7XG4gICAgICAgIGNvbnN0ICRwYWdpbmF0aW9uX25leHQgPSAkKFwiLnBhZ2luYXRpb24taXRlbS0tbmV4dFwiKTtcblxuICAgICAgICBpZiAoJHBhZ2luYXRpb25fbmV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgICRzaG93TW9yZS5hZGRDbGFzcygnaXMtc2hvdycpO1xuICAgICAgICB9XG5cbiAgICAgICAgJHNob3dNb3JlQnRuLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdmFyIG5leHRQYWdlID0gJChcIi5wYWdpbmF0aW9uLWl0ZW0tLWN1cnJlbnRcIikubmV4dCgpLFxuICAgICAgICAgICAgICAgIGxpbmsgPSBuZXh0UGFnZS5maW5kKFwiYVwiKS5hdHRyKFwiaHJlZlwiKTtcblxuICAgICAgICAgICAgJHNob3dNb3JlQnRuLmFkZENsYXNzKCdidG4tbG9hZGluZycpO1xuXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgICAgICAgICAgIHVybDogbGluay5yZXBsYWNlKFwiaHR0cDovL1wiLCBcIi8vXCIpLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoZGF0YSkuZmluZCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3RHcmlkJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgW2RhdGEtcHJvZHVjdC1jb21wYXJlXSA+IHVsJykuYXBwZW5kKCQoZGF0YSkuZmluZCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgW2RhdGEtcHJvZHVjdC1jb21wYXJlXSA+IHVsJykuY2hpbGRyZW4oKS5ub3QoJy5wcm9kdWN0LWFkdmVydGlzbWVudCcpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24tbGlzdCcpLmh0bWwoJChkYXRhKS5maW5kKFwiLnBhZ2luYXRpb24tbGlzdFwiKS5odG1sKCkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2hvd01vcmVCdG4ucmVtb3ZlQ2xhc3MoJ2J0bi1sb2FkaW5nJykuYmx1cigpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKCQoZGF0YSkuZmluZCgnLnBhZ2luYXRpb24taW5mbyAuZW5kJykudGV4dCgpKSA8PSBOdW1iZXIoJChkYXRhKS5maW5kKCcucGFnaW5hdGlvbi1pbmZvIC50b3RhbCcpLnRleHQoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcucGFnaW5hdGlvbiAucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS50ZXh0KCQoZGF0YSkuZmluZCgnLnBhZ2luYXRpb24taW5mbyAuZW5kJykudGV4dCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24gLnBhZ2luYXRpb24taW5mbyAuZW5kJykudGV4dCgkKGRhdGEpLmZpbmQoJy5wYWdpbmF0aW9uLWluZm8gLnRvdGFsJykudGV4dCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBhZ2UgPSAkKFwiLnBhZ2luYXRpb24taXRlbS0tY3VycmVudFwiKS5uZXh0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0UGFnZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2hvd01vcmVCdG4uYWRkQ2xhc3MoJ2Rpc2FibGUnKS50ZXh0KCdObyBtb3JlIHByb2R1Y3RzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbG9BZGRPcHRpb24oY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2F0ZWdvcnlIZWFkZXIoKSB7XG4gICAgICAgIGlmKHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLmNhdGVnb3J5X2hlYWRlcl90eXBlID09ICdiYW5uZXInKSB7XG4gICAgICAgICAgICBpZiAoISQoJy5jYXRlZ29yeUhlYWRlcl9faW1nJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJCgnLmNhdGVnb3J5SGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2NhdGVnb3J5SGVhZGVyLS1pbWcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImNvbnN0IFRSQU5TTEFUSU9OUyA9ICd0cmFuc2xhdGlvbnMnO1xuY29uc3QgaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSA9IChkaWN0aW9uYXJ5KSA9PiAhIU9iamVjdC5rZXlzKGRpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubGVuZ3RoO1xuY29uc3QgY2hvb3NlQWN0aXZlRGljdGlvbmFyeSA9ICguLi5kaWN0aW9uYXJ5SnNvbkxpc3QpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpY3Rpb25hcnlKc29uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkaWN0aW9uYXJ5ID0gSlNPTi5wYXJzZShkaWN0aW9uYXJ5SnNvbkxpc3RbaV0pO1xuICAgICAgICBpZiAoaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eShkaWN0aW9uYXJ5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGRpY3Rpb25hcnk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIGRlZmluZXMgVHJhbnNsYXRpb24gRGljdGlvbmFyeSB0byB1c2VcbiAqIEBwYXJhbSBjb250ZXh0IHByb3ZpZGVzIGFjY2VzcyB0byAzIHZhbGlkYXRpb24gSlNPTnMgZnJvbSBlbi5qc29uOlxuICogdmFsaWRhdGlvbl9tZXNzYWdlcywgdmFsaWRhdGlvbl9mYWxsYmFja19tZXNzYWdlcyBhbmQgZGVmYXVsdF9tZXNzYWdlc1xuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSA9IChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgeyB2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IGFjdGl2ZURpY3Rpb25hcnkgPSBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5KHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04pO1xuICAgIGNvbnN0IGxvY2FsaXphdGlvbnMgPSBPYmplY3QudmFsdWVzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSk7XG4gICAgY29uc3QgdHJhbnNsYXRpb25LZXlzID0gT2JqZWN0LmtleXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5tYXAoa2V5ID0+IGtleS5zcGxpdCgnLicpLnBvcCgpKTtcblxuICAgIHJldHVybiB0cmFuc2xhdGlvbktleXMucmVkdWNlKChhY2MsIGtleSwgaSkgPT4ge1xuICAgICAgICBhY2Nba2V5XSA9IGxvY2FsaXphdGlvbnNbaV07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xufTtcbiJdLCJuYW1lcyI6WyJob29rcyIsIkNhdGFsb2dQYWdlIiwiY29tcGFyZVByb2R1Y3RzIiwiRmFjZXRlZFNlYXJjaCIsImNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSIsImhhbG9BZGRPcHRpb24iLCJDYXRlZ29yeSIsIl9DYXRhbG9nUGFnZSIsImNvbnRleHQiLCJfdGhpcyIsImNhbGwiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeSIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwic2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMiLCIkZWxlbWVudCIsInJvbGVUeXBlIiwiYXJpYUxpdmVTdGF0dXMiLCJhdHRyIiwicm9sZSIsIm1ha2VTaG9wQnlQcmljZUZpbHRlckFjY2Vzc2libGUiLCJfdGhpczIiLCIkIiwibGVuZ3RoIiwiaGFzQ2xhc3MiLCJmb2N1cyIsIm9uIiwib25SZWFkeSIsIl90aGlzMyIsImFycmFuZ2VGb2N1c09uU29ydEJ5IiwiZSIsImN1cnJlbnRUYXJnZXQiLCJuZXh0IiwidXJscyIsImluaXRGYWNldGVkU2VhcmNoIiwib25Tb3J0QnlTdWJtaXQiLCJiaW5kIiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJoYXMiLCJzaG93IiwiZ2V0Iiwic2V0TGl2ZVJlZ2lvbnNBdHRyaWJ1dGVzIiwiYXJpYU5vdGlmeU5vUHJvZHVjdHMiLCJjYXRlZ29yeV9zaWRlYmFyIiwic2hvd01vcmVQcm9kdWN0cyIsInNob3dQcm9kdWN0c1BlclBhZ2UiLCJjYXRlZ29yeUhlYWRlciIsIiRub1Byb2R1Y3RzTWVzc2FnZSIsIl90aGlzNCIsIl90aGlzJHZhbGlkYXRpb25EaWN0aSIsIm9uTWluUHJpY2VFcnJvciIsInByaWNlX21pbl9ldmFsdWF0aW9uIiwib25NYXhQcmljZUVycm9yIiwicHJpY2VfbWF4X2V2YWx1YXRpb24iLCJtaW5QcmljZU5vdEVudGVyZWQiLCJwcmljZV9taW5fbm90X2VudGVyZWQiLCJtYXhQcmljZU5vdEVudGVyZWQiLCJwcmljZV9tYXhfbm90X2VudGVyZWQiLCJvbkludmFsaWRQcmljZSIsInByaWNlX2ludmFsaWRfdmFsdWUiLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCIkZmFjZXRlZFNlYXJjaENvbnRhaW5lciIsInByb2R1Y3RzUGVyUGFnZSIsImNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJjb25maWciLCJjYXRlZ29yeSIsInNob3BfYnlfcHJpY2UiLCJwcm9kdWN0cyIsImxpbWl0IiwidGVtcGxhdGUiLCJwcm9kdWN0TGlzdGluZyIsInNpZGViYXIiLCJzaG93TW9yZSIsImZhY2V0ZWRTZWFyY2giLCJjb250ZW50IiwiaHRtbCIsInRyaWdnZXJIYW5kbGVyIiwiJHByb2R1Y3RMaXN0aW5nIiwib2Zmc2V0IiwidG9wIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIiR0b3BQcm9kdWN0Iiwic2xpY2siLCJ2YWxpZGF0aW9uRXJyb3JNZXNzYWdlcyIsImVhY2giLCJicmVhZExpbmsiLCJwcmV2IiwiY2hpbGRyZW4iLCJwYXRobmFtZSIsImFkZENsYXNzIiwic2libGluZ3MiLCJwYXJlbnRzIiwicGFyZW50IiwicmVtb3ZlQ2xhc3MiLCJmaW5kIiwic2xpZGVVcCIsInNsaWRlVG9nZ2xlIiwidXJsIiwiVVJMIiwiaHJlZiIsImMiLCJzZWFyY2hQYXJhbXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJBcnJheSIsImZvckVhY2giLCJlbGVtZW50IiwidmFsdWUiLCJzZWxlY3RlZCIsIiRzaG93TW9yZSIsIiRzaG93TW9yZUJ0biIsIiRwYWdpbmF0aW9uX25leHQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibmV4dFBhZ2UiLCJsaW5rIiwiYWpheCIsInR5cGUiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRhdGEiLCJhcHBlbmQiLCJub3QiLCJibHVyIiwiTnVtYmVyIiwidGV4dCIsInRoZW1lU2V0dGluZ3MiLCJjYXRlZ29yeV9oZWFkZXJfdHlwZSIsImRlZmF1bHQiLCJUUkFOU0xBVElPTlMiLCJpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5IiwiZGljdGlvbmFyeSIsIk9iamVjdCIsImtleXMiLCJjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5IiwiaSIsImFyZ3VtZW50cyIsIkpTT04iLCJwYXJzZSIsInVuZGVmaW5lZCIsInZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiIsImFjdGl2ZURpY3Rpb25hcnkiLCJsb2NhbGl6YXRpb25zIiwidmFsdWVzIiwidHJhbnNsYXRpb25LZXlzIiwibWFwIiwia2V5Iiwic3BsaXQiLCJwb3AiLCJyZWR1Y2UiLCJhY2MiXSwic291cmNlUm9vdCI6IiJ9