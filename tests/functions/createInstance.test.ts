import { renderHook } from '@testing-library/react';
import { createInstance } from 'antd-style';

describe('createInstance', () => {
  const instance = createInstance({
    key: 'xxx',
    prefixCls: 'test',
    speedy: true,
    defaultCustomToken: {
      x: '123',
    },
  });
  it('创建独立样式实例,key 为 xxx，speedy 为 true', () => {
    expect(instance.styleManager.sheet.key).toEqual('xxx');
    expect(instance.styleManager.sheet.speedy).toBeTruthy();
  });

  it('useTheme 拿到的 prefixCls 为 test', () => {
    const { result } = renderHook(instance.useTheme);

    expect(result.current.prefixCls).toEqual('test');
  });

  it('useTheme 拿到的 token 里有 x 为 123', () => {
    const { result } = renderHook(instance.useTheme);

    expect(result.current.x).toEqual('123');
  });

  it('创建实例时可以不填 key', () => {
    const instance = createInstance({
      prefixCls: 'test',
      speedy: true,
      defaultCustomToken: {
        x: '123',
      },
    });
    expect(instance.styleManager.sheet.key).toEqual('ant-css');
  });
});
