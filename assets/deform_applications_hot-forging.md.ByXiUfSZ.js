import{_ as s,o as n,c as t,ag as e}from"./chunks/framework.BVdG3tbf.js";const b=JSON.parse('{"title":"热锻仿真","description":"","frontmatter":{},"headers":[],"relativePath":"deform/applications/hot-forging.md","filePath":"deform/applications/hot-forging.md","lastUpdated":null}'),p={name:"deform/applications/hot-forging.md"};function l(i,a,d,o,r,c){return n(),t("div",null,[...a[0]||(a[0]=[e(`<h1 id="热锻仿真" tabindex="-1">热锻仿真 <a class="header-anchor" href="#热锻仿真" aria-label="Permalink to &quot;热锻仿真&quot;">​</a></h1><p>热锻是 DEFORM 最经典的应用场景。本节介绍如何使用 DEFORM 进行热锻过程仿真。</p><h2 id="📚-热锻基础" tabindex="-1">📚 热锻基础 <a class="header-anchor" href="#📚-热锻基础" aria-label="Permalink to &quot;📚 热锻基础&quot;">​</a></h2><h3 id="什么是热锻" tabindex="-1">什么是热锻？ <a class="header-anchor" href="#什么是热锻" aria-label="Permalink to &quot;什么是热锻？&quot;">​</a></h3><p>热锻是在再结晶温度以上进行的塑性成形工艺。由于高温下金属的流动应力降低，可以获得较大的变形量和良好的成形性。</p><h3 id="热锻温度范围" tabindex="-1">热锻温度范围 <a class="header-anchor" href="#热锻温度范围" aria-label="Permalink to &quot;热锻温度范围&quot;">​</a></h3><table tabindex="0"><thead><tr><th>材料</th><th>始锻温度 (°C)</th><th>终锻温度 (°C)</th></tr></thead><tbody><tr><td>碳钢</td><td>1200-1250</td><td>800-850</td></tr><tr><td>合金钢</td><td>1150-1200</td><td>850-900</td></tr><tr><td>铝合金</td><td>400-500</td><td>350-400</td></tr><tr><td>钛合金</td><td>900-950</td><td>800-850</td></tr><tr><td>镍基合金</td><td>1100-1150</td><td>900-950</td></tr></tbody></table><h2 id="🔧-仿真设置" tabindex="-1">🔧 仿真设置 <a class="header-anchor" href="#🔧-仿真设置" aria-label="Permalink to &quot;🔧 仿真设置&quot;">​</a></h2><h3 id="步骤-1-创建几何" tabindex="-1">步骤 1：创建几何 <a class="header-anchor" href="#步骤-1-创建几何" aria-label="Permalink to &quot;步骤 1：创建几何&quot;">​</a></h3><ol><li><p><strong>导入 CAD 模型</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Pre-Processor → Geometry → Import</span></span>
<span class="line"><span>├── 文件类型: STL</span></span>
<span class="line"><span>├── 单位: mm</span></span>
<span class="line"><span>└── 导入工件和模具</span></span></code></pre></div></li><li><p><strong>或使用 DEFORM 建模</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Pre-Processor → Geometry → Create</span></span>
<span class="line"><span>├── 圆柱体</span></span>
<span class="line"><span>├── 长方体</span></span>
<span class="line"><span>└── 自定义形状</span></span></code></pre></div></li></ol><h3 id="步骤-2-定义材料" tabindex="-1">步骤 2：定义材料 <a class="header-anchor" href="#步骤-2-定义材料" aria-label="Permalink to &quot;步骤 2：定义材料&quot;">​</a></h3><ol><li><p><strong>从材料库选择</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Pre-Processor → Material → Library</span></span>
<span class="line"><span>├── 选择材料: AISI-1045</span></span>
<span class="line"><span>└── 添加到工件</span></span></code></pre></div></li><li><p><strong>材料参数</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>材料属性:</span></span>
<span class="line"><span>├── 密度: 7850 kg/m³</span></span>
<span class="line"><span>├── 弹性模量: 210 GPa</span></span>
<span class="line"><span>├── 泊松比: 0.3</span></span>
<span class="line"><span>├── 热导率: 45 W/(m·K)</span></span>
<span class="line"><span>├── 比热容: 480 J/(kg·K)</span></span>
<span class="line"><span>└── 流变应力: σ = f(ε, ε̇, T)</span></span></code></pre></div></li></ol><h3 id="步骤-3-设置边界条件" tabindex="-1">步骤 3：设置边界条件 <a class="header-anchor" href="#步骤-3-设置边界条件" aria-label="Permalink to &quot;步骤 3：设置边界条件&quot;">​</a></h3><ol><li><p><strong>温度边界</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>边界条件 → 温度</span></span>
<span class="line"><span>├── 工件初始温度: 1100 °C</span></span>
<span class="line"><span>├── 模具初始温度: 200 °C</span></span>
<span class="line"><span>└── 环境温度: 25 °C</span></span></code></pre></div></li><li><p><strong>速度边界</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>边界条件 → 速度</span></span>
<span class="line"><span>├── 上模速度: 100 mm/s</span></span>
<span class="line"><span>├── 下模固定</span></span>
<span class="line"><span>└── 工件对称约束</span></span></code></pre></div></li><li><p><strong>换热边界</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>边界条件 → 换热</span></span>
<span class="line"><span>├── 工件-模具: h = 5000 W/(m²·K)</span></span>
<span class="line"><span>├── 工件-空气: h = 20 W/(m²·K)</span></span>
<span class="line"><span>└── 模具-空气: h = 20 W/(m²·K)</span></span></code></pre></div></li></ol><h3 id="步骤-4-设置接触" tabindex="-1">步骤 4：设置接触 <a class="header-anchor" href="#步骤-4-设置接触" aria-label="Permalink to &quot;步骤 4：设置接触&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>接触设置:</span></span>
<span class="line"><span>├── 接触对: 工件-模具</span></span>
<span class="line"><span>├── 摩擦模型: Shear</span></span>
<span class="line"><span>├── 摩擦系数: 0.3</span></span>
<span class="line"><span>└── 热传导系数: 5000 W/(m²·K)</span></span></code></pre></div><h3 id="步骤-5-设置仿真参数" tabindex="-1">步骤 5：设置仿真参数 <a class="header-anchor" href="#步骤-5-设置仿真参数" aria-label="Permalink to &quot;步骤 5：设置仿真参数&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>仿真控制:</span></span>
<span class="line"><span>├── 步骤数: 100</span></span>
<span class="line"><span>├── 时间步: 自动 (0.001s)</span></span>
<span class="line"><span>├── 保存间隔: 每 10 步</span></span>
<span class="line"><span>└── 总行程: 50 mm</span></span></code></pre></div><h2 id="📊-结果分析" tabindex="-1">📊 结果分析 <a class="header-anchor" href="#📊-结果分析" aria-label="Permalink to &quot;📊 结果分析&quot;">​</a></h2><h3 id="应变分布" tabindex="-1">应变分布 <a class="header-anchor" href="#应变分布" aria-label="Permalink to &quot;应变分布&quot;">​</a></h3><p>查看等效应变分布：</p><ol><li>Post-Processor → Strain → Effective Strain</li><li>观察应变集中区域</li><li>评估变形均匀性</li></ol><h3 id="应力分布" tabindex="-1">应力分布 <a class="header-anchor" href="#应力分布" aria-label="Permalink to &quot;应力分布&quot;">​</a></h3><p>查看等效应力分布：</p><ol><li>Post-Processor → Stress → Effective Stress</li><li>识别应力集中位置</li><li>评估模具载荷</li></ol><h3 id="温度分布" tabindex="-1">温度分布 <a class="header-anchor" href="#温度分布" aria-label="Permalink to &quot;温度分布&quot;">​</a></h3><p>查看温度场变化：</p><ol><li>Post-Processor → Temperature</li><li>观察温度下降趋势</li><li>评估成形窗口</li></ol><h3 id="载荷曲线" tabindex="-1">载荷曲线 <a class="header-anchor" href="#载荷曲线" aria-label="Permalink to &quot;载荷曲线&quot;">​</a></h3><p>查看载荷-位移曲线：</p><ol><li>Post-Processor → Graphs → Load vs Stroke</li><li>分析载荷变化</li><li>预测设备吨位</li></ol><h2 id="📐-典型案例" tabindex="-1">📐 典型案例 <a class="header-anchor" href="#📐-典型案例" aria-label="Permalink to &quot;📐 典型案例&quot;">​</a></h2><h3 id="案例-1-圆柱体镦粗" tabindex="-1">案例 1：圆柱体镦粗 <a class="header-anchor" href="#案例-1-圆柱体镦粗" aria-label="Permalink to &quot;案例 1：圆柱体镦粗&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>几何:</span></span>
<span class="line"><span>├── 工件: φ50 × 80 mm 圆柱</span></span>
<span class="line"><span>├── 上模: 平面模具</span></span>
<span class="line"><span>└── 下模: 平面模具</span></span>
<span class="line"><span></span></span>
<span class="line"><span>参数:</span></span>
<span class="line"><span>├── 材料: AISI-1045</span></span>
<span class="line"><span>├── 温度: 1100 °C</span></span>
<span class="line"><span>├── 速度: 100 mm/s</span></span>
<span class="line"><span>├── 摩擦: 0.3</span></span>
<span class="line"><span>└── 行程: 50 mm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>结果:</span></span>
<span class="line"><span>├── 最大载荷: 1500 kN</span></span>
<span class="line"><span>├── 最终形状: 鼓形</span></span>
<span class="line"><span>└── 温降: ~50 °C</span></span></code></pre></div><h3 id="案例-2-轴对称件锻造" tabindex="-1">案例 2：轴对称件锻造 <a class="header-anchor" href="#案例-2-轴对称件锻造" aria-label="Permalink to &quot;案例 2：轴对称件锻造&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>几何:</span></span>
<span class="line"><span>├── 工件: 阶梯轴毛坯</span></span>
<span class="line"><span>├── 上模: 成形模具</span></span>
<span class="line"><span>└── 下模: 成形模具</span></span>
<span class="line"><span></span></span>
<span class="line"><span>参数:</span></span>
<span class="line"><span>├── 材料: 42CrMo4</span></span>
<span class="line"><span>├── 温度: 1150 °C</span></span>
<span class="line"><span>├── 速度: 200 mm/s</span></span>
<span class="line"><span>├── 摩擦: 0.25</span></span>
<span class="line"><span>└── 2 步成形</span></span>
<span class="line"><span></span></span>
<span class="line"><span>结果:</span></span>
<span class="line"><span>├── 填充完整</span></span>
<span class="line"><span>├── 载荷合理</span></span>
<span class="line"><span>└── 无折叠缺陷</span></span></code></pre></div><h2 id="💡-优化建议" tabindex="-1">💡 优化建议 <a class="header-anchor" href="#💡-优化建议" aria-label="Permalink to &quot;💡 优化建议&quot;">​</a></h2><h3 id="减少载荷" tabindex="-1">减少载荷 <a class="header-anchor" href="#减少载荷" aria-label="Permalink to &quot;减少载荷&quot;">​</a></h3><table tabindex="0"><thead><tr><th>措施</th><th>效果</th></tr></thead><tbody><tr><td>提高始锻温度</td><td>显著降低载荷</td></tr><tr><td>降低摩擦系数</td><td>中等降低载荷</td></tr><tr><td>优化预锻形状</td><td>减少变形量</td></tr><tr><td>增加工步</td><td>分散载荷</td></tr></tbody></table><h3 id="提高模具寿命" tabindex="-1">提高模具寿命 <a class="header-anchor" href="#提高模具寿命" aria-label="Permalink to &quot;提高模具寿命&quot;">​</a></h3><table tabindex="0"><thead><tr><th>措施</th><th>效果</th></tr></thead><tbody><tr><td>降低模具温度</td><td>减少热疲劳</td></tr><tr><td>优化模具圆角</td><td>减少应力集中</td></tr><tr><td>使用润滑</td><td>降低摩擦</td></tr><tr><td>预热模具</td><td>减少热冲击</td></tr></tbody></table><h3 id="避免缺陷" tabindex="-1">避免缺陷 <a class="header-anchor" href="#避免缺陷" aria-label="Permalink to &quot;避免缺陷&quot;">​</a></h3><table tabindex="0"><thead><tr><th>缺陷</th><th>原因</th><th>解决方案</th></tr></thead><tbody><tr><td>折叠</td><td>金属流动不合理</td><td>优化模具设计</td></tr><tr><td>充不满</td><td>载荷不足</td><td>增加行程或预锻</td></tr><tr><td>过热</td><td>温度过高</td><td>降低始锻温度</td></tr><tr><td>开裂</td><td>变形过大</td><td>增加工步</td></tr></tbody></table><h2 id="📖-下一步" tabindex="-1">📖 下一步 <a class="header-anchor" href="#📖-下一步" aria-label="Permalink to &quot;📖 下一步&quot;">​</a></h2><ul><li><a href="/simu-learn/deform/applications/cold-extrusion.html">冷挤压仿真</a></li><li><a href="/simu-learn/deform/applications/heat-treatment.html">热处理仿真</a></li></ul><hr><div class="tip custom-block"><p class="custom-block-title">提示</p><p>热锻仿真的关键是准确的材料数据和合理的边界条件设置。</p></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>实际锻造中还需考虑氧化、脱碳等因素，仿真结果仅供参考。</p></div>`,48)])])}const u=s(p,[["render",l]]);export{b as __pageData,u as default};
