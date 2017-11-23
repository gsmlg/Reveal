
let slides = [];

import yeoman from 'images/yeoman.png';

slides.push(`
<section>
	<h2>Compile to JavaScript</h2>
	<h3>GSMLG</h3>
</section>
`);

let markdown = `
<section data-markdown>
	<textarea data-template>
前提：

- Web 平台是最大的开放标准平台

- JavsScript是平台上通用的唯一编程语言

	</textarea>
</section>
`;

slides.push(markdown)


let note = `
<section data-markdown>
	<textarea data-template>
JavsScript起源:

- 在互联网最开始的时候，用户使用28.8kbit/s速度的猫进行连接，提交一个表单后要一分钟才能返回消息说一个必填的选项没有输入，
这个时候就迫切的需要一个脚本语言来控制请求了

- 1995年，当时就职于网景公司的·Brendan Eich·为当时的浏览器开发了脚本语言livescript，
后来在发布时为了搭上当时火热的Java语言，改名为JavaScript

	</textarea>
</section>
`
slides.push(note);


slides.push(`
<section data-markdown>
	<textarea data-template>
JavsScript起源:

- Javascript发布后取得了巨大的成功，后来微软为当时发布的IE3做了一套相同的语言JScript。

- JScript也是一种JavaScript实现，这两个JavaScript语言版本在浏览器端共存意味着语言标准化的缺失，对这门语言进行标准化被提上了日程，
在1997年，由网景、昇阳、微软、宝蓝等公司组织及个人组成的技术委员会在ECMA确定定义了一种名叫ECMAScript的新脚本语言标准，
规范名为ECMA-262。JavaScript成为了ECMAScript的实现之一。

	</textarea>
</section>
`);

slides.push(`
<section data-markdown>
	<textarea data-template>
JavsScript语言：

- JavaScript，一种高级编程语言，通过解释执行，是一门动态类型，面向对象（基于原型）的解释型语言。
它被世界上的绝大多数网站所使用，也被世界主流浏览器（Chrome、Edge、IE、FireFox、Safari、Opera）支持。
JavaScript是一门基于原型、函数先行的语言，是一门多范式的语言，它支持面向对象编程，命令式编程，以及函数式编程。
它提供语法来操控文本、数组、日期以及正则表达式等，不支持I/O，比如网络、存储和图形等，但这些都可以由它的宿主环境提供支持。

	</textarea>
</section>
`);

slides.push(`
<section data-markdown>
	<textarea data-template>
JavsScript语言：

- JavaScript在传统意义上被实现为一种解释语言，但现在，它已经可以被即时编译（JIT）执行。
随着最新的HTML5和CSS3语言标准的推行它还可用于游戏、桌面和移动应用程序的开发和在服务器端网络环境运行。

	</textarea>
</section>
`);

slides.push(`
<section data-markdown>
	<textarea data-template>
### 为什么要对JavaScript再编译？

- JavaScript通常是由服务器发送到客户端去执行的，这个时候就需要通过编译优化来减少发送脚本的大小

	</textarea>
</section>
`);

slides.push(`
<section data-markdown>
	<textarea data-template>

- 由于JavaScript运行于数百种环境下，为每个平台环境编写对应的代码代价太高，这个时候需要通过编译器来进行兼容性控制

- 一些新的语言特性可以极大的提高开发效率和减轻设计难度，这个时候可以通过编译的方式来将新的语言特性引入

	</textarea>
</section>
`);

slides.push(`
<section data-markdown>
	<textarea data-template>

- 大型项目必须要进行模块划分，并进行静态检查，这个时候需要构建工具对代码再编译。

- 由其他语言的开发的应用需要引入web平台，编译到JavaScript比重写开销小很多。

	</textarea>
</section>
`);

slides.push(`
<section data-markdown>
	<textarea data-template>
### JavsScript代码压缩工具介绍

- YUI Compressor
- Google Closure Compiler
- UglifyJS
- Esmangle

	</textarea>
</section>
`);

slides.push(`
<section data-markdown>
	<textarea data-template>
### UglifyJS

**核心功能**

* A parser which produces an abstract syntax tree (AST) from JavaScript code.
* A code generator which outputs JavaScript code from an AST, also providing the option to get a source map.
	</textarea>
</section>
`);

slides.push(`
<section data-markdown>
	<textarea data-template>
* A compressor (optimizer) — it uses the transformer API to optimize an AST into a smaller one.
* A mangler — reduce names of local variables to (usually) single-letters.
* A scope analyzer, which is a tool that augments the AST with information about where variables are defined/referenced etc.
* A tree walker — a simple API allowing you to do something on every node in the AST.
* A tree transformer — another API intended to transform the tree.
	</textarea>
</section>
`);

export default slides;