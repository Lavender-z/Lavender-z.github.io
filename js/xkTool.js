(function (window, undefiend) {
    var xkTool = function (selector, filter) {
      return new xkTool.prototype.init(selector, filter);
    };
    xkTool.prototype = {
      constructor: xkTool,
      init: function (bgUrl, filter) {
        this.changeBanner(bgUrl, filter);
        console.log(
          "\n %c 小康蝴蝶主题魔改工具库" +
            this.version +
            " %c https://docs.tzki.cn/xkTool/ \n",
          "color: #fff; background: #4285f4; padding:5px 0;",
          "background: #66CCFF; padding:5px 0;"
        );
        return this;
      },
      version: "3.1.1",
      selector: "",
      // 背景图片列表
      imgList: [
        "https://ae01.alicdn.com/kf/Uc32240fb1b134adc8b256577bd78b9a3j.jpg",
      ],
      // banner图列表
      bannerList: [
        "https://ae01.alicdn.com/kf/H21b5f6b8496141a1979a33666e1074d9x.jpg",
      ],
    };
    xkTool.extend = xkTool.prototype.extend = function (obj) {
      for (var key in obj) {
        this[key] = obj[key];
      }
    };
    // 生成相关
    xkTool.extend({
      /**
       * 生成随机整数 包括首尾
       * @date 2020-06-30
       * @param {number} min 最小值
       * @param {number} max 最大值
       * @returns {any}
       */
      randomNum: function (min, max) {
        // min最小值，max最大值
        return Math.floor(Math.random() * (max - min)) + min;
      },
    });
    // 工具方法
    xkTool.extend({
      /**
       * 根据cookie设置背景
       * @date 2020-06-30
       * @param {any} content_inner 公共父级
       * @param {any} opacity 透明度
       * @returns {any}
       */
      setColor: function (content_inner, opacity) {
        // style="--light_bg_color: rgb(255, 255, 255,.3);--dark_bg_color: rgba(18,18,18,.2);"
        var light_bg_color =
          "--light_bg_color: rgb(255, 255, 255," + opacity + ");";
        var dark_bg_color = "--dark_bg_color: rgba(18,18,18," + opacity + ");";
        content_inner.setAttribute("style", light_bg_color + dark_bg_color);
      },
  
      /**
       * 设置背景图片
       * @date 2020-06-30
       * @param {string}} img 图片的地址
       * @returns {any}
       */
      setBg: function (img) {
        $("#web_bg").css({
          backgroundImage: "url(" + img + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        });
      },
      /**
       * 设置banner的方法
       * @date 2020-07-06
       * @param {any} img 图片地址
       * @param {any} filter 是否开启滤镜，默认不开启
       * @returns {any}
       */
      setBanner: function (img, filter) {
        if (!filter) {
          $(".full_page").css({
            backgroundImage: "url(" + img + ")",
          });
        } else {
          $(".full_page").css({
            backgroundImage:
              'url("https://ae01.alicdn.com/kf/H18a4b998752a4ae68b8e85d432a5aef0l.png"), linear-gradient(60deg, rgba(255, 165, 150, 0.5) 5%, rgba(0, 228, 255, 0.35)), url(' +
              img +
              ")",
          });
        }
      },
    });
    // 点击交互
    xkTool.prototype.extend({
      /**
       * 当点击目录时控制台输出当前文章地址加锚点
       * @date 2020-06-30
       * @returns {xkTool}
       */
      consoleAnchor: function () {
        $(".toc-link").click(function (e) {
          // location.hash = this.hash;
          console.log(this.href);
        });
        return this;
      },
      /**
       * 当使用mac代码主题时，点击绿色按钮会出现代码框放大的效果
       * @date 2020-06-30
       * @returns {xkTool}
       */
      codeFull: function () {
        $(".highlight-tools").append(
          '<i class="fas fa-fingerprint fullScreen"></i>'
        );
        $(".highlight-tools").delegate(".fullScreen", "click", function () {
          $(this).parent().parent().toggleClass("code-block-fullscreen");
          // var expand = $(this).prevAll().eq(3);
          // if (expand.hasClass("code-closed")) {
          //   expand.trigger("click");
          // }
        });
        return this;
      },
    });
    // 视觉感受
    xkTool.prototype.extend({
      /**
       * 修改主页banner图，参数传入图片地址，或者transparent
       * @date 2020-06-30
       * @param {string} [imageUrl] 可选，传入图片地址或者transparent
       * @param {boolean} filter=false 是否使用滤镜 默认不适用
       * @returns {xkTool}
       */
      changeBanner: function (imageUrl, filter = false) {
        if (imageUrl != undefined && imageUrl.search("http") != -1) {
          xkTool.setBanner(imageUrl, filter);
        } else if (imageUrl == "transparent") {
          $(".full_page").css({
            background: "transparent",
          });
        }
        return this;
      },
      /**
       * 随机banner图
       * @date 2020-07-06
       * @param {any} startUrl 开始的url
       * @param {any} endUrl 结束的url
       * @param {any} startNum 开始的数字
       * @param {any} endNum 结束的数字
       * @param {any} filter=false 是否使用滤镜，默认不使用
       * @returns {any}
       */
      randomBanner: function (
        startUrl,
        endUrl,
        startNum,
        endNum,
        filter = false
      ) {
        var num;
        if ((arguments.length = 1 && startUrl == true)) {
          filter = true;
        }
        if (arguments.length < 4) {
          var imgLength = this.bannerList.length;
          num = xkTool.randomNum(0, imgLength);
          console.log(this.bannerList[num], num);
          xkTool.setBanner(this.bannerList[num], filter);
        } else {
          num = xkTool.randomNum(startNum, endNum + 1);
          xkTool.setBanner(startUrl + num + endUrl, filter);
        }
        return xkTool;
      },
      /**
       * 手机状态下工具栏默认不展开
       * @date 2020-06-30
       * @returns {any}
       */
      mobileSidebar: function () {
        var mobile_sidebar_menus = document.getElementById(
          "mobile-sidebar-menus"
        );
        var menus_item_child = mobile_sidebar_menus.getElementsByClassName(
          "menus_item_child"
        );
        var menus_expand = mobile_sidebar_menus.getElementsByClassName(
          "menus-expand"
        );
        for (var i = 0; i < menus_item_child.length; i++) {
          menus_item_child[i].style.display = "none";
          menus_expand[i].className += " menus-closed";
        }
        return this;
      },
      /**
       * 根据Cookie设置背景、透明度等
       * @date 2020-06-30
       * @returns {any}
       */
      bgPage: function () {
        // 获取标签
        // 全局背景div
        var web_bg = document.getElementById("web_bg");
        // 公共父级
        var content_inner = document.getElementById("content-inner");
        // 获取Cookies
        // 透明度
        var opacity = Cookies.get("opacity") ? Cookies.get("opacity") : 0.5;
        // 背景
        var bg = Cookies.get("bg");
        // 动画
        var animation = Cookies.get("animation");
        // 背景类型
        var type = Cookies.get("type");
        // 声明遍历 用于记录当前color
        // 设置背景
        if (bg) {
          web_bg.style.background = bg;
          web_bg.setAttribute("data-type", type);
          if (animation) {
            web_bg.style.animation = animation;
          }
        }
        xkTool.setColor(content_inner, opacity);
        return this;
      },
      /**
       * 随机背景
       * @date 2020-07-06
       * @param {any} startUrl 开始的url
       * @param {any} endUrl 结束的url
       * @param {any} startNum 开始的数字
       * @param {any} endNum 结束的数字
       * @returns {any}
       */
      randomBg: function (startUrl, endUrl, startNum, endNum) {
        var num;
        if (arguments.length < 4) {
          var imgLength = this.imgList.length;
          num = xkTool.randomNum(0, imgLength);
          xkTool.setBg(this.imgList[num]);
        } else {
          num = xkTool.randomNum(startNum, endNum + 1);
          xkTool.setBg(startUrl + num + endUrl);
        }
        return xkTool;
      },
    });
    // 元素相关
    xkTool.prototype.extend({
      /**
       * 插入svg社交图标
       * @date 2020-06-30
       * @param {object} obj 传入对象，键为图标id，值为点击后跳转的地址
       * @returns {any}
       */
      appendSocial: function (obj) {
        for (var svgId in obj) {
          $(".card-info-social-icons").append(
            '<a class="social-icon" href="' +
              obj[svgId] +
              '" target="_blank"><svg class="icon" aria-hidden="true" style="width: 1em;height: 1em;vertical-align: -0.15em;fill: currentColor;overflow: hidden;"><use xlink:href="#' +
              svgId +
              '"></use></svg></a>'
          );
        }
      },
      /**
       * 离开时切换标题
       * @date 2020-07-03
       * @param {string} leaveTitle 离开时显示的标题
       * @param {string} backTitle 回来时显示的标题
       * @param {string} leaveIcon 离开时显示的icon
       * @param {string} backIcon 回来时显示的icon
       * @returns {xkTool} this
       */
      cheatTitle: function (leaveTitle, backTitle, leaveIcon, backIcon) {
        var OriginTitle = document.title;
        var titleTime;
        document.addEventListener("visibilitychange", function () {
          if (document.hidden) {
            $('[rel="icon"]').attr(
              "href",
              leaveIcon
                ? leaveIcon
                : "https://cdn.jsdelivr.net/gh/sviptzk/StaticFile_HEXO@v3.2.7.1/butterfly/img/favicon.ico"
            );
            document.title = leaveTitle ? leaveTitle : "！！这里这里 ◕ ں ◕ ";
            clearTimeout(titleTime);
          } else {
            $('[rel="icon"]').attr(
              "href",
              backIcon
                ? backIcon
                : "https://cdn.jsdelivr.net/gh/sviptzk/StaticFile_HEXO@v3.2.7.1/butterfly/img/favicon.ico"
            );
            document.title = backTitle
              ? backTitle
              : "(ฅ>ω<*ฅ) 欢迎回来哦！爱你哟~" + OriginTitle;
            titleTime = setTimeout(function () {
              document.title = OriginTitle;
            }, 2000);
          }
        });
        return this;
      },
      /**
       * 魔幻圆圈
       * @date 2020-07-03
       * @param {any} radius 圆圈数量
       * @param {any} densety 密度
       * @param {any} color 颜色，random为随机
       * @param {any} clearOffset 消失偏移
       * @returns {any}
       */
      magicCirle: function (radius, densety, color, clearOffset) {
        $(".scroll-down").after(
          '<canvas id="canvas" width="1700px" height="470"></canvas>'
        );
        $("");
        $.fn.circleMagic = function (options) {
          let width,
            height,
            largeContainer,
            canvas,
            ctx,
            target,
            animateHeader = true;
          let circles = [];
          // 对象合并
          let settings = $.extend(
            {
              elem: ".header",
              color: "rgba(255,225,225,.4)",
              radius: 20,
              densety: 0.3,
              clearOffset: 0.2,
            },
            options
          );
  
          initContainer();
          addListeners();
  
          function initContainer() {
            width = $(window).width();
            height = $(window).height();
            target = { x: 0, y: height };
            largeContainer = document.querySelector(settings.elem);
            largeContainer.style.height = height + "px";
            initCanvas();
            canvas = document.getElementById("canvas");
            canvas.width = width;
            canvas.height = height;
            ctx = canvas.getContext("2d");
            for (let x = 0; x < width * settings.densety; x++) {
              let c = new Circle();
              circles.push(c);
            }
            animate();
          }
  
          function initCanvas() {
            let canvasElement = document.createElement("canvas");
            canvasElement.id = "canvas";
            largeContainer.append(canvasElement);
          }
  
          function addListeners() {
            window.addEventListener("scroll", scrollCheck);
            window.addEventListener("resize", resize);
          }
  
          function scrollCheck() {
            if (document.body.scrollTop > height) animateHeader = false;
            else animateHeader = true;
          }
  
          function resize() {
            width = window.innerWidth;
            height = window.innerHeight;
            largeContainer.style.height = height + "px";
            canvas.width = width;
            canvas.height = height;
          }
  
          function animate() {
            if (animateHeader) {
              ctx.clearRect(0, 0, width, height);
              for (let i in circles) {
                circles[i].draw();
              }
            }
            requestAnimationFrame(animate);
          }
  
          function randomColor() {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            let alpha = Math.random().toPrecision(2);
            let rgba = `rgba(${r}, ${g}, ${b}, ${alpha})`;
            return rgba;
          }
  
          function Circle() {
            let self = this;
            (function () {
              self.pos = {};
              init();
            })();
            function init() {
              self.pos.x = Math.random() * width;
              self.pos.y = height + Math.random() * 100;
              self.alpha = 0.1 + Math.random() * settings.clearOffset;
              self.scale = 0.1 + Math.random() * 0.3;
              self.speed = Math.random();
              if (settings.color === "random") {
                self.color = randomColor();
              } else {
                self.color = settings.color;
              }
            }
            this.draw = function () {
              if (self.alpha <= 0) {
                init();
              }
              self.pos.y -= self.speed;
              self.alpha -= 0.0005;
              ctx.beginPath();
              ctx.arc(
                self.pos.x,
                self.pos.y,
                self.scale * settings.radius,
                0,
                2 * Math.PI,
                false
              );
              ctx.fillStyle = self.color;
              ctx.fill();
              ctx.closePath();
            };
          }
        };
        $(".full_page")
          .css({
            overflow: "hidden",
          })
          .circleMagic({
            elem: ".full_page",
            radius: radius ? radius : 18,
            densety: densety ? densety : 0.1,
            color: color ? color : "random",
            // color: 'rgba(255,105,180,.7)',
            clearOffset: clearOffset ? clearOffset : 0.3,
          });
        return this;
      },
      /**
       * 页脚养鱼
       * @date 2020-07-16
       * @returns {any}
       */
      footFish: function () {
        $("#footer-wrap").css({
          position: "absolute",
          "text-align": "center",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          "z-index": 99,
        });
        $("footer").append(
          `<div class="container" id="jsi-flying-fish-container"></div>`
        );
        $("body").append(
          '<script src="https://cdn.jsdelivr.net/gh/sviptzk/StaticFile_HEXO@master/lib/js/fish.js"></script>'
        );
        return this;
      },
      /**
       * 添加aplayer播放器
       * @date 2020-07-07
       * @param {any} obj aplayer的对象
       * @returns {any}
       */
      aplayer: function (obj) {
        $("head").append(
          '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@v0.1/Hexo/assets/css/APlayer.min.css" class="aplayer-style-marker">'
        );
  
        $.getScript(
          "https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@v0.1/Hexo/assets/js/APlayer.min.js",
          function () {
            $("body").prepend('<div id="xiaokang-aplayer"></div>');
            aplayerObj = {
              container: document.getElementById("xiaokang-aplayer"),
            };
            for (var key in obj) {
              if (key != "container") aplayerObj[key] = obj[key];
            }
            const ap = new APlayer(aplayerObj);
            console.log(aplayerObj);
            return ap;
          }
        );
      },
      /**
       * 添加meting播放器
       * @date 2020-07-07
       * @param {any} id id
       * @param {any} server 服务商
       * @param {any} type 类型
       * @returns {any}
       */
      meting: function (id, server, type) {
        $("head").append(
          '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@v0.1/Hexo/assets/css/APlayer.min.css" class="aplayer-style-marker">'
        );
        let APlayerJs = $.getScript(
          "https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@v0.1/Hexo/assets/js/APlayer.min.js"
        );
        let MetingJS = $.getScript(
          "https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js"
        );
        let pAll = Promise.all([APlayerJs, MetingJS]);
        pAll.then(() => {
          $("body").append(
            `<meting-js id=${id} server=${server} type=${type} fixed="true" mini="true"></meting-js>`
          );
        });
      },
    });
    xkTool.prototype.init.prototype = xkTool.prototype;
  
    window.xkTool = xkTool;
  })(window);