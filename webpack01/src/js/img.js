import app from './app'
import myImg from '../img/wx.png'
export default function img(){
    let el = app()
    const img = document.createElement('img')
    img.src = myImg
    let fun123 = () => {}
    el.appendChild(img)
    return el
}