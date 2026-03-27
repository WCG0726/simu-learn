---
layout: home
hero:
  name: 仿真学习平台
  text: COMSOL & ANSYS & DEFORM
  tagline: 多物理场仿真、金属成形、电子封装 - 从入门到进阶
  image:
    src: /hero.svg
    alt: 仿真学习
  actions:
    - theme: brand
      text: 开始学习
      link: /comsol/
    - theme: alt
      text: 在 GitHub 上查看
      link: https://github.com/WCG0726/simu-learn

features:
  - icon: 🔬
    title: COMSOL Multiphysics
    details: 多物理场耦合仿真，适用于复杂工程问题的数值模拟
    link: /comsol/
  
  - icon: ⚙️
    title: ANSYS
    details: 业界领先的有限元分析软件，涵盖结构、流体、电磁等领域
    link: /ansys/
  
  - icon: 🔨
    title: DEFORM
    details: 专业金属成形仿真软件，锻造、挤压、热处理等工艺优化
    link: /deform/
  
  - icon: 📦
    title: 电子封装
    details: 热管理、应力分析、焊点可靠性、封装优化
    link: /comsol/electronic-packaging/
  
  - icon: ⚡
    title: 热电材料
    details: Seebeck/Peltier 效应、热电模块仿真、ZT 值优化
    link: /comsol/thermoelectric/
  
  - icon: 🛠️
    title: 实用工具
    details: 热阻计算器、网格估算器、材料数据库、参数参考
    link: /tools/

---

## 📚 学习路径

<div class="learning-path">

### 入门阶段
1. **软件基础** - 安装配置、界面熟悉、基本操作
2. **几何建模** - 2D/3D 几何创建、布尔运算
3. **网格划分** - 网格类型选择、质量控制
4. **求解器** - 稳态/瞬态分析、收敛设置

### 进阶阶段
1. **多物理场耦合** - 热-结构、热-电、流-热耦合
2. **参数优化** - 优化模块、参数扫描
3. **自定义方程** - PDE 接口、弱形式
4. **二次开发** - 脚本自动化、API 集成

</div>

## 🎯 适用人群

- 🎓 **学生** - 学习仿真技术，完成课题研究
- 👨‍🔬 **研究人员** - 进行多物理场仿真分析
- 👷 **工程师** - 解决工程实际问题
- 🏭 **企业** - 产品设计、优化、验证

## 📖 内容特色

::: tip 实战导向
每个教程都包含完整的操作步骤和实际案例
:::

::: warning 参数详解
详细解释每个参数的物理意义和设置方法
:::

::: info 案例丰富
涵盖电子封装、热电材料、热-电-力耦合等多个领域
:::

---

## ⚠️ 免责声明

**本站内容大部分由 AI 生成，仅供参考学习使用。如有疑问，请以 [COMSOL 官方文档](https://www.comsol.com/documentation)、[ANSYS 官方文档](https://www.ansys.com/documentation-center) 或 [DEFORM 官方网站](https://www.deform.com) 为准。**

<style>
.learning-path {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 24px;
  margin: 24px 0;
}

.learning-path h3 {
  margin-top: 16px;
  margin-bottom: 8px;
}

.learning-path ol {
  margin-left: 20px;
}

.learning-path li {
  margin-bottom: 8px;
}
</style>
