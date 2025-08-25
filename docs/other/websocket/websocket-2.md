---
title: Websocket 具体语法
authors: [bb]
---

## Websocket 具体语法

### 事件说明

onopen: 连接建立时触发，标记 connected=true/connecting=false，重置重连次数，启动心跳。
onmessage: 收到服务器消息时触发，JSON解析后交给 handleMessage 分流（connection/heartbeat_ack/message）。
onclose: 连接关闭时触发，标记断开，停止心跳，触发自动重连流程。
onerror: 连接错误时触发，标记断开（不一定有 close，但这里先降级为未连接）。
这些监听器只在 connect() 时注册一次；真正的状态变更是“事件发生时”通过 updateStatus 推送给订阅者
