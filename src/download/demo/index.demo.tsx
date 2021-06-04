import React from 'react';
import { Button } from 'antd';
import { download } from 'envcloud-utils-downloads';

const Demo = () => {
  const handleDownload = async () => {
    await download(
      '/cloud/zszy/prd/api/order/largeDecorationTrash/export',
      {},
      {
        headers: {
          access_token: '2170f669-1426-482a-a73a-4a2aa80f12e1',
        },
      },
    );
  };

  return (
    <div>
      <Button type="primary" onClick={handleDownload}>
        下载文件
      </Button>
    </div>
  );
};

export default Demo;
