---
title: angular.json 文件的一些知识
authors: [bb]
---

# angular.json 文件的一些知识

- ng new 生成的是angular workspace；
- 一个angular workspace里可以有多个angular project
  -- 项目的类型有氛围application和library
- angular.json的配置可以粗略的氛围全局和project-specific的两个部分
- architect里配置了不同的builder
  - builder都可以使用cli去运行
  - 可以在options中配置默认的builder默认选项
  - 可以用不同的options组合成预定义的configuration
- 使用library时，推荐先构建，再直接使用构建好的产物
