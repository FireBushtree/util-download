# Download

提供给文件导出的api， 原来导出文件使用的是表单提交的方式， 对于服务端的响应不好处理<br/>
该组件基于`promise`并使用`ajax`的方式下载， 可以为页面增加**loading**效果等。

通用的下载可以使用`download`
<code src="./demo/index.demo.tsx" />

如果使用的`react>=16.8`则可以使用hook的方式`useDownload` <br />
<code src="./demo/hook.demo.tsx" />

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| fileName | 指定下载的文件名 | `string` | | |
| headers | 额外的请求头 | `any` | | |
| formData | 是否以`form-data`的格式发送请求 | `boolean` | `false` | |
| escape | 后端返回的文件名可能是以`ISO8859`的编码格式， 需要文件名先以`escape`编码，再解码 | `boolean` | `false` | v 2.0.1 |
