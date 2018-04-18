# resolution
Check the devicePixelRatio/resolutions for different device.


## usage:
```scss
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
```javascript
import 'resolution';
```

## resources:
+ http://www.cnblogs.com/pigtail/archive/2013/03/15/2961631.html
+ http://www.cnblogs.com/leinov/p/5209456.html
+ http://3g.163.com/touch/all?nav=2&version=v_standard
