"use strict";
(self["webpackChunkbigcommerce_surfup"] = self["webpackChunkbigcommerce_surfup"] || []).push([["assets_js_theme_brand_js"],{

/***/ "./assets/js/theme/brand.js":
/*!**********************************!*\
  !*** ./assets/js/theme/brand.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Brand)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }





var Brand = /*#__PURE__*/function (_CatalogPage) {
  function Brand(context) {
    var _this;
    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = (0,_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__.createTranslationDictionary)(context);
    return _this;
  }
  _inheritsLoose(Brand, _CatalogPage);
  var _proto = Brand.prototype;
  _proto.onReady = function onReady() {
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context.urls);
    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.on('sortBy-submitted', this.onSortBySubmit);
    }
    this.category_sidebar();
    this.showProductsPerPage();
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this2 = this;
    var _this$validationDicti = this.validationDictionary,
      onMinPriceError = _this$validationDicti.price_min_evaluation,
      onMaxPriceError = _this$validationDicti.price_max_evaluation,
      minPriceNotEntered = _this$validationDicti.price_min_not_entered,
      maxPriceNotEntered = _this$validationDicti.price_max_not_entered,
      onInvalidPrice = _this$validationDicti.price_invalid_value;
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var productsPerPage = this.context.brandProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'brand/product-listing',
        sidebar: 'brand/sidebar'
      },
      config: {
        shop_by_brand: true,
        brand: {
          products: {
            limit: productsPerPage
          }
        }
      },
      showMore: 'brand/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $('body').triggerHandler('compareReset');
      var $productListing = $('#product-listing-container').offset().top - 145;
      $('html, body').animate({
        scrollTop: $productListing
      }, 100);
      _this2.category_sidebar();
      _this2.showProductsPerPage();
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
  return Brand;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9icmFuZF9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZjtBQUNvQjtBQUNKO0FBQ21DO0FBQUEsSUFFbEVLLEtBQUssMEJBQUFDLFlBQUE7RUFDdEIsU0FBQUQsTUFBWUUsT0FBTyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUNqQkEsS0FBQSxHQUFBRixZQUFBLENBQUFHLElBQUEsT0FBTUYsT0FBTyxDQUFDO0lBQ2RDLEtBQUEsQ0FBS0Usb0JBQW9CLEdBQUdOLG1HQUEyQixDQUFDRyxPQUFPLENBQUM7SUFBQyxPQUFBQyxLQUFBO0VBQ3JFO0VBQUNHLGNBQUEsQ0FBQU4sS0FBQSxFQUFBQyxZQUFBO0VBQUEsSUFBQU0sTUFBQSxHQUFBUCxLQUFBLENBQUFRLFNBQUE7RUFBQUQsTUFBQSxDQUVERSxPQUFPLEdBQVAsU0FBQUEsT0FBT0EsQ0FBQSxFQUFHO0lBQ05aLG9FQUFlLENBQUMsSUFBSSxDQUFDSyxPQUFPLENBQUNRLElBQUksQ0FBQztJQUVsQyxJQUFJQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsRUFBRTtNQUNoQyxJQUFJLENBQUNDLGlCQUFpQixDQUFDLENBQUM7SUFDNUIsQ0FBQyxNQUFNO01BQ0gsSUFBSSxDQUFDQyxjQUFjLEdBQUcsSUFBSSxDQUFDQSxjQUFjLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7TUFDcERwQiw2REFBSyxDQUFDcUIsRUFBRSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQ0YsY0FBYyxDQUFDO0lBQ3JEO0lBRUEsSUFBSSxDQUFDRyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3ZCLElBQUksQ0FBQ0MsbUJBQW1CLENBQUMsQ0FBQztFQUM5QixDQUFDO0VBQUFYLE1BQUEsQ0FFRE0saUJBQWlCLEdBQWpCLFNBQUFBLGlCQUFpQkEsQ0FBQSxFQUFHO0lBQUEsSUFBQU0sTUFBQTtJQUNoQixJQUFBQyxxQkFBQSxHQU1JLElBQUksQ0FBQ2Ysb0JBQW9CO01BTEhnQixlQUFlLEdBQUFELHFCQUFBLENBQXJDRSxvQkFBb0I7TUFDRUMsZUFBZSxHQUFBSCxxQkFBQSxDQUFyQ0ksb0JBQW9CO01BQ0dDLGtCQUFrQixHQUFBTCxxQkFBQSxDQUF6Q00scUJBQXFCO01BQ0VDLGtCQUFrQixHQUFBUCxxQkFBQSxDQUF6Q1EscUJBQXFCO01BQ0FDLGNBQWMsR0FBQVQscUJBQUEsQ0FBbkNVLG1CQUFtQjtJQUV2QixJQUFNQyx3QkFBd0IsR0FBR3BCLENBQUMsQ0FBQyw0QkFBNEIsQ0FBQztJQUNoRSxJQUFNcUIsdUJBQXVCLEdBQUdyQixDQUFDLENBQUMsMkJBQTJCLENBQUM7SUFDOUQsSUFBTXNCLGVBQWUsR0FBRyxJQUFJLENBQUMvQixPQUFPLENBQUNnQyxvQkFBb0I7SUFDekQsSUFBTUMsY0FBYyxHQUFHO01BQ25CQyxRQUFRLEVBQUU7UUFDTkMsY0FBYyxFQUFFLHVCQUF1QjtRQUN2Q0MsT0FBTyxFQUFFO01BQ2IsQ0FBQztNQUNEQyxNQUFNLEVBQUU7UUFDSkMsYUFBYSxFQUFFLElBQUk7UUFDbkJDLEtBQUssRUFBRTtVQUNIQyxRQUFRLEVBQUU7WUFDTkMsS0FBSyxFQUFFVjtVQUNYO1FBQ0o7TUFDSixDQUFDO01BQ0RXLFFBQVEsRUFBRTtJQUNkLENBQUM7SUFFRCxJQUFJLENBQUNDLGFBQWEsR0FBRyxJQUFJL0MsOERBQWEsQ0FBQ3FDLGNBQWMsRUFBRSxVQUFDVyxPQUFPLEVBQUs7TUFDaEVmLHdCQUF3QixDQUFDZ0IsSUFBSSxDQUFDRCxPQUFPLENBQUNULGNBQWMsQ0FBQztNQUNyREwsdUJBQXVCLENBQUNlLElBQUksQ0FBQ0QsT0FBTyxDQUFDUixPQUFPLENBQUM7TUFFN0MzQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNxQyxjQUFjLENBQUMsY0FBYyxDQUFDO01BRXpDLElBQU1DLGVBQWUsR0FBR3RDLENBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDdUMsTUFBTSxDQUFDLENBQUMsQ0FBQ0MsR0FBRyxHQUFHLEdBQUc7TUFFekV4QyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUN5QyxPQUFPLENBQUM7UUFDcEJDLFNBQVMsRUFBRUo7TUFDZixDQUFDLEVBQUUsR0FBRyxDQUFDO01BRVA5QixNQUFJLENBQUNGLGdCQUFnQixDQUFDLENBQUM7TUFDdkJFLE1BQUksQ0FBQ0QsbUJBQW1CLENBQUMsQ0FBQztNQUUxQixJQUFNb0MsV0FBVyxHQUFHM0MsQ0FBQyxDQUFDLHVFQUF1RSxDQUFDO01BRTlGLElBQUkyQyxXQUFXLENBQUMxQyxNQUFNLEVBQUU7UUFDcEIwQyxXQUFXLENBQUNDLEtBQUssQ0FBQyxDQUFDO01BQ3ZCO0lBQ0osQ0FBQyxFQUFFO01BQ0NDLHVCQUF1QixFQUFFO1FBQ3JCbkMsZUFBZSxFQUFmQSxlQUFlO1FBQ2ZFLGVBQWUsRUFBZkEsZUFBZTtRQUNmRSxrQkFBa0IsRUFBbEJBLGtCQUFrQjtRQUNsQkUsa0JBQWtCLEVBQWxCQSxrQkFBa0I7UUFDbEJFLGNBQWMsRUFBZEE7TUFDSjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQXRCLE1BQUEsQ0FFRFUsZ0JBQWdCLEdBQWhCLFNBQUFBLGdCQUFnQkEsQ0FBQSxFQUFHO0lBQ2YsSUFBSU4sQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUNDLE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDdENELENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDOEMsSUFBSSxDQUFDLFlBQVc7UUFDN0MsSUFBTUMsU0FBUyxHQUFHL0MsQ0FBQyxDQUFDLG9FQUFvRSxDQUFDLENBQUNnRCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUNDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN4SSxJQUFLbEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDaUQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUlDLE1BQU0sQ0FBQ0MsUUFBUSxJQUFNcEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDaUQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUlDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxRQUFTLEVBQUU7VUFDOUhyRCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNzRCxRQUFRLENBQUMsYUFBYSxDQUFDO1VBQy9CdEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDaUQsUUFBUSxDQUFDLHlCQUF5QixDQUFDLENBQUNLLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUNELFFBQVEsQ0FBQyxZQUFZLENBQUM7VUFDdEh0RCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN3RCxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQ0YsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ0QsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUN4SDtRQUNBLElBQUl0RCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNpRCxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSUgsU0FBUyxFQUFFO1VBQ2xEL0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDc0QsUUFBUSxDQUFDLGFBQWEsQ0FBQztVQUMvQnRELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3dELE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDRixRQUFRLENBQUMsY0FBYyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDRCxRQUFRLENBQUMsWUFBWSxDQUFDO1FBRXhIO01BQ0gsQ0FBQyxDQUFDO01BRUR0RCxDQUFDLENBQUMscUNBQXFDLENBQUMsQ0FBQ0ssRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFXO1FBQzVETCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN5RCxNQUFNLENBQUMsQ0FBQyxDQUFDRixRQUFRLENBQUMsQ0FBQyxDQUFDRyxXQUFXLENBQUMsWUFBWSxDQUFDO1FBQ3JEMUQsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDeUQsTUFBTSxDQUFDLENBQUMsQ0FBQ0YsUUFBUSxDQUFDLENBQUMsQ0FBQ0ksSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUNDLE9BQU8sQ0FBRSxNQUFPLENBQUM7UUFDL0U1RCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN5RCxNQUFNLENBQUMsQ0FBQyxDQUFDRixRQUFRLENBQUMsQ0FBQyxDQUFDSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQ0QsV0FBVyxDQUFDLFlBQVksQ0FBQztRQUM5RTFELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3lELE1BQU0sQ0FBQyxDQUFDLENBQUNFLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDRSxXQUFXLENBQUUsTUFBTyxDQUFDO1FBQ3hFN0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDeUQsTUFBTSxDQUFDLENBQUMsQ0FBQ0YsUUFBUSxDQUFDLENBQUMsQ0FBQ0csV0FBVyxDQUFDLE1BQU0sQ0FBQztRQUMvQzFELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3dELE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUNELFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFFdkYsSUFBSTFELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzhELFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRTtVQUNoQzlELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzBELFdBQVcsQ0FBQyxZQUFZLENBQUM7VUFDakMxRCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUN5RCxNQUFNLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsTUFBTSxDQUFDO1FBQ3hDLENBQUMsTUFBTTtVQUNIMUQsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDc0QsUUFBUSxDQUFDLFlBQVksQ0FBQztVQUM5QnRELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3lELE1BQU0sQ0FBQyxDQUFDLENBQUNILFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDckM7TUFDTCxDQUFDLENBQUM7SUFDTDtFQUNKLENBQUM7RUFBQTFELE1BQUEsQ0FFRFcsbUJBQW1CLEdBQW5CLFNBQUFBLG1CQUFtQkEsQ0FBQSxFQUFHO0lBQ2xCLElBQUk7TUFDQSxJQUFJd0QsR0FBRyxHQUFHLElBQUlDLEdBQUcsQ0FBQ2IsTUFBTSxDQUFDQyxRQUFRLENBQUNhLElBQUksQ0FBQztNQUN2QyxJQUFJQyxDQUFDLEdBQUdILEdBQUcsQ0FBQ0ksWUFBWSxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO01BQ3JDLElBQUdGLENBQUMsSUFBSSxJQUFJLEVBQUM7UUFDVCxJQUFJbEMsS0FBSyxHQUFHcUMsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQztRQUM1REMsS0FBSyxDQUFDMUUsU0FBUyxDQUFDMkUsT0FBTyxDQUFDL0UsSUFBSSxDQUFDdUMsS0FBSyxFQUFFLFVBQVN5QyxPQUFPLEVBQUU7VUFDbEQsSUFBR0EsT0FBTyxDQUFDQyxLQUFLLElBQUlSLENBQUMsRUFBQztZQUNsQk8sT0FBTyxDQUFDRSxRQUFRLEdBQUcsSUFBSTtVQUMzQjtRQUNKLENBQUMsQ0FBQztNQUNOO0lBQ0osQ0FBQyxDQUFDLE9BQU1DLENBQUMsRUFBRSxDQUFDO0VBQ2hCLENBQUM7RUFBQSxPQUFBdkYsS0FBQTtBQUFBLEVBOUg4QkosZ0RBQVc7Ozs7Ozs7Ozs7Ozs7OztBQ045QyxJQUFNNkYsWUFBWSxHQUFHLGNBQWM7QUFDbkMsSUFBTUMsK0JBQStCLEdBQUcsU0FBbENBLCtCQUErQkEsQ0FBSUMsVUFBVTtFQUFBLE9BQUssQ0FBQyxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0YsVUFBVSxDQUFDRixZQUFZLENBQUMsQ0FBQyxDQUFDN0UsTUFBTTtBQUFBO0FBQ3RHLElBQU1rRixzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXNCQSxDQUFBLEVBQThCO0VBQ3RELEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHQyxTQUFBLENBQW1CcEYsTUFBTSxFQUFFbUYsQ0FBQyxFQUFFLEVBQUU7SUFDaEQsSUFBTUosVUFBVSxHQUFHTSxJQUFJLENBQUNDLEtBQUssQ0FBb0JILENBQUMsUUFBQUMsU0FBQSxDQUFBcEYsTUFBQSxJQUFEbUYsQ0FBQyxHQUFBSSxTQUFBLEdBQUFILFNBQUEsQ0FBREQsQ0FBQyxDQUFDLENBQUM7SUFDcEQsSUFBSUwsK0JBQStCLENBQUNDLFVBQVUsQ0FBQyxFQUFFO01BQzdDLE9BQU9BLFVBQVU7SUFDckI7RUFDSjtBQUNKLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTTVGLDJCQUEyQixHQUFHLFNBQTlCQSwyQkFBMkJBLENBQUlHLE9BQU8sRUFBSztFQUNwRCxJQUFRa0csd0JBQXdCLEdBQXdFbEcsT0FBTyxDQUF2R2tHLHdCQUF3QjtJQUFFQyxnQ0FBZ0MsR0FBc0NuRyxPQUFPLENBQTdFbUcsZ0NBQWdDO0lBQUVDLCtCQUErQixHQUFLcEcsT0FBTyxDQUEzQ29HLCtCQUErQjtFQUNuRyxJQUFNQyxnQkFBZ0IsR0FBR1Qsc0JBQXNCLENBQUNNLHdCQUF3QixFQUFFQyxnQ0FBZ0MsRUFBRUMsK0JBQStCLENBQUM7RUFDNUksSUFBTUUsYUFBYSxHQUFHWixNQUFNLENBQUNhLE1BQU0sQ0FBQ0YsZ0JBQWdCLENBQUNkLFlBQVksQ0FBQyxDQUFDO0VBQ25FLElBQU1pQixlQUFlLEdBQUdkLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDVSxnQkFBZ0IsQ0FBQ2QsWUFBWSxDQUFDLENBQUMsQ0FBQ2tCLEdBQUcsQ0FBQyxVQUFBQyxHQUFHO0lBQUEsT0FBSUEsR0FBRyxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNDLEdBQUcsQ0FBQyxDQUFDO0VBQUEsRUFBQztFQUVwRyxPQUFPSixlQUFlLENBQUNLLE1BQU0sQ0FBQyxVQUFDQyxHQUFHLEVBQUVKLEdBQUcsRUFBRWIsQ0FBQyxFQUFLO0lBQzNDaUIsR0FBRyxDQUFDSixHQUFHLENBQUMsR0FBR0osYUFBYSxDQUFDVCxDQUFDLENBQUM7SUFDM0IsT0FBT2lCLEdBQUc7RUFDZCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDVixDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1zdXJmdXAvLi9hc3NldHMvanMvdGhlbWUvYnJhbmQuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2Utc3VyZnVwLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9va3MgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSAnLi9jYXRhbG9nJztcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cyc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XG5pbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tICcuLi90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJhbmQgZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeSA9IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeShjb250ZXh0KTtcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0LnVybHMpO1xuXG4gICAgICAgIGlmICgkKCcjZmFjZXRlZFNlYXJjaCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEZhY2V0ZWRTZWFyY2goKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYXRlZ29yeV9zaWRlYmFyKCk7XG4gICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzUGVyUGFnZSgpO1xuICAgIH1cblxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBwcmljZV9taW5fZXZhbHVhdGlvbjogb25NaW5QcmljZUVycm9yLFxuICAgICAgICAgICAgcHJpY2VfbWF4X2V2YWx1YXRpb246IG9uTWF4UHJpY2VFcnJvcixcbiAgICAgICAgICAgIHByaWNlX21pbl9ub3RfZW50ZXJlZDogbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgcHJpY2VfbWF4X25vdF9lbnRlcmVkOiBtYXhQcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICBwcmljZV9pbnZhbGlkX3ZhbHVlOiBvbkludmFsaWRQcmljZSxcbiAgICAgICAgfSA9IHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnk7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuYnJhbmRQcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ2JyYW5kL3Byb2R1Y3QtbGlzdGluZycsXG4gICAgICAgICAgICAgICAgc2lkZWJhcjogJ2JyYW5kL3NpZGViYXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIHNob3BfYnlfYnJhbmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgYnJhbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiBwcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93TW9yZTogJ2JyYW5kL3Nob3ctbW9yZScsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5mYWNldGVkU2VhcmNoID0gbmV3IEZhY2V0ZWRTZWFyY2gocmVxdWVzdE9wdGlvbnMsIChjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgICAgICAgICRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmh0bWwoY29udGVudC5zaWRlYmFyKTtcblxuICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXJIYW5kbGVyKCdjb21wYXJlUmVzZXQnKTtcblxuICAgICAgICAgICBjb25zdCAkcHJvZHVjdExpc3RpbmcgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpLm9mZnNldCgpLnRvcCAtIDE0NTtcblxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogJHByb2R1Y3RMaXN0aW5nLFxuICAgICAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICAgICAgdGhpcy5jYXRlZ29yeV9zaWRlYmFyKCk7XG4gICAgICAgICAgICB0aGlzLnNob3dQcm9kdWN0c1BlclBhZ2UoKTtcblxuICAgICAgICAgICAgY29uc3QgJHRvcFByb2R1Y3QgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyICNQcm9kdWN0Q2Fyb3VzZWxUb3BTZWxsZXJzIC5wcm9kdWN0Q2Fyb3VzZWwnKTtcblxuICAgICAgICAgICAgaWYgKCR0b3BQcm9kdWN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICR0b3BQcm9kdWN0LnNsaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvck1lc3NhZ2VzOiB7XG4gICAgICAgICAgICAgICAgb25NaW5QcmljZUVycm9yLFxuICAgICAgICAgICAgICAgIG9uTWF4UHJpY2VFcnJvcixcbiAgICAgICAgICAgICAgICBtaW5QcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICAgICAgbWF4UHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgICAgIG9uSW52YWxpZFByaWNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2F0ZWdvcnlfc2lkZWJhcigpIHtcbiAgICAgICAgaWYgKCQoJy5hbGwtY2F0ZWdvcmllcy1saXN0JykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgJCgndWwuYWxsLWNhdGVnb3JpZXMtbGlzdCBsaScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGJyZWFkTGluayA9ICQoJy5wYWdlLXR5cGUtcHJvZHVjdCAjYnJlYWRjcnVtYnMtd3JhcHBlciB1bCBsaS5icmVhZGNydW1iLmlzLWFjdGl2ZScpLnByZXYoJy5icmVhZGNydW1iJykuY2hpbGRyZW4oJ2EnKS5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICAgIGlmICgoJCh0aGlzKS5jaGlsZHJlbignYScpLmF0dHIoJ2hyZWYnKSA9PSB3aW5kb3cubG9jYXRpb24pIHx8ICgkKHRoaXMpLmNoaWxkcmVuKCdhJykuYXR0cignaHJlZicpID09IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnY3VycmVudC1jYXQnKTtcbiAgICAgICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLmRyb3Bkb3duLWNhdGVnb3J5LWxpc3QnKS5hZGRDbGFzcygnY2F0LWV4cGFuZGVkJykuc2libGluZ3MoJy5pY29uLWRyb3Bkb3duJykuYWRkQ2xhc3MoJ2lzLWNsaWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuZHJvcGRvd24tY2F0ZWdvcnktbGlzdCcpLmFkZENsYXNzKCdjYXQtZXhwYW5kZWQnKS5zaWJsaW5ncygnLmljb24tZHJvcGRvd24nKS5hZGRDbGFzcygnaXMtY2xpY2tlZCcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICgkKHRoaXMpLmNoaWxkcmVuKCdhJykuYXR0cignaHJlZicpID09IGJyZWFkTGluaykge1xuICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdjdXJyZW50LWNhdCcpO1xuICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5kcm9wZG93bi1jYXRlZ29yeS1saXN0JykuYWRkQ2xhc3MoJ2NhdC1leHBhbmRlZCcpLnNpYmxpbmdzKCcuaWNvbi1kcm9wZG93bicpLmFkZENsYXNzKCdpcy1jbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICQoJy5hbGwtY2F0ZWdvcmllcy1saXN0IC5pY29uLWRyb3Bkb3duJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdpcy1jbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmZpbmQoXCI+IC5kcm9wZG93bi1jYXRlZ29yeS1saXN0XCIpLnNsaWRlVXAoIFwic2xvd1wiICk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmZpbmQoXCI+IC5pY29uLWRyb3Bkb3duXCIpLnJlbW92ZUNsYXNzKCdpcy1jbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKFwiPiAuZHJvcGRvd24tY2F0ZWdvcnktbGlzdFwiKS5zbGlkZVRvZ2dsZSggXCJzbG93XCIgKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5hbGwtY2F0ZWdvcmllcy1saXN0JykuZmluZCgnLmN1cnJlbnQtY2F0JykucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtY2F0Jyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnaXMtY2xpY2tlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lzLWNsaWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLWNsaWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93UHJvZHVjdHNQZXJQYWdlKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICAgICAgdmFyIGMgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImxpbWl0XCIpO1xuICAgICAgICAgICAgaWYoYyAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICB2YXIgbGltaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QjbGltaXQgb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChsaW1pdCwgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50LnZhbHVlID09IGMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlKSB7fVxuICAgIH1cbn1cbiIsImNvbnN0IFRSQU5TTEFUSU9OUyA9ICd0cmFuc2xhdGlvbnMnO1xuY29uc3QgaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSA9IChkaWN0aW9uYXJ5KSA9PiAhIU9iamVjdC5rZXlzKGRpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubGVuZ3RoO1xuY29uc3QgY2hvb3NlQWN0aXZlRGljdGlvbmFyeSA9ICguLi5kaWN0aW9uYXJ5SnNvbkxpc3QpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpY3Rpb25hcnlKc29uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkaWN0aW9uYXJ5ID0gSlNPTi5wYXJzZShkaWN0aW9uYXJ5SnNvbkxpc3RbaV0pO1xuICAgICAgICBpZiAoaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eShkaWN0aW9uYXJ5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGRpY3Rpb25hcnk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIGRlZmluZXMgVHJhbnNsYXRpb24gRGljdGlvbmFyeSB0byB1c2VcbiAqIEBwYXJhbSBjb250ZXh0IHByb3ZpZGVzIGFjY2VzcyB0byAzIHZhbGlkYXRpb24gSlNPTnMgZnJvbSBlbi5qc29uOlxuICogdmFsaWRhdGlvbl9tZXNzYWdlcywgdmFsaWRhdGlvbl9mYWxsYmFja19tZXNzYWdlcyBhbmQgZGVmYXVsdF9tZXNzYWdlc1xuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSA9IChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgeyB2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IGFjdGl2ZURpY3Rpb25hcnkgPSBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5KHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04pO1xuICAgIGNvbnN0IGxvY2FsaXphdGlvbnMgPSBPYmplY3QudmFsdWVzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSk7XG4gICAgY29uc3QgdHJhbnNsYXRpb25LZXlzID0gT2JqZWN0LmtleXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5tYXAoa2V5ID0+IGtleS5zcGxpdCgnLicpLnBvcCgpKTtcblxuICAgIHJldHVybiB0cmFuc2xhdGlvbktleXMucmVkdWNlKChhY2MsIGtleSwgaSkgPT4ge1xuICAgICAgICBhY2Nba2V5XSA9IGxvY2FsaXphdGlvbnNbaV07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xufTtcbiJdLCJuYW1lcyI6WyJob29rcyIsIkNhdGFsb2dQYWdlIiwiY29tcGFyZVByb2R1Y3RzIiwiRmFjZXRlZFNlYXJjaCIsImNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSIsIkJyYW5kIiwiX0NhdGFsb2dQYWdlIiwiY29udGV4dCIsIl90aGlzIiwiY2FsbCIsInZhbGlkYXRpb25EaWN0aW9uYXJ5IiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvblJlYWR5IiwidXJscyIsIiQiLCJsZW5ndGgiLCJpbml0RmFjZXRlZFNlYXJjaCIsIm9uU29ydEJ5U3VibWl0IiwiYmluZCIsIm9uIiwiY2F0ZWdvcnlfc2lkZWJhciIsInNob3dQcm9kdWN0c1BlclBhZ2UiLCJfdGhpczIiLCJfdGhpcyR2YWxpZGF0aW9uRGljdGkiLCJvbk1pblByaWNlRXJyb3IiLCJwcmljZV9taW5fZXZhbHVhdGlvbiIsIm9uTWF4UHJpY2VFcnJvciIsInByaWNlX21heF9ldmFsdWF0aW9uIiwibWluUHJpY2VOb3RFbnRlcmVkIiwicHJpY2VfbWluX25vdF9lbnRlcmVkIiwibWF4UHJpY2VOb3RFbnRlcmVkIiwicHJpY2VfbWF4X25vdF9lbnRlcmVkIiwib25JbnZhbGlkUHJpY2UiLCJwcmljZV9pbnZhbGlkX3ZhbHVlIiwiJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyIiwiJGZhY2V0ZWRTZWFyY2hDb250YWluZXIiLCJwcm9kdWN0c1BlclBhZ2UiLCJicmFuZFByb2R1Y3RzUGVyUGFnZSIsInJlcXVlc3RPcHRpb25zIiwidGVtcGxhdGUiLCJwcm9kdWN0TGlzdGluZyIsInNpZGViYXIiLCJjb25maWciLCJzaG9wX2J5X2JyYW5kIiwiYnJhbmQiLCJwcm9kdWN0cyIsImxpbWl0Iiwic2hvd01vcmUiLCJmYWNldGVkU2VhcmNoIiwiY29udGVudCIsImh0bWwiLCJ0cmlnZ2VySGFuZGxlciIsIiRwcm9kdWN0TGlzdGluZyIsIm9mZnNldCIsInRvcCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCIkdG9wUHJvZHVjdCIsInNsaWNrIiwidmFsaWRhdGlvbkVycm9yTWVzc2FnZXMiLCJlYWNoIiwiYnJlYWRMaW5rIiwicHJldiIsImNoaWxkcmVuIiwiYXR0ciIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJhZGRDbGFzcyIsInNpYmxpbmdzIiwicGFyZW50cyIsInBhcmVudCIsInJlbW92ZUNsYXNzIiwiZmluZCIsInNsaWRlVXAiLCJzbGlkZVRvZ2dsZSIsImhhc0NsYXNzIiwidXJsIiwiVVJMIiwiaHJlZiIsImMiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJBcnJheSIsImZvckVhY2giLCJlbGVtZW50IiwidmFsdWUiLCJzZWxlY3RlZCIsImUiLCJkZWZhdWx0IiwiVFJBTlNMQVRJT05TIiwiaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSIsImRpY3Rpb25hcnkiLCJPYmplY3QiLCJrZXlzIiwiY2hvb3NlQWN0aXZlRGljdGlvbmFyeSIsImkiLCJhcmd1bWVudHMiLCJKU09OIiwicGFyc2UiLCJ1bmRlZmluZWQiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04iLCJhY3RpdmVEaWN0aW9uYXJ5IiwibG9jYWxpemF0aW9ucyIsInZhbHVlcyIsInRyYW5zbGF0aW9uS2V5cyIsIm1hcCIsImtleSIsInNwbGl0IiwicG9wIiwicmVkdWNlIiwiYWNjIl0sInNvdXJjZVJvb3QiOiIifQ==