(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page2"],{

/***/ "./assets/css/page2.css":
/*!******************************!*\
  !*** ./assets/css/page2.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/page2.js":
/*!****************************!*\
  !*** ./assets/js/page2.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_page2_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/page2.css */ "./assets/css/page2.css");
/* harmony import */ var _css_page2_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_page2_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_3__);




jquery__WEBPACK_IMPORTED_MODULE_2___default()('body').on('submit', 'form', function (event) {
  event.preventDefault();
  var Url = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr('action');
  var Album = {
    title: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.title').val(),
    creation: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.creation').val(),
    description: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.details-description').val()
  };
  var Data = {
    album: JSON.stringify(Album)
  };
  jquery__WEBPACK_IMPORTED_MODULE_2___default.a.ajax({
    url: Url,
    data: Data,
    method: 'POST',
    beforeSend: function beforeSend() {
      sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("Traitement en cours...");
    },
    success: function success(s) {
      var word = s.created ? 'ajouté' : 'modifié';
      sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("L'album a bien été " + word + " !", {
        icon: "success"
      });
      setTimeout(function () {
        window.location.href = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.control-prev').attr('href');
      }, 3000);
    },
    error: function error(_error) {
      sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
        title: "Oups!",
        text: "Un problème a été rencontré.",
        icon: "warning",
        button: "Fermer"
      });
    },
    complete: function complete() {
      sweetalert__WEBPACK_IMPORTED_MODULE_3___default.a.close();
    }
  });
}).on('click', '.control-remove', function () {
  var $this = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this);
  sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
    title: "Tu veux vraiment supprimer cet album ?",
    icon: "warning",
    buttons: true,
    dangerMode: true
  }).then(function (willDelete) {
    if (willDelete) {
      var Url = $this.data('href');
      jquery__WEBPACK_IMPORTED_MODULE_2___default.a.ajax({
        url: Url,
        method: 'POST',
        beforeSend: function beforeSend() {
          sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("Traitement en cours...");
        },
        success: function success() {
          sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("L'album a bien été supprimé !", {
            icon: "success"
          });
          setTimeout(function () {
            window.location.href = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.control-prev').attr('href');
          }, 3000);
        },
        error: function error(_error2) {
          sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
            title: "Oups!",
            text: "Un problème a été rencontré.",
            icon: "warning",
            button: "Fermer"
          });
        },
        complete: function complete() {
          sweetalert__WEBPACK_IMPORTED_MODULE_3___default.a.close();
        }
      });
    } else {
      sweetalert__WEBPACK_IMPORTED_MODULE_3___default.a.close();
    }
  });
});

/***/ })

},[["./assets/js/page2.js","runtime","vendors~app~page1~page2","vendors~page1~page2","vendors~app~page2","vendors~page2"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3BhZ2UyLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZTIuanMiXSwibmFtZXMiOlsiJCIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIlVybCIsImF0dHIiLCJBbGJ1bSIsInRpdGxlIiwidmFsIiwiY3JlYXRpb24iLCJkZXNjcmlwdGlvbiIsIkRhdGEiLCJhbGJ1bSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhamF4IiwidXJsIiwiZGF0YSIsIm1ldGhvZCIsImJlZm9yZVNlbmQiLCJzd2FsIiwic3VjY2VzcyIsInMiLCJ3b3JkIiwiY3JlYXRlZCIsImljb24iLCJzZXRUaW1lb3V0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZXJyb3IiLCJ0ZXh0IiwiYnV0dG9uIiwiY29tcGxldGUiLCJjbG9zZSIsIiR0aGlzIiwiYnV0dG9ucyIsImRhbmdlck1vZGUiLCJ0aGVuIiwid2lsbERlbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVBO0FBQ0E7QUFFQUEsNkNBQUMsQ0FBQyxNQUFELENBQUQsQ0FDS0MsRUFETCxDQUNRLFFBRFIsRUFDa0IsTUFEbEIsRUFDMEIsVUFBVUMsS0FBVixFQUFpQjtBQUNuQ0EsT0FBSyxDQUFDQyxjQUFOO0FBQ0EsTUFBTUMsR0FBRyxHQUFHSiw2Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSyxJQUFSLENBQWEsUUFBYixDQUFaO0FBQ0EsTUFBTUMsS0FBSyxHQUFHO0FBQ1ZDLFNBQUssRUFBRVAsNkNBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWVEsR0FBWixFQURHO0FBRVZDLFlBQVEsRUFBRVQsNkNBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZVEsR0FBZixFQUZBO0FBR1ZFLGVBQVcsRUFBRVYsNkNBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCUSxHQUExQjtBQUhILEdBQWQ7QUFLQSxNQUFNRyxJQUFJ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cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuLi9jc3MvcGFnZTIuY3NzJztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQnO1xuXG4kKCdib2R5JylcbiAgICAub24oJ3N1Ym1pdCcsICdmb3JtJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IFVybCA9ICQodGhpcykuYXR0cignYWN0aW9uJyk7XG4gICAgICAgIGNvbnN0IEFsYnVtID0ge1xuICAgICAgICAgICAgdGl0bGU6ICQoJy50aXRsZScpLnZhbCgpLFxuICAgICAgICAgICAgY3JlYXRpb246ICQoJy5jcmVhdGlvbicpLnZhbCgpLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICQoJy5kZXRhaWxzLWRlc2NyaXB0aW9uJykudmFsKClcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgRGF0YSA9IHsgYWxidW06IEpTT04uc3RyaW5naWZ5KEFsYnVtKSB9O1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBVcmwsXG4gICAgICAgICAgICBkYXRhOiBEYXRhLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc3dhbChcIlRyYWl0ZW1lbnQgZW4gY291cnMuLi5cIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB3b3JkID0gcy5jcmVhdGVkID8gJ2Fqb3V0w6knIDogJ21vZGlmacOpJztcbiAgICAgICAgICAgICAgICBzd2FsKFwiTCdhbGJ1bSBhIGJpZW4gw6l0w6kgXCIrIHdvcmQgK1wiICFcIiwge1xuICAgICAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICQoJy5jb250cm9sLXByZXYnKS5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJPdXBzIVwiLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlVuIHByb2Jsw6htZSBhIMOpdMOpIHJlbmNvbnRyw6kuXCIsXG4gICAgICAgICAgICAgICAgICAgIGljb246IFwid2FybmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBidXR0b246IFwiRmVybWVyXCIsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzd2FsLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pXG4gICAgLm9uKCdjbGljaycsICcuY29udHJvbC1yZW1vdmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICB0aXRsZTogXCJUdSB2ZXV4IHZyYWltZW50IHN1cHByaW1lciBjZXQgYWxidW0gP1wiLFxuICAgICAgICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICBidXR0b25zOiB0cnVlLFxuICAgICAgICAgICAgZGFuZ2VyTW9kZTogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCh3aWxsRGVsZXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHdpbGxEZWxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgVXJsID0gJHRoaXMuZGF0YSgnaHJlZicpO1xuICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2FsKFwiVHJhaXRlbWVudCBlbiBjb3Vycy4uLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhbChcIkwnYWxidW0gYSBiaWVuIMOpdMOpIHN1cHByaW3DqSAhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAkKCcuY29udHJvbC1wcmV2JykuYXR0cignaHJlZicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiT3VwcyFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJVbiBwcm9ibMOobWUgYSDDqXTDqSByZW5jb250csOpLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uOiBcIkZlcm1lclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhbC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzd2FsLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfSlcbjsiXSwic291cmNlUm9vdCI6IiJ9