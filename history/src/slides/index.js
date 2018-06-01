
let slides = [];

slides.push(`
<section>
	<h1>单页应用路由</h1>
</section>
`);

let p1 = `
<section data-markdown>
	<textarea data-template>
### html5 历史记录 API
什么是历史记录API？
html5中，提供里一个新的API，可以允许用户脚本操作浏览器历史记录
	</textarea>
</section>
`;

slides.push(p1);


let p2 = `
<section data-markdown>
	<textarea data-template>
### **History API 提供功能**：
- \`pushState\` 可以向历史记录栈中添加一个访问记录，并立即修改当前URL，不刷新页面
- \`popState Event\` 当点击浏览器后退时，历史记录是由pushState创建，刷新页面，触发popState事件
	</textarea>
</section>
`;

slides.push(p2);

let p3 = `
<section data-markdown>
	<textarea data-template>
### **路由实现**：
- 点击链接时，不再设置新的URL，而是通过pushState创建一条新的访问记录，同时触发访问回调
- 当点击后退时，popState事件触发，调用访问回调
- **访问回调**： 会根据当前的URL来生成对应页面和加载数据
	</textarea>
</section>
`;

slides.push(p3);

let p4 = `
<section data-markdown>
	<textarea data-template>
# DEMO
[LINK](http://localhost:3000/cloud/map)
	</textarea>
</section>
`;

slides.push(p4);


export default slides;
