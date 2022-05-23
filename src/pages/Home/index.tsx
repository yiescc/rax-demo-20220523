import { createElement } from 'rax';
import { Button, ConfigProvider, Message } from '@alifd/meet';

export default function Home() {
  return (
    <ConfigProvider>
      <Button
        onClick={() => {
          const hide = Message.show({
            type: 'loading',
          });
          setTimeout(() => {
            hide();
            Message.success({ content: '操作成功' });
          }, 1000);
        }}
      >
        点击
      </Button>
    </ConfigProvider>
  );
}
