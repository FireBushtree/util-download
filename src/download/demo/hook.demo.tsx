import React from 'react';
import { Button } from 'antd';
import { useDownload } from '@env/util-download';

const Demo = () => {
  const { run, loading } = useDownload(
    '/cloud/njgcq/web/api/collectConfig/genQRCodeZip',
    {
      access_token: 'e150fc15-5e6d-4aa1-8617-827ce8576ce6',
    },
  );

  return (
    <div>
      <div>使用hook的下载文件示例</div>
      <Button
        loading={loading}
        type="primary"
        onClick={() =>
          run({
            exportIds: '0e1b33ac0fdf44cd81c2026b8ece37f3',
          })
        }
        style={{ marginTop: 20 }}
      >
        下载
      </Button>
    </div>
  );
};

export default Demo;
