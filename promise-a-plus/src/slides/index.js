
let slides = [];

slides.push(`
<section>
	<h1>Promises/A+规范</h1>
</section>
`);

slides.push(`
<section>
Promise 表示一个异步操作的最终结果，
与之进行交互的方式主要是 then 方法，
该方法注册了两个回调函数，
用于接收 promise 的终值或本 promise 不能执行的原因。
</section>
`)

let s1 = `
<section data-markdown>
	<textarea data-template>
## 术语

- *Promise*
  promise 是一个拥有 then 方法的对象或函数

- *thenable*
  是一个定义了 then 方法的对象或函数

- *value*
  指任何 JavaScript 的合法值

- *exception*
  是使用 throw 语句抛出的一个值

- *reason*
  表示一个 promise 的拒绝原因

	</textarea>
</section>
`;

slides.push(s1)


let s2 = `
<section data-markdown>
  <textarea data-template>
### Promise 的状态
一个 Promise 的当前状态必须为以下三种状态中的一种：等待态（Pending）、执行态（Fulfilled）和拒绝态（Rejected）

#### - 等待态（Pending）

#### - 执行态（Fulfilled）

#### - 拒绝态（Rejected）

  </textarea>
</section>
`
slides.push(s2);

let s3 = `
<section data-markdown>
  <textarea data-template>
### Then 方法
一个 promise 必须提供一个 then 方法以访问其当前值、终值和据因。
promise 的 then 方法接受两个参数：
\`\`\`JavaScript
let newPromise = promise.then(
  /* optional */ onFulfilled,
  /* optional */ onRejected
  );
\`\`\`
  </textarea>
</section>
`
slides.push(s3);

let s4 = `
<section data-markdown>
  <textarea data-template>
### Promise
\`\`\`JavaScript
let promise = new Promise(function(resolve, reject){
  // do some thing
  fetch('/list').then(resp=>{
    return resp.json();
  }).then(data => {
    resolve(data);
  });
  setTimeout(=> {
    reject(new Error('timeout'));
  }, 10000)
});
promise.then((data)=> {
  // loaded data
}).catch((error) => {
  // timeout
})
\`\`\`
  </textarea>
</section>
`
slides.push(s4);

let s5 = `
<section data-markdown>
  <textarea data-template>
\`\`\`JavaScript
Promise.all([p1, p2, p3]).then((arr) => {
  d1 = arr[0], d2 = arr[1], d3 = arr[2]
})

Promise.resolve('done').then(done=> {
  return done === 'done'
})

Promsie.reject('fail').catch(fail => {
  return fail === 'fail'
})
\`\`\`
  </textarea>
</section>
`
slides.push(s5);

let s6 = `
<section data-markdown>
  <textarea data-template>
  #### 实现
  - [[ES 2015]]
  - Q
  - bluebird
  - jquery-3


  #### 问题？
  </textarea>
</section>
`
slides.push(s6);

export default slides;
