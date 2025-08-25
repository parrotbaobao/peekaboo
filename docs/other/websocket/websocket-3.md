---
title: Websocket 面试题
authors: [bb]
---

WebSocket 是一个很常见的面试考点，尤其是在前端、后端和系统设计相关岗位。面试问题大致会分为几类：

### 🔹 基础概念类

1. **WebSocket 和 HTTP 的区别是什么？**
   - HTTP 是请求-响应模式，WebSocket 是全双工、持久化连接。
   - HTTP 通常需要轮询，WebSocket 一次握手后即可双向通信。

2. **WebSocket 是基于 TCP 还是 UDP？**
   - 基于 TCP。

3. **WebSocket 握手过程是怎样的？**
   - 前端发起带 `Upgrade: websocket` 的 HTTP 请求。
   - 服务端校验 `Sec-WebSocket-Key`，返回 `Sec-WebSocket-Accept` 和 `101 Switching Protocols`。
   - 握手成功后 TCP 连接升级为 WebSocket 连接。

4. **WebSocket 如何保证安全？**
   - 使用 `wss://`（基于 TLS/SSL）。
   - 握手时携带 Token / Cookie 做鉴权。

---

### 🔹 实战类

1. **WebSocket 如何做心跳？**
   - 客户端定期发送 `ping`，服务端回复 `pong`。
   - 用来检测连接是否存活、防止中间网络设备断开空闲连接。

2. **WebSocket 如何做断线重连？**
   - 客户端监听 `onclose` / `onerror`，指数退避或固定间隔重连。

3. **WebSocket 如何做鉴权？**
   - 握手时通过 URL 参数或 Header 携带 Token。
   - 服务端校验 Token，有效才建立连接。

---

### 🔹 性能 & 优化类

1. **WebSocket 相比 HTTP 轮询/长轮询有什么性能优势？**
   - 轮询会频繁发请求，浪费带宽和资源。
   - WebSocket 握手成功后是长连接，只要有数据才传输，开销小。

2. **WebSocket 适合用在什么场景？**
   - 即时通信（IM、聊天室、游戏）。
   - 实时推送（股票、体育比分、交易行情）。
   - 协作编辑（Google Docs 类应用）。

3. **WebSocket 在性能优化上能做什么？**
   - **减少轮询开销**：避免每秒几十上百个 HTTP 请求。
   - **压缩数据帧**：开启 `permessage-deflate` 压缩扩展。
   - **分频道/房间**：只把消息推送给需要的用户，减少广播。
   - **合理心跳间隔**：避免过于频繁的心跳占用带宽。
   - **负载均衡 + 消息队列**：保证横向扩展能力。
