import '../less/app.less'

export default function app() {
    var el = document.createElement('h1');
    el.innerHTML = '<p>hello world</p>';
    return el
  }