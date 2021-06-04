import qs from 'qs';

export interface DownloadOption {
  /**
   * 指定下载的文件名
   */
  fileName?: string;
  /**
   * 设置额外的请求头
   */
  headers?: any;
  /**
   * 是否以`form-data`的格式发送请求
   */
  formData?: boolean
}

/**
 * download file
 * @param {string} url 下载时请求的地址
 * @param {any} params 下载请求携带的参数， 例如 [exportIds, access_token, ...]
 * @param {DownloadOption} options 额外的配置项
 * @returns {Promise<XMLHttpRequest>} 请求的`XMLHttpRequest`对象
 */
const download = (url: string, params?: any, options?: DownloadOption) =>
  new Promise<XMLHttpRequest>((resolve, reject) => {
    let { fileName, headers, formData } = options || {}

    const xhr = new XMLHttpRequest();

    // set timeout 10 mins
    xhr.timeout = 1000 * 60 * 10;

    xhr.open('post', url);
    xhr.responseType = 'blob';

    if (headers && typeof headers === 'object') {
      for (const [key, value] of Object.entries(headers)) {
        xhr.setRequestHeader(key, value as string)
      }
    }

    if (formData) {
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhr.send(qs.stringify(params));
    } else {
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.send(JSON.stringify(params));
    }

    xhr.onload = function () {
      if (this.status === 200) {
        try {
          if (!fileName) {
            // get `fileName` from response headers
            const responseDisposition =
              this.getResponseHeader('content-disposition') || '';
            fileName = decodeURI(responseDisposition.split('=')[1]);
          }

          // create <a href="" download="" /> tag to download
          const url = URL.createObjectURL(this.response);
          const a = document.createElement('a');
          a.style.display = 'none';
          a.href = url;
          a.download = fileName;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        } catch (e) {
          reject(e);
        }
      }

      resolve(this);
    };
  });

export default download
