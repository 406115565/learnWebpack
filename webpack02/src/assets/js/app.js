import '../less/app.less'
export default function app() {
    var el = document.createElement('h1');
    var btn = document.createElement('button');
    el.innerHTML = '<p>hello 1111world</p>';
    btn.onclick = e => import('./print').then(module => {
      var print = module.default;
      print()
    });
    btn.innerText = 'test';
    el.appendChild(btn);
    return el
  }