(function() {
  window.LLUtil = class LLUtil {
    // コンストラクタ
    constructor() {}

    // 変数

      // ブラウザ判定
    checkBrowser() {
      var appVersion, userAgent;
      userAgent = window.navigator.userAgent.toLowerCase();
      appVersion = window.navigator.appVersion.toLowerCase();
      //console.log userAgent
      if (userAgent.indexOf('msie') !== -1 || userAgent.indexOf('trident') !== -1) {
        // IE
        if (appVersion.indexOf('msie 6.') !== -1) {
          return 'ie';
        } else if (appVersion.indexOf('msie 7.') !== -1) {
          return 'ie';
        } else if (appVersion.indexOf('msie 8.') !== -1) {
          return 'ie';
        } else if (appVersion.indexOf('msie 9.') !== -1) {
          return 'ie';
        } else if (appVersion.indexOf('msie 10.') !== -1) {
          return 'ie';
        } else if (userAgent.indexOf('rv:11') !== -1) {
          return 'ie';
        } else {
          return 'ie';
        }
      } else if (userAgent.indexOf('edge') !== -1) {
        return 'edge';
      } else if (userAgent.indexOf('edg') !== -1) {
        return 'edg';
      } else if (userAgent.indexOf('opr') !== -1) {
        return 'opr';
      } else if (userAgent.indexOf('opera') !== -1) {
        return 'opera';
      } else if (userAgent.indexOf('chrome') !== -1) {
        return 'chrome';
      } else if (userAgent.indexOf('safari') !== -1) {
        return 'safari';
      } else if (userAgent.indexOf('firefox') !== -1) {
        return 'firefox';
      } else if (userAgent.indexOf('gecko') !== -1) {
        return 'gecko';
      } else {
        // IE
        return false;
      }
    }

    // OS判定
    checkOS() {
      var userAgent;
      userAgent = window.navigator.userAgent.toLowerCase();
      if (userAgent.indexOf('iphone') !== -1) {
        return 'iphone';
      } else if (userAgent.indexOf('ipad') !== -1) {
        return 'ipad';
      } else if (userAgent.indexOf('android') !== -1) {
        return 'android';
      } else if (userAgent.indexOf('win') > -1) {
        return 'windows';
      } else if (userAgent.indexOf('mac') > -1) {
        return 'mac';
      } else {
        return 'other';
      }
    }

    // スマホ判定
    checkSmp() {
      var os;
      os = this.checkOS();
      if (os === 'iphone' || os === 'android') {
        return true;
      } else {
        return false;
      }
    }

    // タブレット判定
    checkTbl() {
      var os;
      os = this.checkOS();
      if (os === 'ipad') {
        return true;
      } else {
        return false;
      }
    }

    // toucheイベントが有効かどうか
    checkTouchEvent() {
      if ('ontouchstart' in window || navigator.msPointerEnabled) {
        return true;
      } else {
        return false;
      }
    }

    // ファイル名取得
    getScriptName() {
      var filename, url;
      url = window.location.href;
      filename = url.match(".+/(.+?)\.[a-z]+([\?#;].*)?$");
      if (filename) {
        filename = filename[1];
      } else {
        filename = "";
      }
      return filename;
    }

  };

}).call(this);
