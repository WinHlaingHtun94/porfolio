(function() {
  // 変数　
  var getScrollTarget, initCommon, resize_timer, setEvent, setResize, setSmoothScroll, smoothScroll;

  resize_timer = false;

  // 実行
  $(function() {
    setTimeout(function() {
      return initCommon();
    }, 100);
  });

  // 初期化
  initCommon = function() {
    //リサイズ
    //setResize()
    //スムーススクロール
    setSmoothScroll();
    //イベント
    return setEvent();
  };

  //イベント
  setEvent = function() {};

  //リサイズ
  //スクロール
  /*
  scroll_target = $(getScrollTarget())
  last_scroll_top = 0
  $(window).scroll ()->
  	st = scroll_target.scrollTop()
  	if st > last_scroll_top
  		$('.headerFix').addClass('hide').removeClass 'fix'
  	else
  		$('.headerFix').removeClass('hide').addClass 'fix'
  	last_scroll_top = st
  	if scroll_target.scrollTop() < 176
  		$('header').removeClass('headerFix').removeClass 'fix'
  	else
  		$('header').addClass 'headerFix'
  	return
  */
  setResize = function() {
    return $(window).resize(function() {
      if (resize_timer !== false) {
        clearTimeout(resize_timer);
      }
      return resize_timer = setTimeout(function() {}, 100);
    });
  };

  //スムーズスクロール設定
  setSmoothScroll = function(e) {
    $(document).on("click", 'a[href^="#"]', function(e) {
      e.preventDefault();
      smoothScroll($(this).attr('href'));
    });
  };

  //スムーズスクロール実行
  smoothScroll = function(href) {
    var position, speed, target;
    speed = 600;
    if (href !== '#') {
      target = $(href === '' ? 'html' : href);
      position = target.offset().top;
      $(getScrollTarget()).stop().animate({
        scrollTop: position
      }, speed, 'easeOutExpo');
      return false;
    } else {
      return true;
    }
  };

  //スムーズターゲット取得
  getScrollTarget = function() {
    var firefox, scrollableElement;
    scrollableElement = void 0;
    firefox = navigator.userAgent.match(/Firefox\/([0-9]+)\./);
    if ('scrollingElement' in document) {
      scrollableElement = document.scrollingElement;
    } else if (!!window.MSInputMethodContext && !!document.documentMode) {
      scrollableElement = document.documentElement;
    } else if (firefox && parseInt(firefox[1]) <= 47) {
      scrollableElement = document.documentElement;
    } else {
      scrollableElement = document.body;
    }
    return scrollableElement;
  };

}).call(this);
