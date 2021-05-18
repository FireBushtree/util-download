import { useState } from 'react';
import download, { DownloadOption } from './';

interface DownloadHookOption extends DownloadOption {
  success?: (data: XMLHttpRequest) => any;
  fail?: (error: any) => any;
}

/**
 * hook版本的下载文件
 * @param {string} url 下载时请求的地址
 * @param {any} commonData 下载请求携带的参数， 例如 [exportIds, access_token, ...]
 * @param {DownloadOption} commonOptions 额外的配置项
 * @returns
 */
const useDownload = (
  url: string,
  commonData?: any,
  commonOptions?: DownloadHookOption,
) => {
  const { success, fail } = commonOptions || {};
  const [loading, setLoading] = useState(false);

  const run = async (data?: any, options?: DownloadOption) => {
    setLoading(true);
    try {
      const res = await download(
        url,
        {
          ...commonData,
          ...data,
        },
        {
          ...commonOptions,
          ...options,
        },
      );

      success && success(res);
    } catch (e) {
      fail && fail(e);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    run,
  };
};

export default useDownload;
