# 量子力学与网页渲染测试

这是一份全功能的 Markdown 测试文档，用于检验你的 MkDocs 网站配置是否已经达到完美状态。

---

## 1. 数学公式渲染测试 (MathJax)

### 行内公式
根据德布罗意物质波假设，粒子的动量 $p$ 与波长 $\lambda$ 的关系为 $p = \frac{h}{\lambda}$，其中 $h$ 是普朗克常数。

### 独立块级公式
以下是一维不含时薛定谔方程的标准形式：

$$
-\frac{\hbar^2}{2m} \frac{d^2\psi(x)}{dx^2} + V(x)\psi(x) = E\psi(x)
$$


---

## 2. 代码高亮与复制测试

下面是一段计算动能的 Python 脚本，请检查右上角是否有“复制”按钮，以及代码是否有了漂亮的颜色高亮。

```python
import numpy as np

def calculate_energy(mass, velocity):
    """
    计算物体的动能
    :param mass: 质量 (kg)
    :param velocity: 速度 (m/s)
    :return: 动能 (Joules)
    """
    kinetic_energy = 0.5 * mass * velocity**2
    return kinetic_energy

# 测试样例
m = 2.0  # kg
v = 3.0  # m/s
print(f"Energy: {calculate_energy(m, v)} J")
```