## 为了解决es5以下问题：
#### 无块级作用域
#### for循环共享迭代变量值
#### 变量提升

#### 不能重新声明

```
let a = 1;
let a; //报错
```

---

### 函数内部不能声明

```
function func(arg) {
  let arg; // 报错
}


function func(arg) {
  {
    let arg; // 不报错
  }
}
```

### 不会挂载在顶层作用域中

```
var a = 1;
window.a // 1

let b = 1;
window.b // undefined
```

ES5规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。
如果确实需要，也应该写成函数表达式，而不是函数声明语句。

const在声明时候就要赋值，否则报错，且之后不能修改