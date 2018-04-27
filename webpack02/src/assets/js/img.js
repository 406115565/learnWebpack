import app from './app'
import myImg from '../img/wx.png'
export default function img(){
    var el = app()
    var img = document.createElement('img')
    img.src = myImg
    el.appendChild(img)
    return el
}