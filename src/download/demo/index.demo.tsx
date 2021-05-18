import React from 'react';
import { Button } from 'antd';
import { download } from '@env/util-download';

const Demo = () => {
  const handleDownload = async () => {
    await download('/cloud/njgcq/web/api/collectConfig/genQRCodeZip', {
      access_token: 'e150fc15-5e6d-4aa1-8617-827ce8576ce6',
      exportIds: '0e1b33ac0fdf44cd81c2026b8ece37f3',
    });
  };

  return (
    <div>
      <Button type="primary" onClick={handleDownload} >
        下载文件
      </Button>
    </div>
  );
};

export default Demo;
