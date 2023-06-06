let docEle = window.document.documentElement; // 表示获取窗口

// 此函数是计算不同屏的html标签的font-size
function refresh() {
    // width 表示屏的宽度
    let width = docEle.getBoundingClientRect().width; // 一屏的宽度 
    if (width < 750) { width = 750 }
    let fs = width / 192
    document.querySelector("html").style.fontSize = fs + "px"
}

refresh();

// window叫事件源   addEventListenere用来绑定事件的
// resize叫浏览器窗口大小改变事件  ()=>{}叫事件监听器
window.addEventListener("resize", () => {
    refresh()
})
// pageshow 页面显示出来
window.addEventListener("pageshow", () => {
    refresh()
})
