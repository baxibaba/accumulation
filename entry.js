document.getElementById('app').innerHTML ='这是我的第一个打包成功的程序哈';

// 添加 另一个js文件
require("./first.js");

// 添加style
require("!style-loader!css-loader!./style.css");