##  定义debug


在webpack配置中设置

```javascript

    new webpack.DefinePlugin({
        DEBUG: JSON.stringify(true)
    }),

```

代码：

``` javascript

if (DEBUG) {
    consolg.log("debug info")
}

```

