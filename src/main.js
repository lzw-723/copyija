import './style.css';

// window._clipboardData = window.clipboardData;
window.clipboardData = {
    clearData: () => {
        if (new Error().stack.toString().includes("right.js")) {
            console.log("copyija: 拦截剪切板清除方法成功");
            return;
        }
        window._clipboardData();
    },
    setData: (format, data) => {
        if (new Error().stack.toString().includes("right.js")) {
            console.log("copyija: 拦截剪切板设置方法成功，格式为", format, "，数据为", data);
            return;
        }
        window._clipboardData.setData(format, data);
    }
}
window._addEventListener = window.addEventListener
window.addEventListener = (type, listener, options) => {
    console.log("hello", type);
    if (type == "copy") {
        console.log(listener);
        return;
    }
    window._addEventListener(type, listener, options)
}

window._addEventListener("copy", (e) => {
    if (!new Error().stack.toString().includes("right.js")) {
        const data = window.getSelection().toString();
        navigator.clipboard.writeText(data);
        console.log("copyija: 成功恢复复制文本", data);
    }
})


console.log("copyija: 启动成功");