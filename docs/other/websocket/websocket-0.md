---
title: Websocket 简介
authors: [bb]
---

## Websocket

WebSocket 是一种在单个 TCP 连接上进行全双工通信的协议，用于高效实时通信，弥补传统 HTTP 请求-响应模式的不足。

## 工作原理

- 握手：客户端通过 HTTP 发起带有 `Upgrade: websocket` 的请求，服务端返回 `101 Switching Protocols`，升级为 WebSocket。
- 通信：连接建立后，双方可在持久连接上双向发送数据；消息以帧（frame）传输，支持文本与二进制。

## 与 HTTP 的区别

| 特点     | HTTP                  | WebSocket                  |
| -------- | --------------------- | -------------------------- |
| 通信模式 | 请求-响应             | 全双工、实时双向           |
| 连接     | 每次请求都要建立      | 一次握手，长连接           |
| 性能     | Header 冗余，频繁握手 | 帧开销小，低延迟           |
| 应用场景 | API 请求、页面加载    | 实时聊天、推送、游戏、行情 |

## 注意事项

:::note

- 心跳：保持连接活跃，及时发现断链。
- 鉴权：常在握手阶段用 token 认证。
- 负载均衡：生产环境结合 sticky session 或消息队列。

:::

## 名词解释

1. TCP：面向连接、可靠、全双工的传输层协议。
   - 可靠性：丢包重传、顺序由序号保证。
   - 面向连接：通信前需建立连接（握手）。
   - 全双工：双方可同时收发。

2. 全双工通信：双方同时发送与接收，互不阻塞，类似打电话。

3. Upgrade 头：浏览器在 `new WebSocket(url)` 时自动添加 `Upgrade: websocket`；非浏览器客户端需自行添加。

4. 握手细节（`101 Switching Protocols`）：
   - 客户端头包含：`Upgrade: websocket`、`Connection: Upgrade`、`Sec-WebSocket-Version: 13`、`Sec-WebSocket-Key`（随机字符串）。
   - 服务端将 `Sec-WebSocket-Key` 与固定 GUID 拼接，经 SHA-1 后 Base64，作为 `Sec-WebSocket-Accept` 返回；客户端按 RFC 6455 校验一致即握手成功。

5. 心跳的必要性：WebSocket 基于 TCP，连接可能因网络、代理、异常退出等中断；需用心跳检测确认连接是否存活，不存活则重连。
