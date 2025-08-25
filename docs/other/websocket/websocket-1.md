---
title: Websocket 心跳机制
authors: [bb]
---

## Websocket 心跳机制

### 为什么需要心跳

WebSocket 心跳机制（Heartbeat Mechanism）主要是用来 检测连接是否仍然有效，避免“假连接”（比如网络断开、NAT 设备或代理服务器超时关闭了连接，但应用层还以为连接存在）。

TCP 层面：虽然 TCP 有 keep-alive，但是默认周期很长（通常 2 小时），不适合实时应用。

应用层面：WebSocket 属于长连接，如果长时间无数据传输，中间的防火墙、代理、网关可能会关闭空闲连接。

目的：心跳用来 保活 + 检测断开，便于及时重连。

:::tip
心跳间隔建议结合网络环境与网关超时策略设定，过短浪费带宽，过长容易被中间设备回收。
:::

### 心跳实现方式

WebSocket 本身没有规定必须怎么做，通常由应用层自己实现：

```javascript
// 客户端心跳
connect() {
  socket = new WebSocket(url);

  socket.onopen = () => {
    // 启动心跳：每30秒发送一次
    setInterval(() => {
      socket.send(JSON.stringify({ type: 'heartbeat' }));
    }, 30000);
  };

  socket.onclose = () => {
    // 断线重连：5秒后重试，最多5次
    setTimeout(() => {
      if (reconnectAttempts < 5) {
        connect();
      }
    }, 5000);
  };
}
```
