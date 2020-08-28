var QF = {
    get: function (url, json, callback) {
        // 把json中的数据转化成key=value&key1=value1格式的querystring
        // 假设json的结构是 {a: 1, b: 2, c: 3} 那么我们要生成的就是a=1&b=2&c=3
        var queryString = "";
        for (var i in json) {
            queryString += i + "=" +  encodeURIComponent(json[i]) + "&";
        }
        // 第一次循环结束 a=1&
        // 第二次循环结束 a=1&b=2&
        // 第三次循环结束 a=1&b=2&c=3& 为了去掉最后多出来的& 我们截取字符串
        queryString = queryString.slice(0, -1);

        // 四步写一遍
        var xhr = null;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHttp");
        } else {
            throw new Error("请升级您的浏览器");
        }
        // 绑定事件
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // 1 把接收到的数据转为对象
                var obj = JSON.parse(xhr.responseText);
                callback(obj);
            }
        }

        // open
        xhr.open("get", url + "?" +queryString , true);
        // send
        xhr.send();
    },
    post: function (url, json, callback) {
        // 把json中的数据转化成key=value&key1=value1格式的querystring
        // 假设json的结构是 {a: 1, b: 2, c: 3} 那么我们要生成的就是a=1&b=2&c=3
        var queryString = "";
        for (var i in json) {
            queryString += i + "=" + encodeURIComponent(json[i]) + "&";
        }
        // 第一次循环结束 a=1&
        // 第二次循环结束 a=1&b=2&
        // 第三次循环结束 a=1&b=2&c=3& 为了去掉最后多出来的& 我们截取字符串
        queryString = queryString.slice(0, -1);

        // 四步写一遍
        var xhr = null;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHttp");
        } else {
            throw new Error("请升级您的浏览器");
        }
        // 绑定事件
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // 1 把接收到的数据转为对象
                var obj = JSON.parse(xhr.responseText);
                callback(obj);
            }
        }

        // open
        xhr.open("post", url, true);
        // 伪装成表单
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        // send
        xhr.send(queryString);
    },
    pGet: function (url, json) {
        return new Promise(function (resolve, reject) {
            var queryString = "";
            for (var i in json) {
                queryString += i + "=" +encodeURIComponent( json[i]) + "&";
            }
            queryString = queryString.slice(0, -1);
            var xhr = null;
            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
                xhr = new ActiveXObject("Microsoft.XMLHttp");
            } else {
                throw new Error("请升级您的浏览器");
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var obj = JSON.parse(xhr.responseText);
                    resolve(obj);
                }
            }
            xhr.open("get", url + "?" + queryString , true);
            xhr.send();

        })
    },
    pPost: function (url, json) {
        return new Promise(function (resolve, reject) {
            // 把json中的数据转化成key=value&key1=value1格式的querystring
            // 假设json的结构是 {a: 1, b: 2, c: 3} 那么我们要生成的就是a=1&b=2&c=3
            var queryString = "";
            for (var i in json) {
                queryString += i + "=" + encodeURIComponent(json[i]) + "&";
            }
            // 第一次循环结束 a=1&
            // 第二次循环结束 a=1&b=2&
            // 第三次循环结束 a=1&b=2&c=3& 为了去掉最后多出来的& 我们截取字符串
            queryString = queryString.slice(0, -1);

            // 四步写一遍
            var xhr = null;
            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
                xhr = new ActiveXObject("Microsoft.XMLHttp");
            } else {
                throw new Error("请升级您的浏览器");
            }
            // 绑定事件
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    // 1 把接收到的数据转为对象
                    var obj = JSON.parse(xhr.responseText);
                    resolve(obj);
                }
            }

            // open
            xhr.open("post", url, true);
            // 伪装成表单
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            // send
            xhr.send(queryString );
        })
    },
    jsonp: function(url, data, callback) {
        // 将数据拼接成querystring 
        var querystring = "";
        for (var i in data) {
            querystring += i + "=" + encodeURIComponent(data[i]) + "&";
        }
        querystring = querystring.slice(0, -1);
        window[data.jsonpcallback] = callback;
        // 生成script标签
        var script = document.createElement("script");
        script.src = url + "?" + querystring;
        console.log(script)
        document.body.appendChild(script)


        script.onload = function() {
            delete window[data.jsonpcallback];
            document.body.removeChild(script);
        }
    }
}