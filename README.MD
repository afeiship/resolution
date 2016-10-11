#resolution
Check the devicePixelRatio/resolutions for different device.


## usage:
+ use `to-rem` sass function
```css
@import "../dist/resolution-function";

body{
  font-size: to-rem(20);
}

.body-text{
  background: #eee;
  border: 1px solid #999;
  width:80%;
  padding:to-rem(20);
  margin:to-rem(200) auto;
}
```

+ import scripts:
```html
<script src="../dist/resolution.js"></script>
```
