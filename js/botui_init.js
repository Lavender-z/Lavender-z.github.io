function botui_init() {
    var botui = new BotUI("hello-akilar");
    botui.message.add({
      delay: 800,
      content: "Hi, 欢迎光临橘子的小站😊"
    }).then(function() {
      botui.message.add({
        delay: 1100,
        content: "我是站长橘子的分身哦😄"
      }).then(function() {
        botui.message.add({
          delay: 1100,
          content: "你也可以叫我七七~😋"
        }).then(function() {
          botui.action.button({
            delay: 1600,
            action: [{
              text: "我想知道更多关于橘子的故事!😃",
              value: "sure"
            }, {
              text: "好的，就这样吧，拜拜！🙄",
              value: "skip"
            }]
          }).then(function(a) {
            "sure" == a.value && sure();
            "skip" == a.value && end()
          })
        })
      })
    });
    var sure = function() {
        botui.message.add({
          delay: 600,
          content: "🎉🎉🎉🎉🎉🎉"
        }).then(function() {
          secondpart()
        })
      },
      end = function() {
        botui.message.add({
          delay: 600,
          content: "w(ﾟДﾟ)w 不要走！再看看嘛！"
        })
      },
      secondpart = function() {
        botui.message.add({
          delay: 5000,
          content: "首先呢，很感谢您肯在这里驻足片刻❤️。橘子的小站是一个个人性质的博客，站长会在这里发表各种各样的内容。"
        }).then(function() {
          botui.message.add({
            delay: 15000,
            content: "站长说起这个名字是因为自己的圈名就叫橘子，而“橘子”的由来源于某天夜深人静时站长苦思冥想起名，抬头看到了桌子上竟然有一个橘子！👻"
          }).then(function() {
            botui.message.add({
              delay: 5000,
              content: "分类吗，基本都是一些站长平时学到的总结。👀"
            }).then(function() {
              botui.message.add({
                delay: 8000,
                content: "比如前端、Unity、深度学习。。。（太多，怎么办学不完了呢）🎉"
              }).then(function() {
                botui.message.add({
                  delay: 5000,
                  content: "站长还说了会有一些比较矫情的文字哦，流水账一样的，不要看，很羞耻的。😶"
                }).then(function() {
                  botui.message.add({
                    delay: 4000,
                    content: "当然还有很多东西站长还在发掘，因为我们都是从小白开始的~😊"
                  }).then(function() {
                    botui.action.button({
                      delay: 1100,
                      action: [{
                        text: "那为什么要建立个人的博客呢？🤔",
                        value: "why-mashiro"
                      }]
                    }).then(function(a) {
                      thirdpart()
                    })
                  })
                })
              })
            })
          })
        })
      },
      thirdpart = function() {
        botui.message.add({
          delay: 1e3,
          content: "诶？当然是为了学习😏，其实，emm🤔，真的很多时候就跟电脑死机一样脑子会忘记一些东西，需要一个平台记录一下。"
        }).then(function() {
          botui.action.button({
            delay: 1500,
            action: [{
              text: "😲，那建立自己的博客或网站有用吗？",
              value: "why-cat"
            }]
          }).then(function(a) {
            fourthpart()
          })
        })
      },
      fourthpart = function() {
        botui.message.add({
          delay: 3000,
          content: "当然有了，很多前端的知识就是在搭建过程中学习到的呢~"
        }).then(function() {
          botui.message.add({
            delay: 3000,
            content: "灵感其实很多是从大佬的案例中学习并创新的"
          }).then(function() {
            botui.action.button({
              delay: 1500,
              action: [{
                text: "方便透露一下真名吗？👀",
                value: "why-domain"
              }]
            }).then(function(a) {
              fifthpart()
            })
          })
        })
      },
      fifthpart = function() {
        botui.message.add({
          delay: 5000,
          content: "emmmm,流水幽吟绕耳边，煦风馨语抚心弦，挥臂欲揽冰钩月，银星斟酌醉人涎~"
        }).then(function() {
          botui.message.add({
            delay: 3000,
            content: "只是一介无名小卒而已^_^"
          })
        })
      }
  }