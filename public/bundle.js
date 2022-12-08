/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  var e = {
      184: (e, t) => {
        var n;
        !(function () {
          "use strict";
          var r = {}.hasOwnProperty;
          function a() {
            for (var e = [], t = 0; t < arguments.length; t++) {
              var n = arguments[t];
              if (n) {
                var o = typeof n;
                if ("string" === o || "number" === o) e.push(n);
                else if (Array.isArray(n)) {
                  if (n.length) {
                    var i = a.apply(null, n);
                    i && e.push(i);
                  }
                } else if ("object" === o) {
                  if (
                    n.toString !== Object.prototype.toString &&
                    !n.toString.toString().includes("[native code]")
                  ) {
                    e.push(n.toString());
                    continue;
                  }
                  for (var l in n) r.call(n, l) && n[l] && e.push(l);
                }
              }
            }
            return e.join(" ");
          }
          e.exports
            ? ((a.default = a), (e.exports = a))
            : void 0 ===
                (n = function () {
                  return a;
                }.apply(t, [])) || (e.exports = n);
        })();
      },
      965: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => l });
        var r = n(81),
          a = n.n(r),
          o = n(645),
          i = n.n(o)()(a());
        i.push([
          e.id,
          "body {\n  font-family: 'Open Sans', sans-serif;\n  margin: 0;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\n.card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  margin: 8px;\n}\n\n.about-section {\n  padding: 50px;\n  text-align: center;\n  background-color: #474e5d;\n  color: white;\n}\n\n.container {\n  padding: 0 16px;\n}\n\n.container::after,\n.row::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n.title {\n  color: grey;\n}\n\n.button {\n  border: none;\n  outline: 0;\n  display: inline-block;\n  padding: 8px;\n  color: white;\n  background-color: #000;\n  text-align: center;\n  cursor: pointer;\n  width: 100%;\n}\n\n.button:hover {\n  background-color: #555;\n}\n\n@media screen and (max-width: 650px) {\n  .column {\n    width: 100%;\n    display: block;\n  }\n}",
          "",
        ]);
        const l = i;
      },
      502: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => l });
        var r = n(81),
          a = n.n(r),
          o = n(645),
          i = n.n(o)()(a());
        i.push([
          e.id,
          "body {\n    margin: 0;\n    padding: 0;\n    font-family: 'Open Sans', sans-serif;\n}\n\n.banner {\n\n    background-image: linear-gradient(160deg, #eff0f0 70%, #eaebeb 100%);\n    padding: 1rem 0;\n\n}",
          "",
        ]);
        const l = i;
      },
      882: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => l });
        var r = n(81),
          a = n.n(r),
          o = n(645),
          i = n.n(o)()(a());
        i.push([
          e.id,
          ".comments {\n  margin-top: 20px;\n  width: 80%;\n  margin: 0 auto;\n}\n\n.comments-title {\n  font-size: 30px;\n  margin-bottom: 20px;\n}\n\n.comments-container {\n  margin-top: 40px;\n}\n\n.comment-form-title {\n  font-size: 22px;\n}\n\n.comment-form-textarea {\n  font-family: 'Open Sans', sans-serif;\n  width: 100%;\n  height: 80px;\n  margin: 8px auto;\n  border: 1px solid rgb(107, 114, 12);\n}\n\n.comment-form-button {\n  font-size: 16px;\n  padding: 8px 16px;\n  background: rgb(59, 130, 246);\n  border-radius: 8px;\n  color: white;\n}\n\n.comment-form-button:hover:enabled {\n  cursor: pointer;\n  background: rgb(37, 99, 235);\n}\n\n.comment-form-button:disabled {\n  opacity: 0.7;\n  cursor: default;\n}\n\n.comment-form-cancel-button {\n  margin-left: 10px;\n}\n\n.comment {\n  display: flex;\n  margin-bottom: 28px;\n}\n\n.comment-image-container {\n  margin-right: 12px;\n}\n\n.comment-image-container img {\n  border-radius: 50px;\n}\n\n.comment-right-part {\n  width: 100%;\n}\n\n.comment-content {\n  display: flex;\n}\n\n.comment-author {\n  margin-right: 8px;\n  font-size: 20px;\n  color: rgb(59, 130, 246);\n}\n\n.comment-text {\n  font-size: 18px;\n}\n\n.comment-actions {\n  display: flex;\n  font-size: 12px;\n  color: rgb(51, 51, 51);\n  cursor: pointer;\n  margin-top: 8px;\n}\n\n.comment-action {\n  margin-right: 8px;\n}\n\n.comment-action:hover {\n  text-decoration: underline;\n}\n\n.replies {\n  margin-top: 20px;\n}",
          "",
        ]);
        const l = i;
      },
      406: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => l });
        var r = n(81),
          a = n.n(r),
          o = n(645),
          i = n.n(o)()(a());
        i.push([
          e.id,
          "/*\n    home.css: This website contains selectors only used in home.css\n\n    All pages share the styles on index.css but you should create \n    one more css for each page that will contain the selected used \n    on that page only (the ones not reused in other pages).\n*/\n\n*,\n*::before,\n*::after {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Open Sans', sans-serif !important;\n  font-size: 1rem;\n  align-items: center;\n  justify-content: center;\n  margin: 0px;\n  background-color: #ffffff !important;\n}\n\n.carousel {\n  height: auto;\n  width: 100%;\n  border: none;\n  overflow-x: scroll;\n}\n\n.itemcard {\n  height: auto;\n  display: flex;\n  overflow-y: hidden;\n}\n\n.title-card {\n  margin: 0px;\n  padding: 0px;\n}\n\n.img-description {\n  width: 50%;\n}\n\n.seccion {\n  transition: all 0.2s ease-in-out;\n  box-sizing: border-box;\n  margin-top: 10px;\n  background-color: transparent;\n  border-radius: 10px;\n}\n\n.seccion:hover {\n  box-shadow: 0 6px rgba(68, 68, 68, 0.19);\n  color: rgb(97, 97, 97);\n}\n\n.seccion>.seccion-inner {\n  padding: 10px;\n}\n\n.seccion .header h2,\nh3 {\n  margin-bottom: 0px;\n  margin-top: 0px;\n}\n\n\n.seccion img {\n  width: 100%;\n}\n\n.seccion-link {\n  text-decoration: none;\n  color: black;\n}\n\n.btn-search {\n  background: #424242;\n  border-radius: 0;\n  color: #fff;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #1c1c1c;\n  font-size: 1rem;\n}\n\n.btn-search:link,\n.btn-search:visited {\n  color: #fff;\n}\n\n.btn-search:active,\n.btn-search:hover {\n  background-color: white;\n  color: black;\n  border: 1px solid rgb(102, 102, 102);\n  letter-spacing: 1px;\n  font-size: 1rem;\n}\n\n.categories {\n  color: darkslategrey;\n  text-decoration: underline white;\n  font-size: 1.2rem;\n}\n\n.categories:hover {\n  background-color: transparent;\n  border-bottom: 1px solid burlywood;\n  color: darkslategrey;\n  font-size: 1.3rem;\n}\n\n.item-description {\n  height: 50px;\n  text-overflow: hidden;\n}\n\n.section-products {\n  font-size: 1.3rem;\n}\n\n.suggestions {\n  background-color: rgb(228, 228, 228);\n  cursor: pointer;\n  text-decoration: none;\n  background-color: transparent;\n  color: darkslategrey;\n  font-size: 0.9rem;\n}\n\n.suggestions:hover {\n  text-decoration: none;\n  color: black;\n  font-size: 1rem;\n\n}",
          "",
        ]);
        const l = i;
      },
      775: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => l });
        var r = n(81),
          a = n.n(r),
          o = n(645),
          i = n.n(o)()(a());
        i.push([
          e.id,
          "/* \n    General Styles used on every website (Don't Repeat Yourself)\n*/\n\n.form-control {\n  display: block;\n}\n\n.single {\n  width: 800px;\n  height: auto;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n\n.boton {\n  width: 40px;\n  font-weight: bold;\n}\n\n.inputnavbar {\n  height: 38px;\n  margin-top: 8px;\n}\n\n.footer {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.paddingnavbar {\n  padding: 0;\n}\n\n.botonsrch {\n  height: 38px;\n  margin-top: 7px;\n}\n\na {\n  text-decoration: none;\n}\n\nul {\n  list-style: none;\n}\n\n.modal1 {\n  width: 300px;\n}\n",
          "",
        ]);
        const l = i;
      },
      546: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => l });
        var r = n(81),
          a = n.n(r),
          o = n(645),
          i = n.n(o)()(a());
        i.push([
          e.id,
          ".card-body {\n    font-family: 'Open Sans', sans-serif;\n}\n\n.button.is-primary {\n    background-color: var(--main-accent-color);\n}\n\n.button.is-primary:hover {\n    background-color: var(--title-color);\n}\n\n.title {\n    color: var(--main-accent-color);\n    font-family: 'Inconsolata', monospace;\n    font-size: 3em;\n}\n\n#inner-large-banner {\n    height: 40%;\n    width: 100%;\n    background-size: cover;\n    background-position: 50% 25%;\n}\n\n#wrapper {\n    width: 80%;\n    min-height: 70%;\n    /* margin-top: -100px; */\n    background-color: var(--main-top-background-color);\n    margin: -100px auto 0 auto;\n    padding: 30px;\n    box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);\n    border-radius: .25rem;\n}\n\n#product-catalog {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    gap: 20px;\n}\n\n.product-title {\n    font-size: 2em;\n}",
          "",
        ]);
        const l = i;
      },
      248: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => l });
        var r = n(81),
          a = n.n(r),
          o = n(645),
          i = n.n(o)()(a());
        i.push([
          e.id,
          '* {\n  margin: 0;\n  padding: 0;\n}\n\n.input-group {\n  margin: 0 auto;\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n/* Firefox */\ninput[type="number"] {\n  -moz-appearance: textfield;\n}\n\n#container {\n  display: flex;\n  flex-direction: row;\n}\n\n#container1 {\n  display: flex;\n  width: 40%;\n  background-color: blue;\n  border-radius: 0 10px 10px 0;\n}\n\n#container1 h1 {\n  padding: 50px;\n  display: flex;\n  justify-content: center;\n  align-self: center;\n  color: #ffffff;\n}\n\noption:first-of-type {\n  background-color: rgba(224, 213, 213, 0.295);\n}\n\n#imagen {\n  width: 100%;\n  height: 500px;\n  border: 1px solid black;\n}\n\n#form {\n  width: 500px;\n}\n\ntextarea {\n  resize: none;\n}\nHEAD button:hover {\n  opacity: 1;\n}\n.cancelbtn {\n  padding: 14px 20px;\n  background-color: #f44336;\n}\n\n.cancelbtn,\n.signupbtn {\n  float: left;\n  width: 50%;\n}\n\n.container {\n  padding: 16px;\n}\n\n.clearfix::after {\n  content: "";\n  clear: both;\n  display: table;\n}\n*/\n\n/* Change styles for cancel button and signup button on extra small screens \n@media screen and (max-width: 300px) {\n<<<<<<< HEAD\n\t.cancelbtn,\n\t.signupbtn {\n    width: 100%;\n\t}\n}*/\n\n.cancelbtn,\n.signupbtn {\n  width: 100%;\n}\n',
          "",
        ]);
        const l = i;
      },
      114: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => l });
        var r = n(81),
          a = n.n(r),
          o = n(645),
          i = n.n(o)()(a());
        i.push([
          e.id,
          "body {\n\n    background-color: #eee;\n}\n\n.nav-tabs .nav-item.show .nav-link,\n.nav-tabs .nav-link.active {\n    color: #495057;\n    font-weight: bold;\n    background-color: transparent;\n    border-color: transparent;\n    border: none;\n    border-bottom: 3px solid #000;\n}\n\n\n.nav-tabs>li>a {\n\n    text-transform: uppercase;\n    color: #000;\n    font-weight: 500;\n}\n\n.nav-tabs .nav-link:hover {\n    border-color: transparent;\n    border-bottom: 3px solid #000\n}\n\n.navbar {\n\n    border-bottom: 1px solid #00000012;\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n    background-color: #ffffff !important;\n}\n\n.navbar-brand {\n\n    font-size: 24px;\n    text-transform: uppercase;\n    font-family: 'Allerta Stencil', sans-serif;\n    font-weight: 500;\n}\n\n.nav-tabs {\n    border-bottom: none;\n}\n\n.card {\n\n    border: none;\n\n}\n\n.card-body {\n    flex: 1 1 auto;\n    padding: 10px;\n}\n\n.card-text {\n\n    font-size: 13px;\n}\n\n.guarantee {\n\n    color: #05882c;\n    margin-left: 4px;\n    font-weight: 700\n}\n\nhr {\n    margin: 0.2rem 0;\n    color: #bfbebe;\n}\n\n.buttons button {\n\n    text-transform: uppercase;\n    font-size: 12px;\n    border-radius: 2px;\n}",
          "",
        ]);
        const l = i;
      },
      689: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => l });
        var r = n(81),
          a = n.n(r),
          o = n(645),
          i = n.n(o)()(a());
        i.push([
          e.id,
          "@media (min-width: 450px) {\n    h1.heading {\n        font-size: 3.55em;\n    }\n}\n\n@media (min-width: 760px) {\n    h1.heading {\n        font-size: 3.05em;\n    }\n}\n\n@media (min-width: 900px) {\n    h1.heading {\n        font-size: 3.25em;\n        margin: 0 0 0.3em;\n    }\n}\n\n.card {\n    display: block;\n    margin-bottom: 20px;\n    line-height: 1.42857143;\n    background-color: #fff;\n    border-radius: 25px !important;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n    /* transition: box-shadow .25s; */\n}\n\n.card:hover {\n    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.img-card {\n    width: 100%;\n    height: 200px;\n    border-top-left-radius: 2px;\n    border-top-right-radius: 2px;\n    display: block;\n    overflow: hidden;\n}\n\n.img-card img {\n    width: 100%;\n    height: 200px;\n    object-fit: cover;\n}\n\n.card-content {\n    padding: 15px;\n    text-align: left;\n    font-family: 'Open Sans', sans-serif;\n    font-weight: 400;\n}\n\n.card-title {\n    margin-top: 0px;\n    font-weight: 700;\n    font-size: 1.65em;\n}\n\n.card-title a {\n    color: #000;\n    text-decoration: none !important;\n}\n\nbody {\n    font-family: 'Open Sans', sans-serif;\n    font-weight: 1.3rem;\n    color: #444444;\n    background-color: transparent;\n}\n\na,\na:hover {\n    text-decoration: none;\n    color: inherit;\n}\n\n.section-products {\n    padding: 80px 0 54px;\n}\n\n\n.section-products .header h3 {\n    font-size: 1.2rem;\n    color: #e48a03;\n    font-weight: 500;\n}\n\n.section-products .header h2 {\n    font-size: 1.3rem;\n    font-weight: 600;\n    color: #575656;\n}\n\n.containersegmento {\n    font-size: calc(1.475rem+ 2.7vw);\n    font-weight: 300;\n    line-height: 1.2;\n}",
          "",
        ]);
        const l = i;
      },
      86: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => l });
        var r = n(81),
          a = n.n(r),
          o = n(645),
          i = n.n(o)()(a());
        i.push([
          e.id,
          ".signup__button--register {\n    background: #424242;\n    border-radius: 0.3rem;\n    color: #fff;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #1c1c1c;\n    font-weight: bold;\n    letter-spacing: 1px;\n\n}\n\n.signup__button--register:hover {\n    background-color: white;\n    border-radius: 0.3rem;\n    color: black;\n    border: 1px solid black;\n    font-weight: bold;\n    letter-spacing: 1px;\n}\n\n\n\n.signup__button--login {\n    background: #f27b28;\n    border-radius: 0.3rem;\n    color: #fff;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #1c1c1c;\n    font-weight: bold;\n    letter-spacing: 1px;\n}\n\n\n.signup__button--login:hover {\n    background-color: white;\n    border-radius: 0.3rem;\n    color: black;\n    border: 1px solid black;\n    font-weight: bold;\n    letter-spacing: 1px;\n}",
          "",
        ]);
        const l = i;
      },
      347: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => l });
        var r = n(81),
          a = n.n(r),
          o = n(645),
          i = n.n(o)()(a());
        i.push([
          e.id,
          "body {\n  background-color: white;\n}\n\n.card {\n  border: none;\n  overflow: hidden;\n}\n\n.thumbnail_images ul {\n  list-style: none;\n  justify-content: center;\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n}\n\n.thumbnail_images ul li {\n  margin: 5px;\n  padding: 10px;\n  border: 2px solid #eee;\n  cursor: pointer;\n  transition: all 0.5s;\n}\n\n.thumbnail_images ul li:hover {\n  border: 2px solid #000;\n}\n\n.main_image {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid #eee;\n  height: 400px;\n  width: 100%;\n  overflow: hidden;\n}\n\n.content p {\n  font-size: 12px;\n}\n\n.ratings span {\n  font-size: 14px;\n  margin-left: 12px;\n}\n\n.colors ul {\n  list-style: none;\n  display: flex;\n  padding-left: 0px;\n}\n\n.colors ul li {\n  height: 20px;\n  width: 20px;\n  display: flex;\n  border-radius: 50%;\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n.right-side {\n  position: relative;\n}\n\n.search-option .inputs {\n  opacity: 0;\n  transition: all 0.5s ease;\n  transition-delay: 0.5s;\n  position: relative;\n}\n\n.search-option .inputs input {\n  position: absolute;\n  top: 200px;\n  left: 30px;\n  padding-left: 20px;\n  background-color: transparent;\n  width: 300px;\n  border: none;\n  color: #fff;\n  border-bottom: 1px solid #eee;\n  transition: all 0.5s;\n  z-index: 10;\n}\n\n.search-option .inputs input:focus {\n  box-shadow: none;\n  outline: none;\n  z-index: 10;\n}\n\n.search-option:hover {\n  border-radius: 1px;\n  width: 100%;\n  left: 0px;\n}\n\n.search-option:hover .inputs {\n  opacity: 1;\n}\n\n.search-option:hover .first-search {\n  left: 27px;\n  top: 25px;\n  font-size: 15px;\n}\n\n.search-option:hover .inputs input {\n  top: 20px;\n}\n\n.search-option .share {\n  position: absolute;\n  right: 20px;\n  top: 22px;\n}\n\n.buttons .btn {\n  height: 50px;\n  width: 150px;\n  border-radius: 6px !important;\n}\n",
          "",
        ]);
        const l = i;
      },
      749: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => l });
        var r = n(81),
          a = n.n(r),
          o = n(645),
          i = n.n(o)()(a());
        i.push([
          e.id,
          "body {\n  background: #f5f5f5;\n}\n\n.ui-w-80 {\n  width: 80px !important;\n  height: auto;\n}\n\n.btn-default {\n  border-color: rgba(24, 28, 33, 0.1);\n  background: rgba(0, 0, 0, 0);\n  color: #4e5155;\n}\n\nlabel.btn {\n  margin-bottom: 0;\n}\n\n.btn-outline-primary {\n  border-color: #26b4ff;\n  background: transparent;\n  color: #26b4ff;\n}\n\n.btn {\n  cursor: pointer;\n}\n\n.text-light {\n  color: #babbbc !important;\n}\n\n.btn-facebook {\n  border-color: rgba(0, 0, 0, 0);\n  background: #3b5998;\n  color: #fff;\n}\n\n.btn-instagram {\n  border-color: rgba(0, 0, 0, 0);\n  background: #000;\n  color: #fff;\n}\n\n.card {\n  background-clip: padding-box;\n  box-shadow: none;\n}\n\n.card:hover {\n  box-shadow: none;\n}\n\n.row-bordered {\n  overflow: hidden;\n}\n\n.account-settings-fileinput {\n  position: absolute;\n  visibility: hidden;\n  width: 1px;\n  height: 1px;\n  opacity: 0;\n}\n.account-settings-links .list-group-item.active {\n  font-weight: bold !important;\n}\nhtml:not(.dark-style) .account-settings-links .list-group-item.active {\n  background: transparent !important;\n}\n.account-settings-multiselect ~ .select2-container {\n  width: 100% !important;\n}\n.light-style .account-settings-links .list-group-item {\n  padding: 0.85rem 1.5rem;\n  border-color: rgba(24, 28, 33, 0.03) !important;\n}\n.light-style .account-settings-links .list-group-item.active {\n  color: #4e5155 !important;\n}\n.material-style .account-settings-links .list-group-item {\n  padding: 0.85rem 1.5rem;\n  border-color: rgba(24, 28, 33, 0.03) !important;\n}\n.material-style .account-settings-links .list-group-item.active {\n  color: #4e5155 !important;\n}\n.dark-style .account-settings-links .list-group-item {\n  padding: 0.85rem 1.5rem;\n  border-color: rgba(255, 255, 255, 0.03) !important;\n}\n.dark-style .account-settings-links .list-group-item.active {\n  color: #fff !important;\n}\n.light-style .account-settings-links .list-group-item.active {\n  color: #4e5155 !important;\n}\n.light-style .account-settings-links .list-group-item {\n  padding: 0.85rem 1.5rem;\n  border-color: rgba(24, 28, 33, 0.03) !important;\n}\n",
          "",
        ]);
        const l = i;
      },
      645: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (n += e(t)),
                  r && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, r, a, o) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (r)
                for (var l = 0; l < this.length; l++) {
                  var s = this[l][0];
                  null != s && (i[s] = !0);
                }
              for (var c = 0; c < e.length; c++) {
                var u = [].concat(e[c]);
                (r && i[u[0]]) ||
                  (void 0 !== o &&
                    (void 0 === u[5] ||
                      (u[1] = "@layer"
                        .concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {")
                        .concat(u[1], "}")),
                    (u[5] = o)),
                  n &&
                    (u[2]
                      ? ((u[1] = "@media "
                          .concat(u[2], " {")
                          .concat(u[1], "}")),
                        (u[2] = n))
                      : (u[2] = n)),
                  a &&
                    (u[4]
                      ? ((u[1] = "@supports ("
                          .concat(u[4], ") {")
                          .concat(u[1], "}")),
                        (u[4] = a))
                      : (u[4] = "".concat(a))),
                  t.push(u));
              }
            }),
            t
          );
        };
      },
      81: (e) => {
        "use strict";
        e.exports = function (e) {
          return e[1];
        };
      },
      143: (e) => {
        "use strict";
        e.exports = function (e, t, n, r, a, o, i, l) {
          if (!e) {
            var s;
            if (void 0 === t)
              s = new Error(
                "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
              );
            else {
              var c = [n, r, a, o, i, l],
                u = 0;
              (s = new Error(
                t.replace(/%s/g, function () {
                  return c[u++];
                })
              )).name = "Invariant Violation";
            }
            throw ((s.framesToPop = 1), s);
          }
        };
      },
      418: (e) => {
        "use strict";
        var t = Object.getOwnPropertySymbols,
          n = Object.prototype.hasOwnProperty,
          r = Object.prototype.propertyIsEnumerable;
        function a(e) {
          if (null == e)
            throw new TypeError(
              "Object.assign cannot be called with null or undefined"
            );
          return Object(e);
        }
        e.exports = (function () {
          try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
              return !1;
            for (var t = {}, n = 0; n < 10; n++)
              t["_" + String.fromCharCode(n)] = n;
            if (
              "0123456789" !==
              Object.getOwnPropertyNames(t)
                .map(function (e) {
                  return t[e];
                })
                .join("")
            )
              return !1;
            var r = {};
            return (
              "abcdefghijklmnopqrst".split("").forEach(function (e) {
                r[e] = e;
              }),
              "abcdefghijklmnopqrst" ===
                Object.keys(Object.assign({}, r)).join("")
            );
          } catch (e) {
            return !1;
          }
        })()
          ? Object.assign
          : function (e, o) {
              for (var i, l, s = a(e), c = 1; c < arguments.length; c++) {
                for (var u in (i = Object(arguments[c])))
                  n.call(i, u) && (s[u] = i[u]);
                if (t) {
                  l = t(i);
                  for (var d = 0; d < l.length; d++)
                    r.call(i, l[d]) && (s[l[d]] = i[l[d]]);
                }
              }
              return s;
            };
      },
      703: (e, t, n) => {
        "use strict";
        var r = n(414);
        function a() {}
        function o() {}
        (o.resetWarningCache = a),
          (e.exports = function () {
            function e(e, t, n, a, o, i) {
              if (i !== r) {
                var l = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((l.name = "Invariant Violation"), l);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: o,
              resetWarningCache: a,
            };
            return (n.PropTypes = n), n;
          });
      },
      697: (e, t, n) => {
        e.exports = n(703)();
      },
      414: (e) => {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      448: (e, t, n) => {
        "use strict";
        var r = n(294),
          a = n(418),
          o = n(840);
        function i(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        if (!r) throw Error(i(227));
        function l(e, t, n, r, a, o, i, l, s) {
          var c = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, c);
          } catch (e) {
            this.onError(e);
          }
        }
        var s = !1,
          c = null,
          u = !1,
          d = null,
          f = {
            onError: function (e) {
              (s = !0), (c = e);
            },
          };
        function p(e, t, n, r, a, o, i, u, d) {
          (s = !1), (c = null), l.apply(f, arguments);
        }
        var m = null,
          h = null,
          g = null;
        function b(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = g(n)),
            (function (e, t, n, r, a, o, l, f, m) {
              if ((p.apply(this, arguments), s)) {
                if (!s) throw Error(i(198));
                var h = c;
                (s = !1), (c = null), u || ((u = !0), (d = h));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        var v = null,
          y = {};
        function E() {
          if (v)
            for (var e in y) {
              var t = y[e],
                n = v.indexOf(e);
              if (!(-1 < n)) throw Error(i(96, e));
              if (!x[n]) {
                if (!t.extractEvents) throw Error(i(97, e));
                for (var r in ((x[n] = t), (n = t.eventTypes))) {
                  var a = void 0,
                    o = n[r],
                    l = t,
                    s = r;
                  if (_.hasOwnProperty(s)) throw Error(i(99, s));
                  _[s] = o;
                  var c = o.phasedRegistrationNames;
                  if (c) {
                    for (a in c) c.hasOwnProperty(a) && w(c[a], l, s);
                    a = !0;
                  } else
                    o.registrationName
                      ? (w(o.registrationName, l, s), (a = !0))
                      : (a = !1);
                  if (!a) throw Error(i(98, r, e));
                }
              }
            }
        }
        function w(e, t, n) {
          if (k[e]) throw Error(i(100, e));
          (k[e] = t), (N[e] = t.eventTypes[n].dependencies);
        }
        var x = [],
          _ = {},
          k = {},
          N = {};
        function C(e) {
          var t,
            n = !1;
          for (t in e)
            if (e.hasOwnProperty(t)) {
              var r = e[t];
              if (!y.hasOwnProperty(t) || y[t] !== r) {
                if (y[t]) throw Error(i(102, t));
                (y[t] = r), (n = !0);
              }
            }
          n && E();
        }
        var T = !(
            "undefined" == typeof window ||
            void 0 === window.document ||
            void 0 === window.document.createElement
          ),
          S = null,
          O = null,
          P = null;
        function A(e) {
          if ((e = h(e))) {
            if ("function" != typeof S) throw Error(i(280));
            var t = e.stateNode;
            t && ((t = m(t)), S(e.stateNode, e.type, t));
          }
        }
        function j(e) {
          O ? (P ? P.push(e) : (P = [e])) : (O = e);
        }
        function I() {
          if (O) {
            var e = O,
              t = P;
            if (((P = O = null), A(e), t))
              for (e = 0; e < t.length; e++) A(t[e]);
          }
        }
        function L(e, t) {
          return e(t);
        }
        function D(e, t, n, r, a) {
          return e(t, n, r, a);
        }
        function R() {}
        var M = L,
          F = !1,
          z = !1;
        function $() {
          (null === O && null === P) || (R(), I());
        }
        function B(e, t, n) {
          if (z) return e(t, n);
          z = !0;
          try {
            return M(e, t, n);
          } finally {
            (z = !1), $();
          }
        }
        var U =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          H = Object.prototype.hasOwnProperty,
          W = {},
          V = {};
        function q(e, t, n, r, a, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o);
        }
        var Q = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            Q[e] = new q(e, 0, !1, e, null, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            Q[t] = new q(t, 1, !1, e[1], null, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              Q[e] = new q(e, 2, !1, e.toLowerCase(), null, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            Q[e] = new q(e, 2, !1, e, null, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              Q[e] = new q(e, 3, !1, e.toLowerCase(), null, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            Q[e] = new q(e, 3, !0, e, null, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            Q[e] = new q(e, 4, !1, e, null, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            Q[e] = new q(e, 6, !1, e, null, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            Q[e] = new q(e, 5, !1, e.toLowerCase(), null, !1);
          });
        var K = /[\-:]([a-z])/g;
        function Z(e) {
          return e[1].toUpperCase();
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(K, Z);
            Q[t] = new q(t, 1, !1, e, null, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(K, Z);
              Q[t] = new q(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(K, Z);
            Q[t] = new q(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            Q[e] = new q(e, 1, !1, e.toLowerCase(), null, !1);
          }),
          (Q.xlinkHref = new q(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            Q[e] = new q(e, 1, !1, e.toLowerCase(), null, !0);
          });
        var G = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function Y(e, t, n, r) {
          var a = Q.hasOwnProperty(t) ? Q[t] : null;
          (null !== a
            ? 0 === a.type
            : !r &&
              2 < t.length &&
              ("o" === t[0] || "O" === t[0]) &&
              ("n" === t[1] || "N" === t[1])) ||
            ((function (e, t, n, r) {
              if (
                null == t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!H.call(V, e) ||
                    (!H.call(W, e) &&
                      (U.test(e) ? (V[e] = !0) : ((W[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        G.hasOwnProperty("ReactCurrentDispatcher") ||
          (G.ReactCurrentDispatcher = { current: null }),
          G.hasOwnProperty("ReactCurrentBatchConfig") ||
            (G.ReactCurrentBatchConfig = { suspense: null });
        var X = /^(.*)[\\\/]/,
          J = "function" == typeof Symbol && Symbol.for,
          ee = J ? Symbol.for("react.element") : 60103,
          te = J ? Symbol.for("react.portal") : 60106,
          ne = J ? Symbol.for("react.fragment") : 60107,
          re = J ? Symbol.for("react.strict_mode") : 60108,
          ae = J ? Symbol.for("react.profiler") : 60114,
          oe = J ? Symbol.for("react.provider") : 60109,
          ie = J ? Symbol.for("react.context") : 60110,
          le = J ? Symbol.for("react.concurrent_mode") : 60111,
          se = J ? Symbol.for("react.forward_ref") : 60112,
          ce = J ? Symbol.for("react.suspense") : 60113,
          ue = J ? Symbol.for("react.suspense_list") : 60120,
          de = J ? Symbol.for("react.memo") : 60115,
          fe = J ? Symbol.for("react.lazy") : 60116,
          pe = J ? Symbol.for("react.block") : 60121,
          me = "function" == typeof Symbol && Symbol.iterator;
        function he(e) {
          return null === e || "object" != typeof e
            ? null
            : "function" == typeof (e = (me && e[me]) || e["@@iterator"])
            ? e
            : null;
        }
        function ge(e) {
          if (null == e) return null;
          if ("function" == typeof e) return e.displayName || e.name || null;
          if ("string" == typeof e) return e;
          switch (e) {
            case ne:
              return "Fragment";
            case te:
              return "Portal";
            case ae:
              return "Profiler";
            case re:
              return "StrictMode";
            case ce:
              return "Suspense";
            case ue:
              return "SuspenseList";
          }
          if ("object" == typeof e)
            switch (e.$$typeof) {
              case ie:
                return "Context.Consumer";
              case oe:
                return "Context.Provider";
              case se:
                var t = e.render;
                return (
                  (t = t.displayName || t.name || ""),
                  e.displayName ||
                    ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
                );
              case de:
                return ge(e.type);
              case pe:
                return ge(e.render);
              case fe:
                if ((e = 1 === e._status ? e._result : null)) return ge(e);
            }
          return null;
        }
        function be(e) {
          var t = "";
          do {
            e: switch (e.tag) {
              case 3:
              case 4:
              case 6:
              case 7:
              case 10:
              case 9:
                var n = "";
                break e;
              default:
                var r = e._debugOwner,
                  a = e._debugSource,
                  o = ge(e.type);
                (n = null),
                  r && (n = ge(r.type)),
                  (r = o),
                  (o = ""),
                  a
                    ? (o =
                        " (at " +
                        a.fileName.replace(X, "") +
                        ":" +
                        a.lineNumber +
                        ")")
                    : n && (o = " (created by " + n + ")"),
                  (n = "\n    in " + (r || "Unknown") + o);
            }
            (t += n), (e = e.return);
          } while (e);
          return t;
        }
        function ve(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
              return e;
            default:
              return "";
          }
        }
        function ye(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Ee(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = ye(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                void 0 !== n &&
                "function" == typeof n.get &&
                "function" == typeof n.set
              ) {
                var a = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function we(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = ye(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function xe(e, t) {
          var n = t.checked;
          return a({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function _e(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = ve(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function ke(e, t) {
          null != (t = t.checked) && Y(e, "checked", t, !1);
        }
        function Ne(e, t) {
          ke(e, t);
          var n = ve(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? Te(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              Te(e, t.type, ve(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Ce(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function Te(e, t, n) {
          ("number" === t && e.ownerDocument.activeElement === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        function Se(e, t) {
          return (
            (e = a({ children: void 0 }, t)),
            (t = (function (e) {
              var t = "";
              return (
                r.Children.forEach(e, function (e) {
                  null != e && (t += e);
                }),
                t
              );
            })(t.children)) && (e.children = t),
            e
          );
        }
        function Oe(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + ve(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function Pe(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
          return a({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function Ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(i(92));
              if (Array.isArray(n)) {
                if (!(1 >= n.length)) throw Error(i(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: ve(n) };
        }
        function je(e, t) {
          var n = ve(t.value),
            r = ve(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function Ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function Le(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function De(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? Le(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var Re,
          Me,
          Fe =
            ((Me = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (Re = Re || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = Re.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return Me(e, t);
                  });
                }
              : Me);
        function ze(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        function $e(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var Be = {
            animationend: $e("Animation", "AnimationEnd"),
            animationiteration: $e("Animation", "AnimationIteration"),
            animationstart: $e("Animation", "AnimationStart"),
            transitionend: $e("Transition", "TransitionEnd"),
          },
          Ue = {},
          He = {};
        function We(e) {
          if (Ue[e]) return Ue[e];
          if (!Be[e]) return e;
          var t,
            n = Be[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in He) return (Ue[e] = n[t]);
          return e;
        }
        T &&
          ((He = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete Be.animationend.animation,
            delete Be.animationiteration.animation,
            delete Be.animationstart.animation),
          "TransitionEvent" in window || delete Be.transitionend.transition);
        var Ve = We("animationend"),
          qe = We("animationiteration"),
          Qe = We("animationstart"),
          Ke = We("transitionend"),
          Ze =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Ge = new ("function" == typeof WeakMap ? WeakMap : Map)();
        function Ye(e) {
          var t = Ge.get(e);
          return void 0 === t && ((t = new Map()), Ge.set(e, t)), t;
        }
        function Xe(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 != (1026 & (t = e).effectTag) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Je(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function et(e) {
          if (Xe(e) !== e) throw Error(i(188));
        }
        function tt(e) {
          if (
            ((e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Xe(e))) throw Error(i(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var o = a.alternate;
                if (null === o) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === o.child) {
                  for (o = a.child; o; ) {
                    if (o === n) return et(a), e;
                    if (o === r) return et(a), t;
                    o = o.sibling;
                  }
                  throw Error(i(188));
                }
                if (n.return !== r.return) (n = a), (r = o);
                else {
                  for (var l = !1, s = a.child; s; ) {
                    if (s === n) {
                      (l = !0), (n = a), (r = o);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = a), (n = o);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) {
                    for (s = o.child; s; ) {
                      if (s === n) {
                        (l = !0), (n = o), (r = a);
                        break;
                      }
                      if (s === r) {
                        (l = !0), (r = o), (n = a);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!l) throw Error(i(189));
                  }
                }
                if (n.alternate !== r) throw Error(i(190));
              }
              if (3 !== n.tag) throw Error(i(188));
              return n.stateNode.current === n ? e : t;
            })(e)),
            !e)
          )
            return null;
          for (var t = e; ; ) {
            if (5 === t.tag || 6 === t.tag) return t;
            if (t.child) (t.child.return = t), (t = t.child);
            else {
              if (t === e) break;
              for (; !t.sibling; ) {
                if (!t.return || t.return === e) return null;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
          }
          return null;
        }
        function nt(e, t) {
          if (null == t) throw Error(i(30));
          return null == e
            ? t
            : Array.isArray(e)
            ? Array.isArray(t)
              ? (e.push.apply(e, t), e)
              : (e.push(t), e)
            : Array.isArray(t)
            ? [e].concat(t)
            : [e, t];
        }
        function rt(e, t, n) {
          Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e);
        }
        var at = null;
        function ot(e) {
          if (e) {
            var t = e._dispatchListeners,
              n = e._dispatchInstances;
            if (Array.isArray(t))
              for (var r = 0; r < t.length && !e.isPropagationStopped(); r++)
                b(e, t[r], n[r]);
            else t && b(e, t, n);
            (e._dispatchListeners = null),
              (e._dispatchInstances = null),
              e.isPersistent() || e.constructor.release(e);
          }
        }
        function it(e) {
          if ((null !== e && (at = nt(at, e)), (e = at), (at = null), e)) {
            if ((rt(e, ot), at)) throw Error(i(95));
            if (u) throw ((e = d), (u = !1), (d = null), e);
          }
        }
        function lt(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        function st(e) {
          if (!T) return !1;
          var t = (e = "on" + e) in document;
          return (
            t ||
              ((t = document.createElement("div")).setAttribute(e, "return;"),
              (t = "function" == typeof t[e])),
            t
          );
        }
        var ct = [];
        function ut(e) {
          (e.topLevelType = null),
            (e.nativeEvent = null),
            (e.targetInst = null),
            (e.ancestors.length = 0),
            10 > ct.length && ct.push(e);
        }
        function dt(e, t, n, r) {
          if (ct.length) {
            var a = ct.pop();
            return (
              (a.topLevelType = e),
              (a.eventSystemFlags = r),
              (a.nativeEvent = t),
              (a.targetInst = n),
              a
            );
          }
          return {
            topLevelType: e,
            eventSystemFlags: r,
            nativeEvent: t,
            targetInst: n,
            ancestors: [],
          };
        }
        function ft(e) {
          var t = e.targetInst,
            n = t;
          do {
            if (!n) {
              e.ancestors.push(n);
              break;
            }
            var r = n;
            if (3 === r.tag) r = r.stateNode.containerInfo;
            else {
              for (; r.return; ) r = r.return;
              r = 3 !== r.tag ? null : r.stateNode.containerInfo;
            }
            if (!r) break;
            (5 !== (t = n.tag) && 6 !== t) || e.ancestors.push(n), (n = On(r));
          } while (n);
          for (n = 0; n < e.ancestors.length; n++) {
            t = e.ancestors[n];
            var a = lt(e.nativeEvent);
            r = e.topLevelType;
            var o = e.nativeEvent,
              i = e.eventSystemFlags;
            0 === n && (i |= 64);
            for (var l = null, s = 0; s < x.length; s++) {
              var c = x[s];
              c && (c = c.extractEvents(r, t, o, a, i)) && (l = nt(l, c));
            }
            it(l);
          }
        }
        function pt(e, t, n) {
          if (!n.has(e)) {
            switch (e) {
              case "scroll":
                Qt(t, "scroll", !0);
                break;
              case "focus":
              case "blur":
                Qt(t, "focus", !0),
                  Qt(t, "blur", !0),
                  n.set("blur", null),
                  n.set("focus", null);
                break;
              case "cancel":
              case "close":
                st(e) && Qt(t, e, !0);
                break;
              case "invalid":
              case "submit":
              case "reset":
                break;
              default:
                -1 === Ze.indexOf(e) && qt(e, t);
            }
            n.set(e, null);
          }
        }
        var mt,
          ht,
          gt,
          bt = !1,
          vt = [],
          yt = null,
          Et = null,
          wt = null,
          xt = new Map(),
          _t = new Map(),
          kt = [],
          Nt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(
              " "
            ),
          Ct =
            "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(
              " "
            );
        function Tt(e, t, n, r, a) {
          return {
            blockedOn: e,
            topLevelType: t,
            eventSystemFlags: 32 | n,
            nativeEvent: a,
            container: r,
          };
        }
        function St(e, t) {
          switch (e) {
            case "focus":
            case "blur":
              yt = null;
              break;
            case "dragenter":
            case "dragleave":
              Et = null;
              break;
            case "mouseover":
            case "mouseout":
              wt = null;
              break;
            case "pointerover":
            case "pointerout":
              xt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              _t.delete(t.pointerId);
          }
        }
        function Ot(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = Tt(t, n, r, a, o)),
              null !== t && null !== (t = Pn(t)) && ht(t),
              e)
            : ((e.eventSystemFlags |= r), e);
        }
        function Pt(e) {
          var t = On(e.target);
          if (null !== t) {
            var n = Xe(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Je(n)))
                  return (
                    (e.blockedOn = t),
                    void o.unstable_runWithPriority(e.priority, function () {
                      gt(n);
                    })
                  );
              } else if (3 === t && n.stateNode.hydrate)
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function At(e) {
          if (null !== e.blockedOn) return !1;
          var t = Yt(
            e.topLevelType,
            e.eventSystemFlags,
            e.container,
            e.nativeEvent
          );
          if (null !== t) {
            var n = Pn(t);
            return null !== n && ht(n), (e.blockedOn = t), !1;
          }
          return !0;
        }
        function jt(e, t, n) {
          At(e) && n.delete(t);
        }
        function It() {
          for (bt = !1; 0 < vt.length; ) {
            var e = vt[0];
            if (null !== e.blockedOn) {
              null !== (e = Pn(e.blockedOn)) && mt(e);
              break;
            }
            var t = Yt(
              e.topLevelType,
              e.eventSystemFlags,
              e.container,
              e.nativeEvent
            );
            null !== t ? (e.blockedOn = t) : vt.shift();
          }
          null !== yt && At(yt) && (yt = null),
            null !== Et && At(Et) && (Et = null),
            null !== wt && At(wt) && (wt = null),
            xt.forEach(jt),
            _t.forEach(jt);
        }
        function Lt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            bt ||
              ((bt = !0),
              o.unstable_scheduleCallback(o.unstable_NormalPriority, It)));
        }
        function Dt(e) {
          function t(t) {
            return Lt(t, e);
          }
          if (0 < vt.length) {
            Lt(vt[0], e);
            for (var n = 1; n < vt.length; n++) {
              var r = vt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== yt && Lt(yt, e),
              null !== Et && Lt(Et, e),
              null !== wt && Lt(wt, e),
              xt.forEach(t),
              _t.forEach(t),
              n = 0;
            n < kt.length;
            n++
          )
            (r = kt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < kt.length && null === (n = kt[0]).blockedOn; )
            Pt(n), null === n.blockedOn && kt.shift();
        }
        var Rt = {},
          Mt = new Map(),
          Ft = new Map(),
          zt = [
            "abort",
            "abort",
            Ve,
            "animationEnd",
            qe,
            "animationIteration",
            Qe,
            "animationStart",
            "canplay",
            "canPlay",
            "canplaythrough",
            "canPlayThrough",
            "durationchange",
            "durationChange",
            "emptied",
            "emptied",
            "encrypted",
            "encrypted",
            "ended",
            "ended",
            "error",
            "error",
            "gotpointercapture",
            "gotPointerCapture",
            "load",
            "load",
            "loadeddata",
            "loadedData",
            "loadedmetadata",
            "loadedMetadata",
            "loadstart",
            "loadStart",
            "lostpointercapture",
            "lostPointerCapture",
            "playing",
            "playing",
            "progress",
            "progress",
            "seeking",
            "seeking",
            "stalled",
            "stalled",
            "suspend",
            "suspend",
            "timeupdate",
            "timeUpdate",
            Ke,
            "transitionEnd",
            "waiting",
            "waiting",
          ];
        function $t(e, t) {
          for (var n = 0; n < e.length; n += 2) {
            var r = e[n],
              a = e[n + 1],
              o = "on" + (a[0].toUpperCase() + a.slice(1));
            (o = {
              phasedRegistrationNames: { bubbled: o, captured: o + "Capture" },
              dependencies: [r],
              eventPriority: t,
            }),
              Ft.set(r, t),
              Mt.set(r, o),
              (Rt[a] = o);
          }
        }
        $t(
          "blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
            " "
          ),
          0
        ),
          $t(
            "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
              " "
            ),
            1
          ),
          $t(zt, 2);
        for (
          var Bt =
              "change selectionchange textInput compositionstart compositionend compositionupdate".split(
                " "
              ),
            Ut = 0;
          Ut < Bt.length;
          Ut++
        )
          Ft.set(Bt[Ut], 0);
        var Ht = o.unstable_UserBlockingPriority,
          Wt = o.unstable_runWithPriority,
          Vt = !0;
        function qt(e, t) {
          Qt(t, e, !1);
        }
        function Qt(e, t, n) {
          var r = Ft.get(t);
          switch (void 0 === r ? 2 : r) {
            case 0:
              r = Kt.bind(null, t, 1, e);
              break;
            case 1:
              r = Zt.bind(null, t, 1, e);
              break;
            default:
              r = Gt.bind(null, t, 1, e);
          }
          n ? e.addEventListener(t, r, !0) : e.addEventListener(t, r, !1);
        }
        function Kt(e, t, n, r) {
          F || R();
          var a = Gt,
            o = F;
          F = !0;
          try {
            D(a, e, t, n, r);
          } finally {
            (F = o) || $();
          }
        }
        function Zt(e, t, n, r) {
          Wt(Ht, Gt.bind(null, e, t, n, r));
        }
        function Gt(e, t, n, r) {
          if (Vt)
            if (0 < vt.length && -1 < Nt.indexOf(e))
              (e = Tt(null, e, t, n, r)), vt.push(e);
            else {
              var a = Yt(e, t, n, r);
              if (null === a) St(e, r);
              else if (-1 < Nt.indexOf(e)) (e = Tt(a, e, t, n, r)), vt.push(e);
              else if (
                !(function (e, t, n, r, a) {
                  switch (t) {
                    case "focus":
                      return (yt = Ot(yt, e, t, n, r, a)), !0;
                    case "dragenter":
                      return (Et = Ot(Et, e, t, n, r, a)), !0;
                    case "mouseover":
                      return (wt = Ot(wt, e, t, n, r, a)), !0;
                    case "pointerover":
                      var o = a.pointerId;
                      return (
                        xt.set(o, Ot(xt.get(o) || null, e, t, n, r, a)), !0
                      );
                    case "gotpointercapture":
                      return (
                        (o = a.pointerId),
                        _t.set(o, Ot(_t.get(o) || null, e, t, n, r, a)),
                        !0
                      );
                  }
                  return !1;
                })(a, e, t, n, r)
              ) {
                St(e, r), (e = dt(e, r, null, t));
                try {
                  B(ft, e);
                } finally {
                  ut(e);
                }
              }
            }
        }
        function Yt(e, t, n, r) {
          if (null !== (n = On((n = lt(r))))) {
            var a = Xe(n);
            if (null === a) n = null;
            else {
              var o = a.tag;
              if (13 === o) {
                if (null !== (n = Je(a))) return n;
                n = null;
              } else if (3 === o) {
                if (a.stateNode.hydrate)
                  return 3 === a.tag ? a.stateNode.containerInfo : null;
                n = null;
              } else a !== n && (n = null);
            }
          }
          e = dt(e, r, n, t);
          try {
            B(ft, e);
          } finally {
            ut(e);
          }
          return null;
        }
        var Xt = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          Jt = ["Webkit", "ms", "Moz", "O"];
        function en(e, t, n) {
          return null == t || "boolean" == typeof t || "" === t
            ? ""
            : n ||
              "number" != typeof t ||
              0 === t ||
              (Xt.hasOwnProperty(e) && Xt[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function tn(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = en(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(Xt).forEach(function (e) {
          Jt.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (Xt[t] = Xt[e]);
          });
        });
        var nn = a(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function rn(e, t) {
          if (t) {
            if (
              nn[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(i(137, e, ""));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(i(60));
              if (
                "object" != typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(i(61));
            }
            if (null != t.style && "object" != typeof t.style)
              throw Error(i(62, ""));
          }
        }
        function an(e, t) {
          if (-1 === e.indexOf("-")) return "string" == typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var on = "http://www.w3.org/1999/xhtml";
        function ln(e, t) {
          var n = Ye(
            (e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument)
          );
          t = N[t];
          for (var r = 0; r < t.length; r++) pt(t[r], e, n);
        }
        function sn() {}
        function cn(e) {
          if (
            void 0 ===
            (e = e || ("undefined" != typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function un(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function dn(e, t) {
          var n,
            r = un(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = un(r);
          }
        }
        function fn(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fn(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function pn() {
          for (var e = window, t = cn(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" == typeof t.contentWindow.location.href;
            } catch (e) {
              n = !1;
            }
            if (!n) break;
            t = cn((e = t.contentWindow).document);
          }
          return t;
        }
        function mn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        var hn = "$?",
          gn = "$!",
          bn = null,
          vn = null;
        function yn(e, t) {
          switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              return !!t.autoFocus;
          }
          return !1;
        }
        function En(e, t) {
          return (
            "textarea" === e ||
            "option" === e ||
            "noscript" === e ||
            "string" == typeof t.children ||
            "number" == typeof t.children ||
            ("object" == typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var wn = "function" == typeof setTimeout ? setTimeout : void 0,
          xn = "function" == typeof clearTimeout ? clearTimeout : void 0;
        function _n(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
          }
          return e;
        }
        function kn(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || n === gn || n === hn) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var Nn = Math.random().toString(36).slice(2),
          Cn = "__reactInternalInstance$" + Nn,
          Tn = "__reactEventHandlers$" + Nn,
          Sn = "__reactContainere$" + Nn;
        function On(e) {
          var t = e[Cn];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[Sn] || n[Cn])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = kn(e); null !== e; ) {
                  if ((n = e[Cn])) return n;
                  e = kn(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function Pn(e) {
          return !(e = e[Cn] || e[Sn]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function An(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(i(33));
        }
        function jn(e) {
          return e[Tn] || null;
        }
        function In(e) {
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Ln(e, t) {
          var n = e.stateNode;
          if (!n) return null;
          var r = m(n);
          if (!r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" != typeof n) throw Error(i(231, t, typeof n));
          return n;
        }
        function Dn(e, t, n) {
          (t = Ln(e, n.dispatchConfig.phasedRegistrationNames[t])) &&
            ((n._dispatchListeners = nt(n._dispatchListeners, t)),
            (n._dispatchInstances = nt(n._dispatchInstances, e)));
        }
        function Rn(e) {
          if (e && e.dispatchConfig.phasedRegistrationNames) {
            for (var t = e._targetInst, n = []; t; ) n.push(t), (t = In(t));
            for (t = n.length; 0 < t--; ) Dn(n[t], "captured", e);
            for (t = 0; t < n.length; t++) Dn(n[t], "bubbled", e);
          }
        }
        function Mn(e, t, n) {
          e &&
            n &&
            n.dispatchConfig.registrationName &&
            (t = Ln(e, n.dispatchConfig.registrationName)) &&
            ((n._dispatchListeners = nt(n._dispatchListeners, t)),
            (n._dispatchInstances = nt(n._dispatchInstances, e)));
        }
        function Fn(e) {
          e && e.dispatchConfig.registrationName && Mn(e._targetInst, null, e);
        }
        function zn(e) {
          rt(e, Rn);
        }
        var $n = null,
          Bn = null,
          Un = null;
        function Hn() {
          if (Un) return Un;
          var e,
            t,
            n = Bn,
            r = n.length,
            a = "value" in $n ? $n.value : $n.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
          return (Un = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function Wn() {
          return !0;
        }
        function Vn() {
          return !1;
        }
        function qn(e, t, n, r) {
          for (var a in ((this.dispatchConfig = e),
          (this._targetInst = t),
          (this.nativeEvent = n),
          (e = this.constructor.Interface)))
            e.hasOwnProperty(a) &&
              ((t = e[a])
                ? (this[a] = t(n))
                : "target" === a
                ? (this.target = r)
                : (this[a] = n[a]));
          return (
            (this.isDefaultPrevented = (
              null != n.defaultPrevented
                ? n.defaultPrevented
                : !1 === n.returnValue
            )
              ? Wn
              : Vn),
            (this.isPropagationStopped = Vn),
            this
          );
        }
        function Qn(e, t, n, r) {
          if (this.eventPool.length) {
            var a = this.eventPool.pop();
            return this.call(a, e, t, n, r), a;
          }
          return new this(e, t, n, r);
        }
        function Kn(e) {
          if (!(e instanceof this)) throw Error(i(279));
          e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e);
        }
        function Zn(e) {
          (e.eventPool = []), (e.getPooled = Qn), (e.release = Kn);
        }
        a(qn.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : "unknown" != typeof e.returnValue && (e.returnValue = !1),
              (this.isDefaultPrevented = Wn));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
              (this.isPropagationStopped = Wn));
          },
          persist: function () {
            this.isPersistent = Wn;
          },
          isPersistent: Vn,
          destructor: function () {
            var e,
              t = this.constructor.Interface;
            for (e in t) this[e] = null;
            (this.nativeEvent = this._targetInst = this.dispatchConfig = null),
              (this.isPropagationStopped = this.isDefaultPrevented = Vn),
              (this._dispatchInstances = this._dispatchListeners = null);
          },
        }),
          (qn.Interface = {
            type: null,
            target: null,
            currentTarget: function () {
              return null;
            },
            eventPhase: null,
            bubbles: null,
            cancelable: null,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: null,
            isTrusted: null,
          }),
          (qn.extend = function (e) {
            function t() {}
            function n() {
              return r.apply(this, arguments);
            }
            var r = this;
            t.prototype = r.prototype;
            var o = new t();
            return (
              a(o, n.prototype),
              (n.prototype = o),
              (n.prototype.constructor = n),
              (n.Interface = a({}, r.Interface, e)),
              (n.extend = r.extend),
              Zn(n),
              n
            );
          }),
          Zn(qn);
        var Gn = qn.extend({ data: null }),
          Yn = qn.extend({ data: null }),
          Xn = [9, 13, 27, 32],
          Jn = T && "CompositionEvent" in window,
          er = null;
        T && "documentMode" in document && (er = document.documentMode);
        var tr = T && "TextEvent" in window && !er,
          nr = T && (!Jn || (er && 8 < er && 11 >= er)),
          rr = String.fromCharCode(32),
          ar = {
            beforeInput: {
              phasedRegistrationNames: {
                bubbled: "onBeforeInput",
                captured: "onBeforeInputCapture",
              },
              dependencies: [
                "compositionend",
                "keypress",
                "textInput",
                "paste",
              ],
            },
            compositionEnd: {
              phasedRegistrationNames: {
                bubbled: "onCompositionEnd",
                captured: "onCompositionEndCapture",
              },
              dependencies:
                "blur compositionend keydown keypress keyup mousedown".split(
                  " "
                ),
            },
            compositionStart: {
              phasedRegistrationNames: {
                bubbled: "onCompositionStart",
                captured: "onCompositionStartCapture",
              },
              dependencies:
                "blur compositionstart keydown keypress keyup mousedown".split(
                  " "
                ),
            },
            compositionUpdate: {
              phasedRegistrationNames: {
                bubbled: "onCompositionUpdate",
                captured: "onCompositionUpdateCapture",
              },
              dependencies:
                "blur compositionupdate keydown keypress keyup mousedown".split(
                  " "
                ),
            },
          },
          or = !1;
        function ir(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Xn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "blur":
              return !0;
            default:
              return !1;
          }
        }
        function lr(e) {
          return "object" == typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var sr = !1,
          cr = {
            eventTypes: ar,
            extractEvents: function (e, t, n, r) {
              var a;
              if (Jn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var o = ar.compositionStart;
                      break e;
                    case "compositionend":
                      o = ar.compositionEnd;
                      break e;
                    case "compositionupdate":
                      o = ar.compositionUpdate;
                      break e;
                  }
                  o = void 0;
                }
              else
                sr
                  ? ir(e, n) && (o = ar.compositionEnd)
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (o = ar.compositionStart);
              return (
                o
                  ? (nr &&
                      "ko" !== n.locale &&
                      (sr || o !== ar.compositionStart
                        ? o === ar.compositionEnd && sr && (a = Hn())
                        : ((Bn =
                            "value" in ($n = r) ? $n.value : $n.textContent),
                          (sr = !0))),
                    (o = Gn.getPooled(o, t, n, r)),
                    (a || null !== (a = lr(n))) && (o.data = a),
                    zn(o),
                    (a = o))
                  : (a = null),
                (e = tr
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return lr(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((or = !0), rr);
                        case "textInput":
                          return (e = t.data) === rr && or ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (sr)
                        return "compositionend" === e || (!Jn && ir(e, t))
                          ? ((e = Hn()), (Un = Bn = $n = null), (sr = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return nr && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n))
                  ? (((t = Yn.getPooled(ar.beforeInput, t, n, r)).data = e),
                    zn(t))
                  : (t = null),
                null === a ? t : null === t ? a : [a, t]
              );
            },
          },
          ur = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
          };
        function dr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!ur[e.type] : "textarea" === t;
        }
        var fr = {
          change: {
            phasedRegistrationNames: {
              bubbled: "onChange",
              captured: "onChangeCapture",
            },
            dependencies:
              "blur change click focus input keydown keyup selectionchange".split(
                " "
              ),
          },
        };
        function pr(e, t, n) {
          return (
            ((e = qn.getPooled(fr.change, e, t, n)).type = "change"),
            j(n),
            zn(e),
            e
          );
        }
        var mr = null,
          hr = null;
        function gr(e) {
          it(e);
        }
        function br(e) {
          if (we(An(e))) return e;
        }
        function vr(e, t) {
          if ("change" === e) return t;
        }
        var yr = !1;
        function Er() {
          mr && (mr.detachEvent("onpropertychange", wr), (hr = mr = null));
        }
        function wr(e) {
          if ("value" === e.propertyName && br(hr))
            if (((e = pr(hr, e, lt(e))), F)) it(e);
            else {
              F = !0;
              try {
                L(gr, e);
              } finally {
                (F = !1), $();
              }
            }
        }
        function xr(e, t, n) {
          "focus" === e
            ? (Er(), (hr = n), (mr = t).attachEvent("onpropertychange", wr))
            : "blur" === e && Er();
        }
        function _r(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return br(hr);
        }
        function kr(e, t) {
          if ("click" === e) return br(t);
        }
        function Nr(e, t) {
          if ("input" === e || "change" === e) return br(t);
        }
        T &&
          (yr =
            st("input") &&
            (!document.documentMode || 9 < document.documentMode));
        var Cr = {
            eventTypes: fr,
            _isInputEventSupported: yr,
            extractEvents: function (e, t, n, r) {
              var a = t ? An(t) : window,
                o = a.nodeName && a.nodeName.toLowerCase();
              if ("select" === o || ("input" === o && "file" === a.type))
                var i = vr;
              else if (dr(a))
                if (yr) i = Nr;
                else {
                  i = _r;
                  var l = xr;
                }
              else
                (o = a.nodeName) &&
                  "input" === o.toLowerCase() &&
                  ("checkbox" === a.type || "radio" === a.type) &&
                  (i = kr);
              if (i && (i = i(e, t))) return pr(i, n, r);
              l && l(e, a, t),
                "blur" === e &&
                  (e = a._wrapperState) &&
                  e.controlled &&
                  "number" === a.type &&
                  Te(a, "number", a.value);
            },
          },
          Tr = qn.extend({ view: null, detail: null }),
          Sr = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function Or(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sr[e]) && !!t[e];
        }
        function Pr() {
          return Or;
        }
        var Ar = 0,
          jr = 0,
          Ir = !1,
          Lr = !1,
          Dr = Tr.extend({
            screenX: null,
            screenY: null,
            clientX: null,
            clientY: null,
            pageX: null,
            pageY: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            getModifierState: Pr,
            button: null,
            buttons: null,
            relatedTarget: function (e) {
              return (
                e.relatedTarget ||
                (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
              );
            },
            movementX: function (e) {
              if ("movementX" in e) return e.movementX;
              var t = Ar;
              return (
                (Ar = e.screenX),
                Ir
                  ? "mousemove" === e.type
                    ? e.screenX - t
                    : 0
                  : ((Ir = !0), 0)
              );
            },
            movementY: function (e) {
              if ("movementY" in e) return e.movementY;
              var t = jr;
              return (
                (jr = e.screenY),
                Lr
                  ? "mousemove" === e.type
                    ? e.screenY - t
                    : 0
                  : ((Lr = !0), 0)
              );
            },
          }),
          Rr = Dr.extend({
            pointerId: null,
            width: null,
            height: null,
            pressure: null,
            tangentialPressure: null,
            tiltX: null,
            tiltY: null,
            twist: null,
            pointerType: null,
            isPrimary: null,
          }),
          Mr = {
            mouseEnter: {
              registrationName: "onMouseEnter",
              dependencies: ["mouseout", "mouseover"],
            },
            mouseLeave: {
              registrationName: "onMouseLeave",
              dependencies: ["mouseout", "mouseover"],
            },
            pointerEnter: {
              registrationName: "onPointerEnter",
              dependencies: ["pointerout", "pointerover"],
            },
            pointerLeave: {
              registrationName: "onPointerLeave",
              dependencies: ["pointerout", "pointerover"],
            },
          },
          Fr = {
            eventTypes: Mr,
            extractEvents: function (e, t, n, r, a) {
              var o = "mouseover" === e || "pointerover" === e,
                i = "mouseout" === e || "pointerout" === e;
              if (
                (o && 0 == (32 & a) && (n.relatedTarget || n.fromElement)) ||
                (!i && !o)
              )
                return null;
              if (
                ((o =
                  r.window === r
                    ? r
                    : (o = r.ownerDocument)
                    ? o.defaultView || o.parentWindow
                    : window),
                i
                  ? ((i = t),
                    null !==
                      (t = (t = n.relatedTarget || n.toElement)
                        ? On(t)
                        : null) &&
                      (t !== Xe(t) || (5 !== t.tag && 6 !== t.tag)) &&
                      (t = null))
                  : (i = null),
                i === t)
              )
                return null;
              if ("mouseout" === e || "mouseover" === e)
                var l = Dr,
                  s = Mr.mouseLeave,
                  c = Mr.mouseEnter,
                  u = "mouse";
              else
                ("pointerout" !== e && "pointerover" !== e) ||
                  ((l = Rr),
                  (s = Mr.pointerLeave),
                  (c = Mr.pointerEnter),
                  (u = "pointer"));
              if (
                ((e = null == i ? o : An(i)),
                (o = null == t ? o : An(t)),
                ((s = l.getPooled(s, i, n, r)).type = u + "leave"),
                (s.target = e),
                (s.relatedTarget = o),
                ((n = l.getPooled(c, t, n, r)).type = u + "enter"),
                (n.target = o),
                (n.relatedTarget = e),
                (u = t),
                (r = i) && u)
              )
                e: {
                  for (c = u, i = 0, e = l = r; e; e = In(e)) i++;
                  for (e = 0, t = c; t; t = In(t)) e++;
                  for (; 0 < i - e; ) (l = In(l)), i--;
                  for (; 0 < e - i; ) (c = In(c)), e--;
                  for (; i--; ) {
                    if (l === c || l === c.alternate) break e;
                    (l = In(l)), (c = In(c));
                  }
                  l = null;
                }
              else l = null;
              for (
                c = l, l = [];
                r && r !== c && (null === (i = r.alternate) || i !== c);

              )
                l.push(r), (r = In(r));
              for (
                r = [];
                u && u !== c && (null === (i = u.alternate) || i !== c);

              )
                r.push(u), (u = In(u));
              for (u = 0; u < l.length; u++) Mn(l[u], "bubbled", s);
              for (u = r.length; 0 < u--; ) Mn(r[u], "captured", n);
              return 0 == (64 & a) ? [s] : [s, n];
            },
          },
          zr =
            "function" == typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e == 1 / t)) ||
                    (e != e && t != t)
                  );
                },
          $r = Object.prototype.hasOwnProperty;
        function Br(e, t) {
          if (zr(e, t)) return !0;
          if (
            "object" != typeof e ||
            null === e ||
            "object" != typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++)
            if (!$r.call(t, n[r]) || !zr(e[n[r]], t[n[r]])) return !1;
          return !0;
        }
        var Ur = T && "documentMode" in document && 11 >= document.documentMode,
          Hr = {
            select: {
              phasedRegistrationNames: {
                bubbled: "onSelect",
                captured: "onSelectCapture",
              },
              dependencies:
                "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(
                  " "
                ),
            },
          },
          Wr = null,
          Vr = null,
          qr = null,
          Qr = !1;
        function Kr(e, t) {
          var n =
            t.window === t
              ? t.document
              : 9 === t.nodeType
              ? t
              : t.ownerDocument;
          return Qr || null == Wr || Wr !== cn(n)
            ? null
            : ((n =
                "selectionStart" in (n = Wr) && mn(n)
                  ? { start: n.selectionStart, end: n.selectionEnd }
                  : {
                      anchorNode: (n = (
                        (n.ownerDocument && n.ownerDocument.defaultView) ||
                        window
                      ).getSelection()).anchorNode,
                      anchorOffset: n.anchorOffset,
                      focusNode: n.focusNode,
                      focusOffset: n.focusOffset,
                    }),
              qr && Br(qr, n)
                ? null
                : ((qr = n),
                  ((e = qn.getPooled(Hr.select, Vr, e, t)).type = "select"),
                  (e.target = Wr),
                  zn(e),
                  e));
        }
        var Zr = {
            eventTypes: Hr,
            extractEvents: function (e, t, n, r, a, o) {
              if (
                !(o = !(a =
                  o ||
                  (r.window === r
                    ? r.document
                    : 9 === r.nodeType
                    ? r
                    : r.ownerDocument)))
              ) {
                e: {
                  (a = Ye(a)), (o = N.onSelect);
                  for (var i = 0; i < o.length; i++)
                    if (!a.has(o[i])) {
                      a = !1;
                      break e;
                    }
                  a = !0;
                }
                o = !a;
              }
              if (o) return null;
              switch (((a = t ? An(t) : window), e)) {
                case "focus":
                  (dr(a) || "true" === a.contentEditable) &&
                    ((Wr = a), (Vr = t), (qr = null));
                  break;
                case "blur":
                  qr = Vr = Wr = null;
                  break;
                case "mousedown":
                  Qr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  return (Qr = !1), Kr(n, r);
                case "selectionchange":
                  if (Ur) break;
                case "keydown":
                case "keyup":
                  return Kr(n, r);
              }
              return null;
            },
          },
          Gr = qn.extend({
            animationName: null,
            elapsedTime: null,
            pseudoElement: null,
          }),
          Yr = qn.extend({
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          Xr = Tr.extend({ relatedTarget: null });
        function Jr(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        var ea = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          ta = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          na = Tr.extend({
            key: function (e) {
              if (e.key) {
                var t = ea[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = Jr(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? ta[e.keyCode] || "Unidentified"
                : "";
            },
            location: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            repeat: null,
            locale: null,
            getModifierState: Pr,
            charCode: function (e) {
              return "keypress" === e.type ? Jr(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? Jr(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          ra = Dr.extend({ dataTransfer: null }),
          aa = Tr.extend({
            touches: null,
            targetTouches: null,
            changedTouches: null,
            altKey: null,
            metaKey: null,
            ctrlKey: null,
            shiftKey: null,
            getModifierState: Pr,
          }),
          oa = qn.extend({
            propertyName: null,
            elapsedTime: null,
            pseudoElement: null,
          }),
          ia = Dr.extend({
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: null,
            deltaMode: null,
          }),
          la = {
            eventTypes: Rt,
            extractEvents: function (e, t, n, r) {
              var a = Mt.get(e);
              if (!a) return null;
              switch (e) {
                case "keypress":
                  if (0 === Jr(n)) return null;
                case "keydown":
                case "keyup":
                  e = na;
                  break;
                case "blur":
                case "focus":
                  e = Xr;
                  break;
                case "click":
                  if (2 === n.button) return null;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  e = Dr;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  e = ra;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  e = aa;
                  break;
                case Ve:
                case qe:
                case Qe:
                  e = Gr;
                  break;
                case Ke:
                  e = oa;
                  break;
                case "scroll":
                  e = Tr;
                  break;
                case "wheel":
                  e = ia;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  e = Yr;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  e = Rr;
                  break;
                default:
                  e = qn;
              }
              return zn((t = e.getPooled(a, t, n, r))), t;
            },
          };
        if (v) throw Error(i(101));
        (v = Array.prototype.slice.call(
          "ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(
            " "
          )
        )),
          E(),
          (m = jn),
          (h = Pn),
          (g = An),
          C({
            SimpleEventPlugin: la,
            EnterLeaveEventPlugin: Fr,
            ChangeEventPlugin: Cr,
            SelectEventPlugin: Zr,
            BeforeInputEventPlugin: cr,
          });
        var sa = [],
          ca = -1;
        function ua(e) {
          0 > ca || ((e.current = sa[ca]), (sa[ca] = null), ca--);
        }
        function da(e, t) {
          ca++, (sa[ca] = e.current), (e.current = t);
        }
        var fa = {},
          pa = { current: fa },
          ma = { current: !1 },
          ha = fa;
        function ga(e, t) {
          var n = e.type.contextTypes;
          if (!n) return fa;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in n) o[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function ba(e) {
          return null != e.childContextTypes;
        }
        function va() {
          ua(ma), ua(pa);
        }
        function ya(e, t, n) {
          if (pa.current !== fa) throw Error(i(168));
          da(pa, t), da(ma, n);
        }
        function Ea(e, t, n) {
          var r = e.stateNode;
          if (
            ((e = t.childContextTypes), "function" != typeof r.getChildContext)
          )
            return n;
          for (var o in (r = r.getChildContext()))
            if (!(o in e)) throw Error(i(108, ge(t) || "Unknown", o));
          return a({}, n, {}, r);
        }
        function wa(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              fa),
            (ha = pa.current),
            da(pa, e),
            da(ma, ma.current),
            !0
          );
        }
        function xa(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(i(169));
          n
            ? ((e = Ea(e, t, ha)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              ua(ma),
              ua(pa),
              da(pa, e))
            : ua(ma),
            da(ma, n);
        }
        var _a = o.unstable_runWithPriority,
          ka = o.unstable_scheduleCallback,
          Na = o.unstable_cancelCallback,
          Ca = o.unstable_requestPaint,
          Ta = o.unstable_now,
          Sa = o.unstable_getCurrentPriorityLevel,
          Oa = o.unstable_ImmediatePriority,
          Pa = o.unstable_UserBlockingPriority,
          Aa = o.unstable_NormalPriority,
          ja = o.unstable_LowPriority,
          Ia = o.unstable_IdlePriority,
          La = {},
          Da = o.unstable_shouldYield,
          Ra = void 0 !== Ca ? Ca : function () {},
          Ma = null,
          Fa = null,
          za = !1,
          $a = Ta(),
          Ba =
            1e4 > $a
              ? Ta
              : function () {
                  return Ta() - $a;
                };
        function Ua() {
          switch (Sa()) {
            case Oa:
              return 99;
            case Pa:
              return 98;
            case Aa:
              return 97;
            case ja:
              return 96;
            case Ia:
              return 95;
            default:
              throw Error(i(332));
          }
        }
        function Ha(e) {
          switch (e) {
            case 99:
              return Oa;
            case 98:
              return Pa;
            case 97:
              return Aa;
            case 96:
              return ja;
            case 95:
              return Ia;
            default:
              throw Error(i(332));
          }
        }
        function Wa(e, t) {
          return (e = Ha(e)), _a(e, t);
        }
        function Va(e, t, n) {
          return (e = Ha(e)), ka(e, t, n);
        }
        function qa(e) {
          return null === Ma ? ((Ma = [e]), (Fa = ka(Oa, Ka))) : Ma.push(e), La;
        }
        function Qa() {
          if (null !== Fa) {
            var e = Fa;
            (Fa = null), Na(e);
          }
          Ka();
        }
        function Ka() {
          if (!za && null !== Ma) {
            za = !0;
            var e = 0;
            try {
              var t = Ma;
              Wa(99, function () {
                for (; e < t.length; e++) {
                  var n = t[e];
                  do {
                    n = n(!0);
                  } while (null !== n);
                }
              }),
                (Ma = null);
            } catch (t) {
              throw (null !== Ma && (Ma = Ma.slice(e + 1)), ka(Oa, Qa), t);
            } finally {
              za = !1;
            }
          }
        }
        function Za(e, t, n) {
          return (
            1073741821 - (1 + (((1073741821 - e + t / 10) / (n /= 10)) | 0)) * n
          );
        }
        function Ga(e, t) {
          if (e && e.defaultProps)
            for (var n in ((t = a({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
          return t;
        }
        var Ya = { current: null },
          Xa = null,
          Ja = null,
          eo = null;
        function to() {
          eo = Ja = Xa = null;
        }
        function no(e) {
          var t = Ya.current;
          ua(Ya), (e.type._context._currentValue = t);
        }
        function ro(e, t) {
          for (; null !== e; ) {
            var n = e.alternate;
            if (e.childExpirationTime < t)
              (e.childExpirationTime = t),
                null !== n &&
                  n.childExpirationTime < t &&
                  (n.childExpirationTime = t);
            else {
              if (!(null !== n && n.childExpirationTime < t)) break;
              n.childExpirationTime = t;
            }
            e = e.return;
          }
        }
        function ao(e, t) {
          (Xa = e),
            (eo = Ja = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (e.expirationTime >= t && (ji = !0), (e.firstContext = null));
        }
        function oo(e, t) {
          if (eo !== e && !1 !== t && 0 !== t)
            if (
              (("number" == typeof t && 1073741823 !== t) ||
                ((eo = e), (t = 1073741823)),
              (t = { context: e, observedBits: t, next: null }),
              null === Ja)
            ) {
              if (null === Xa) throw Error(i(308));
              (Ja = t),
                (Xa.dependencies = {
                  expirationTime: 0,
                  firstContext: t,
                  responders: null,
                });
            } else Ja = Ja.next = t;
          return e._currentValue;
        }
        var io = !1;
        function lo(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            baseQueue: null,
            shared: { pending: null },
            effects: null,
          };
        }
        function so(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                baseQueue: e.baseQueue,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function co(e, t) {
          return ((e = {
            expirationTime: e,
            suspenseConfig: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          }).next = e);
        }
        function uo(e, t) {
          if (null !== (e = e.updateQueue)) {
            var n = (e = e.shared).pending;
            null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
              (e.pending = t);
          }
        }
        function fo(e, t) {
          var n = e.alternate;
          null !== n && so(n, e),
            null === (n = (e = e.updateQueue).baseQueue)
              ? ((e.baseQueue = t.next = t), (t.next = t))
              : ((t.next = n.next), (n.next = t));
        }
        function po(e, t, n, r) {
          var o = e.updateQueue;
          io = !1;
          var i = o.baseQueue,
            l = o.shared.pending;
          if (null !== l) {
            if (null !== i) {
              var s = i.next;
              (i.next = l.next), (l.next = s);
            }
            (i = l),
              (o.shared.pending = null),
              null !== (s = e.alternate) &&
                null !== (s = s.updateQueue) &&
                (s.baseQueue = l);
          }
          if (null !== i) {
            s = i.next;
            var c = o.baseState,
              u = 0,
              d = null,
              f = null,
              p = null;
            if (null !== s)
              for (var m = s; ; ) {
                if ((l = m.expirationTime) < r) {
                  var h = {
                    expirationTime: m.expirationTime,
                    suspenseConfig: m.suspenseConfig,
                    tag: m.tag,
                    payload: m.payload,
                    callback: m.callback,
                    next: null,
                  };
                  null === p ? ((f = p = h), (d = c)) : (p = p.next = h),
                    l > u && (u = l);
                } else {
                  null !== p &&
                    (p = p.next =
                      {
                        expirationTime: 1073741823,
                        suspenseConfig: m.suspenseConfig,
                        tag: m.tag,
                        payload: m.payload,
                        callback: m.callback,
                        next: null,
                      }),
                    cs(l, m.suspenseConfig);
                  e: {
                    var g = e,
                      b = m;
                    switch (((l = t), (h = n), b.tag)) {
                      case 1:
                        if ("function" == typeof (g = b.payload)) {
                          c = g.call(h, c, l);
                          break e;
                        }
                        c = g;
                        break e;
                      case 3:
                        g.effectTag = (-4097 & g.effectTag) | 64;
                      case 0:
                        if (
                          null ==
                          (l =
                            "function" == typeof (g = b.payload)
                              ? g.call(h, c, l)
                              : g)
                        )
                          break e;
                        c = a({}, c, l);
                        break e;
                      case 2:
                        io = !0;
                    }
                  }
                  null !== m.callback &&
                    ((e.effectTag |= 32),
                    null === (l = o.effects) ? (o.effects = [m]) : l.push(m));
                }
                if (null === (m = m.next) || m === s) {
                  if (null === (l = o.shared.pending)) break;
                  (m = i.next = l.next),
                    (l.next = s),
                    (o.baseQueue = i = l),
                    (o.shared.pending = null);
                }
              }
            null === p ? (d = c) : (p.next = f),
              (o.baseState = d),
              (o.baseQueue = p),
              us(u),
              (e.expirationTime = u),
              (e.memoizedState = c);
          }
        }
        function mo(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (
                  ((r.callback = null),
                  (r = a),
                  (a = n),
                  "function" != typeof r)
                )
                  throw Error(i(191, r));
                r.call(a);
              }
            }
        }
        var ho = G.ReactCurrentBatchConfig,
          go = new r.Component().refs;
        function bo(e, t, n, r) {
          (n = null == (n = n(r, (t = e.memoizedState))) ? t : a({}, t, n)),
            (e.memoizedState = n),
            0 === e.expirationTime && (e.updateQueue.baseState = n);
        }
        var vo = {
          isMounted: function (e) {
            return !!(e = e._reactInternalFiber) && Xe(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternalFiber;
            var r = Gl(),
              a = ho.suspense;
            ((a = co((r = Yl(r, e, a)), a)).payload = t),
              null != n && (a.callback = n),
              uo(e, a),
              Xl(e, r);
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternalFiber;
            var r = Gl(),
              a = ho.suspense;
            ((a = co((r = Yl(r, e, a)), a)).tag = 1),
              (a.payload = t),
              null != n && (a.callback = n),
              uo(e, a),
              Xl(e, r);
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternalFiber;
            var n = Gl(),
              r = ho.suspense;
            ((r = co((n = Yl(n, e, r)), r)).tag = 2),
              null != t && (r.callback = t),
              uo(e, r),
              Xl(e, n);
          },
        };
        function yo(e, t, n, r, a, o, i) {
          return "function" == typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, i)
            : !(
                t.prototype &&
                t.prototype.isPureReactComponent &&
                Br(n, r) &&
                Br(a, o)
              );
        }
        function Eo(e, t, n) {
          var r = !1,
            a = fa,
            o = t.contextType;
          return (
            "object" == typeof o && null !== o
              ? (o = oo(o))
              : ((a = ba(t) ? ha : pa.current),
                (o = (r = null != (r = t.contextTypes)) ? ga(e, a) : fa)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = vo),
            (e.stateNode = t),
            (t._reactInternalFiber = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function wo(e, t, n, r) {
          (e = t.state),
            "function" == typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" == typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && vo.enqueueReplaceState(t, t.state, null);
        }
        function xo(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = go), lo(e);
          var o = t.contextType;
          "object" == typeof o && null !== o
            ? (a.context = oo(o))
            : ((o = ba(t) ? ha : pa.current), (a.context = ga(e, o))),
            po(e, n, a, r),
            (a.state = e.memoizedState),
            "function" == typeof (o = t.getDerivedStateFromProps) &&
              (bo(e, t, o, n), (a.state = e.memoizedState)),
            "function" == typeof t.getDerivedStateFromProps ||
              "function" == typeof a.getSnapshotBeforeUpdate ||
              ("function" != typeof a.UNSAFE_componentWillMount &&
                "function" != typeof a.componentWillMount) ||
              ((t = a.state),
              "function" == typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" == typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && vo.enqueueReplaceState(a, a.state, null),
              po(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" == typeof a.componentDidMount && (e.effectTag |= 4);
        }
        var _o = Array.isArray;
        function ko(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" != typeof e &&
            "object" != typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(i(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(i(147, e));
              var a = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" == typeof t.ref &&
                t.ref._stringRef === a
                ? t.ref
                : ((t = function (e) {
                    var t = r.refs;
                    t === go && (t = r.refs = {}),
                      null === e ? delete t[a] : (t[a] = e);
                  }),
                  (t._stringRef = a),
                  t);
            }
            if ("string" != typeof e) throw Error(i(284));
            if (!n._owner) throw Error(i(290, e));
          }
          return e;
        }
        function No(e, t) {
          if ("textarea" !== e.type)
            throw Error(
              i(
                31,
                "[object Object]" === Object.prototype.toString.call(t)
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : t,
                ""
              )
            );
        }
        function Co(e) {
          function t(t, n) {
            if (e) {
              var r = t.lastEffect;
              null !== r
                ? ((r.nextEffect = n), (t.lastEffect = n))
                : (t.firstEffect = t.lastEffect = n),
                (n.nextEffect = null),
                (n.effectTag = 8);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Ps(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.effectTag = 2), n)
                    : r
                  : ((t.effectTag = 2), n)
                : n
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.effectTag = 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Is(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function c(e, t, n, r) {
            return null !== t && t.elementType === n.type
              ? (((r = a(t, n.props)).ref = ko(e, t, n)), (r.return = e), r)
              : (((r = As(n.type, n.key, n.props, null, e.mode, r)).ref = ko(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function u(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Ls(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = js(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if ("string" == typeof t || "number" == typeof t)
              return ((t = Is("" + t, e.mode, n)).return = e), t;
            if ("object" == typeof t && null !== t) {
              switch (t.$$typeof) {
                case ee:
                  return (
                    ((n = As(t.type, t.key, t.props, null, e.mode, n)).ref = ko(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case te:
                  return ((t = Ls(t, e.mode, n)).return = e), t;
              }
              if (_o(t) || he(t))
                return ((t = js(t, e.mode, n, null)).return = e), t;
              No(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if ("string" == typeof n || "number" == typeof n)
              return null !== a ? null : s(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
              switch (n.$$typeof) {
                case ee:
                  return n.key === a
                    ? n.type === ne
                      ? d(e, t, n.props.children, r, a)
                      : c(e, t, n, r)
                    : null;
                case te:
                  return n.key === a ? u(e, t, n, r) : null;
              }
              if (_o(n) || he(n))
                return null !== a ? null : d(e, t, n, r, null);
              No(e, n);
            }
            return null;
          }
          function m(e, t, n, r, a) {
            if ("string" == typeof r || "number" == typeof r)
              return s(t, (e = e.get(n) || null), "" + r, a);
            if ("object" == typeof r && null !== r) {
              switch (r.$$typeof) {
                case ee:
                  return (
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r.type === ne
                      ? d(t, e, r.props.children, a, r.key)
                      : c(t, e, r, a)
                  );
                case te:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
              }
              if (_o(r) || he(r))
                return d(t, (e = e.get(n) || null), r, a, null);
              No(t, r);
            }
            return null;
          }
          function h(a, i, l, s) {
            for (
              var c = null, u = null, d = i, h = (i = 0), g = null;
              null !== d && h < l.length;
              h++
            ) {
              d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
              var b = p(a, d, l[h], s);
              if (null === b) {
                null === d && (d = g);
                break;
              }
              e && d && null === b.alternate && t(a, d),
                (i = o(b, i, h)),
                null === u ? (c = b) : (u.sibling = b),
                (u = b),
                (d = g);
            }
            if (h === l.length) return n(a, d), c;
            if (null === d) {
              for (; h < l.length; h++)
                null !== (d = f(a, l[h], s)) &&
                  ((i = o(d, i, h)),
                  null === u ? (c = d) : (u.sibling = d),
                  (u = d));
              return c;
            }
            for (d = r(a, d); h < l.length; h++)
              null !== (g = m(d, a, h, l[h], s)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? h : g.key),
                (i = o(g, i, h)),
                null === u ? (c = g) : (u.sibling = g),
                (u = g));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              c
            );
          }
          function g(a, l, s, c) {
            var u = he(s);
            if ("function" != typeof u) throw Error(i(150));
            if (null == (s = u.call(s))) throw Error(i(151));
            for (
              var d = (u = null), h = l, g = (l = 0), b = null, v = s.next();
              null !== h && !v.done;
              g++, v = s.next()
            ) {
              h.index > g ? ((b = h), (h = null)) : (b = h.sibling);
              var y = p(a, h, v.value, c);
              if (null === y) {
                null === h && (h = b);
                break;
              }
              e && h && null === y.alternate && t(a, h),
                (l = o(y, l, g)),
                null === d ? (u = y) : (d.sibling = y),
                (d = y),
                (h = b);
            }
            if (v.done) return n(a, h), u;
            if (null === h) {
              for (; !v.done; g++, v = s.next())
                null !== (v = f(a, v.value, c)) &&
                  ((l = o(v, l, g)),
                  null === d ? (u = v) : (d.sibling = v),
                  (d = v));
              return u;
            }
            for (h = r(a, h); !v.done; g++, v = s.next())
              null !== (v = m(h, a, g, v.value, c)) &&
                (e &&
                  null !== v.alternate &&
                  h.delete(null === v.key ? g : v.key),
                (l = o(v, l, g)),
                null === d ? (u = v) : (d.sibling = v),
                (d = v));
            return (
              e &&
                h.forEach(function (e) {
                  return t(a, e);
                }),
              u
            );
          }
          return function (e, r, o, s) {
            var c =
              "object" == typeof o &&
              null !== o &&
              o.type === ne &&
              null === o.key;
            c && (o = o.props.children);
            var u = "object" == typeof o && null !== o;
            if (u)
              switch (o.$$typeof) {
                case ee:
                  e: {
                    for (u = o.key, c = r; null !== c; ) {
                      if (c.key === u) {
                        if (7 === c.tag) {
                          if (o.type === ne) {
                            n(e, c.sibling),
                              ((r = a(c, o.props.children)).return = e),
                              (e = r);
                            break e;
                          }
                        } else if (c.elementType === o.type) {
                          n(e, c.sibling),
                            ((r = a(c, o.props)).ref = ko(e, c, o)),
                            (r.return = e),
                            (e = r);
                          break e;
                        }
                        n(e, c);
                        break;
                      }
                      t(e, c), (c = c.sibling);
                    }
                    o.type === ne
                      ? (((r = js(o.props.children, e.mode, s, o.key)).return =
                          e),
                        (e = r))
                      : (((s = As(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          e.mode,
                          s
                        )).ref = ko(e, r, o)),
                        (s.return = e),
                        (e = s));
                  }
                  return l(e);
                case te:
                  e: {
                    for (c = o.key; null !== r; ) {
                      if (r.key === c) {
                        if (
                          4 === r.tag &&
                          r.stateNode.containerInfo === o.containerInfo &&
                          r.stateNode.implementation === o.implementation
                        ) {
                          n(e, r.sibling),
                            ((r = a(r, o.children || [])).return = e),
                            (e = r);
                          break e;
                        }
                        n(e, r);
                        break;
                      }
                      t(e, r), (r = r.sibling);
                    }
                    ((r = Ls(o, e.mode, s)).return = e), (e = r);
                  }
                  return l(e);
              }
            if ("string" == typeof o || "number" == typeof o)
              return (
                (o = "" + o),
                null !== r && 6 === r.tag
                  ? (n(e, r.sibling), ((r = a(r, o)).return = e), (e = r))
                  : (n(e, r), ((r = Is(o, e.mode, s)).return = e), (e = r)),
                l(e)
              );
            if (_o(o)) return h(e, r, o, s);
            if (he(o)) return g(e, r, o, s);
            if ((u && No(e, o), void 0 === o && !c))
              switch (e.tag) {
                case 1:
                case 0:
                  throw (
                    ((e = e.type),
                    Error(i(152, e.displayName || e.name || "Component")))
                  );
              }
            return n(e, r);
          };
        }
        var To = Co(!0),
          So = Co(!1),
          Oo = {},
          Po = { current: Oo },
          Ao = { current: Oo },
          jo = { current: Oo };
        function Io(e) {
          if (e === Oo) throw Error(i(174));
          return e;
        }
        function Lo(e, t) {
          switch ((da(jo, t), da(Ao, e), da(Po, Oo), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : De(null, "");
              break;
            default:
              t = De(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          ua(Po), da(Po, t);
        }
        function Do() {
          ua(Po), ua(Ao), ua(jo);
        }
        function Ro(e) {
          Io(jo.current);
          var t = Io(Po.current),
            n = De(t, e.type);
          t !== n && (da(Ao, e), da(Po, n));
        }
        function Mo(e) {
          Ao.current === e && (ua(Po), ua(Ao));
        }
        var Fo = { current: 0 };
        function zo(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) || n.data === hn || n.data === gn)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 != (64 & t.effectTag)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        function $o(e, t) {
          return { responder: e, props: t };
        }
        var Bo = G.ReactCurrentDispatcher,
          Uo = G.ReactCurrentBatchConfig,
          Ho = 0,
          Wo = null,
          Vo = null,
          qo = null,
          Qo = !1;
        function Ko() {
          throw Error(i(321));
        }
        function Zo(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!zr(e[n], t[n])) return !1;
          return !0;
        }
        function Go(e, t, n, r, a, o) {
          if (
            ((Ho = o),
            (Wo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.expirationTime = 0),
            (Bo.current = null === e || null === e.memoizedState ? yi : Ei),
            (e = n(r, a)),
            t.expirationTime === Ho)
          ) {
            o = 0;
            do {
              if (((t.expirationTime = 0), !(25 > o))) throw Error(i(301));
              (o += 1),
                (qo = Vo = null),
                (t.updateQueue = null),
                (Bo.current = wi),
                (e = n(r, a));
            } while (t.expirationTime === Ho);
          }
          if (
            ((Bo.current = vi),
            (t = null !== Vo && null !== Vo.next),
            (Ho = 0),
            (qo = Vo = Wo = null),
            (Qo = !1),
            t)
          )
            throw Error(i(300));
          return e;
        }
        function Yo() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === qo ? (Wo.memoizedState = qo = e) : (qo = qo.next = e), qo
          );
        }
        function Xo() {
          if (null === Vo) {
            var e = Wo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = Vo.next;
          var t = null === qo ? Wo.memoizedState : qo.next;
          if (null !== t) (qo = t), (Vo = e);
          else {
            if (null === e) throw Error(i(310));
            (e = {
              memoizedState: (Vo = e).memoizedState,
              baseState: Vo.baseState,
              baseQueue: Vo.baseQueue,
              queue: Vo.queue,
              next: null,
            }),
              null === qo ? (Wo.memoizedState = qo = e) : (qo = qo.next = e);
          }
          return qo;
        }
        function Jo(e, t) {
          return "function" == typeof t ? t(e) : t;
        }
        function ei(e) {
          var t = Xo(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = Vo,
            a = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== a) {
              var l = a.next;
              (a.next = o.next), (o.next = l);
            }
            (r.baseQueue = a = o), (n.pending = null);
          }
          if (null !== a) {
            (a = a.next), (r = r.baseState);
            var s = (l = o = null),
              c = a;
            do {
              var u = c.expirationTime;
              if (u < Ho) {
                var d = {
                  expirationTime: c.expirationTime,
                  suspenseConfig: c.suspenseConfig,
                  action: c.action,
                  eagerReducer: c.eagerReducer,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === s ? ((l = s = d), (o = r)) : (s = s.next = d),
                  u > Wo.expirationTime && ((Wo.expirationTime = u), us(u));
              } else
                null !== s &&
                  (s = s.next =
                    {
                      expirationTime: 1073741823,
                      suspenseConfig: c.suspenseConfig,
                      action: c.action,
                      eagerReducer: c.eagerReducer,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  cs(u, c.suspenseConfig),
                  (r = c.eagerReducer === e ? c.eagerState : e(r, c.action));
              c = c.next;
            } while (null !== c && c !== a);
            null === s ? (o = r) : (s.next = l),
              zr(r, t.memoizedState) || (ji = !0),
              (t.memoizedState = r),
              (t.baseState = o),
              (t.baseQueue = s),
              (n.lastRenderedState = r);
          }
          return [t.memoizedState, n.dispatch];
        }
        function ti(e) {
          var t = Xo(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            o = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var l = (a = a.next);
            do {
              (o = e(o, l.action)), (l = l.next);
            } while (l !== a);
            zr(o, t.memoizedState) || (ji = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function ni(e) {
          var t = Yo();
          return (
            "function" == typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = (e = t.queue =
              {
                pending: null,
                dispatch: null,
                lastRenderedReducer: Jo,
                lastRenderedState: e,
              }).dispatch =
              bi.bind(null, Wo, e)),
            [t.memoizedState, e]
          );
        }
        function ri(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = Wo.updateQueue)
              ? ((t = { lastEffect: null }),
                (Wo.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function ai() {
          return Xo().memoizedState;
        }
        function oi(e, t, n, r) {
          var a = Yo();
          (Wo.effectTag |= e),
            (a.memoizedState = ri(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function ii(e, t, n, r) {
          var a = Xo();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== Vo) {
            var i = Vo.memoizedState;
            if (((o = i.destroy), null !== r && Zo(r, i.deps)))
              return void ri(t, n, o, r);
          }
          (Wo.effectTag |= e), (a.memoizedState = ri(1 | t, n, o, r));
        }
        function li(e, t) {
          return oi(516, 4, e, t);
        }
        function si(e, t) {
          return ii(516, 4, e, t);
        }
        function ci(e, t) {
          return ii(4, 2, e, t);
        }
        function ui(e, t) {
          return "function" == typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null != t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function di(e, t, n) {
          return (
            (n = null != n ? n.concat([e]) : null),
            ii(4, 2, ui.bind(null, t, e), n)
          );
        }
        function fi() {}
        function pi(e, t) {
          return (Yo().memoizedState = [e, void 0 === t ? null : t]), e;
        }
        function mi(e, t) {
          var n = Xo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Zo(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function hi(e, t) {
          var n = Xo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Zo(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function gi(e, t, n) {
          var r = Ua();
          Wa(98 > r ? 98 : r, function () {
            e(!0);
          }),
            Wa(97 < r ? 97 : r, function () {
              var r = Uo.suspense;
              Uo.suspense = void 0 === t ? null : t;
              try {
                e(!1), n();
              } finally {
                Uo.suspense = r;
              }
            });
        }
        function bi(e, t, n) {
          var r = Gl(),
            a = ho.suspense;
          a = {
            expirationTime: (r = Yl(r, e, a)),
            suspenseConfig: a,
            action: n,
            eagerReducer: null,
            eagerState: null,
            next: null,
          };
          var o = t.pending;
          if (
            (null === o ? (a.next = a) : ((a.next = o.next), (o.next = a)),
            (t.pending = a),
            (o = e.alternate),
            e === Wo || (null !== o && o === Wo))
          )
            (Qo = !0), (a.expirationTime = Ho), (Wo.expirationTime = Ho);
          else {
            if (
              0 === e.expirationTime &&
              (null === o || 0 === o.expirationTime) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  l = o(i, n);
                if (((a.eagerReducer = o), (a.eagerState = l), zr(l, i)))
                  return;
              } catch (e) {}
            Xl(e, r);
          }
        }
        var vi = {
            readContext: oo,
            useCallback: Ko,
            useContext: Ko,
            useEffect: Ko,
            useImperativeHandle: Ko,
            useLayoutEffect: Ko,
            useMemo: Ko,
            useReducer: Ko,
            useRef: Ko,
            useState: Ko,
            useDebugValue: Ko,
            useResponder: Ko,
            useDeferredValue: Ko,
            useTransition: Ko,
          },
          yi = {
            readContext: oo,
            useCallback: pi,
            useContext: oo,
            useEffect: li,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null != n ? n.concat([e]) : null),
                oi(4, 2, ui.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return oi(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Yo();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Yo();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = (e = r.queue =
                  {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                  }).dispatch =
                  bi.bind(null, Wo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Yo().memoizedState = e);
            },
            useState: ni,
            useDebugValue: fi,
            useResponder: $o,
            useDeferredValue: function (e, t) {
              var n = ni(e),
                r = n[0],
                a = n[1];
              return (
                li(
                  function () {
                    var n = Uo.suspense;
                    Uo.suspense = void 0 === t ? null : t;
                    try {
                      a(e);
                    } finally {
                      Uo.suspense = n;
                    }
                  },
                  [e, t]
                ),
                r
              );
            },
            useTransition: function (e) {
              var t = ni(!1),
                n = t[0];
              return (t = t[1]), [pi(gi.bind(null, t, e), [t, e]), n];
            },
          },
          Ei = {
            readContext: oo,
            useCallback: mi,
            useContext: oo,
            useEffect: si,
            useImperativeHandle: di,
            useLayoutEffect: ci,
            useMemo: hi,
            useReducer: ei,
            useRef: ai,
            useState: function () {
              return ei(Jo);
            },
            useDebugValue: fi,
            useResponder: $o,
            useDeferredValue: function (e, t) {
              var n = ei(Jo),
                r = n[0],
                a = n[1];
              return (
                si(
                  function () {
                    var n = Uo.suspense;
                    Uo.suspense = void 0 === t ? null : t;
                    try {
                      a(e);
                    } finally {
                      Uo.suspense = n;
                    }
                  },
                  [e, t]
                ),
                r
              );
            },
            useTransition: function (e) {
              var t = ei(Jo),
                n = t[0];
              return (t = t[1]), [mi(gi.bind(null, t, e), [t, e]), n];
            },
          },
          wi = {
            readContext: oo,
            useCallback: mi,
            useContext: oo,
            useEffect: si,
            useImperativeHandle: di,
            useLayoutEffect: ci,
            useMemo: hi,
            useReducer: ti,
            useRef: ai,
            useState: function () {
              return ti(Jo);
            },
            useDebugValue: fi,
            useResponder: $o,
            useDeferredValue: function (e, t) {
              var n = ti(Jo),
                r = n[0],
                a = n[1];
              return (
                si(
                  function () {
                    var n = Uo.suspense;
                    Uo.suspense = void 0 === t ? null : t;
                    try {
                      a(e);
                    } finally {
                      Uo.suspense = n;
                    }
                  },
                  [e, t]
                ),
                r
              );
            },
            useTransition: function (e) {
              var t = ti(Jo),
                n = t[0];
              return (t = t[1]), [mi(gi.bind(null, t, e), [t, e]), n];
            },
          },
          xi = null,
          _i = null,
          ki = !1;
        function Ni(e, t) {
          var n = Ss(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.type = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            (n.effectTag = 8),
            null !== e.lastEffect
              ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
              : (e.firstEffect = e.lastEffect = n);
        }
        function Ci(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) && ((e.stateNode = t), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), !0)
              );
            default:
              return !1;
          }
        }
        function Ti(e) {
          if (ki) {
            var t = _i;
            if (t) {
              var n = t;
              if (!Ci(e, t)) {
                if (!(t = _n(n.nextSibling)) || !Ci(e, t))
                  return (
                    (e.effectTag = (-1025 & e.effectTag) | 2),
                    (ki = !1),
                    void (xi = e)
                  );
                Ni(xi, n);
              }
              (xi = e), (_i = _n(t.firstChild));
            } else
              (e.effectTag = (-1025 & e.effectTag) | 2), (ki = !1), (xi = e);
          }
        }
        function Si(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          xi = e;
        }
        function Oi(e) {
          if (e !== xi) return !1;
          if (!ki) return Si(e), (ki = !0), !1;
          var t = e.type;
          if (
            5 !== e.tag ||
            ("head" !== t && "body" !== t && !En(t, e.memoizedProps))
          )
            for (t = _i; t; ) Ni(e, t), (t = _n(t.nextSibling));
          if ((Si(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(i(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      _i = _n(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && n !== gn && n !== hn) || t++;
                }
                e = e.nextSibling;
              }
              _i = null;
            }
          } else _i = xi ? _n(e.stateNode.nextSibling) : null;
          return !0;
        }
        function Pi() {
          (_i = xi = null), (ki = !1);
        }
        var Ai = G.ReactCurrentOwner,
          ji = !1;
        function Ii(e, t, n, r) {
          t.child = null === e ? So(t, null, n, r) : To(t, e.child, n, r);
        }
        function Li(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          return (
            ao(t, a),
            (r = Go(e, t, n, r, o, a)),
            null === e || ji
              ? ((t.effectTag |= 1), Ii(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.effectTag &= -517),
                e.expirationTime <= a && (e.expirationTime = 0),
                Gi(e, t, a))
          );
        }
        function Di(e, t, n, r, a, o) {
          if (null === e) {
            var i = n.type;
            return "function" != typeof i ||
              Os(i) ||
              void 0 !== i.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = As(n.type, null, r, null, t.mode, o)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = i), Ri(e, t, i, r, a, o));
          }
          return (
            (i = e.child),
            a < o &&
            ((a = i.memoizedProps),
            (n = null !== (n = n.compare) ? n : Br)(a, r) && e.ref === t.ref)
              ? Gi(e, t, o)
              : ((t.effectTag |= 1),
                ((e = Ps(i, r)).ref = t.ref),
                (e.return = t),
                (t.child = e))
          );
        }
        function Ri(e, t, n, r, a, o) {
          return null !== e &&
            Br(e.memoizedProps, r) &&
            e.ref === t.ref &&
            ((ji = !1), a < o)
            ? ((t.expirationTime = e.expirationTime), Gi(e, t, o))
            : Fi(e, t, n, r, o);
        }
        function Mi(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            (t.effectTag |= 128);
        }
        function Fi(e, t, n, r, a) {
          var o = ba(n) ? ha : pa.current;
          return (
            (o = ga(t, o)),
            ao(t, a),
            (n = Go(e, t, n, r, o, a)),
            null === e || ji
              ? ((t.effectTag |= 1), Ii(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.effectTag &= -517),
                e.expirationTime <= a && (e.expirationTime = 0),
                Gi(e, t, a))
          );
        }
        function zi(e, t, n, r, a) {
          if (ba(n)) {
            var o = !0;
            wa(t);
          } else o = !1;
          if ((ao(t, a), null === t.stateNode))
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
              Eo(t, n, r),
              xo(t, n, r, a),
              (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              l = t.memoizedProps;
            i.props = l;
            var s = i.context,
              c = n.contextType;
            c =
              "object" == typeof c && null !== c
                ? oo(c)
                : ga(t, (c = ba(n) ? ha : pa.current));
            var u = n.getDerivedStateFromProps,
              d =
                "function" == typeof u ||
                "function" == typeof i.getSnapshotBeforeUpdate;
            d ||
              ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
                "function" != typeof i.componentWillReceiveProps) ||
              ((l !== r || s !== c) && wo(t, i, r, c)),
              (io = !1);
            var f = t.memoizedState;
            (i.state = f),
              po(t, r, i, a),
              (s = t.memoizedState),
              l !== r || f !== s || ma.current || io
                ? ("function" == typeof u &&
                    (bo(t, n, u, r), (s = t.memoizedState)),
                  (l = io || yo(t, n, l, r, f, s, c))
                    ? (d ||
                        ("function" != typeof i.UNSAFE_componentWillMount &&
                          "function" != typeof i.componentWillMount) ||
                        ("function" == typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" == typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" == typeof i.componentDidMount &&
                        (t.effectTag |= 4))
                    : ("function" == typeof i.componentDidMount &&
                        (t.effectTag |= 4),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (i.props = r),
                  (i.state = s),
                  (i.context = c),
                  (r = l))
                : ("function" == typeof i.componentDidMount &&
                    (t.effectTag |= 4),
                  (r = !1));
          } else
            (i = t.stateNode),
              so(e, t),
              (l = t.memoizedProps),
              (i.props = t.type === t.elementType ? l : Ga(t.type, l)),
              (s = i.context),
              (c =
                "object" == typeof (c = n.contextType) && null !== c
                  ? oo(c)
                  : ga(t, (c = ba(n) ? ha : pa.current))),
              (d =
                "function" == typeof (u = n.getDerivedStateFromProps) ||
                "function" == typeof i.getSnapshotBeforeUpdate) ||
                ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
                  "function" != typeof i.componentWillReceiveProps) ||
                ((l !== r || s !== c) && wo(t, i, r, c)),
              (io = !1),
              (s = t.memoizedState),
              (i.state = s),
              po(t, r, i, a),
              (f = t.memoizedState),
              l !== r || s !== f || ma.current || io
                ? ("function" == typeof u &&
                    (bo(t, n, u, r), (f = t.memoizedState)),
                  (u = io || yo(t, n, l, r, s, f, c))
                    ? (d ||
                        ("function" != typeof i.UNSAFE_componentWillUpdate &&
                          "function" != typeof i.componentWillUpdate) ||
                        ("function" == typeof i.componentWillUpdate &&
                          i.componentWillUpdate(r, f, c),
                        "function" == typeof i.UNSAFE_componentWillUpdate &&
                          i.UNSAFE_componentWillUpdate(r, f, c)),
                      "function" == typeof i.componentDidUpdate &&
                        (t.effectTag |= 4),
                      "function" == typeof i.getSnapshotBeforeUpdate &&
                        (t.effectTag |= 256))
                    : ("function" != typeof i.componentDidUpdate ||
                        (l === e.memoizedProps && s === e.memoizedState) ||
                        (t.effectTag |= 4),
                      "function" != typeof i.getSnapshotBeforeUpdate ||
                        (l === e.memoizedProps && s === e.memoizedState) ||
                        (t.effectTag |= 256),
                      (t.memoizedProps = r),
                      (t.memoizedState = f)),
                  (i.props = r),
                  (i.state = f),
                  (i.context = c),
                  (r = u))
                : ("function" != typeof i.componentDidUpdate ||
                    (l === e.memoizedProps && s === e.memoizedState) ||
                    (t.effectTag |= 4),
                  "function" != typeof i.getSnapshotBeforeUpdate ||
                    (l === e.memoizedProps && s === e.memoizedState) ||
                    (t.effectTag |= 256),
                  (r = !1));
          return $i(e, t, n, r, o, a);
        }
        function $i(e, t, n, r, a, o) {
          Mi(e, t);
          var i = 0 != (64 & t.effectTag);
          if (!r && !i) return a && xa(t, n, !1), Gi(e, t, o);
          (r = t.stateNode), (Ai.current = t);
          var l =
            i && "function" != typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.effectTag |= 1),
            null !== e && i
              ? ((t.child = To(t, e.child, null, o)),
                (t.child = To(t, null, l, o)))
              : Ii(e, t, l, o),
            (t.memoizedState = r.state),
            a && xa(t, n, !0),
            t.child
          );
        }
        function Bi(e) {
          var t = e.stateNode;
          t.pendingContext
            ? ya(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && ya(0, t.context, !1),
            Lo(e, t.containerInfo);
        }
        var Ui,
          Hi,
          Wi,
          Vi = { dehydrated: null, retryTime: 0 };
        function qi(e, t, n) {
          var r,
            a = t.mode,
            o = t.pendingProps,
            i = Fo.current,
            l = !1;
          if (
            ((r = 0 != (64 & t.effectTag)) ||
              (r = 0 != (2 & i) && (null === e || null !== e.memoizedState)),
            r
              ? ((l = !0), (t.effectTag &= -65))
              : (null !== e && null === e.memoizedState) ||
                void 0 === o.fallback ||
                !0 === o.unstable_avoidThisFallback ||
                (i |= 1),
            da(Fo, 1 & i),
            null === e)
          ) {
            if ((void 0 !== o.fallback && Ti(t), l)) {
              if (
                ((l = o.fallback),
                ((o = js(null, a, 0, null)).return = t),
                0 == (2 & t.mode))
              )
                for (
                  e = null !== t.memoizedState ? t.child.child : t.child,
                    o.child = e;
                  null !== e;

                )
                  (e.return = o), (e = e.sibling);
              return (
                ((n = js(l, a, n, null)).return = t),
                (o.sibling = n),
                (t.memoizedState = Vi),
                (t.child = o),
                n
              );
            }
            return (
              (a = o.children),
              (t.memoizedState = null),
              (t.child = So(t, null, a, n))
            );
          }
          if (null !== e.memoizedState) {
            if (((a = (e = e.child).sibling), l)) {
              if (
                ((o = o.fallback),
                ((n = Ps(e, e.pendingProps)).return = t),
                0 == (2 & t.mode) &&
                  (l = null !== t.memoizedState ? t.child.child : t.child) !==
                    e.child)
              )
                for (n.child = l; null !== l; ) (l.return = n), (l = l.sibling);
              return (
                ((a = Ps(a, o)).return = t),
                (n.sibling = a),
                (n.childExpirationTime = 0),
                (t.memoizedState = Vi),
                (t.child = n),
                a
              );
            }
            return (
              (n = To(t, e.child, o.children, n)),
              (t.memoizedState = null),
              (t.child = n)
            );
          }
          if (((e = e.child), l)) {
            if (
              ((l = o.fallback),
              ((o = js(null, a, 0, null)).return = t),
              (o.child = e),
              null !== e && (e.return = o),
              0 == (2 & t.mode))
            )
              for (
                e = null !== t.memoizedState ? t.child.child : t.child,
                  o.child = e;
                null !== e;

              )
                (e.return = o), (e = e.sibling);
            return (
              ((n = js(l, a, n, null)).return = t),
              (o.sibling = n),
              (n.effectTag |= 2),
              (o.childExpirationTime = 0),
              (t.memoizedState = Vi),
              (t.child = o),
              n
            );
          }
          return (t.memoizedState = null), (t.child = To(t, e, o.children, n));
        }
        function Qi(e, t) {
          e.expirationTime < t && (e.expirationTime = t);
          var n = e.alternate;
          null !== n && n.expirationTime < t && (n.expirationTime = t),
            ro(e.return, t);
        }
        function Ki(e, t, n, r, a, o) {
          var i = e.memoizedState;
          null === i
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailExpiration: 0,
                tailMode: a,
                lastEffect: o,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = r),
              (i.tail = n),
              (i.tailExpiration = 0),
              (i.tailMode = a),
              (i.lastEffect = o));
        }
        function Zi(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((Ii(e, t, r.children, n), 0 != (2 & (r = Fo.current))))
            (r = (1 & r) | 2), (t.effectTag |= 64);
          else {
            if (null !== e && 0 != (64 & e.effectTag))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Qi(e, n);
                else if (19 === e.tag) Qi(e, n);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((da(Fo, r), 0 == (2 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === zo(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Ki(t, !1, a, n, o, t.lastEffect);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === zo(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Ki(t, !0, n, null, o, t.lastEffect);
                break;
              case "together":
                Ki(t, !1, null, null, void 0, t.lastEffect);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Gi(e, t, n) {
          null !== e && (t.dependencies = e.dependencies);
          var r = t.expirationTime;
          if ((0 !== r && us(r), t.childExpirationTime < n)) return null;
          if (null !== e && t.child !== e.child) throw Error(i(153));
          if (null !== t.child) {
            for (
              n = Ps((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Ps(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Yi(e, t) {
          switch (e.tailMode) {
            case "hidden":
              t = e.tail;
              for (var n = null; null !== t; )
                null !== t.alternate && (n = t), (t = t.sibling);
              null === n ? (e.tail = null) : (n.sibling = null);
              break;
            case "collapsed":
              n = e.tail;
              for (var r = null; null !== n; )
                null !== n.alternate && (r = n), (n = n.sibling);
              null === r
                ? t || null === e.tail
                  ? (e.tail = null)
                  : (e.tail.sibling = null)
                : (r.sibling = null);
          }
        }
        function Xi(e, t, n) {
          var r = t.pendingProps;
          switch (t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return null;
            case 1:
            case 17:
              return ba(t.type) && va(), null;
            case 3:
              return (
                Do(),
                ua(ma),
                ua(pa),
                (n = t.stateNode).pendingContext &&
                  ((n.context = n.pendingContext), (n.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  !Oi(t) ||
                  (t.effectTag |= 4),
                null
              );
            case 5:
              Mo(t), (n = Io(jo.current));
              var o = t.type;
              if (null !== e && null != t.stateNode)
                Hi(e, t, o, r, n), e.ref !== t.ref && (t.effectTag |= 128);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return null;
                }
                if (((e = Io(Po.current)), Oi(t))) {
                  (r = t.stateNode), (o = t.type);
                  var l = t.memoizedProps;
                  switch (((r[Cn] = t), (r[Tn] = l), o)) {
                    case "iframe":
                    case "object":
                    case "embed":
                      qt("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (e = 0; e < Ze.length; e++) qt(Ze[e], r);
                      break;
                    case "source":
                      qt("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      qt("error", r), qt("load", r);
                      break;
                    case "form":
                      qt("reset", r), qt("submit", r);
                      break;
                    case "details":
                      qt("toggle", r);
                      break;
                    case "input":
                      _e(r, l), qt("invalid", r), ln(n, "onChange");
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!l.multiple }),
                        qt("invalid", r),
                        ln(n, "onChange");
                      break;
                    case "textarea":
                      Ae(r, l), qt("invalid", r), ln(n, "onChange");
                  }
                  for (var s in (rn(o, l), (e = null), l))
                    if (l.hasOwnProperty(s)) {
                      var c = l[s];
                      "children" === s
                        ? "string" == typeof c
                          ? r.textContent !== c && (e = ["children", c])
                          : "number" == typeof c &&
                            r.textContent !== "" + c &&
                            (e = ["children", "" + c])
                        : k.hasOwnProperty(s) && null != c && ln(n, s);
                    }
                  switch (o) {
                    case "input":
                      Ee(r), Ce(r, l, !0);
                      break;
                    case "textarea":
                      Ee(r), Ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" == typeof l.onClick && (r.onclick = sn);
                  }
                  (n = e),
                    (t.updateQueue = n),
                    null !== n && (t.effectTag |= 4);
                } else {
                  switch (
                    ((s = 9 === n.nodeType ? n : n.ownerDocument),
                    e === on && (e = Le(o)),
                    e === on
                      ? "script" === o
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" == typeof r.is
                        ? (e = s.createElement(o, { is: r.is }))
                        : ((e = s.createElement(o)),
                          "select" === o &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, o)),
                    (e[Cn] = t),
                    (e[Tn] = r),
                    Ui(e, t),
                    (t.stateNode = e),
                    (s = an(o, r)),
                    o)
                  ) {
                    case "iframe":
                    case "object":
                    case "embed":
                      qt("load", e), (c = r);
                      break;
                    case "video":
                    case "audio":
                      for (c = 0; c < Ze.length; c++) qt(Ze[c], e);
                      c = r;
                      break;
                    case "source":
                      qt("error", e), (c = r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      qt("error", e), qt("load", e), (c = r);
                      break;
                    case "form":
                      qt("reset", e), qt("submit", e), (c = r);
                      break;
                    case "details":
                      qt("toggle", e), (c = r);
                      break;
                    case "input":
                      _e(e, r),
                        (c = xe(e, r)),
                        qt("invalid", e),
                        ln(n, "onChange");
                      break;
                    case "option":
                      c = Se(e, r);
                      break;
                    case "select":
                      (e._wrapperState = { wasMultiple: !!r.multiple }),
                        (c = a({}, r, { value: void 0 })),
                        qt("invalid", e),
                        ln(n, "onChange");
                      break;
                    case "textarea":
                      Ae(e, r),
                        (c = Pe(e, r)),
                        qt("invalid", e),
                        ln(n, "onChange");
                      break;
                    default:
                      c = r;
                  }
                  rn(o, c);
                  var u = c;
                  for (l in u)
                    if (u.hasOwnProperty(l)) {
                      var d = u[l];
                      "style" === l
                        ? tn(e, d)
                        : "dangerouslySetInnerHTML" === l
                        ? null != (d = d ? d.__html : void 0) && Fe(e, d)
                        : "children" === l
                        ? "string" == typeof d
                          ? ("textarea" !== o || "" !== d) && ze(e, d)
                          : "number" == typeof d && ze(e, "" + d)
                        : "suppressContentEditableWarning" !== l &&
                          "suppressHydrationWarning" !== l &&
                          "autoFocus" !== l &&
                          (k.hasOwnProperty(l)
                            ? null != d && ln(n, l)
                            : null != d && Y(e, l, d, s));
                    }
                  switch (o) {
                    case "input":
                      Ee(e), Ce(e, r, !1);
                      break;
                    case "textarea":
                      Ee(e), Ie(e);
                      break;
                    case "option":
                      null != r.value &&
                        e.setAttribute("value", "" + ve(r.value));
                      break;
                    case "select":
                      (e.multiple = !!r.multiple),
                        null != (n = r.value)
                          ? Oe(e, !!r.multiple, n, !1)
                          : null != r.defaultValue &&
                            Oe(e, !!r.multiple, r.defaultValue, !0);
                      break;
                    default:
                      "function" == typeof c.onClick && (e.onclick = sn);
                  }
                  yn(o, r) && (t.effectTag |= 4);
                }
                null !== t.ref && (t.effectTag |= 128);
              }
              return null;
            case 6:
              if (e && null != t.stateNode) Wi(0, t, e.memoizedProps, r);
              else {
                if ("string" != typeof r && null === t.stateNode)
                  throw Error(i(166));
                (n = Io(jo.current)),
                  Io(Po.current),
                  Oi(t)
                    ? ((n = t.stateNode),
                      (r = t.memoizedProps),
                      (n[Cn] = t),
                      n.nodeValue !== r && (t.effectTag |= 4))
                    : (((n = (
                        9 === n.nodeType ? n : n.ownerDocument
                      ).createTextNode(r))[Cn] = t),
                      (t.stateNode = n));
              }
              return null;
            case 13:
              return (
                ua(Fo),
                (r = t.memoizedState),
                0 != (64 & t.effectTag)
                  ? ((t.expirationTime = n), t)
                  : ((n = null !== r),
                    (r = !1),
                    null === e
                      ? void 0 !== t.memoizedProps.fallback && Oi(t)
                      : ((r = null !== (o = e.memoizedState)),
                        n ||
                          null === o ||
                          (null !== (o = e.child.sibling) &&
                            (null !== (l = t.firstEffect)
                              ? ((t.firstEffect = o), (o.nextEffect = l))
                              : ((t.firstEffect = t.lastEffect = o),
                                (o.nextEffect = null)),
                            (o.effectTag = 8)))),
                    n &&
                      !r &&
                      0 != (2 & t.mode) &&
                      ((null === e &&
                        !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                      0 != (1 & Fo.current)
                        ? Al === kl && (Al = Nl)
                        : ((Al !== kl && Al !== Nl) || (Al = Cl),
                          0 !== Rl && null !== Sl && (Ms(Sl, Pl), Fs(Sl, Rl)))),
                    (n || r) && (t.effectTag |= 4),
                    null)
              );
            case 4:
              return Do(), null;
            case 10:
              return no(t), null;
            case 19:
              if ((ua(Fo), null === (r = t.memoizedState))) return null;
              if (((o = 0 != (64 & t.effectTag)), null === (l = r.rendering))) {
                if (o) Yi(r, !1);
                else if (Al !== kl || (null !== e && 0 != (64 & e.effectTag)))
                  for (l = t.child; null !== l; ) {
                    if (null !== (e = zo(l))) {
                      for (
                        t.effectTag |= 64,
                          Yi(r, !1),
                          null !== (o = e.updateQueue) &&
                            ((t.updateQueue = o), (t.effectTag |= 4)),
                          null === r.lastEffect && (t.firstEffect = null),
                          t.lastEffect = r.lastEffect,
                          r = t.child;
                        null !== r;

                      )
                        (l = n),
                          ((o = r).effectTag &= 2),
                          (o.nextEffect = null),
                          (o.firstEffect = null),
                          (o.lastEffect = null),
                          null === (e = o.alternate)
                            ? ((o.childExpirationTime = 0),
                              (o.expirationTime = l),
                              (o.child = null),
                              (o.memoizedProps = null),
                              (o.memoizedState = null),
                              (o.updateQueue = null),
                              (o.dependencies = null))
                            : ((o.childExpirationTime = e.childExpirationTime),
                              (o.expirationTime = e.expirationTime),
                              (o.child = e.child),
                              (o.memoizedProps = e.memoizedProps),
                              (o.memoizedState = e.memoizedState),
                              (o.updateQueue = e.updateQueue),
                              (l = e.dependencies),
                              (o.dependencies =
                                null === l
                                  ? null
                                  : {
                                      expirationTime: l.expirationTime,
                                      firstContext: l.firstContext,
                                      responders: l.responders,
                                    })),
                          (r = r.sibling);
                      return da(Fo, (1 & Fo.current) | 2), t.child;
                    }
                    l = l.sibling;
                  }
              } else {
                if (!o)
                  if (null !== (e = zo(l))) {
                    if (
                      ((t.effectTag |= 64),
                      (o = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.effectTag |= 4)),
                      Yi(r, !0),
                      null === r.tail &&
                        "hidden" === r.tailMode &&
                        !l.alternate)
                    )
                      return (
                        null !== (t = t.lastEffect = r.lastEffect) &&
                          (t.nextEffect = null),
                        null
                      );
                  } else
                    2 * Ba() - r.renderingStartTime > r.tailExpiration &&
                      1 < n &&
                      ((t.effectTag |= 64),
                      (o = !0),
                      Yi(r, !1),
                      (t.expirationTime = t.childExpirationTime = n - 1));
                r.isBackwards
                  ? ((l.sibling = t.child), (t.child = l))
                  : (null !== (n = r.last) ? (n.sibling = l) : (t.child = l),
                    (r.last = l));
              }
              return null !== r.tail
                ? (0 === r.tailExpiration && (r.tailExpiration = Ba() + 500),
                  (n = r.tail),
                  (r.rendering = n),
                  (r.tail = n.sibling),
                  (r.lastEffect = t.lastEffect),
                  (r.renderingStartTime = Ba()),
                  (n.sibling = null),
                  (t = Fo.current),
                  da(Fo, o ? (1 & t) | 2 : 1 & t),
                  n)
                : null;
          }
          throw Error(i(156, t.tag));
        }
        function Ji(e) {
          switch (e.tag) {
            case 1:
              ba(e.type) && va();
              var t = e.effectTag;
              return 4096 & t ? ((e.effectTag = (-4097 & t) | 64), e) : null;
            case 3:
              if ((Do(), ua(ma), ua(pa), 0 != (64 & (t = e.effectTag))))
                throw Error(i(285));
              return (e.effectTag = (-4097 & t) | 64), e;
            case 5:
              return Mo(e), null;
            case 13:
              return (
                ua(Fo),
                4096 & (t = e.effectTag)
                  ? ((e.effectTag = (-4097 & t) | 64), e)
                  : null
              );
            case 19:
              return ua(Fo), null;
            case 4:
              return Do(), null;
            case 10:
              return no(e), null;
            default:
              return null;
          }
        }
        function el(e, t) {
          return { value: e, source: t, stack: be(t) };
        }
        (Ui = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Hi = function (e, t, n, r, o) {
            var i = e.memoizedProps;
            if (i !== r) {
              var l,
                s,
                c = t.stateNode;
              switch ((Io(Po.current), (e = null), n)) {
                case "input":
                  (i = xe(c, i)), (r = xe(c, r)), (e = []);
                  break;
                case "option":
                  (i = Se(c, i)), (r = Se(c, r)), (e = []);
                  break;
                case "select":
                  (i = a({}, i, { value: void 0 })),
                    (r = a({}, r, { value: void 0 })),
                    (e = []);
                  break;
                case "textarea":
                  (i = Pe(c, i)), (r = Pe(c, r)), (e = []);
                  break;
                default:
                  "function" != typeof i.onClick &&
                    "function" == typeof r.onClick &&
                    (c.onclick = sn);
              }
              for (l in (rn(n, r), (n = null), i))
                if (!r.hasOwnProperty(l) && i.hasOwnProperty(l) && null != i[l])
                  if ("style" === l)
                    for (s in (c = i[l]))
                      c.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
                  else
                    "dangerouslySetInnerHTML" !== l &&
                      "children" !== l &&
                      "suppressContentEditableWarning" !== l &&
                      "suppressHydrationWarning" !== l &&
                      "autoFocus" !== l &&
                      (k.hasOwnProperty(l)
                        ? e || (e = [])
                        : (e = e || []).push(l, null));
              for (l in r) {
                var u = r[l];
                if (
                  ((c = null != i ? i[l] : void 0),
                  r.hasOwnProperty(l) && u !== c && (null != u || null != c))
                )
                  if ("style" === l)
                    if (c) {
                      for (s in c)
                        !c.hasOwnProperty(s) ||
                          (u && u.hasOwnProperty(s)) ||
                          (n || (n = {}), (n[s] = ""));
                      for (s in u)
                        u.hasOwnProperty(s) &&
                          c[s] !== u[s] &&
                          (n || (n = {}), (n[s] = u[s]));
                    } else n || (e || (e = []), e.push(l, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === l
                      ? ((u = u ? u.__html : void 0),
                        (c = c ? c.__html : void 0),
                        null != u && c !== u && (e = e || []).push(l, u))
                      : "children" === l
                      ? c === u ||
                        ("string" != typeof u && "number" != typeof u) ||
                        (e = e || []).push(l, "" + u)
                      : "suppressContentEditableWarning" !== l &&
                        "suppressHydrationWarning" !== l &&
                        (k.hasOwnProperty(l)
                          ? (null != u && ln(o, l), e || c === u || (e = []))
                          : (e = e || []).push(l, u));
              }
              n && (e = e || []).push("style", n),
                (o = e),
                (t.updateQueue = o) && (t.effectTag |= 4);
            }
          }),
          (Wi = function (e, t, n, r) {
            n !== r && (t.effectTag |= 4);
          });
        var tl = "function" == typeof WeakSet ? WeakSet : Set;
        function nl(e, t) {
          var n = t.source,
            r = t.stack;
          null === r && null !== n && (r = be(n)),
            null !== n && ge(n.type),
            (t = t.value),
            null !== e && 1 === e.tag && ge(e.type);
          try {
            console.error(t);
          } catch (e) {
            setTimeout(function () {
              throw e;
            });
          }
        }
        function rl(e) {
          var t = e.ref;
          if (null !== t)
            if ("function" == typeof t)
              try {
                t(null);
              } catch (t) {
                xs(e, t);
              }
            else t.current = null;
        }
        function al(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
            case 3:
            case 5:
            case 6:
            case 4:
            case 17:
              return;
            case 1:
              if (256 & t.effectTag && null !== e) {
                var n = e.memoizedProps,
                  r = e.memoizedState;
                (t = (e = t.stateNode).getSnapshotBeforeUpdate(
                  t.elementType === t.type ? n : Ga(t.type, n),
                  r
                )),
                  (e.__reactInternalSnapshotBeforeUpdate = t);
              }
              return;
          }
          throw Error(i(163));
        }
        function ol(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.destroy;
                (n.destroy = void 0), void 0 !== r && r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function il(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function ll(e, t, n) {
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
              return void il(3, n);
            case 1:
              if (((e = n.stateNode), 4 & n.effectTag))
                if (null === t) e.componentDidMount();
                else {
                  var r =
                    n.elementType === n.type
                      ? t.memoizedProps
                      : Ga(n.type, t.memoizedProps);
                  e.componentDidUpdate(
                    r,
                    t.memoizedState,
                    e.__reactInternalSnapshotBeforeUpdate
                  );
                }
              return void (null !== (t = n.updateQueue) && mo(n, t, e));
            case 3:
              if (null !== (t = n.updateQueue)) {
                if (((e = null), null !== n.child))
                  switch (n.child.tag) {
                    case 5:
                    case 1:
                      e = n.child.stateNode;
                  }
                mo(n, t, e);
              }
              return;
            case 5:
              return (
                (e = n.stateNode),
                void (
                  null === t &&
                  4 & n.effectTag &&
                  yn(n.type, n.memoizedProps) &&
                  e.focus()
                )
              );
            case 6:
            case 4:
            case 12:
            case 19:
            case 17:
            case 20:
            case 21:
              return;
            case 13:
              return void (
                null === n.memoizedState &&
                ((n = n.alternate),
                null !== n &&
                  ((n = n.memoizedState),
                  null !== n && ((n = n.dehydrated), null !== n && Dt(n))))
              );
          }
          throw Error(i(163));
        }
        function sl(e, t, n) {
          switch (("function" == typeof Cs && Cs(t), t.tag)) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                var r = e.next;
                Wa(97 < n ? 97 : n, function () {
                  var e = r;
                  do {
                    var n = e.destroy;
                    if (void 0 !== n) {
                      var a = t;
                      try {
                        n();
                      } catch (e) {
                        xs(a, e);
                      }
                    }
                    e = e.next;
                  } while (e !== r);
                });
              }
              break;
            case 1:
              rl(t),
                "function" == typeof (n = t.stateNode).componentWillUnmount &&
                  (function (e, t) {
                    try {
                      (t.props = e.memoizedProps),
                        (t.state = e.memoizedState),
                        t.componentWillUnmount();
                    } catch (t) {
                      xs(e, t);
                    }
                  })(t, n);
              break;
            case 5:
              rl(t);
              break;
            case 4:
              ml(e, t, n);
          }
        }
        function cl(e) {
          var t = e.alternate;
          (e.return = null),
            (e.child = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.alternate = null),
            (e.firstEffect = null),
            (e.lastEffect = null),
            (e.pendingProps = null),
            (e.memoizedProps = null),
            (e.stateNode = null),
            null !== t && cl(t);
        }
        function ul(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function dl(e) {
          e: {
            for (var t = e.return; null !== t; ) {
              if (ul(t)) {
                var n = t;
                break e;
              }
              t = t.return;
            }
            throw Error(i(160));
          }
          switch (((t = n.stateNode), n.tag)) {
            case 5:
              var r = !1;
              break;
            case 3:
            case 4:
              (t = t.containerInfo), (r = !0);
              break;
            default:
              throw Error(i(161));
          }
          16 & n.effectTag && (ze(t, ""), (n.effectTag &= -17));
          e: t: for (n = e; ; ) {
            for (; null === n.sibling; ) {
              if (null === n.return || ul(n.return)) {
                n = null;
                break e;
              }
              n = n.return;
            }
            for (
              n.sibling.return = n.return, n = n.sibling;
              5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

            ) {
              if (2 & n.effectTag) continue t;
              if (null === n.child || 4 === n.tag) continue t;
              (n.child.return = n), (n = n.child);
            }
            if (!(2 & n.effectTag)) {
              n = n.stateNode;
              break e;
            }
          }
          r ? fl(e, n, t) : pl(e, n, t);
        }
        function fl(e, t, n) {
          var r = e.tag,
            a = 5 === r || 6 === r;
          if (a)
            (e = a ? e.stateNode : e.stateNode.instance),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  null != (n = n._reactRootContainer) ||
                    null !== t.onclick ||
                    (t.onclick = sn));
          else if (4 !== r && null !== (e = e.child))
            for (fl(e, t, n), e = e.sibling; null !== e; )
              fl(e, t, n), (e = e.sibling);
        }
        function pl(e, t, n) {
          var r = e.tag,
            a = 5 === r || 6 === r;
          if (a)
            (e = a ? e.stateNode : e.stateNode.instance),
              t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (pl(e, t, n), e = e.sibling; null !== e; )
              pl(e, t, n), (e = e.sibling);
        }
        function ml(e, t, n) {
          for (var r, a, o = t, l = !1; ; ) {
            if (!l) {
              l = o.return;
              e: for (;;) {
                if (null === l) throw Error(i(160));
                switch (((r = l.stateNode), l.tag)) {
                  case 5:
                    a = !1;
                    break e;
                  case 3:
                  case 4:
                    (r = r.containerInfo), (a = !0);
                    break e;
                }
                l = l.return;
              }
              l = !0;
            }
            if (5 === o.tag || 6 === o.tag) {
              e: for (var s = e, c = o, u = n, d = c; ; )
                if ((sl(s, d, u), null !== d.child && 4 !== d.tag))
                  (d.child.return = d), (d = d.child);
                else {
                  if (d === c) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === c) break e;
                    d = d.return;
                  }
                  (d.sibling.return = d.return), (d = d.sibling);
                }
              a
                ? ((s = r),
                  (c = o.stateNode),
                  8 === s.nodeType
                    ? s.parentNode.removeChild(c)
                    : s.removeChild(c))
                : r.removeChild(o.stateNode);
            } else if (4 === o.tag) {
              if (null !== o.child) {
                (r = o.stateNode.containerInfo),
                  (a = !0),
                  (o.child.return = o),
                  (o = o.child);
                continue;
              }
            } else if ((sl(e, o, n), null !== o.child)) {
              (o.child.return = o), (o = o.child);
              continue;
            }
            if (o === t) break;
            for (; null === o.sibling; ) {
              if (null === o.return || o.return === t) return;
              4 === (o = o.return).tag && (l = !1);
            }
            (o.sibling.return = o.return), (o = o.sibling);
          }
        }
        function hl(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              return void ol(3, t);
            case 1:
            case 12:
            case 17:
              return;
            case 5:
              var n = t.stateNode;
              if (null != n) {
                var r = t.memoizedProps,
                  a = null !== e ? e.memoizedProps : r;
                e = t.type;
                var o = t.updateQueue;
                if (((t.updateQueue = null), null !== o)) {
                  for (
                    n[Tn] = r,
                      "input" === e &&
                        "radio" === r.type &&
                        null != r.name &&
                        ke(n, r),
                      an(e, a),
                      t = an(e, r),
                      a = 0;
                    a < o.length;
                    a += 2
                  ) {
                    var l = o[a],
                      s = o[a + 1];
                    "style" === l
                      ? tn(n, s)
                      : "dangerouslySetInnerHTML" === l
                      ? Fe(n, s)
                      : "children" === l
                      ? ze(n, s)
                      : Y(n, l, s, t);
                  }
                  switch (e) {
                    case "input":
                      Ne(n, r);
                      break;
                    case "textarea":
                      je(n, r);
                      break;
                    case "select":
                      (t = n._wrapperState.wasMultiple),
                        (n._wrapperState.wasMultiple = !!r.multiple),
                        null != (e = r.value)
                          ? Oe(n, !!r.multiple, e, !1)
                          : t !== !!r.multiple &&
                            (null != r.defaultValue
                              ? Oe(n, !!r.multiple, r.defaultValue, !0)
                              : Oe(n, !!r.multiple, r.multiple ? [] : "", !1));
                  }
                }
              }
              return;
            case 6:
              if (null === t.stateNode) throw Error(i(162));
              return void (t.stateNode.nodeValue = t.memoizedProps);
            case 3:
              return void (
                (t = t.stateNode).hydrate &&
                ((t.hydrate = !1), Dt(t.containerInfo))
              );
            case 13:
              if (
                ((n = t),
                null === t.memoizedState
                  ? (r = !1)
                  : ((r = !0), (n = t.child), (Fl = Ba())),
                null !== n)
              )
                e: for (e = n; ; ) {
                  if (5 === e.tag)
                    (o = e.stateNode),
                      r
                        ? "function" == typeof (o = o.style).setProperty
                          ? o.setProperty("display", "none", "important")
                          : (o.display = "none")
                        : ((o = e.stateNode),
                          (a =
                            null != (a = e.memoizedProps.style) &&
                            a.hasOwnProperty("display")
                              ? a.display
                              : null),
                          (o.style.display = en("display", a)));
                  else if (6 === e.tag)
                    e.stateNode.nodeValue = r ? "" : e.memoizedProps;
                  else {
                    if (
                      13 === e.tag &&
                      null !== e.memoizedState &&
                      null === e.memoizedState.dehydrated
                    ) {
                      ((o = e.child.sibling).return = e), (e = o);
                      continue;
                    }
                    if (null !== e.child) {
                      (e.child.return = e), (e = e.child);
                      continue;
                    }
                  }
                  if (e === n) break;
                  for (; null === e.sibling; ) {
                    if (null === e.return || e.return === n) break e;
                    e = e.return;
                  }
                  (e.sibling.return = e.return), (e = e.sibling);
                }
              return void gl(t);
            case 19:
              return void gl(t);
          }
          throw Error(i(163));
        }
        function gl(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new tl()),
              t.forEach(function (t) {
                var r = ks.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        var bl = "function" == typeof WeakMap ? WeakMap : Map;
        function vl(e, t, n) {
          ((n = co(n, null)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              $l || (($l = !0), (Bl = r)), nl(e, t);
            }),
            n
          );
        }
        function yl(e, t, n) {
          (n = co(n, null)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" == typeof r) {
            var a = t.value;
            n.payload = function () {
              return nl(e, t), r(a);
            };
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" == typeof o.componentDidCatch &&
              (n.callback = function () {
                "function" != typeof r &&
                  (null === Ul ? (Ul = new Set([this])) : Ul.add(this),
                  nl(e, t));
                var n = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== n ? n : "",
                });
              }),
            n
          );
        }
        var El,
          wl = Math.ceil,
          xl = G.ReactCurrentDispatcher,
          _l = G.ReactCurrentOwner,
          kl = 0,
          Nl = 3,
          Cl = 4,
          Tl = 0,
          Sl = null,
          Ol = null,
          Pl = 0,
          Al = kl,
          jl = null,
          Il = 1073741823,
          Ll = 1073741823,
          Dl = null,
          Rl = 0,
          Ml = !1,
          Fl = 0,
          zl = null,
          $l = !1,
          Bl = null,
          Ul = null,
          Hl = !1,
          Wl = null,
          Vl = 90,
          ql = null,
          Ql = 0,
          Kl = null,
          Zl = 0;
        function Gl() {
          return 0 != (48 & Tl)
            ? 1073741821 - ((Ba() / 10) | 0)
            : 0 !== Zl
            ? Zl
            : (Zl = 1073741821 - ((Ba() / 10) | 0));
        }
        function Yl(e, t, n) {
          if (0 == (2 & (t = t.mode))) return 1073741823;
          var r = Ua();
          if (0 == (4 & t)) return 99 === r ? 1073741823 : 1073741822;
          if (0 != (16 & Tl)) return Pl;
          if (null !== n) e = Za(e, 0 | n.timeoutMs || 5e3, 250);
          else
            switch (r) {
              case 99:
                e = 1073741823;
                break;
              case 98:
                e = Za(e, 150, 100);
                break;
              case 97:
              case 96:
                e = Za(e, 5e3, 250);
                break;
              case 95:
                e = 2;
                break;
              default:
                throw Error(i(326));
            }
          return null !== Sl && e === Pl && --e, e;
        }
        function Xl(e, t) {
          if (50 < Ql) throw ((Ql = 0), (Kl = null), Error(i(185)));
          if (null !== (e = Jl(e, t))) {
            var n = Ua();
            1073741823 === t
              ? 0 != (8 & Tl) && 0 == (48 & Tl)
                ? rs(e)
                : (ts(e), 0 === Tl && Qa())
              : ts(e),
              0 == (4 & Tl) ||
                (98 !== n && 99 !== n) ||
                (null === ql
                  ? (ql = new Map([[e, t]]))
                  : (void 0 === (n = ql.get(e)) || n > t) && ql.set(e, t));
          }
        }
        function Jl(e, t) {
          e.expirationTime < t && (e.expirationTime = t);
          var n = e.alternate;
          null !== n && n.expirationTime < t && (n.expirationTime = t);
          var r = e.return,
            a = null;
          if (null === r && 3 === e.tag) a = e.stateNode;
          else
            for (; null !== r; ) {
              if (
                ((n = r.alternate),
                r.childExpirationTime < t && (r.childExpirationTime = t),
                null !== n &&
                  n.childExpirationTime < t &&
                  (n.childExpirationTime = t),
                null === r.return && 3 === r.tag)
              ) {
                a = r.stateNode;
                break;
              }
              r = r.return;
            }
          return (
            null !== a &&
              (Sl === a && (us(t), Al === Cl && Ms(a, Pl)), Fs(a, t)),
            a
          );
        }
        function es(e) {
          var t = e.lastExpiredTime;
          if (0 !== t) return t;
          if (!Rs(e, (t = e.firstPendingTime))) return t;
          var n = e.lastPingedTime;
          return 2 >= (e = n > (e = e.nextKnownPendingLevel) ? n : e) && t !== e
            ? 0
            : e;
        }
        function ts(e) {
          if (0 !== e.lastExpiredTime)
            (e.callbackExpirationTime = 1073741823),
              (e.callbackPriority = 99),
              (e.callbackNode = qa(rs.bind(null, e)));
          else {
            var t = es(e),
              n = e.callbackNode;
            if (0 === t)
              null !== n &&
                ((e.callbackNode = null),
                (e.callbackExpirationTime = 0),
                (e.callbackPriority = 90));
            else {
              var r = Gl();
              if (
                ((r =
                  1073741823 === t
                    ? 99
                    : 1 === t || 2 === t
                    ? 95
                    : 0 >= (r = 10 * (1073741821 - t) - 10 * (1073741821 - r))
                    ? 99
                    : 250 >= r
                    ? 98
                    : 5250 >= r
                    ? 97
                    : 95),
                null !== n)
              ) {
                var a = e.callbackPriority;
                if (e.callbackExpirationTime === t && a >= r) return;
                n !== La && Na(n);
              }
              (e.callbackExpirationTime = t),
                (e.callbackPriority = r),
                (t =
                  1073741823 === t
                    ? qa(rs.bind(null, e))
                    : Va(r, ns.bind(null, e), {
                        timeout: 10 * (1073741821 - t) - Ba(),
                      })),
                (e.callbackNode = t);
            }
          }
        }
        function ns(e, t) {
          if (((Zl = 0), t)) return zs(e, (t = Gl())), ts(e), null;
          var n = es(e);
          if (0 !== n) {
            if (((t = e.callbackNode), 0 != (48 & Tl))) throw Error(i(327));
            if ((ys(), (e === Sl && n === Pl) || is(e, n), null !== Ol)) {
              var r = Tl;
              Tl |= 16;
              for (var a = ss(); ; )
                try {
                  fs();
                  break;
                } catch (t) {
                  ls(e, t);
                }
              if ((to(), (Tl = r), (xl.current = a), 1 === Al))
                throw ((t = jl), is(e, n), Ms(e, n), ts(e), t);
              if (null === Ol)
                switch (
                  ((a = e.finishedWork = e.current.alternate),
                  (e.finishedExpirationTime = n),
                  (r = Al),
                  (Sl = null),
                  r)
                ) {
                  case kl:
                  case 1:
                    throw Error(i(345));
                  case 2:
                    zs(e, 2 < n ? 2 : n);
                    break;
                  case Nl:
                    if (
                      (Ms(e, n),
                      n === (r = e.lastSuspendedTime) &&
                        (e.nextKnownPendingLevel = hs(a)),
                      1073741823 === Il && 10 < (a = Fl + 500 - Ba()))
                    ) {
                      if (Ml) {
                        var o = e.lastPingedTime;
                        if (0 === o || o >= n) {
                          (e.lastPingedTime = n), is(e, n);
                          break;
                        }
                      }
                      if (0 !== (o = es(e)) && o !== n) break;
                      if (0 !== r && r !== n) {
                        e.lastPingedTime = r;
                        break;
                      }
                      e.timeoutHandle = wn(gs.bind(null, e), a);
                      break;
                    }
                    gs(e);
                    break;
                  case Cl:
                    if (
                      (Ms(e, n),
                      n === (r = e.lastSuspendedTime) &&
                        (e.nextKnownPendingLevel = hs(a)),
                      Ml && (0 === (a = e.lastPingedTime) || a >= n))
                    ) {
                      (e.lastPingedTime = n), is(e, n);
                      break;
                    }
                    if (0 !== (a = es(e)) && a !== n) break;
                    if (0 !== r && r !== n) {
                      e.lastPingedTime = r;
                      break;
                    }
                    if (
                      (1073741823 !== Ll
                        ? (r = 10 * (1073741821 - Ll) - Ba())
                        : 1073741823 === Il
                        ? (r = 0)
                        : ((r = 10 * (1073741821 - Il) - 5e3),
                          0 > (r = (a = Ba()) - r) && (r = 0),
                          (n = 10 * (1073741821 - n) - a) <
                            (r =
                              (120 > r
                                ? 120
                                : 480 > r
                                ? 480
                                : 1080 > r
                                ? 1080
                                : 1920 > r
                                ? 1920
                                : 3e3 > r
                                ? 3e3
                                : 4320 > r
                                ? 4320
                                : 1960 * wl(r / 1960)) - r) && (r = n)),
                      10 < r)
                    ) {
                      e.timeoutHandle = wn(gs.bind(null, e), r);
                      break;
                    }
                    gs(e);
                    break;
                  case 5:
                    if (1073741823 !== Il && null !== Dl) {
                      o = Il;
                      var l = Dl;
                      if (
                        (0 >= (r = 0 | l.busyMinDurationMs)
                          ? (r = 0)
                          : ((a = 0 | l.busyDelayMs),
                            (r =
                              (o =
                                Ba() -
                                (10 * (1073741821 - o) -
                                  (0 | l.timeoutMs || 5e3))) <= a
                                ? 0
                                : a + r - o)),
                        10 < r)
                      ) {
                        Ms(e, n), (e.timeoutHandle = wn(gs.bind(null, e), r));
                        break;
                      }
                    }
                    gs(e);
                    break;
                  default:
                    throw Error(i(329));
                }
              if ((ts(e), e.callbackNode === t)) return ns.bind(null, e);
            }
          }
          return null;
        }
        function rs(e) {
          var t = e.lastExpiredTime;
          if (((t = 0 !== t ? t : 1073741823), 0 != (48 & Tl)))
            throw Error(i(327));
          if ((ys(), (e === Sl && t === Pl) || is(e, t), null !== Ol)) {
            var n = Tl;
            Tl |= 16;
            for (var r = ss(); ; )
              try {
                ds();
                break;
              } catch (t) {
                ls(e, t);
              }
            if ((to(), (Tl = n), (xl.current = r), 1 === Al))
              throw ((n = jl), is(e, t), Ms(e, t), ts(e), n);
            if (null !== Ol) throw Error(i(261));
            (e.finishedWork = e.current.alternate),
              (e.finishedExpirationTime = t),
              (Sl = null),
              gs(e),
              ts(e);
          }
          return null;
        }
        function as(e, t) {
          var n = Tl;
          Tl |= 1;
          try {
            return e(t);
          } finally {
            0 === (Tl = n) && Qa();
          }
        }
        function os(e, t) {
          var n = Tl;
          (Tl &= -2), (Tl |= 8);
          try {
            return e(t);
          } finally {
            0 === (Tl = n) && Qa();
          }
        }
        function is(e, t) {
          (e.finishedWork = null), (e.finishedExpirationTime = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), xn(n)), null !== Ol))
            for (n = Ol.return; null !== n; ) {
              var r = n;
              switch (r.tag) {
                case 1:
                  null != (r = r.type.childContextTypes) && va();
                  break;
                case 3:
                  Do(), ua(ma), ua(pa);
                  break;
                case 5:
                  Mo(r);
                  break;
                case 4:
                  Do();
                  break;
                case 13:
                case 19:
                  ua(Fo);
                  break;
                case 10:
                  no(r);
              }
              n = n.return;
            }
          (Sl = e),
            (Ol = Ps(e.current, null)),
            (Pl = t),
            (Al = kl),
            (jl = null),
            (Ll = Il = 1073741823),
            (Dl = null),
            (Rl = 0),
            (Ml = !1);
        }
        function ls(e, t) {
          for (;;) {
            try {
              if ((to(), (Bo.current = vi), Qo))
                for (var n = Wo.memoizedState; null !== n; ) {
                  var r = n.queue;
                  null !== r && (r.pending = null), (n = n.next);
                }
              if (
                ((Ho = 0),
                (qo = Vo = Wo = null),
                (Qo = !1),
                null === Ol || null === Ol.return)
              )
                return (Al = 1), (jl = t), (Ol = null);
              e: {
                var a = e,
                  o = Ol.return,
                  i = Ol,
                  l = t;
                if (
                  ((t = Pl),
                  (i.effectTag |= 2048),
                  (i.firstEffect = i.lastEffect = null),
                  null !== l &&
                    "object" == typeof l &&
                    "function" == typeof l.then)
                ) {
                  var s = l;
                  if (0 == (2 & i.mode)) {
                    var c = i.alternate;
                    c
                      ? ((i.updateQueue = c.updateQueue),
                        (i.memoizedState = c.memoizedState),
                        (i.expirationTime = c.expirationTime))
                      : ((i.updateQueue = null), (i.memoizedState = null));
                  }
                  var u = 0 != (1 & Fo.current),
                    d = o;
                  do {
                    var f;
                    if ((f = 13 === d.tag)) {
                      var p = d.memoizedState;
                      if (null !== p) f = null !== p.dehydrated;
                      else {
                        var m = d.memoizedProps;
                        f =
                          void 0 !== m.fallback &&
                          (!0 !== m.unstable_avoidThisFallback || !u);
                      }
                    }
                    if (f) {
                      var h = d.updateQueue;
                      if (null === h) {
                        var g = new Set();
                        g.add(s), (d.updateQueue = g);
                      } else h.add(s);
                      if (0 == (2 & d.mode)) {
                        if (
                          ((d.effectTag |= 64),
                          (i.effectTag &= -2981),
                          1 === i.tag)
                        )
                          if (null === i.alternate) i.tag = 17;
                          else {
                            var b = co(1073741823, null);
                            (b.tag = 2), uo(i, b);
                          }
                        i.expirationTime = 1073741823;
                        break e;
                      }
                      (l = void 0), (i = t);
                      var v = a.pingCache;
                      if (
                        (null === v
                          ? ((v = a.pingCache = new bl()),
                            (l = new Set()),
                            v.set(s, l))
                          : void 0 === (l = v.get(s)) &&
                            ((l = new Set()), v.set(s, l)),
                        !l.has(i))
                      ) {
                        l.add(i);
                        var y = _s.bind(null, a, s, i);
                        s.then(y, y);
                      }
                      (d.effectTag |= 4096), (d.expirationTime = t);
                      break e;
                    }
                    d = d.return;
                  } while (null !== d);
                  l = Error(
                    (ge(i.type) || "A React component") +
                      " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." +
                      be(i)
                  );
                }
                5 !== Al && (Al = 2), (l = el(l, i)), (d = o);
                do {
                  switch (d.tag) {
                    case 3:
                      (s = l),
                        (d.effectTag |= 4096),
                        (d.expirationTime = t),
                        fo(d, vl(d, s, t));
                      break e;
                    case 1:
                      s = l;
                      var E = d.type,
                        w = d.stateNode;
                      if (
                        0 == (64 & d.effectTag) &&
                        ("function" == typeof E.getDerivedStateFromError ||
                          (null !== w &&
                            "function" == typeof w.componentDidCatch &&
                            (null === Ul || !Ul.has(w))))
                      ) {
                        (d.effectTag |= 4096),
                          (d.expirationTime = t),
                          fo(d, yl(d, s, t));
                        break e;
                      }
                  }
                  d = d.return;
                } while (null !== d);
              }
              Ol = ms(Ol);
            } catch (e) {
              t = e;
              continue;
            }
            break;
          }
        }
        function ss() {
          var e = xl.current;
          return (xl.current = vi), null === e ? vi : e;
        }
        function cs(e, t) {
          e < Il && 2 < e && (Il = e),
            null !== t && e < Ll && 2 < e && ((Ll = e), (Dl = t));
        }
        function us(e) {
          e > Rl && (Rl = e);
        }
        function ds() {
          for (; null !== Ol; ) Ol = ps(Ol);
        }
        function fs() {
          for (; null !== Ol && !Da(); ) Ol = ps(Ol);
        }
        function ps(e) {
          var t = El(e.alternate, e, Pl);
          return (
            (e.memoizedProps = e.pendingProps),
            null === t && (t = ms(e)),
            (_l.current = null),
            t
          );
        }
        function ms(e) {
          Ol = e;
          do {
            var t = Ol.alternate;
            if (((e = Ol.return), 0 == (2048 & Ol.effectTag))) {
              if (
                ((t = Xi(t, Ol, Pl)), 1 === Pl || 1 !== Ol.childExpirationTime)
              ) {
                for (var n = 0, r = Ol.child; null !== r; ) {
                  var a = r.expirationTime,
                    o = r.childExpirationTime;
                  a > n && (n = a), o > n && (n = o), (r = r.sibling);
                }
                Ol.childExpirationTime = n;
              }
              if (null !== t) return t;
              null !== e &&
                0 == (2048 & e.effectTag) &&
                (null === e.firstEffect && (e.firstEffect = Ol.firstEffect),
                null !== Ol.lastEffect &&
                  (null !== e.lastEffect &&
                    (e.lastEffect.nextEffect = Ol.firstEffect),
                  (e.lastEffect = Ol.lastEffect)),
                1 < Ol.effectTag &&
                  (null !== e.lastEffect
                    ? (e.lastEffect.nextEffect = Ol)
                    : (e.firstEffect = Ol),
                  (e.lastEffect = Ol)));
            } else {
              if (null !== (t = Ji(Ol))) return (t.effectTag &= 2047), t;
              null !== e &&
                ((e.firstEffect = e.lastEffect = null), (e.effectTag |= 2048));
            }
            if (null !== (t = Ol.sibling)) return t;
            Ol = e;
          } while (null !== Ol);
          return Al === kl && (Al = 5), null;
        }
        function hs(e) {
          var t = e.expirationTime;
          return t > (e = e.childExpirationTime) ? t : e;
        }
        function gs(e) {
          var t = Ua();
          return Wa(99, bs.bind(null, e, t)), null;
        }
        function bs(e, t) {
          do {
            ys();
          } while (null !== Wl);
          if (0 != (48 & Tl)) throw Error(i(327));
          var n = e.finishedWork,
            r = e.finishedExpirationTime;
          if (null === n) return null;
          if (
            ((e.finishedWork = null),
            (e.finishedExpirationTime = 0),
            n === e.current)
          )
            throw Error(i(177));
          (e.callbackNode = null),
            (e.callbackExpirationTime = 0),
            (e.callbackPriority = 90),
            (e.nextKnownPendingLevel = 0);
          var a = hs(n);
          if (
            ((e.firstPendingTime = a),
            r <= e.lastSuspendedTime
              ? (e.firstSuspendedTime =
                  e.lastSuspendedTime =
                  e.nextKnownPendingLevel =
                    0)
              : r <= e.firstSuspendedTime && (e.firstSuspendedTime = r - 1),
            r <= e.lastPingedTime && (e.lastPingedTime = 0),
            r <= e.lastExpiredTime && (e.lastExpiredTime = 0),
            e === Sl && ((Ol = Sl = null), (Pl = 0)),
            1 < n.effectTag
              ? null !== n.lastEffect
                ? ((n.lastEffect.nextEffect = n), (a = n.firstEffect))
                : (a = n)
              : (a = n.firstEffect),
            null !== a)
          ) {
            var o = Tl;
            (Tl |= 32), (_l.current = null), (bn = Vt);
            var l = pn();
            if (mn(l)) {
              if ("selectionStart" in l)
                var s = { start: l.selectionStart, end: l.selectionEnd };
              else
                e: {
                  var c =
                    (s = ((s = l.ownerDocument) && s.defaultView) || window)
                      .getSelection && s.getSelection();
                  if (c && 0 !== c.rangeCount) {
                    s = c.anchorNode;
                    var u = c.anchorOffset,
                      d = c.focusNode;
                    c = c.focusOffset;
                    try {
                      s.nodeType, d.nodeType;
                    } catch (e) {
                      s = null;
                      break e;
                    }
                    var f = 0,
                      p = -1,
                      m = -1,
                      h = 0,
                      g = 0,
                      b = l,
                      v = null;
                    t: for (;;) {
                      for (
                        var y;
                        b !== s || (0 !== u && 3 !== b.nodeType) || (p = f + u),
                          b !== d ||
                            (0 !== c && 3 !== b.nodeType) ||
                            (m = f + c),
                          3 === b.nodeType && (f += b.nodeValue.length),
                          null !== (y = b.firstChild);

                      )
                        (v = b), (b = y);
                      for (;;) {
                        if (b === l) break t;
                        if (
                          (v === s && ++h === u && (p = f),
                          v === d && ++g === c && (m = f),
                          null !== (y = b.nextSibling))
                        )
                          break;
                        v = (b = v).parentNode;
                      }
                      b = y;
                    }
                    s = -1 === p || -1 === m ? null : { start: p, end: m };
                  } else s = null;
                }
              s = s || { start: 0, end: 0 };
            } else s = null;
            (vn = {
              activeElementDetached: null,
              focusedElem: l,
              selectionRange: s,
            }),
              (Vt = !1),
              (zl = a);
            do {
              try {
                vs();
              } catch (e) {
                if (null === zl) throw Error(i(330));
                xs(zl, e), (zl = zl.nextEffect);
              }
            } while (null !== zl);
            zl = a;
            do {
              try {
                for (l = e, s = t; null !== zl; ) {
                  var E = zl.effectTag;
                  if ((16 & E && ze(zl.stateNode, ""), 128 & E)) {
                    var w = zl.alternate;
                    if (null !== w) {
                      var x = w.ref;
                      null !== x &&
                        ("function" == typeof x ? x(null) : (x.current = null));
                    }
                  }
                  switch (1038 & E) {
                    case 2:
                      dl(zl), (zl.effectTag &= -3);
                      break;
                    case 6:
                      dl(zl), (zl.effectTag &= -3), hl(zl.alternate, zl);
                      break;
                    case 1024:
                      zl.effectTag &= -1025;
                      break;
                    case 1028:
                      (zl.effectTag &= -1025), hl(zl.alternate, zl);
                      break;
                    case 4:
                      hl(zl.alternate, zl);
                      break;
                    case 8:
                      ml(l, (u = zl), s), cl(u);
                  }
                  zl = zl.nextEffect;
                }
              } catch (e) {
                if (null === zl) throw Error(i(330));
                xs(zl, e), (zl = zl.nextEffect);
              }
            } while (null !== zl);
            if (
              ((x = vn),
              (w = pn()),
              (E = x.focusedElem),
              (s = x.selectionRange),
              w !== E &&
                E &&
                E.ownerDocument &&
                fn(E.ownerDocument.documentElement, E))
            ) {
              null !== s &&
                mn(E) &&
                ((w = s.start),
                void 0 === (x = s.end) && (x = w),
                "selectionStart" in E
                  ? ((E.selectionStart = w),
                    (E.selectionEnd = Math.min(x, E.value.length)))
                  : (x =
                      ((w = E.ownerDocument || document) && w.defaultView) ||
                      window).getSelection &&
                    ((x = x.getSelection()),
                    (u = E.textContent.length),
                    (l = Math.min(s.start, u)),
                    (s = void 0 === s.end ? l : Math.min(s.end, u)),
                    !x.extend && l > s && ((u = s), (s = l), (l = u)),
                    (u = dn(E, l)),
                    (d = dn(E, s)),
                    u &&
                      d &&
                      (1 !== x.rangeCount ||
                        x.anchorNode !== u.node ||
                        x.anchorOffset !== u.offset ||
                        x.focusNode !== d.node ||
                        x.focusOffset !== d.offset) &&
                      ((w = w.createRange()).setStart(u.node, u.offset),
                      x.removeAllRanges(),
                      l > s
                        ? (x.addRange(w), x.extend(d.node, d.offset))
                        : (w.setEnd(d.node, d.offset), x.addRange(w))))),
                (w = []);
              for (x = E; (x = x.parentNode); )
                1 === x.nodeType &&
                  w.push({ element: x, left: x.scrollLeft, top: x.scrollTop });
              for (
                "function" == typeof E.focus && E.focus(), E = 0;
                E < w.length;
                E++
              )
                ((x = w[E]).element.scrollLeft = x.left),
                  (x.element.scrollTop = x.top);
            }
            (Vt = !!bn), (vn = bn = null), (e.current = n), (zl = a);
            do {
              try {
                for (E = e; null !== zl; ) {
                  var _ = zl.effectTag;
                  if ((36 & _ && ll(E, zl.alternate, zl), 128 & _)) {
                    w = void 0;
                    var k = zl.ref;
                    if (null !== k) {
                      var N = zl.stateNode;
                      zl.tag,
                        (w = N),
                        "function" == typeof k ? k(w) : (k.current = w);
                    }
                  }
                  zl = zl.nextEffect;
                }
              } catch (e) {
                if (null === zl) throw Error(i(330));
                xs(zl, e), (zl = zl.nextEffect);
              }
            } while (null !== zl);
            (zl = null), Ra(), (Tl = o);
          } else e.current = n;
          if (Hl) (Hl = !1), (Wl = e), (Vl = t);
          else
            for (zl = a; null !== zl; )
              (t = zl.nextEffect), (zl.nextEffect = null), (zl = t);
          if (
            (0 === (t = e.firstPendingTime) && (Ul = null),
            1073741823 === t
              ? e === Kl
                ? Ql++
                : ((Ql = 0), (Kl = e))
              : (Ql = 0),
            "function" == typeof Ns && Ns(n.stateNode, r),
            ts(e),
            $l)
          )
            throw (($l = !1), (e = Bl), (Bl = null), e);
          return 0 != (8 & Tl) || Qa(), null;
        }
        function vs() {
          for (; null !== zl; ) {
            var e = zl.effectTag;
            0 != (256 & e) && al(zl.alternate, zl),
              0 == (512 & e) ||
                Hl ||
                ((Hl = !0),
                Va(97, function () {
                  return ys(), null;
                })),
              (zl = zl.nextEffect);
          }
        }
        function ys() {
          if (90 !== Vl) {
            var e = 97 < Vl ? 97 : Vl;
            return (Vl = 90), Wa(e, Es);
          }
        }
        function Es() {
          if (null === Wl) return !1;
          var e = Wl;
          if (((Wl = null), 0 != (48 & Tl))) throw Error(i(331));
          var t = Tl;
          for (Tl |= 32, e = e.current.firstEffect; null !== e; ) {
            try {
              var n = e;
              if (0 != (512 & n.effectTag))
                switch (n.tag) {
                  case 0:
                  case 11:
                  case 15:
                  case 22:
                    ol(5, n), il(5, n);
                }
            } catch (t) {
              if (null === e) throw Error(i(330));
              xs(e, t);
            }
            (n = e.nextEffect), (e.nextEffect = null), (e = n);
          }
          return (Tl = t), Qa(), !0;
        }
        function ws(e, t, n) {
          uo(e, (t = vl(e, (t = el(n, t)), 1073741823))),
            null !== (e = Jl(e, 1073741823)) && ts(e);
        }
        function xs(e, t) {
          if (3 === e.tag) ws(e, e, t);
          else
            for (var n = e.return; null !== n; ) {
              if (3 === n.tag) {
                ws(n, e, t);
                break;
              }
              if (1 === n.tag) {
                var r = n.stateNode;
                if (
                  "function" == typeof n.type.getDerivedStateFromError ||
                  ("function" == typeof r.componentDidCatch &&
                    (null === Ul || !Ul.has(r)))
                ) {
                  uo(n, (e = yl(n, (e = el(t, e)), 1073741823))),
                    null !== (n = Jl(n, 1073741823)) && ts(n);
                  break;
                }
              }
              n = n.return;
            }
        }
        function _s(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            Sl === e && Pl === n
              ? Al === Cl || (Al === Nl && 1073741823 === Il && Ba() - Fl < 500)
                ? is(e, Pl)
                : (Ml = !0)
              : Rs(e, n) &&
                ((0 !== (t = e.lastPingedTime) && t < n) ||
                  ((e.lastPingedTime = n), ts(e)));
        }
        function ks(e, t) {
          var n = e.stateNode;
          null !== n && n.delete(t),
            0 == (t = 0) && (t = Yl((t = Gl()), e, null)),
            null !== (e = Jl(e, t)) && ts(e);
        }
        El = function (e, t, n) {
          var r = t.expirationTime;
          if (null !== e) {
            var a = t.pendingProps;
            if (e.memoizedProps !== a || ma.current) ji = !0;
            else {
              if (r < n) {
                switch (((ji = !1), t.tag)) {
                  case 3:
                    Bi(t), Pi();
                    break;
                  case 5:
                    if ((Ro(t), 4 & t.mode && 1 !== n && a.hidden))
                      return (
                        (t.expirationTime = t.childExpirationTime = 1), null
                      );
                    break;
                  case 1:
                    ba(t.type) && wa(t);
                    break;
                  case 4:
                    Lo(t, t.stateNode.containerInfo);
                    break;
                  case 10:
                    (r = t.memoizedProps.value),
                      (a = t.type._context),
                      da(Ya, a._currentValue),
                      (a._currentValue = r);
                    break;
                  case 13:
                    if (null !== t.memoizedState)
                      return 0 !== (r = t.child.childExpirationTime) && r >= n
                        ? qi(e, t, n)
                        : (da(Fo, 1 & Fo.current),
                          null !== (t = Gi(e, t, n)) ? t.sibling : null);
                    da(Fo, 1 & Fo.current);
                    break;
                  case 19:
                    if (
                      ((r = t.childExpirationTime >= n),
                      0 != (64 & e.effectTag))
                    ) {
                      if (r) return Zi(e, t, n);
                      t.effectTag |= 64;
                    }
                    if (
                      (null !== (a = t.memoizedState) &&
                        ((a.rendering = null), (a.tail = null)),
                      da(Fo, Fo.current),
                      !r)
                    )
                      return null;
                }
                return Gi(e, t, n);
              }
              ji = !1;
            }
          } else ji = !1;
          switch (((t.expirationTime = 0), t.tag)) {
            case 2:
              if (
                ((r = t.type),
                null !== e &&
                  ((e.alternate = null),
                  (t.alternate = null),
                  (t.effectTag |= 2)),
                (e = t.pendingProps),
                (a = ga(t, pa.current)),
                ao(t, n),
                (a = Go(null, t, r, e, a, n)),
                (t.effectTag |= 1),
                "object" == typeof a &&
                  null !== a &&
                  "function" == typeof a.render &&
                  void 0 === a.$$typeof)
              ) {
                if (
                  ((t.tag = 1),
                  (t.memoizedState = null),
                  (t.updateQueue = null),
                  ba(r))
                ) {
                  var o = !0;
                  wa(t);
                } else o = !1;
                (t.memoizedState =
                  null !== a.state && void 0 !== a.state ? a.state : null),
                  lo(t);
                var l = r.getDerivedStateFromProps;
                "function" == typeof l && bo(t, r, l, e),
                  (a.updater = vo),
                  (t.stateNode = a),
                  (a._reactInternalFiber = t),
                  xo(t, r, e, n),
                  (t = $i(null, t, r, !0, o, n));
              } else (t.tag = 0), Ii(null, t, a, n), (t = t.child);
              return t;
            case 16:
              e: {
                if (
                  ((a = t.elementType),
                  null !== e &&
                    ((e.alternate = null),
                    (t.alternate = null),
                    (t.effectTag |= 2)),
                  (e = t.pendingProps),
                  (function (e) {
                    if (-1 === e._status) {
                      e._status = 0;
                      var t = e._ctor;
                      (t = t()),
                        (e._result = t),
                        t.then(
                          function (t) {
                            0 === e._status &&
                              ((t = t.default),
                              (e._status = 1),
                              (e._result = t));
                          },
                          function (t) {
                            0 === e._status &&
                              ((e._status = 2), (e._result = t));
                          }
                        );
                    }
                  })(a),
                  1 !== a._status)
                )
                  throw a._result;
                switch (
                  ((a = a._result),
                  (t.type = a),
                  (o = t.tag =
                    (function (e) {
                      if ("function" == typeof e) return Os(e) ? 1 : 0;
                      if (null != e) {
                        if ((e = e.$$typeof) === se) return 11;
                        if (e === de) return 14;
                      }
                      return 2;
                    })(a)),
                  (e = Ga(a, e)),
                  o)
                ) {
                  case 0:
                    t = Fi(null, t, a, e, n);
                    break e;
                  case 1:
                    t = zi(null, t, a, e, n);
                    break e;
                  case 11:
                    t = Li(null, t, a, e, n);
                    break e;
                  case 14:
                    t = Di(null, t, a, Ga(a.type, e), r, n);
                    break e;
                }
                throw Error(i(306, a, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Fi(e, t, r, (a = t.elementType === r ? a : Ga(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                zi(e, t, r, (a = t.elementType === r ? a : Ga(r, a)), n)
              );
            case 3:
              if ((Bi(t), (r = t.updateQueue), null === e || null === r))
                throw Error(i(282));
              if (
                ((r = t.pendingProps),
                (a = null !== (a = t.memoizedState) ? a.element : null),
                so(e, t),
                po(t, r, null, n),
                (r = t.memoizedState.element) === a)
              )
                Pi(), (t = Gi(e, t, n));
              else {
                if (
                  ((a = t.stateNode.hydrate) &&
                    ((_i = _n(t.stateNode.containerInfo.firstChild)),
                    (xi = t),
                    (a = ki = !0)),
                  a)
                )
                  for (n = So(t, null, r, n), t.child = n; n; )
                    (n.effectTag = (-3 & n.effectTag) | 1024), (n = n.sibling);
                else Ii(e, t, r, n), Pi();
                t = t.child;
              }
              return t;
            case 5:
              return (
                Ro(t),
                null === e && Ti(t),
                (r = t.type),
                (a = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (l = a.children),
                En(r, a)
                  ? (l = null)
                  : null !== o && En(r, o) && (t.effectTag |= 16),
                Mi(e, t),
                4 & t.mode && 1 !== n && a.hidden
                  ? ((t.expirationTime = t.childExpirationTime = 1), (t = null))
                  : (Ii(e, t, l, n), (t = t.child)),
                t
              );
            case 6:
              return null === e && Ti(t), null;
            case 13:
              return qi(e, t, n);
            case 4:
              return (
                Lo(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = To(t, null, r, n)) : Ii(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Li(e, t, r, (a = t.elementType === r ? a : Ga(r, a)), n)
              );
            case 7:
              return Ii(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return Ii(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                (r = t.type._context),
                  (a = t.pendingProps),
                  (l = t.memoizedProps),
                  (o = a.value);
                var s = t.type._context;
                if (
                  (da(Ya, s._currentValue), (s._currentValue = o), null !== l)
                )
                  if (
                    ((s = l.value),
                    0 ==
                      (o = zr(s, o)
                        ? 0
                        : 0 |
                          ("function" == typeof r._calculateChangedBits
                            ? r._calculateChangedBits(s, o)
                            : 1073741823)))
                  ) {
                    if (l.children === a.children && !ma.current) {
                      t = Gi(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (s = t.child) && (s.return = t);
                      null !== s;

                    ) {
                      var c = s.dependencies;
                      if (null !== c) {
                        l = s.child;
                        for (var u = c.firstContext; null !== u; ) {
                          if (u.context === r && 0 != (u.observedBits & o)) {
                            1 === s.tag &&
                              (((u = co(n, null)).tag = 2), uo(s, u)),
                              s.expirationTime < n && (s.expirationTime = n),
                              null !== (u = s.alternate) &&
                                u.expirationTime < n &&
                                (u.expirationTime = n),
                              ro(s.return, n),
                              c.expirationTime < n && (c.expirationTime = n);
                            break;
                          }
                          u = u.next;
                        }
                      } else
                        l = 10 === s.tag && s.type === t.type ? null : s.child;
                      if (null !== l) l.return = s;
                      else
                        for (l = s; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (s = l.sibling)) {
                            (s.return = l.return), (l = s);
                            break;
                          }
                          l = l.return;
                        }
                      s = l;
                    }
                Ii(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = (o = t.pendingProps).children),
                ao(t, n),
                (r = r((a = oo(a, o.unstable_observedBits)))),
                (t.effectTag |= 1),
                Ii(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (o = Ga((a = t.type), t.pendingProps)),
                Di(e, t, a, (o = Ga(a.type, o)), r, n)
              );
            case 15:
              return Ri(e, t, t.type, t.pendingProps, r, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : Ga(r, a)),
                null !== e &&
                  ((e.alternate = null),
                  (t.alternate = null),
                  (t.effectTag |= 2)),
                (t.tag = 1),
                ba(r) ? ((e = !0), wa(t)) : (e = !1),
                ao(t, n),
                Eo(t, r, a),
                xo(t, r, a, n),
                $i(null, t, r, !0, e, n)
              );
            case 19:
              return Zi(e, t, n);
          }
          throw Error(i(156, t.tag));
        };
        var Ns = null,
          Cs = null;
        function Ts(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.effectTag = 0),
            (this.lastEffect = this.firstEffect = this.nextEffect = null),
            (this.childExpirationTime = this.expirationTime = 0),
            (this.alternate = null);
        }
        function Ss(e, t, n, r) {
          return new Ts(e, t, n, r);
        }
        function Os(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ps(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Ss(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.effectTag = 0),
                (n.nextEffect = null),
                (n.firstEffect = null),
                (n.lastEffect = null)),
            (n.childExpirationTime = e.childExpirationTime),
            (n.expirationTime = e.expirationTime),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : {
                    expirationTime: t.expirationTime,
                    firstContext: t.firstContext,
                    responders: t.responders,
                  }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function As(e, t, n, r, a, o) {
          var l = 2;
          if (((r = e), "function" == typeof e)) Os(e) && (l = 1);
          else if ("string" == typeof e) l = 5;
          else
            e: switch (e) {
              case ne:
                return js(n.children, a, o, t);
              case le:
                (l = 8), (a |= 7);
                break;
              case re:
                (l = 8), (a |= 1);
                break;
              case ae:
                return (
                  ((e = Ss(12, n, t, 8 | a)).elementType = ae),
                  (e.type = ae),
                  (e.expirationTime = o),
                  e
                );
              case ce:
                return (
                  ((e = Ss(13, n, t, a)).type = ce),
                  (e.elementType = ce),
                  (e.expirationTime = o),
                  e
                );
              case ue:
                return (
                  ((e = Ss(19, n, t, a)).elementType = ue),
                  (e.expirationTime = o),
                  e
                );
              default:
                if ("object" == typeof e && null !== e)
                  switch (e.$$typeof) {
                    case oe:
                      l = 10;
                      break e;
                    case ie:
                      l = 9;
                      break e;
                    case se:
                      l = 11;
                      break e;
                    case de:
                      l = 14;
                      break e;
                    case fe:
                      (l = 16), (r = null);
                      break e;
                    case pe:
                      l = 22;
                      break e;
                  }
                throw Error(i(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Ss(l, n, t, a)).elementType = e),
            (t.type = r),
            (t.expirationTime = o),
            t
          );
        }
        function js(e, t, n, r) {
          return ((e = Ss(7, e, r, t)).expirationTime = n), e;
        }
        function Is(e, t, n) {
          return ((e = Ss(6, e, null, t)).expirationTime = n), e;
        }
        function Ls(e, t, n) {
          return (
            ((t = Ss(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).expirationTime = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Ds(e, t, n) {
          (this.tag = t),
            (this.current = null),
            (this.containerInfo = e),
            (this.pingCache = this.pendingChildren = null),
            (this.finishedExpirationTime = 0),
            (this.finishedWork = null),
            (this.timeoutHandle = -1),
            (this.pendingContext = this.context = null),
            (this.hydrate = n),
            (this.callbackNode = null),
            (this.callbackPriority = 90),
            (this.lastExpiredTime =
              this.lastPingedTime =
              this.nextKnownPendingLevel =
              this.lastSuspendedTime =
              this.firstSuspendedTime =
              this.firstPendingTime =
                0);
        }
        function Rs(e, t) {
          var n = e.firstSuspendedTime;
          return (e = e.lastSuspendedTime), 0 !== n && n >= t && e <= t;
        }
        function Ms(e, t) {
          var n = e.firstSuspendedTime,
            r = e.lastSuspendedTime;
          n < t && (e.firstSuspendedTime = t),
            (r > t || 0 === n) && (e.lastSuspendedTime = t),
            t <= e.lastPingedTime && (e.lastPingedTime = 0),
            t <= e.lastExpiredTime && (e.lastExpiredTime = 0);
        }
        function Fs(e, t) {
          t > e.firstPendingTime && (e.firstPendingTime = t);
          var n = e.firstSuspendedTime;
          0 !== n &&
            (t >= n
              ? (e.firstSuspendedTime =
                  e.lastSuspendedTime =
                  e.nextKnownPendingLevel =
                    0)
              : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1),
            t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t));
        }
        function zs(e, t) {
          var n = e.lastExpiredTime;
          (0 === n || n > t) && (e.lastExpiredTime = t);
        }
        function $s(e, t, n, r) {
          var a = t.current,
            o = Gl(),
            l = ho.suspense;
          o = Yl(o, a, l);
          e: if (n) {
            t: {
              if (Xe((n = n._reactInternalFiber)) !== n || 1 !== n.tag)
                throw Error(i(170));
              var s = n;
              do {
                switch (s.tag) {
                  case 3:
                    s = s.stateNode.context;
                    break t;
                  case 1:
                    if (ba(s.type)) {
                      s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                      break t;
                    }
                }
                s = s.return;
              } while (null !== s);
              throw Error(i(171));
            }
            if (1 === n.tag) {
              var c = n.type;
              if (ba(c)) {
                n = Ea(n, c, s);
                break e;
              }
            }
            n = s;
          } else n = fa;
          return (
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = co(o, l)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            uo(a, t),
            Xl(a, o),
            o
          );
        }
        function Bs(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Us(e, t) {
          null !== (e = e.memoizedState) &&
            null !== e.dehydrated &&
            e.retryTime < t &&
            (e.retryTime = t);
        }
        function Hs(e, t) {
          Us(e, t), (e = e.alternate) && Us(e, t);
        }
        function Ws(e, t, n) {
          var r = new Ds(e, t, (n = null != n && !0 === n.hydrate)),
            a = Ss(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
          (r.current = a),
            (a.stateNode = r),
            lo(a),
            (e[Sn] = r.current),
            n &&
              0 !== t &&
              (function (e, t) {
                var n = Ye(t);
                Nt.forEach(function (e) {
                  pt(e, t, n);
                }),
                  Ct.forEach(function (e) {
                    pt(e, t, n);
                  });
              })(0, 9 === e.nodeType ? e : e.ownerDocument),
            (this._internalRoot = r);
        }
        function Vs(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function qs(e, t, n, r, a) {
          var o = n._reactRootContainer;
          if (o) {
            var i = o._internalRoot;
            if ("function" == typeof a) {
              var l = a;
              a = function () {
                var e = Bs(i);
                l.call(e);
              };
            }
            $s(t, i, e, a);
          } else {
            if (
              ((o = n._reactRootContainer =
                (function (e, t) {
                  if (
                    (t ||
                      (t = !(
                        !(t = e
                          ? 9 === e.nodeType
                            ? e.documentElement
                            : e.firstChild
                          : null) ||
                        1 !== t.nodeType ||
                        !t.hasAttribute("data-reactroot")
                      )),
                    !t)
                  )
                    for (var n; (n = e.lastChild); ) e.removeChild(n);
                  return new Ws(e, 0, t ? { hydrate: !0 } : void 0);
                })(n, r)),
              (i = o._internalRoot),
              "function" == typeof a)
            ) {
              var s = a;
              a = function () {
                var e = Bs(i);
                s.call(e);
              };
            }
            os(function () {
              $s(t, i, e, a);
            });
          }
          return Bs(i);
        }
        function Qs(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: te,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function Ks(e, t) {
          var n =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null;
          if (!Vs(t)) throw Error(i(200));
          return Qs(e, t, null, n);
        }
        (Ws.prototype.render = function (e) {
          $s(e, this._internalRoot, null, null);
        }),
          (Ws.prototype.unmount = function () {
            var e = this._internalRoot,
              t = e.containerInfo;
            $s(null, e, null, function () {
              t[Sn] = null;
            });
          }),
          (mt = function (e) {
            if (13 === e.tag) {
              var t = Za(Gl(), 150, 100);
              Xl(e, t), Hs(e, t);
            }
          }),
          (ht = function (e) {
            13 === e.tag && (Xl(e, 3), Hs(e, 3));
          }),
          (gt = function (e) {
            if (13 === e.tag) {
              var t = Gl();
              Xl(e, (t = Yl(t, e, null))), Hs(e, t);
            }
          }),
          (S = function (e, t, n) {
            switch (t) {
              case "input":
                if ((Ne(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = jn(r);
                      if (!a) throw Error(i(90));
                      we(r), Ne(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                je(e, n);
                break;
              case "select":
                null != (t = n.value) && Oe(e, !!n.multiple, t, !1);
            }
          }),
          (L = as),
          (D = function (e, t, n, r, a) {
            var o = Tl;
            Tl |= 4;
            try {
              return Wa(98, e.bind(null, t, n, r, a));
            } finally {
              0 === (Tl = o) && Qa();
            }
          }),
          (R = function () {
            0 == (49 & Tl) &&
              ((function () {
                if (null !== ql) {
                  var e = ql;
                  (ql = null),
                    e.forEach(function (e, t) {
                      zs(t, e), ts(t);
                    }),
                    Qa();
                }
              })(),
              ys());
          }),
          (M = function (e, t) {
            var n = Tl;
            Tl |= 2;
            try {
              return e(t);
            } finally {
              0 === (Tl = n) && Qa();
            }
          });
        var Zs = {
          Events: [
            Pn,
            An,
            jn,
            C,
            _,
            zn,
            function (e) {
              rt(e, Fn);
            },
            j,
            I,
            Gt,
            it,
            ys,
            { current: !1 },
          ],
        };
        !(function (e) {
          var t = e.findFiberByHostInstance;
          !(function (e) {
            if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
            var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (t.isDisabled || !t.supportsFiber) return !0;
            try {
              var n = t.inject(e);
              (Ns = function (e) {
                try {
                  t.onCommitFiberRoot(
                    n,
                    e,
                    void 0,
                    64 == (64 & e.current.effectTag)
                  );
                } catch (e) {}
              }),
                (Cs = function (e) {
                  try {
                    t.onCommitFiberUnmount(n, e);
                  } catch (e) {}
                });
            } catch (e) {}
          })(
            a({}, e, {
              overrideHookState: null,
              overrideProps: null,
              setSuspenseHandler: null,
              scheduleUpdate: null,
              currentDispatcherRef: G.ReactCurrentDispatcher,
              findHostInstanceByFiber: function (e) {
                return null === (e = tt(e)) ? null : e.stateNode;
              },
              findFiberByHostInstance: function (e) {
                return t ? t(e) : null;
              },
              findHostInstancesForRefresh: null,
              scheduleRefresh: null,
              scheduleRoot: null,
              setRefreshHandler: null,
              getCurrentFiber: null,
            })
          );
        })({
          findFiberByHostInstance: On,
          bundleType: 0,
          version: "16.14.0",
          rendererPackageName: "react-dom",
        }),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zs),
          (t.createPortal = Ks),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternalFiber;
            if (void 0 === t) {
              if ("function" == typeof e.render) throw Error(i(188));
              throw Error(i(268, Object.keys(e)));
            }
            return null === (e = tt(t)) ? null : e.stateNode;
          }),
          (t.flushSync = function (e, t) {
            if (0 != (48 & Tl)) throw Error(i(187));
            var n = Tl;
            Tl |= 1;
            try {
              return Wa(99, e.bind(null, t));
            } finally {
              (Tl = n), Qa();
            }
          }),
          (t.hydrate = function (e, t, n) {
            if (!Vs(t)) throw Error(i(200));
            return qs(null, e, t, !0, n);
          }),
          (t.render = function (e, t, n) {
            if (!Vs(t)) throw Error(i(200));
            return qs(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Vs(e)) throw Error(i(40));
            return (
              !!e._reactRootContainer &&
              (os(function () {
                qs(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[Sn] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = as),
          (t.unstable_createPortal = function (e, t) {
            return Ks(
              e,
              t,
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null
            );
          }),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Vs(n)) throw Error(i(200));
            if (null == e || void 0 === e._reactInternalFiber)
              throw Error(i(38));
            return qs(e, t, n, !1, r);
          }),
          (t.version = "16.14.0");
      },
      935: (e, t, n) => {
        "use strict";
        !(function e() {
          if (
            "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (e) {
              console.error(e);
            }
        })(),
          (e.exports = n(448));
      },
      251: (e, t, n) => {
        "use strict";
        var r = n(294),
          a = 60103;
        if (((t.Fragment = 60107), "function" == typeof Symbol && Symbol.for)) {
          var o = Symbol.for;
          (a = o("react.element")), (t.Fragment = o("react.fragment"));
        }
        var i =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          l = Object.prototype.hasOwnProperty,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function c(e, t, n) {
          var r,
            o = {},
            c = null,
            u = null;
          for (r in (void 0 !== n && (c = "" + n),
          void 0 !== t.key && (c = "" + t.key),
          void 0 !== t.ref && (u = t.ref),
          t))
            l.call(t, r) && !s.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: c,
            ref: u,
            props: o,
            _owner: i.current,
          };
        }
        (t.jsx = c), (t.jsxs = c);
      },
      408: (e, t, n) => {
        "use strict";
        var r = n(418),
          a = "function" == typeof Symbol && Symbol.for,
          o = a ? Symbol.for("react.element") : 60103,
          i = a ? Symbol.for("react.portal") : 60106,
          l = a ? Symbol.for("react.fragment") : 60107,
          s = a ? Symbol.for("react.strict_mode") : 60108,
          c = a ? Symbol.for("react.profiler") : 60114,
          u = a ? Symbol.for("react.provider") : 60109,
          d = a ? Symbol.for("react.context") : 60110,
          f = a ? Symbol.for("react.forward_ref") : 60112,
          p = a ? Symbol.for("react.suspense") : 60113,
          m = a ? Symbol.for("react.memo") : 60115,
          h = a ? Symbol.for("react.lazy") : 60116,
          g = "function" == typeof Symbol && Symbol.iterator;
        function b(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var v = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          y = {};
        function E(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = y),
            (this.updater = n || v);
        }
        function w() {}
        function x(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = y),
            (this.updater = n || v);
        }
        (E.prototype.isReactComponent = {}),
          (E.prototype.setState = function (e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e)
              throw Error(b(85));
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (E.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (w.prototype = E.prototype);
        var _ = (x.prototype = new w());
        (_.constructor = x), r(_, E.prototype), (_.isPureReactComponent = !0);
        var k = { current: null },
          N = Object.prototype.hasOwnProperty,
          C = { key: !0, ref: !0, __self: !0, __source: !0 };
        function T(e, t, n) {
          var r,
            a = {},
            i = null,
            l = null;
          if (null != t)
            for (r in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              N.call(t, r) && !C.hasOwnProperty(r) && (a[r] = t[r]);
          var s = arguments.length - 2;
          if (1 === s) a.children = n;
          else if (1 < s) {
            for (var c = Array(s), u = 0; u < s; u++) c[u] = arguments[u + 2];
            a.children = c;
          }
          if (e && e.defaultProps)
            for (r in (s = e.defaultProps)) void 0 === a[r] && (a[r] = s[r]);
          return {
            $$typeof: o,
            type: e,
            key: i,
            ref: l,
            props: a,
            _owner: k.current,
          };
        }
        function S(e) {
          return "object" == typeof e && null !== e && e.$$typeof === o;
        }
        var O = /\/+/g,
          P = [];
        function A(e, t, n, r) {
          if (P.length) {
            var a = P.pop();
            return (
              (a.result = e),
              (a.keyPrefix = t),
              (a.func = n),
              (a.context = r),
              (a.count = 0),
              a
            );
          }
          return { result: e, keyPrefix: t, func: n, context: r, count: 0 };
        }
        function j(e) {
          (e.result = null),
            (e.keyPrefix = null),
            (e.func = null),
            (e.context = null),
            (e.count = 0),
            10 > P.length && P.push(e);
        }
        function I(e, t, n, r) {
          var a = typeof e;
          ("undefined" !== a && "boolean" !== a) || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else
            switch (a) {
              case "string":
              case "number":
                l = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case o:
                  case i:
                    l = !0;
                }
            }
          if (l) return n(r, e, "" === t ? "." + D(e, 0) : t), 1;
          if (((l = 0), (t = "" === t ? "." : t + ":"), Array.isArray(e)))
            for (var s = 0; s < e.length; s++) {
              var c = t + D((a = e[s]), s);
              l += I(a, c, n, r);
            }
          else if (
            "function" ==
            typeof (c =
              null === e || "object" != typeof e
                ? null
                : "function" == typeof (c = (g && e[g]) || e["@@iterator"])
                ? c
                : null)
          )
            for (e = c.call(e), s = 0; !(a = e.next()).done; )
              l += I((a = a.value), (c = t + D(a, s++)), n, r);
          else if ("object" === a)
            throw (
              ((n = "" + e),
              Error(
                b(
                  31,
                  "[object Object]" === n
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : n,
                  ""
                )
              ))
            );
          return l;
        }
        function L(e, t, n) {
          return null == e ? 0 : I(e, "", t, n);
        }
        function D(e, t) {
          return "object" == typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  ("" + e).replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })(e.key)
            : t.toString(36);
        }
        function R(e, t) {
          e.func.call(e.context, t, e.count++);
        }
        function M(e, t, n) {
          var r = e.result,
            a = e.keyPrefix;
          (e = e.func.call(e.context, t, e.count++)),
            Array.isArray(e)
              ? F(e, r, n, function (e) {
                  return e;
                })
              : null != e &&
                (S(e) &&
                  (e = (function (e, t) {
                    return {
                      $$typeof: o,
                      type: e.type,
                      key: t,
                      ref: e.ref,
                      props: e.props,
                      _owner: e._owner,
                    };
                  })(
                    e,
                    a +
                      (!e.key || (t && t.key === e.key)
                        ? ""
                        : ("" + e.key).replace(O, "$&/") + "/") +
                      n
                  )),
                r.push(e));
        }
        function F(e, t, n, r, a) {
          var o = "";
          null != n && (o = ("" + n).replace(O, "$&/") + "/"),
            L(e, M, (t = A(t, o, r, a))),
            j(t);
        }
        var z = { current: null };
        function $() {
          var e = z.current;
          if (null === e) throw Error(b(321));
          return e;
        }
        var B = {
          ReactCurrentDispatcher: z,
          ReactCurrentBatchConfig: { suspense: null },
          ReactCurrentOwner: k,
          IsSomeRendererActing: { current: !1 },
          assign: r,
        };
        (t.Children = {
          map: function (e, t, n) {
            if (null == e) return e;
            var r = [];
            return F(e, r, null, t, n), r;
          },
          forEach: function (e, t, n) {
            if (null == e) return e;
            L(e, R, (t = A(null, null, t, n))), j(t);
          },
          count: function (e) {
            return L(
              e,
              function () {
                return null;
              },
              null
            );
          },
          toArray: function (e) {
            var t = [];
            return (
              F(e, t, null, function (e) {
                return e;
              }),
              t
            );
          },
          only: function (e) {
            if (!S(e)) throw Error(b(143));
            return e;
          },
        }),
          (t.Component = E),
          (t.Fragment = l),
          (t.Profiler = c),
          (t.PureComponent = x),
          (t.StrictMode = s),
          (t.Suspense = p),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B),
          (t.cloneElement = function (e, t, n) {
            if (null == e) throw Error(b(267, e));
            var a = r({}, e.props),
              i = e.key,
              l = e.ref,
              s = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((l = t.ref), (s = k.current)),
                void 0 !== t.key && (i = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var c = e.type.defaultProps;
              for (u in t)
                N.call(t, u) &&
                  !C.hasOwnProperty(u) &&
                  (a[u] = void 0 === t[u] && void 0 !== c ? c[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) a.children = n;
            else if (1 < u) {
              c = Array(u);
              for (var d = 0; d < u; d++) c[d] = arguments[d + 2];
              a.children = c;
            }
            return {
              $$typeof: o,
              type: e.type,
              key: i,
              ref: l,
              props: a,
              _owner: s,
            };
          }),
          (t.createContext = function (e, t) {
            return (
              void 0 === t && (t = null),
              ((e = {
                $$typeof: d,
                _calculateChangedBits: t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = { $$typeof: u, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = T),
          (t.createFactory = function (e) {
            var t = T.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: f, render: e };
          }),
          (t.isValidElement = S),
          (t.lazy = function (e) {
            return { $$typeof: h, _ctor: e, _status: -1, _result: null };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: m, type: e, compare: void 0 === t ? null : t };
          }),
          (t.useCallback = function (e, t) {
            return $().useCallback(e, t);
          }),
          (t.useContext = function (e, t) {
            return $().useContext(e, t);
          }),
          (t.useDebugValue = function () {}),
          (t.useEffect = function (e, t) {
            return $().useEffect(e, t);
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return $().useImperativeHandle(e, t, n);
          }),
          (t.useLayoutEffect = function (e, t) {
            return $().useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return $().useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return $().useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return $().useRef(e);
          }),
          (t.useState = function (e) {
            return $().useState(e);
          }),
          (t.version = "16.14.0");
      },
      294: (e, t, n) => {
        "use strict";
        e.exports = n(408);
      },
      893: (e, t, n) => {
        "use strict";
        e.exports = n(251);
      },
      53: (e, t) => {
        "use strict";
        var n, r, a, o, i;
        if (
          "undefined" == typeof window ||
          "function" != typeof MessageChannel
        ) {
          var l = null,
            s = null,
            c = function () {
              if (null !== l)
                try {
                  var e = t.unstable_now();
                  l(!0, e), (l = null);
                } catch (e) {
                  throw (setTimeout(c, 0), e);
                }
            },
            u = Date.now();
          (t.unstable_now = function () {
            return Date.now() - u;
          }),
            (n = function (e) {
              null !== l ? setTimeout(n, 0, e) : ((l = e), setTimeout(c, 0));
            }),
            (r = function (e, t) {
              s = setTimeout(e, t);
            }),
            (a = function () {
              clearTimeout(s);
            }),
            (o = function () {
              return !1;
            }),
            (i = t.unstable_forceFrameRate = function () {});
        } else {
          var d = window.performance,
            f = window.Date,
            p = window.setTimeout,
            m = window.clearTimeout;
          if ("undefined" != typeof console) {
            var h = window.cancelAnimationFrame;
            "function" != typeof window.requestAnimationFrame &&
              console.error(
                "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
              ),
              "function" != typeof h &&
                console.error(
                  "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
                );
          }
          if ("object" == typeof d && "function" == typeof d.now)
            t.unstable_now = function () {
              return d.now();
            };
          else {
            var g = f.now();
            t.unstable_now = function () {
              return f.now() - g;
            };
          }
          var b = !1,
            v = null,
            y = -1,
            E = 5,
            w = 0;
          (o = function () {
            return t.unstable_now() >= w;
          }),
            (i = function () {}),
            (t.unstable_forceFrameRate = function (e) {
              0 > e || 125 < e
                ? console.error(
                    "forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"
                  )
                : (E = 0 < e ? Math.floor(1e3 / e) : 5);
            });
          var x = new MessageChannel(),
            _ = x.port2;
          (x.port1.onmessage = function () {
            if (null !== v) {
              var e = t.unstable_now();
              w = e + E;
              try {
                v(!0, e) ? _.postMessage(null) : ((b = !1), (v = null));
              } catch (e) {
                throw (_.postMessage(null), e);
              }
            } else b = !1;
          }),
            (n = function (e) {
              (v = e), b || ((b = !0), _.postMessage(null));
            }),
            (r = function (e, n) {
              y = p(function () {
                e(t.unstable_now());
              }, n);
            }),
            (a = function () {
              m(y), (y = -1);
            });
        }
        function k(e, t) {
          var n = e.length;
          e.push(t);
          e: for (;;) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(void 0 !== a && 0 < T(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function N(e) {
          return void 0 === (e = e[0]) ? null : e;
        }
        function C(e) {
          var t = e[0];
          if (void 0 !== t) {
            var n = e.pop();
            if (n !== t) {
              e[0] = n;
              e: for (var r = 0, a = e.length; r < a; ) {
                var o = 2 * (r + 1) - 1,
                  i = e[o],
                  l = o + 1,
                  s = e[l];
                if (void 0 !== i && 0 > T(i, n))
                  void 0 !== s && 0 > T(s, i)
                    ? ((e[r] = s), (e[l] = n), (r = l))
                    : ((e[r] = i), (e[o] = n), (r = o));
                else {
                  if (!(void 0 !== s && 0 > T(s, n))) break e;
                  (e[r] = s), (e[l] = n), (r = l);
                }
              }
            }
            return t;
          }
          return null;
        }
        function T(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        var S = [],
          O = [],
          P = 1,
          A = null,
          j = 3,
          I = !1,
          L = !1,
          D = !1;
        function R(e) {
          for (var t = N(O); null !== t; ) {
            if (null === t.callback) C(O);
            else {
              if (!(t.startTime <= e)) break;
              C(O), (t.sortIndex = t.expirationTime), k(S, t);
            }
            t = N(O);
          }
        }
        function M(e) {
          if (((D = !1), R(e), !L))
            if (null !== N(S)) (L = !0), n(F);
            else {
              var t = N(O);
              null !== t && r(M, t.startTime - e);
            }
        }
        function F(e, n) {
          (L = !1), D && ((D = !1), a()), (I = !0);
          var i = j;
          try {
            for (
              R(n), A = N(S);
              null !== A && (!(A.expirationTime > n) || (e && !o()));

            ) {
              var l = A.callback;
              if (null !== l) {
                (A.callback = null), (j = A.priorityLevel);
                var s = l(A.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" == typeof s
                    ? (A.callback = s)
                    : A === N(S) && C(S),
                  R(n);
              } else C(S);
              A = N(S);
            }
            if (null !== A) var c = !0;
            else {
              var u = N(O);
              null !== u && r(M, u.startTime - n), (c = !1);
            }
            return c;
          } finally {
            (A = null), (j = i), (I = !1);
          }
        }
        function z(e) {
          switch (e) {
            case 1:
              return -1;
            case 2:
              return 250;
            case 5:
              return 1073741823;
            case 4:
              return 1e4;
            default:
              return 5e3;
          }
        }
        var $ = i;
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            L || I || ((L = !0), n(F));
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return j;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return N(S);
          }),
          (t.unstable_next = function (e) {
            switch (j) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = j;
            }
            var n = j;
            j = t;
            try {
              return e();
            } finally {
              j = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = $),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = j;
            j = e;
            try {
              return t();
            } finally {
              j = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, o, i) {
            var l = t.unstable_now();
            if ("object" == typeof i && null !== i) {
              var s = i.delay;
              (s = "number" == typeof s && 0 < s ? l + s : l),
                (i = "number" == typeof i.timeout ? i.timeout : z(e));
            } else (i = z(e)), (s = l);
            return (
              (e = {
                id: P++,
                callback: o,
                priorityLevel: e,
                startTime: s,
                expirationTime: (i = s + i),
                sortIndex: -1,
              }),
              s > l
                ? ((e.sortIndex = s),
                  k(O, e),
                  null === N(S) &&
                    e === N(O) &&
                    (D ? a() : (D = !0), r(M, s - l)))
                : ((e.sortIndex = i), k(S, e), L || I || ((L = !0), n(F))),
              e
            );
          }),
          (t.unstable_shouldYield = function () {
            var e = t.unstable_now();
            R(e);
            var n = N(S);
            return (
              (n !== A &&
                null !== A &&
                null !== n &&
                null !== n.callback &&
                n.startTime <= e &&
                n.expirationTime < A.expirationTime) ||
              o()
            );
          }),
          (t.unstable_wrapCallback = function (e) {
            var t = j;
            return function () {
              var n = j;
              j = t;
              try {
                return e.apply(this, arguments);
              } finally {
                j = n;
              }
            };
          });
      },
      840: (e, t, n) => {
        "use strict";
        e.exports = n(53);
      },
      379: (e) => {
        "use strict";
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var o = {}, i = [], l = 0; l < e.length; l++) {
            var s = e[l],
              c = r.base ? s[0] + r.base : s[0],
              u = o[c] || 0,
              d = "".concat(c, " ").concat(u);
            o[c] = u + 1;
            var f = n(d),
              p = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== f) t[f].references++, t[f].updater(p);
            else {
              var m = a(p, r);
              (r.byIndex = l),
                t.splice(l, 0, { identifier: d, updater: m, references: 1 });
            }
            i.push(d);
          }
          return i;
        }
        function a(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, a) {
          var o = r((e = e || []), (a = a || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < o.length; i++) {
              var l = n(o[i]);
              t[l].references--;
            }
            for (var s = r(e, a), c = 0; c < o.length; c++) {
              var u = n(o[c]);
              0 === t[u].references && (t[u].updater(), t.splice(u, 1));
            }
            o = s;
          };
        };
      },
      569: (e) => {
        "use strict";
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      216: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        "use strict";
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var a = void 0 !== n.layer;
                a &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  a && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var o = n.sourceMap;
                o &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                      " */"
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        "use strict";
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      473: (e) => {
        "use strict";
        e.exports = function () {};
      },
      61: (e, t, n) => {
        var r = n(698).default;
        function a() {
          "use strict";
          (e.exports = a =
            function () {
              return t;
            }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
          var t = {},
            n = Object.prototype,
            o = n.hasOwnProperty,
            i =
              Object.defineProperty ||
              function (e, t, n) {
                e[t] = n.value;
              },
            l = "function" == typeof Symbol ? Symbol : {},
            s = l.iterator || "@@iterator",
            c = l.asyncIterator || "@@asyncIterator",
            u = l.toStringTag || "@@toStringTag";
          function d(e, t, n) {
            return (
              Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            d({}, "");
          } catch (e) {
            d = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function f(e, t, n, r) {
            var a = t && t.prototype instanceof h ? t : h,
              o = Object.create(a.prototype),
              l = new S(r || []);
            return i(o, "_invoke", { value: k(e, n, l) }), o;
          }
          function p(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          t.wrap = f;
          var m = {};
          function h() {}
          function g() {}
          function b() {}
          var v = {};
          d(v, s, function () {
            return this;
          });
          var y = Object.getPrototypeOf,
            E = y && y(y(O([])));
          E && E !== n && o.call(E, s) && (v = E);
          var w = (b.prototype = h.prototype = Object.create(v));
          function x(e) {
            ["next", "throw", "return"].forEach(function (t) {
              d(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function _(e, t) {
            function n(a, i, l, s) {
              var c = p(e[a], e, i);
              if ("throw" !== c.type) {
                var u = c.arg,
                  d = u.value;
                return d && "object" == r(d) && o.call(d, "__await")
                  ? t.resolve(d.__await).then(
                      function (e) {
                        n("next", e, l, s);
                      },
                      function (e) {
                        n("throw", e, l, s);
                      }
                    )
                  : t.resolve(d).then(
                      function (e) {
                        (u.value = e), l(u);
                      },
                      function (e) {
                        return n("throw", e, l, s);
                      }
                    );
              }
              s(c.arg);
            }
            var a;
            i(this, "_invoke", {
              value: function (e, r) {
                function o() {
                  return new t(function (t, a) {
                    n(e, r, t, a);
                  });
                }
                return (a = a ? a.then(o, o) : o());
              },
            });
          }
          function k(e, t, n) {
            var r = "suspendedStart";
            return function (a, o) {
              if ("executing" === r)
                throw new Error("Generator is already running");
              if ("completed" === r) {
                if ("throw" === a) throw o;
                return { value: void 0, done: !0 };
              }
              for (n.method = a, n.arg = o; ; ) {
                var i = n.delegate;
                if (i) {
                  var l = N(i, n);
                  if (l) {
                    if (l === m) continue;
                    return l;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                r = "executing";
                var s = p(e, t, n);
                if ("normal" === s.type) {
                  if (
                    ((r = n.done ? "completed" : "suspendedYield"), s.arg === m)
                  )
                    continue;
                  return { value: s.arg, done: n.done };
                }
                "throw" === s.type &&
                  ((r = "completed"), (n.method = "throw"), (n.arg = s.arg));
              }
            };
          }
          function N(e, t) {
            var n = e.iterator[t.method];
            if (void 0 === n) {
              if (((t.delegate = null), "throw" === t.method)) {
                if (
                  e.iterator.return &&
                  ((t.method = "return"),
                  (t.arg = void 0),
                  N(e, t),
                  "throw" === t.method)
                )
                  return m;
                (t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return m;
            }
            var r = p(n, e.iterator, t.arg);
            if ("throw" === r.type)
              return (
                (t.method = "throw"), (t.arg = r.arg), (t.delegate = null), m
              );
            var a = r.arg;
            return a
              ? a.done
                ? ((t[e.resultName] = a.value),
                  (t.next = e.nextLoc),
                  "return" !== t.method &&
                    ((t.method = "next"), (t.arg = void 0)),
                  (t.delegate = null),
                  m)
                : a
              : ((t.method = "throw"),
                (t.arg = new TypeError("iterator result is not an object")),
                (t.delegate = null),
                m);
          }
          function C(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function T(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function S(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(C, this),
              this.reset(!0);
          }
          function O(e) {
            if (e) {
              var t = e[s];
              if (t) return t.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var n = -1,
                  r = function t() {
                    for (; ++n < e.length; )
                      if (o.call(e, n))
                        return (t.value = e[n]), (t.done = !1), t;
                    return (t.value = void 0), (t.done = !0), t;
                  };
                return (r.next = r);
              }
            }
            return { next: P };
          }
          function P() {
            return { value: void 0, done: !0 };
          }
          return (
            (g.prototype = b),
            i(w, "constructor", { value: b, configurable: !0 }),
            i(b, "constructor", { value: g, configurable: !0 }),
            (g.displayName = d(b, u, "GeneratorFunction")),
            (t.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === g || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (t.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, b)
                  : ((e.__proto__ = b), d(e, u, "GeneratorFunction")),
                (e.prototype = Object.create(w)),
                e
              );
            }),
            (t.awrap = function (e) {
              return { __await: e };
            }),
            x(_.prototype),
            d(_.prototype, c, function () {
              return this;
            }),
            (t.AsyncIterator = _),
            (t.async = function (e, n, r, a, o) {
              void 0 === o && (o = Promise);
              var i = new _(f(e, n, r, a), o);
              return t.isGeneratorFunction(n)
                ? i
                : i.next().then(function (e) {
                    return e.done ? e.value : i.next();
                  });
            }),
            x(w),
            d(w, u, "Generator"),
            d(w, s, function () {
              return this;
            }),
            d(w, "toString", function () {
              return "[object Generator]";
            }),
            (t.keys = function (e) {
              var t = Object(e),
                n = [];
              for (var r in t) n.push(r);
              return (
                n.reverse(),
                function e() {
                  for (; n.length; ) {
                    var r = n.pop();
                    if (r in t) return (e.value = r), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (t.values = O),
            (S.prototype = {
              constructor: S,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = void 0),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = void 0),
                  this.tryEntries.forEach(T),
                  !e)
                )
                  for (var t in this)
                    "t" === t.charAt(0) &&
                      o.call(this, t) &&
                      !isNaN(+t.slice(1)) &&
                      (this[t] = void 0);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var t = this;
                function n(n, r) {
                  return (
                    (i.type = "throw"),
                    (i.arg = e),
                    (t.next = n),
                    r && ((t.method = "next"), (t.arg = void 0)),
                    !!r
                  );
                }
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var a = this.tryEntries[r],
                    i = a.completion;
                  if ("root" === a.tryLoc) return n("end");
                  if (a.tryLoc <= this.prev) {
                    var l = o.call(a, "catchLoc"),
                      s = o.call(a, "finallyLoc");
                    if (l && s) {
                      if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                    } else if (l) {
                      if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    } else {
                      if (!s)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var r = this.tryEntries[n];
                  if (
                    r.tryLoc <= this.prev &&
                    o.call(r, "finallyLoc") &&
                    this.prev < r.finallyLoc
                  ) {
                    var a = r;
                    break;
                  }
                }
                a &&
                  ("break" === e || "continue" === e) &&
                  a.tryLoc <= t &&
                  t <= a.finallyLoc &&
                  (a = null);
                var i = a ? a.completion : {};
                return (
                  (i.type = e),
                  (i.arg = t),
                  a
                    ? ((this.method = "next"), (this.next = a.finallyLoc), m)
                    : this.complete(i)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  m
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc), T(n), m;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var a = r.arg;
                      T(n);
                    }
                    return a;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, t, n) {
                return (
                  (this.delegate = {
                    iterator: O(e),
                    resultName: t,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = void 0),
                  m
                );
              },
            }),
            t
          );
        }
        (e.exports = a),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      698: (e) => {
        function t(n) {
          return (
            (e.exports = t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t(n)
          );
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      687: (e, t, n) => {
        var r = n(61)();
        e.exports = r;
        try {
          regeneratorRuntime = r;
        } catch (e) {
          "object" == typeof globalThis
            ? (globalThis.regeneratorRuntime = r)
            : Function("r", "regeneratorRuntime = r")(r);
        }
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { id: r, exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (() => {
      "use strict";
      var e = {};
      n.r(e),
        n.d(e, {
          afterMain: () => ro,
          afterRead: () => eo,
          afterWrite: () => io,
          applyStyles: () => Vi,
          arrow: () => so,
          auto: () => Ua,
          basePlacements: () => Ha,
          beforeMain: () => to,
          beforeRead: () => Xa,
          beforeWrite: () => ao,
          bottom: () => za,
          clippingParents: () => qa,
          computeStyles: () => po,
          createPopper: () => qi,
          createPopperBase: () => Bo,
          createPopperLite: () => Qi,
          detectOverflow: () => So,
          end: () => Va,
          eventListeners: () => ho,
          flip: () => Oo,
          hide: () => jo,
          left: () => Ba,
          main: () => no,
          modifierPhases: () => lo,
          offset: () => Io,
          placements: () => Ya,
          popper: () => Ka,
          popperGenerator: () => $o,
          popperOffsets: () => Lo,
          preventOverflow: () => Do,
          read: () => Ja,
          reference: () => Za,
          right: () => $a,
          start: () => Wa,
          top: () => Fa,
          variationPlacements: () => Ga,
          viewport: () => Qa,
          write: () => oo,
        });
      var t = n(294),
        r = n(935),
        a = n(379),
        o = n.n(a),
        i = n(795),
        l = n.n(i),
        s = n(569),
        c = n.n(s),
        u = n(565),
        d = n.n(u),
        f = n(216),
        p = n.n(f),
        m = n(589),
        h = n.n(m),
        g = n(775),
        b = {};
      (b.styleTagTransform = h()),
        (b.setAttributes = d()),
        (b.insert = c().bind(null, "head")),
        (b.domAPI = l()),
        (b.insertStyleElement = p()),
        o()(g.Z, b),
        g.Z && g.Z.locals && g.Z.locals;
      var v,
        y = n(248),
        E = {};
      function w() {
        return (
          (w = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          w.apply(this, arguments)
        );
      }
      (E.styleTagTransform = h()),
        (E.setAttributes = d()),
        (E.insert = c().bind(null, "head")),
        (E.domAPI = l()),
        (E.insertStyleElement = p()),
        o()(y.Z, E),
        y.Z && y.Z.locals && y.Z.locals,
        (function (e) {
          (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
        })(v || (v = {}));
      var x = "beforeunload";
      function _(e) {
        e.preventDefault(), (e.returnValue = "");
      }
      function k() {
        var e = [];
        return {
          get length() {
            return e.length;
          },
          push: function (t) {
            return (
              e.push(t),
              function () {
                e = e.filter(function (e) {
                  return e !== t;
                });
              }
            );
          },
          call: function (t) {
            e.forEach(function (e) {
              return e && e(t);
            });
          },
        };
      }
      function N(e) {
        var t = e.pathname,
          n = void 0 === t ? "/" : t,
          r = e.search,
          a = void 0 === r ? "" : r,
          o = e.hash,
          i = void 0 === o ? "" : o;
        return (
          a && "?" !== a && (n += "?" === a.charAt(0) ? a : "?" + a),
          i && "#" !== i && (n += "#" === i.charAt(0) ? i : "#" + i),
          n
        );
      }
      function C(e) {
        var t = {};
        if (e) {
          var n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          var r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      const T = (0, t.createContext)(null),
        S = (0, t.createContext)(null),
        O = (0, t.createContext)({ outlet: null, matches: [] });
      function P(e, t) {
        if (!e) throw new Error(t);
      }
      function A(e, t, n) {
        void 0 === n && (n = "/");
        let r = z(("string" == typeof t ? C(t) : t).pathname || "/", n);
        if (null == r) return null;
        let a = j(e);
        !(function (e) {
          e.sort((e, t) =>
            e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  return e.length === t.length &&
                    e.slice(0, -1).every((e, n) => e === t[n])
                    ? e[e.length - 1] - t[t.length - 1]
                    : 0;
                })(
                  e.routesMeta.map((e) => e.childrenIndex),
                  t.routesMeta.map((e) => e.childrenIndex)
                )
          );
        })(a);
        let o = null;
        for (let e = 0; null == o && e < a.length; ++e) o = R(a[e], r);
        return o;
      }
      function j(e, t, n, r) {
        return (
          void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = ""),
          e.forEach((e, a) => {
            let o = {
              relativePath: e.path || "",
              caseSensitive: !0 === e.caseSensitive,
              childrenIndex: a,
              route: e,
            };
            o.relativePath.startsWith("/") &&
              (o.relativePath.startsWith(r) || P(!1),
              (o.relativePath = o.relativePath.slice(r.length)));
            let i = $([r, o.relativePath]),
              l = n.concat(o);
            e.children &&
              e.children.length > 0 &&
              (!0 === e.index && P(!1), j(e.children, t, l, i)),
              (null != e.path || e.index) &&
                t.push({ path: i, score: D(i, e.index), routesMeta: l });
          }),
          t
        );
      }
      const I = /^:\w+$/,
        L = (e) => "*" === e;
      function D(e, t) {
        let n = e.split("/"),
          r = n.length;
        return (
          n.some(L) && (r += -2),
          t && (r += 2),
          n
            .filter((e) => !L(e))
            .reduce((e, t) => e + (I.test(t) ? 3 : "" === t ? 1 : 10), r)
        );
      }
      function R(e, t) {
        let { routesMeta: n } = e,
          r = {},
          a = "/",
          o = [];
        for (let e = 0; e < n.length; ++e) {
          let i = n[e],
            l = e === n.length - 1,
            s = "/" === a ? t : t.slice(a.length) || "/",
            c = M(
              { path: i.relativePath, caseSensitive: i.caseSensitive, end: l },
              s
            );
          if (!c) return null;
          Object.assign(r, c.params);
          let u = i.route;
          o.push({
            params: r,
            pathname: $([a, c.pathname]),
            pathnameBase: B($([a, c.pathnameBase])),
            route: u,
          }),
            "/" !== c.pathnameBase && (a = $([a, c.pathnameBase]));
        }
        return o;
      }
      function M(e, t) {
        "string" == typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        let [n, r] = (function (e, t, n) {
            void 0 === t && (t = !1), void 0 === n && (n = !0);
            let r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                  .replace(/:(\w+)/g, (e, t) => (r.push(t), "([^\\/]+)"));
            return (
              e.endsWith("*")
                ? (r.push("*"),
                  (a +=
                    "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
                : (a += n ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)"),
              [new RegExp(a, t ? void 0 : "i"), r]
            );
          })(e.path, e.caseSensitive, e.end),
          a = t.match(n);
        if (!a) return null;
        let o = a[0],
          i = o.replace(/(.)\/+$/, "$1"),
          l = a.slice(1);
        return {
          params: r.reduce((e, t, n) => {
            if ("*" === t) {
              let e = l[n] || "";
              i = o.slice(0, o.length - e.length).replace(/(.)\/+$/, "$1");
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (t) {
                  return e;
                }
              })(l[n] || "")),
              e
            );
          }, {}),
          pathname: o,
          pathnameBase: i,
          pattern: e,
        };
      }
      function F(e, t, n) {
        let r,
          a = "string" == typeof e ? C(e) : e,
          o = "" === e || "" === a.pathname ? "/" : a.pathname;
        if (null == o) r = n;
        else {
          let e = t.length - 1;
          if (o.startsWith("..")) {
            let t = o.split("/");
            for (; ".." === t[0]; ) t.shift(), (e -= 1);
            a.pathname = t.join("/");
          }
          r = e >= 0 ? t[e] : "/";
        }
        let i = (function (e, t) {
          void 0 === t && (t = "/");
          let {
              pathname: n,
              search: r = "",
              hash: a = "",
            } = "string" == typeof e ? C(e) : e,
            o = n
              ? n.startsWith("/")
                ? n
                : (function (e, t) {
                    let n = t.replace(/\/+$/, "").split("/");
                    return (
                      e.split("/").forEach((e) => {
                        ".." === e
                          ? n.length > 1 && n.pop()
                          : "." !== e && n.push(e);
                      }),
                      n.length > 1 ? n.join("/") : "/"
                    );
                  })(n, t)
              : t;
          return { pathname: o, search: U(r), hash: H(a) };
        })(a, r);
        return (
          o &&
            "/" !== o &&
            o.endsWith("/") &&
            !i.pathname.endsWith("/") &&
            (i.pathname += "/"),
          i
        );
      }
      function z(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let n = e.charAt(t.length);
        return n && "/" !== n ? null : e.slice(t.length) || "/";
      }
      const $ = (e) => e.join("/").replace(/\/\/+/g, "/"),
        B = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        U = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
        H = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
      function W() {
        return null != (0, t.useContext)(S);
      }
      function V() {
        return W() || P(!1), (0, t.useContext)(S).location;
      }
      function q() {
        W() || P(!1);
        let { basename: e, navigator: n } = (0, t.useContext)(T),
          { matches: r } = (0, t.useContext)(O),
          { pathname: a } = V(),
          o = JSON.stringify(r.map((e) => e.pathnameBase)),
          i = (0, t.useRef)(!1);
        (0, t.useEffect)(() => {
          i.current = !0;
        });
        let l = (0, t.useCallback)(
          function (t, r) {
            if ((void 0 === r && (r = {}), !i.current)) return;
            if ("number" == typeof t) return void n.go(t);
            let l = F(t, JSON.parse(o), a);
            "/" !== e && (l.pathname = $([e, l.pathname])),
              (r.replace ? n.replace : n.push)(l, r.state);
          },
          [e, n, o, a]
        );
        return l;
      }
      function Q(e) {
        let { matches: n } = (0, t.useContext)(O),
          { pathname: r } = V(),
          a = JSON.stringify(n.map((e) => e.pathnameBase));
        return (0, t.useMemo)(() => F(e, JSON.parse(a), r), [e, a, r]);
      }
      function K(e) {
        P(!1);
      }
      function Z(e) {
        let {
          basename: n = "/",
          children: r = null,
          location: a,
          navigationType: o = v.Pop,
          navigator: i,
          static: l = !1,
        } = e;
        W() && P(!1);
        let s = B(n),
          c = (0, t.useMemo)(
            () => ({ basename: s, navigator: i, static: l }),
            [s, i, l]
          );
        "string" == typeof a && (a = C(a));
        let {
            pathname: u = "/",
            search: d = "",
            hash: f = "",
            state: p = null,
            key: m = "default",
          } = a,
          h = (0, t.useMemo)(() => {
            let e = z(u, s);
            return null == e
              ? null
              : { pathname: e, search: d, hash: f, state: p, key: m };
          }, [s, u, d, f, p, m]);
        return null == h
          ? null
          : (0, t.createElement)(
              T.Provider,
              { value: c },
              (0, t.createElement)(S.Provider, {
                children: r,
                value: { location: h, navigationType: o },
              })
            );
      }
      function G(e) {
        let { children: n, location: r } = e;
        return (function (e, n) {
          W() || P(!1);
          let { matches: r } = (0, t.useContext)(O),
            a = r[r.length - 1],
            o = a ? a.params : {},
            i = (a && a.pathname, a ? a.pathnameBase : "/");
          a && a.route;
          let l,
            s = V();
          if (n) {
            var c;
            let e = "string" == typeof n ? C(n) : n;
            "/" === i ||
              (null == (c = e.pathname) ? void 0 : c.startsWith(i)) ||
              P(!1),
              (l = e);
          } else l = s;
          let u = l.pathname || "/",
            d = A(e, { pathname: "/" === i ? u : u.slice(i.length) || "/" });
          return (function (e, n) {
            return (
              void 0 === n && (n = []),
              null == e
                ? null
                : e.reduceRight(
                    (r, a, o) =>
                      (0, t.createElement)(O.Provider, {
                        children:
                          void 0 !== a.route.element ? a.route.element : r,
                        value: {
                          outlet: r,
                          matches: n.concat(e.slice(0, o + 1)),
                        },
                      }),
                    null
                  )
            );
          })(
            d &&
              d.map((e) =>
                Object.assign({}, e, {
                  params: Object.assign({}, o, e.params),
                  pathname: $([i, e.pathname]),
                  pathnameBase:
                    "/" === e.pathnameBase ? i : $([i, e.pathnameBase]),
                })
              ),
            r
          );
        })(Y(n), r);
      }
      function Y(e) {
        let n = [];
        return (
          t.Children.forEach(e, (e) => {
            if (!(0, t.isValidElement)(e)) return;
            if (e.type === t.Fragment)
              return void n.push.apply(n, Y(e.props.children));
            e.type !== K && P(!1);
            let r = {
              caseSensitive: e.props.caseSensitive,
              element: e.props.element,
              index: e.props.index,
              path: e.props.path,
            };
            e.props.children && (r.children = Y(e.props.children)), n.push(r);
          }),
          n
        );
      }
      function X() {
        return (
          (X =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          X.apply(this, arguments)
        );
      }
      const J = [
        "onClick",
        "reloadDocument",
        "replace",
        "state",
        "target",
        "to",
      ];
      function ee(e) {
        let { basename: n, children: r, window: a } = e,
          o = (0, t.useRef)();
        null == o.current &&
          (o.current = (function (e) {
            void 0 === e && (e = {});
            var t = e.window,
              n = void 0 === t ? document.defaultView : t,
              r = n.history;
            function a() {
              var e = n.location,
                t = e.pathname,
                a = e.search,
                o = e.hash,
                i = r.state || {};
              return [
                i.idx,
                {
                  pathname: t,
                  search: a,
                  hash: o,
                  state: i.usr || null,
                  key: i.key || "default",
                },
              ];
            }
            var o = null;
            n.addEventListener("popstate", function () {
              if (o) d.call(o), (o = null);
              else {
                var e = v.Pop,
                  t = a(),
                  n = t[0],
                  r = t[1];
                if (d.length) {
                  if (null != n) {
                    var i = s - n;
                    i &&
                      ((o = {
                        action: e,
                        location: r,
                        retry: function () {
                          b(-1 * i);
                        },
                      }),
                      b(i));
                  }
                } else g(e);
              }
            });
            var i = v.Pop,
              l = a(),
              s = l[0],
              c = l[1],
              u = k(),
              d = k();
            function f(e) {
              return "string" == typeof e ? e : N(e);
            }
            function p(e, t) {
              return (
                void 0 === t && (t = null),
                w(
                  { pathname: c.pathname, hash: "", search: "" },
                  "string" == typeof e ? C(e) : e,
                  { state: t, key: Math.random().toString(36).substr(2, 8) }
                )
              );
            }
            function m(e, t) {
              return [{ usr: e.state, key: e.key, idx: t }, f(e)];
            }
            function h(e, t, n) {
              return (
                !d.length || (d.call({ action: e, location: t, retry: n }), !1)
              );
            }
            function g(e) {
              i = e;
              var t = a();
              (s = t[0]), (c = t[1]), u.call({ action: i, location: c });
            }
            function b(e) {
              r.go(e);
            }
            null == s &&
              ((s = 0), r.replaceState(w({}, r.state, { idx: s }), ""));
            var y = {
              get action() {
                return i;
              },
              get location() {
                return c;
              },
              createHref: f,
              push: function e(t, a) {
                var o = v.Push,
                  i = p(t, a);
                if (
                  h(o, i, function () {
                    e(t, a);
                  })
                ) {
                  var l = m(i, s + 1),
                    c = l[0],
                    u = l[1];
                  try {
                    r.pushState(c, "", u);
                  } catch (e) {
                    n.location.assign(u);
                  }
                  g(o);
                }
              },
              replace: function e(t, n) {
                var a = v.Replace,
                  o = p(t, n);
                if (
                  h(a, o, function () {
                    e(t, n);
                  })
                ) {
                  var i = m(o, s),
                    l = i[0],
                    c = i[1];
                  r.replaceState(l, "", c), g(a);
                }
              },
              go: b,
              back: function () {
                b(-1);
              },
              forward: function () {
                b(1);
              },
              listen: function (e) {
                return u.push(e);
              },
              block: function (e) {
                var t = d.push(e);
                return (
                  1 === d.length && n.addEventListener(x, _),
                  function () {
                    t(), d.length || n.removeEventListener(x, _);
                  }
                );
              },
            };
            return y;
          })({ window: a }));
        let i = o.current,
          [l, s] = (0, t.useState)({ action: i.action, location: i.location });
        return (
          (0, t.useLayoutEffect)(() => i.listen(s), [i]),
          (0, t.createElement)(Z, {
            basename: n,
            children: r,
            location: l.location,
            navigationType: l.action,
            navigator: i,
          })
        );
      }
      const te = (0, t.forwardRef)(function (e, n) {
        let {
            onClick: r,
            reloadDocument: a,
            replace: o = !1,
            state: i,
            target: l,
            to: s,
          } = e,
          c = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, J),
          u = (function (e) {
            W() || P(!1);
            let { basename: n, navigator: r } = (0, t.useContext)(T),
              { hash: a, pathname: o, search: i } = Q(e),
              l = o;
            if ("/" !== n) {
              let t = (function (e) {
                  return "" === e || "" === e.pathname
                    ? "/"
                    : "string" == typeof e
                    ? C(e).pathname
                    : e.pathname;
                })(e),
                r = null != t && t.endsWith("/");
              l = "/" === o ? n + (r ? "/" : "") : $([n, o]);
            }
            return r.createHref({ pathname: l, search: i, hash: a });
          })(s),
          d = (function (e, n) {
            let { target: r, replace: a, state: o } = void 0 === n ? {} : n,
              i = q(),
              l = V(),
              s = Q(e);
            return (0, t.useCallback)(
              (t) => {
                if (
                  !(
                    0 !== t.button ||
                    (r && "_self" !== r) ||
                    (function (e) {
                      return !!(
                        e.metaKey ||
                        e.altKey ||
                        e.ctrlKey ||
                        e.shiftKey
                      );
                    })(t)
                  )
                ) {
                  t.preventDefault();
                  let n = !!a || N(l) === N(s);
                  i(e, { replace: n, state: o });
                }
              },
              [l, i, s, a, o, r, e]
            );
          })(s, { replace: o, state: i, target: l });
        return (0, t.createElement)(
          "a",
          X({}, c, {
            href: u,
            onClick: function (e) {
              r && r(e), e.defaultPrevented || a || d(e);
            },
            ref: n,
            target: l,
          })
        );
      });
      function ne(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function re(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function ae(e, t, n) {
        return (
          t && re(e.prototype, t),
          n && re(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function oe(e, t) {
        return (
          (oe = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          oe(e, t)
        );
      }
      function ie(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && oe(e, t);
      }
      function le(e) {
        return (
          (le =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          le(e)
        );
      }
      function se(e, t) {
        if (t && ("object" === le(t) || "function" == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function ce(e) {
        return (
          (ce = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          ce(e)
        );
      }
      var ue = n(697),
        de = n.n(ue);
      var fe = (function (e) {
        ie(a, e);
        var t,
          n,
          r =
            ((t = a),
            (n = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                r = ce(t);
              if (n) {
                var a = ce(this).constructor;
                e = Reflect.construct(r, arguments, a);
              } else e = r.apply(this, arguments);
              return se(this, e);
            });
        function a() {
          return ne(this, a), r.apply(this, arguments);
        }
        return (
          ae(a, [
            {
              key: "componentDidUpdate",
              value: function (e) {
                this.props.location !== e.location && window.scrollTo(0, 0);
              },
            },
            {
              key: "render",
              value: function () {
                return this.props.children;
              },
            },
          ]),
          a
        );
      })(t.Component);
      const pe = fe;
      function me(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function he(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function ge(e, t) {
        if (e) {
          if ("string" == typeof e) return he(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? he(e, t)
              : void 0
          );
        }
      }
      function be(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                o = [],
                i = !0,
                l = !1;
              try {
                for (
                  n = n.call(e);
                  !(i = (r = n.next()).done) &&
                  (o.push(r.value), !t || o.length !== t);
                  i = !0
                );
              } catch (e) {
                (l = !0), (a = e);
              } finally {
                try {
                  i || null == n.return || n.return();
                } finally {
                  if (l) throw a;
                }
              }
              return o;
            }
          })(e, t) ||
          ge(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function ve(e, t, n, r, a, o, i) {
        try {
          var l = e[o](i),
            s = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(s) : Promise.resolve(s).then(r, a);
      }
      function ye(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              ve(o, r, a, i, l, "next", e);
            }
            function l(e) {
              ve(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        };
      }
      function Ee(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return he(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          ge(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      fe.propTypes = { location: de().object, children: de().any };
      var we = n(687),
        xe = n.n(we);
      function _e(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ke(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? _e(Object(n), !0).forEach(function (t) {
                me(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _e(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var Ne = t.createContext(null);
      var Ce = n(406),
        Te = {};
      (Te.styleTagTransform = h()),
        (Te.setAttributes = d()),
        (Te.insert = c().bind(null, "head")),
        (Te.domAPI = l()),
        (Te.insertStyleElement = p()),
        o()(Ce.Z, Te),
        Ce.Z && Ce.Z.locals && Ce.Z.locals;
      var Se = n(546),
        Oe = {};
      (Oe.styleTagTransform = h()),
        (Oe.setAttributes = d()),
        (Oe.insert = c().bind(null, "head")),
        (Oe.domAPI = l()),
        (Oe.insertStyleElement = p()),
        o()(Se.Z, Oe),
        Se.Z && Se.Z.locals && Se.Z.locals;
      var Pe = function (e) {
          var n = (0, t.useContext)(Ne),
            r = (n.store, n.actions),
            a = q();
          return t.createElement(
            t.Fragment,
            null,
            t.createElement(
              "div",
              { className: "col-md-4" },
              t.createElement(
                "div",
                { className: "item-card" },
                t.createElement("img", {
                  src: e.computadoras.img_url,
                  className: "card-img-top w-100",
                  style: { height: "300px" },
                }),
                t.createElement(
                  "div",
                  { className: "card-body" },
                  t.createElement(
                    "div",
                    { className: "d-flex justify-content-between" },
                    t.createElement(
                      "span",
                      { className: "item-title font-weight-bold h5" },
                      t.createElement(
                        "strong",
                        null,
                        e.computadoras.marca,
                        " ",
                        e.computadoras.modelo
                      )
                    ),
                    t.createElement(
                      "span",
                      { className: "item-price-weight-bold h5" },
                      t.createElement(
                        "strong",
                        null,
                        e.computadoras.moneda + " " + e.computadoras.precio
                      )
                    )
                  ),
                  t.createElement(
                    "p",
                    { className: "item-description card-text mb-1 mt-1" },
                    e.computadoras.titulo
                  ),
                  t.createElement(
                    "div",
                    { className: "d-flex align-items-center flex-row" },
                    t.createElement(
                      "span",
                      { className: "offer-type guarantee h5" },
                      e.computadoras.tipo_de_negocio
                    )
                  )
                ),
                t.createElement("hr", null),
                t.createElement(
                  "div",
                  { className: "card-body adjust-content-between" },
                  t.createElement(
                    "div",
                    { className: "text-right buttons" },
                    t.createElement(
                      "button",
                      {
                        className: "btn btn-outline-dark",
                        onClick: function (t) {
                          return r.toggleFavorite(e.computadoras.titulo);
                        },
                      },
                      "Agregar a Favoritos"
                    ),
                    " ",
                    t.createElement(
                      "button",
                      {
                        className: "btn btn-dark",
                        onClick: function (t) {
                          return a("/singleComp/".concat(e.computadoras.id));
                        },
                      },
                      "Ver más!"
                    )
                  )
                )
              )
            )
          );
        },
        Ae = function () {
          return t.createElement(
            "div",
            {
              id: "carousel",
              className: "container-fluid carousel slide overflow-hidden",
              "data-bs-ride": "carousel",
            },
            t.createElement(
              "div",
              { className: "carousel-inner" },
              t.createElement(
                "div",
                { className: "carousel-item active" },
                t.createElement("img", {
                  src: "https://i.postimg.cc/7LyfYbgM/BANNER3.png",
                  className: "d-block w-100",
                  alt: "...",
                })
              ),
              t.createElement(
                "div",
                { className: "carousel-item" },
                t.createElement("img", {
                  src: "https://i.postimg.cc/zDdbSzr8/BANNER2.png",
                  className: "d-block w-100",
                  alt: "...",
                })
              ),
              t.createElement(
                "div",
                { className: "carousel-item" },
                t.createElement("img", {
                  src: "https://i.postimg.cc/m2JPJmkn/BANNER.png",
                  className: "d-block w-100",
                  alt: "...",
                })
              )
            ),
            t.createElement(
              "button",
              {
                className: "carousel-control-prev",
                type: "button",
                "data-bs-target": "#carousel",
                "data-bs-slide": "prev",
              },
              t.createElement("span", {
                className: "carousel-control-prev-icon",
                "aria-hidden": "true",
              }),
              t.createElement(
                "span",
                { className: "visually-hidden" },
                "Anterior"
              )
            ),
            t.createElement(
              "button",
              {
                className: "carousel-control-next",
                type: "button",
                "data-bs-target": "#carousel",
                "data-bs-slide": "next",
              },
              t.createElement("span", {
                className: "carousel-control-next-icon",
                "aria-hidden": "true",
              }),
              t.createElement(
                "span",
                { className: "visually-hidden" },
                "Siguiente"
              )
            ),
            t.createElement(
              "div",
              { className: "carousel-indicators" },
              t.createElement("button", {
                type: "button",
                "data-bs-target": "#carouselExampleIndicators",
                "data-bs-slide-to": "0",
                className: "active",
                "aria-current": "true",
                "aria-label": "Slide 1",
              }),
              t.createElement("button", {
                type: "button",
                "data-bs-target": "#carouselExampleIndicators",
                "data-bs-slide-to": "1",
                "aria-label": "Slide 2",
              }),
              t.createElement("button", {
                type: "button",
                "data-bs-target": "#carouselExampleIndicators",
                "data-bs-slide-to": "2",
                "aria-label": "Slide 3",
              })
            )
          );
        },
        je = n(689),
        Ie = {};
      (Ie.styleTagTransform = h()),
        (Ie.setAttributes = d()),
        (Ie.insert = c().bind(null, "head")),
        (Ie.domAPI = l()),
        (Ie.insertStyleElement = p()),
        o()(je.Z, Ie),
        je.Z && je.Z.locals && je.Z.locals;
      const Le = n.p + "COMPRA.png",
        De = n.p + "VENTA.png",
        Re = n.p + "INTERCAMBIO.png",
        Me = n.p + "SUBASTAS.png";
      var Fe = function () {
          return t.createElement(
            t.Fragment,
            null,
            t.createElement(
              "section",
              { className: "section-products mb-2" },
              t.createElement(
                "div",
                { className: "container" },
                t.createElement(
                  "div",
                  {
                    className:
                      "containersegmento d-flex justify-content-center",
                  },
                  t.createElement(
                    "h1",
                    { className: "display-6 text-bold text-center" },
                    "Que encontrarias en haztuoferta?"
                  )
                ),
                t.createElement("br", null),
                t.createElement(
                  "div",
                  {
                    className:
                      "containersegmento d-flex justify-content-center",
                  },
                  t.createElement(
                    "p",
                    { className: "lead text-bold text-center" },
                    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose",
                    " "
                  )
                ),
                t.createElement("br", null),
                t.createElement("br", null),
                t.createElement(
                  "div",
                  { className: "row" },
                  t.createElement(
                    "div",
                    { className: "col-md-6 col-lg-4 col-xl-3" },
                    t.createElement(
                      te,
                      { className: "seccion-link", to: "/Secciones" },
                      t.createElement(
                        "div",
                        { className: "seccion" },
                        t.createElement(
                          "div",
                          { className: "image" },
                          t.createElement(
                            "span",
                            { className: "img-card" },
                            t.createElement("img", { src: De })
                          )
                        ),
                        t.createElement(
                          "div",
                          { className: "seccion-inner text-center pt-5" },
                          t.createElement(
                            "div",
                            { className: "header text-center" },
                            t.createElement(
                              "h2",
                              { className: "" },
                              "PRODUCTOS EN VENTA"
                            ),
                            t.createElement("h3", null, "Vende tu Producto!")
                          )
                        )
                      )
                    )
                  ),
                  t.createElement(
                    "div",
                    { className: "col-md-6 col-lg-4 col-xl-3" },
                    t.createElement(
                      te,
                      { className: "seccion-link", to: "/Oferts" },
                      t.createElement(
                        "div",
                        { className: "seccion" },
                        t.createElement(
                          "div",
                          { className: "image" },
                          t.createElement(
                            "span",
                            { className: "img-card" },
                            t.createElement("img", { src: Le })
                          )
                        ),
                        t.createElement(
                          "div",
                          { className: "seccion-inner text-center pt-5" },
                          t.createElement(
                            "div",
                            { className: "header text-center" },
                            t.createElement(
                              "h2",
                              { className: "" },
                              "OFERTAS DE COMPRA"
                            ),
                            t.createElement("h3", null, "Haz una Oferta!")
                          )
                        )
                      )
                    )
                  ),
                  t.createElement(
                    "div",
                    { className: "col-md-6 col-lg-4 col-xl-3" },
                    t.createElement(
                      te,
                      { className: "seccion-link", to: "/Secciones" },
                      t.createElement(
                        "div",
                        { className: "seccion" },
                        t.createElement(
                          "div",
                          { className: "image" },
                          t.createElement(
                            "span",
                            { className: "img-card" },
                            t.createElement("img", { src: Re })
                          )
                        ),
                        t.createElement(
                          "div",
                          { className: "seccion-inner text-center pt-5" },
                          t.createElement(
                            "div",
                            { className: "header text-center" },
                            t.createElement(
                              "h2",
                              { className: "" },
                              "INTERCAMBIOS"
                            ),
                            t.createElement("h3", null, "Porpón un Trueque!")
                          )
                        )
                      )
                    )
                  ),
                  t.createElement(
                    "div",
                    { className: "col-md-6 col-lg-4 col-xl-3" },
                    t.createElement(
                      te,
                      { className: "seccion-link", to: "/Secciones" },
                      t.createElement(
                        "div",
                        { className: "seccion" },
                        t.createElement(
                          "div",
                          { className: "image" },
                          t.createElement(
                            "span",
                            { className: "img-card" },
                            t.createElement("img", { src: Me })
                          )
                        ),
                        t.createElement(
                          "div",
                          { className: "seccion-inner text-center pt-5" },
                          t.createElement(
                            "div",
                            { className: "header text-center" },
                            t.createElement(
                              "h2",
                              { className: "" },
                              "SUBASTAS"
                            ),
                            t.createElement("h3", null, "Subasta tu Producto!")
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        },
        ze = n(184),
        $e = n.n(ze),
        Be = n(893);
      const Ue = ["as", "disabled"];
      function He({
        tagName: e,
        disabled: t,
        href: n,
        target: r,
        rel: a,
        role: o,
        onClick: i,
        tabIndex: l = 0,
        type: s,
      }) {
        e || (e = null != n || null != r || null != a ? "a" : "button");
        const c = { tagName: e };
        if ("button" === e) return [{ type: s || "button", disabled: t }, c];
        const u = (r) => {
          (t ||
            ("a" === e &&
              (function (e) {
                return !e || "#" === e.trim();
              })(n))) &&
            r.preventDefault(),
            t ? r.stopPropagation() : null == i || i(r);
        };
        return (
          "a" === e && (n || (n = "#"), t && (n = void 0)),
          [
            {
              role: null != o ? o : "button",
              disabled: void 0,
              tabIndex: t ? void 0 : l,
              href: n,
              target: "a" === e ? r : void 0,
              "aria-disabled": t || void 0,
              rel: "a" === e ? a : void 0,
              onClick: u,
              onKeyDown: (e) => {
                " " === e.key && (e.preventDefault(), u(e));
              },
            },
            c,
          ]
        );
      }
      const We = t.forwardRef((e, t) => {
        let { as: n, disabled: r } = e,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, Ue);
        const [o, { tagName: i }] = He(
          Object.assign({ tagName: n, disabled: r }, a)
        );
        return (0, Be.jsx)(i, Object.assign({}, a, o, { ref: t }));
      });
      We.displayName = "Button";
      const Ve = We,
        qe = t.createContext({
          prefixes: {},
          breakpoints: ["xxl", "xl", "lg", "md", "sm", "xs"],
          minBreakpoint: "xs",
        }),
        { Consumer: Qe, Provider: Ke } = qe;
      function Ze(e, n) {
        const { prefixes: r } = (0, t.useContext)(qe);
        return e || r[n] || n;
      }
      function Ge() {
        const { dir: e } = (0, t.useContext)(qe);
        return "rtl" === e;
      }
      const Ye = t.forwardRef(
        (
          {
            as: e,
            bsPrefix: t,
            variant: n,
            size: r,
            active: a,
            className: o,
            ...i
          },
          l
        ) => {
          const s = Ze(t, "btn"),
            [c, { tagName: u }] = He({ tagName: e, ...i }),
            d = u;
          return (0, Be.jsx)(d, {
            ...c,
            ...i,
            ref: l,
            className: $e()(
              o,
              s,
              a && "active",
              n && `${s}-${n}`,
              r && `${s}-${r}`,
              i.href && i.disabled && "disabled"
            ),
          });
        }
      );
      (Ye.displayName = "Button"),
        (Ye.defaultProps = { variant: "primary", active: !1, disabled: !1 });
      const Xe = Ye;
      var Je = (function (e) {
        ie(o, e);
        var n,
          r,
          a =
            ((n = o),
            (r = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = ce(n);
              if (r) {
                var a = ce(this).constructor;
                e = Reflect.construct(t, arguments, a);
              } else e = t.apply(this, arguments);
              return se(this, e);
            });
        function o() {
          return ne(this, o), a.apply(this, arguments);
        }
        return (
          ae(o, [
            {
              key: "componentDidMount",
              value: function () {
                var e = this,
                  t = window.cloudinary.createUploadWidget(
                    { cloudName: "dzryoj9vr", uploadPreset: "qlqinjdl" },
                    function (t, n) {
                      !t &&
                        n &&
                        "success" === n.event &&
                        (console.log("Done! Here is the image info: ", n.info),
                        e.context.actions.addUrl(n.info.url),
                        document
                          .getElementById("uploadedimage")
                          .setAttribute("src", n.info.secure_url));
                    }
                  );
                document.getElementById("upload_widget").addEventListener(
                  "click",
                  function () {
                    t.open();
                  },
                  !1
                );
              },
            },
            {
              key: "render",
              value: function () {
                return t.createElement(
                  Xe,
                  {
                    variant: "secondary",
                    type: "button",
                    id: "upload_widget",
                    className: "",
                  },
                  "Upload"
                );
              },
            },
          ]),
          o
        );
      })(t.Component);
      me(Je, "contextType", Ne);
      const et = Je;
      var tt = function () {
          var e = (0, t.useContext)(Ne),
            n = e.store,
            r = e.actions;
          return (
            (0, t.useEffect)(function () {
              r.getComputadoras();
            }, []),
            t.createElement(
              "div",
              { className: "text-start mx-5 px-5" },
              t.createElement(
                "h1",
                {
                  className:
                    "ps-5 pt-5 pb-3 mb-5 display-5 border-bottom border-secondary",
                },
                t.createElement("i", { className: "fa-solid fa-desktop" }),
                " Computadoras"
              ),
              t.createElement(
                "div",
                {
                  className:
                    "container d-flex flex-wrap justify-content-center",
                },
                "" == n.searchResults
                  ? n.computadoras.map(function (e, n) {
                      return t.createElement(Pe, { computadoras: e, key: n });
                    })
                  : n.searchResults.map(function (e, n) {
                      return t.createElement(Pe, { computadoras: e, key: n });
                    })
              )
            )
          );
        },
        nt = function () {
          var e = (0, t.useContext)(Ne),
            n = e.store,
            r = e.actions;
          return (
            (0, t.useEffect)(function () {
              r.getCelulares();
            }, []),
            t.createElement(
              "div",
              { className: "text-start mx-5 px-5" },
              t.createElement(
                "h1",
                {
                  className:
                    "ps-5 pt-5 pb-3 mb-5 display-5 border-bottom border-secondary",
                },
                t.createElement("i", {
                  className: "fa-solid fa-mobile-screen-button",
                }),
                " Celulares"
              ),
              t.createElement(
                "div",
                {
                  className:
                    "container d-flex flex-wrap justify-content-center shadow",
                },
                "" == n.searchResults
                  ? n.celulares.map(function (e, n) {
                      return t.createElement(Pe, { computadoras: e, key: n });
                    })
                  : n.searchResults.map(function (e, n) {
                      return t.createElement(Pe, { computadoras: e, key: n });
                    })
              )
            )
          );
        },
        rt = n(502),
        at = {};
      (at.styleTagTransform = h()),
        (at.setAttributes = d()),
        (at.insert = c().bind(null, "head")),
        (at.domAPI = l()),
        (at.insertStyleElement = p()),
        o()(rt.Z, at),
        rt.Z && rt.Z.locals && rt.Z.locals;
      var ot = function (e) {
        var n = e.title,
          r = e.classButton,
          a = e.handleShow;
        return t.createElement("button", { className: r, onClick: a }, n);
      };
      const it = {
          type: de().string,
          tooltip: de().bool,
          as: de().elementType,
        },
        lt = t.forwardRef(
          (
            {
              as: e = "div",
              className: t,
              type: n = "valid",
              tooltip: r = !1,
              ...a
            },
            o
          ) =>
            (0, Be.jsx)(e, {
              ...a,
              ref: o,
              className: $e()(t, `${n}-${r ? "tooltip" : "feedback"}`),
            })
        );
      (lt.displayName = "Feedback"), (lt.propTypes = it);
      const st = lt,
        ct = t.createContext({}),
        ut = t.forwardRef(
          (
            {
              id: e,
              bsPrefix: n,
              className: r,
              type: a = "checkbox",
              isValid: o = !1,
              isInvalid: i = !1,
              as: l = "input",
              ...s
            },
            c
          ) => {
            const { controlId: u } = (0, t.useContext)(ct);
            return (
              (n = Ze(n, "form-check-input")),
              (0, Be.jsx)(l, {
                ...s,
                ref: c,
                type: a,
                id: e || u,
                className: $e()(r, n, o && "is-valid", i && "is-invalid"),
              })
            );
          }
        );
      ut.displayName = "FormCheckInput";
      const dt = ut,
        ft = t.forwardRef(
          ({ bsPrefix: e, className: n, htmlFor: r, ...a }, o) => {
            const { controlId: i } = (0, t.useContext)(ct);
            return (
              (e = Ze(e, "form-check-label")),
              (0, Be.jsx)("label", {
                ...a,
                ref: o,
                htmlFor: r || i,
                className: $e()(n, e),
              })
            );
          }
        );
      ft.displayName = "FormCheckLabel";
      const pt = ft,
        mt = t.forwardRef(
          (
            {
              id: e,
              bsPrefix: n,
              bsSwitchPrefix: r,
              inline: a = !1,
              reverse: o = !1,
              disabled: i = !1,
              isValid: l = !1,
              isInvalid: s = !1,
              feedbackTooltip: c = !1,
              feedback: u,
              feedbackType: d,
              className: f,
              style: p,
              title: m = "",
              type: h = "checkbox",
              label: g,
              children: b,
              as: v = "input",
              ...y
            },
            E
          ) => {
            (n = Ze(n, "form-check")), (r = Ze(r, "form-switch"));
            const { controlId: w } = (0, t.useContext)(ct),
              x = (0, t.useMemo)(() => ({ controlId: e || w }), [w, e]),
              _ =
                (!b && null != g && !1 !== g) ||
                (function (e, n) {
                  return t.Children.toArray(e).some(
                    (e) => t.isValidElement(e) && e.type === n
                  );
                })(b, pt),
              k = (0, Be.jsx)(dt, {
                ...y,
                type: "switch" === h ? "checkbox" : h,
                ref: E,
                isValid: l,
                isInvalid: s,
                disabled: i,
                as: v,
              });
            return (0, Be.jsx)(ct.Provider, {
              value: x,
              children: (0, Be.jsx)("div", {
                style: p,
                className: $e()(
                  f,
                  _ && n,
                  a && `${n}-inline`,
                  o && `${n}-reverse`,
                  "switch" === h && r
                ),
                children:
                  b ||
                  (0, Be.jsxs)(Be.Fragment, {
                    children: [
                      k,
                      _ && (0, Be.jsx)(pt, { title: m, children: g }),
                      u &&
                        (0, Be.jsx)(st, { type: d, tooltip: c, children: u }),
                    ],
                  }),
              }),
            });
          }
        );
      mt.displayName = "FormCheck";
      const ht = Object.assign(mt, { Input: dt, Label: pt });
      var gt = n(473),
        bt = n.n(gt);
      const vt = t.forwardRef(
        (
          {
            bsPrefix: e,
            type: n,
            size: r,
            htmlSize: a,
            id: o,
            className: i,
            isValid: l = !1,
            isInvalid: s = !1,
            plaintext: c,
            readOnly: u,
            as: d = "input",
            ...f
          },
          p
        ) => {
          const { controlId: m } = (0, t.useContext)(ct);
          let h;
          return (
            (e = Ze(e, "form-control")),
            (h = c
              ? { [`${e}-plaintext`]: !0 }
              : { [e]: !0, [`${e}-${r}`]: r }),
            (0, Be.jsx)(d, {
              ...f,
              type: n,
              size: a,
              ref: p,
              readOnly: u,
              id: o || m,
              className: $e()(
                i,
                h,
                l && "is-valid",
                s && "is-invalid",
                "color" === n && `${e}-color`
              ),
            })
          );
        }
      );
      vt.displayName = "FormControl";
      const yt = Object.assign(vt, { Feedback: st });
      var Et = /-(.)/g;
      const wt = (e) => {
        return (
          e[0].toUpperCase() +
          ((t = e),
          t.replace(Et, function (e, t) {
            return t.toUpperCase();
          })).slice(1)
        );
        var t;
      };
      function xt(
        e,
        { displayName: n = wt(e), Component: r, defaultProps: a } = {}
      ) {
        const o = t.forwardRef(
          ({ className: t, bsPrefix: n, as: a = r || "div", ...o }, i) => {
            const l = Ze(n, e);
            return (0, Be.jsx)(a, { ref: i, className: $e()(t, l), ...o });
          }
        );
        return (o.defaultProps = a), (o.displayName = n), o;
      }
      const _t = xt("form-floating"),
        kt = t.forwardRef(({ controlId: e, as: n = "div", ...r }, a) => {
          const o = (0, t.useMemo)(() => ({ controlId: e }), [e]);
          return (0, Be.jsx)(ct.Provider, {
            value: o,
            children: (0, Be.jsx)(n, { ...r, ref: a }),
          });
        });
      kt.displayName = "FormGroup";
      const Nt = kt;
      const Ct = t.forwardRef((e, n) => {
        const [
          { className: r, ...a },
          { as: o = "div", bsPrefix: i, spans: l },
        ] = (function ({ as: e, bsPrefix: n, className: r, ...a }) {
          n = Ze(n, "col");
          const o = (function () {
              const { breakpoints: e } = (0, t.useContext)(qe);
              return e;
            })(),
            i = (function () {
              const { minBreakpoint: e } = (0, t.useContext)(qe);
              return e;
            })(),
            l = [],
            s = [];
          return (
            o.forEach((e) => {
              const t = a[e];
              let r, o, c;
              delete a[e],
                "object" == typeof t && null != t
                  ? ({ span: r, offset: o, order: c } = t)
                  : (r = t);
              const u = e !== i ? `-${e}` : "";
              r && l.push(!0 === r ? `${n}${u}` : `${n}${u}-${r}`),
                null != c && s.push(`order${u}-${c}`),
                null != o && s.push(`offset${u}-${o}`);
            }),
            [
              { ...a, className: $e()(r, ...l, ...s) },
              { as: e, bsPrefix: n, spans: l },
            ]
          );
        })(e);
        return (0, Be.jsx)(o, {
          ...a,
          ref: n,
          className: $e()(r, !l.length && i),
        });
      });
      Ct.displayName = "Col";
      const Tt = Ct,
        St = t.forwardRef(
          (
            {
              as: e = "label",
              bsPrefix: n,
              column: r,
              visuallyHidden: a,
              className: o,
              htmlFor: i,
              ...l
            },
            s
          ) => {
            const { controlId: c } = (0, t.useContext)(ct);
            n = Ze(n, "form-label");
            let u = "col-form-label";
            "string" == typeof r && (u = `${u} ${u}-${r}`);
            const d = $e()(o, n, a && "visually-hidden", r && u);
            return (
              (i = i || c),
              r
                ? (0, Be.jsx)(Tt, {
                    ref: s,
                    as: "label",
                    className: d,
                    htmlFor: i,
                    ...l,
                  })
                : (0, Be.jsx)(e, { ref: s, className: d, htmlFor: i, ...l })
            );
          }
        );
      (St.displayName = "FormLabel"),
        (St.defaultProps = { column: !1, visuallyHidden: !1 });
      const Ot = St,
        Pt = t.forwardRef(({ bsPrefix: e, className: n, id: r, ...a }, o) => {
          const { controlId: i } = (0, t.useContext)(ct);
          return (
            (e = Ze(e, "form-range")),
            (0, Be.jsx)("input", {
              ...a,
              type: "range",
              ref: o,
              className: $e()(n, e),
              id: r || i,
            })
          );
        });
      Pt.displayName = "FormRange";
      const At = Pt,
        jt = t.forwardRef(
          (
            {
              bsPrefix: e,
              size: n,
              htmlSize: r,
              className: a,
              isValid: o = !1,
              isInvalid: i = !1,
              id: l,
              ...s
            },
            c
          ) => {
            const { controlId: u } = (0, t.useContext)(ct);
            return (
              (e = Ze(e, "form-select")),
              (0, Be.jsx)("select", {
                ...s,
                size: r,
                ref: c,
                className: $e()(
                  a,
                  e,
                  n && `${e}-${n}`,
                  o && "is-valid",
                  i && "is-invalid"
                ),
                id: l || u,
              })
            );
          }
        );
      jt.displayName = "FormSelect";
      const It = jt,
        Lt = t.forwardRef(
          (
            { bsPrefix: e, className: t, as: n = "small", muted: r, ...a },
            o
          ) => (
            (e = Ze(e, "form-text")),
            (0, Be.jsx)(n, {
              ...a,
              ref: o,
              className: $e()(t, e, r && "text-muted"),
            })
          )
        );
      Lt.displayName = "FormText";
      const Dt = Lt,
        Rt = t.forwardRef((e, t) =>
          (0, Be.jsx)(ht, { ...e, ref: t, type: "switch" })
        );
      Rt.displayName = "Switch";
      const Mt = Object.assign(Rt, { Input: ht.Input, Label: ht.Label }),
        Ft = t.forwardRef(
          (
            {
              bsPrefix: e,
              className: t,
              children: n,
              controlId: r,
              label: a,
              ...o
            },
            i
          ) => (
            (e = Ze(e, "form-floating")),
            (0, Be.jsxs)(Nt, {
              ref: i,
              className: $e()(t, e),
              controlId: r,
              ...o,
              children: [n, (0, Be.jsx)("label", { htmlFor: r, children: a })],
            })
          )
        );
      Ft.displayName = "FloatingLabel";
      const zt = Ft,
        $t = { _ref: de().any, validated: de().bool, as: de().elementType },
        Bt = t.forwardRef(
          ({ className: e, validated: t, as: n = "form", ...r }, a) =>
            (0, Be.jsx)(n, {
              ...r,
              ref: a,
              className: $e()(e, t && "was-validated"),
            })
        );
      (Bt.displayName = "Form"), (Bt.propTypes = $t);
      const Ut = Object.assign(Bt, {
          Group: Nt,
          Control: yt,
          Floating: _t,
          Check: ht,
          Switch: Mt,
          Label: Ot,
          Text: Dt,
          Range: At,
          Select: It,
          FloatingLabel: zt,
        }),
        Ht = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        );
      var Wt = !1,
        Vt = !1;
      try {
        var qt = {
          get passive() {
            return (Wt = !0);
          },
          get once() {
            return (Vt = Wt = !0);
          },
        };
        Ht &&
          (window.addEventListener("test", qt, qt),
          window.removeEventListener("test", qt, !0));
      } catch (e) {}
      const Qt = function (e, t, n, r) {
        if (r && "boolean" != typeof r && !Vt) {
          var a = r.once,
            o = r.capture,
            i = n;
          !Vt &&
            a &&
            ((i =
              n.__once ||
              function e(r) {
                this.removeEventListener(t, e, o), n.call(this, r);
              }),
            (n.__once = i)),
            e.addEventListener(t, i, Wt ? r : o);
        }
        e.addEventListener(t, n, r);
      };
      function Kt(e) {
        return (e && e.ownerDocument) || document;
      }
      const Zt = function (e, t, n, r) {
        var a = r && "boolean" != typeof r ? r.capture : r;
        e.removeEventListener(t, n, a),
          n.__once && e.removeEventListener(t, n.__once, a);
      };
      var Gt;
      function Yt(e) {
        if (((!Gt && 0 !== Gt) || e) && Ht) {
          var t = document.createElement("div");
          (t.style.position = "absolute"),
            (t.style.top = "-9999px"),
            (t.style.width = "50px"),
            (t.style.height = "50px"),
            (t.style.overflow = "scroll"),
            document.body.appendChild(t),
            (Gt = t.offsetWidth - t.clientWidth),
            document.body.removeChild(t);
        }
        return Gt;
      }
      function Xt() {
        return (0, t.useState)(null);
      }
      function Jt(e) {
        var n = (function (e) {
          var n = (0, t.useRef)(e);
          return (
            (0, t.useEffect)(
              function () {
                n.current = e;
              },
              [e]
            ),
            n
          );
        })(e);
        return (0, t.useCallback)(
          function () {
            return n.current && n.current.apply(n, arguments);
          },
          [n]
        );
      }
      var en = function (e) {
        return e && "function" != typeof e
          ? function (t) {
              e.current = t;
            }
          : e;
      };
      const tn = function (e, n) {
        return (0, t.useMemo)(
          function () {
            return (function (e, t) {
              var n = en(e),
                r = en(t);
              return function (e) {
                n && n(e), r && r(e);
              };
            })(e, n);
          },
          [e, n]
        );
      };
      function nn(e) {
        var n,
          r,
          a = ((n = e), ((r = (0, t.useRef)(n)).current = n), r);
        (0, t.useEffect)(function () {
          return function () {
            return a.current();
          };
        }, []);
      }
      var rn = /([A-Z])/g,
        an = /^ms-/;
      function on(e) {
        return (function (e) {
          return e.replace(rn, "-$1").toLowerCase();
        })(e).replace(an, "-ms-");
      }
      var ln =
        /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
      const sn = function (e, t) {
          var n = "",
            r = "";
          if ("string" == typeof t)
            return (
              e.style.getPropertyValue(on(t)) ||
              (function (e, t) {
                return (function (e) {
                  var t = Kt(e);
                  return (t && t.defaultView) || window;
                })(e).getComputedStyle(e, t);
              })(e).getPropertyValue(on(t))
            );
          Object.keys(t).forEach(function (a) {
            var o = t[a];
            o || 0 === o
              ? (function (e) {
                  return !(!e || !ln.test(e));
                })(a)
                ? (r += a + "(" + o + ") ")
                : (n += on(a) + ": " + o + ";")
              : e.style.removeProperty(on(a));
          }),
            r && (n += "transform: " + r + ";"),
            (e.style.cssText += ";" + n);
        },
        cn = function (e, t, n, r) {
          return (
            Qt(e, t, n, r),
            function () {
              Zt(e, t, n, r);
            }
          );
        };
      function un(e, t, n, r) {
        var a, o;
        null == n &&
          ((o =
            -1 === (a = sn(e, "transitionDuration") || "").indexOf("ms")
              ? 1e3
              : 1),
          (n = parseFloat(a) * o || 0));
        var i = (function (e, t, n) {
            void 0 === n && (n = 5);
            var r = !1,
              a = setTimeout(function () {
                r ||
                  (function (e, t, n, r) {
                    if (
                      (void 0 === n && (n = !1), void 0 === r && (r = !0), e)
                    ) {
                      var a = document.createEvent("HTMLEvents");
                      a.initEvent("transitionend", n, r), e.dispatchEvent(a);
                    }
                  })(e, 0, !0);
              }, t + n),
              o = cn(
                e,
                "transitionend",
                function () {
                  r = !0;
                },
                { once: !0 }
              );
            return function () {
              clearTimeout(a), o();
            };
          })(e, n, r),
          l = cn(e, "transitionend", t);
        return function () {
          i(), l();
        };
      }
      function dn(e) {
        void 0 === e && (e = Kt());
        try {
          var t = e.activeElement;
          return t && t.nodeName ? t : null;
        } catch (t) {
          return e.body;
        }
      }
      function fn(e, t) {
        return e.contains
          ? e.contains(t)
          : e.compareDocumentPosition
          ? e === t || !!(16 & e.compareDocumentPosition(t))
          : void 0;
      }
      function pn() {
        var e = (0, t.useRef)(!0),
          n = (0, t.useRef)(function () {
            return e.current;
          });
        return (
          (0, t.useEffect)(function () {
            return (
              (e.current = !0),
              function () {
                e.current = !1;
              }
            );
          }, []),
          n.current
        );
      }
      function mn(e) {
        var n = (0, t.useRef)(null);
        return (
          (0, t.useEffect)(function () {
            n.current = e;
          }),
          n.current
        );
      }
      function hn(e) {
        return `data-rr-ui-${e}`;
      }
      const gn = hn("modal-open"),
        bn = class {
          constructor({
            ownerDocument: e,
            handleContainerOverflow: t = !0,
            isRTL: n = !1,
          } = {}) {
            (this.handleContainerOverflow = t),
              (this.isRTL = n),
              (this.modals = []),
              (this.ownerDocument = e);
          }
          getScrollbarWidth() {
            return (function (e = document) {
              const t = e.defaultView;
              return Math.abs(t.innerWidth - e.documentElement.clientWidth);
            })(this.ownerDocument);
          }
          getElement() {
            return (this.ownerDocument || document).body;
          }
          setModalAttributes(e) {}
          removeModalAttributes(e) {}
          setContainerStyle(e) {
            const t = { overflow: "hidden" },
              n = this.isRTL ? "paddingLeft" : "paddingRight",
              r = this.getElement();
            (e.style = { overflow: r.style.overflow, [n]: r.style[n] }),
              e.scrollBarWidth &&
                (t[n] = `${
                  parseInt(sn(r, n) || "0", 10) + e.scrollBarWidth
                }px`),
              r.setAttribute(gn, ""),
              sn(r, t);
          }
          reset() {
            [...this.modals].forEach((e) => this.remove(e));
          }
          removeContainerStyle(e) {
            const t = this.getElement();
            t.removeAttribute(gn), Object.assign(t.style, e.style);
          }
          add(e) {
            let t = this.modals.indexOf(e);
            return (
              -1 !== t ||
                ((t = this.modals.length),
                this.modals.push(e),
                this.setModalAttributes(e),
                0 !== t ||
                  ((this.state = {
                    scrollBarWidth: this.getScrollbarWidth(),
                    style: {},
                  }),
                  this.handleContainerOverflow &&
                    this.setContainerStyle(this.state))),
              t
            );
          }
          remove(e) {
            const t = this.modals.indexOf(e);
            -1 !== t &&
              (this.modals.splice(t, 1),
              !this.modals.length &&
                this.handleContainerOverflow &&
                this.removeContainerStyle(this.state),
              this.removeModalAttributes(e));
          }
          isTopModal(e) {
            return (
              !!this.modals.length && this.modals[this.modals.length - 1] === e
            );
          }
        },
        vn = (0, t.createContext)(Ht ? window : void 0);
      function yn() {
        return (0, t.useContext)(vn);
      }
      vn.Provider;
      const En = (e, t) =>
        Ht
          ? null == e
            ? (t || Kt()).body
            : ("function" == typeof e && (e = e()),
              e && "current" in e && (e = e.current),
              e && ("nodeType" in e || e.getBoundingClientRect) ? e : null)
          : null;
      function wn(e, n) {
        const r = yn(),
          [a, o] = (0, t.useState)(() =>
            En(e, null == r ? void 0 : r.document)
          );
        if (!a) {
          const t = En(e);
          t && o(t);
        }
        return (
          (0, t.useEffect)(() => {
            n && a && n(a);
          }, [n, a]),
          (0, t.useEffect)(() => {
            const t = En(e);
            t !== a && o(t);
          }, [e, a]),
          a
        );
      }
      const xn = [
        "show",
        "role",
        "className",
        "style",
        "children",
        "backdrop",
        "keyboard",
        "onBackdropClick",
        "onEscapeKeyDown",
        "transition",
        "backdropTransition",
        "autoFocus",
        "enforceFocus",
        "restoreFocus",
        "restoreFocusOptions",
        "renderDialog",
        "renderBackdrop",
        "manager",
        "container",
        "onShow",
        "onHide",
        "onExit",
        "onExited",
        "onExiting",
        "onEnter",
        "onEntering",
        "onEntered",
      ];
      let _n;
      const kn = (0, t.forwardRef)((e, n) => {
        let {
            show: a = !1,
            role: o = "dialog",
            className: i,
            style: l,
            children: s,
            backdrop: c = !0,
            keyboard: u = !0,
            onBackdropClick: d,
            onEscapeKeyDown: f,
            transition: p,
            backdropTransition: m,
            autoFocus: h = !0,
            enforceFocus: g = !0,
            restoreFocus: b = !0,
            restoreFocusOptions: v,
            renderDialog: y,
            renderBackdrop: E = (e) => (0, Be.jsx)("div", Object.assign({}, e)),
            manager: w,
            container: x,
            onShow: _,
            onHide: k = () => {},
            onExit: N,
            onExited: C,
            onExiting: T,
            onEnter: S,
            onEntering: O,
            onEntered: P,
          } = e,
          A = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, xn);
        const j = wn(x),
          I = (function (e) {
            const n = yn(),
              r =
                e ||
                (function (e) {
                  return (
                    _n ||
                      (_n = new bn({
                        ownerDocument: null == e ? void 0 : e.document,
                      })),
                    _n
                  );
                })(n),
              a = (0, t.useRef)({ dialog: null, backdrop: null });
            return Object.assign(a.current, {
              add: () => r.add(a.current),
              remove: () => r.remove(a.current),
              isTopModal: () => r.isTopModal(a.current),
              setDialogRef: (0, t.useCallback)((e) => {
                a.current.dialog = e;
              }, []),
              setBackdropRef: (0, t.useCallback)((e) => {
                a.current.backdrop = e;
              }, []),
            });
          })(w),
          L = pn(),
          D = mn(a),
          [R, M] = (0, t.useState)(!a),
          F = (0, t.useRef)(null);
        (0, t.useImperativeHandle)(n, () => I, [I]),
          Ht && !D && a && (F.current = dn()),
          p || a || R ? a && R && M(!1) : M(!0);
        const z = Jt(() => {
            if (
              (I.add(),
              (V.current = cn(document, "keydown", H)),
              (W.current = cn(document, "focus", () => setTimeout(B), !0)),
              _ && _(),
              h)
            ) {
              const e = dn(document);
              I.dialog &&
                e &&
                !fn(I.dialog, e) &&
                ((F.current = e), I.dialog.focus());
            }
          }),
          $ = Jt(() => {
            var e;
            I.remove(),
              null == V.current || V.current(),
              null == W.current || W.current(),
              b &&
                (null == (e = F.current) || null == e.focus || e.focus(v),
                (F.current = null));
          });
        (0, t.useEffect)(() => {
          a && j && z();
        }, [a, j, z]),
          (0, t.useEffect)(() => {
            R && $();
          }, [R, $]),
          nn(() => {
            $();
          });
        const B = Jt(() => {
            if (!g || !L() || !I.isTopModal()) return;
            const e = dn();
            I.dialog && e && !fn(I.dialog, e) && I.dialog.focus();
          }),
          U = Jt((e) => {
            e.target === e.currentTarget &&
              (null == d || d(e), !0 === c && k());
          }),
          H = Jt((e) => {
            u &&
              27 === e.keyCode &&
              I.isTopModal() &&
              (null == f || f(e), e.defaultPrevented || k());
          }),
          W = (0, t.useRef)(),
          V = (0, t.useRef)(),
          q = p;
        if (!j || !(a || (q && !R))) return null;
        const Q = Object.assign(
          {
            role: o,
            ref: I.setDialogRef,
            "aria-modal": "dialog" === o || void 0,
          },
          A,
          { style: l, className: i, tabIndex: -1 }
        );
        let K = y
          ? y(Q)
          : (0, Be.jsx)(
              "div",
              Object.assign({}, Q, {
                children: t.cloneElement(s, { role: "document" }),
              })
            );
        q &&
          (K = (0, Be.jsx)(q, {
            appear: !0,
            unmountOnExit: !0,
            in: !!a,
            onExit: N,
            onExiting: T,
            onExited: (...e) => {
              M(!0), null == C || C(...e);
            },
            onEnter: S,
            onEntering: O,
            onEntered: P,
            children: K,
          }));
        let Z = null;
        if (c) {
          const e = m;
          (Z = E({ ref: I.setBackdropRef, onClick: U })),
            e && (Z = (0, Be.jsx)(e, { appear: !0, in: !!a, children: Z }));
        }
        return (0, Be.jsx)(Be.Fragment, {
          children: r.createPortal(
            (0, Be.jsxs)(Be.Fragment, { children: [Z, K] }),
            j
          ),
        });
      });
      kn.displayName = "Modal";
      const Nn = Object.assign(kn, { Manager: bn });
      function Cn(e, t) {
        return e.classList
          ? !!t && e.classList.contains(t)
          : -1 !==
              (" " + (e.className.baseVal || e.className) + " ").indexOf(
                " " + t + " "
              );
      }
      var Tn = Function.prototype.bind.call(Function.prototype.call, [].slice);
      function Sn(e, t) {
        return Tn(e.querySelectorAll(t));
      }
      function On(e, t) {
        return e
          .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
          .replace(/\s+/g, " ")
          .replace(/^\s*|\s*$/g, "");
      }
      const Pn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        An = ".sticky-top",
        jn = ".navbar-toggler";
      class In extends bn {
        adjustAndStore(e, t, n) {
          const r = t.style[e];
          (t.dataset[e] = r), sn(t, { [e]: `${parseFloat(sn(t, e)) + n}px` });
        }
        restore(e, t) {
          const n = t.dataset[e];
          void 0 !== n && (delete t.dataset[e], sn(t, { [e]: n }));
        }
        setContainerStyle(e) {
          super.setContainerStyle(e);
          const t = this.getElement();
          var n, r;
          if (
            ((r = "modal-open"),
            (n = t).classList
              ? n.classList.add(r)
              : Cn(n, r) ||
                ("string" == typeof n.className
                  ? (n.className = n.className + " " + r)
                  : n.setAttribute(
                      "class",
                      ((n.className && n.className.baseVal) || "") + " " + r
                    )),
            !e.scrollBarWidth)
          )
            return;
          const a = this.isRTL ? "paddingLeft" : "paddingRight",
            o = this.isRTL ? "marginLeft" : "marginRight";
          Sn(t, Pn).forEach((t) => this.adjustAndStore(a, t, e.scrollBarWidth)),
            Sn(t, An).forEach((t) =>
              this.adjustAndStore(o, t, -e.scrollBarWidth)
            ),
            Sn(t, jn).forEach((t) =>
              this.adjustAndStore(o, t, e.scrollBarWidth)
            );
        }
        removeContainerStyle(e) {
          super.removeContainerStyle(e);
          const t = this.getElement();
          var n, r;
          (r = "modal-open"),
            (n = t).classList
              ? n.classList.remove(r)
              : "string" == typeof n.className
              ? (n.className = On(n.className, r))
              : n.setAttribute(
                  "class",
                  On((n.className && n.className.baseVal) || "", r)
                );
          const a = this.isRTL ? "paddingLeft" : "paddingRight",
            o = this.isRTL ? "marginLeft" : "marginRight";
          Sn(t, Pn).forEach((e) => this.restore(a, e)),
            Sn(t, An).forEach((e) => this.restore(o, e)),
            Sn(t, jn).forEach((e) => this.restore(o, e));
        }
      }
      let Ln;
      function Dn(e) {
        return Ln || (Ln = new In(e)), Ln;
      }
      const Rn = In;
      function Mn(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      const Fn = t.createContext(null);
      var zn = "unmounted",
        $n = "exited",
        Bn = "entering",
        Un = "entered",
        Hn = "exiting",
        Wn = (function (e) {
          var n, a;
          function o(t, n) {
            var r;
            r = e.call(this, t, n) || this;
            var a,
              o = n && !n.isMounting ? t.enter : t.appear;
            return (
              (r.appearStatus = null),
              t.in
                ? o
                  ? ((a = $n), (r.appearStatus = Bn))
                  : (a = Un)
                : (a = t.unmountOnExit || t.mountOnEnter ? zn : $n),
              (r.state = { status: a }),
              (r.nextCallback = null),
              r
            );
          }
          (a = e),
            ((n = o).prototype = Object.create(a.prototype)),
            (n.prototype.constructor = n),
            oe(n, a),
            (o.getDerivedStateFromProps = function (e, t) {
              return e.in && t.status === zn ? { status: $n } : null;
            });
          var i = o.prototype;
          return (
            (i.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus);
            }),
            (i.componentDidUpdate = function (e) {
              var t = null;
              if (e !== this.props) {
                var n = this.state.status;
                this.props.in
                  ? n !== Bn && n !== Un && (t = Bn)
                  : (n !== Bn && n !== Un) || (t = Hn);
              }
              this.updateStatus(!1, t);
            }),
            (i.componentWillUnmount = function () {
              this.cancelNextCallback();
            }),
            (i.getTimeouts = function () {
              var e,
                t,
                n,
                r = this.props.timeout;
              return (
                (e = t = n = r),
                null != r &&
                  "number" != typeof r &&
                  ((e = r.exit),
                  (t = r.enter),
                  (n = void 0 !== r.appear ? r.appear : t)),
                { exit: e, enter: t, appear: n }
              );
            }),
            (i.updateStatus = function (e, t) {
              if ((void 0 === e && (e = !1), null !== t))
                if ((this.cancelNextCallback(), t === Bn)) {
                  if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var n = this.props.nodeRef
                      ? this.props.nodeRef.current
                      : r.findDOMNode(this);
                    n &&
                      (function (e) {
                        e.scrollTop;
                      })(n);
                  }
                  this.performEnter(e);
                } else this.performExit();
              else
                this.props.unmountOnExit &&
                  this.state.status === $n &&
                  this.setState({ status: zn });
            }),
            (i.performEnter = function (e) {
              var t = this,
                n = this.props.enter,
                a = this.context ? this.context.isMounting : e,
                o = this.props.nodeRef ? [a] : [r.findDOMNode(this), a],
                i = o[0],
                l = o[1],
                s = this.getTimeouts(),
                c = a ? s.appear : s.enter;
              e || n
                ? (this.props.onEnter(i, l),
                  this.safeSetState({ status: Bn }, function () {
                    t.props.onEntering(i, l),
                      t.onTransitionEnd(c, function () {
                        t.safeSetState({ status: Un }, function () {
                          t.props.onEntered(i, l);
                        });
                      });
                  }))
                : this.safeSetState({ status: Un }, function () {
                    t.props.onEntered(i);
                  });
            }),
            (i.performExit = function () {
              var e = this,
                t = this.props.exit,
                n = this.getTimeouts(),
                a = this.props.nodeRef ? void 0 : r.findDOMNode(this);
              t
                ? (this.props.onExit(a),
                  this.safeSetState({ status: Hn }, function () {
                    e.props.onExiting(a),
                      e.onTransitionEnd(n.exit, function () {
                        e.safeSetState({ status: $n }, function () {
                          e.props.onExited(a);
                        });
                      });
                  }))
                : this.safeSetState({ status: $n }, function () {
                    e.props.onExited(a);
                  });
            }),
            (i.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (i.safeSetState = function (e, t) {
              (t = this.setNextCallback(t)), this.setState(e, t);
            }),
            (i.setNextCallback = function (e) {
              var t = this,
                n = !0;
              return (
                (this.nextCallback = function (r) {
                  n && ((n = !1), (t.nextCallback = null), e(r));
                }),
                (this.nextCallback.cancel = function () {
                  n = !1;
                }),
                this.nextCallback
              );
            }),
            (i.onTransitionEnd = function (e, t) {
              this.setNextCallback(t);
              var n = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : r.findDOMNode(this),
                a = null == e && !this.props.addEndListener;
              if (n && !a) {
                if (this.props.addEndListener) {
                  var o = this.props.nodeRef
                      ? [this.nextCallback]
                      : [n, this.nextCallback],
                    i = o[0],
                    l = o[1];
                  this.props.addEndListener(i, l);
                }
                null != e && setTimeout(this.nextCallback, e);
              } else setTimeout(this.nextCallback, 0);
            }),
            (i.render = function () {
              var e = this.state.status;
              if (e === zn) return null;
              var n = this.props,
                r = n.children,
                a =
                  (n.in,
                  n.mountOnEnter,
                  n.unmountOnExit,
                  n.appear,
                  n.enter,
                  n.exit,
                  n.timeout,
                  n.addEndListener,
                  n.onEnter,
                  n.onEntering,
                  n.onEntered,
                  n.onExit,
                  n.onExiting,
                  n.onExited,
                  n.nodeRef,
                  Mn(n, [
                    "children",
                    "in",
                    "mountOnEnter",
                    "unmountOnExit",
                    "appear",
                    "enter",
                    "exit",
                    "timeout",
                    "addEndListener",
                    "onEnter",
                    "onEntering",
                    "onEntered",
                    "onExit",
                    "onExiting",
                    "onExited",
                    "nodeRef",
                  ]));
              return t.createElement(
                Fn.Provider,
                { value: null },
                "function" == typeof r
                  ? r(e, a)
                  : t.cloneElement(t.Children.only(r), a)
              );
            }),
            o
          );
        })(t.Component);
      function Vn() {}
      (Wn.contextType = Fn),
        (Wn.propTypes = {}),
        (Wn.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: Vn,
          onEntering: Vn,
          onEntered: Vn,
          onExit: Vn,
          onExiting: Vn,
          onExited: Vn,
        }),
        (Wn.UNMOUNTED = zn),
        (Wn.EXITED = $n),
        (Wn.ENTERING = Bn),
        (Wn.ENTERED = Un),
        (Wn.EXITING = Hn);
      const qn = Wn;
      function Qn(e, t) {
        const n = sn(e, t) || "",
          r = -1 === n.indexOf("ms") ? 1e3 : 1;
        return parseFloat(n) * r;
      }
      function Kn(e, t) {
        const n = Qn(e, "transitionDuration"),
          r = Qn(e, "transitionDelay"),
          a = un(
            e,
            (n) => {
              n.target === e && (a(), t(n));
            },
            n + r
          );
      }
      function Zn(e) {
        return e && "setState" in e ? r.findDOMNode(e) : null != e ? e : null;
      }
      const Gn = t.forwardRef(
          (
            {
              onEnter: e,
              onEntering: n,
              onEntered: r,
              onExit: a,
              onExiting: o,
              onExited: i,
              addEndListener: l,
              children: s,
              childRef: c,
              ...u
            },
            d
          ) => {
            const f = (0, t.useRef)(null),
              p = tn(f, c),
              m = (e) => {
                p(Zn(e));
              },
              h = (e) => (t) => {
                e && f.current && e(f.current, t);
              },
              g = (0, t.useCallback)(h(e), [e]),
              b = (0, t.useCallback)(h(n), [n]),
              v = (0, t.useCallback)(h(r), [r]),
              y = (0, t.useCallback)(h(a), [a]),
              E = (0, t.useCallback)(h(o), [o]),
              w = (0, t.useCallback)(h(i), [i]),
              x = (0, t.useCallback)(h(l), [l]);
            return (0, Be.jsx)(qn, {
              ref: d,
              ...u,
              onEnter: g,
              onEntered: v,
              onEntering: b,
              onExit: y,
              onExited: w,
              onExiting: E,
              addEndListener: x,
              nodeRef: f,
              children:
                "function" == typeof s
                  ? (e, t) => s(e, { ...t, ref: m })
                  : t.cloneElement(s, { ref: m }),
            });
          }
        ),
        Yn = { [Bn]: "show", [Un]: "show" },
        Xn = t.forwardRef(
          (
            { className: e, children: n, transitionClasses: r = {}, ...a },
            o
          ) => {
            const i = (0, t.useCallback)(
              (e, t) => {
                !(function (e) {
                  e.offsetHeight;
                })(e),
                  null == a.onEnter || a.onEnter(e, t);
              },
              [a]
            );
            return (0, Be.jsx)(Gn, {
              ref: o,
              addEndListener: Kn,
              ...a,
              onEnter: i,
              childRef: n.ref,
              children: (a, o) =>
                t.cloneElement(n, {
                  ...o,
                  className: $e()("fade", e, n.props.className, Yn[a], r[a]),
                }),
            });
          }
        );
      (Xn.defaultProps = {
        in: !1,
        timeout: 300,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
      }),
        (Xn.displayName = "Fade");
      const Jn = Xn,
        er = xt("modal-body"),
        tr = t.createContext({ onHide() {} }),
        nr = t.forwardRef(
          (
            {
              bsPrefix: e,
              className: t,
              contentClassName: n,
              centered: r,
              size: a,
              fullscreen: o,
              children: i,
              scrollable: l,
              ...s
            },
            c
          ) => {
            const u = `${(e = Ze(e, "modal"))}-dialog`,
              d =
                "string" == typeof o
                  ? `${e}-fullscreen-${o}`
                  : `${e}-fullscreen`;
            return (0, Be.jsx)("div", {
              ...s,
              ref: c,
              className: $e()(
                u,
                t,
                a && `${e}-${a}`,
                r && `${u}-centered`,
                l && `${u}-scrollable`,
                o && d
              ),
              children: (0, Be.jsx)("div", {
                className: $e()(`${e}-content`, n),
                children: i,
              }),
            });
          }
        );
      nr.displayName = "ModalDialog";
      const rr = nr,
        ar = xt("modal-footer"),
        or = {
          "aria-label": de().string,
          onClick: de().func,
          variant: de().oneOf(["white"]),
        },
        ir = t.forwardRef(({ className: e, variant: t, ...n }, r) =>
          (0, Be.jsx)("button", {
            ref: r,
            type: "button",
            className: $e()("btn-close", t && `btn-close-${t}`, e),
            ...n,
          })
        );
      (ir.displayName = "CloseButton"),
        (ir.propTypes = or),
        (ir.defaultProps = { "aria-label": "Close" });
      const lr = ir,
        sr = t.forwardRef(
          (
            {
              closeLabel: e,
              closeVariant: n,
              closeButton: r,
              onHide: a,
              children: o,
              ...i
            },
            l
          ) => {
            const s = (0, t.useContext)(tr),
              c = Jt(() => {
                null == s || s.onHide(), null == a || a();
              });
            return (0, Be.jsxs)("div", {
              ref: l,
              ...i,
              children: [
                o,
                r &&
                  (0, Be.jsx)(lr, { "aria-label": e, variant: n, onClick: c }),
              ],
            });
          }
        );
      sr.defaultProps = { closeLabel: "Close", closeButton: !1 };
      const cr = sr,
        ur = t.forwardRef(
          ({ bsPrefix: e, className: t, ...n }, r) => (
            (e = Ze(e, "modal-header")),
            (0, Be.jsx)(cr, { ref: r, ...n, className: $e()(t, e) })
          )
        );
      (ur.displayName = "ModalHeader"),
        (ur.defaultProps = { closeLabel: "Close", closeButton: !1 });
      const dr = ur,
        fr = (e) =>
          t.forwardRef((t, n) =>
            (0, Be.jsx)("div", {
              ...t,
              ref: n,
              className: $e()(t.className, e),
            })
          ),
        pr = xt("modal-title", { Component: fr("h4") }),
        mr = {
          show: !1,
          backdrop: !0,
          keyboard: !0,
          autoFocus: !0,
          enforceFocus: !0,
          restoreFocus: !0,
          animation: !0,
          dialogAs: rr,
        };
      function hr(e) {
        return (0, Be.jsx)(Jn, { ...e, timeout: null });
      }
      function gr(e) {
        return (0, Be.jsx)(Jn, { ...e, timeout: null });
      }
      const br = t.forwardRef(
        (
          {
            bsPrefix: e,
            className: n,
            style: r,
            dialogClassName: a,
            contentClassName: o,
            children: i,
            dialogAs: l,
            "aria-labelledby": s,
            "aria-describedby": c,
            "aria-label": u,
            show: d,
            animation: f,
            backdrop: p,
            keyboard: m,
            onEscapeKeyDown: h,
            onShow: g,
            onHide: b,
            container: v,
            autoFocus: y,
            enforceFocus: E,
            restoreFocus: w,
            restoreFocusOptions: x,
            onEntered: _,
            onExit: k,
            onExiting: N,
            onEnter: C,
            onEntering: T,
            onExited: S,
            backdropClassName: O,
            manager: P,
            ...A
          },
          j
        ) => {
          const [I, L] = (0, t.useState)({}),
            [D, R] = (0, t.useState)(!1),
            M = (0, t.useRef)(!1),
            F = (0, t.useRef)(!1),
            z = (0, t.useRef)(null),
            [$, B] = Xt(),
            U = tn(j, B),
            H = Jt(b),
            W = Ge();
          e = Ze(e, "modal");
          const V = (0, t.useMemo)(() => ({ onHide: H }), [H]);
          function q() {
            return P || Dn({ isRTL: W });
          }
          function Q(e) {
            if (!Ht) return;
            const t = q().getScrollbarWidth() > 0,
              n = e.scrollHeight > Kt(e).documentElement.clientHeight;
            L({
              paddingRight: t && !n ? Yt() : void 0,
              paddingLeft: !t && n ? Yt() : void 0,
            });
          }
          const K = Jt(() => {
            $ && Q($.dialog);
          });
          nn(() => {
            Zt(window, "resize", K), null == z.current || z.current();
          });
          const Z = () => {
              M.current = !0;
            },
            G = (e) => {
              M.current && $ && e.target === $.dialog && (F.current = !0),
                (M.current = !1);
            },
            Y = () => {
              R(!0),
                (z.current = un($.dialog, () => {
                  R(!1);
                }));
            },
            X = (e) => {
              "static" !== p
                ? F.current || e.target !== e.currentTarget
                  ? (F.current = !1)
                  : null == b || b()
                : ((e) => {
                    e.target === e.currentTarget && Y();
                  })(e);
            },
            J = (0, t.useCallback)(
              (t) =>
                (0, Be.jsx)("div", {
                  ...t,
                  className: $e()(`${e}-backdrop`, O, !f && "show"),
                }),
              [f, O, e]
            ),
            ee = { ...r, ...I };
          return (
            (ee.display = "block"),
            (0, Be.jsx)(tr.Provider, {
              value: V,
              children: (0, Be.jsx)(Nn, {
                show: d,
                ref: U,
                backdrop: p,
                container: v,
                keyboard: !0,
                autoFocus: y,
                enforceFocus: E,
                restoreFocus: w,
                restoreFocusOptions: x,
                onEscapeKeyDown: (e) => {
                  m || "static" !== p
                    ? m && h && h(e)
                    : (e.preventDefault(), Y());
                },
                onShow: g,
                onHide: b,
                onEnter: (e, t) => {
                  e && Q(e), null == C || C(e, t);
                },
                onEntering: (e, t) => {
                  null == T || T(e, t), Qt(window, "resize", K);
                },
                onEntered: _,
                onExit: (e) => {
                  null == z.current || z.current(), null == k || k(e);
                },
                onExiting: N,
                onExited: (e) => {
                  e && (e.style.display = ""),
                    null == S || S(e),
                    Zt(window, "resize", K);
                },
                manager: q(),
                transition: f ? hr : void 0,
                backdropTransition: f ? gr : void 0,
                renderBackdrop: J,
                renderDialog: (t) =>
                  (0, Be.jsx)("div", {
                    role: "dialog",
                    ...t,
                    style: ee,
                    className: $e()(n, e, D && `${e}-static`, !f && "show"),
                    onClick: p ? X : void 0,
                    onMouseUp: G,
                    "aria-label": u,
                    "aria-labelledby": s,
                    "aria-describedby": c,
                    children: (0, Be.jsx)(l, {
                      ...A,
                      onMouseDown: Z,
                      className: a,
                      contentClassName: o,
                      children: i,
                    }),
                  }),
              }),
            })
          );
        }
      );
      (br.displayName = "Modal"), (br.defaultProps = mr);
      const vr = Object.assign(br, {
        Body: er,
        Header: dr,
        Title: pr,
        Footer: ar,
        Dialog: rr,
        TRANSITION_DURATION: 300,
        BACKDROP_TRANSITION_DURATION: 150,
      });
      var yr = n(86),
        Er = {};
      (Er.styleTagTransform = h()),
        (Er.setAttributes = d()),
        (Er.insert = c().bind(null, "head")),
        (Er.domAPI = l()),
        (Er.insertStyleElement = p()),
        o()(yr.Z, Er),
        yr.Z && yr.Z.locals && yr.Z.locals;
      var wr = function () {
          var e = (0, t.useContext)(Ne),
            n = (e.store, e.actions),
            r = be((0, t.useState)(""), 2),
            a = r[0],
            o = r[1],
            i = be((0, t.useState)(""), 2),
            l = i[0],
            s = i[1],
            c = be((0, t.useState)(""), 2),
            u = c[0],
            d = c[1],
            f = be((0, t.useState)(""), 2),
            p = f[0],
            m = f[1],
            h = be((0, t.useState)(""), 2),
            g = h[0],
            b = h[1],
            v =
              (sessionStorage.getItem("token"),
              q(),
              be((0, t.useState)(!1), 2)),
            y = v[0],
            E = v[1],
            w = function () {
              return E(!1);
            };
          return t.createElement(
            t.Fragment,
            null,
            y &&
              t.createElement(
                vr,
                { show: y, onHide: w },
                t.createElement(
                  vr.Header,
                  { closeButton: !0 },
                  t.createElement(vr.Title, null, "Registrate")
                ),
                t.createElement(
                  vr.Body,
                  null,
                  t.createElement(
                    "p",
                    null,
                    "Por favor llena este formulario para crear tu cuenta"
                  ),
                  t.createElement(
                    Ut,
                    null,
                    t.createElement(
                      Ut.Group,
                      {
                        className: "mb-3",
                        controlId: "exampleForm.ControlInput1",
                      },
                      t.createElement(Ut.Label, null, "Nombre"),
                      t.createElement(Ut.Control, {
                        type: "text",
                        placeholder: "Coloca tu nombre",
                        autoFocus: !0,
                        onChange: function (e) {
                          return s(e.target.value);
                        },
                      })
                    ),
                    t.createElement(
                      Ut.Group,
                      {
                        className: "mb-3",
                        controlId: "exampleForm.ControlInput1",
                      },
                      t.createElement(Ut.Label, null, "Apellido"),
                      t.createElement(Ut.Control, {
                        type: "text",
                        placeholder: "Coloca tu apellido",
                        autoFocus: !0,
                        onChange: function (e) {
                          return m(e.target.value);
                        },
                      })
                    ),
                    t.createElement(
                      Ut.Group,
                      {
                        className: "mb-3",
                        controlId: "exampleForm.ControlInput1",
                      },
                      t.createElement(Ut.Label, null, "Teléfono"),
                      t.createElement(Ut.Control, {
                        type: "Number",
                        placeholder: "Coloca tu teléfono",
                        autoFocus: !0,
                        onChange: function (e) {
                          return d(e.target.value);
                        },
                      })
                    ),
                    t.createElement(
                      Ut.Group,
                      {
                        className: "mb-3",
                        controlId: "exampleForm.ControlInput1",
                      },
                      t.createElement(Ut.Label, null, "Email"),
                      t.createElement(Ut.Control, {
                        type: "email",
                        placeholder: "Coloca tu email",
                        autoFocus: !0,
                        onChange: function (e) {
                          return o(e.target.value);
                        },
                      })
                    ),
                    t.createElement(
                      Ut.Group,
                      {
                        className: "mb-3",
                        controlId: "exampleForm.ControlInput1",
                      },
                      t.createElement(Ut.Label, null, "Contraseña"),
                      t.createElement(Ut.Control, {
                        type: "password",
                        placeholder: "Coloca una contraseña",
                        autoFocus: !0,
                        onChange: function (e) {
                          return b(e.target.value);
                        },
                      })
                    )
                  )
                ),
                t.createElement(
                  vr.Footer,
                  null,
                  t.createElement(
                    Xe,
                    { variant: "danger", onClick: w },
                    "Cancelar"
                  ),
                  t.createElement(
                    Xe,
                    {
                      variant: "success",
                      onClick: function (e) {
                        e.preventDefault(),
                          n.signup(l, p, u, a, g),
                          "" != l &&
                            "" != p &&
                            "" != u &&
                            "" != a &&
                            "" != g &&
                            (w(),
                            n.setNotification(
                              "¡Te has registrado exitosamente!"
                            ));
                      },
                    },
                    "Registrarme"
                  )
                )
              ),
            t.createElement(ot, {
              title: "Regístrate",
              classButton: "btn signup__button--register",
              handleShow: function () {
                return E(!0);
              },
            })
          );
        },
        xr = function () {
          var e = (0, t.useContext)(Ne),
            n = e.store,
            r = (e.actions, be((0, t.useState)(""), 2)),
            a = r[0],
            o = r[1],
            i = be((0, t.useState)([]), 2),
            l = i[0],
            s = i[1];
          return t.createElement(
            "div",
            { className: "container" },
            t.createElement("input", {
              type: "text",
              value: a,
              style: { minWidth: "150px" },
              className: "form-control shadow-none border-secondary rounded",
              placeholder: "Busca lo que quieras...",
              onChange: function (e) {
                !(function (e) {
                  var t = [],
                    r = [];
                  e.length > 0 &&
                    ((t = n.celulares.filter(function (t) {
                      var n = new RegExp("".concat(e), "gi");
                      return t.titulo.match(n);
                    })),
                    (r = n.computadoras.filter(function (t) {
                      var n = new RegExp("".concat(e), "gi");
                      return t.titulo.match(n);
                    })),
                    console.log(r));
                  var a = [].concat(Ee(r), Ee(t));
                  console.log("match", a), s(a), o(e);
                })(e.target.value.trim());
              },
            }),
            l &&
              l.map(function (e, n) {
                return t.createElement(
                  "div",
                  {
                    key: n,
                    className:
                      "suggestions col-md-12 justify-content-md-center",
                    onClick: function (t) {
                      return (n = e.titulo), o(n), void s([]);
                      var n;
                    },
                  },
                  e.titulo
                );
              })
          );
        },
        _r = function () {
          var e = (0, t.useContext)(Ne),
            n = e.store,
            r = (e.actions, n.computadoras),
            a = n.celulares,
            o = r.concat(a);
          return t.createElement(
            t.Fragment,
            null,
            t.createElement(xr, null),
            t.createElement(Ae, null),
            t.createElement(Fe, null),
            t.createElement(
              "section",
              { className: "banner" },
              t.createElement(
                "div",
                { className: "container d-flex flex-column mb-2" },
                t.createElement(
                  "header",
                  null,
                  t.createElement(
                    "h1",
                    { className: "display-4 text-bold text-center" },
                    "Haz Tu Oferta"
                  ),
                  t.createElement(
                    "p",
                    { className: "text-center text-bold" },
                    " ",
                    t.createElement(
                      "i",
                      null,
                      "Oferta, Intercambia o Subasta tus Productos. Que esperas para comprar a tu manera?"
                    )
                  )
                ),
                t.createElement(
                  "div",
                  { className: "call-to-action text-center" },
                  t.createElement(
                    "button",
                    {
                      className: "btn btn-outline-secondary",
                      onClick: function (e) {
                        return (function (e) {
                          let { to: n, replace: r, state: a } = e;
                          W() || P(!1);
                          let o = q();
                          return (
                            (0, t.useEffect)(() => {
                              o(n, { replace: r, state: a });
                            }),
                            null
                          );
                        })(t.createElement(wr, null));
                      },
                    },
                    "Compra Diferente, Regístrate Ya!"
                  )
                )
              )
            ),
            t.createElement(
              "div",
              { className: "container" },
              t.createElement(
                "h2",
                { className: "text-left mt-5 mb-3 display-5" },
                t.createElement("strong", null, "Los Mas Buscados")
              ),
              t.createElement(
                "div",
                { className: "itemcard gap-4" },
                o.map(function (e, n) {
                  return t.createElement(Pe, { computadoras: e, key: n });
                })
              )
            )
          );
        },
        kr = function (e) {
          var n = (0, t.useContext)(Ne),
            r = n.store,
            a = n.actions;
          return (
            (0, t.useEffect)(
              function () {
                r.computadoras.length > 0 &&
                  a.getComputadoraId(r.computadoras[0].id);
              },
              [r.computadoras]
            ),
            t.createElement(
              t.Fragment,
              null,
              t.createElement(
                "div",
                {
                  className: "modal",
                  id: "ventana1",
                  "aria-hidden": "true",
                  "aria-labelledby": "exampleModalToggleLabel",
                  tabIndex: "-1",
                },
                t.createElement(
                  "div",
                  { className: "modal-dialog modal-dialog-centered" },
                  t.createElement(
                    "div",
                    { className: "modal-content" },
                    t.createElement(
                      "div",
                      { className: "modal-header" },
                      t.createElement(
                        "h5",
                        {
                          className: "modal-title",
                          id: "exampleModalToggleLabel",
                        },
                        "Venta"
                      ),
                      t.createElement("button", {
                        type: "button",
                        className: "btn-close",
                        "data-bs-dismiss": "modal",
                        "aria-label": "Close",
                      })
                    ),
                    t.createElement(
                      "div",
                      { className: "modal-body" },
                      "Deseas comprar este producto por",
                      r.computadoras[0] &&
                        " " +
                          r.computadoras[0].moneda +
                          " " +
                          r.computadoras[0].precio,
                      "?"
                    ),
                    t.createElement(
                      "div",
                      { className: "modal-footer" },
                      t.createElement(
                        "button",
                        {
                          className: "btn btn-primary",
                          "data-bs-target": "#ventana2",
                          "data-bs-toggle": "modal",
                          "data-bs-dismiss": "modal",
                        },
                        "Comprar"
                      )
                    )
                  )
                )
              ),
              t.createElement(
                "div",
                {
                  className: "modal fade",
                  id: "ventana2",
                  "aria-hidden": "true",
                  "aria-labelledby": "exampleModalToggleLabel2",
                  tabIndex: "-1",
                },
                t.createElement(
                  "div",
                  { className: "modal-dialog modal-dialog-centered modal1" },
                  t.createElement(
                    "div",
                    { className: "modal-content" },
                    t.createElement(
                      "div",
                      { className: "modal-header" },
                      t.createElement(
                        "h5",
                        {
                          className: "modal-title",
                          id: "exampleModalToggleLabel2",
                        },
                        "Datos del vendedor"
                      ),
                      t.createElement("button", {
                        type: "button",
                        className: "btn-close",
                        "data-bs-dismiss": "modal",
                        "aria-label": "Close",
                      })
                    ),
                    t.createElement(
                      "div",
                      { className: "modal-body d-flex" },
                      t.createElement(
                        "ul",
                        { className: "justify-content-center" },
                        t.createElement(
                          "li",
                          null,
                          r.computadora.name + " " + r.computadora.lastname
                        ),
                        t.createElement("br", null),
                        t.createElement("li", null, r.computadora.email),
                        t.createElement("br", null),
                        t.createElement("li", null, r.computadora.phone)
                      )
                    ),
                    t.createElement("div", { className: "modal-footer" })
                  )
                )
              ),
              " ",
              t.createElement(
                "a",
                {
                  className: "btn signup__button--register me-2",
                  "data-bs-toggle": "modal",
                  href: "#ventana1",
                  role: "button",
                },
                "Haz tu oferta"
              )
            )
          );
        },
        Nr = function () {
          var e = (0, t.useContext)(Ne),
            n = e.store,
            r = e.actions;
          return t.createElement(
            "div",
            { className: "container" },
            t.createElement(kr, null),
            t.createElement(
              "ul",
              { className: "list-group" },
              n.demo.map(function (e, n) {
                return t.createElement(
                  "li",
                  {
                    key: n,
                    className: "list-group-item d-flex justify-content-between",
                    style: { background: e.background },
                  },
                  t.createElement(
                    te,
                    { to: "/single/" + n },
                    t.createElement("span", null, "Link to: ", e.title)
                  ),
                  "orange" === e.background
                    ? t.createElement(
                        "p",
                        { style: { color: e.initial } },
                        "Check store/flux.js scroll to the actions to see the code"
                      )
                    : null,
                  t.createElement(
                    "button",
                    {
                      className: "btn btn-success",
                      onClick: function () {
                        return r.changeColor(n, "orange");
                      },
                    },
                    "Change Color"
                  )
                );
              })
            ),
            t.createElement("br", null),
            t.createElement(
              te,
              { to: "/" },
              t.createElement(
                "button",
                { className: "btn btn-primary" },
                "Back home"
              )
            )
          );
        };
      n.p;
      var Cr = function (e) {
          var n = e.handleSubmit,
            r = e.submitLabel,
            a = e.hasCancelButton,
            o = void 0 !== a && a,
            i = e.handleCancel,
            l = e.initialText,
            s = void 0 === l ? "" : l,
            c = be((0, t.useState)(s), 2),
            u = c[0],
            d = c[1],
            f = 0 === u.length;
          return t.createElement(
            "form",
            {
              onSubmit: function (e) {
                e.preventDefault(), n(u), d("");
              },
            },
            t.createElement("textarea", {
              className: "comment-form-textarea",
              value: u,
              onChange: function (e) {
                return d(e.target.value);
              },
            }),
            t.createElement(
              "button",
              { className: "comment-form-button", disabled: f },
              r
            ),
            o &&
              t.createElement(
                "button",
                {
                  type: "button",
                  className: "comment-form-button comment-form-cancel-button",
                  onClick: i,
                },
                "Cancel"
              )
          );
        },
        Tr = function e(n) {
          var r = n.comment,
            a = n.replies,
            o = n.setActiveComment,
            i = n.activeComment,
            l = n.updateComment,
            s = n.deleteComment,
            c = n.addComment,
            u = n.parentId,
            d = void 0 === u ? null : u,
            f = n.currentUserId,
            p = i && i.id === r.id && "editing" === i.type,
            m = i && i.id === r.id && "replying" === i.type,
            h = new Date() - new Date(r.createdAt) > 3e5,
            g = f === r.userId && 0 === a.length && !h,
            b = Boolean(f),
            v = f === r.userId && !h,
            y = d || r.id,
            E = new Date(r.createdAt).toLocaleDateString();
          return t.createElement(
            "div",
            { key: r.id, className: "comment" },
            t.createElement(
              "div",
              { className: "comment-image-container" },
              t.createElement("img", { src: "/user-icon.png" })
            ),
            t.createElement(
              "div",
              { className: "comment-right-part" },
              t.createElement(
                "div",
                { className: "comment-content" },
                t.createElement(
                  "div",
                  { className: "comment-author" },
                  r.username
                ),
                t.createElement("div", null, E)
              ),
              !p &&
                t.createElement("div", { className: "comment-text" }, r.body),
              p &&
                t.createElement(Cr, {
                  submitLabel: "Update",
                  hasCancelButton: !0,
                  initialText: r.body,
                  handleSubmit: function (e) {
                    return l(e, r.id);
                  },
                  handleCancel: function () {
                    o(null);
                  },
                }),
              t.createElement(
                "div",
                { className: "comment-actions" },
                b &&
                  t.createElement(
                    "div",
                    {
                      className: "comment-action",
                      onClick: function () {
                        return o({ id: r.id, type: "replying" });
                      },
                    },
                    "Reply"
                  ),
                v &&
                  t.createElement(
                    "div",
                    {
                      className: "comment-action",
                      onClick: function () {
                        return o({ id: r.id, type: "editing" });
                      },
                    },
                    "Edit"
                  ),
                g &&
                  t.createElement(
                    "div",
                    {
                      className: "comment-action",
                      onClick: function () {
                        return s(r.id);
                      },
                    },
                    "Delete"
                  )
              ),
              m &&
                t.createElement(Cr, {
                  submitLabel: "Reply",
                  handleSubmit: function (e) {
                    return c(e, y);
                  },
                }),
              a.length > 0 &&
                t.createElement(
                  "div",
                  { className: "replies" },
                  a.map(function (n) {
                    return t.createElement(e, {
                      comment: n,
                      key: n.id,
                      setActiveComment: o,
                      activeComment: i,
                      updateComment: l,
                      deleteComment: s,
                      addComment: c,
                      parentId: r.id,
                      replies: [],
                      currentUserId: f,
                    });
                  })
                )
            )
          );
        },
        Sr = (function () {
          var e = ye(
            xe().mark(function e() {
              return xe().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt("return", []);
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        Or = (function () {
          var e = ye(
            xe().mark(function e(t) {
              var n,
                r = arguments;
              return xe().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = r.length > 1 && void 0 !== r[1] ? r[1] : null),
                        e.abrupt("return", {
                          id: Math.random().toString(36).substr(2, 9),
                          body: t,
                          parentId: n,
                          userId: "1",
                          username: "John",
                          createdAt: new Date().toISOString(),
                        })
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        Pr = (function () {
          var e = ye(
            xe().mark(function e(t) {
              return xe().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt("return", { text: t });
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        Ar = (function () {
          var e = ye(
            xe().mark(function e() {
              return xe().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt("return", {});
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })();
      function jr(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Ir(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? jr(Object(n), !0).forEach(function (t) {
                me(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : jr(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var Lr = function (e) {
          e.commentsUrl;
          var n = e.currentUserId,
            r = be((0, t.useState)([]), 2),
            a = r[0],
            o = r[1],
            i = be((0, t.useState)(null), 2),
            l = i[0],
            s = i[1],
            c = a.filter(function (e) {
              return null === e.parentId;
            }),
            u = function (e, t) {
              Or(e, t).then(function (e) {
                o([e].concat(Ee(a))), s(null);
              });
            },
            d = function (e, t) {
              Pr(e).then(function () {
                var n = a.map(function (n) {
                  return n.id === t ? Ir(Ir({}, n), {}, { body: e }) : n;
                });
                o(n), s(null);
              });
            },
            f = function (e) {
              window.confirm("Are you sure you want to remove comment?") &&
                Ar().then(function () {
                  var t = a.filter(function (t) {
                    return t.id !== e;
                  });
                  o(t);
                });
            };
          return (
            (0, t.useEffect)(function () {
              Sr().then(function (e) {
                o(e);
              });
            }, []),
            t.createElement(
              "div",
              { className: "comments" },
              t.createElement(
                "h3",
                { className: "comments-title" },
                "Comentarios"
              ),
              t.createElement(
                "div",
                { className: "comment-form-title" },
                "Deja un comentario"
              ),
              t.createElement(Cr, { submitLabel: "Publicar", handleSubmit: u }),
              t.createElement(
                "div",
                { className: "comments-container" },
                c.map(function (e) {
                  return t.createElement(Tr, {
                    key: e.id,
                    comment: e,
                    replies:
                      ((r = e.id),
                      a
                        .filter(function (e) {
                          return e.parentId === r;
                        })
                        .sort(function (e, t) {
                          return (
                            new Date(e.createdAt).getTime() -
                            new Date(t.createdAt).getTime()
                          );
                        })),
                    activeComment: l,
                    setActiveComment: s,
                    addComment: u,
                    deleteComment: f,
                    updateComment: d,
                    currentUserId: n,
                  });
                  var r;
                })
              )
            )
          );
        },
        Dr = n(882),
        Rr = {};
      (Rr.styleTagTransform = h()),
        (Rr.setAttributes = d()),
        (Rr.insert = c().bind(null, "head")),
        (Rr.domAPI = l()),
        (Rr.insertStyleElement = p()),
        o()(Dr.Z, Rr),
        Dr.Z && Dr.Z.locals && Dr.Z.locals;
      var Mr = n(347),
        Fr = {};
      (Fr.styleTagTransform = h()),
        (Fr.setAttributes = d()),
        (Fr.insert = c().bind(null, "head")),
        (Fr.domAPI = l()),
        (Fr.insertStyleElement = p()),
        o()(Mr.Z, Fr),
        Mr.Z && Mr.Z.locals && Mr.Z.locals;
      var zr = function (e) {
          var n = (0, t.useContext)(Ne),
            r = n.store,
            a =
              (n.actions,
              (function () {
                let { matches: e } = (0, t.useContext)(O),
                  n = e[e.length - 1];
                return n ? n.params : {};
              })());
          console.log(a);
          var o = r.computadoras.find(function (e) {
            return e.id == a.id;
          });
          console.log(o);
          var i = be((0, t.useState)(""), 2),
            l =
              (i[0],
              i[1],
              function (e) {
                console.log(e.target), console.log("Image clicked");
              });
          return t.createElement(
            "div",
            { className: "container" },
            t.createElement(
              "div",
              { className: "container mt-5 mb-5" },
              t.createElement(
                "div",
                { className: "card" },
                t.createElement(
                  "div",
                  { className: "row g-0" },
                  t.createElement(
                    "div",
                    { className: "col-md-6 border-end" },
                    t.createElement(
                      "div",
                      {
                        className: "d-flex flex-column justify-content-center",
                      },
                      t.createElement(
                        "div",
                        { className: "main_image" },
                        t.createElement("img", {
                          src: o && o.img_url,
                          id: "main_product_image",
                          width: "350",
                        })
                      ),
                      t.createElement(
                        "div",
                        { className: "thumbnail_images" },
                        t.createElement(
                          "ul",
                          { id: "thumbnail" },
                          t.createElement(
                            "li",
                            null,
                            t.createElement("img", {
                              onClick: function (e) {
                                return l(e);
                              },
                              src: "https://d22k5h68hofcrd.cloudfront.net/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/6/1/612H9LA-2_T1666984556.png",
                              width: "70",
                            })
                          ),
                          t.createElement(
                            "li",
                            null,
                            t.createElement("img", {
                              onClick: function (e) {
                                return l(e);
                              },
                              src: "https://d22k5h68hofcrd.cloudfront.net/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/6/1/612H9LA-3_T1666984556.png",
                              width: "70",
                            })
                          ),
                          t.createElement(
                            "li",
                            null,
                            t.createElement("img", {
                              onClick: function (e) {
                                return l(e);
                              },
                              src: "https://d22k5h68hofcrd.cloudfront.net/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/6/1/612H9LA-4_T1666984557.png",
                              width: "70",
                            })
                          ),
                          t.createElement(
                            "li",
                            null,
                            t.createElement("img", {
                              onClick: function (e) {
                                return l(e);
                              },
                              src: "https://d22k5h68hofcrd.cloudfront.net/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/6/1/612H9LA-7_T1666984558.png",
                              width: "70",
                            })
                          )
                        )
                      )
                    )
                  ),
                  t.createElement(
                    "div",
                    { className: "col-md-6" },
                    t.createElement(
                      "div",
                      { className: "p-3 right-side" },
                      t.createElement(
                        "div",
                        {
                          className:
                            "d-flex justify-content-between align-items-center",
                        },
                        t.createElement("h2", null, o && o.titulo)
                      ),
                      t.createElement("div", {
                        className:
                          "d-flex justify-content-between align-items-center",
                      }),
                      t.createElement(
                        "div",
                        { className: "mt-2 pr-3 content" },
                        t.createElement(
                          "div",
                          { className: "card-body" },
                          t.createElement("h1", { className: "card-title" }),
                          t.createElement(
                            "ul",
                            { className: "list-group list-group-flush" },
                            t.createElement(
                              "li",
                              { className: "list-group-item" },
                              t.createElement("strong", null, "Marca:"),
                              " ",
                              o && o.marca,
                              t.createElement(
                                "strong",
                                { className: "ms-3" },
                                "Modelo:"
                              ),
                              " ",
                              o && o.modelo
                            ),
                            t.createElement(
                              "li",
                              { className: "list-group-item" },
                              t.createElement("strong", null, "Pantalla:"),
                              " ",
                              o && o.pantalla
                            ),
                            t.createElement(
                              "li",
                              { className: "list-group-item" },
                              t.createElement("strong", null, "Procesador:"),
                              " ",
                              o && o.procesador
                            ),
                            t.createElement(
                              "li",
                              { className: "list-group-item" },
                              t.createElement("strong", null, "Disco Duro:"),
                              " ",
                              o && o.disco_duro
                            ),
                            t.createElement(
                              "li",
                              { className: "list-group-item" },
                              t.createElement("strong", null, "Memoria RAM:"),
                              " ",
                              o && o.memoria_ram
                            ),
                            t.createElement(
                              "li",
                              { className: "list-group-item" },
                              t.createElement(
                                "strong",
                                null,
                                "Sistema Operativo:"
                              ),
                              " ",
                              o && o.sistema_operativo
                            ),
                            t.createElement(
                              "li",
                              { className: "list-group-item" },
                              t.createElement(
                                "strong",
                                null,
                                "Tipo de producto:"
                              ),
                              " ",
                              o && o.nuevo_usado
                            ),
                            t.createElement(
                              "li",
                              { className: "list-group-item" },
                              t.createElement(
                                "strong",
                                null,
                                "Tipo de transacción:"
                              ),
                              " ",
                              o && o.tipo_de_negocio
                            ),
                            t.createElement(
                              "li",
                              { className: "list-group-item" },
                              t.createElement("strong", null, "Descripcion:"),
                              " ",
                              o && o.descripcion
                            )
                          ),
                          t.createElement("hr", null),
                          t.createElement("br", null),
                          t.createElement(
                            "div",
                            { className: "product-info-price" },
                            t.createElement(
                              "div",
                              { className: "price-box price-final_price" },
                              t.createElement(
                                "span",
                                {
                                  className:
                                    "price-container price-final_price tax weee",
                                  translate: "no",
                                },
                                t.createElement(
                                  "h5",
                                  null,
                                  t.createElement(
                                    "strong",
                                    { className: "me-3" },
                                    "Precio:"
                                  ),
                                  o && o.moneda + " " + o.precio
                                )
                              )
                            )
                          )
                        ),
                        t.createElement(
                          "div",
                          { className: "buttons d-flex flex-row mt-5 gap-3" },
                          t.createElement(
                            "button",
                            { className: "btn btn-outline-dark" },
                            "Agregar a Favoritos"
                          ),
                          t.createElement(kr, null)
                        )
                      )
                    )
                  )
                )
              )
            ),
            t.createElement("hr", null),
            t.createElement(
              "div",
              null,
              t.createElement(Lr, {
                commentsUrl:
                  "https://3000-frako23-haztuofertacom-c8ycfnd9gg3.ws-us77.gitpod.io/singleComp/1",
                currentUserId: "comment.userId",
              }),
              ";"
            )
          );
        },
        $r =
          void 0 !== n.g &&
          n.g.navigator &&
          "ReactNative" === n.g.navigator.product;
      const Br =
        "undefined" != typeof document || $r ? t.useLayoutEffect : t.useEffect;
      var Ur = new WeakMap(),
        Hr = function (e, t) {
          if (e && t) {
            var n = Ur.get(t) || new Map();
            Ur.set(t, n);
            var r = n.get(e);
            return (
              r || (((r = t.matchMedia(e)).refCount = 0), n.set(r.media, r)), r
            );
          }
        };
      function Wr(e, n) {
        void 0 === n && (n = "undefined" == typeof window ? void 0 : window);
        var r = Hr(e, n),
          a = (0, t.useState)(function () {
            return !!r && r.matches;
          }),
          o = a[0],
          i = a[1];
        return (
          Br(
            function () {
              var t = Hr(e, n);
              if (!t) return i(!1);
              var r = Ur.get(n),
                a = function () {
                  i(t.matches);
                };
              return (
                t.refCount++,
                t.addListener(a),
                a(),
                function () {
                  t.removeListener(a),
                    t.refCount--,
                    t.refCount <= 0 && (null == r || r.delete(t.media)),
                    (t = void 0);
                }
              );
            },
            [e]
          ),
          o
        );
      }
      const Vr = (function (e) {
          var n = Object.keys(e);
          function r(e, t) {
            return e === t ? t : e ? e + " and " + t : t;
          }
          return function (a, o, i) {
            var l, s;
            "object" == typeof a
              ? ((l = a), (i = o), (o = !0))
              : (((s = {})[a] = o = o || !0), (l = s));
            var c = (0, t.useMemo)(
              function () {
                return Object.entries(l).reduce(function (t, a) {
                  var o,
                    i = a[0],
                    l = a[1];
                  return (
                    ("up" !== l && !0 !== l) ||
                      (t = r(
                        t,
                        ("number" == typeof (o = e[i]) && (o += "px"),
                        "(min-width: " + o + ")")
                      )),
                    ("down" !== l && !0 !== l) ||
                      (t = r(
                        t,
                        (function (t) {
                          var r = (function (e) {
                              return n[
                                Math.min(n.indexOf(e) + 1, n.length - 1)
                              ];
                            })(t),
                            a = e[r];
                          return (
                            "(max-width: " +
                            (a =
                              "number" == typeof a
                                ? a - 0.2 + "px"
                                : "calc(" + a + " - 0.2px)") +
                            ")"
                          );
                        })(i)
                      )),
                    t
                  );
                }, "");
              },
              [JSON.stringify(l)]
            );
            return Wr(c, i);
          };
        })({ xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 }),
        qr = xt("offcanvas-body"),
        Qr = { [Bn]: "show", [Un]: "show" },
        Kr = t.forwardRef(
          ({ bsPrefix: e, className: n, children: r, ...a }, o) => (
            (e = Ze(e, "offcanvas")),
            (0, Be.jsx)(Gn, {
              ref: o,
              addEndListener: Kn,
              ...a,
              childRef: r.ref,
              children: (a, o) =>
                t.cloneElement(r, {
                  ...o,
                  className: $e()(
                    n,
                    r.props.className,
                    (a === Bn || a === Hn) && `${e}-toggling`,
                    Qr[a]
                  ),
                }),
            })
          )
        );
      (Kr.defaultProps = {
        in: !1,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
      }),
        (Kr.displayName = "OffcanvasToggling");
      const Zr = Kr,
        Gr = t.createContext(null);
      Gr.displayName = "NavbarContext";
      const Yr = Gr,
        Xr = t.forwardRef(
          ({ bsPrefix: e, className: t, ...n }, r) => (
            (e = Ze(e, "offcanvas-header")),
            (0, Be.jsx)(cr, { ref: r, ...n, className: $e()(t, e) })
          )
        );
      (Xr.displayName = "OffcanvasHeader"),
        (Xr.defaultProps = { closeLabel: "Close", closeButton: !1 });
      const Jr = Xr,
        ea = xt("offcanvas-title", { Component: fr("h5") });
      function ta(e) {
        return (0, Be.jsx)(Zr, { ...e });
      }
      function na(e) {
        return (0, Be.jsx)(Jn, { ...e });
      }
      const ra = t.forwardRef(
        (
          {
            bsPrefix: e,
            className: n,
            children: r,
            "aria-labelledby": a,
            placement: o,
            responsive: i,
            show: l,
            backdrop: s,
            keyboard: c,
            scroll: u,
            onEscapeKeyDown: d,
            onShow: f,
            onHide: p,
            container: m,
            autoFocus: h,
            enforceFocus: g,
            restoreFocus: b,
            restoreFocusOptions: v,
            onEntered: y,
            onExit: E,
            onExiting: w,
            onEnter: x,
            onEntering: _,
            onExited: k,
            backdropClassName: N,
            manager: C,
            renderStaticNode: T,
            ...S
          },
          O
        ) => {
          const P = (0, t.useRef)();
          e = Ze(e, "offcanvas");
          const { onToggle: A } = (0, t.useContext)(Yr) || {},
            [j, I] = (0, t.useState)(!1),
            L = Vr(i || "xs", "up");
          (0, t.useEffect)(() => {
            I(i ? l && !L : l);
          }, [l, i, L]);
          const D = Jt(() => {
              null == A || A(), null == p || p();
            }),
            R = (0, t.useMemo)(() => ({ onHide: D }), [D]),
            M = (0, t.useCallback)(
              (t) =>
                (0, Be.jsx)("div", {
                  ...t,
                  className: $e()(`${e}-backdrop`, N),
                }),
              [N, e]
            ),
            F = (t) =>
              (0, Be.jsx)("div", {
                ...t,
                ...S,
                className: $e()(n, i ? `${e}-${i}` : e, `${e}-${o}`),
                "aria-labelledby": a,
                children: r,
              });
          return (0, Be.jsxs)(Be.Fragment, {
            children: [
              !j && (i || T) && F({}),
              (0, Be.jsx)(tr.Provider, {
                value: R,
                children: (0, Be.jsx)(Nn, {
                  show: j,
                  ref: O,
                  backdrop: s,
                  container: m,
                  keyboard: c,
                  autoFocus: h,
                  enforceFocus: g && !u,
                  restoreFocus: b,
                  restoreFocusOptions: v,
                  onEscapeKeyDown: d,
                  onShow: f,
                  onHide: D,
                  onEnter: (e, ...t) => {
                    e && (e.style.visibility = "visible"),
                      null == x || x(e, ...t);
                  },
                  onEntering: _,
                  onEntered: y,
                  onExit: E,
                  onExiting: w,
                  onExited: (e, ...t) => {
                    e && (e.style.visibility = ""), null == k || k(...t);
                  },
                  manager:
                    C ||
                    (u
                      ? (P.current ||
                          (P.current = new Rn({ handleContainerOverflow: !1 })),
                        P.current)
                      : Dn()),
                  transition: ta,
                  backdropTransition: na,
                  renderBackdrop: M,
                  renderDialog: F,
                }),
              }),
            ],
          });
        }
      );
      (ra.displayName = "Offcanvas"),
        (ra.defaultProps = {
          show: !1,
          backdrop: !0,
          keyboard: !0,
          scroll: !1,
          autoFocus: !0,
          enforceFocus: !0,
          restoreFocus: !0,
          placement: "start",
          renderStaticNode: !1,
        });
      const aa = Object.assign(ra, { Body: qr, Header: Jr, Title: ea });
      var oa = function () {
          var e = be((0, t.useState)(!1), 2),
            n = e[0],
            r = e[1],
            a = function () {
              return r(!1);
            };
          return t.createElement(
            t.Fragment,
            null,
            t.createElement(
              Xe,
              {
                variant: "white",
                size: "lg",
                className: "border-none",
                onClick: function () {
                  return r(!0);
                },
              },
              t.createElement("i", { className: "fa-solid fa-bars" })
            ),
            t.createElement(
              aa,
              { show: n, onHide: a },
              t.createElement(
                aa.Header,
                { closeButton: !0 },
                t.createElement(
                  aa.Title,
                  null,
                  t.createElement(
                    "span",
                    { className: "h2" },
                    t.createElement("strong", null, "CATEGORIAS")
                  )
                )
              ),
              t.createElement(
                aa.Body,
                null,
                t.createElement(
                  "ul",
                  { style: { "list-style": "none" } },
                  t.createElement(
                    te,
                    { to: "/", onClick: a },
                    t.createElement(
                      "li",
                      { className: "categories" },
                      t.createElement("i", {
                        className: "fa-solid fa-baby-carriage",
                      }),
                      "  Accesorios para bebés"
                    )
                  ),
                  t.createElement(
                    te,
                    { to: "/", onClick: a },
                    t.createElement(
                      "li",
                      { className: "categories" },
                      t.createElement("i", { className: "fa-solid fa-paw" }),
                      "  Accesorios para mascotas"
                    )
                  ),
                  t.createElement(
                    te,
                    { to: "/", onClick: a },
                    t.createElement(
                      "li",
                      { className: "categories" },
                      t.createElement("i", {
                        className: "fa-solid fa-building-columns",
                      }),
                      "  Artículos de colección"
                    )
                  ),
                  t.createElement(
                    te,
                    { to: "/", onClick: a },
                    t.createElement(
                      "li",
                      { className: "categories" },
                      t.createElement("i", { className: "fa-solid fa-car" }),
                      "  Carros y Motos"
                    )
                  ),
                  t.createElement(
                    te,
                    { to: "/", onClick: a },
                    t.createElement(
                      "li",
                      { className: "categories" },
                      t.createElement("i", { className: "fa-solid fa-camera" }),
                      "  Cámaras y Accesorios"
                    )
                  ),
                  t.createElement(
                    te,
                    { to: "/celulares", onClick: a },
                    t.createElement(
                      "li",
                      { className: "categories" },
                      t.createElement("i", {
                        className: "fa-solid fa-mobile-screen-button",
                      }),
                      "   Celulares"
                    )
                  ),
                  t.createElement(
                    te,
                    { to: "/computadoras", onClick: a },
                    t.createElement(
                      "li",
                      { className: "categories" },
                      t.createElement("i", { className: "fa-solid fa-laptop" }),
                      " Computadoras"
                    )
                  ),
                  t.createElement(
                    te,
                    { to: "/", onClick: a },
                    t.createElement(
                      "li",
                      { className: "categories" },
                      t.createElement("i", {
                        className: "fa-solid fa-gamepad",
                      }),
                      " Consolas y Videojuegos"
                    )
                  ),
                  t.createElement(
                    te,
                    { to: "/", onClick: a },
                    t.createElement(
                      "li",
                      { className: "categories" },
                      t.createElement("i", {
                        className: "fa-solid fa-blender",
                      }),
                      "  Electrodomésticos"
                    )
                  ),
                  t.createElement(
                    te,
                    { to: "/", onClick: a },
                    t.createElement(
                      "li",
                      { className: "categories" },
                      t.createElement("i", {
                        className: "fa-solid fa-baseball-bat-ball",
                      }),
                      " Deporte y Fitness"
                    )
                  ),
                  t.createElement(
                    te,
                    { to: "/", onClick: a },
                    t.createElement(
                      "li",
                      { className: "categories" },
                      t.createElement("i", {
                        className: "fa-solid fa-headphones-simple",
                      }),
                      "  Electrónica, audio y video"
                    )
                  ),
                  t.createElement(
                    te,
                    { to: "/", onClick: a },
                    t.createElement(
                      "li",
                      { className: "categories" },
                      t.createElement("i", {
                        className: "fa-solid fa-screwdriver-wrench",
                      }),
                      "  Herramientas"
                    )
                  ),
                  t.createElement(
                    te,
                    { to: "/", onClick: a },
                    t.createElement(
                      "li",
                      { className: "categories" },
                      t.createElement("i", {
                        className: "fa-solid fa-house-chimney-window",
                      }),
                      "  Hogar"
                    )
                  ),
                  t.createElement(
                    te,
                    { to: "/", onClick: a },
                    t.createElement(
                      "li",
                      { className: "categories" },
                      t.createElement("i", {
                        className: "fa-solid fa-building-user",
                      }),
                      " Inmuebles"
                    )
                  ),
                  t.createElement(
                    te,
                    { to: "/", onClick: a },
                    t.createElement(
                      "li",
                      { className: "categories" },
                      t.createElement("i", { className: "fa-solid fa-guitar" }),
                      "  Instrumentos musicales"
                    )
                  ),
                  t.createElement(
                    te,
                    { to: "/", onClick: a },
                    t.createElement(
                      "li",
                      { className: "categories" },
                      t.createElement("i", {
                        className: "fa-solid fa-puzzle-piece",
                      }),
                      "  Juguetes"
                    )
                  ),
                  t.createElement(
                    te,
                    { to: "/", onClick: a },
                    t.createElement(
                      "li",
                      { className: "categories" },
                      t.createElement("i", { className: "fa-solid fa-gem" }),
                      "  Joyas"
                    )
                  ),
                  t.createElement(
                    te,
                    { to: "/", onClick: a },
                    t.createElement(
                      "li",
                      { className: "categories" },
                      t.createElement("i", { className: "fa-solid fa-book" }),
                      "  Libros"
                    )
                  ),
                  t.createElement(
                    te,
                    { to: "/", onClick: a },
                    t.createElement(
                      "li",
                      { className: "categories" },
                      t.createElement("i", {
                        className: "fa-solid fa-car-battery",
                      }),
                      "  Repuestos para vehículos"
                    )
                  ),
                  t.createElement(
                    te,
                    { to: "/", onClick: a },
                    t.createElement(
                      "li",
                      { className: "categories" },
                      t.createElement("i", { className: "fa-solid fa-shirt" }),
                      " Ropa y Zapatos"
                    )
                  ),
                  t.createElement(
                    te,
                    { to: "/", onClick: a },
                    t.createElement(
                      "li",
                      { className: "categories" },
                      t.createElement("i", {
                        className: "fa-solid fa-square-plus",
                      }),
                      "  Otras categorías"
                    )
                  )
                )
              )
            )
          );
        },
        ia = function () {
          var e = (0, t.useContext)(Ne),
            n = e.store,
            r = e.actions,
            a = be((0, t.useState)(""), 2),
            o = a[0],
            i = a[1],
            l = be((0, t.useState)(""), 2),
            s = l[0],
            c = l[1],
            u = q(),
            d = (sessionStorage.getItem("token"), be((0, t.useState)(!1), 2)),
            f = d[0],
            p = d[1],
            m = function () {
              return p(!1);
            },
            h = (function () {
              var e = ye(
                xe().mark(function e() {
                  return xe().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), r.login(o, s);
                        case 2:
                          e.sent;
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (
            (0, t.useEffect)(
              function () {
                n.token && "" != n.token && u("/");
              },
              [n.token]
            ),
            t.createElement(
              t.Fragment,
              null,
              f &&
                t.createElement(
                  vr,
                  { show: f, onHide: m },
                  t.createElement(
                    vr.Header,
                    { closeButton: !0 },
                    t.createElement(vr.Title, null, "Ingresa")
                  ),
                  t.createElement(
                    vr.Body,
                    null,
                    t.createElement(
                      "p",
                      null,
                      "Por favor llena los datos para acceder a tu cuenta"
                    ),
                    t.createElement(
                      Ut,
                      null,
                      t.createElement(
                        Ut.Group,
                        {
                          className: "mb-3",
                          controlId: "exampleForm.ControlInput1",
                        },
                        t.createElement(Ut.Label, null, "Email"),
                        t.createElement(Ut.Control, {
                          type: "email",
                          placeholder: "Coloca tu email",
                          autoFocus: !0,
                          onChange: function (e) {
                            return i(e.target.value);
                          },
                        })
                      ),
                      t.createElement(
                        Ut.Group,
                        {
                          className: "mb-3",
                          controlId: "exampleForm.ControlInput1",
                        },
                        t.createElement(Ut.Label, null, "Contraseña"),
                        t.createElement(Ut.Control, {
                          type: "password",
                          placeholder: "Coloca tu contraseña",
                          autoFocus: !0,
                          onChange: function (e) {
                            return c(e.target.value);
                          },
                        })
                      )
                    )
                  ),
                  t.createElement(
                    vr.Footer,
                    null,
                    t.createElement(
                      Xe,
                      { variant: "danger", onClick: m },
                      "Cancelar"
                    ),
                    t.createElement(
                      Xe,
                      { variant: "success", onClick: h },
                      "Ingresar"
                    )
                  )
                ),
              t.createElement(ot, {
                title: "Ingresa",
                classButton: "btn signup__button--login",
                handleShow: function () {
                  return p(!0);
                },
              })
            )
          );
        };
      function la(e) {
        return "default" + e.charAt(0).toUpperCase() + e.substr(1);
      }
      function sa(e) {
        var t = (function (e, t) {
          if ("object" != typeof e || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e, "string");
        return "symbol" == typeof t ? t : String(t);
      }
      function ca(e, n, r) {
        var a = (0, t.useRef)(void 0 !== e),
          o = (0, t.useState)(n),
          i = o[0],
          l = o[1],
          s = void 0 !== e,
          c = a.current;
        return (
          (a.current = s),
          !s && c && i !== n && l(n),
          [
            s ? e : i,
            (0, t.useCallback)(
              function (e) {
                for (
                  var t = arguments.length,
                    n = new Array(t > 1 ? t - 1 : 0),
                    a = 1;
                  a < t;
                  a++
                )
                  n[a - 1] = arguments[a];
                r && r.apply(void 0, [e].concat(n)), l(e);
              },
              [r]
            ),
          ]
        );
      }
      n(143);
      const ua = t.createContext(null);
      var da = Object.prototype.hasOwnProperty;
      function fa(e, t, n) {
        for (n of e.keys()) if (pa(n, t)) return n;
      }
      function pa(e, t) {
        var n, r, a;
        if (e === t) return !0;
        if (e && t && (n = e.constructor) === t.constructor) {
          if (n === Date) return e.getTime() === t.getTime();
          if (n === RegExp) return e.toString() === t.toString();
          if (n === Array) {
            if ((r = e.length) === t.length) for (; r-- && pa(e[r], t[r]); );
            return -1 === r;
          }
          if (n === Set) {
            if (e.size !== t.size) return !1;
            for (r of e) {
              if ((a = r) && "object" == typeof a && !(a = fa(t, a))) return !1;
              if (!t.has(a)) return !1;
            }
            return !0;
          }
          if (n === Map) {
            if (e.size !== t.size) return !1;
            for (r of e) {
              if ((a = r[0]) && "object" == typeof a && !(a = fa(t, a)))
                return !1;
              if (!pa(r[1], t.get(a))) return !1;
            }
            return !0;
          }
          if (n === ArrayBuffer)
            (e = new Uint8Array(e)), (t = new Uint8Array(t));
          else if (n === DataView) {
            if ((r = e.byteLength) === t.byteLength)
              for (; r-- && e.getInt8(r) === t.getInt8(r); );
            return -1 === r;
          }
          if (ArrayBuffer.isView(e)) {
            if ((r = e.byteLength) === t.byteLength)
              for (; r-- && e[r] === t[r]; );
            return -1 === r;
          }
          if (!n || "object" == typeof e) {
            for (n in ((r = 0), e)) {
              if (da.call(e, n) && ++r && !da.call(t, n)) return !1;
              if (!(n in t) || !pa(e[n], t[n])) return !1;
            }
            return Object.keys(t).length === r;
          }
        }
        return e != e && t != t;
      }
      function ma(e) {
        return e.split("-")[0];
      }
      function ha(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function ga(e) {
        return e instanceof ha(e).Element || e instanceof Element;
      }
      function ba(e) {
        return e instanceof ha(e).HTMLElement || e instanceof HTMLElement;
      }
      function va(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof ha(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      var ya = Math.max,
        Ea = Math.min,
        wa = Math.round;
      function xa() {
        var e = navigator.userAgentData;
        return null != e && e.brands
          ? e.brands
              .map(function (e) {
                return e.brand + "/" + e.version;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function _a() {
        return !/^((?!chrome|android).)*safari/i.test(xa());
      }
      function ka(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        var r = e.getBoundingClientRect(),
          a = 1,
          o = 1;
        t &&
          ba(e) &&
          ((a = (e.offsetWidth > 0 && wa(r.width) / e.offsetWidth) || 1),
          (o = (e.offsetHeight > 0 && wa(r.height) / e.offsetHeight) || 1));
        var i = (ga(e) ? ha(e) : window).visualViewport,
          l = !_a() && n,
          s = (r.left + (l && i ? i.offsetLeft : 0)) / a,
          c = (r.top + (l && i ? i.offsetTop : 0)) / o,
          u = r.width / a,
          d = r.height / o;
        return {
          width: u,
          height: d,
          top: c,
          right: s + u,
          bottom: c + d,
          left: s,
          x: s,
          y: c,
        };
      }
      function Na(e) {
        var t = ka(e),
          n = e.offsetWidth,
          r = e.offsetHeight;
        return (
          Math.abs(t.width - n) <= 1 && (n = t.width),
          Math.abs(t.height - r) <= 1 && (r = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
        );
      }
      function Ca(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && va(n)) {
          var r = t;
          do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
          } while (r);
        }
        return !1;
      }
      function Ta(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function Sa(e) {
        return ha(e).getComputedStyle(e);
      }
      function Oa(e) {
        return ["table", "td", "th"].indexOf(Ta(e)) >= 0;
      }
      function Pa(e) {
        return ((ga(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function Aa(e) {
        return "html" === Ta(e)
          ? e
          : e.assignedSlot || e.parentNode || (va(e) ? e.host : null) || Pa(e);
      }
      function ja(e) {
        return ba(e) && "fixed" !== Sa(e).position ? e.offsetParent : null;
      }
      function Ia(e) {
        for (
          var t = ha(e), n = ja(e);
          n && Oa(n) && "static" === Sa(n).position;

        )
          n = ja(n);
        return n &&
          ("html" === Ta(n) ||
            ("body" === Ta(n) && "static" === Sa(n).position))
          ? t
          : n ||
              (function (e) {
                var t = /firefox/i.test(xa());
                if (
                  /Trident/i.test(xa()) &&
                  ba(e) &&
                  "fixed" === Sa(e).position
                )
                  return null;
                var n = Aa(e);
                for (
                  va(n) && (n = n.host);
                  ba(n) && ["html", "body"].indexOf(Ta(n)) < 0;

                ) {
                  var r = Sa(n);
                  if (
                    "none" !== r.transform ||
                    "none" !== r.perspective ||
                    "paint" === r.contain ||
                    -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
                    (t && "filter" === r.willChange) ||
                    (t && r.filter && "none" !== r.filter)
                  )
                    return n;
                  n = n.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      function La(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function Da(e, t, n) {
        return ya(e, Ea(t, n));
      }
      function Ra(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function Ma(e, t) {
        return t.reduce(function (t, n) {
          return (t[n] = e), t;
        }, {});
      }
      var Fa = "top",
        za = "bottom",
        $a = "right",
        Ba = "left",
        Ua = "auto",
        Ha = [Fa, za, $a, Ba],
        Wa = "start",
        Va = "end",
        qa = "clippingParents",
        Qa = "viewport",
        Ka = "popper",
        Za = "reference",
        Ga = Ha.reduce(function (e, t) {
          return e.concat([t + "-" + Wa, t + "-" + Va]);
        }, []),
        Ya = [].concat(Ha, [Ua]).reduce(function (e, t) {
          return e.concat([t, t + "-" + Wa, t + "-" + Va]);
        }, []),
        Xa = "beforeRead",
        Ja = "read",
        eo = "afterRead",
        to = "beforeMain",
        no = "main",
        ro = "afterMain",
        ao = "beforeWrite",
        oo = "write",
        io = "afterWrite",
        lo = [Xa, Ja, eo, to, no, ro, ao, oo, io];
      const so = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t,
            n = e.state,
            r = e.name,
            a = e.options,
            o = n.elements.arrow,
            i = n.modifiersData.popperOffsets,
            l = ma(n.placement),
            s = La(l),
            c = [Ba, $a].indexOf(l) >= 0 ? "height" : "width";
          if (o && i) {
            var u = (function (e, t) {
                return Ra(
                  "number" !=
                    typeof (e =
                      "function" == typeof e
                        ? e(
                            Object.assign({}, t.rects, {
                              placement: t.placement,
                            })
                          )
                        : e)
                    ? e
                    : Ma(e, Ha)
                );
              })(a.padding, n),
              d = Na(o),
              f = "y" === s ? Fa : Ba,
              p = "y" === s ? za : $a,
              m =
                n.rects.reference[c] +
                n.rects.reference[s] -
                i[s] -
                n.rects.popper[c],
              h = i[s] - n.rects.reference[s],
              g = Ia(o),
              b = g
                ? "y" === s
                  ? g.clientHeight || 0
                  : g.clientWidth || 0
                : 0,
              v = m / 2 - h / 2,
              y = u[f],
              E = b - d[c] - u[p],
              w = b / 2 - d[c] / 2 + v,
              x = Da(y, w, E),
              _ = s;
            n.modifiersData[r] =
              (((t = {})[_] = x), (t.centerOffset = x - w), t);
          }
        },
        effect: function (e) {
          var t = e.state,
            n = e.options.element,
            r = void 0 === n ? "[data-popper-arrow]" : n;
          null != r &&
            ("string" != typeof r ||
              (r = t.elements.popper.querySelector(r))) &&
            Ca(t.elements.popper, r) &&
            (t.elements.arrow = r);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function co(e) {
        return e.split("-")[1];
      }
      var uo = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function fo(e) {
        var t,
          n = e.popper,
          r = e.popperRect,
          a = e.placement,
          o = e.variation,
          i = e.offsets,
          l = e.position,
          s = e.gpuAcceleration,
          c = e.adaptive,
          u = e.roundOffsets,
          d = e.isFixed,
          f = i.x,
          p = void 0 === f ? 0 : f,
          m = i.y,
          h = void 0 === m ? 0 : m,
          g = "function" == typeof u ? u({ x: p, y: h }) : { x: p, y: h };
        (p = g.x), (h = g.y);
        var b = i.hasOwnProperty("x"),
          v = i.hasOwnProperty("y"),
          y = Ba,
          E = Fa,
          w = window;
        if (c) {
          var x = Ia(n),
            _ = "clientHeight",
            k = "clientWidth";
          x === ha(n) &&
            "static" !== Sa((x = Pa(n))).position &&
            "absolute" === l &&
            ((_ = "scrollHeight"), (k = "scrollWidth")),
            (a === Fa || ((a === Ba || a === $a) && o === Va)) &&
              ((E = za),
              (h -=
                (d && x === w && w.visualViewport
                  ? w.visualViewport.height
                  : x[_]) - r.height),
              (h *= s ? 1 : -1)),
            (a !== Ba && ((a !== Fa && a !== za) || o !== Va)) ||
              ((y = $a),
              (p -=
                (d && x === w && w.visualViewport
                  ? w.visualViewport.width
                  : x[k]) - r.width),
              (p *= s ? 1 : -1));
        }
        var N,
          C = Object.assign({ position: l }, c && uo),
          T =
            !0 === u
              ? (function (e) {
                  var t = e.x,
                    n = e.y,
                    r = window.devicePixelRatio || 1;
                  return { x: wa(t * r) / r || 0, y: wa(n * r) / r || 0 };
                })({ x: p, y: h })
              : { x: p, y: h };
        return (
          (p = T.x),
          (h = T.y),
          s
            ? Object.assign(
                {},
                C,
                (((N = {})[E] = v ? "0" : ""),
                (N[y] = b ? "0" : ""),
                (N.transform =
                  (w.devicePixelRatio || 1) <= 1
                    ? "translate(" + p + "px, " + h + "px)"
                    : "translate3d(" + p + "px, " + h + "px, 0)"),
                N)
              )
            : Object.assign(
                {},
                C,
                (((t = {})[E] = v ? h + "px" : ""),
                (t[y] = b ? p + "px" : ""),
                (t.transform = ""),
                t)
              )
        );
      }
      const po = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = n.gpuAcceleration,
            a = void 0 === r || r,
            o = n.adaptive,
            i = void 0 === o || o,
            l = n.roundOffsets,
            s = void 0 === l || l,
            c = {
              placement: ma(t.placement),
              variation: co(t.placement),
              popper: t.elements.popper,
              popperRect: t.rects.popper,
              gpuAcceleration: a,
              isFixed: "fixed" === t.options.strategy,
            };
          null != t.modifiersData.popperOffsets &&
            (t.styles.popper = Object.assign(
              {},
              t.styles.popper,
              fo(
                Object.assign({}, c, {
                  offsets: t.modifiersData.popperOffsets,
                  position: t.options.strategy,
                  adaptive: i,
                  roundOffsets: s,
                })
              )
            )),
            null != t.modifiersData.arrow &&
              (t.styles.arrow = Object.assign(
                {},
                t.styles.arrow,
                fo(
                  Object.assign({}, c, {
                    offsets: t.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: s,
                  })
                )
              )),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
              "data-popper-placement": t.placement,
            }));
        },
        data: {},
      };
      var mo = { passive: !0 };
      const ho = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (e) {
          var t = e.state,
            n = e.instance,
            r = e.options,
            a = r.scroll,
            o = void 0 === a || a,
            i = r.resize,
            l = void 0 === i || i,
            s = ha(t.elements.popper),
            c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
          return (
            o &&
              c.forEach(function (e) {
                e.addEventListener("scroll", n.update, mo);
              }),
            l && s.addEventListener("resize", n.update, mo),
            function () {
              o &&
                c.forEach(function (e) {
                  e.removeEventListener("scroll", n.update, mo);
                }),
                l && s.removeEventListener("resize", n.update, mo);
            }
          );
        },
        data: {},
      };
      var go = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function bo(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return go[e];
        });
      }
      var vo = { start: "end", end: "start" };
      function yo(e) {
        return e.replace(/start|end/g, function (e) {
          return vo[e];
        });
      }
      function Eo(e) {
        var t = ha(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function wo(e) {
        return ka(Pa(e)).left + Eo(e).scrollLeft;
      }
      function xo(e) {
        var t = Sa(e),
          n = t.overflow,
          r = t.overflowX,
          a = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + a + r);
      }
      function _o(e) {
        return ["html", "body", "#document"].indexOf(Ta(e)) >= 0
          ? e.ownerDocument.body
          : ba(e) && xo(e)
          ? e
          : _o(Aa(e));
      }
      function ko(e, t) {
        var n;
        void 0 === t && (t = []);
        var r = _o(e),
          a = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
          o = ha(r),
          i = a ? [o].concat(o.visualViewport || [], xo(r) ? r : []) : r,
          l = t.concat(i);
        return a ? l : l.concat(ko(Aa(i)));
      }
      function No(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function Co(e, t, n) {
        return t === Qa
          ? No(
              (function (e, t) {
                var n = ha(e),
                  r = Pa(e),
                  a = n.visualViewport,
                  o = r.clientWidth,
                  i = r.clientHeight,
                  l = 0,
                  s = 0;
                if (a) {
                  (o = a.width), (i = a.height);
                  var c = _a();
                  (c || (!c && "fixed" === t)) &&
                    ((l = a.offsetLeft), (s = a.offsetTop));
                }
                return { width: o, height: i, x: l + wo(e), y: s };
              })(e, n)
            )
          : ga(t)
          ? (function (e, t) {
              var n = ka(e, !1, "fixed" === t);
              return (
                (n.top = n.top + e.clientTop),
                (n.left = n.left + e.clientLeft),
                (n.bottom = n.top + e.clientHeight),
                (n.right = n.left + e.clientWidth),
                (n.width = e.clientWidth),
                (n.height = e.clientHeight),
                (n.x = n.left),
                (n.y = n.top),
                n
              );
            })(t, n)
          : No(
              (function (e) {
                var t,
                  n = Pa(e),
                  r = Eo(e),
                  a = null == (t = e.ownerDocument) ? void 0 : t.body,
                  o = ya(
                    n.scrollWidth,
                    n.clientWidth,
                    a ? a.scrollWidth : 0,
                    a ? a.clientWidth : 0
                  ),
                  i = ya(
                    n.scrollHeight,
                    n.clientHeight,
                    a ? a.scrollHeight : 0,
                    a ? a.clientHeight : 0
                  ),
                  l = -r.scrollLeft + wo(e),
                  s = -r.scrollTop;
                return (
                  "rtl" === Sa(a || n).direction &&
                    (l += ya(n.clientWidth, a ? a.clientWidth : 0) - o),
                  { width: o, height: i, x: l, y: s }
                );
              })(Pa(e))
            );
      }
      function To(e) {
        var t,
          n = e.reference,
          r = e.element,
          a = e.placement,
          o = a ? ma(a) : null,
          i = a ? co(a) : null,
          l = n.x + n.width / 2 - r.width / 2,
          s = n.y + n.height / 2 - r.height / 2;
        switch (o) {
          case Fa:
            t = { x: l, y: n.y - r.height };
            break;
          case za:
            t = { x: l, y: n.y + n.height };
            break;
          case $a:
            t = { x: n.x + n.width, y: s };
            break;
          case Ba:
            t = { x: n.x - r.width, y: s };
            break;
          default:
            t = { x: n.x, y: n.y };
        }
        var c = o ? La(o) : null;
        if (null != c) {
          var u = "y" === c ? "height" : "width";
          switch (i) {
            case Wa:
              t[c] = t[c] - (n[u] / 2 - r[u] / 2);
              break;
            case Va:
              t[c] = t[c] + (n[u] / 2 - r[u] / 2);
          }
        }
        return t;
      }
      function So(e, t) {
        void 0 === t && (t = {});
        var n = t,
          r = n.placement,
          a = void 0 === r ? e.placement : r,
          o = n.strategy,
          i = void 0 === o ? e.strategy : o,
          l = n.boundary,
          s = void 0 === l ? qa : l,
          c = n.rootBoundary,
          u = void 0 === c ? Qa : c,
          d = n.elementContext,
          f = void 0 === d ? Ka : d,
          p = n.altBoundary,
          m = void 0 !== p && p,
          h = n.padding,
          g = void 0 === h ? 0 : h,
          b = Ra("number" != typeof g ? g : Ma(g, Ha)),
          v = f === Ka ? Za : Ka,
          y = e.rects.popper,
          E = e.elements[m ? v : f],
          w = (function (e, t, n, r) {
            var a =
                "clippingParents" === t
                  ? (function (e) {
                      var t = ko(Aa(e)),
                        n =
                          ["absolute", "fixed"].indexOf(Sa(e).position) >= 0 &&
                          ba(e)
                            ? Ia(e)
                            : e;
                      return ga(n)
                        ? t.filter(function (e) {
                            return ga(e) && Ca(e, n) && "body" !== Ta(e);
                          })
                        : [];
                    })(e)
                  : [].concat(t),
              o = [].concat(a, [n]),
              i = o[0],
              l = o.reduce(function (t, n) {
                var a = Co(e, n, r);
                return (
                  (t.top = ya(a.top, t.top)),
                  (t.right = Ea(a.right, t.right)),
                  (t.bottom = Ea(a.bottom, t.bottom)),
                  (t.left = ya(a.left, t.left)),
                  t
                );
              }, Co(e, i, r));
            return (
              (l.width = l.right - l.left),
              (l.height = l.bottom - l.top),
              (l.x = l.left),
              (l.y = l.top),
              l
            );
          })(ga(E) ? E : E.contextElement || Pa(e.elements.popper), s, u, i),
          x = ka(e.elements.reference),
          _ = To({
            reference: x,
            element: y,
            strategy: "absolute",
            placement: a,
          }),
          k = No(Object.assign({}, y, _)),
          N = f === Ka ? k : x,
          C = {
            top: w.top - N.top + b.top,
            bottom: N.bottom - w.bottom + b.bottom,
            left: w.left - N.left + b.left,
            right: N.right - w.right + b.right,
          },
          T = e.modifiersData.offset;
        if (f === Ka && T) {
          var S = T[a];
          Object.keys(C).forEach(function (e) {
            var t = [$a, za].indexOf(e) >= 0 ? 1 : -1,
              n = [Fa, za].indexOf(e) >= 0 ? "y" : "x";
            C[e] += S[n] * t;
          });
        }
        return C;
      }
      const Oo = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name;
          if (!t.modifiersData[r]._skip) {
            for (
              var a = n.mainAxis,
                o = void 0 === a || a,
                i = n.altAxis,
                l = void 0 === i || i,
                s = n.fallbackPlacements,
                c = n.padding,
                u = n.boundary,
                d = n.rootBoundary,
                f = n.altBoundary,
                p = n.flipVariations,
                m = void 0 === p || p,
                h = n.allowedAutoPlacements,
                g = t.options.placement,
                b = ma(g),
                v =
                  s ||
                  (b !== g && m
                    ? (function (e) {
                        if (ma(e) === Ua) return [];
                        var t = bo(e);
                        return [yo(e), t, yo(t)];
                      })(g)
                    : [bo(g)]),
                y = [g].concat(v).reduce(function (e, n) {
                  return e.concat(
                    ma(n) === Ua
                      ? (function (e, t) {
                          void 0 === t && (t = {});
                          var n = t,
                            r = n.placement,
                            a = n.boundary,
                            o = n.rootBoundary,
                            i = n.padding,
                            l = n.flipVariations,
                            s = n.allowedAutoPlacements,
                            c = void 0 === s ? Ya : s,
                            u = co(r),
                            d = u
                              ? l
                                ? Ga
                                : Ga.filter(function (e) {
                                    return co(e) === u;
                                  })
                              : Ha,
                            f = d.filter(function (e) {
                              return c.indexOf(e) >= 0;
                            });
                          0 === f.length && (f = d);
                          var p = f.reduce(function (t, n) {
                            return (
                              (t[n] = So(e, {
                                placement: n,
                                boundary: a,
                                rootBoundary: o,
                                padding: i,
                              })[ma(n)]),
                              t
                            );
                          }, {});
                          return Object.keys(p).sort(function (e, t) {
                            return p[e] - p[t];
                          });
                        })(t, {
                          placement: n,
                          boundary: u,
                          rootBoundary: d,
                          padding: c,
                          flipVariations: m,
                          allowedAutoPlacements: h,
                        })
                      : n
                  );
                }, []),
                E = t.rects.reference,
                w = t.rects.popper,
                x = new Map(),
                _ = !0,
                k = y[0],
                N = 0;
              N < y.length;
              N++
            ) {
              var C = y[N],
                T = ma(C),
                S = co(C) === Wa,
                O = [Fa, za].indexOf(T) >= 0,
                P = O ? "width" : "height",
                A = So(t, {
                  placement: C,
                  boundary: u,
                  rootBoundary: d,
                  altBoundary: f,
                  padding: c,
                }),
                j = O ? (S ? $a : Ba) : S ? za : Fa;
              E[P] > w[P] && (j = bo(j));
              var I = bo(j),
                L = [];
              if (
                (o && L.push(A[T] <= 0),
                l && L.push(A[j] <= 0, A[I] <= 0),
                L.every(function (e) {
                  return e;
                }))
              ) {
                (k = C), (_ = !1);
                break;
              }
              x.set(C, L);
            }
            if (_)
              for (
                var D = function (e) {
                    var t = y.find(function (t) {
                      var n = x.get(t);
                      if (n)
                        return n.slice(0, e).every(function (e) {
                          return e;
                        });
                    });
                    if (t) return (k = t), "break";
                  },
                  R = m ? 3 : 1;
                R > 0 && "break" !== D(R);
                R--
              );
            t.placement !== k &&
              ((t.modifiersData[r]._skip = !0),
              (t.placement = k),
              (t.reset = !0));
          }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
      };
      function Po(e, t, n) {
        return (
          void 0 === n && (n = { x: 0, y: 0 }),
          {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x,
          }
        );
      }
      function Ao(e) {
        return [Fa, $a, za, Ba].some(function (t) {
          return e[t] >= 0;
        });
      }
      const jo = {
          name: "hide",
          enabled: !0,
          phase: "main",
          requiresIfExists: ["preventOverflow"],
          fn: function (e) {
            var t = e.state,
              n = e.name,
              r = t.rects.reference,
              a = t.rects.popper,
              o = t.modifiersData.preventOverflow,
              i = So(t, { elementContext: "reference" }),
              l = So(t, { altBoundary: !0 }),
              s = Po(i, r),
              c = Po(l, a, o),
              u = Ao(s),
              d = Ao(c);
            (t.modifiersData[n] = {
              referenceClippingOffsets: s,
              popperEscapeOffsets: c,
              isReferenceHidden: u,
              hasPopperEscaped: d,
            }),
              (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-reference-hidden": u,
                "data-popper-escaped": d,
              }));
          },
        },
        Io = {
          name: "offset",
          enabled: !0,
          phase: "main",
          requires: ["popperOffsets"],
          fn: function (e) {
            var t = e.state,
              n = e.options,
              r = e.name,
              a = n.offset,
              o = void 0 === a ? [0, 0] : a,
              i = Ya.reduce(function (e, n) {
                return (
                  (e[n] = (function (e, t, n) {
                    var r = ma(e),
                      a = [Ba, Fa].indexOf(r) >= 0 ? -1 : 1,
                      o =
                        "function" == typeof n
                          ? n(Object.assign({}, t, { placement: e }))
                          : n,
                      i = o[0],
                      l = o[1];
                    return (
                      (i = i || 0),
                      (l = (l || 0) * a),
                      [Ba, $a].indexOf(r) >= 0 ? { x: l, y: i } : { x: i, y: l }
                    );
                  })(n, t.rects, o)),
                  e
                );
              }, {}),
              l = i[t.placement],
              s = l.x,
              c = l.y;
            null != t.modifiersData.popperOffsets &&
              ((t.modifiersData.popperOffsets.x += s),
              (t.modifiersData.popperOffsets.y += c)),
              (t.modifiersData[r] = i);
          },
        },
        Lo = {
          name: "popperOffsets",
          enabled: !0,
          phase: "read",
          fn: function (e) {
            var t = e.state,
              n = e.name;
            t.modifiersData[n] = To({
              reference: t.rects.reference,
              element: t.rects.popper,
              strategy: "absolute",
              placement: t.placement,
            });
          },
          data: {},
        },
        Do = {
          name: "preventOverflow",
          enabled: !0,
          phase: "main",
          fn: function (e) {
            var t = e.state,
              n = e.options,
              r = e.name,
              a = n.mainAxis,
              o = void 0 === a || a,
              i = n.altAxis,
              l = void 0 !== i && i,
              s = n.boundary,
              c = n.rootBoundary,
              u = n.altBoundary,
              d = n.padding,
              f = n.tether,
              p = void 0 === f || f,
              m = n.tetherOffset,
              h = void 0 === m ? 0 : m,
              g = So(t, {
                boundary: s,
                rootBoundary: c,
                padding: d,
                altBoundary: u,
              }),
              b = ma(t.placement),
              v = co(t.placement),
              y = !v,
              E = La(b),
              w = "x" === E ? "y" : "x",
              x = t.modifiersData.popperOffsets,
              _ = t.rects.reference,
              k = t.rects.popper,
              N =
                "function" == typeof h
                  ? h(Object.assign({}, t.rects, { placement: t.placement }))
                  : h,
              C =
                "number" == typeof N
                  ? { mainAxis: N, altAxis: N }
                  : Object.assign({ mainAxis: 0, altAxis: 0 }, N),
              T = t.modifiersData.offset
                ? t.modifiersData.offset[t.placement]
                : null,
              S = { x: 0, y: 0 };
            if (x) {
              if (o) {
                var O,
                  P = "y" === E ? Fa : Ba,
                  A = "y" === E ? za : $a,
                  j = "y" === E ? "height" : "width",
                  I = x[E],
                  L = I + g[P],
                  D = I - g[A],
                  R = p ? -k[j] / 2 : 0,
                  M = v === Wa ? _[j] : k[j],
                  F = v === Wa ? -k[j] : -_[j],
                  z = t.elements.arrow,
                  $ = p && z ? Na(z) : { width: 0, height: 0 },
                  B = t.modifiersData["arrow#persistent"]
                    ? t.modifiersData["arrow#persistent"].padding
                    : { top: 0, right: 0, bottom: 0, left: 0 },
                  U = B[P],
                  H = B[A],
                  W = Da(0, _[j], $[j]),
                  V = y
                    ? _[j] / 2 - R - W - U - C.mainAxis
                    : M - W - U - C.mainAxis,
                  q = y
                    ? -_[j] / 2 + R + W + H + C.mainAxis
                    : F + W + H + C.mainAxis,
                  Q = t.elements.arrow && Ia(t.elements.arrow),
                  K = Q
                    ? "y" === E
                      ? Q.clientTop || 0
                      : Q.clientLeft || 0
                    : 0,
                  Z = null != (O = null == T ? void 0 : T[E]) ? O : 0,
                  G = I + q - Z,
                  Y = Da(p ? Ea(L, I + V - Z - K) : L, I, p ? ya(D, G) : D);
                (x[E] = Y), (S[E] = Y - I);
              }
              if (l) {
                var X,
                  J = "x" === E ? Fa : Ba,
                  ee = "x" === E ? za : $a,
                  te = x[w],
                  ne = "y" === w ? "height" : "width",
                  re = te + g[J],
                  ae = te - g[ee],
                  oe = -1 !== [Fa, Ba].indexOf(b),
                  ie = null != (X = null == T ? void 0 : T[w]) ? X : 0,
                  le = oe ? re : te - _[ne] - k[ne] - ie + C.altAxis,
                  se = oe ? te + _[ne] + k[ne] - ie - C.altAxis : ae,
                  ce =
                    p && oe
                      ? (function (e, t, n) {
                          var r = Da(e, t, n);
                          return r > n ? n : r;
                        })(le, te, se)
                      : Da(p ? le : re, te, p ? se : ae);
                (x[w] = ce), (S[w] = ce - te);
              }
              t.modifiersData[r] = S;
            }
          },
          requiresIfExists: ["offset"],
        };
      function Ro(e, t, n) {
        void 0 === n && (n = !1);
        var r,
          a,
          o = ba(t),
          i =
            ba(t) &&
            (function (e) {
              var t = e.getBoundingClientRect(),
                n = wa(t.width) / e.offsetWidth || 1,
                r = wa(t.height) / e.offsetHeight || 1;
              return 1 !== n || 1 !== r;
            })(t),
          l = Pa(t),
          s = ka(e, i, n),
          c = { scrollLeft: 0, scrollTop: 0 },
          u = { x: 0, y: 0 };
        return (
          (o || (!o && !n)) &&
            (("body" !== Ta(t) || xo(l)) &&
              (c =
                (r = t) !== ha(r) && ba(r)
                  ? { scrollLeft: (a = r).scrollLeft, scrollTop: a.scrollTop }
                  : Eo(r)),
            ba(t)
              ? (((u = ka(t, !0)).x += t.clientLeft), (u.y += t.clientTop))
              : l && (u.x = wo(l))),
          {
            x: s.left + c.scrollLeft - u.x,
            y: s.top + c.scrollTop - u.y,
            width: s.width,
            height: s.height,
          }
        );
      }
      function Mo(e) {
        var t = new Map(),
          n = new Set(),
          r = [];
        function a(e) {
          n.add(e.name),
            []
              .concat(e.requires || [], e.requiresIfExists || [])
              .forEach(function (e) {
                if (!n.has(e)) {
                  var r = t.get(e);
                  r && a(r);
                }
              }),
            r.push(e);
        }
        return (
          e.forEach(function (e) {
            t.set(e.name, e);
          }),
          e.forEach(function (e) {
            n.has(e.name) || a(e);
          }),
          r
        );
      }
      var Fo = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function zo() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return !t.some(function (e) {
          return !(e && "function" == typeof e.getBoundingClientRect);
        });
      }
      function $o(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.defaultModifiers,
          r = void 0 === n ? [] : n,
          a = t.defaultOptions,
          o = void 0 === a ? Fo : a;
        return function (e, t, n) {
          void 0 === n && (n = o);
          var a,
            i,
            l = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, Fo, o),
              modifiersData: {},
              elements: { reference: e, popper: t },
              attributes: {},
              styles: {},
            },
            s = [],
            c = !1,
            u = {
              state: l,
              setOptions: function (n) {
                var a = "function" == typeof n ? n(l.options) : n;
                d(),
                  (l.options = Object.assign({}, o, l.options, a)),
                  (l.scrollParents = {
                    reference: ga(e)
                      ? ko(e)
                      : e.contextElement
                      ? ko(e.contextElement)
                      : [],
                    popper: ko(t),
                  });
                var i,
                  c,
                  f = (function (e) {
                    var t = Mo(e);
                    return lo.reduce(function (e, n) {
                      return e.concat(
                        t.filter(function (e) {
                          return e.phase === n;
                        })
                      );
                    }, []);
                  })(
                    ((i = [].concat(r, l.options.modifiers)),
                    (c = i.reduce(function (e, t) {
                      var n = e[t.name];
                      return (
                        (e[t.name] = n
                          ? Object.assign({}, n, t, {
                              options: Object.assign({}, n.options, t.options),
                              data: Object.assign({}, n.data, t.data),
                            })
                          : t),
                        e
                      );
                    }, {})),
                    Object.keys(c).map(function (e) {
                      return c[e];
                    }))
                  );
                return (
                  (l.orderedModifiers = f.filter(function (e) {
                    return e.enabled;
                  })),
                  l.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      n = e.options,
                      r = void 0 === n ? {} : n,
                      a = e.effect;
                    if ("function" == typeof a) {
                      var o = a({ state: l, name: t, instance: u, options: r });
                      s.push(o || function () {});
                    }
                  }),
                  u.update()
                );
              },
              forceUpdate: function () {
                if (!c) {
                  var e = l.elements,
                    t = e.reference,
                    n = e.popper;
                  if (zo(t, n)) {
                    (l.rects = {
                      reference: Ro(t, Ia(n), "fixed" === l.options.strategy),
                      popper: Na(n),
                    }),
                      (l.reset = !1),
                      (l.placement = l.options.placement),
                      l.orderedModifiers.forEach(function (e) {
                        return (l.modifiersData[e.name] = Object.assign(
                          {},
                          e.data
                        ));
                      });
                    for (var r = 0; r < l.orderedModifiers.length; r++)
                      if (!0 !== l.reset) {
                        var a = l.orderedModifiers[r],
                          o = a.fn,
                          i = a.options,
                          s = void 0 === i ? {} : i,
                          d = a.name;
                        "function" == typeof o &&
                          (l =
                            o({ state: l, options: s, name: d, instance: u }) ||
                            l);
                      } else (l.reset = !1), (r = -1);
                  }
                }
              },
              update:
                ((a = function () {
                  return new Promise(function (e) {
                    u.forceUpdate(), e(l);
                  });
                }),
                function () {
                  return (
                    i ||
                      (i = new Promise(function (e) {
                        Promise.resolve().then(function () {
                          (i = void 0), e(a());
                        });
                      })),
                    i
                  );
                }),
              destroy: function () {
                d(), (c = !0);
              },
            };
          if (!zo(e, t)) return u;
          function d() {
            s.forEach(function (e) {
              return e();
            }),
              (s = []);
          }
          return (
            u.setOptions(n).then(function (e) {
              !c && n.onFirstUpdate && n.onFirstUpdate(e);
            }),
            u
          );
        };
      }
      var Bo = $o();
      const Uo = $o({ defaultModifiers: [jo, Lo, po, ho, Io, Oo, Do, so] }),
        Ho = ["enabled", "placement", "strategy", "modifiers"],
        Wo = {
          name: "applyStyles",
          enabled: !1,
          phase: "afterWrite",
          fn: () => {},
        },
        Vo = {
          name: "ariaDescribedBy",
          enabled: !0,
          phase: "afterWrite",
          effect:
            ({ state: e }) =>
            () => {
              const { reference: t, popper: n } = e.elements;
              if ("removeAttribute" in t) {
                const e = (t.getAttribute("aria-describedby") || "")
                  .split(",")
                  .filter((e) => e.trim() !== n.id);
                e.length
                  ? t.setAttribute("aria-describedby", e.join(","))
                  : t.removeAttribute("aria-describedby");
              }
            },
          fn: ({ state: e }) => {
            var t;
            const { popper: n, reference: r } = e.elements,
              a =
                null == (t = n.getAttribute("role")) ? void 0 : t.toLowerCase();
            if (n.id && "tooltip" === a && "setAttribute" in r) {
              const e = r.getAttribute("aria-describedby");
              if (e && -1 !== e.split(",").indexOf(n.id)) return;
              r.setAttribute("aria-describedby", e ? `${e},${n.id}` : n.id);
            }
          },
        },
        qo = [],
        Qo = function (e, n, r = {}) {
          let {
              enabled: a = !0,
              placement: o = "bottom",
              strategy: i = "absolute",
              modifiers: l = qo,
            } = r,
            s = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                a = {},
                o = Object.keys(e);
              for (r = 0; r < o.length; r++)
                (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
              return a;
            })(r, Ho);
          const c = (0, t.useRef)(l),
            u = (0, t.useRef)(),
            d = (0, t.useCallback)(() => {
              var e;
              null == (e = u.current) || e.update();
            }, []),
            f = (0, t.useCallback)(() => {
              var e;
              null == (e = u.current) || e.forceUpdate();
            }, []),
            [p, m] =
              ((b = (0, t.useState)({
                placement: o,
                update: d,
                forceUpdate: f,
                attributes: {},
                styles: { popper: {}, arrow: {} },
              })),
              (v = pn()),
              [
                b[0],
                (0, t.useCallback)(
                  function (e) {
                    if (v()) return b[1](e);
                  },
                  [v, b[1]]
                ),
              ]),
            h = (0, t.useMemo)(
              () => ({
                name: "updateStateModifier",
                enabled: !0,
                phase: "write",
                requires: ["computeStyles"],
                fn: ({ state: e }) => {
                  const t = {},
                    n = {};
                  Object.keys(e.elements).forEach((r) => {
                    (t[r] = e.styles[r]), (n[r] = e.attributes[r]);
                  }),
                    m({
                      state: e,
                      styles: t,
                      attributes: n,
                      update: d,
                      forceUpdate: f,
                      placement: e.placement,
                    });
                },
              }),
              [d, f, m]
            ),
            g = (0, t.useMemo)(
              () => (pa(c.current, l) || (c.current = l), c.current),
              [l]
            );
          var b, v;
          return (
            (0, t.useEffect)(() => {
              u.current &&
                a &&
                u.current.setOptions({
                  placement: o,
                  strategy: i,
                  modifiers: [...g, h, Wo],
                });
            }, [i, o, h, a, g]),
            (0, t.useEffect)(() => {
              if (a && null != e && null != n)
                return (
                  (u.current = Uo(
                    e,
                    n,
                    Object.assign({}, s, {
                      placement: o,
                      strategy: i,
                      modifiers: [...g, Vo, h],
                    })
                  )),
                  () => {
                    null != u.current &&
                      (u.current.destroy(),
                      (u.current = void 0),
                      m((e) =>
                        Object.assign({}, e, {
                          attributes: {},
                          styles: { popper: {} },
                        })
                      ));
                  }
                );
            }, [a, e, n]),
            p
          );
        },
        Ko = () => {},
        Zo = (e) => e && ("current" in e ? e.current : e),
        Go = {
          click: "mousedown",
          mouseup: "mousedown",
          pointerup: "pointerdown",
        },
        Yo = function (
          e,
          n = Ko,
          { disabled: r, clickTrigger: a = "click" } = {}
        ) {
          const o = (0, t.useRef)(!1),
            i = (0, t.useRef)(!1),
            l = (0, t.useCallback)(
              (t) => {
                const n = Zo(e);
                var r;
                bt()(
                  !!n,
                  "ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"
                ),
                  (o.current =
                    !n ||
                    !!(
                      (r = t).metaKey ||
                      r.altKey ||
                      r.ctrlKey ||
                      r.shiftKey
                    ) ||
                    !(function (e) {
                      return 0 === e.button;
                    })(t) ||
                    !!fn(n, t.target) ||
                    i.current),
                  (i.current = !1);
              },
              [e]
            ),
            s = Jt((t) => {
              const n = Zo(e);
              n && fn(n, t.target) && (i.current = !0);
            }),
            c = Jt((e) => {
              o.current || n(e);
            });
          (0, t.useEffect)(() => {
            if (r || null == e) return;
            const t = Kt(Zo(e));
            let n = (t.defaultView || window).event,
              o = null;
            Go[a] && (o = cn(t, Go[a], s, !0));
            const i = cn(t, a, l, !0),
              u = cn(t, a, (e) => {
                e !== n ? c(e) : (n = void 0);
              });
            let d = [];
            return (
              "ontouchstart" in t.documentElement &&
                (d = [].slice
                  .call(t.body.children)
                  .map((e) => cn(e, "mousemove", Ko))),
              () => {
                null == o || o(), i(), u(), d.forEach((e) => e());
              }
            );
          }, [e, r, a, l, s, c]);
        };
      function Xo(e = {}) {
        return Array.isArray(e)
          ? e
          : Object.keys(e).map((t) => ((e[t].name = t), e[t]));
      }
      function Jo({
        enabled: e,
        enableEvents: t,
        placement: n,
        flip: r,
        offset: a,
        fixed: o,
        containerPadding: i,
        arrowElement: l,
        popperConfig: s = {},
      }) {
        var c, u, d, f, p;
        const m = (function (e) {
          const t = {};
          return Array.isArray(e)
            ? (null == e ||
                e.forEach((e) => {
                  t[e.name] = e;
                }),
              t)
            : e || t;
        })(s.modifiers);
        return Object.assign({}, s, {
          placement: n,
          enabled: e,
          strategy: o ? "fixed" : s.strategy,
          modifiers: Xo(
            Object.assign({}, m, {
              eventListeners: {
                enabled: t,
                options: null == (c = m.eventListeners) ? void 0 : c.options,
              },
              preventOverflow: Object.assign({}, m.preventOverflow, {
                options: i
                  ? Object.assign(
                      { padding: i },
                      null == (u = m.preventOverflow) ? void 0 : u.options
                    )
                  : null == (d = m.preventOverflow)
                  ? void 0
                  : d.options,
              }),
              offset: {
                options: Object.assign(
                  { offset: a },
                  null == (f = m.offset) ? void 0 : f.options
                ),
              },
              arrow: Object.assign({}, m.arrow, {
                enabled: !!l,
                options: Object.assign(
                  {},
                  null == (p = m.arrow) ? void 0 : p.options,
                  { element: l }
                ),
              }),
              flip: Object.assign({ enabled: !!r }, m.flip),
            })
          ),
        });
      }
      const ei = ["children"],
        ti = () => {};
      function ni(e = {}) {
        const n = (0, t.useContext)(ua),
          [r, a] = Xt(),
          o = (0, t.useRef)(!1),
          {
            flip: i,
            offset: l,
            rootCloseEvent: s,
            fixed: c = !1,
            placement: u,
            popperConfig: d = {},
            enableEventListeners: f = !0,
            usePopper: p = !!n,
          } = e,
          m = null == (null == n ? void 0 : n.show) ? !!e.show : n.show;
        m && !o.current && (o.current = !0);
        const {
            placement: h,
            setMenu: g,
            menuElement: b,
            toggleElement: v,
          } = n || {},
          y = Qo(
            v,
            b,
            Jo({
              placement: u || h || "bottom-start",
              enabled: p,
              enableEvents: null == f ? m : f,
              offset: l,
              flip: i,
              fixed: c,
              arrowElement: r,
              popperConfig: d,
            })
          ),
          E = Object.assign(
            { ref: g || ti, "aria-labelledby": null == v ? void 0 : v.id },
            y.attributes.popper,
            { style: y.styles.popper }
          ),
          w = {
            show: m,
            placement: h,
            hasShown: o.current,
            toggle: null == n ? void 0 : n.toggle,
            popper: p ? y : null,
            arrowProps: p
              ? Object.assign({ ref: a }, y.attributes.arrow, {
                  style: y.styles.arrow,
                })
              : {},
          };
        return (
          Yo(
            b,
            (e) => {
              null == n || n.toggle(!1, e);
            },
            { clickTrigger: s, disabled: !m }
          ),
          [E, w]
        );
      }
      function ri(e) {
        let { children: t } = e,
          n = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, ei);
        const [r, a] = ni(n);
        return (0, Be.jsx)(Be.Fragment, { children: t(r, a) });
      }
      (ri.displayName = "DropdownMenu"), (ri.defaultProps = { usePopper: !0 });
      const ai = ri,
        oi = { prefix: String(Math.round(1e10 * Math.random())), current: 0 },
        ii = t.createContext(oi);
      let li = Boolean(
        "undefined" != typeof window &&
          window.document &&
          window.document.createElement
      );
      const si = (e) => {
          var t;
          return (
            "menu" ===
            (null == (t = e.getAttribute("role")) ? void 0 : t.toLowerCase())
          );
        },
        ci = () => {};
      function ui() {
        const e = (function (e) {
            let n = (0, t.useContext)(ii);
            return (
              n !== oi ||
                li ||
                console.warn(
                  "When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."
                ),
              (0, t.useMemo)(() => `react-aria${n.prefix}-${++n.current}`, [e])
            );
          })(),
          {
            show: n = !1,
            toggle: r = ci,
            setToggle: a,
            menuElement: o,
          } = (0, t.useContext)(ua) || {},
          i = (0, t.useCallback)(
            (e) => {
              r(!n, e);
            },
            [n, r]
          ),
          l = { id: e, ref: a || ci, onClick: i, "aria-expanded": !!n };
        return (
          o && si(o) && (l["aria-haspopup"] = !0), [l, { show: n, toggle: r }]
        );
      }
      function di({ children: e }) {
        const [t, n] = ui();
        return (0, Be.jsx)(Be.Fragment, { children: e(t, n) });
      }
      di.displayName = "DropdownToggle";
      const fi = di,
        pi = (e, t = null) => (null != e ? String(e) : t || null),
        mi = t.createContext(null),
        hi = t.createContext(null);
      hi.displayName = "NavContext";
      const gi = hi,
        bi = ["eventKey", "disabled", "onClick", "active", "as"];
      function vi({ key: e, href: n, active: r, disabled: a, onClick: o }) {
        const i = (0, t.useContext)(mi),
          l = (0, t.useContext)(gi),
          { activeKey: s } = l || {},
          c = pi(e, n),
          u = null == r && null != e ? pi(s) === c : r;
        return [
          {
            onClick: Jt((e) => {
              a ||
                (null == o || o(e), i && !e.isPropagationStopped() && i(c, e));
            }),
            "aria-disabled": a || void 0,
            "aria-selected": u,
            [hn("dropdown-item")]: "",
          },
          { isActive: u },
        ];
      }
      const yi = t.forwardRef((e, t) => {
        let { eventKey: n, disabled: r, onClick: a, active: o, as: i = Ve } = e,
          l = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, bi);
        const [s] = vi({
          key: n,
          href: l.href,
          disabled: r,
          onClick: a,
          active: o,
        });
        return (0, Be.jsx)(i, Object.assign({}, l, { ref: t }, s));
      });
      yi.displayName = "DropdownItem";
      const Ei = yi;
      function wi() {
        const e = (0, t.useReducer)(function (e) {
            return !e;
          }, !1)[1],
          n = (0, t.useRef)(null),
          r = (0, t.useCallback)(
            (t) => {
              (n.current = t), e();
            },
            [e]
          );
        return [n, r];
      }
      function xi({
        defaultShow: e,
        show: n,
        onSelect: r,
        onToggle: a,
        itemSelector: o = `* [${hn("dropdown-item")}]`,
        focusFirstItemOnShow: i,
        placement: l = "bottom-start",
        children: s,
      }) {
        const c = yn(),
          [u, d] = ca(n, e, a),
          [f, p] = wi(),
          m = f.current,
          [h, g] = wi(),
          b = h.current,
          v = mn(u),
          y = (0, t.useRef)(null),
          E = (0, t.useRef)(!1),
          w = (0, t.useContext)(mi),
          x = (0, t.useCallback)(
            (e, t, n = null == t ? void 0 : t.type) => {
              d(e, { originalEvent: t, source: n });
            },
            [d]
          ),
          _ = Jt((e, t) => {
            null == r || r(e, t),
              x(!1, t, "select"),
              t.isPropagationStopped() || null == w || w(e, t);
          }),
          k = (0, t.useMemo)(
            () => ({
              toggle: x,
              placement: l,
              show: u,
              menuElement: m,
              toggleElement: b,
              setMenu: p,
              setToggle: g,
            }),
            [x, l, u, m, b, p, g]
          );
        m && v && !u && (E.current = m.contains(m.ownerDocument.activeElement));
        const N = Jt(() => {
            b && b.focus && b.focus();
          }),
          C = Jt(() => {
            const e = y.current;
            let t = i;
            if (
              (null == t && (t = !(!f.current || !si(f.current)) && "keyboard"),
              !1 === t || ("keyboard" === t && !/^key.+$/.test(e)))
            )
              return;
            const n = Sn(f.current, o)[0];
            n && n.focus && n.focus();
          });
        (0, t.useEffect)(() => {
          u ? C() : E.current && ((E.current = !1), N());
        }, [u, E, N, C]),
          (0, t.useEffect)(() => {
            y.current = null;
          });
        const T = (e, t) => {
          if (!f.current) return null;
          const n = Sn(f.current, o);
          let r = n.indexOf(e) + t;
          return (r = Math.max(0, Math.min(r, n.length))), n[r];
        };
        return (
          (function (e, n, r, a) {
            void 0 === a && (a = !1);
            var o = Jt((e) => {
              var t, n;
              const { key: r } = e,
                a = e.target,
                o = null == (t = f.current) ? void 0 : t.contains(a),
                i = null == (n = h.current) ? void 0 : n.contains(a);
              if (
                /input|textarea/i.test(a.tagName) &&
                (" " === r ||
                  ("Escape" !== r && o) ||
                  ("Escape" === r && "search" === a.type))
              )
                return;
              if (!o && !i) return;
              if (!("Tab" !== r || (f.current && u))) return;
              y.current = e.type;
              const l = { originalEvent: e, source: e.type };
              switch (r) {
                case "ArrowUp": {
                  const t = T(a, -1);
                  return t && t.focus && t.focus(), void e.preventDefault();
                }
                case "ArrowDown":
                  if ((e.preventDefault(), u)) {
                    const e = T(a, 1);
                    e && e.focus && e.focus();
                  } else d(!0, l);
                  return;
                case "Tab":
                  Qt(
                    a.ownerDocument,
                    "keyup",
                    (e) => {
                      var t;
                      (("Tab" !== e.key || e.target) &&
                        null != (t = f.current) &&
                        t.contains(e.target)) ||
                        d(!1, l);
                    },
                    { once: !0 }
                  );
                  break;
                case "Escape":
                  "Escape" === r && (e.preventDefault(), e.stopPropagation()),
                    d(!1, l);
              }
            });
            (0, t.useEffect)(
              function () {
                var t = "function" == typeof e ? e() : e;
                return (
                  t.addEventListener(n, o, a),
                  function () {
                    return t.removeEventListener(n, o, a);
                  }
                );
              },
              [e]
            );
          })(
            (0, t.useCallback)(() => c.document, [c]),
            "keydown"
          ),
          (0, Be.jsx)(mi.Provider, {
            value: _,
            children: (0, Be.jsx)(ua.Provider, { value: k, children: s }),
          })
        );
      }
      (xi.displayName = "Dropdown"),
        (xi.Menu = ai),
        (xi.Toggle = fi),
        (xi.Item = Ei);
      const _i = xi,
        ki = t.createContext({});
      ki.displayName = "DropdownContext";
      const Ni = ki;
      new WeakMap();
      const Ci = ["onKeyDown"],
        Ti = t.forwardRef((e, t) => {
          let { onKeyDown: n } = e,
            r = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                a = {},
                o = Object.keys(e);
              for (r = 0; r < o.length; r++)
                (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
              return a;
            })(e, Ci);
          const [a] = He(Object.assign({ tagName: "a" }, r)),
            o = Jt((e) => {
              a.onKeyDown(e), null == n || n(e);
            });
          return (i = r.href) && "#" !== i.trim() && "button" !== r.role
            ? (0, Be.jsx)("a", Object.assign({ ref: t }, r, { onKeyDown: n }))
            : (0, Be.jsx)(
                "a",
                Object.assign({ ref: t }, r, a, { onKeyDown: o })
              );
          var i;
        });
      Ti.displayName = "Anchor";
      const Si = Ti,
        Oi = t.forwardRef(
          (
            {
              bsPrefix: e,
              className: t,
              eventKey: n,
              disabled: r = !1,
              onClick: a,
              active: o,
              as: i = Si,
              ...l
            },
            s
          ) => {
            const c = Ze(e, "dropdown-item"),
              [u, d] = vi({
                key: n,
                href: l.href,
                disabled: r,
                onClick: a,
                active: o,
              });
            return (0, Be.jsx)(i, {
              ...l,
              ...u,
              ref: s,
              className: $e()(t, c, d.isActive && "active", r && "disabled"),
            });
          }
        );
      Oi.displayName = "DropdownItem";
      const Pi = Oi,
        Ai = t.createContext(null);
      Ai.displayName = "InputGroupContext";
      const ji = Ai;
      function Ii(e, t) {
        return e;
      }
      function Li(e, t, n) {
        let r = e
          ? n
            ? "bottom-start"
            : "bottom-end"
          : n
          ? "bottom-end"
          : "bottom-start";
        return (
          "up" === t
            ? (r = e
                ? n
                  ? "top-start"
                  : "top-end"
                : n
                ? "top-end"
                : "top-start")
            : "end" === t
            ? (r = e
                ? n
                  ? "left-end"
                  : "right-end"
                : n
                ? "left-start"
                : "right-start")
            : "start" === t &&
              (r = e
                ? n
                  ? "right-end"
                  : "left-end"
                : n
                ? "right-start"
                : "left-start"),
          r
        );
      }
      const Di = t.forwardRef(
        (
          {
            bsPrefix: e,
            className: n,
            align: r,
            rootCloseEvent: a,
            flip: o,
            show: i,
            renderOnMount: l,
            as: s = "div",
            popperConfig: c,
            variant: u,
            ...d
          },
          f
        ) => {
          let p = !1;
          const m = (0, t.useContext)(Yr),
            h = Ze(e, "dropdown-menu"),
            { align: g, drop: b, isRTL: v } = (0, t.useContext)(Ni);
          r = r || g;
          const y = (0, t.useContext)(ji),
            E = [];
          if (r)
            if ("object" == typeof r) {
              const e = Object.keys(r);
              if (e.length) {
                const t = e[0],
                  n = r[t];
                (p = "start" === n), E.push(`${h}-${t}-${n}`);
              }
            } else "end" === r && (p = !0);
          const w = Li(p, b, v),
            [x, { hasShown: _, popper: k, show: N, toggle: C }] = ni({
              flip: o,
              rootCloseEvent: a,
              show: i,
              usePopper: !m && 0 === E.length,
              offset: [0, 2],
              popperConfig: c,
              placement: w,
            });
          if (
            ((x.ref = tn(Ii(f), x.ref)),
            Br(() => {
              N && (null == k || k.update());
            }, [N]),
            !_ && !l && !y)
          )
            return null;
          "string" != typeof s &&
            ((x.show = N),
            (x.close = () => (null == C ? void 0 : C(!1))),
            (x.align = r));
          let T = d.style;
          return (
            null != k &&
              k.placement &&
              ((T = { ...d.style, ...x.style }),
              (d["x-placement"] = k.placement)),
            (0, Be.jsx)(s, {
              ...d,
              ...x,
              style: T,
              ...((E.length || m) && { "data-bs-popper": "static" }),
              className: $e()(
                n,
                h,
                N && "show",
                p && `${h}-end`,
                u && `${h}-${u}`,
                ...E
              ),
            })
          );
        }
      );
      (Di.displayName = "DropdownMenu"), (Di.defaultProps = { flip: !0 });
      const Ri = Di,
        Mi = t.forwardRef(
          (
            {
              bsPrefix: e,
              split: n,
              className: r,
              childBsPrefix: a,
              as: o = Xe,
              ...i
            },
            l
          ) => {
            const s = Ze(e, "dropdown-toggle"),
              c = (0, t.useContext)(ua),
              u = (0, t.useContext)(ji);
            void 0 !== a && (i.bsPrefix = a);
            const [d] = ui();
            return (
              (d.ref = tn(d.ref, Ii(l))),
              (0, Be.jsx)(o, {
                className: $e()(
                  r,
                  s,
                  n && `${s}-split`,
                  !!u && (null == c ? void 0 : c.show) && "show"
                ),
                ...d,
                ...i,
              })
            );
          }
        );
      Mi.displayName = "DropdownToggle";
      const Fi = Mi,
        zi = xt("dropdown-header", { defaultProps: { role: "heading" } }),
        $i = xt("dropdown-divider", {
          Component: "hr",
          defaultProps: { role: "separator" },
        }),
        Bi = xt("dropdown-item-text", { Component: "span" }),
        Ui = t.forwardRef((e, n) => {
          const {
              bsPrefix: r,
              drop: a,
              show: o,
              className: i,
              align: l,
              onSelect: s,
              onToggle: c,
              focusFirstItemOnShow: u,
              as: d = "div",
              navbar: f,
              autoClose: p,
              ...m
            } = (function (e, t) {
              return Object.keys(t).reduce(function (n, r) {
                var a,
                  o = n,
                  i = o[la(r)],
                  l = o[r],
                  s = Mn(o, [la(r), r].map(sa)),
                  c = t[r],
                  u = ca(l, i, e[c]),
                  d = u[0],
                  f = u[1];
                return w({}, s, (((a = {})[r] = d), (a[c] = f), a));
              }, e);
            })(e, { show: "onToggle" }),
            h = (0, t.useContext)(ji),
            g = Ze(r, "dropdown"),
            b = Ge(),
            v = Jt((e, t) => {
              var n;
              t.originalEvent.currentTarget !== document ||
                ("keydown" === t.source && "Escape" !== t.originalEvent.key) ||
                (t.source = "rootClose"),
                (n = t.source),
                (!1 === p
                  ? "click" === n
                  : "inside" === p
                  ? "rootClose" !== n
                  : "outside" !== p || "select" !== n) &&
                  (null == c || c(e, t));
            }),
            y = Li("end" === l, a, b),
            E = (0, t.useMemo)(
              () => ({ align: l, drop: a, isRTL: b }),
              [l, a, b]
            );
          return (0, Be.jsx)(Ni.Provider, {
            value: E,
            children: (0, Be.jsx)(_i, {
              placement: y,
              show: o,
              onSelect: s,
              onToggle: v,
              focusFirstItemOnShow: u,
              itemSelector: `.${g}-item:not(.disabled):not(:disabled)`,
              children: h
                ? m.children
                : (0, Be.jsx)(d, {
                    ...m,
                    ref: n,
                    className: $e()(
                      i,
                      o && "show",
                      (!a || "down" === a) && g,
                      "up" === a && "dropup",
                      "end" === a && "dropend",
                      "start" === a && "dropstart"
                    ),
                  }),
            }),
          });
        });
      (Ui.displayName = "Dropdown"),
        (Ui.defaultProps = { navbar: !1, align: "start", autoClose: !0 });
      const Hi = Object.assign(Ui, {
          Toggle: Fi,
          Menu: Ri,
          Item: Pi,
          ItemText: Bi,
          Divider: $i,
          Header: zi,
        }),
        Wi = n.p + "LOGOHAZTUOFERTA.png",
        Vi = {
          name: "applyStyles",
          enabled: !0,
          phase: "write",
          fn: function (e) {
            var t = e.state;
            Object.keys(t.elements).forEach(function (e) {
              var n = t.styles[e] || {},
                r = t.attributes[e] || {},
                a = t.elements[e];
              ba(a) &&
                Ta(a) &&
                (Object.assign(a.style, n),
                Object.keys(r).forEach(function (e) {
                  var t = r[e];
                  !1 === t
                    ? a.removeAttribute(e)
                    : a.setAttribute(e, !0 === t ? "" : t);
                }));
            });
          },
          effect: function (e) {
            var t = e.state,
              n = {
                popper: {
                  position: t.options.strategy,
                  left: "0",
                  top: "0",
                  margin: "0",
                },
                arrow: { position: "absolute" },
                reference: {},
              };
            return (
              Object.assign(t.elements.popper.style, n.popper),
              (t.styles = n),
              t.elements.arrow &&
                Object.assign(t.elements.arrow.style, n.arrow),
              function () {
                Object.keys(t.elements).forEach(function (e) {
                  var r = t.elements[e],
                    a = t.attributes[e] || {},
                    o = Object.keys(
                      t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
                    ).reduce(function (e, t) {
                      return (e[t] = ""), e;
                    }, {});
                  ba(r) &&
                    Ta(r) &&
                    (Object.assign(r.style, o),
                    Object.keys(a).forEach(function (e) {
                      r.removeAttribute(e);
                    }));
                });
              }
            );
          },
          requires: ["computeStyles"],
        };
      var qi = $o({ defaultModifiers: [ho, Lo, po, Vi, Io, Oo, Do, so, jo] }),
        Qi = $o({ defaultModifiers: [ho, Lo, po, Vi] });
      const Ki = "transitionend",
        Zi = (e) => {
          let t = e.getAttribute("data-bs-target");
          if (!t || "#" === t) {
            let n = e.getAttribute("href");
            if (!n || (!n.includes("#") && !n.startsWith("."))) return null;
            n.includes("#") &&
              !n.startsWith("#") &&
              (n = `#${n.split("#")[1]}`),
              (t = n && "#" !== n ? n.trim() : null);
          }
          return t;
        },
        Gi = (e) => {
          const t = Zi(e);
          return t && document.querySelector(t) ? t : null;
        },
        Yi = (e) => {
          const t = Zi(e);
          return t ? document.querySelector(t) : null;
        },
        Xi = (e) => {
          e.dispatchEvent(new Event(Ki));
        },
        Ji = (e) =>
          !(!e || "object" != typeof e) &&
          (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
        el = (e) =>
          Ji(e)
            ? e.jquery
              ? e[0]
              : e
            : "string" == typeof e && e.length > 0
            ? document.querySelector(e)
            : null,
        tl = (e) => {
          if (!Ji(e) || 0 === e.getClientRects().length) return !1;
          const t =
              "visible" === getComputedStyle(e).getPropertyValue("visibility"),
            n = e.closest("details:not([open])");
          if (!n) return t;
          if (n !== e) {
            const t = e.closest("summary");
            if (t && t.parentNode !== n) return !1;
            if (null === t) return !1;
          }
          return t;
        },
        nl = (e) =>
          !e ||
          e.nodeType !== Node.ELEMENT_NODE ||
          !!e.classList.contains("disabled") ||
          (void 0 !== e.disabled
            ? e.disabled
            : e.hasAttribute("disabled") &&
              "false" !== e.getAttribute("disabled")),
        rl = (e) => {
          if (!document.documentElement.attachShadow) return null;
          if ("function" == typeof e.getRootNode) {
            const t = e.getRootNode();
            return t instanceof ShadowRoot ? t : null;
          }
          return e instanceof ShadowRoot
            ? e
            : e.parentNode
            ? rl(e.parentNode)
            : null;
        },
        al = () => {},
        ol = (e) => {
          e.offsetHeight;
        },
        il = () =>
          window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
            ? window.jQuery
            : null,
        ll = [],
        sl = () => "rtl" === document.documentElement.dir,
        cl = (e) => {
          var t;
          (t = () => {
            const t = il();
            if (t) {
              const n = e.NAME,
                r = t.fn[n];
              (t.fn[n] = e.jQueryInterface),
                (t.fn[n].Constructor = e),
                (t.fn[n].noConflict = () => ((t.fn[n] = r), e.jQueryInterface));
            }
          }),
            "loading" === document.readyState
              ? (ll.length ||
                  document.addEventListener("DOMContentLoaded", () => {
                    for (const e of ll) e();
                  }),
                ll.push(t))
              : t();
        },
        ul = (e) => {
          "function" == typeof e && e();
        },
        dl = (e, t, n = !0) => {
          if (!n) return void ul(e);
          const r =
            ((e) => {
              if (!e) return 0;
              let { transitionDuration: t, transitionDelay: n } =
                window.getComputedStyle(e);
              const r = Number.parseFloat(t),
                a = Number.parseFloat(n);
              return r || a
                ? ((t = t.split(",")[0]),
                  (n = n.split(",")[0]),
                  1e3 * (Number.parseFloat(t) + Number.parseFloat(n)))
                : 0;
            })(t) + 5;
          let a = !1;
          const o = ({ target: n }) => {
            n === t && ((a = !0), t.removeEventListener(Ki, o), ul(e));
          };
          t.addEventListener(Ki, o),
            setTimeout(() => {
              a || Xi(t);
            }, r);
        },
        fl = (e, t, n, r) => {
          const a = e.length;
          let o = e.indexOf(t);
          return -1 === o
            ? !n && r
              ? e[a - 1]
              : e[0]
            : ((o += n ? 1 : -1),
              r && (o = (o + a) % a),
              e[Math.max(0, Math.min(o, a - 1))]);
        },
        pl = /[^.]*(?=\..*)\.|.*/,
        ml = /\..*/,
        hl = /::\d+$/,
        gl = {};
      let bl = 1;
      const vl = { mouseenter: "mouseover", mouseleave: "mouseout" },
        yl = new Set([
          "click",
          "dblclick",
          "mouseup",
          "mousedown",
          "contextmenu",
          "mousewheel",
          "DOMMouseScroll",
          "mouseover",
          "mouseout",
          "mousemove",
          "selectstart",
          "selectend",
          "keydown",
          "keypress",
          "keyup",
          "orientationchange",
          "touchstart",
          "touchmove",
          "touchend",
          "touchcancel",
          "pointerdown",
          "pointermove",
          "pointerup",
          "pointerleave",
          "pointercancel",
          "gesturestart",
          "gesturechange",
          "gestureend",
          "focus",
          "blur",
          "change",
          "reset",
          "select",
          "submit",
          "focusin",
          "focusout",
          "load",
          "unload",
          "beforeunload",
          "resize",
          "move",
          "DOMContentLoaded",
          "readystatechange",
          "error",
          "abort",
          "scroll",
        ]);
      function El(e, t) {
        return (t && `${t}::${bl++}`) || e.uidEvent || bl++;
      }
      function wl(e) {
        const t = El(e);
        return (e.uidEvent = t), (gl[t] = gl[t] || {}), gl[t];
      }
      function xl(e, t, n = null) {
        return Object.values(e).find(
          (e) => e.callable === t && e.delegationSelector === n
        );
      }
      function _l(e, t, n) {
        const r = "string" == typeof t,
          a = r ? n : t || n;
        let o = Tl(e);
        return yl.has(o) || (o = e), [r, a, o];
      }
      function kl(e, t, n, r, a) {
        if ("string" != typeof t || !e) return;
        let [o, i, l] = _l(t, n, r);
        if (t in vl) {
          const e = (e) =>
            function (t) {
              if (
                !t.relatedTarget ||
                (t.relatedTarget !== t.delegateTarget &&
                  !t.delegateTarget.contains(t.relatedTarget))
              )
                return e.call(this, t);
            };
          i = e(i);
        }
        const s = wl(e),
          c = s[l] || (s[l] = {}),
          u = xl(c, i, o ? n : null);
        if (u) return void (u.oneOff = u.oneOff && a);
        const d = El(i, t.replace(pl, "")),
          f = o
            ? (function (e, t, n) {
                return function r(a) {
                  const o = e.querySelectorAll(t);
                  for (let { target: i } = a; i && i !== this; i = i.parentNode)
                    for (const l of o)
                      if (l === i)
                        return (
                          Ol(a, { delegateTarget: i }),
                          r.oneOff && Sl.off(e, a.type, t, n),
                          n.apply(i, [a])
                        );
                };
              })(e, n, i)
            : (function (e, t) {
                return function n(r) {
                  return (
                    Ol(r, { delegateTarget: e }),
                    n.oneOff && Sl.off(e, r.type, t),
                    t.apply(e, [r])
                  );
                };
              })(e, i);
        (f.delegationSelector = o ? n : null),
          (f.callable = i),
          (f.oneOff = a),
          (f.uidEvent = d),
          (c[d] = f),
          e.addEventListener(l, f, o);
      }
      function Nl(e, t, n, r, a) {
        const o = xl(t[n], r, a);
        o && (e.removeEventListener(n, o, Boolean(a)), delete t[n][o.uidEvent]);
      }
      function Cl(e, t, n, r) {
        const a = t[n] || {};
        for (const o of Object.keys(a))
          if (o.includes(r)) {
            const r = a[o];
            Nl(e, t, n, r.callable, r.delegationSelector);
          }
      }
      function Tl(e) {
        return (e = e.replace(ml, "")), vl[e] || e;
      }
      const Sl = {
        on(e, t, n, r) {
          kl(e, t, n, r, !1);
        },
        one(e, t, n, r) {
          kl(e, t, n, r, !0);
        },
        off(e, t, n, r) {
          if ("string" != typeof t || !e) return;
          const [a, o, i] = _l(t, n, r),
            l = i !== t,
            s = wl(e),
            c = s[i] || {},
            u = t.startsWith(".");
          if (void 0 === o) {
            if (u) for (const n of Object.keys(s)) Cl(e, s, n, t.slice(1));
            for (const n of Object.keys(c)) {
              const r = n.replace(hl, "");
              if (!l || t.includes(r)) {
                const t = c[n];
                Nl(e, s, i, t.callable, t.delegationSelector);
              }
            }
          } else {
            if (!Object.keys(c).length) return;
            Nl(e, s, i, o, a ? n : null);
          }
        },
        trigger(e, t, n) {
          if ("string" != typeof t || !e) return null;
          const r = il();
          let a = null,
            o = !0,
            i = !0,
            l = !1;
          t !== Tl(t) &&
            r &&
            ((a = r.Event(t, n)),
            r(e).trigger(a),
            (o = !a.isPropagationStopped()),
            (i = !a.isImmediatePropagationStopped()),
            (l = a.isDefaultPrevented()));
          let s = new Event(t, { bubbles: o, cancelable: !0 });
          return (
            (s = Ol(s, n)),
            l && s.preventDefault(),
            i && e.dispatchEvent(s),
            s.defaultPrevented && a && a.preventDefault(),
            s
          );
        },
      };
      function Ol(e, t) {
        for (const [n, r] of Object.entries(t || {}))
          try {
            e[n] = r;
          } catch (t) {
            Object.defineProperty(e, n, { configurable: !0, get: () => r });
          }
        return e;
      }
      const Pl = new Map(),
        Al = {
          set(e, t, n) {
            Pl.has(e) || Pl.set(e, new Map());
            const r = Pl.get(e);
            r.has(t) || 0 === r.size
              ? r.set(t, n)
              : console.error(
                  `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                    Array.from(r.keys())[0]
                  }.`
                );
          },
          get: (e, t) => (Pl.has(e) && Pl.get(e).get(t)) || null,
          remove(e, t) {
            if (!Pl.has(e)) return;
            const n = Pl.get(e);
            n.delete(t), 0 === n.size && Pl.delete(e);
          },
        };
      function jl(e) {
        if ("true" === e) return !0;
        if ("false" === e) return !1;
        if (e === Number(e).toString()) return Number(e);
        if ("" === e || "null" === e) return null;
        if ("string" != typeof e) return e;
        try {
          return JSON.parse(decodeURIComponent(e));
        } catch (t) {
          return e;
        }
      }
      function Il(e) {
        return e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
      }
      const Ll = {
        setDataAttribute(e, t, n) {
          e.setAttribute(`data-bs-${Il(t)}`, n);
        },
        removeDataAttribute(e, t) {
          e.removeAttribute(`data-bs-${Il(t)}`);
        },
        getDataAttributes(e) {
          if (!e) return {};
          const t = {},
            n = Object.keys(e.dataset).filter(
              (e) => e.startsWith("bs") && !e.startsWith("bsConfig")
            );
          for (const r of n) {
            let n = r.replace(/^bs/, "");
            (n = n.charAt(0).toLowerCase() + n.slice(1, n.length)),
              (t[n] = jl(e.dataset[r]));
          }
          return t;
        },
        getDataAttribute: (e, t) => jl(e.getAttribute(`data-bs-${Il(t)}`)),
      };
      class Dl {
        static get Default() {
          return {};
        }
        static get DefaultType() {
          return {};
        }
        static get NAME() {
          throw new Error(
            'You have to implement the static method "NAME", for each component!'
          );
        }
        _getConfig(e) {
          return (
            (e = this._mergeConfigObj(e)),
            (e = this._configAfterMerge(e)),
            this._typeCheckConfig(e),
            e
          );
        }
        _configAfterMerge(e) {
          return e;
        }
        _mergeConfigObj(e, t) {
          const n = Ji(t) ? Ll.getDataAttribute(t, "config") : {};
          return {
            ...this.constructor.Default,
            ...("object" == typeof n ? n : {}),
            ...(Ji(t) ? Ll.getDataAttributes(t) : {}),
            ...("object" == typeof e ? e : {}),
          };
        }
        _typeCheckConfig(e, t = this.constructor.DefaultType) {
          for (const r of Object.keys(t)) {
            const a = t[r],
              o = e[r],
              i = Ji(o)
                ? "element"
                : null == (n = o)
                ? `${n}`
                : Object.prototype.toString
                    .call(n)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase();
            if (!new RegExp(a).test(i))
              throw new TypeError(
                `${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${i}" but expected type "${a}".`
              );
          }
          var n;
        }
      }
      class Rl extends Dl {
        constructor(e, t) {
          super(),
            (e = el(e)) &&
              ((this._element = e),
              (this._config = this._getConfig(t)),
              Al.set(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
          Al.remove(this._element, this.constructor.DATA_KEY),
            Sl.off(this._element, this.constructor.EVENT_KEY);
          for (const e of Object.getOwnPropertyNames(this)) this[e] = null;
        }
        _queueCallback(e, t, n = !0) {
          dl(e, t, n);
        }
        _getConfig(e) {
          return (
            (e = this._mergeConfigObj(e, this._element)),
            (e = this._configAfterMerge(e)),
            this._typeCheckConfig(e),
            e
          );
        }
        static getInstance(e) {
          return Al.get(el(e), this.DATA_KEY);
        }
        static getOrCreateInstance(e, t = {}) {
          return (
            this.getInstance(e) || new this(e, "object" == typeof t ? t : null)
          );
        }
        static get VERSION() {
          return "5.2.2";
        }
        static get DATA_KEY() {
          return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
          return `.${this.DATA_KEY}`;
        }
        static eventName(e) {
          return `${e}${this.EVENT_KEY}`;
        }
      }
      const Ml = (e, t = "hide") => {
        const n = `click.dismiss${e.EVENT_KEY}`,
          r = e.NAME;
        Sl.on(document, n, `[data-bs-dismiss="${r}"]`, function (n) {
          if (
            (["A", "AREA"].includes(this.tagName) && n.preventDefault(),
            nl(this))
          )
            return;
          const a = Yi(this) || this.closest(`.${r}`);
          e.getOrCreateInstance(a)[t]();
        });
      };
      class Fl extends Rl {
        static get NAME() {
          return "alert";
        }
        close() {
          if (Sl.trigger(this._element, "close.bs.alert").defaultPrevented)
            return;
          this._element.classList.remove("show");
          const e = this._element.classList.contains("fade");
          this._queueCallback(() => this._destroyElement(), this._element, e);
        }
        _destroyElement() {
          this._element.remove(),
            Sl.trigger(this._element, "closed.bs.alert"),
            this.dispose();
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = Fl.getOrCreateInstance(this);
            if ("string" == typeof e) {
              if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                throw new TypeError(`No method named "${e}"`);
              t[e](this);
            }
          });
        }
      }
      Ml(Fl, "close"), cl(Fl);
      const zl = '[data-bs-toggle="button"]';
      class $l extends Rl {
        static get NAME() {
          return "button";
        }
        toggle() {
          this._element.setAttribute(
            "aria-pressed",
            this._element.classList.toggle("active")
          );
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = $l.getOrCreateInstance(this);
            "toggle" === e && t[e]();
          });
        }
      }
      Sl.on(document, "click.bs.button.data-api", zl, (e) => {
        e.preventDefault();
        const t = e.target.closest(zl);
        $l.getOrCreateInstance(t).toggle();
      }),
        cl($l);
      const Bl = {
          find: (e, t = document.documentElement) =>
            [].concat(...Element.prototype.querySelectorAll.call(t, e)),
          findOne: (e, t = document.documentElement) =>
            Element.prototype.querySelector.call(t, e),
          children: (e, t) =>
            [].concat(...e.children).filter((e) => e.matches(t)),
          parents(e, t) {
            const n = [];
            let r = e.parentNode.closest(t);
            for (; r; ) n.push(r), (r = r.parentNode.closest(t));
            return n;
          },
          prev(e, t) {
            let n = e.previousElementSibling;
            for (; n; ) {
              if (n.matches(t)) return [n];
              n = n.previousElementSibling;
            }
            return [];
          },
          next(e, t) {
            let n = e.nextElementSibling;
            for (; n; ) {
              if (n.matches(t)) return [n];
              n = n.nextElementSibling;
            }
            return [];
          },
          focusableChildren(e) {
            const t = [
              "a",
              "button",
              "input",
              "textarea",
              "select",
              "details",
              "[tabindex]",
              '[contenteditable="true"]',
            ]
              .map((e) => `${e}:not([tabindex^="-"])`)
              .join(",");
            return this.find(t, e).filter((e) => !nl(e) && tl(e));
          },
        },
        Ul = { endCallback: null, leftCallback: null, rightCallback: null },
        Hl = {
          endCallback: "(function|null)",
          leftCallback: "(function|null)",
          rightCallback: "(function|null)",
        };
      class Wl extends Dl {
        constructor(e, t) {
          super(),
            (this._element = e),
            e &&
              Wl.isSupported() &&
              ((this._config = this._getConfig(t)),
              (this._deltaX = 0),
              (this._supportPointerEvents = Boolean(window.PointerEvent)),
              this._initEvents());
        }
        static get Default() {
          return Ul;
        }
        static get DefaultType() {
          return Hl;
        }
        static get NAME() {
          return "swipe";
        }
        dispose() {
          Sl.off(this._element, ".bs.swipe");
        }
        _start(e) {
          this._supportPointerEvents
            ? this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX)
            : (this._deltaX = e.touches[0].clientX);
        }
        _end(e) {
          this._eventIsPointerPenTouch(e) &&
            (this._deltaX = e.clientX - this._deltaX),
            this._handleSwipe(),
            ul(this._config.endCallback);
        }
        _move(e) {
          this._deltaX =
            e.touches && e.touches.length > 1
              ? 0
              : e.touches[0].clientX - this._deltaX;
        }
        _handleSwipe() {
          const e = Math.abs(this._deltaX);
          if (e <= 40) return;
          const t = e / this._deltaX;
          (this._deltaX = 0),
            t &&
              ul(
                t > 0 ? this._config.rightCallback : this._config.leftCallback
              );
        }
        _initEvents() {
          this._supportPointerEvents
            ? (Sl.on(this._element, "pointerdown.bs.swipe", (e) =>
                this._start(e)
              ),
              Sl.on(this._element, "pointerup.bs.swipe", (e) => this._end(e)),
              this._element.classList.add("pointer-event"))
            : (Sl.on(this._element, "touchstart.bs.swipe", (e) =>
                this._start(e)
              ),
              Sl.on(this._element, "touchmove.bs.swipe", (e) => this._move(e)),
              Sl.on(this._element, "touchend.bs.swipe", (e) => this._end(e)));
        }
        _eventIsPointerPenTouch(e) {
          return (
            this._supportPointerEvents &&
            ("pen" === e.pointerType || "touch" === e.pointerType)
          );
        }
        static isSupported() {
          return (
            "ontouchstart" in document.documentElement ||
            navigator.maxTouchPoints > 0
          );
        }
      }
      const Vl = "next",
        ql = "prev",
        Ql = "left",
        Kl = "right",
        Zl = "slid.bs.carousel",
        Gl = "carousel",
        Yl = "active",
        Xl = { ArrowLeft: Kl, ArrowRight: Ql },
        Jl = {
          interval: 5e3,
          keyboard: !0,
          pause: "hover",
          ride: !1,
          touch: !0,
          wrap: !0,
        },
        es = {
          interval: "(number|boolean)",
          keyboard: "boolean",
          pause: "(string|boolean)",
          ride: "(boolean|string)",
          touch: "boolean",
          wrap: "boolean",
        };
      class ts extends Rl {
        constructor(e, t) {
          super(e, t),
            (this._interval = null),
            (this._activeElement = null),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this._swipeHelper = null),
            (this._indicatorsElement = Bl.findOne(
              ".carousel-indicators",
              this._element
            )),
            this._addEventListeners(),
            this._config.ride === Gl && this.cycle();
        }
        static get Default() {
          return Jl;
        }
        static get DefaultType() {
          return es;
        }
        static get NAME() {
          return "carousel";
        }
        next() {
          this._slide(Vl);
        }
        nextWhenVisible() {
          !document.hidden && tl(this._element) && this.next();
        }
        prev() {
          this._slide(ql);
        }
        pause() {
          this._isSliding && Xi(this._element), this._clearInterval();
        }
        cycle() {
          this._clearInterval(),
            this._updateInterval(),
            (this._interval = setInterval(
              () => this.nextWhenVisible(),
              this._config.interval
            ));
        }
        _maybeEnableCycle() {
          this._config.ride &&
            (this._isSliding
              ? Sl.one(this._element, Zl, () => this.cycle())
              : this.cycle());
        }
        to(e) {
          const t = this._getItems();
          if (e > t.length - 1 || e < 0) return;
          if (this._isSliding)
            return void Sl.one(this._element, Zl, () => this.to(e));
          const n = this._getItemIndex(this._getActive());
          if (n === e) return;
          const r = e > n ? Vl : ql;
          this._slide(r, t[e]);
        }
        dispose() {
          this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
        }
        _configAfterMerge(e) {
          return (e.defaultInterval = e.interval), e;
        }
        _addEventListeners() {
          this._config.keyboard &&
            Sl.on(this._element, "keydown.bs.carousel", (e) =>
              this._keydown(e)
            ),
            "hover" === this._config.pause &&
              (Sl.on(this._element, "mouseenter.bs.carousel", () =>
                this.pause()
              ),
              Sl.on(this._element, "mouseleave.bs.carousel", () =>
                this._maybeEnableCycle()
              )),
            this._config.touch &&
              Wl.isSupported() &&
              this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
          for (const e of Bl.find(".carousel-item img", this._element))
            Sl.on(e, "dragstart.bs.carousel", (e) => e.preventDefault());
          const e = {
            leftCallback: () => this._slide(this._directionToOrder(Ql)),
            rightCallback: () => this._slide(this._directionToOrder(Kl)),
            endCallback: () => {
              "hover" === this._config.pause &&
                (this.pause(),
                this.touchTimeout && clearTimeout(this.touchTimeout),
                (this.touchTimeout = setTimeout(
                  () => this._maybeEnableCycle(),
                  500 + this._config.interval
                )));
            },
          };
          this._swipeHelper = new Wl(this._element, e);
        }
        _keydown(e) {
          if (/input|textarea/i.test(e.target.tagName)) return;
          const t = Xl[e.key];
          t && (e.preventDefault(), this._slide(this._directionToOrder(t)));
        }
        _getItemIndex(e) {
          return this._getItems().indexOf(e);
        }
        _setActiveIndicatorElement(e) {
          if (!this._indicatorsElement) return;
          const t = Bl.findOne(".active", this._indicatorsElement);
          t.classList.remove(Yl), t.removeAttribute("aria-current");
          const n = Bl.findOne(
            `[data-bs-slide-to="${e}"]`,
            this._indicatorsElement
          );
          n && (n.classList.add(Yl), n.setAttribute("aria-current", "true"));
        }
        _updateInterval() {
          const e = this._activeElement || this._getActive();
          if (!e) return;
          const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
          this._config.interval = t || this._config.defaultInterval;
        }
        _slide(e, t = null) {
          if (this._isSliding) return;
          const n = this._getActive(),
            r = e === Vl,
            a = t || fl(this._getItems(), n, r, this._config.wrap);
          if (a === n) return;
          const o = this._getItemIndex(a),
            i = (t) =>
              Sl.trigger(this._element, t, {
                relatedTarget: a,
                direction: this._orderToDirection(e),
                from: this._getItemIndex(n),
                to: o,
              });
          if (i("slide.bs.carousel").defaultPrevented) return;
          if (!n || !a) return;
          const l = Boolean(this._interval);
          this.pause(),
            (this._isSliding = !0),
            this._setActiveIndicatorElement(o),
            (this._activeElement = a);
          const s = r ? "carousel-item-start" : "carousel-item-end",
            c = r ? "carousel-item-next" : "carousel-item-prev";
          a.classList.add(c),
            ol(a),
            n.classList.add(s),
            a.classList.add(s),
            this._queueCallback(
              () => {
                a.classList.remove(s, c),
                  a.classList.add(Yl),
                  n.classList.remove(Yl, c, s),
                  (this._isSliding = !1),
                  i(Zl);
              },
              n,
              this._isAnimated()
            ),
            l && this.cycle();
        }
        _isAnimated() {
          return this._element.classList.contains("slide");
        }
        _getActive() {
          return Bl.findOne(".active.carousel-item", this._element);
        }
        _getItems() {
          return Bl.find(".carousel-item", this._element);
        }
        _clearInterval() {
          this._interval &&
            (clearInterval(this._interval), (this._interval = null));
        }
        _directionToOrder(e) {
          return sl() ? (e === Ql ? ql : Vl) : e === Ql ? Vl : ql;
        }
        _orderToDirection(e) {
          return sl() ? (e === ql ? Ql : Kl) : e === ql ? Kl : Ql;
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = ts.getOrCreateInstance(this, e);
            if ("number" != typeof e) {
              if ("string" == typeof e) {
                if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                  throw new TypeError(`No method named "${e}"`);
                t[e]();
              }
            } else t.to(e);
          });
        }
      }
      Sl.on(
        document,
        "click.bs.carousel.data-api",
        "[data-bs-slide], [data-bs-slide-to]",
        function (e) {
          const t = Yi(this);
          if (!t || !t.classList.contains(Gl)) return;
          e.preventDefault();
          const n = ts.getOrCreateInstance(t),
            r = this.getAttribute("data-bs-slide-to");
          return r
            ? (n.to(r), void n._maybeEnableCycle())
            : "next" === Ll.getDataAttribute(this, "slide")
            ? (n.next(), void n._maybeEnableCycle())
            : (n.prev(), void n._maybeEnableCycle());
        }
      ),
        Sl.on(window, "load.bs.carousel.data-api", () => {
          const e = Bl.find('[data-bs-ride="carousel"]');
          for (const t of e) ts.getOrCreateInstance(t);
        }),
        cl(ts);
      const ns = "show",
        rs = "collapse",
        as = "collapsing",
        os = '[data-bs-toggle="collapse"]',
        is = { parent: null, toggle: !0 },
        ls = { parent: "(null|element)", toggle: "boolean" };
      class ss extends Rl {
        constructor(e, t) {
          super(e, t), (this._isTransitioning = !1), (this._triggerArray = []);
          const n = Bl.find(os);
          for (const e of n) {
            const t = Gi(e),
              n = Bl.find(t).filter((e) => e === this._element);
            null !== t && n.length && this._triggerArray.push(e);
          }
          this._initializeChildren(),
            this._config.parent ||
              this._addAriaAndCollapsedClass(
                this._triggerArray,
                this._isShown()
              ),
            this._config.toggle && this.toggle();
        }
        static get Default() {
          return is;
        }
        static get DefaultType() {
          return ls;
        }
        static get NAME() {
          return "collapse";
        }
        toggle() {
          this._isShown() ? this.hide() : this.show();
        }
        show() {
          if (this._isTransitioning || this._isShown()) return;
          let e = [];
          if (
            (this._config.parent &&
              (e = this._getFirstLevelChildren(
                ".collapse.show, .collapse.collapsing"
              )
                .filter((e) => e !== this._element)
                .map((e) => ss.getOrCreateInstance(e, { toggle: !1 }))),
            e.length && e[0]._isTransitioning)
          )
            return;
          if (Sl.trigger(this._element, "show.bs.collapse").defaultPrevented)
            return;
          for (const t of e) t.hide();
          const t = this._getDimension();
          this._element.classList.remove(rs),
            this._element.classList.add(as),
            (this._element.style[t] = 0),
            this._addAriaAndCollapsedClass(this._triggerArray, !0),
            (this._isTransitioning = !0);
          const n = `scroll${t[0].toUpperCase() + t.slice(1)}`;
          this._queueCallback(
            () => {
              (this._isTransitioning = !1),
                this._element.classList.remove(as),
                this._element.classList.add(rs, ns),
                (this._element.style[t] = ""),
                Sl.trigger(this._element, "shown.bs.collapse");
            },
            this._element,
            !0
          ),
            (this._element.style[t] = `${this._element[n]}px`);
        }
        hide() {
          if (this._isTransitioning || !this._isShown()) return;
          if (Sl.trigger(this._element, "hide.bs.collapse").defaultPrevented)
            return;
          const e = this._getDimension();
          (this._element.style[e] = `${
            this._element.getBoundingClientRect()[e]
          }px`),
            ol(this._element),
            this._element.classList.add(as),
            this._element.classList.remove(rs, ns);
          for (const e of this._triggerArray) {
            const t = Yi(e);
            t && !this._isShown(t) && this._addAriaAndCollapsedClass([e], !1);
          }
          (this._isTransitioning = !0),
            (this._element.style[e] = ""),
            this._queueCallback(
              () => {
                (this._isTransitioning = !1),
                  this._element.classList.remove(as),
                  this._element.classList.add(rs),
                  Sl.trigger(this._element, "hidden.bs.collapse");
              },
              this._element,
              !0
            );
        }
        _isShown(e = this._element) {
          return e.classList.contains(ns);
        }
        _configAfterMerge(e) {
          return (e.toggle = Boolean(e.toggle)), (e.parent = el(e.parent)), e;
        }
        _getDimension() {
          return this._element.classList.contains("collapse-horizontal")
            ? "width"
            : "height";
        }
        _initializeChildren() {
          if (!this._config.parent) return;
          const e = this._getFirstLevelChildren(os);
          for (const t of e) {
            const e = Yi(t);
            e && this._addAriaAndCollapsedClass([t], this._isShown(e));
          }
        }
        _getFirstLevelChildren(e) {
          const t = Bl.find(":scope .collapse .collapse", this._config.parent);
          return Bl.find(e, this._config.parent).filter((e) => !t.includes(e));
        }
        _addAriaAndCollapsedClass(e, t) {
          if (e.length)
            for (const n of e)
              n.classList.toggle("collapsed", !t),
                n.setAttribute("aria-expanded", t);
        }
        static jQueryInterface(e) {
          const t = {};
          return (
            "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1),
            this.each(function () {
              const n = ss.getOrCreateInstance(this, t);
              if ("string" == typeof e) {
                if (void 0 === n[e])
                  throw new TypeError(`No method named "${e}"`);
                n[e]();
              }
            })
          );
        }
      }
      Sl.on(document, "click.bs.collapse.data-api", os, function (e) {
        ("A" === e.target.tagName ||
          (e.delegateTarget && "A" === e.delegateTarget.tagName)) &&
          e.preventDefault();
        const t = Gi(this),
          n = Bl.find(t);
        for (const e of n) ss.getOrCreateInstance(e, { toggle: !1 }).toggle();
      }),
        cl(ss);
      const cs = "dropdown",
        us = "ArrowUp",
        ds = "ArrowDown",
        fs = "click.bs.dropdown.data-api",
        ps = "keydown.bs.dropdown.data-api",
        ms = "show",
        hs = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
        gs = `${hs}.show`,
        bs = ".dropdown-menu",
        vs = sl() ? "top-end" : "top-start",
        ys = sl() ? "top-start" : "top-end",
        Es = sl() ? "bottom-end" : "bottom-start",
        ws = sl() ? "bottom-start" : "bottom-end",
        xs = sl() ? "left-start" : "right-start",
        _s = sl() ? "right-start" : "left-start",
        ks = {
          autoClose: !0,
          boundary: "clippingParents",
          display: "dynamic",
          offset: [0, 2],
          popperConfig: null,
          reference: "toggle",
        },
        Ns = {
          autoClose: "(boolean|string)",
          boundary: "(string|element)",
          display: "string",
          offset: "(array|string|function)",
          popperConfig: "(null|object|function)",
          reference: "(string|element|object)",
        };
      class Cs extends Rl {
        constructor(e, t) {
          super(e, t),
            (this._popper = null),
            (this._parent = this._element.parentNode),
            (this._menu =
              Bl.next(this._element, bs)[0] ||
              Bl.prev(this._element, bs)[0] ||
              Bl.findOne(bs, this._parent)),
            (this._inNavbar = this._detectNavbar());
        }
        static get Default() {
          return ks;
        }
        static get DefaultType() {
          return Ns;
        }
        static get NAME() {
          return cs;
        }
        toggle() {
          return this._isShown() ? this.hide() : this.show();
        }
        show() {
          if (nl(this._element) || this._isShown()) return;
          const e = { relatedTarget: this._element };
          if (
            !Sl.trigger(this._element, "show.bs.dropdown", e).defaultPrevented
          ) {
            if (
              (this._createPopper(),
              "ontouchstart" in document.documentElement &&
                !this._parent.closest(".navbar-nav"))
            )
              for (const e of [].concat(...document.body.children))
                Sl.on(e, "mouseover", al);
            this._element.focus(),
              this._element.setAttribute("aria-expanded", !0),
              this._menu.classList.add(ms),
              this._element.classList.add(ms),
              Sl.trigger(this._element, "shown.bs.dropdown", e);
          }
        }
        hide() {
          if (nl(this._element) || !this._isShown()) return;
          const e = { relatedTarget: this._element };
          this._completeHide(e);
        }
        dispose() {
          this._popper && this._popper.destroy(), super.dispose();
        }
        update() {
          (this._inNavbar = this._detectNavbar()),
            this._popper && this._popper.update();
        }
        _completeHide(e) {
          if (
            !Sl.trigger(this._element, "hide.bs.dropdown", e).defaultPrevented
          ) {
            if ("ontouchstart" in document.documentElement)
              for (const e of [].concat(...document.body.children))
                Sl.off(e, "mouseover", al);
            this._popper && this._popper.destroy(),
              this._menu.classList.remove(ms),
              this._element.classList.remove(ms),
              this._element.setAttribute("aria-expanded", "false"),
              Ll.removeDataAttribute(this._menu, "popper"),
              Sl.trigger(this._element, "hidden.bs.dropdown", e);
          }
        }
        _getConfig(e) {
          if (
            "object" == typeof (e = super._getConfig(e)).reference &&
            !Ji(e.reference) &&
            "function" != typeof e.reference.getBoundingClientRect
          )
            throw new TypeError(
              `${cs.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
            );
          return e;
        }
        _createPopper() {
          if (void 0 === e)
            throw new TypeError(
              "Bootstrap's dropdowns require Popper (https://popper.js.org)"
            );
          let t = this._element;
          "parent" === this._config.reference
            ? (t = this._parent)
            : Ji(this._config.reference)
            ? (t = el(this._config.reference))
            : "object" == typeof this._config.reference &&
              (t = this._config.reference);
          const n = this._getPopperConfig();
          this._popper = qi(t, this._menu, n);
        }
        _isShown() {
          return this._menu.classList.contains(ms);
        }
        _getPlacement() {
          const e = this._parent;
          if (e.classList.contains("dropend")) return xs;
          if (e.classList.contains("dropstart")) return _s;
          if (e.classList.contains("dropup-center")) return "top";
          if (e.classList.contains("dropdown-center")) return "bottom";
          const t =
            "end" ===
            getComputedStyle(this._menu)
              .getPropertyValue("--bs-position")
              .trim();
          return e.classList.contains("dropup") ? (t ? ys : vs) : t ? ws : Es;
        }
        _detectNavbar() {
          return null !== this._element.closest(".navbar");
        }
        _getOffset() {
          const { offset: e } = this._config;
          return "string" == typeof e
            ? e.split(",").map((e) => Number.parseInt(e, 10))
            : "function" == typeof e
            ? (t) => e(t, this._element)
            : e;
        }
        _getPopperConfig() {
          const e = {
            placement: this._getPlacement(),
            modifiers: [
              {
                name: "preventOverflow",
                options: { boundary: this._config.boundary },
              },
              { name: "offset", options: { offset: this._getOffset() } },
            ],
          };
          return (
            (this._inNavbar || "static" === this._config.display) &&
              (Ll.setDataAttribute(this._menu, "popper", "static"),
              (e.modifiers = [{ name: "applyStyles", enabled: !1 }])),
            {
              ...e,
              ...("function" == typeof this._config.popperConfig
                ? this._config.popperConfig(e)
                : this._config.popperConfig),
            }
          );
        }
        _selectMenuItem({ key: e, target: t }) {
          const n = Bl.find(
            ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
            this._menu
          ).filter((e) => tl(e));
          n.length && fl(n, t, e === ds, !n.includes(t)).focus();
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = Cs.getOrCreateInstance(this, e);
            if ("string" == typeof e) {
              if (void 0 === t[e])
                throw new TypeError(`No method named "${e}"`);
              t[e]();
            }
          });
        }
        static clearMenus(e) {
          if (2 === e.button || ("keyup" === e.type && "Tab" !== e.key)) return;
          const t = Bl.find(gs);
          for (const n of t) {
            const t = Cs.getInstance(n);
            if (!t || !1 === t._config.autoClose) continue;
            const r = e.composedPath(),
              a = r.includes(t._menu);
            if (
              r.includes(t._element) ||
              ("inside" === t._config.autoClose && !a) ||
              ("outside" === t._config.autoClose && a)
            )
              continue;
            if (
              t._menu.contains(e.target) &&
              (("keyup" === e.type && "Tab" === e.key) ||
                /input|select|option|textarea|form/i.test(e.target.tagName))
            )
              continue;
            const o = { relatedTarget: t._element };
            "click" === e.type && (o.clickEvent = e), t._completeHide(o);
          }
        }
        static dataApiKeydownHandler(e) {
          const t = /input|textarea/i.test(e.target.tagName),
            n = "Escape" === e.key,
            r = [us, ds].includes(e.key);
          if (!r && !n) return;
          if (t && !n) return;
          e.preventDefault();
          const a = this.matches(hs)
              ? this
              : Bl.prev(this, hs)[0] ||
                Bl.next(this, hs)[0] ||
                Bl.findOne(hs, e.delegateTarget.parentNode),
            o = Cs.getOrCreateInstance(a);
          if (r)
            return e.stopPropagation(), o.show(), void o._selectMenuItem(e);
          o._isShown() && (e.stopPropagation(), o.hide(), a.focus());
        }
      }
      Sl.on(document, ps, hs, Cs.dataApiKeydownHandler),
        Sl.on(document, ps, bs, Cs.dataApiKeydownHandler),
        Sl.on(document, fs, Cs.clearMenus),
        Sl.on(document, "keyup.bs.dropdown.data-api", Cs.clearMenus),
        Sl.on(document, fs, hs, function (e) {
          e.preventDefault(), Cs.getOrCreateInstance(this).toggle();
        }),
        cl(Cs);
      const Ts = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        Ss = ".sticky-top",
        Os = "padding-right",
        Ps = "margin-right";
      class As {
        constructor() {
          this._element = document.body;
        }
        getWidth() {
          const e = document.documentElement.clientWidth;
          return Math.abs(window.innerWidth - e);
        }
        hide() {
          const e = this.getWidth();
          this._disableOverFlow(),
            this._setElementAttributes(this._element, Os, (t) => t + e),
            this._setElementAttributes(Ts, Os, (t) => t + e),
            this._setElementAttributes(Ss, Ps, (t) => t - e);
        }
        reset() {
          this._resetElementAttributes(this._element, "overflow"),
            this._resetElementAttributes(this._element, Os),
            this._resetElementAttributes(Ts, Os),
            this._resetElementAttributes(Ss, Ps);
        }
        isOverflowing() {
          return this.getWidth() > 0;
        }
        _disableOverFlow() {
          this._saveInitialAttribute(this._element, "overflow"),
            (this._element.style.overflow = "hidden");
        }
        _setElementAttributes(e, t, n) {
          const r = this.getWidth();
          this._applyManipulationCallback(e, (e) => {
            if (e !== this._element && window.innerWidth > e.clientWidth + r)
              return;
            this._saveInitialAttribute(e, t);
            const a = window.getComputedStyle(e).getPropertyValue(t);
            e.style.setProperty(t, `${n(Number.parseFloat(a))}px`);
          });
        }
        _saveInitialAttribute(e, t) {
          const n = e.style.getPropertyValue(t);
          n && Ll.setDataAttribute(e, t, n);
        }
        _resetElementAttributes(e, t) {
          this._applyManipulationCallback(e, (e) => {
            const n = Ll.getDataAttribute(e, t);
            null !== n
              ? (Ll.removeDataAttribute(e, t), e.style.setProperty(t, n))
              : e.style.removeProperty(t);
          });
        }
        _applyManipulationCallback(e, t) {
          if (Ji(e)) t(e);
          else for (const n of Bl.find(e, this._element)) t(n);
        }
      }
      const js = "show",
        Is = "mousedown.bs.backdrop",
        Ls = {
          className: "modal-backdrop",
          clickCallback: null,
          isAnimated: !1,
          isVisible: !0,
          rootElement: "body",
        },
        Ds = {
          className: "string",
          clickCallback: "(function|null)",
          isAnimated: "boolean",
          isVisible: "boolean",
          rootElement: "(element|string)",
        };
      class Rs extends Dl {
        constructor(e) {
          super(),
            (this._config = this._getConfig(e)),
            (this._isAppended = !1),
            (this._element = null);
        }
        static get Default() {
          return Ls;
        }
        static get DefaultType() {
          return Ds;
        }
        static get NAME() {
          return "backdrop";
        }
        show(e) {
          if (!this._config.isVisible) return void ul(e);
          this._append();
          const t = this._getElement();
          this._config.isAnimated && ol(t),
            t.classList.add(js),
            this._emulateAnimation(() => {
              ul(e);
            });
        }
        hide(e) {
          this._config.isVisible
            ? (this._getElement().classList.remove(js),
              this._emulateAnimation(() => {
                this.dispose(), ul(e);
              }))
            : ul(e);
        }
        dispose() {
          this._isAppended &&
            (Sl.off(this._element, Is),
            this._element.remove(),
            (this._isAppended = !1));
        }
        _getElement() {
          if (!this._element) {
            const e = document.createElement("div");
            (e.className = this._config.className),
              this._config.isAnimated && e.classList.add("fade"),
              (this._element = e);
          }
          return this._element;
        }
        _configAfterMerge(e) {
          return (e.rootElement = el(e.rootElement)), e;
        }
        _append() {
          if (this._isAppended) return;
          const e = this._getElement();
          this._config.rootElement.append(e),
            Sl.on(e, Is, () => {
              ul(this._config.clickCallback);
            }),
            (this._isAppended = !0);
        }
        _emulateAnimation(e) {
          dl(e, this._getElement(), this._config.isAnimated);
        }
      }
      const Ms = ".bs.focustrap",
        Fs = "backward",
        zs = { autofocus: !0, trapElement: null },
        $s = { autofocus: "boolean", trapElement: "element" };
      class Bs extends Dl {
        constructor(e) {
          super(),
            (this._config = this._getConfig(e)),
            (this._isActive = !1),
            (this._lastTabNavDirection = null);
        }
        static get Default() {
          return zs;
        }
        static get DefaultType() {
          return $s;
        }
        static get NAME() {
          return "focustrap";
        }
        activate() {
          this._isActive ||
            (this._config.autofocus && this._config.trapElement.focus(),
            Sl.off(document, Ms),
            Sl.on(document, "focusin.bs.focustrap", (e) =>
              this._handleFocusin(e)
            ),
            Sl.on(document, "keydown.tab.bs.focustrap", (e) =>
              this._handleKeydown(e)
            ),
            (this._isActive = !0));
        }
        deactivate() {
          this._isActive && ((this._isActive = !1), Sl.off(document, Ms));
        }
        _handleFocusin(e) {
          const { trapElement: t } = this._config;
          if (e.target === document || e.target === t || t.contains(e.target))
            return;
          const n = Bl.focusableChildren(t);
          0 === n.length
            ? t.focus()
            : this._lastTabNavDirection === Fs
            ? n[n.length - 1].focus()
            : n[0].focus();
        }
        _handleKeydown(e) {
          "Tab" === e.key &&
            (this._lastTabNavDirection = e.shiftKey ? Fs : "forward");
        }
      }
      const Us = "hidden.bs.modal",
        Hs = "show.bs.modal",
        Ws = "modal-open",
        Vs = "show",
        qs = "modal-static",
        Qs = { backdrop: !0, focus: !0, keyboard: !0 },
        Ks = {
          backdrop: "(boolean|string)",
          focus: "boolean",
          keyboard: "boolean",
        };
      class Zs extends Rl {
        constructor(e, t) {
          super(e, t),
            (this._dialog = Bl.findOne(".modal-dialog", this._element)),
            (this._backdrop = this._initializeBackDrop()),
            (this._focustrap = this._initializeFocusTrap()),
            (this._isShown = !1),
            (this._isTransitioning = !1),
            (this._scrollBar = new As()),
            this._addEventListeners();
        }
        static get Default() {
          return Qs;
        }
        static get DefaultType() {
          return Ks;
        }
        static get NAME() {
          return "modal";
        }
        toggle(e) {
          return this._isShown ? this.hide() : this.show(e);
        }
        show(e) {
          this._isShown ||
            this._isTransitioning ||
            Sl.trigger(this._element, Hs, { relatedTarget: e })
              .defaultPrevented ||
            ((this._isShown = !0),
            (this._isTransitioning = !0),
            this._scrollBar.hide(),
            document.body.classList.add(Ws),
            this._adjustDialog(),
            this._backdrop.show(() => this._showElement(e)));
        }
        hide() {
          this._isShown &&
            !this._isTransitioning &&
            (Sl.trigger(this._element, "hide.bs.modal").defaultPrevented ||
              ((this._isShown = !1),
              (this._isTransitioning = !0),
              this._focustrap.deactivate(),
              this._element.classList.remove(Vs),
              this._queueCallback(
                () => this._hideModal(),
                this._element,
                this._isAnimated()
              )));
        }
        dispose() {
          for (const e of [window, this._dialog]) Sl.off(e, ".bs.modal");
          this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose();
        }
        handleUpdate() {
          this._adjustDialog();
        }
        _initializeBackDrop() {
          return new Rs({
            isVisible: Boolean(this._config.backdrop),
            isAnimated: this._isAnimated(),
          });
        }
        _initializeFocusTrap() {
          return new Bs({ trapElement: this._element });
        }
        _showElement(e) {
          document.body.contains(this._element) ||
            document.body.append(this._element),
            (this._element.style.display = "block"),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            (this._element.scrollTop = 0);
          const t = Bl.findOne(".modal-body", this._dialog);
          t && (t.scrollTop = 0),
            ol(this._element),
            this._element.classList.add(Vs),
            this._queueCallback(
              () => {
                this._config.focus && this._focustrap.activate(),
                  (this._isTransitioning = !1),
                  Sl.trigger(this._element, "shown.bs.modal", {
                    relatedTarget: e,
                  });
              },
              this._dialog,
              this._isAnimated()
            );
        }
        _addEventListeners() {
          Sl.on(this._element, "keydown.dismiss.bs.modal", (e) => {
            if ("Escape" === e.key)
              return this._config.keyboard
                ? (e.preventDefault(), void this.hide())
                : void this._triggerBackdropTransition();
          }),
            Sl.on(window, "resize.bs.modal", () => {
              this._isShown && !this._isTransitioning && this._adjustDialog();
            }),
            Sl.on(this._element, "mousedown.dismiss.bs.modal", (e) => {
              Sl.one(this._element, "click.dismiss.bs.modal", (t) => {
                this._element === e.target &&
                  this._element === t.target &&
                  ("static" !== this._config.backdrop
                    ? this._config.backdrop && this.hide()
                    : this._triggerBackdropTransition());
              });
            });
        }
        _hideModal() {
          (this._element.style.display = "none"),
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            (this._isTransitioning = !1),
            this._backdrop.hide(() => {
              document.body.classList.remove(Ws),
                this._resetAdjustments(),
                this._scrollBar.reset(),
                Sl.trigger(this._element, Us);
            });
        }
        _isAnimated() {
          return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
          if (
            Sl.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented
          )
            return;
          const e =
              this._element.scrollHeight >
              document.documentElement.clientHeight,
            t = this._element.style.overflowY;
          "hidden" === t ||
            this._element.classList.contains(qs) ||
            (e || (this._element.style.overflowY = "hidden"),
            this._element.classList.add(qs),
            this._queueCallback(() => {
              this._element.classList.remove(qs),
                this._queueCallback(() => {
                  this._element.style.overflowY = t;
                }, this._dialog);
            }, this._dialog),
            this._element.focus());
        }
        _adjustDialog() {
          const e =
              this._element.scrollHeight >
              document.documentElement.clientHeight,
            t = this._scrollBar.getWidth(),
            n = t > 0;
          if (n && !e) {
            const e = sl() ? "paddingLeft" : "paddingRight";
            this._element.style[e] = `${t}px`;
          }
          if (!n && e) {
            const e = sl() ? "paddingRight" : "paddingLeft";
            this._element.style[e] = `${t}px`;
          }
        }
        _resetAdjustments() {
          (this._element.style.paddingLeft = ""),
            (this._element.style.paddingRight = "");
        }
        static jQueryInterface(e, t) {
          return this.each(function () {
            const n = Zs.getOrCreateInstance(this, e);
            if ("string" == typeof e) {
              if (void 0 === n[e])
                throw new TypeError(`No method named "${e}"`);
              n[e](t);
            }
          });
        }
      }
      Sl.on(
        document,
        "click.bs.modal.data-api",
        '[data-bs-toggle="modal"]',
        function (e) {
          const t = Yi(this);
          ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
            Sl.one(t, Hs, (e) => {
              e.defaultPrevented ||
                Sl.one(t, Us, () => {
                  tl(this) && this.focus();
                });
            });
          const n = Bl.findOne(".modal.show");
          n && Zs.getInstance(n).hide(), Zs.getOrCreateInstance(t).toggle(this);
        }
      ),
        Ml(Zs),
        cl(Zs);
      const Gs = "show",
        Ys = "showing",
        Xs = "hiding",
        Js = ".offcanvas.show",
        ec = "hidePrevented.bs.offcanvas",
        tc = "hidden.bs.offcanvas",
        nc = { backdrop: !0, keyboard: !0, scroll: !1 },
        rc = {
          backdrop: "(boolean|string)",
          keyboard: "boolean",
          scroll: "boolean",
        };
      class ac extends Rl {
        constructor(e, t) {
          super(e, t),
            (this._isShown = !1),
            (this._backdrop = this._initializeBackDrop()),
            (this._focustrap = this._initializeFocusTrap()),
            this._addEventListeners();
        }
        static get Default() {
          return nc;
        }
        static get DefaultType() {
          return rc;
        }
        static get NAME() {
          return "offcanvas";
        }
        toggle(e) {
          return this._isShown ? this.hide() : this.show(e);
        }
        show(e) {
          this._isShown ||
            Sl.trigger(this._element, "show.bs.offcanvas", { relatedTarget: e })
              .defaultPrevented ||
            ((this._isShown = !0),
            this._backdrop.show(),
            this._config.scroll || new As().hide(),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.classList.add(Ys),
            this._queueCallback(
              () => {
                (this._config.scroll && !this._config.backdrop) ||
                  this._focustrap.activate(),
                  this._element.classList.add(Gs),
                  this._element.classList.remove(Ys),
                  Sl.trigger(this._element, "shown.bs.offcanvas", {
                    relatedTarget: e,
                  });
              },
              this._element,
              !0
            ));
        }
        hide() {
          this._isShown &&
            (Sl.trigger(this._element, "hide.bs.offcanvas").defaultPrevented ||
              (this._focustrap.deactivate(),
              this._element.blur(),
              (this._isShown = !1),
              this._element.classList.add(Xs),
              this._backdrop.hide(),
              this._queueCallback(
                () => {
                  this._element.classList.remove(Gs, Xs),
                    this._element.removeAttribute("aria-modal"),
                    this._element.removeAttribute("role"),
                    this._config.scroll || new As().reset(),
                    Sl.trigger(this._element, tc);
                },
                this._element,
                !0
              )));
        }
        dispose() {
          this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose();
        }
        _initializeBackDrop() {
          const e = Boolean(this._config.backdrop);
          return new Rs({
            className: "offcanvas-backdrop",
            isVisible: e,
            isAnimated: !0,
            rootElement: this._element.parentNode,
            clickCallback: e
              ? () => {
                  "static" !== this._config.backdrop
                    ? this.hide()
                    : Sl.trigger(this._element, ec);
                }
              : null,
          });
        }
        _initializeFocusTrap() {
          return new Bs({ trapElement: this._element });
        }
        _addEventListeners() {
          Sl.on(this._element, "keydown.dismiss.bs.offcanvas", (e) => {
            "Escape" === e.key &&
              (this._config.keyboard
                ? this.hide()
                : Sl.trigger(this._element, ec));
          });
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = ac.getOrCreateInstance(this, e);
            if ("string" == typeof e) {
              if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                throw new TypeError(`No method named "${e}"`);
              t[e](this);
            }
          });
        }
      }
      Sl.on(
        document,
        "click.bs.offcanvas.data-api",
        '[data-bs-toggle="offcanvas"]',
        function (e) {
          const t = Yi(this);
          if (
            (["A", "AREA"].includes(this.tagName) && e.preventDefault(),
            nl(this))
          )
            return;
          Sl.one(t, tc, () => {
            tl(this) && this.focus();
          });
          const n = Bl.findOne(Js);
          n && n !== t && ac.getInstance(n).hide(),
            ac.getOrCreateInstance(t).toggle(this);
        }
      ),
        Sl.on(window, "load.bs.offcanvas.data-api", () => {
          for (const e of Bl.find(Js)) ac.getOrCreateInstance(e).show();
        }),
        Sl.on(window, "resize.bs.offcanvas", () => {
          for (const e of Bl.find(
            "[aria-modal][class*=show][class*=offcanvas-]"
          ))
            "fixed" !== getComputedStyle(e).position &&
              ac.getOrCreateInstance(e).hide();
        }),
        Ml(ac),
        cl(ac);
      const oc = new Set([
          "background",
          "cite",
          "href",
          "itemtype",
          "longdesc",
          "poster",
          "src",
          "xlink:href",
        ]),
        ic = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
        lc =
          /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        sc = (e, t) => {
          const n = e.nodeName.toLowerCase();
          return t.includes(n)
            ? !oc.has(n) ||
                Boolean(ic.test(e.nodeValue) || lc.test(e.nodeValue))
            : t.filter((e) => e instanceof RegExp).some((e) => e.test(n));
        },
        cc = {
          "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
          a: ["target", "href", "title", "rel"],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ["src", "srcset", "alt", "title", "width", "height"],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: [],
        },
        uc = {
          allowList: cc,
          content: {},
          extraClass: "",
          html: !1,
          sanitize: !0,
          sanitizeFn: null,
          template: "<div></div>",
        },
        dc = {
          allowList: "object",
          content: "object",
          extraClass: "(string|function)",
          html: "boolean",
          sanitize: "boolean",
          sanitizeFn: "(null|function)",
          template: "string",
        },
        fc = {
          entry: "(string|element|function|null)",
          selector: "(string|element)",
        };
      class pc extends Dl {
        constructor(e) {
          super(), (this._config = this._getConfig(e));
        }
        static get Default() {
          return uc;
        }
        static get DefaultType() {
          return dc;
        }
        static get NAME() {
          return "TemplateFactory";
        }
        getContent() {
          return Object.values(this._config.content)
            .map((e) => this._resolvePossibleFunction(e))
            .filter(Boolean);
        }
        hasContent() {
          return this.getContent().length > 0;
        }
        changeContent(e) {
          return (
            this._checkContent(e),
            (this._config.content = { ...this._config.content, ...e }),
            this
          );
        }
        toHtml() {
          const e = document.createElement("div");
          e.innerHTML = this._maybeSanitize(this._config.template);
          for (const [t, n] of Object.entries(this._config.content))
            this._setContent(e, n, t);
          const t = e.children[0],
            n = this._resolvePossibleFunction(this._config.extraClass);
          return n && t.classList.add(...n.split(" ")), t;
        }
        _typeCheckConfig(e) {
          super._typeCheckConfig(e), this._checkContent(e.content);
        }
        _checkContent(e) {
          for (const [t, n] of Object.entries(e))
            super._typeCheckConfig({ selector: t, entry: n }, fc);
        }
        _setContent(e, t, n) {
          const r = Bl.findOne(n, e);
          r &&
            ((t = this._resolvePossibleFunction(t))
              ? Ji(t)
                ? this._putElementInTemplate(el(t), r)
                : this._config.html
                ? (r.innerHTML = this._maybeSanitize(t))
                : (r.textContent = t)
              : r.remove());
        }
        _maybeSanitize(e) {
          return this._config.sanitize
            ? (function (e, t, n) {
                if (!e.length) return e;
                if (n && "function" == typeof n) return n(e);
                const r = new window.DOMParser().parseFromString(
                    e,
                    "text/html"
                  ),
                  a = [].concat(...r.body.querySelectorAll("*"));
                for (const e of a) {
                  const n = e.nodeName.toLowerCase();
                  if (!Object.keys(t).includes(n)) {
                    e.remove();
                    continue;
                  }
                  const r = [].concat(...e.attributes),
                    a = [].concat(t["*"] || [], t[n] || []);
                  for (const t of r) sc(t, a) || e.removeAttribute(t.nodeName);
                }
                return r.body.innerHTML;
              })(e, this._config.allowList, this._config.sanitizeFn)
            : e;
        }
        _resolvePossibleFunction(e) {
          return "function" == typeof e ? e(this) : e;
        }
        _putElementInTemplate(e, t) {
          if (this._config.html) return (t.innerHTML = ""), void t.append(e);
          t.textContent = e.textContent;
        }
      }
      const mc = new Set(["sanitize", "allowList", "sanitizeFn"]),
        hc = "fade",
        gc = "show",
        bc = ".modal",
        vc = "hide.bs.modal",
        yc = "hover",
        Ec = "focus",
        wc = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: sl() ? "left" : "right",
          BOTTOM: "bottom",
          LEFT: sl() ? "right" : "left",
        },
        xc = {
          allowList: cc,
          animation: !0,
          boundary: "clippingParents",
          container: !1,
          customClass: "",
          delay: 0,
          fallbackPlacements: ["top", "right", "bottom", "left"],
          html: !1,
          offset: [0, 0],
          placement: "top",
          popperConfig: null,
          sanitize: !0,
          sanitizeFn: null,
          selector: !1,
          template:
            '<div className="tooltip" role="tooltip"><div className="tooltip-arrow"></div><div className="tooltip-inner"></div></div>',
          title: "",
          trigger: "hover focus",
        },
        _c = {
          allowList: "object",
          animation: "boolean",
          boundary: "(string|element)",
          container: "(string|element|boolean)",
          customClass: "(string|function)",
          delay: "(number|object)",
          fallbackPlacements: "array",
          html: "boolean",
          offset: "(array|string|function)",
          placement: "(string|function)",
          popperConfig: "(null|object|function)",
          sanitize: "boolean",
          sanitizeFn: "(null|function)",
          selector: "(string|boolean)",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
        };
      class kc extends Rl {
        constructor(t, n) {
          if (void 0 === e)
            throw new TypeError(
              "Bootstrap's tooltips require Popper (https://popper.js.org)"
            );
          super(t, n),
            (this._isEnabled = !0),
            (this._timeout = 0),
            (this._isHovered = null),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this._templateFactory = null),
            (this._newContent = null),
            (this.tip = null),
            this._setListeners(),
            this._config.selector || this._fixTitle();
        }
        static get Default() {
          return xc;
        }
        static get DefaultType() {
          return _c;
        }
        static get NAME() {
          return "tooltip";
        }
        enable() {
          this._isEnabled = !0;
        }
        disable() {
          this._isEnabled = !1;
        }
        toggleEnabled() {
          this._isEnabled = !this._isEnabled;
        }
        toggle() {
          this._isEnabled &&
            ((this._activeTrigger.click = !this._activeTrigger.click),
            this._isShown() ? this._leave() : this._enter());
        }
        dispose() {
          clearTimeout(this._timeout),
            Sl.off(this._element.closest(bc), vc, this._hideModalHandler),
            this.tip && this.tip.remove(),
            this._element.getAttribute("data-bs-original-title") &&
              this._element.setAttribute(
                "title",
                this._element.getAttribute("data-bs-original-title")
              ),
            this._disposePopper(),
            super.dispose();
        }
        show() {
          if ("none" === this._element.style.display)
            throw new Error("Please use show on visible elements");
          if (!this._isWithContent() || !this._isEnabled) return;
          const e = Sl.trigger(
              this._element,
              this.constructor.eventName("show")
            ),
            t = (
              rl(this._element) || this._element.ownerDocument.documentElement
            ).contains(this._element);
          if (e.defaultPrevented || !t) return;
          this.tip && (this.tip.remove(), (this.tip = null));
          const n = this._getTipElement();
          this._element.setAttribute("aria-describedby", n.getAttribute("id"));
          const { container: r } = this._config;
          if (
            (this._element.ownerDocument.documentElement.contains(this.tip) ||
              (r.append(n),
              Sl.trigger(
                this._element,
                this.constructor.eventName("inserted")
              )),
            this._popper
              ? this._popper.update()
              : (this._popper = this._createPopper(n)),
            n.classList.add(gc),
            "ontouchstart" in document.documentElement)
          )
            for (const e of [].concat(...document.body.children))
              Sl.on(e, "mouseover", al);
          this._queueCallback(
            () => {
              Sl.trigger(this._element, this.constructor.eventName("shown")),
                !1 === this._isHovered && this._leave(),
                (this._isHovered = !1);
            },
            this.tip,
            this._isAnimated()
          );
        }
        hide() {
          if (!this._isShown()) return;
          if (
            Sl.trigger(this._element, this.constructor.eventName("hide"))
              .defaultPrevented
          )
            return;
          const e = this._getTipElement();
          if (
            (e.classList.remove(gc), "ontouchstart" in document.documentElement)
          )
            for (const e of [].concat(...document.body.children))
              Sl.off(e, "mouseover", al);
          (this._activeTrigger.click = !1),
            (this._activeTrigger.focus = !1),
            (this._activeTrigger.hover = !1),
            (this._isHovered = null),
            this._queueCallback(
              () => {
                this._isWithActiveTrigger() ||
                  (this._isHovered || e.remove(),
                  this._element.removeAttribute("aria-describedby"),
                  Sl.trigger(
                    this._element,
                    this.constructor.eventName("hidden")
                  ),
                  this._disposePopper());
              },
              this.tip,
              this._isAnimated()
            );
        }
        update() {
          this._popper && this._popper.update();
        }
        _isWithContent() {
          return Boolean(this._getTitle());
        }
        _getTipElement() {
          return (
            this.tip ||
              (this.tip = this._createTipElement(
                this._newContent || this._getContentForTemplate()
              )),
            this.tip
          );
        }
        _createTipElement(e) {
          const t = this._getTemplateFactory(e).toHtml();
          if (!t) return null;
          t.classList.remove(hc, gc),
            t.classList.add(`bs-${this.constructor.NAME}-auto`);
          const n = ((e) => {
            do {
              e += Math.floor(1e6 * Math.random());
            } while (document.getElementById(e));
            return e;
          })(this.constructor.NAME).toString();
          return (
            t.setAttribute("id", n),
            this._isAnimated() && t.classList.add(hc),
            t
          );
        }
        setContent(e) {
          (this._newContent = e),
            this._isShown() && (this._disposePopper(), this.show());
        }
        _getTemplateFactory(e) {
          return (
            this._templateFactory
              ? this._templateFactory.changeContent(e)
              : (this._templateFactory = new pc({
                  ...this._config,
                  content: e,
                  extraClass: this._resolvePossibleFunction(
                    this._config.customClass
                  ),
                })),
            this._templateFactory
          );
        }
        _getContentForTemplate() {
          return { ".tooltip-inner": this._getTitle() };
        }
        _getTitle() {
          return (
            this._resolvePossibleFunction(this._config.title) ||
            this._element.getAttribute("data-bs-original-title")
          );
        }
        _initializeOnDelegatedTarget(e) {
          return this.constructor.getOrCreateInstance(
            e.delegateTarget,
            this._getDelegateConfig()
          );
        }
        _isAnimated() {
          return (
            this._config.animation ||
            (this.tip && this.tip.classList.contains(hc))
          );
        }
        _isShown() {
          return this.tip && this.tip.classList.contains(gc);
        }
        _createPopper(e) {
          const t =
              "function" == typeof this._config.placement
                ? this._config.placement.call(this, e, this._element)
                : this._config.placement,
            n = wc[t.toUpperCase()];
          return qi(this._element, e, this._getPopperConfig(n));
        }
        _getOffset() {
          const { offset: e } = this._config;
          return "string" == typeof e
            ? e.split(",").map((e) => Number.parseInt(e, 10))
            : "function" == typeof e
            ? (t) => e(t, this._element)
            : e;
        }
        _resolvePossibleFunction(e) {
          return "function" == typeof e ? e.call(this._element) : e;
        }
        _getPopperConfig(e) {
          const t = {
            placement: e,
            modifiers: [
              {
                name: "flip",
                options: {
                  fallbackPlacements: this._config.fallbackPlacements,
                },
              },
              { name: "offset", options: { offset: this._getOffset() } },
              {
                name: "preventOverflow",
                options: { boundary: this._config.boundary },
              },
              {
                name: "arrow",
                options: { element: `.${this.constructor.NAME}-arrow` },
              },
              {
                name: "preSetPlacement",
                enabled: !0,
                phase: "beforeMain",
                fn: (e) => {
                  this._getTipElement().setAttribute(
                    "data-popper-placement",
                    e.state.placement
                  );
                },
              },
            ],
          };
          return {
            ...t,
            ...("function" == typeof this._config.popperConfig
              ? this._config.popperConfig(t)
              : this._config.popperConfig),
          };
        }
        _setListeners() {
          const e = this._config.trigger.split(" ");
          for (const t of e)
            if ("click" === t)
              Sl.on(
                this._element,
                this.constructor.eventName("click"),
                this._config.selector,
                (e) => {
                  this._initializeOnDelegatedTarget(e).toggle();
                }
              );
            else if ("manual" !== t) {
              const e =
                  t === yc
                    ? this.constructor.eventName("mouseenter")
                    : this.constructor.eventName("focusin"),
                n =
                  t === yc
                    ? this.constructor.eventName("mouseleave")
                    : this.constructor.eventName("focusout");
              Sl.on(this._element, e, this._config.selector, (e) => {
                const t = this._initializeOnDelegatedTarget(e);
                (t._activeTrigger["focusin" === e.type ? Ec : yc] = !0),
                  t._enter();
              }),
                Sl.on(this._element, n, this._config.selector, (e) => {
                  const t = this._initializeOnDelegatedTarget(e);
                  (t._activeTrigger["focusout" === e.type ? Ec : yc] =
                    t._element.contains(e.relatedTarget)),
                    t._leave();
                });
            }
          (this._hideModalHandler = () => {
            this._element && this.hide();
          }),
            Sl.on(this._element.closest(bc), vc, this._hideModalHandler);
        }
        _fixTitle() {
          const e = this._element.getAttribute("title");
          e &&
            (this._element.getAttribute("aria-label") ||
              this._element.textContent.trim() ||
              this._element.setAttribute("aria-label", e),
            this._element.setAttribute("data-bs-original-title", e),
            this._element.removeAttribute("title"));
        }
        _enter() {
          this._isShown() || this._isHovered
            ? (this._isHovered = !0)
            : ((this._isHovered = !0),
              this._setTimeout(() => {
                this._isHovered && this.show();
              }, this._config.delay.show));
        }
        _leave() {
          this._isWithActiveTrigger() ||
            ((this._isHovered = !1),
            this._setTimeout(() => {
              this._isHovered || this.hide();
            }, this._config.delay.hide));
        }
        _setTimeout(e, t) {
          clearTimeout(this._timeout), (this._timeout = setTimeout(e, t));
        }
        _isWithActiveTrigger() {
          return Object.values(this._activeTrigger).includes(!0);
        }
        _getConfig(e) {
          const t = Ll.getDataAttributes(this._element);
          for (const e of Object.keys(t)) mc.has(e) && delete t[e];
          return (
            (e = { ...t, ...("object" == typeof e && e ? e : {}) }),
            (e = this._mergeConfigObj(e)),
            (e = this._configAfterMerge(e)),
            this._typeCheckConfig(e),
            e
          );
        }
        _configAfterMerge(e) {
          return (
            (e.container =
              !1 === e.container ? document.body : el(e.container)),
            "number" == typeof e.delay &&
              (e.delay = { show: e.delay, hide: e.delay }),
            "number" == typeof e.title && (e.title = e.title.toString()),
            "number" == typeof e.content && (e.content = e.content.toString()),
            e
          );
        }
        _getDelegateConfig() {
          const e = {};
          for (const t in this._config)
            this.constructor.Default[t] !== this._config[t] &&
              (e[t] = this._config[t]);
          return (e.selector = !1), (e.trigger = "manual"), e;
        }
        _disposePopper() {
          this._popper && (this._popper.destroy(), (this._popper = null));
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = kc.getOrCreateInstance(this, e);
            if ("string" == typeof e) {
              if (void 0 === t[e])
                throw new TypeError(`No method named "${e}"`);
              t[e]();
            }
          });
        }
      }
      cl(kc);
      const Nc = {
          ...kc.Default,
          content: "",
          offset: [0, 8],
          placement: "right",
          template:
            '<div className="popover" role="tooltip"><div className="popover-arrow"></div><h3 className="popover-header"></h3><div className="popover-body"></div></div>',
          trigger: "click",
        },
        Cc = { ...kc.DefaultType, content: "(null|string|element|function)" };
      class Tc extends kc {
        static get Default() {
          return Nc;
        }
        static get DefaultType() {
          return Cc;
        }
        static get NAME() {
          return "popover";
        }
        _isWithContent() {
          return this._getTitle() || this._getContent();
        }
        _getContentForTemplate() {
          return {
            ".popover-header": this._getTitle(),
            ".popover-body": this._getContent(),
          };
        }
        _getContent() {
          return this._resolvePossibleFunction(this._config.content);
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = Tc.getOrCreateInstance(this, e);
            if ("string" == typeof e) {
              if (void 0 === t[e])
                throw new TypeError(`No method named "${e}"`);
              t[e]();
            }
          });
        }
      }
      cl(Tc);
      const Sc = "click.bs.scrollspy",
        Oc = "active",
        Pc = "[href]",
        Ac = {
          offset: null,
          rootMargin: "0px 0px -25%",
          smoothScroll: !1,
          target: null,
          threshold: [0.1, 0.5, 1],
        },
        jc = {
          offset: "(number|null)",
          rootMargin: "string",
          smoothScroll: "boolean",
          target: "element",
          threshold: "array",
        };
      class Ic extends Rl {
        constructor(e, t) {
          super(e, t),
            (this._targetLinks = new Map()),
            (this._observableSections = new Map()),
            (this._rootElement =
              "visible" === getComputedStyle(this._element).overflowY
                ? null
                : this._element),
            (this._activeTarget = null),
            (this._observer = null),
            (this._previousScrollData = {
              visibleEntryTop: 0,
              parentScrollTop: 0,
            }),
            this.refresh();
        }
        static get Default() {
          return Ac;
        }
        static get DefaultType() {
          return jc;
        }
        static get NAME() {
          return "scrollspy";
        }
        refresh() {
          this._initializeTargetsAndObservables(),
            this._maybeEnableSmoothScroll(),
            this._observer
              ? this._observer.disconnect()
              : (this._observer = this._getNewObserver());
          for (const e of this._observableSections.values())
            this._observer.observe(e);
        }
        dispose() {
          this._observer.disconnect(), super.dispose();
        }
        _configAfterMerge(e) {
          return (
            (e.target = el(e.target) || document.body),
            (e.rootMargin = e.offset ? `${e.offset}px 0px -30%` : e.rootMargin),
            "string" == typeof e.threshold &&
              (e.threshold = e.threshold
                .split(",")
                .map((e) => Number.parseFloat(e))),
            e
          );
        }
        _maybeEnableSmoothScroll() {
          this._config.smoothScroll &&
            (Sl.off(this._config.target, Sc),
            Sl.on(this._config.target, Sc, Pc, (e) => {
              const t = this._observableSections.get(e.target.hash);
              if (t) {
                e.preventDefault();
                const n = this._rootElement || window,
                  r = t.offsetTop - this._element.offsetTop;
                if (n.scrollTo)
                  return void n.scrollTo({ top: r, behavior: "smooth" });
                n.scrollTop = r;
              }
            }));
        }
        _getNewObserver() {
          const e = {
            root: this._rootElement,
            threshold: this._config.threshold,
            rootMargin: this._config.rootMargin,
          };
          return new IntersectionObserver((e) => this._observerCallback(e), e);
        }
        _observerCallback(e) {
          const t = (e) => this._targetLinks.get(`#${e.target.id}`),
            n = (e) => {
              (this._previousScrollData.visibleEntryTop = e.target.offsetTop),
                this._process(t(e));
            },
            r = (this._rootElement || document.documentElement).scrollTop,
            a = r >= this._previousScrollData.parentScrollTop;
          this._previousScrollData.parentScrollTop = r;
          for (const o of e) {
            if (!o.isIntersecting) {
              (this._activeTarget = null), this._clearActiveClass(t(o));
              continue;
            }
            const e =
              o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
            if (a && e) {
              if ((n(o), !r)) return;
            } else a || e || n(o);
          }
        }
        _initializeTargetsAndObservables() {
          (this._targetLinks = new Map()),
            (this._observableSections = new Map());
          const e = Bl.find(Pc, this._config.target);
          for (const t of e) {
            if (!t.hash || nl(t)) continue;
            const e = Bl.findOne(t.hash, this._element);
            tl(e) &&
              (this._targetLinks.set(t.hash, t),
              this._observableSections.set(t.hash, e));
          }
        }
        _process(e) {
          this._activeTarget !== e &&
            (this._clearActiveClass(this._config.target),
            (this._activeTarget = e),
            e.classList.add(Oc),
            this._activateParents(e),
            Sl.trigger(this._element, "activate.bs.scrollspy", {
              relatedTarget: e,
            }));
        }
        _activateParents(e) {
          if (e.classList.contains("dropdown-item"))
            Bl.findOne(
              ".dropdown-toggle",
              e.closest(".dropdown")
            ).classList.add(Oc);
          else
            for (const t of Bl.parents(e, ".nav, .list-group"))
              for (const e of Bl.prev(
                t,
                ".nav-link, .nav-item > .nav-link, .list-group-item"
              ))
                e.classList.add(Oc);
        }
        _clearActiveClass(e) {
          e.classList.remove(Oc);
          const t = Bl.find("[href].active", e);
          for (const e of t) e.classList.remove(Oc);
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = Ic.getOrCreateInstance(this, e);
            if ("string" == typeof e) {
              if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                throw new TypeError(`No method named "${e}"`);
              t[e]();
            }
          });
        }
      }
      Sl.on(window, "load.bs.scrollspy.data-api", () => {
        for (const e of Bl.find('[data-bs-spy="scroll"]'))
          Ic.getOrCreateInstance(e);
      }),
        cl(Ic);
      const Lc = "ArrowLeft",
        Dc = "ArrowRight",
        Rc = "ArrowUp",
        Mc = "ArrowDown",
        Fc = "active",
        zc = "fade",
        $c = "show",
        Bc =
          '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
        Uc = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${Bc}`;
      class Hc extends Rl {
        constructor(e) {
          super(e),
            (this._parent = this._element.closest(
              '.list-group, .nav, [role="tablist"]'
            )),
            this._parent &&
              (this._setInitialAttributes(this._parent, this._getChildren()),
              Sl.on(this._element, "keydown.bs.tab", (e) => this._keydown(e)));
        }
        static get NAME() {
          return "tab";
        }
        show() {
          const e = this._element;
          if (this._elemIsActive(e)) return;
          const t = this._getActiveElem(),
            n = t ? Sl.trigger(t, "hide.bs.tab", { relatedTarget: e }) : null;
          Sl.trigger(e, "show.bs.tab", { relatedTarget: t }).defaultPrevented ||
            (n && n.defaultPrevented) ||
            (this._deactivate(t, e), this._activate(e, t));
        }
        _activate(e, t) {
          e &&
            (e.classList.add(Fc),
            this._activate(Yi(e)),
            this._queueCallback(
              () => {
                "tab" === e.getAttribute("role")
                  ? (e.removeAttribute("tabindex"),
                    e.setAttribute("aria-selected", !0),
                    this._toggleDropDown(e, !0),
                    Sl.trigger(e, "shown.bs.tab", { relatedTarget: t }))
                  : e.classList.add($c);
              },
              e,
              e.classList.contains(zc)
            ));
        }
        _deactivate(e, t) {
          e &&
            (e.classList.remove(Fc),
            e.blur(),
            this._deactivate(Yi(e)),
            this._queueCallback(
              () => {
                "tab" === e.getAttribute("role")
                  ? (e.setAttribute("aria-selected", !1),
                    e.setAttribute("tabindex", "-1"),
                    this._toggleDropDown(e, !1),
                    Sl.trigger(e, "hidden.bs.tab", { relatedTarget: t }))
                  : e.classList.remove($c);
              },
              e,
              e.classList.contains(zc)
            ));
        }
        _keydown(e) {
          if (![Lc, Dc, Rc, Mc].includes(e.key)) return;
          e.stopPropagation(), e.preventDefault();
          const t = [Dc, Mc].includes(e.key),
            n = fl(
              this._getChildren().filter((e) => !nl(e)),
              e.target,
              t,
              !0
            );
          n &&
            (n.focus({ preventScroll: !0 }), Hc.getOrCreateInstance(n).show());
        }
        _getChildren() {
          return Bl.find(Uc, this._parent);
        }
        _getActiveElem() {
          return this._getChildren().find((e) => this._elemIsActive(e)) || null;
        }
        _setInitialAttributes(e, t) {
          this._setAttributeIfNotExists(e, "role", "tablist");
          for (const e of t) this._setInitialAttributesOnChild(e);
        }
        _setInitialAttributesOnChild(e) {
          e = this._getInnerElement(e);
          const t = this._elemIsActive(e),
            n = this._getOuterElement(e);
          e.setAttribute("aria-selected", t),
            n !== e && this._setAttributeIfNotExists(n, "role", "presentation"),
            t || e.setAttribute("tabindex", "-1"),
            this._setAttributeIfNotExists(e, "role", "tab"),
            this._setInitialAttributesOnTargetPanel(e);
        }
        _setInitialAttributesOnTargetPanel(e) {
          const t = Yi(e);
          t &&
            (this._setAttributeIfNotExists(t, "role", "tabpanel"),
            e.id &&
              this._setAttributeIfNotExists(t, "aria-labelledby", `#${e.id}`));
        }
        _toggleDropDown(e, t) {
          const n = this._getOuterElement(e);
          if (!n.classList.contains("dropdown")) return;
          const r = (e, r) => {
            const a = Bl.findOne(e, n);
            a && a.classList.toggle(r, t);
          };
          r(".dropdown-toggle", Fc),
            r(".dropdown-menu", $c),
            n.setAttribute("aria-expanded", t);
        }
        _setAttributeIfNotExists(e, t, n) {
          e.hasAttribute(t) || e.setAttribute(t, n);
        }
        _elemIsActive(e) {
          return e.classList.contains(Fc);
        }
        _getInnerElement(e) {
          return e.matches(Uc) ? e : Bl.findOne(Uc, e);
        }
        _getOuterElement(e) {
          return e.closest(".nav-item, .list-group-item") || e;
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = Hc.getOrCreateInstance(this);
            if ("string" == typeof e) {
              if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                throw new TypeError(`No method named "${e}"`);
              t[e]();
            }
          });
        }
      }
      Sl.on(document, "click.bs.tab", Bc, function (e) {
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
          nl(this) || Hc.getOrCreateInstance(this).show();
      }),
        Sl.on(window, "load.bs.tab", () => {
          for (const e of Bl.find(
            '.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'
          ))
            Hc.getOrCreateInstance(e);
        }),
        cl(Hc);
      const Wc = "hide",
        Vc = "show",
        qc = "showing",
        Qc = { animation: "boolean", autohide: "boolean", delay: "number" },
        Kc = { animation: !0, autohide: !0, delay: 5e3 };
      class Zc extends Rl {
        constructor(e, t) {
          super(e, t),
            (this._timeout = null),
            (this._hasMouseInteraction = !1),
            (this._hasKeyboardInteraction = !1),
            this._setListeners();
        }
        static get Default() {
          return Kc;
        }
        static get DefaultType() {
          return Qc;
        }
        static get NAME() {
          return "toast";
        }
        show() {
          Sl.trigger(this._element, "show.bs.toast").defaultPrevented ||
            (this._clearTimeout(),
            this._config.animation && this._element.classList.add("fade"),
            this._element.classList.remove(Wc),
            ol(this._element),
            this._element.classList.add(Vc, qc),
            this._queueCallback(
              () => {
                this._element.classList.remove(qc),
                  Sl.trigger(this._element, "shown.bs.toast"),
                  this._maybeScheduleHide();
              },
              this._element,
              this._config.animation
            ));
        }
        hide() {
          this.isShown() &&
            (Sl.trigger(this._element, "hide.bs.toast").defaultPrevented ||
              (this._element.classList.add(qc),
              this._queueCallback(
                () => {
                  this._element.classList.add(Wc),
                    this._element.classList.remove(qc, Vc),
                    Sl.trigger(this._element, "hidden.bs.toast");
                },
                this._element,
                this._config.animation
              )));
        }
        dispose() {
          this._clearTimeout(),
            this.isShown() && this._element.classList.remove(Vc),
            super.dispose();
        }
        isShown() {
          return this._element.classList.contains(Vc);
        }
        _maybeScheduleHide() {
          this._config.autohide &&
            (this._hasMouseInteraction ||
              this._hasKeyboardInteraction ||
              (this._timeout = setTimeout(() => {
                this.hide();
              }, this._config.delay)));
        }
        _onInteraction(e, t) {
          switch (e.type) {
            case "mouseover":
            case "mouseout":
              this._hasMouseInteraction = t;
              break;
            case "focusin":
            case "focusout":
              this._hasKeyboardInteraction = t;
          }
          if (t) return void this._clearTimeout();
          const n = e.relatedTarget;
          this._element === n ||
            this._element.contains(n) ||
            this._maybeScheduleHide();
        }
        _setListeners() {
          Sl.on(this._element, "mouseover.bs.toast", (e) =>
            this._onInteraction(e, !0)
          ),
            Sl.on(this._element, "mouseout.bs.toast", (e) =>
              this._onInteraction(e, !1)
            ),
            Sl.on(this._element, "focusin.bs.toast", (e) =>
              this._onInteraction(e, !0)
            ),
            Sl.on(this._element, "focusout.bs.toast", (e) =>
              this._onInteraction(e, !1)
            );
        }
        _clearTimeout() {
          clearTimeout(this._timeout), (this._timeout = null);
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = Zc.getOrCreateInstance(this, e);
            if ("string" == typeof e) {
              if (void 0 === t[e])
                throw new TypeError(`No method named "${e}"`);
              t[e](this);
            }
          });
        }
      }
      Ml(Zc), cl(Zc);
      var Gc = function (e) {
          var n = (0, t.useContext)(Ne),
            r = n.store,
            a = n.actions;
          return (
            q(),
            t.createElement(
              t.Fragment,
              null,
              t.createElement(
                "nav",
                {
                  className:
                    "navbar navbar-expand-md navbar-white bg-white navbar-expand-md text-light sticky-top d-flex flex-column",
                },
                t.createElement(
                  "div",
                  { className: "container-fluid justify-content-between" },
                  t.createElement(
                    "div",
                    {
                      className: "d-flex flex-row justify-content-center ms-3",
                    },
                    t.createElement(oa, null),
                    t.createElement(
                      "div",
                      { className: "navbar-brand align-items-start my-1" },
                      t.createElement(
                        te,
                        { to: "/" },
                        t.createElement("img", {
                          src: Wi,
                          style: { height: "50px" },
                        })
                      )
                    )
                  ),
                  t.createElement(
                    "div",
                    { className: "d-flex flex-row p-1 text-center" },
                    t.createElement(
                      "div",
                      { className: "d-flex align-items-center" },
                      r.token
                        ? t.createElement(
                            t.Fragment,
                            null,
                            t.createElement(
                              te,
                              { to: "/Publish" },
                              t.createElement(ot, {
                                title: "Publicar Artículo",
                                classButton:
                                  "btn signup__button--register me-2",
                              })
                            ),
                            t.createElement(
                              te,
                              { to: "/Buy" },
                              t.createElement(ot, {
                                title: "Publicar Búsqueda",
                                classButton: "btn signup__button--register",
                              })
                            ),
                            t.createElement(
                              Hi,
                              null,
                              t.createElement(
                                Hi.Toggle,
                                {
                                  className:
                                    "btn signup__button--register ms-2",
                                  variant: "success",
                                  id: "dropdown-basic",
                                },
                                "Favoritos (",
                                r.favoritos.length > 0 ? r.favoritos.length : 0,
                                ")"
                              ),
                              t.createElement(
                                Hi.Menu,
                                null,
                                r.favoritos.map(function (e) {
                                  return t.createElement(
                                    Hi.Item,
                                    { key: e },
                                    e,
                                    " ",
                                    t.createElement(
                                      "button",
                                      {
                                        type: "button",
                                        className: "btn btn-danger mx-2 boton",
                                        onClick: function (t) {
                                          return a.toggleFavorite(e);
                                        },
                                      },
                                      t.createElement("i", {
                                        className: "fa-solid fa-trash",
                                      })
                                    )
                                  );
                                })
                              )
                            )
                          )
                        : t.createElement(wr, null)
                    ),
                    t.createElement(
                      "div",
                      { className: "d-flex align-items-between ms-1" },
                      r.token
                        ? t.createElement(
                            "button",
                            {
                              className: "btn signup__button--login",
                              onClick: function (e) {
                                return a.logout();
                              },
                            },
                            "Salir"
                          )
                        : t.createElement(ia, null)
                    )
                  )
                ),
                t.createElement(
                  "div",
                  null,
                  r.notification &&
                    t.createElement(
                      "div",
                      {
                        className: "alert alert-success",
                        onClick: function (e) {
                          return a.setNotification(void 0);
                        },
                        role: "alert",
                      },
                      r.notification
                    )
                )
              )
            )
          );
        },
        Yc = function () {
          return t.createElement(
            "div",
            null,
            t.createElement(
              "footer",
              {
                className:
                  "text-center text-lg-start text-black bg-white border-top",
              },
              t.createElement(
                "div",
                { className: "container-fluid p-4 pb-0" },
                t.createElement(
                  "section",
                  { className: "container" },
                  t.createElement(
                    "div",
                    { className: "row" },
                    t.createElement(
                      "div",
                      { className: "col-md-3 col-lg-3 col-xl-3 mx-auto mt-3" },
                      t.createElement(
                        "h6",
                        { className: "text-uppercase mb-4 font-weight-bold" },
                        "Haz Tu Oferta"
                      ),
                      t.createElement(
                        "p",
                        null,
                        "Compra y vende a tu propia manera."
                      )
                    ),
                    t.createElement("hr", {
                      className: "w-100 clearfix d-md-none",
                    }),
                    t.createElement(
                      "div",
                      { className: "col-md-2 col-lg-2 col-xl-2 mx-auto mt-3" },
                      t.createElement(
                        "h6",
                        {
                          className:
                            "text-uppercase mb-4 font-weight-bold border-bottom",
                        },
                        "Inicia Hoy"
                      ),
                      t.createElement(
                        "p",
                        null,
                        t.createElement(
                          "a",
                          { href: "./Account", className: "text-black" },
                          "Tu Cuenta"
                        )
                      ),
                      t.createElement(
                        "p",
                        null,
                        t.createElement(
                          "a",
                          { className: "text-black" },
                          "Afilia tu Negocio"
                        )
                      ),
                      t.createElement(
                        "p",
                        null,
                        t.createElement(
                          "a",
                          { className: "text-black" },
                          "Tus Compras"
                        )
                      ),
                      t.createElement(
                        "p",
                        null,
                        t.createElement(
                          "a",
                          { className: "text-black" },
                          "Ayuda"
                        )
                      )
                    ),
                    t.createElement("hr", {
                      className: "w-100 clearfix d-md-none",
                    }),
                    t.createElement(
                      "div",
                      { className: "col-md-3 col-lg-2 col-xl-2 mx-auto mt-3" },
                      t.createElement(
                        "h6",
                        {
                          className:
                            "text-uppercase mb-4 font-weight-bold border-bottom",
                        },
                        "Compañia"
                      ),
                      t.createElement(
                        "p",
                        null,
                        t.createElement(
                          "a",
                          { href: "./AboutUs", className: "text-black" },
                          "Acerca de Nosotros"
                        )
                      ),
                      t.createElement(
                        "p",
                        null,
                        t.createElement(
                          "a",
                          { className: "text-black" },
                          "Politica de Privacidad"
                        )
                      ),
                      t.createElement(
                        "p",
                        null,
                        t.createElement(
                          "a",
                          { className: "text-black" },
                          "Terminos y Condiciones"
                        )
                      )
                    ),
                    t.createElement("hr", {
                      className: "w-100 clearfix d-md-none",
                    }),
                    t.createElement(
                      "div",
                      { className: "col-md-4 col-lg-3 col-xl-3 mx-auto mt-3" },
                      t.createElement(
                        "h6",
                        {
                          className:
                            "text-uppercase mb-4 font-weight-bold border-bottom",
                        },
                        "Contacto"
                      ),
                      t.createElement(
                        "p",
                        null,
                        t.createElement("i", { className: "fas fa-home mr-3" }),
                        " New York, NY 10012, US"
                      ),
                      t.createElement(
                        "p",
                        null,
                        t.createElement("i", {
                          className: "fas fa-envelope mr-3",
                        }),
                        " info@gmail.com"
                      ),
                      t.createElement(
                        "p",
                        null,
                        t.createElement("i", {
                          className: "fas fa-phone mr-3",
                        }),
                        " + 01 234 567 88"
                      ),
                      t.createElement(
                        "p",
                        null,
                        t.createElement("i", {
                          className: "fas fa-print mr-3",
                        }),
                        " + 01 234 567 89"
                      )
                    )
                  )
                ),
                t.createElement("hr", { className: "my-3 w-100" }),
                t.createElement(
                  "section",
                  { className: "p-3 pt-0 container" },
                  t.createElement(
                    "div",
                    { className: "row d-flex align-items-center" },
                    t.createElement(
                      "div",
                      {
                        className:
                          "col-md-7 col-lg-8 text-center text-md-start",
                      },
                      t.createElement(
                        "div",
                        { className: "p-3" },
                        "Copyright © 2022",
                        t.createElement(
                          "a",
                          {
                            className: "text-black m-1",
                            href: "https://github.com/frako23/haztuoferta.com",
                          },
                          "HazTuOferta.com"
                        )
                      )
                    ),
                    t.createElement(
                      "div",
                      {
                        className:
                          "col-md-5 col-lg-4 ml-lg-0 text-center text-md-end",
                      },
                      t.createElement(
                        "a",
                        {
                          className:
                            "btn btn-outline-dark btn-floating m-1 text-black",
                          role: "button",
                        },
                        t.createElement("i", { className: "fab fa-facebook-f" })
                      ),
                      t.createElement(
                        "a",
                        {
                          className:
                            "btn btn-outline-dark btn-floating m-1 text-black",
                          role: "button",
                        },
                        t.createElement("i", { className: "fab fa-twitter" })
                      ),
                      t.createElement(
                        "a",
                        {
                          className:
                            "btn btn-outline-dark btn-floating m-1 text-black",
                          role: "button",
                        },
                        t.createElement("i", { className: "fab fa-linkedin" })
                      ),
                      t.createElement(
                        "a",
                        {
                          className:
                            "btn btn-outline-dark btn-floating m-1 text-black",
                          role: "button",
                        },
                        t.createElement("i", { className: "fab fa-instagram" })
                      )
                    )
                  )
                )
              )
            )
          );
        };
      const Xc = xt("input-group-text", { Component: "span" }),
        Jc = t.forwardRef(
          (
            {
              bsPrefix: e,
              size: n,
              hasValidation: r,
              className: a,
              as: o = "div",
              ...i
            },
            l
          ) => {
            e = Ze(e, "input-group");
            const s = (0, t.useMemo)(() => ({}), []);
            return (0, Be.jsx)(ji.Provider, {
              value: s,
              children: (0, Be.jsx)(o, {
                ref: l,
                ...i,
                className: $e()(a, e, n && `${e}-${n}`, r && "has-validation"),
              }),
            });
          }
        );
      Jc.displayName = "InputGroup";
      const eu = Object.assign(Jc, {
        Text: Xc,
        Radio: (e) =>
          (0, Be.jsx)(Xc, {
            children: (0, Be.jsx)(dt, { type: "radio", ...e }),
          }),
        Checkbox: (e) =>
          (0, Be.jsx)(Xc, {
            children: (0, Be.jsx)(dt, { type: "checkbox", ...e }),
          }),
      });
      var tu = function () {
          var e = be((0, t.useState)(""), 2),
            n = e[0],
            r = e[1],
            a = be((0, t.useState)(""), 2),
            o = a[0],
            i = a[1],
            l = be((0, t.useState)(""), 2),
            s = l[0],
            c = l[1],
            u = be((0, t.useState)(""), 2),
            d = u[0],
            f = u[1],
            p = be((0, t.useState)(""), 2),
            m = p[0],
            h = p[1],
            g = be((0, t.useState)(""), 2),
            b = g[0],
            v = g[1],
            y = be((0, t.useState)(""), 2),
            E = y[0],
            w = y[1],
            x = be((0, t.useState)(""), 2),
            _ = x[0],
            k = x[1],
            N = be((0, t.useState)(""), 2),
            C = N[0],
            T = N[1],
            S = be((0, t.useState)(""), 2),
            O = S[0],
            P = S[1],
            A = be((0, t.useState)(""), 2),
            j = A[0],
            I = A[1],
            L = be((0, t.useState)(""), 2),
            D = L[0],
            R = L[1],
            M = be((0, t.useState)(""), 2),
            F = M[0],
            z = M[1],
            $ = be((0, t.useState)(""), 2),
            B = $[0],
            U = $[1],
            H = be((0, t.useState)(""), 2),
            W = (H[0], H[1], be((0, t.useState)(""), 2)),
            V = W[0],
            Q = W[1],
            K = be((0, t.useState)(""), 2),
            Z = K[0],
            G = K[1],
            Y = be((0, t.useState)(""), 2),
            X = Y[0],
            J = Y[1],
            ee = be((0, t.useState)(""), 2),
            te = ee[0],
            ne = ee[1],
            re = (0, t.useContext)(Ne),
            ae = re.store,
            oe = re.actions,
            ie = q();
          return t.createElement(
            t.Fragment,
            null,
            t.createElement(
              "div",
              { id: "container" },
              t.createElement(
                "div",
                { id: "container1", className: "" },
                t.createElement("h1", null, "¿Qué deseas vender?")
              ),
              t.createElement(
                Ut,
                {
                  className:
                    "bg-white m-5 p-4 border rounded-4 border-dark border-opacity-25",
                  id: "form",
                },
                t.createElement(
                  eu,
                  { className: "mb-3" },
                  t.createElement(eu.Text, { id: "basic-addon1" }, "Titulo"),
                  t.createElement(Ut.Control, {
                    placeholder: "Titulo de la publicacion",
                    "aria-label": "Username",
                    "aria-describedby": "basic-addon1",
                    value: n,
                    onChange: function (e) {
                      r(e.target.value);
                    },
                  })
                ),
                t.createElement(Ut.Label, null, "Tipo de producto"),
                t.createElement(
                  Ut.Select,
                  {
                    "aria-label": "dropdown select",
                    onChange: function (e) {
                      U(e.target.value);
                    },
                  },
                  t.createElement(
                    "option",
                    { disabled: !0, selected: !0 },
                    "Escoge una categoria"
                  ),
                  t.createElement("option", { value: "Nuevo" }, "Nuevo"),
                  t.createElement("option", { value: "Usado" }, "Usado")
                ),
                t.createElement("br", null),
                t.createElement(Ut.Label, null, "Tipo de negocio"),
                t.createElement(
                  Ut.Select,
                  {
                    "aria-label": "dropdown select",
                    className: "mb-3",
                    onChange: function (e) {
                      z(e.target.value);
                    },
                  },
                  t.createElement(
                    "option",
                    { disabled: !0, selected: !0 },
                    "Escoge una categoria"
                  ),
                  t.createElement("option", { value: "Venta" }, "Venta"),
                  t.createElement(
                    "option",
                    { value: "Intercambio" },
                    "Intercambio"
                  ),
                  t.createElement("option", { value: "Subasta" }, "Subasta")
                ),
                "Venta" == F
                  ? t.createElement(
                      Ut.Group,
                      { className: "", controlId: "exampleForm.ControlInput3" },
                      t.createElement(Ut.Label, null, "Precio"),
                      t.createElement(
                        "div",
                        { className: "d-flex" },
                        t.createElement(
                          Ut.Select,
                          {
                            "aria-label": "dropdown select",
                            className: "w-auto",
                            onChange: function (e) {
                              c(e.target.value);
                            },
                          },
                          t.createElement(
                            "option",
                            { disabled: !0, selected: !0 },
                            "#"
                          ),
                          t.createElement("option", { value: "$" }, "$"),
                          t.createElement("option", { value: "€" }, "€"),
                          t.createElement("option", { value: "Bs" }, "Bs")
                        ),
                        t.createElement(Ut.Control, {
                          type: "number",
                          placeholder: "Precio",
                          value: d,
                          onChange: function (e) {
                            f(e.target.value);
                          },
                        })
                      )
                    )
                  : "Subasta" == F
                  ? t.createElement(
                      Ut.Group,
                      { className: "", controlId: "exampleForm.ControlInput3" },
                      t.createElement(Ut.Label, null, "Precio de inicio"),
                      t.createElement(
                        "div",
                        { className: "d-flex" },
                        t.createElement(
                          Ut.Select,
                          {
                            "aria-label": "dropdown select",
                            className: "w-auto",
                            onChange: function (e) {
                              c(e.target.value);
                            },
                          },
                          t.createElement(
                            "option",
                            { disabled: !0, selected: !0 },
                            "#"
                          ),
                          t.createElement("option", { value: "$" }, "$"),
                          t.createElement("option", { value: "€" }, "€"),
                          t.createElement("option", { value: "Bs" }, "Bs")
                        ),
                        t.createElement(Ut.Control, {
                          type: "number",
                          placeholder:
                            "Coloca el precio de inicio de tú subasta",
                          value: d,
                          onChange: function (e) {
                            f(e.target.value);
                          },
                        })
                      )
                    )
                  : "Intercambio" == F
                  ? t.createElement(
                      Ut.Group,
                      { className: "", controlId: "exampleForm.ControlInput3" },
                      t.createElement(Ut.Label, null, "¿Qué estas buscando?"),
                      t.createElement(
                        "div",
                        { className: "" },
                        t.createElement(Ut.Control, {
                          type: "text",
                          "aria-describedby": "passwordHelpBlock",
                          value: d,
                          onChange: function (e) {
                            f(e.target.value);
                          },
                        }),
                        t.createElement(
                          Ut.Text,
                          { id: "passwordHelpBlock", muted: !0 },
                          "Coloca los productos que deseas como interncambio"
                        )
                      )
                    )
                  : "",
                t.createElement(
                  Ut.Group,
                  { className: "mb-3 d-grid gap-2", controlId: "formFile" },
                  t.createElement(Ut.Label, null, "Agregar fotos "),
                  t.createElement(et, null)
                ),
                t.createElement(
                  Ut.Group,
                  { className: "", controlId: "exampleForm.ControlInput2" },
                  t.createElement(Ut.Label, null, "Categoria"),
                  t.createElement(
                    Ut.Select,
                    {
                      "aria-label": "dropdown select",
                      className: "mb-3",
                      onChange: function (e) {
                        i(e.target.value);
                      },
                    },
                    t.createElement(
                      "option",
                      { disabled: !0, selected: !0 },
                      "Escoge una categoria"
                    ),
                    t.createElement(
                      "option",
                      { value: "bebes" },
                      "Accesorios para bebés"
                    ),
                    t.createElement(
                      "option",
                      { value: "mascotas" },
                      "Accesorios para mascotas"
                    ),
                    t.createElement(
                      "option",
                      { value: "coleccion" },
                      "Artículos de colección"
                    ),
                    t.createElement(
                      "option",
                      { value: "automotor" },
                      "Carros y Motos"
                    ),
                    t.createElement(
                      "option",
                      { value: "camaras" },
                      "Cámaras y Accesorios"
                    ),
                    t.createElement(
                      "option",
                      { value: "celulares" },
                      "Celulares"
                    ),
                    t.createElement(
                      "option",
                      { value: "computadoras" },
                      "Computadoras"
                    ),
                    t.createElement(
                      "option",
                      { value: "videojuegos" },
                      "Consolas y Videojuegos"
                    ),
                    t.createElement(
                      "option",
                      { value: "electrodomesticos" },
                      "Electrodomésticos"
                    ),
                    t.createElement(
                      "option",
                      { value: "deporte" },
                      "Deporte y Fitness"
                    ),
                    t.createElement(
                      "option",
                      { value: "electronica" },
                      "Electrónica, audio y video"
                    ),
                    t.createElement(
                      "option",
                      { value: "herramientas" },
                      "Herramientas"
                    ),
                    t.createElement("option", { value: "hogar" }, "Hogar"),
                    t.createElement(
                      "option",
                      { value: "inmuebles" },
                      "Inmuebles"
                    ),
                    t.createElement(
                      "option",
                      { value: "musica" },
                      "Instrumentos musicales"
                    ),
                    t.createElement(
                      "option",
                      { value: "juguetes" },
                      "Juguetes"
                    ),
                    t.createElement("option", { value: "joyas" }, "Joyas"),
                    t.createElement("option", { value: "libros" }, "Libros"),
                    t.createElement(
                      "option",
                      { value: "repuestos" },
                      "Repuestos para vehículos"
                    ),
                    t.createElement(
                      "option",
                      { value: "ropa" },
                      "Ropa y Zapatos"
                    ),
                    t.createElement(
                      "option",
                      { value: "otros" },
                      "Otras categorías"
                    )
                  )
                ),
                "computadoras" == o
                  ? t.createElement(
                      "div",
                      null,
                      t.createElement(
                        eu,
                        { className: "mb-3" },
                        t.createElement(
                          eu.Text,
                          { id: "basic-addon1" },
                          "Marca"
                        ),
                        t.createElement(Ut.Control, {
                          placeholder: "Marca",
                          "aria-label": "Username",
                          "aria-describedby": "basic-addon1",
                          value: b,
                          onChange: function (e) {
                            v(e.target.value);
                          },
                        }),
                        t.createElement(
                          eu.Text,
                          { id: "basic-addon1" },
                          "Modelo"
                        ),
                        t.createElement(Ut.Control, {
                          placeholder: "Modelo",
                          "aria-label": "Username",
                          "aria-describedby": "basic-addon1",
                          value: E,
                          onChange: function (e) {
                            w(e.target.value);
                          },
                        })
                      ),
                      t.createElement(
                        eu,
                        { className: "mb-3" },
                        t.createElement(
                          eu.Text,
                          { id: "basic-addon1" },
                          "Procesador"
                        ),
                        t.createElement(Ut.Control, {
                          placeholder: "Procesador",
                          "aria-label": "Username",
                          "aria-describedby": "basic-addon1",
                          value: _,
                          onChange: function (e) {
                            k(e.target.value);
                          },
                        }),
                        t.createElement(
                          eu.Text,
                          { id: "basic-addon1" },
                          "Pantalla"
                        ),
                        t.createElement(Ut.Control, {
                          placeholder: "Pantalla",
                          "aria-label": "Username",
                          "aria-describedby": "basic-addon1",
                          value: C,
                          onChange: function (e) {
                            T(e.target.value);
                          },
                        })
                      ),
                      t.createElement(
                        eu,
                        { className: "mb-3" },
                        t.createElement(
                          eu.Text,
                          { id: "basic-addon1" },
                          "Disco duro"
                        ),
                        t.createElement(Ut.Control, {
                          placeholder: "Disco duro",
                          "aria-label": "Username",
                          "aria-describedby": "basic-addon1",
                          value: j,
                          onChange: function (e) {
                            I(e.target.value);
                          },
                        }),
                        t.createElement(
                          eu.Text,
                          { id: "basic-addon1" },
                          "Memoria Ram"
                        ),
                        t.createElement(Ut.Control, {
                          placeholder: "Memoria Ram",
                          "aria-label": "Username",
                          "aria-describedby": "basic-addon1",
                          value: O,
                          onChange: function (e) {
                            P(e.target.value);
                          },
                        })
                      ),
                      t.createElement(Ut.Label, null, "Sistema Operativo"),
                      t.createElement(
                        Ut.Select,
                        {
                          "aria-label": "dropdown select",
                          className: "mb-3",
                          onChange: function (e) {
                            R(e.target.value);
                          },
                        },
                        t.createElement(
                          "option",
                          { disabled: !0, selected: !0 },
                          "Escoge una categoria"
                        ),
                        t.createElement(
                          "option",
                          { value: "Windows" },
                          "Windows"
                        ),
                        t.createElement("option", { value: "macOS" }, "macOS"),
                        t.createElement(
                          "option",
                          { value: "ChromeOS" },
                          "ChromeOS"
                        )
                      ),
                      t.createElement(Ut.Label, null, "Descripción"),
                      t.createElement(Ut.Control, {
                        as: "textarea",
                        rows: 5,
                        className: "mb-3",
                        value: m,
                        onChange: function (e) {
                          h(e.target.value);
                        },
                      }),
                      t.createElement(
                        Xe,
                        {
                          variant: "primary",
                          onClick: function () {
                            oe.postComputadoras({
                              titulo: n,
                              marca: b,
                              modelo: E,
                              procesador: _,
                              pantalla: C,
                              memoria_ram: O,
                              disco_duro: j,
                              sistema_operativo: D,
                              moneda: s,
                              precio: d,
                              tipo_de_negocio: F,
                              nuevo_usado: B,
                              descripcion: m,
                              img_url: ae.imageUrl,
                            }),
                              ie("/"),
                              oe.setNotification(
                                "¡Has publicado tu producto exitosamente!"
                              );
                          },
                        },
                        "Publica tu producto"
                      )
                    )
                  : "celulares" == o
                  ? t.createElement(
                      "div",
                      null,
                      t.createElement(
                        eu,
                        { className: "mb-3" },
                        t.createElement(
                          eu.Text,
                          { id: "basic-addon1" },
                          "Marca"
                        ),
                        t.createElement(Ut.Control, {
                          placeholder: "Marca",
                          "aria-label": "Username",
                          "aria-describedby": "basic-addon1",
                          value: b,
                          onChange: function (e) {
                            v(e.target.value);
                          },
                        }),
                        t.createElement(
                          eu.Text,
                          { id: "basic-addon1" },
                          "Modelo"
                        ),
                        t.createElement(Ut.Control, {
                          placeholder: "Modelo",
                          "aria-label": "Username",
                          "aria-describedby": "basic-addon1",
                          value: E,
                          onChange: function (e) {
                            w(e.target.value);
                          },
                        })
                      ),
                      t.createElement(
                        eu,
                        { className: "mb-3" },
                        t.createElement(
                          eu.Text,
                          { id: "basic-addon1" },
                          "Pantalla"
                        ),
                        t.createElement(Ut.Control, {
                          placeholder: "Pantalla",
                          "aria-label": "Username",
                          "aria-describedby": "basic-addon1",
                          value: C,
                          onChange: function (e) {
                            T(e.target.value);
                          },
                        }),
                        t.createElement(
                          eu.Text,
                          { id: "basic-addon1" },
                          "Bateria"
                        ),
                        t.createElement(Ut.Control, {
                          placeholder: "Bateria",
                          "aria-label": "Username",
                          "aria-describedby": "basic-addon1",
                          value: te,
                          onChange: function (e) {
                            ne(e.target.value);
                          },
                        })
                      ),
                      t.createElement(
                        eu,
                        { className: "mb-3" },
                        t.createElement(
                          eu.Text,
                          { id: "basic-addon1" },
                          "Camara Frontal"
                        ),
                        t.createElement(Ut.Control, {
                          placeholder: "Camara Frontal",
                          "aria-label": "Username",
                          "aria-describedby": "basic-addon1",
                          value: Z,
                          onChange: function (e) {
                            G(e.target.value);
                          },
                        }),
                        t.createElement(
                          eu.Text,
                          { id: "basic-addon1" },
                          "Camara Trasera"
                        ),
                        t.createElement(Ut.Control, {
                          placeholder: "Camara Trasera",
                          "aria-label": "Username",
                          "aria-describedby": "basic-addon1",
                          value: X,
                          onChange: function (e) {
                            J(e.target.value);
                          },
                        })
                      ),
                      t.createElement(
                        eu,
                        { className: "mb-3" },
                        t.createElement(
                          eu.Text,
                          { id: "basic-addon1" },
                          "Almacenamiento Interno"
                        ),
                        t.createElement(Ut.Control, {
                          placeholder: "Almacenamiento Interno",
                          "aria-label": "Username",
                          "aria-describedby": "basic-addon1",
                          value: V,
                          onChange: function (e) {
                            Q(e.target.value);
                          },
                        }),
                        t.createElement(
                          eu.Text,
                          { id: "basic-addon1" },
                          "Memoria Ram"
                        ),
                        t.createElement(Ut.Control, {
                          placeholder: "Memoria Ram",
                          "aria-label": "Username",
                          "aria-describedby": "basic-addon1",
                          value: O,
                          onChange: function (e) {
                            P(e.target.value);
                          },
                        })
                      ),
                      t.createElement(Ut.Label, null, "Sistema Operativo"),
                      t.createElement(
                        Ut.Select,
                        {
                          "aria-label": "dropdown select",
                          className: "mb-3",
                          onChange: function (e) {
                            R(e.target.value);
                          },
                        },
                        t.createElement(
                          "option",
                          { disabled: !0, selected: !0 },
                          "Escoge una categoria"
                        ),
                        t.createElement(
                          "option",
                          { value: "Windows" },
                          "Android"
                        ),
                        t.createElement("option", { value: "macOS" }, "iOS")
                      ),
                      t.createElement(Ut.Label, null, "Descripción"),
                      t.createElement(Ut.Control, {
                        as: "textarea",
                        rows: 5,
                        className: "mb-3",
                        value: m,
                        onChange: function (e) {
                          h(e.target.value);
                        },
                      }),
                      t.createElement(
                        Xe,
                        {
                          variant: "primary",
                          onClick: function () {
                            oe.postCelulares({
                              titulo: n,
                              marca: b,
                              modelo: E,
                              procesador: _,
                              pantalla: C,
                              memoria_ram: O,
                              almacenamiento_interno: V,
                              sistema_operativo: D,
                              bateria: te,
                              camara_frontal: Z,
                              camara_trasera: X,
                              moneda: s,
                              precio: d,
                              tipo_de_negocio: F,
                              nuevo_usado: B,
                              descripcion: m,
                              img_url: ae.imageUrl,
                            }),
                              ie("/"),
                              oe.setNotification(
                                "¡Has publicado tu producto exitosamente!"
                              );
                          },
                        },
                        "Publica tu producto"
                      )
                    )
                  : ""
              )
            )
          );
        },
        nu = function () {
          var e = be((0, t.useState)(!1), 2),
            n = (e[0], e[1], be((0, t.useState)(""), 2)),
            r = n[0],
            a = n[1],
            o = be((0, t.useState)(""), 2),
            i = o[0],
            l = o[1],
            s = be((0, t.useState)(""), 2),
            c = s[0],
            u = s[1],
            d = be((0, t.useState)(""), 2),
            f = d[0],
            p = d[1],
            m = q(),
            h = be((0, t.useState)(null), 2),
            g = (h[0], h[1], (0, t.useContext)(Ne)),
            b = (g.store, g.actions);
          return t.createElement(
            t.Fragment,
            null,
            t.createElement(
              "div",
              { id: "container" },
              t.createElement(
                "div",
                { id: "container1", className: "" },
                t.createElement("h1", null, "Que estas buscando?")
              ),
              t.createElement(
                Ut,
                {
                  className:
                    "bg-white m-5 p-4 border rounded-4 border-dark border-opacity-25",
                  id: "form",
                },
                t.createElement(
                  eu,
                  { className: "mb-3" },
                  t.createElement(eu.Text, { id: "basic-addon1" }, "Titulo"),
                  t.createElement(Ut.Control, {
                    placeholder: "Titulo de la publicacion",
                    "aria-label": "Username",
                    "aria-describedby": "basic-addon1",
                    value: r,
                    onChange: function (e) {
                      a(e.target.value);
                    },
                  })
                ),
                t.createElement(
                  Ut.Group,
                  { className: "mb-3", controlId: "exampleForm.ControlInput2" },
                  t.createElement(Ut.Label, null, "Categoria"),
                  t.createElement(
                    Ut.Select,
                    {
                      "aria-label": "dropdown select",
                      onChange: function (e) {
                        l(e.target.value);
                      },
                    },
                    t.createElement(
                      "option",
                      { disabled: !0, selected: !0 },
                      "Escoge una categoria"
                    ),
                    t.createElement(
                      "option",
                      { value: "Accesorios para bebés" },
                      "Accesorios para bebés"
                    ),
                    t.createElement(
                      "option",
                      { value: "Accesorios para mascotas" },
                      "Accesorios para mascotas"
                    ),
                    t.createElement(
                      "option",
                      { value: "Artículos de colección" },
                      "Artículos de colección"
                    ),
                    t.createElement(
                      "option",
                      { value: "Carros y Motos" },
                      "Carros y Motos"
                    ),
                    t.createElement(
                      "option",
                      { value: "Cámaras y Accesorios" },
                      "Cámaras y Accesorios"
                    ),
                    t.createElement(
                      "option",
                      { value: "Celulares" },
                      "Celulares"
                    ),
                    t.createElement(
                      "option",
                      { value: "Computadoras" },
                      "Computadoras"
                    ),
                    t.createElement(
                      "option",
                      { value: "Consolas y Videojuegos" },
                      "Consolas y Videojuegos"
                    ),
                    t.createElement(
                      "option",
                      { value: "Electrodomésticos" },
                      "Electrodomésticos"
                    ),
                    t.createElement(
                      "option",
                      { value: "Deporte y Fitness" },
                      "Deporte y Fitness"
                    ),
                    t.createElement(
                      "option",
                      { value: "Electrónica" },
                      "Electrónica, audio y video"
                    ),
                    t.createElement(
                      "option",
                      { value: "Herramientas" },
                      "Herramientas"
                    ),
                    t.createElement("option", { value: "Hogar" }, "Hogar"),
                    t.createElement(
                      "option",
                      { value: "Inmuebles" },
                      "Inmuebles"
                    ),
                    t.createElement(
                      "option",
                      { value: "Instrumentos musicales" },
                      "Instrumentos musicales"
                    ),
                    t.createElement(
                      "option",
                      { value: "Juguetes" },
                      "Juguetes"
                    ),
                    t.createElement("option", { value: "Joyas" }, "Joyas"),
                    t.createElement("option", { value: "Libros" }, "Libros"),
                    t.createElement(
                      "option",
                      { value: "Repuestos para vehículos" },
                      "Repuestos para vehículos"
                    ),
                    t.createElement(
                      "option",
                      { value: "Ropa y Zapatos" },
                      "Ropa y Zapatos"
                    ),
                    t.createElement(
                      "option",
                      { value: "Otras categorías" },
                      "Otras categorías"
                    )
                  )
                ),
                t.createElement(
                  Ut.Group,
                  { className: "mb-3", controlId: "exampleForm.ControlInput3" },
                  t.createElement(
                    Ut.Label,
                    null,
                    "Cuanto estas dispuesto a pagar?"
                  ),
                  t.createElement(
                    eu,
                    { className: "mb-3" },
                    t.createElement(
                      eu.Text,
                      { id: "basic-addon1" },
                      "¿Cuánto ofreces?"
                    ),
                    t.createElement(Ut.Control, {
                      placeholder: "Haz tu oferta aqui",
                      "aria-label": "Username",
                      "aria-describedby": "basic-addon1",
                      value: c,
                      onChange: function (e) {
                        u(e.target.value);
                      },
                    })
                  )
                ),
                t.createElement(
                  Ut.Group,
                  {
                    className: "mb-3",
                    controlId: "exampleForm.ControlTextarea1",
                  },
                  t.createElement(Ut.Label, null, "Descripción"),
                  t.createElement(Ut.Control, {
                    as: "textarea",
                    rows: 5,
                    value: f,
                    onChange: function (e) {
                      p(e.target.value);
                    },
                  })
                ),
                t.createElement(
                  Xe,
                  {
                    variant: "primary",
                    onClick: function () {
                      b.postOfertas({
                        titulo: r,
                        categoria: i,
                        oferta: c,
                        descripcion: f,
                      }),
                        b.setNotification(
                          "¡Has creado tu oferta de compra exitosamente!"
                        ),
                        m("/");
                    },
                  },
                  "!Haz tu oferta!"
                )
              )
            )
          );
        };
      const ru = t.forwardRef(
          (
            {
              bsPrefix: e,
              className: t,
              striped: n,
              bordered: r,
              borderless: a,
              hover: o,
              size: i,
              variant: l,
              responsive: s,
              ...c
            },
            u
          ) => {
            const d = Ze(e, "table"),
              f = $e()(
                t,
                d,
                l && `${d}-${l}`,
                i && `${d}-${i}`,
                n &&
                  `${d}-${"string" == typeof n ? `striped-${n}` : "striped"}`,
                r && `${d}-bordered`,
                a && `${d}-borderless`,
                o && `${d}-hover`
              ),
              p = (0, Be.jsx)("table", { ...c, className: f, ref: u });
            if (s) {
              let e = `${d}-responsive`;
              return (
                "string" == typeof s && (e = `${e}-${s}`),
                (0, Be.jsx)("div", { className: e, children: p })
              );
            }
            return p;
          }
        ),
        au = ru;
      var ou = Math.pow(2, 31) - 1;
      function iu(e, t, n) {
        var r = n - Date.now();
        e.current =
          r <= ou
            ? setTimeout(t, r)
            : setTimeout(function () {
                return iu(e, t, n);
              }, ou);
      }
      function lu() {
        var e = pn(),
          n = (0, t.useRef)();
        return (
          nn(function () {
            return clearTimeout(n.current);
          }),
          (0, t.useMemo)(function () {
            var t = function () {
              return clearTimeout(n.current);
            };
            return {
              set: function (r, a) {
                void 0 === a && (a = 0),
                  e() &&
                    (t(),
                    a <= ou
                      ? (n.current = setTimeout(r, a))
                      : iu(n, r, Date.now() + a));
              },
              clear: t,
            };
          }, [])
        );
      }
      const su = () => {},
        cu = t.forwardRef((e, n) => {
          const {
              flip: a,
              offset: o,
              placement: i,
              containerPadding: l,
              popperConfig: s = {},
              transition: c,
            } = e,
            [u, d] = Xt(),
            [f, p] = Xt(),
            m = tn(d, n),
            h = wn(e.container),
            g = wn(e.target),
            [b, v] = (0, t.useState)(!e.show),
            y = Qo(
              g,
              u,
              Jo({
                placement: i,
                enableEvents: !!e.show,
                containerPadding: l || 5,
                flip: a,
                offset: o,
                arrowElement: f,
                popperConfig: s,
              })
            );
          e.show ? b && v(!1) : e.transition || b || v(!0);
          const E = (...t) => {
              v(!0), e.onExited && e.onExited(...t);
            },
            w = e.show || (c && !b);
          if (
            ((function (e, n, { disabled: r, clickTrigger: a } = {}) {
              const o = n || su;
              Yo(e, o, { disabled: r, clickTrigger: a });
              const i = Jt((e) => {
                27 === e.keyCode && o(e);
              });
              (0, t.useEffect)(() => {
                if (r || null == e) return;
                const t = Kt(Zo(e));
                let n = (t.defaultView || window).event;
                const a = cn(t, "keyup", (e) => {
                  e !== n ? i(e) : (n = void 0);
                });
                return () => {
                  a();
                };
              }, [e, r, i]);
            })(u, e.onHide, {
              disabled: !e.rootClose || e.rootCloseDisabled,
              clickTrigger: e.rootCloseEvent,
            }),
            !w)
          )
            return null;
          let x = e.children(
            Object.assign({}, y.attributes.popper, {
              style: y.styles.popper,
              ref: m,
            }),
            {
              popper: y,
              placement: i,
              show: !!e.show,
              arrowProps: Object.assign({}, y.attributes.arrow, {
                style: y.styles.arrow,
                ref: p,
              }),
            }
          );
          if (c) {
            const {
              onExit: t,
              onExiting: n,
              onEnter: r,
              onEntering: a,
              onEntered: o,
            } = e;
            x = (0, Be.jsx)(c, {
              in: e.show,
              appear: !0,
              onExit: t,
              onExiting: n,
              onExited: E,
              onEnter: r,
              onEntering: a,
              onEntered: o,
              children: x,
            });
          }
          return h ? r.createPortal(x, h) : null;
        });
      cu.displayName = "Overlay";
      const uu = cu,
        du = xt("popover-header"),
        fu = xt("popover-body");
      class pu extends t.Component {}
      function mu(e, t) {
        let n = e;
        return (
          "left" === e
            ? (n = t ? "end" : "start")
            : "right" === e && (n = t ? "start" : "end"),
          n
        );
      }
      const hu = t.forwardRef(
        (
          {
            bsPrefix: e,
            placement: t,
            className: n,
            style: r,
            children: a,
            body: o,
            arrowProps: i,
            popper: l,
            show: s,
            ...c
          },
          u
        ) => {
          const d = Ze(e, "popover"),
            f = Ge(),
            [p] = (null == t ? void 0 : t.split("-")) || [],
            m = mu(p, f);
          return (0, Be.jsxs)("div", {
            ref: u,
            role: "tooltip",
            style: r,
            "x-placement": p,
            className: $e()(n, d, p && `bs-popover-${m}`),
            ...c,
            children: [
              (0, Be.jsx)("div", { className: "popover-arrow", ...i }),
              o ? (0, Be.jsx)(fu, { children: a }) : a,
            ],
          });
        }
      );
      hu.defaultProps = { placement: "right" };
      const gu = Object.assign(hu, {
          Header: du,
          Body: fu,
          POPPER_OFFSET: [0, 8],
        }),
        bu = { transition: Jn, rootClose: !1, show: !1, placement: "top" },
        vu = t.forwardRef(
          ({ children: e, transition: n, popperConfig: r = {}, ...a }, o) => {
            const i = (0, t.useRef)({}),
              [l, s] = Xt(),
              [c, u] = (function (e) {
                const n = (0, t.useRef)(null),
                  r = Ze(void 0, "popover"),
                  a = (0, t.useMemo)(
                    () => ({
                      name: "offset",
                      options: {
                        offset: () =>
                          n.current && Cn(n.current, r)
                            ? e || gu.POPPER_OFFSET
                            : e || [0, 0],
                      },
                    }),
                    [e, r]
                  );
                return [n, [a]];
              })(a.offset),
              d = tn(o, c),
              f = !0 === n ? Jn : n || void 0,
              p = Jt((e) => {
                s(e),
                  null == r || null == r.onFirstUpdate || r.onFirstUpdate(e);
              });
            return (
              Br(() => {
                l &&
                  (null == i.current.scheduleUpdate ||
                    i.current.scheduleUpdate());
              }, [l]),
              (0, Be.jsx)(uu, {
                ...a,
                ref: d,
                popperConfig: {
                  ...r,
                  modifiers: u.concat(r.modifiers || []),
                  onFirstUpdate: p,
                },
                transition: f,
                children: (r, { arrowProps: a, popper: o, show: l }) => {
                  var s, c;
                  !(function (e, t) {
                    const { ref: n } = e,
                      { ref: r } = t;
                    (e.ref = n.__wrapped || (n.__wrapped = (e) => n(Zn(e)))),
                      (t.ref = r.__wrapped || (r.__wrapped = (e) => r(Zn(e))));
                  })(r, a);
                  const u = null == o ? void 0 : o.placement,
                    d = Object.assign(i.current, {
                      state: null == o ? void 0 : o.state,
                      scheduleUpdate: null == o ? void 0 : o.update,
                      placement: u,
                      outOfBoundaries:
                        (null == o ||
                        null == (s = o.state) ||
                        null == (c = s.modifiersData.hide)
                          ? void 0
                          : c.isReferenceHidden) || !1,
                    });
                  return "function" == typeof e
                    ? e({
                        ...r,
                        placement: u,
                        show: l,
                        ...(!n && l && { className: "show" }),
                        popper: d,
                        arrowProps: a,
                      })
                    : t.cloneElement(e, {
                        ...r,
                        placement: u,
                        arrowProps: a,
                        popper: d,
                        className: $e()(e.props.className, !n && l && "show"),
                        style: { ...e.props.style, ...r.style },
                      });
                },
              })
            );
          }
        );
      (vu.displayName = "Overlay"), (vu.defaultProps = bu);
      const yu = vu;
      function Eu(e, t, n) {
        const [r] = t,
          a = r.currentTarget,
          o = r.relatedTarget || r.nativeEvent[n];
        (o && o === a) || fn(a, o) || e(...t);
      }
      function wu({
        trigger: e,
        overlay: n,
        children: r,
        popperConfig: a = {},
        show: o,
        defaultShow: i = !1,
        onToggle: l,
        delay: s,
        placement: c,
        flip: u = c && -1 !== c.indexOf("auto"),
        ...d
      }) {
        const f = (0, t.useRef)(null),
          p = tn(f, r.ref),
          m = lu(),
          h = (0, t.useRef)(""),
          [g, b] = ca(o, i, l),
          v = (function (e) {
            return e && "object" == typeof e ? e : { show: e, hide: e };
          })(s),
          {
            onFocus: y,
            onBlur: E,
            onClick: w,
          } = "function" != typeof r ? t.Children.only(r).props : {},
          x = (0, t.useCallback)(() => {
            m.clear(),
              (h.current = "show"),
              v.show
                ? m.set(() => {
                    "show" === h.current && b(!0);
                  }, v.show)
                : b(!0);
          }, [v.show, b, m]),
          _ = (0, t.useCallback)(() => {
            m.clear(),
              (h.current = "hide"),
              v.hide
                ? m.set(() => {
                    "hide" === h.current && b(!1);
                  }, v.hide)
                : b(!1);
          }, [v.hide, b, m]),
          k = (0, t.useCallback)(
            (...e) => {
              x(), null == y || y(...e);
            },
            [x, y]
          ),
          N = (0, t.useCallback)(
            (...e) => {
              _(), null == E || E(...e);
            },
            [_, E]
          ),
          C = (0, t.useCallback)(
            (...e) => {
              b(!g), null == w || w(...e);
            },
            [w, b, g]
          ),
          T = (0, t.useCallback)(
            (...e) => {
              Eu(x, e, "fromElement");
            },
            [x]
          ),
          S = (0, t.useCallback)(
            (...e) => {
              Eu(_, e, "toElement");
            },
            [_]
          ),
          O = null == e ? [] : [].concat(e),
          P = {
            ref: (e) => {
              p(Zn(e));
            },
          };
        return (
          -1 !== O.indexOf("click") && (P.onClick = C),
          -1 !== O.indexOf("focus") && ((P.onFocus = k), (P.onBlur = N)),
          -1 !== O.indexOf("hover") &&
            ((P.onMouseOver = T), (P.onMouseOut = S)),
          (0, Be.jsxs)(Be.Fragment, {
            children: [
              "function" == typeof r ? r(P) : (0, t.cloneElement)(r, P),
              (0, Be.jsx)(yu, {
                ...d,
                show: g,
                onHide: _,
                flip: u,
                placement: c,
                popperConfig: a,
                target: f.current,
                children: n,
              }),
            ],
          })
        );
      }
      wu.defaultProps = { defaultShow: !1, trigger: ["hover", "focus"] };
      const xu = wu,
        _u = t.forwardRef(
          (
            {
              bsPrefix: e,
              placement: t,
              className: n,
              style: r,
              children: a,
              arrowProps: o,
              popper: i,
              show: l,
              ...s
            },
            c
          ) => {
            e = Ze(e, "tooltip");
            const u = Ge(),
              [d] = (null == t ? void 0 : t.split("-")) || [],
              f = mu(d, u);
            return (0, Be.jsxs)("div", {
              ref: c,
              style: r,
              role: "tooltip",
              "x-placement": d,
              className: $e()(n, e, `bs-tooltip-${f}`),
              ...s,
              children: [
                (0, Be.jsx)("div", { className: "tooltip-arrow", ...o }),
                (0, Be.jsx)("div", { className: `${e}-inner`, children: a }),
              ],
            });
          }
        );
      (_u.defaultProps = { placement: "right" }), (_u.displayName = "Tooltip");
      const ku = _u;
      var Nu = function (e) {
          var n = be((0, t.useState)(!1), 2),
            r = (n[0], n[1], be((0, t.useState)(null), 2)),
            a = (r[0], r[1], (0, t.useContext)(Ne)),
            o = a.store,
            i = a.actions;
          return (
            (0, t.useEffect)(function () {
              i.getOfertas();
            }, []),
            t.createElement(
              "div",
              { className: "container" },
              t.createElement(
                "div",
                { className: "text-center mx-5 px-5" },
                t.createElement(
                  "h1",
                  {
                    className:
                      "ps-5 pt-5 pb-3 mb-5 display-5 border-bottom border-secondary",
                  },
                  t.createElement("i", {
                    className: "fa-solid fa-hand-holding-dollar",
                  }),
                  " Ofertas de Compra"
                ),
                t.createElement(
                  au,
                  { striped: !0 },
                  t.createElement(
                    "thead",
                    null,
                    t.createElement(
                      "tr",
                      null,
                      t.createElement(
                        "th",
                        { style: { minWidth: "50px" } },
                        "Título"
                      ),
                      t.createElement(
                        "th",
                        { style: { minWidth: "50px" } },
                        "Categoría"
                      ),
                      t.createElement(
                        "th",
                        { style: { minWidth: "50px" } },
                        "Se Ofrecen"
                      ),
                      t.createElement(
                        "th",
                        { style: { minWidth: "50px" } },
                        "Descripción"
                      ),
                      t.createElement(
                        "th",
                        { style: { minWidth: "50px" } },
                        "Contacto"
                      )
                    )
                  ),
                  t.createElement(
                    "tbody",
                    null,
                    o.ofertas.map(function (e) {
                      return t.createElement(
                        "tr",
                        { key: e.id },
                        t.createElement("td", null, e.titulo),
                        t.createElement("td", null, e.categoria),
                        t.createElement("td", null, e.oferta),
                        t.createElement("td", null, e.descripcion),
                        t.createElement(
                          "td",
                          null,
                          t.createElement(
                            xu,
                            {
                              key: e.id,
                              placement: "top",
                              overlay: t.createElement(
                                ku,
                                { id: "tooltip-top" },
                                e.user_name + " " + e.user_lastname,
                                t.createElement("br", null),
                                e.user_email,
                                t.createElement("br", null),
                                e.user_phone
                              ),
                            },
                            t.createElement(
                              Xe,
                              { variant: "secondary" },
                              "Contacto"
                            )
                          )
                        )
                      );
                    })
                  )
                )
              )
            )
          );
        },
        Cu = n(965),
        Tu = {};
      (Tu.styleTagTransform = h()),
        (Tu.setAttributes = d()),
        (Tu.insert = c().bind(null, "head")),
        (Tu.domAPI = l()),
        (Tu.insertStyleElement = p()),
        o()(Cu.Z, Tu),
        Cu.Z && Cu.Z.locals && Cu.Z.locals;
      var Su = function () {
          return t.createElement(
            t.Fragment,
            null,
            t.createElement(
              "div",
              { className: "about-section" },
              t.createElement("h1", null, "¿Quienes somos?"),
              t.createElement(
                "p",
                null,
                "Some text about who we are and what we do."
              ),
              t.createElement(
                "p",
                null,
                "Una nueva propuesta en el mecado de compra-venta. Su principal caracteristica es proveer al usuario de una interfaz simple que le permita intercambiar sus productos y proponer ofertas."
              )
            ),
            t.createElement(
              "h2",
              { className: "text-center fw-bold my-4 fs-1 p-2" },
              "Nuestro Equipo"
            ),
            t.createElement(
              "div",
              { className: "container py-5 border-top " },
              t.createElement(
                "div",
                { className: "row d-flex justify-content-center " },
                t.createElement(
                  "div",
                  { className: "col-8" },
                  t.createElement(
                    "p",
                    { className: "fs-1 text fw-bolder" },
                    "Francisco Orozco",
                    " ",
                    t.createElement(
                      "span",
                      { className: "text-secondary " },
                      "CEO"
                    ),
                    " "
                  ),
                  t.createElement(
                    "p",
                    { className: "fs-5 text" },
                    "37 años, Ingeniero de Producción de la USB, con mas de 13 años de experiencia en marketing y ventas, papá de Sebastián"
                  ),
                  t.createElement(
                    "p",
                    { className: "fs-5 text" },
                    "Siempre viculado a la tecnología"
                  )
                ),
                t.createElement(
                  "div",
                  { className: "col-4 w-auto" },
                  t.createElement("img", {
                    src: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png",
                    alt: "imagen",
                    width: "300px",
                    style: { "border-radius": "50%" },
                  })
                )
              )
            ),
            t.createElement(
              "div",
              { className: "container py-5 border-top " },
              t.createElement(
                "div",
                { className: "row d-flex justify-content-center " },
                t.createElement(
                  "div",
                  { className: "col-4 w-auto" },
                  t.createElement("img", {
                    src: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png",
                    alt: "imagen",
                    width: "300px",
                    style: { "border-radius": "50%" },
                  })
                ),
                t.createElement(
                  "div",
                  { className: "col-8" },
                  t.createElement(
                    "p",
                    { className: "fs-1 text fw-bolder" },
                    "Piero Mastrogiacomo",
                    t.createElement(
                      "span",
                      { className: "text-secondary" },
                      " CEO"
                    ),
                    " "
                  ),
                  t.createElement(
                    "p",
                    { className: "fs-5 text" },
                    "Medico de profesión, 40 años. Orgulloso padre."
                  ),
                  t.createElement(
                    "p",
                    { className: "fs-5 text" },
                    "Amante de la tecnologia, en busca de un giro profesional de 180 grados."
                  )
                )
              )
            ),
            t.createElement(
              "div",
              { className: "container py-5 border-top " },
              t.createElement(
                "div",
                { className: "row d-flex justify-content-center " },
                t.createElement(
                  "div",
                  { className: "col-8" },
                  t.createElement(
                    "p",
                    { className: "fs-1 text fw-bolder" },
                    "Javier Klie",
                    " ",
                    t.createElement(
                      "span",
                      { className: "text-secondary " },
                      "CEO"
                    ),
                    " "
                  ),
                  t.createElement(
                    "p",
                    { className: "fs-5 text" },
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, id dolorem molestiae maiores autem, minus amet libero nihil odit consectetur, provident magni harum fuga tempore sunt praesentium magnam architecto. Quibusdam."
                  )
                ),
                t.createElement(
                  "div",
                  { className: "col-4 w-auto" },
                  t.createElement("img", {
                    src: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png",
                    alt: "imagen",
                    width: "300px",
                    style: { "border-radius": "50%" },
                  })
                )
              )
            ),
            t.createElement(
              "div",
              { className: "container py-5 border-top " },
              t.createElement(
                "div",
                { className: "row d-flex justify-content-center " },
                t.createElement(
                  "div",
                  { className: "col-4 w-auto" },
                  t.createElement("img", {
                    src: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png",
                    alt: "imagen",
                    width: "300px",
                    style: { "border-radius": "50%" },
                  })
                ),
                t.createElement(
                  "div",
                  { className: "col-8" },
                  t.createElement(
                    "p",
                    { className: "fs-1 text fw-bolder" },
                    "Luis Camargo",
                    t.createElement(
                      "span",
                      { className: "text-secondary" },
                      " CEO"
                    ),
                    " "
                  ),
                  t.createElement(
                    "p",
                    { className: "fs-5 text" },
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, id dolorem molestiae maiores autem, minus amet libero nihil odit consectetur, provident magni harum fuga tempore sunt praesentium magnam architecto. Quibusdam."
                  )
                )
              )
            ),
            t.createElement(
              "div",
              { className: "container py-5 border-top " },
              t.createElement(
                "div",
                { className: "row d-flex justify-content-center " },
                t.createElement(
                  "div",
                  { className: "col-4 w-auto" },
                  t.createElement("img", {
                    src: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png",
                    alt: "imagen",
                    width: "300px",
                    style: { "border-radius": "50%" },
                  })
                ),
                t.createElement(
                  "div",
                  { className: "col-8" },
                  t.createElement(
                    "p",
                    { className: "fs-1 text fw-bolder" },
                    "Tecnologias que usamos",
                    t.createElement(
                      "span",
                      { className: "text-secondary" },
                      " CEO"
                    ),
                    " "
                  )
                )
              )
            )
          );
        },
        Ou = n(114),
        Pu = {};
      (Pu.styleTagTransform = h()),
        (Pu.setAttributes = d()),
        (Pu.insert = c().bind(null, "head")),
        (Pu.domAPI = l()),
        (Pu.insertStyleElement = p()),
        o()(Ou.Z, Pu),
        Ou.Z && Ou.Z.locals && Ou.Z.locals;
      var Au = function () {
          return t.createElement(
            t.Fragment,
            null,
            t.createElement(
              "div",
              { className: "container-fluid px-0 mt-5" },
              t.createElement(
                "nav",
                {
                  className:
                    "navbar navbar-expand-lg navbar-light bg-light navbar-fixed",
                },
                t.createElement(
                  "div",
                  { className: "container-fluid d-flex" },
                  t.createElement(
                    "a",
                    { className: "navbar-brand", href: "#" },
                    "SECCIONES"
                  ),
                  t.createElement(
                    "ul",
                    { className: "nav nav-tabs", id: "myTab", role: "tablist" },
                    t.createElement(
                      "li",
                      { className: "nav-item ", role: "presentation" },
                      " ",
                      t.createElement(
                        "a",
                        {
                          className: "nav-link active",
                          id: "home-tab",
                          "data-toggle": "tab",
                          href: "#home",
                          role: "tab",
                          "aria-controls": "home",
                          "aria-selected": "true",
                        },
                        t.createElement("i", {
                          className: "fa-solid fa-comments-dollar",
                        }),
                        "  Ofertas"
                      ),
                      " "
                    ),
                    t.createElement(
                      "li",
                      { className: "nav-item", role: "presentation" },
                      " ",
                      t.createElement(
                        "a",
                        {
                          className: "nav-link",
                          id: "profile-tab",
                          "data-toggle": "tab",
                          href: "#profile",
                          role: "tab",
                          "aria-controls": "profile",
                          "aria-selected": "false",
                        },
                        t.createElement("i", {
                          className: "fa-solid fa-hand-holding-dollar",
                        }),
                        "  Ventas"
                      ),
                      " "
                    ),
                    t.createElement(
                      "li",
                      { className: "nav-item", role: "presentation" },
                      " ",
                      t.createElement(
                        "a",
                        {
                          className: "nav-link",
                          id: "contact-tab",
                          "data-toggle": "tab",
                          href: "#contact",
                          role: "tab",
                          "aria-controls": "contact",
                          "aria-selected": "false",
                        },
                        " ",
                        t.createElement("i", {
                          className: "fa-solid fa-handshake",
                        }),
                        " Intercambios"
                      ),
                      " "
                    ),
                    t.createElement(
                      "li",
                      { className: "nav-item", role: "presentation" },
                      " ",
                      t.createElement(
                        "a",
                        {
                          className: "nav-link",
                          id: "contact-tab",
                          "data-toggle": "tab",
                          href: "#contact",
                          role: "tab",
                          "aria-controls": "contact",
                          "aria-selected": "false",
                        },
                        t.createElement("i", {
                          className: "fa-solid fa-gavel",
                        }),
                        " Subastas"
                      ),
                      " "
                    )
                  )
                )
              )
            )
          );
        },
        ju = n(749),
        Iu = {};
      (Iu.styleTagTransform = h()),
        (Iu.setAttributes = d()),
        (Iu.insert = c().bind(null, "head")),
        (Iu.domAPI = l()),
        (Iu.insertStyleElement = p()),
        o()(ju.Z, Iu),
        ju.Z && ju.Z.locals && ju.Z.locals;
      var Lu = function () {
        return t.createElement(
          "div",
          { className: "container light-style flex-grow-1 container-p-y" },
          t.createElement(
            "h4",
            { className: "font-weight-bold py-3 mb-4 border-bottom" },
            "Tu Cuenta"
          ),
          t.createElement(
            "div",
            { className: "card overflow-hidden" },
            t.createElement(
              "div",
              { className: "row" },
              t.createElement(
                "div",
                { className: "col-md-3 pt-0" },
                t.createElement(
                  "div",
                  {
                    className:
                      "list-group list-group-flush account-settings-links",
                  },
                  t.createElement(
                    "a",
                    {
                      className:
                        "list-group-item list-group-item-action active",
                      "data-bs-toggle": "list",
                      role: "tab",
                      "aria-controls": "account-general",
                      href: "#account-general",
                      id: "list-general-list",
                    },
                    "General"
                  ),
                  t.createElement(
                    "a",
                    {
                      className: "list-group-item list-group-item-action",
                      "data-bs-toggle": "list",
                      role: "tab",
                      "aria-controls": "account-change-password",
                      href: "#account-change-password",
                      id: "list-password-list",
                    },
                    "Cambiar contraseña"
                  ),
                  t.createElement(
                    "a",
                    {
                      className: "list-group-item list-group-item-action",
                      "data-bs-toggle": "list",
                      role: "tab",
                      "aria-controls": "account-info",
                      href: "#account-info",
                      id: "list-info-list",
                    },
                    "Info"
                  ),
                  t.createElement(
                    "a",
                    {
                      className: "list-group-item list-group-item-action",
                      "data-bs-toggle": "list",
                      role: "tab",
                      "aria-controls": "account-security",
                      id: "list-security-list",
                      href: "#account-security",
                    },
                    "Seguridad y Privacidad"
                  ),
                  t.createElement(
                    "a",
                    {
                      className: "list-group-item list-group-item-action",
                      "data-bs-toggle": "list",
                      role: "tab",
                      "aria-controls": "account-notifications",
                      id: "list-notification-list",
                      href: "#account-notifications",
                    },
                    "Notificaciones"
                  )
                )
              ),
              t.createElement(
                "div",
                { className: "col-md-9" },
                t.createElement(
                  "div",
                  { className: "tab-content" },
                  t.createElement(
                    "div",
                    {
                      className: "tab-pane fade active show",
                      id: "account-general",
                    },
                    t.createElement(
                      "div",
                      { className: "card-body media align-items-center" },
                      t.createElement("img", {
                        src: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png",
                        alt: "",
                        className: "d-block ui-w-80 mb-4",
                      }),
                      t.createElement(
                        "div",
                        { className: "media-body ml-4" },
                        t.createElement(
                          "label",
                          { className: "btn btn-outline-primary" },
                          "Subir imagen",
                          t.createElement("input", {
                            type: "file",
                            className: "account-settings-fileinput",
                          })
                        ),
                        " ",
                        " ",
                        t.createElement(
                          "button",
                          {
                            type: "button",
                            className: "btn btn-default md-btn-flat",
                          },
                          "Reset"
                        ),
                        t.createElement(
                          "div",
                          { className: "text-light small mt-1" },
                          "Allowed JPG, GIF or PNG. Max size of 800K"
                        )
                      )
                    ),
                    t.createElement("hr", { className: "border-light m-0" }),
                    t.createElement(
                      "div",
                      { className: "card-body" },
                      t.createElement(
                        "div",
                        { className: "form-group" },
                        t.createElement(
                          "label",
                          { className: "form-label" },
                          "Username"
                        ),
                        t.createElement("input", {
                          type: "text",
                          className: "form-control mb-2",
                        })
                      ),
                      t.createElement(
                        "div",
                        { className: "form-group" },
                        t.createElement(
                          "label",
                          { className: "form-label" },
                          "Name"
                        ),
                        t.createElement("input", {
                          type: "text",
                          className: "form-control mb-2",
                        })
                      ),
                      t.createElement(
                        "div",
                        { className: "form-group" },
                        t.createElement(
                          "label",
                          { className: "form-label" },
                          "E-mail"
                        ),
                        t.createElement("input", {
                          type: "text",
                          className: "form-control mb-2",
                        }),
                        t.createElement(
                          "div",
                          { className: "alert alert-warning mt-3" },
                          "Your email is not confirmed. Please check your inbox.",
                          t.createElement("br", null),
                          t.createElement(
                            "a",
                            { href: "javascript:void(0)" },
                            "Resend confirmation"
                          )
                        )
                      )
                    )
                  ),
                  t.createElement(
                    "div",
                    {
                      className: "tab-pane fade",
                      id: "account-change-password",
                      "aria-labelledby": "list-password-list",
                    },
                    t.createElement(
                      "div",
                      { className: "card-body pb-2" },
                      t.createElement(
                        "div",
                        { className: "form-group" },
                        t.createElement(
                          "label",
                          { className: "form-label" },
                          "Current password"
                        ),
                        t.createElement("input", {
                          type: "password",
                          className: "form-control",
                        })
                      ),
                      t.createElement(
                        "div",
                        { className: "form-group" },
                        t.createElement(
                          "label",
                          { className: "form-label" },
                          "New password"
                        ),
                        t.createElement("input", {
                          type: "password",
                          className: "form-control",
                        })
                      ),
                      t.createElement(
                        "div",
                        { className: "form-group" },
                        t.createElement(
                          "label",
                          { className: "form-label" },
                          "Repeat new password"
                        ),
                        t.createElement("input", {
                          type: "password",
                          className: "form-control",
                        })
                      )
                    )
                  ),
                  t.createElement(
                    "div",
                    { className: "tab-pane fade", id: "account-info" },
                    t.createElement(
                      "div",
                      { className: "card-body pb-2" },
                      t.createElement(
                        "div",
                        { className: "form-group" },
                        t.createElement(
                          "label",
                          { className: "form-label" },
                          "Bio"
                        ),
                        t.createElement(
                          "textarea",
                          { className: "form-control", rows: "5" },
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc arcu, dignissim sit amet sollicitudin iaculis, vehicula id urna. Sed luctus urna nunc. Donec fermentum, magna sit amet rutrum pretium, turpis dolor molestie diam, ut lacinia diam risus eleifend sapien. Curabitur ac nibh nulla. Maecenas nec augue placerat, viverra tellus non, pulvinar risus."
                        )
                      ),
                      t.createElement(
                        "div",
                        { className: "form-group" },
                        t.createElement(
                          "label",
                          { className: "form-label" },
                          "Birthday"
                        ),
                        t.createElement("input", {
                          type: "text",
                          className: "form-control",
                          value: "May 3, 1995",
                        })
                      ),
                      t.createElement(
                        "div",
                        { className: "form-group" },
                        t.createElement(
                          "label",
                          { className: "form-label" },
                          "Country"
                        ),
                        t.createElement(
                          "select",
                          { className: "custom-select" },
                          t.createElement("option", null, "USA"),
                          t.createElement("option", { selected: "" }, "Canada"),
                          t.createElement("option", null, "UK"),
                          t.createElement("option", null, "Germany"),
                          t.createElement("option", null, "France")
                        )
                      )
                    ),
                    t.createElement("hr", { className: "border-light m-0" }),
                    t.createElement(
                      "div",
                      { className: "card-body pb-2" },
                      t.createElement("h6", { className: "mb-4" }, "Contacts"),
                      t.createElement(
                        "div",
                        { className: "form-group" },
                        t.createElement(
                          "label",
                          { className: "form-label" },
                          "Phone"
                        ),
                        t.createElement("input", {
                          type: "text",
                          className: "form-control",
                          value: "+0 (123) 456 7891",
                        })
                      ),
                      t.createElement(
                        "div",
                        { className: "form-group" },
                        t.createElement(
                          "label",
                          { className: "form-label" },
                          "Website"
                        ),
                        t.createElement("input", {
                          type: "text",
                          className: "form-control",
                          value: "",
                        })
                      )
                    )
                  ),
                  t.createElement(
                    "div",
                    { className: "tab-pane fade", id: "account-social-links" },
                    t.createElement(
                      "div",
                      { className: "card-body pb-2" },
                      t.createElement(
                        "div",
                        { className: "form-group" },
                        t.createElement(
                          "label",
                          { className: "form-label" },
                          "Twitter"
                        ),
                        t.createElement("input", {
                          type: "text",
                          className: "form-control",
                          value: "https://twitter.com/user",
                        })
                      ),
                      t.createElement(
                        "div",
                        { className: "form-group" },
                        t.createElement(
                          "label",
                          { className: "form-label" },
                          "Facebook"
                        ),
                        t.createElement("input", {
                          type: "text",
                          className: "form-control",
                          value: "https://www.facebook.com/user",
                        })
                      ),
                      t.createElement(
                        "div",
                        { className: "form-group" },
                        t.createElement(
                          "label",
                          { className: "form-label" },
                          "Google+"
                        ),
                        t.createElement("input", {
                          type: "text",
                          className: "form-control",
                          value: "",
                        })
                      ),
                      t.createElement(
                        "div",
                        { className: "form-group" },
                        t.createElement(
                          "label",
                          { className: "form-label" },
                          "LinkedIn"
                        ),
                        t.createElement("input", {
                          type: "text",
                          className: "form-control",
                          value: "",
                        })
                      ),
                      t.createElement(
                        "div",
                        { className: "form-group" },
                        t.createElement(
                          "label",
                          { className: "form-label" },
                          "Instagram"
                        ),
                        t.createElement("input", {
                          type: "text",
                          className: "form-control",
                          value: "https://www.instagram.com/user",
                        })
                      )
                    )
                  ),
                  t.createElement(
                    "div",
                    { className: "tab-pane fade", id: "account-connections" },
                    t.createElement(
                      "div",
                      { className: "card-body" },
                      t.createElement(
                        "button",
                        { type: "button", className: "btn btn-twitter" },
                        "Connect to ",
                        t.createElement("strong", null, "Twitter")
                      )
                    ),
                    t.createElement("hr", { className: "border-light m-0" }),
                    t.createElement(
                      "div",
                      { className: "card-body" },
                      t.createElement(
                        "h5",
                        { className: "mb-2" },
                        t.createElement(
                          "a",
                          {
                            href: "javascript:void(0)",
                            className: "float-right text-muted text-tiny",
                          },
                          t.createElement("i", {
                            className: "ion ion-md-close",
                          }),
                          " Remove"
                        ),
                        t.createElement("i", {
                          className: "ion ion-logo-google text-google",
                        }),
                        "You are connected to Google:"
                      ),
                      "nmaxwell@mail.com"
                    ),
                    t.createElement("hr", { className: "border-light m-0" }),
                    t.createElement(
                      "div",
                      { className: "card-body" },
                      t.createElement(
                        "button",
                        { type: "button", className: "btn btn-facebook" },
                        "Connect to ",
                        t.createElement("strong", null, "Facebook")
                      )
                    ),
                    t.createElement("hr", { className: "border-light m-0" }),
                    t.createElement(
                      "div",
                      { className: "card-body" },
                      t.createElement(
                        "button",
                        { type: "button", className: "btn btn-instagram" },
                        "Connect to ",
                        t.createElement("strong", null, "Instagram")
                      )
                    )
                  ),
                  t.createElement(
                    "div",
                    { className: "tab-pane fade", id: "account-notifications" },
                    t.createElement(
                      "div",
                      { className: "card-body pb-2" },
                      t.createElement("h6", { className: "mb-4" }, "Activity"),
                      t.createElement(
                        "div",
                        { className: "form-group" },
                        t.createElement(
                          "label",
                          { className: "switcher" },
                          t.createElement("input", {
                            type: "checkbox",
                            className: "switcher-input",
                            checked: "",
                          }),
                          t.createElement(
                            "span",
                            { className: "switcher-indicator" },
                            t.createElement("span", {
                              className: "switcher-yes",
                            }),
                            t.createElement("span", {
                              className: "switcher-no",
                            })
                          ),
                          t.createElement(
                            "span",
                            { className: "switcher-label" },
                            "Email me when someone comments on my article"
                          )
                        )
                      ),
                      t.createElement(
                        "div",
                        { className: "form-group" },
                        t.createElement(
                          "label",
                          { className: "switcher" },
                          t.createElement("input", {
                            type: "checkbox",
                            className: "switcher-input",
                            checked: "",
                          }),
                          t.createElement(
                            "span",
                            { className: "switcher-indicator" },
                            t.createElement("span", {
                              className: "switcher-yes",
                            }),
                            t.createElement("span", {
                              className: "switcher-no",
                            })
                          ),
                          t.createElement(
                            "span",
                            { className: "switcher-label" },
                            "Email me when someone answers on my forum thread"
                          )
                        )
                      ),
                      t.createElement(
                        "div",
                        { className: "form-group" },
                        t.createElement(
                          "label",
                          { className: "switcher" },
                          t.createElement("input", {
                            type: "checkbox",
                            className: "switcher-input",
                          }),
                          t.createElement(
                            "span",
                            { className: "switcher-indicator" },
                            t.createElement("span", {
                              className: "switcher-yes",
                            }),
                            t.createElement("span", {
                              className: "switcher-no",
                            })
                          ),
                          t.createElement(
                            "span",
                            { className: "switcher-label" },
                            "Email me when someone follows me"
                          )
                        )
                      )
                    ),
                    t.createElement("hr", { className: "border-light m-0" }),
                    t.createElement(
                      "div",
                      { className: "card-body pb-2" },
                      t.createElement(
                        "h6",
                        { className: "mb-4" },
                        "Application"
                      ),
                      t.createElement(
                        "div",
                        { className: "form-group" },
                        t.createElement(
                          "label",
                          { className: "switcher" },
                          t.createElement("input", {
                            type: "checkbox",
                            className: "switcher-input",
                            checked: "",
                          }),
                          t.createElement(
                            "span",
                            { className: "switcher-indicator" },
                            t.createElement("span", {
                              className: "switcher-yes",
                            }),
                            t.createElement("span", {
                              className: "switcher-no",
                            })
                          ),
                          t.createElement(
                            "span",
                            { className: "switcher-label" },
                            "News and announcements"
                          )
                        )
                      ),
                      t.createElement(
                        "div",
                        { className: "form-group" },
                        t.createElement(
                          "label",
                          { className: "switcher" },
                          t.createElement("input", {
                            type: "checkbox",
                            className: "switcher-input",
                          }),
                          t.createElement(
                            "span",
                            { className: "switcher-indicator" },
                            t.createElement("span", {
                              className: "switcher-yes",
                            }),
                            t.createElement("span", {
                              className: "switcher-no",
                            })
                          ),
                          t.createElement(
                            "span",
                            { className: "switcher-label" },
                            "Weekly product updates"
                          )
                        )
                      ),
                      t.createElement(
                        "div",
                        { className: "form-group" },
                        t.createElement(
                          "label",
                          { className: "switcher" },
                          t.createElement("input", {
                            type: "checkbox",
                            className: "switcher-input",
                            checked: "",
                          }),
                          t.createElement(
                            "span",
                            { className: "switcher-indicator" },
                            t.createElement("span", {
                              className: "switcher-yes",
                            }),
                            t.createElement("span", {
                              className: "switcher-no",
                            })
                          ),
                          t.createElement(
                            "span",
                            { className: "switcher-label" },
                            "Weekly blog digest"
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          ),
          t.createElement(
            "div",
            { className: "d-flex flex-end justify-content-end m-3" },
            t.createElement(
              "button",
              { type: "button", className: "btn btn-primary" },
              "Save changes"
            ),
            " ",
            t.createElement(
              "button",
              { type: "button", className: "btn btn-default" },
              "Cancel"
            )
          )
        );
      };
      const Du =
        ((Ru = function () {
          var e = (0, t.useContext)(Ne);
          return (
            e.store,
            e.actions,
            t.createElement(
              "div",
              null,
              t.createElement(
                ee,
                { basename: "/" },
                t.createElement(
                  pe,
                  null,
                  t.createElement(Gc, null),
                  t.createElement(
                    G,
                    null,
                    t.createElement(K, {
                      element: t.createElement(_r, null),
                      path: "/",
                    }),
                    t.createElement(K, {
                      element: t.createElement(Nr, null),
                      path: "/demo",
                    }),
                    t.createElement(K, {
                      element: t.createElement(tt, null),
                      path: "/computadoras",
                    }),
                    t.createElement(K, {
                      element: t.createElement(nt, null),
                      path: "/celulares",
                    }),
                    t.createElement(K, {
                      element: t.createElement(Au, null),
                      path: "/Secciones",
                    }),
                    t.createElement(K, {
                      element: t.createElement(zr, null),
                      path: "/singleComp/:id",
                    }),
                    t.createElement(K, {
                      element: t.createElement(tu, null),
                      path: "/Publish",
                    }),
                    t.createElement(K, {
                      element: t.createElement(nu, null),
                      path: "/Buy",
                    }),
                    t.createElement(K, {
                      element: t.createElement(Nu, null),
                      path: "/Oferts",
                    }),
                    t.createElement(K, {
                      element: t.createElement(Su, null),
                      path: "/AboutUs",
                    }),
                    t.createElement(K, {
                      element: t.createElement(Lu, null),
                      path: "/Account",
                    }),
                    t.createElement(K, {
                      element: t.createElement("h1", null, "Not found!"),
                    })
                  ),
                  t.createElement(Yc, null)
                )
              )
            )
          );
        }),
        function (e) {
          var n,
            r,
            a,
            o,
            i,
            l,
            s,
            c = be(
              (0, t.useState)(
                ((i = (n = {
                  getStore: function () {
                    return u.store;
                  },
                  getActions: function () {
                    return u.actions;
                  },
                  setStore: function (e) {
                    return d({
                      store: Object.assign(u.store, e),
                      actions: ke({}, u.actions),
                    });
                  },
                }).getStore),
                (l = n.getActions),
                (s = n.setStore),
                {
                  store: me(
                    {
                      token: null,
                      message: null,
                      notification: void 0,
                      demo: [
                        {
                          title: "FIRST",
                          background: "white",
                          initial: "white",
                        },
                        {
                          title: "SECOND",
                          background: "white",
                          initial: "white",
                        },
                      ],
                      usuarios: [],
                      favoritos: [],
                      computadoras: [],
                      computadora: [],
                      celulares: [],
                      celular: [],
                      ofertas: [],
                      searchText: "",
                      searchResults: [],
                      imageUrl: [],
                    },
                    "favoritos",
                    []
                  ),
                  actions: {
                    setSearchResults: function (e) {
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : void 0,
                        n = i(),
                        r = [];
                      r = t ? Ee(n[t]) : n.computadoras.concat(n.celulares);
                      var a = e.toLowerCase(),
                        o = r.filter(function (e) {
                          return e.titulo.includes(a);
                        });
                      console.log(o), s({ searchResults: o });
                    },
                    login:
                      ((o = ye(
                        xe().mark(function e(t, n) {
                          var r, a, o, i;
                          return xe().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (r = {
                                        method: "POST",
                                        headers: {
                                          "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify({
                                          email: t,
                                          password: n,
                                        }),
                                      }),
                                      (e.prev = 1),
                                      (e.next = 4),
                                      fetch(
                                        "".concat(
                                          "https://3001-frako23-haztuofertacom-qyfg8y833bh.ws-us77.gitpod.io",
                                          "/api/token"
                                        ),
                                        r
                                      )
                                    );
                                  case 4:
                                    if (200 === (a = e.sent).status) {
                                      e.next = 11;
                                      break;
                                    }
                                    return (e.next = 8), a.json();
                                  case 8:
                                    return (
                                      (o = e.sent),
                                      alert(o.msg),
                                      e.abrupt("return", !1)
                                    );
                                  case 11:
                                    return (e.next = 13), a.json();
                                  case 13:
                                    return (
                                      (i = e.sent),
                                      console.log("Esto vino del backend", i),
                                      sessionStorage.setItem(
                                        "token",
                                        i.access_token
                                      ),
                                      s({ token: i.access_token }),
                                      e.abrupt("return", !0)
                                    );
                                  case 20:
                                    (e.prev = 20),
                                      (e.t0 = e.catch(1)),
                                      console.error(
                                        "Hubo un error al hacer login in"
                                      );
                                  case 23:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            null,
                            [[1, 20]]
                          );
                        })
                      )),
                      function (e, t) {
                        return o.apply(this, arguments);
                      }),
                    syncTokenFromSessionStore: function () {
                      var e = sessionStorage.getItem("token");
                      console.log(
                        "La aplicacion acaba de cargar, sincronizando el token de session storage"
                      ),
                        e && "" != e && null != e && s({ token: e });
                    },
                    signup:
                      ((a = ye(
                        xe().mark(function e(t, n, r, a, o) {
                          var l, s, c, u;
                          return xe().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      i(),
                                      (l = {
                                        method: "POST",
                                        headers: {
                                          "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify({
                                          name: t,
                                          lastname: n,
                                          phone: r,
                                          email: a,
                                          password: o,
                                        }),
                                      }),
                                      (e.prev = 2),
                                      (e.next = 5),
                                      fetch(
                                        "".concat(
                                          "https://3001-frako23-haztuofertacom-qyfg8y833bh.ws-us77.gitpod.io",
                                          "/api/users"
                                        ),
                                        l
                                      )
                                    );
                                  case 5:
                                    if ((s = e.sent).ok) {
                                      e.next = 12;
                                      break;
                                    }
                                    return (e.next = 9), s.json();
                                  case 9:
                                    return (
                                      (c = e.sent),
                                      alert(c),
                                      e.abrupt("return", !1)
                                    );
                                  case 12:
                                    return (e.next = 14), s.json();
                                  case 14:
                                    return (
                                      (u = e.sent),
                                      console.log(
                                        "This came from the backend",
                                        u
                                      ),
                                      e.abrupt("return", !0)
                                    );
                                  case 19:
                                    (e.prev = 19),
                                      (e.t0 = e.catch(2)),
                                      console.error(
                                        "There has been an error login in"
                                      );
                                  case 22:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            null,
                            [[2, 19]]
                          );
                        })
                      )),
                      function (e, t, n, r, o) {
                        return a.apply(this, arguments);
                      }),
                    logout: function () {
                      sessionStorage.removeItem("token"),
                        console.log("Se han borrado todos los tokens"),
                        s({ token: null });
                    },
                    addUrl: function (e) {
                      i(), s({ imageUrl: e });
                    },
                    postImgurl: function (e) {
                      var t = "".concat(
                        "https://3001-frako23-haztuofertacom-qyfg8y833bh.ws-us77.gitpod.io",
                        "/api/imgurl"
                      );
                      i(),
                        fetch(t, {
                          method: "POST",
                          body: JSON.stringify(e),
                          headers: { "Content-Type": "application/json" },
                        })
                          .then(function (e) {
                            if (!e.ok) throw Error(e.statusText);
                            return e.json();
                          })
                          .then(function (e) {
                            return console.log("Success:", e);
                          })
                          .catch(function (e) {
                            return console.error(e);
                          });
                    },
                    getImgurl: function () {
                      var e = "".concat(
                        "https://3001-frako23-haztuofertacom-qyfg8y833bh.ws-us77.gitpod.io",
                        "/api/imgurl"
                      );
                      fetch(e)
                        .then(function (e) {
                          if (e.ok) return e.json();
                          throw new Error("Ha ocurrido un error");
                        })
                        .then(function (e) {
                          return s({ imageUrl: e });
                        })
                        .catch(function (e) {
                          return console.log(e);
                        });
                    },
                    getUsuarios: function () {
                      var e = "".concat(
                        "https://3001-frako23-haztuofertacom-qyfg8y833bh.ws-us77.gitpod.io",
                        "/api/users"
                      );
                      fetch(e)
                        .then(function (e) {
                          if (e.ok) return e.json();
                          throw new Error("Ha ocurrido un error");
                        })
                        .then(function (e) {
                          return s({ usuarios: e });
                        })
                        .catch(function (e) {
                          return console.log(e);
                        });
                    },
                    getComputadoras: function () {
                      var e = "".concat(
                        "https://3001-frako23-haztuofertacom-qyfg8y833bh.ws-us77.gitpod.io",
                        "/api/get_computadoras"
                      );
                      fetch(e)
                        .then(function (e) {
                          if (e.ok) return e.json();
                          throw new Error("Ha ocurrido un error");
                        })
                        .then(function (e) {
                          return s({ computadoras: e });
                        })
                        .catch(function (e) {
                          return console.log(e);
                        });
                    },
                    getComputadoraId: function (e) {
                      var t = ""
                        .concat(
                          "https://3001-frako23-haztuofertacom-qyfg8y833bh.ws-us77.gitpod.io",
                          "/api/get_computadora_id/"
                        )
                        .concat(e);
                      fetch(t)
                        .then(function (e) {
                          if (e.ok) return e.json();
                          throw new Error("Ha ocurrido un error");
                        })
                        .then(function (e) {
                          return s({ computadora: e });
                        })
                        .catch(function (e) {
                          return console.log(e);
                        });
                    },
                    postComputadoras: function (e) {
                      var t = "".concat(
                          "https://3001-frako23-haztuofertacom-qyfg8y833bh.ws-us77.gitpod.io",
                          "/api/post_computadoras"
                        ),
                        n = i();
                      fetch(t, {
                        method: "POST",
                        body: JSON.stringify(e),
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: "Bearer " + n.token,
                        },
                      })
                        .then(function (e) {
                          if (!e.ok) throw Error(e.statusText);
                          return e.json();
                        })
                        .then(function (e) {
                          return console.log("Success:", e);
                        })
                        .catch(function (e) {
                          return console.error(e);
                        });
                    },
                    postCelulares: function (e) {
                      var t = "".concat(
                          "https://3001-frako23-haztuofertacom-qyfg8y833bh.ws-us77.gitpod.io",
                          "/api/post_celulares"
                        ),
                        n = i();
                      fetch(t, {
                        method: "POST",
                        body: JSON.stringify(e),
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: "Bearer " + n.token,
                        },
                      })
                        .then(function (e) {
                          if (!e.ok) throw Error(e.statusText);
                          return e.json();
                        })
                        .then(function (e) {
                          return console.log("Success:", e);
                        })
                        .catch(function (e) {
                          return console.error(e);
                        });
                    },
                    getCelulares:
                      ((r = ye(
                        xe().mark(function e() {
                          var t, n, r;
                          return xe().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (t = "".concat(
                                        "https://3001-frako23-haztuofertacom-qyfg8y833bh.ws-us77.gitpod.io",
                                        "/api/get_celulares"
                                      )),
                                      (e.prev = 1),
                                      (e.next = 4),
                                      fetch(t)
                                    );
                                  case 4:
                                    if (!(n = e.sent).ok) {
                                      e.next = 12;
                                      break;
                                    }
                                    return (e.next = 8), n.json();
                                  case 8:
                                    (r = e.sent),
                                      s({ celulares: r }),
                                      (e.next = 13);
                                    break;
                                  case 12:
                                    500 === n.status && console.log(n.status);
                                  case 13:
                                    e.next = 18;
                                    break;
                                  case 15:
                                    (e.prev = 15),
                                      (e.t0 = e.catch(1)),
                                      console.log(e.t0);
                                  case 18:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            null,
                            [[1, 15]]
                          );
                        })
                      )),
                      function () {
                        return r.apply(this, arguments);
                      }),
                    getOfertas: function () {
                      var e = "".concat(
                        "https://3001-frako23-haztuofertacom-qyfg8y833bh.ws-us77.gitpod.io",
                        "/api/get_ofertas_de_compras"
                      );
                      fetch(e)
                        .then(function (e) {
                          if (e.ok) return e.json();
                          throw new Error("Ha ocurrido un error");
                        })
                        .then(function (e) {
                          return s({ ofertas: e });
                        })
                        .catch(function (e) {
                          return console.log(e);
                        });
                    },
                    postOfertas: function (e) {
                      var t = "".concat(
                          "https://3001-frako23-haztuofertacom-qyfg8y833bh.ws-us77.gitpod.io",
                          "/api/post_ofertas_de_compras"
                        ),
                        n = i();
                      fetch(t, {
                        method: "POST",
                        body: JSON.stringify(e),
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: "Bearer " + n.token,
                        },
                      })
                        .then(function (e) {
                          if (!e.ok) throw Error(e.statusText);
                          return e.json();
                        })
                        .then(function (e) {
                          return console.log("Success:", e);
                        })
                        .catch(function (e) {
                          return console.error(e);
                        });
                    },
                    postVentas: function (e) {
                      var t = "".concat(
                        "https://3001-frako23-haztuofertacom-qyfg8y833bh.ws-us77.gitpod.io",
                        "/api/ofertas_de_compras"
                      );
                      fetch(t, {
                        method: "POST",
                        body: JSON.stringify(e),
                        headers: { "Content-Type": "application/json" },
                      })
                        .then(function (e) {
                          if (!e.ok) throw Error(e.statusText);
                          return e.json();
                        })
                        .then(function (e) {
                          return console.log("Success:", e);
                        })
                        .catch(function (e) {
                          return console.error(e);
                        });
                    },
                    postIntercambios: function (e) {
                      var t = "".concat(
                        "https://3001-frako23-haztuofertacom-qyfg8y833bh.ws-us77.gitpod.io",
                        "/api/ofertas_de_compras"
                      );
                      fetch(t, {
                        method: "POST",
                        body: JSON.stringify(e),
                        headers: { "Content-Type": "application/json" },
                      })
                        .then(function (e) {
                          if (!e.ok) throw Error(e.statusText);
                          return e.json();
                        })
                        .then(function (e) {
                          return console.log("Success:", e);
                        })
                        .catch(function (e) {
                          return console.error(e);
                        });
                    },
                    postSubastas: function (e) {
                      var t = "".concat(
                        "https://3001-frako23-haztuofertacom-qyfg8y833bh.ws-us77.gitpod.io",
                        "/api/ofertas_de_compras"
                      );
                      fetch(t, {
                        method: "POST",
                        body: JSON.stringify(e),
                        headers: { "Content-Type": "application/json" },
                      })
                        .then(function (e) {
                          if (!e.ok) throw Error(e.statusText);
                          return e.json();
                        })
                        .then(function (e) {
                          return console.log("Success:", e);
                        })
                        .catch(function (e) {
                          return console.error(e);
                        });
                    },
                    changeColor: function (e, t) {
                      var n = i().demo.map(function (n, r) {
                        return r === e && (n.background = t), n;
                      });
                      s({ demo: n });
                    },
                    setNotification: function (e) {
                      s({ notification: e }),
                        setTimeout(function () {
                          s({ notification: void 0 });
                        }, 1e4);
                    },
                    toggleFavorite: function (e) {
                      var t = i();
                      if (l().isFavorite(e)) {
                        var n = t.favoritos.filter(function (t) {
                          return t !== e;
                        });
                        s({ favoritos: n });
                      } else s({ favoritos: [].concat(Ee(t.favoritos), [e]) });
                    },
                    isFavorite: function (e) {
                      return i().favoritos.find(function (t) {
                        return t == e;
                      });
                    },
                  },
                })
              ),
              2
            ),
            u = c[0],
            d = c[1];
          return (
            (0, t.useEffect)(function () {
              u.actions.getComputadoras(),
                u.actions.getCelulares(),
                u.actions.getOfertas(),
                u.actions.getUsuarios();
            }, []),
            t.createElement(Ne.Provider, { value: u }, t.createElement(Ru, e))
          );
        });
      var Ru;
      r.render(t.createElement(Du, null), document.querySelector("#app"));
    })();
})();
