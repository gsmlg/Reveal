
let slides = [];

slides.push(`
<section>
	<h1>Dynamic Import</h1>
  模块动态加载
</section>
`);

let markdown = `
<section data-markdown>
	<textarea data-template>
## Dynamic Import 由来

在 [ES2015 Loader spec](https://whatwg.github.io/loader/) 中，
定义 import() 作为一个函数在运行时动态装载模块

[ECMAScript 提案](https://github.com/tc39/proposal-dynamic-import)

	</textarea>
</section>
`;

slides.push(markdown);

let md1 = `
<section data-markdown>
	<textarea data-template>
### 在webpack中使用 Dynamic Import

Webpack 中使用\`import()\` 时，webpack会把对应的模块当作一个分割点来引入。
指定的模块会被拆分为一个单独的文件来动态加载

举例：
\`\`\`javascript
function loadAM() {
  return import('am').then((am) => {
    mount(am.stats_menus);
    mount(am.reports);
    // ...
  })
}

loadAM();
\`\`\`
	</textarea>
</section>
`;

slides.push(md1);

let md2 = `
<section data-markdown>
	<textarea data-template>
使用注意
- 返回Promise对象，需要Promise支持
- 同babel使用需要\`syntax-dynamic-import\`支持

	</textarea>
</section>
`;

slides.push(md2);

let md3 = `
<section data-markdown>
	<textarea data-template>
## Webpack: Import 配置

可以通过魔术注释来指定配置

- 指定名称 直接名称或者[index], [request]

\`\`\`javascript
import(/* webpackChunkName: "my-chunk-name" */ 'module');

\`\`\`

- 指定模式 *lazy*, *lazy-once*, *eager*

\`\`\`javascript
import(/* webpackMode: "lazy" */ \`i18n/i18n-$\{language}.json\`)

\`\`\`
	</textarea>
</section>
`;

slides.push(md3);


export default slides;
