#resolution
Check the devicePixelRatio/resolutions for different device.


## usage:
+ design width: 375;
```scss
$resolution-design-width: 375;
```
+ use `to-rem` sass function
```css
@import "../dist/resolution-function";

body{
  font-size: to-rem(20);
}
h1{
  font-size: to-rem(20);
}

.body-text{
  background: #eee;
  border: 1px solid #999;
  width:75%;
  padding:to-rem(20);
  margin:to-rem(50) auto 0;
}
```

+ import scripts:
```html
<script src="../dist/resolution.js"></script>
```
