<p align="center">
  <img src="https://raw.githubusercontent.com/mdyao/PhotoAgent/main/images/photoagent_icon.jpg" width="80" style="border-radius:16px" />
</p>

<h1 align="center">PhotoAgent</h1>
<h3 align="center">Agentic Photo Editing with Exploratory Visual Aesthetic Planning</h3>

<p align="center">
  <a href="https://mdyao.github.io/PhotoAgent/"><img src="https://img.shields.io/badge/Project-Page-blue?style=for-the-badge&logo=googlechrome&logoColor=white" /></a>&nbsp;
  <a href="#"><img src="https://img.shields.io/badge/arXiv-Paper-b31b1b?style=for-the-badge&logo=arxiv&logoColor=white" /></a>&nbsp;
  <a href="#"><img src="https://img.shields.io/badge/%F0%9F%A4%97-HuggingFace-yellow?style=for-the-badge" /></a>&nbsp;
  <a href="#"><img src="https://img.shields.io/badge/Dataset-Coming-green?style=for-the-badge&logo=databricks&logoColor=white" /></a>
</p>

<p align="center">
  <a href="https://mdyao.github.io/">Mingde Yao</a><sup>1,5</sup>&nbsp;&nbsp;
  <a href="https://zhiyuanyou.github.io/">Zhiyuan You</a><sup>1,6</sup>&nbsp;&nbsp;
  King-Man Tam<sup>4</sup>&nbsp;&nbsp;
  Menglu Wang<sup>3</sup>&nbsp;&nbsp;
  <a href="https://tianfan.info/">Tianfan Xue</a><sup>1,2,5</sup>
</p>

<p align="center">
  <sup>1</sup>CUHK MMLab&nbsp;&nbsp;
  <sup>2</sup>Shanghai AI Lab&nbsp;&nbsp;
  <sup>3</sup>USTC&nbsp;&nbsp;
  <sup>4</sup>Institute of Science Tokyo&nbsp;&nbsp;
  <sup>5</sup>CPII InnoHK&nbsp;&nbsp;
  <sup>6</sup>SIAT, CAS
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/mdyao/PhotoAgent/main/images/teaser.jpg" width="100%" />
</p>

> **One goal, one click, autonomous enhancement.** PhotoAgent turns photos into professionally edited results through exploratory visual aesthetic planning — no step-by-step prompts required.

---

## Paradigm: From Human-in-the-loop to Agent-in-the-loop

Traditional photo editing demands expertise, endless parameter tuning, and exhausting trial-and-error. PhotoAgent replaces this fragile **human-in-the-loop** pipeline with an autonomous **agent-in-the-loop** system — one that perceives, plans, executes, and evaluates like a seasoned professional.

<p align="center">
  <img src="https://raw.githubusercontent.com/mdyao/PhotoAgent/main/images/photoagent_loop.png" width="100%" />
</p>

---

## Highlights

|  | Feature | Description |
|:---:|:---|:---|
| 🔄 | **Closed-loop Planning** | Perceive–plan–execute–evaluate cycle with action memory and visual feedback. No open-loop, single-shot edits. |
| 🌳 | **MCTS-based Aesthetic Planner** | Monte Carlo Tree Search explores editing trajectories, avoids short-sighted or irreversible decisions. |
| 🧠 | **Action Memory & History** | Full editing history prevents redundant operations, enables context-aware decisions and faster convergence. |
| 🎯 | **Scene-Aware Classification** | Fine-grained scene classification (portrait, landscape, urban, food, low-light, indoor) with scene-specific strategies. |
| 🛠 | **Rich Toolset** | Orchestrates GPT-Image-1, Flux.1 Kontext, Step1X-Edit, Nano Banana, ZImage, and more. |
| 📐 | **UGC-Oriented Evaluation** | UGC-Edit dataset (~7,000 photos) and reward model trained via GRPO on Qwen2.5-VL. |

---

## How PhotoAgent Works

PhotoAgent formulates autonomous image editing as a **long-horizon decision-making** problem with four core components in a closed-loop system:

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│   ┌───────────┐    ┌──────────┐    ┌──────────┐    ┌─────────────┐
│   │ Perceiver │───▶│ Planner  │───▶│ Executor │───▶│  Evaluator  │
│   │  (VLM)    │    │  (MCTS)  │    │  (Tools) │    │  (Metrics)  │
│   └───────────┘    └──────────┘    └──────────┘    └──────┬──────┘
│         ▲                                                  │
│         └──────────── memory + feedback ───────────────────┘
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

| Step | Component | What it does |
|:---:|:---|:---|
| **1** | **Perceiver** | VLM (Qwen3-VL) interprets the image and proposes *K* diverse, atomic editing actions |
| **2** | **Planner** | MCTS explores candidate actions via selection, expansion, simulation, and backpropagation |
| **3** | **Executor** | Runs selected actions with traditional or generative tools; retains the highest-scoring result |
| **4** | **Evaluator** | Ensemble of no-reference metrics, CLIP scores, and UGC reward model; drives re-planning when needed |

---

## Results

<p align="center">
  <b>State-of-the-art on instruction adherence and visual quality; preferred in user studies.</b>
</p>

### Editing Examples

<table>
  <tr>
    <td align="center"><b>Input</b></td>
    <td align="center"><b>Output</b></td>
    <td align="center"><b>Input</b></td>
    <td align="center"><b>Output</b></td>
  </tr>
  <tr>
    <td><img src="https://raw.githubusercontent.com/mdyao/PhotoAgent/main/images/results/img1-i.jpg" width="180" /></td>
    <td><img src="https://raw.githubusercontent.com/mdyao/PhotoAgent/main/images/results/img1-o.jpg" width="180" /></td>
    <td><img src="https://raw.githubusercontent.com/mdyao/PhotoAgent/main/images/results/img2-i.jpg" width="180" /></td>
    <td><img src="https://raw.githubusercontent.com/mdyao/PhotoAgent/main/images/results/img2-o.jpg" width="180" /></td>
  </tr>
  <tr>
    <td><img src="https://raw.githubusercontent.com/mdyao/PhotoAgent/main/images/results/img3-i.jpg" width="180" /></td>
    <td><img src="https://raw.githubusercontent.com/mdyao/PhotoAgent/main/images/results/img3-o.jpg" width="180" /></td>
    <td><img src="https://raw.githubusercontent.com/mdyao/PhotoAgent/main/images/results/img4-i.jpg" width="180" /></td>
    <td><img src="https://raw.githubusercontent.com/mdyao/PhotoAgent/main/images/results/img4-o.jpg" width="180" /></td>
  </tr>
  <tr>
    <td><img src="https://raw.githubusercontent.com/mdyao/PhotoAgent/main/images/results/img5-i.jpg" width="180" /></td>
    <td><img src="https://raw.githubusercontent.com/mdyao/PhotoAgent/main/images/results/img5-o.jpg" width="180" /></td>
    <td><img src="https://raw.githubusercontent.com/mdyao/PhotoAgent/main/images/results/img6-i.jpg" width="180" /></td>
    <td><img src="https://raw.githubusercontent.com/mdyao/PhotoAgent/main/images/results/img6-o.jpg" width="180" /></td>
  </tr>
</table>

<p align="center"><i>More results and interactive comparisons on the <a href="https://mdyao.github.io/PhotoAgent/">project page</a>.</i></p>

### Iterative Editing Process

PhotoAgent refines images over multiple iterations, with each round building on the previous result:

<table>
  <tr>
    <td align="center"><img src="https://raw.githubusercontent.com/mdyao/PhotoAgent/main/images/intermediate/fig1-1.png" width="200" /><br/><sub>Original</sub></td>
    <td align="center">→</td>
    <td align="center"><img src="https://raw.githubusercontent.com/mdyao/PhotoAgent/main/images/intermediate/fig1-2.png" width="200" /><br/><sub>Iter 1: Color & tone</sub></td>
    <td align="center">→</td>
    <td align="center"><img src="https://raw.githubusercontent.com/mdyao/PhotoAgent/main/images/intermediate/fig1-3.png" width="200" /><br/><sub>Iter 2: Atmosphere</sub></td>
    <td align="center">→</td>
    <td align="center"><img src="https://raw.githubusercontent.com/mdyao/PhotoAgent/main/images/intermediate/fig1-4.png" width="200" /><br/><sub>Iter 3: Final polish</sub></td>
  </tr>
</table>

---

## UGC-Edit Dataset & Benchmark

<p align="center">
  <img src="https://raw.githubusercontent.com/mdyao/PhotoAgent/main/images/dataset.png" width="100%" />
</p>

| Component | Details |
|:---|:---|
| **UGC-Edit Dataset** | ~7,000 authentic user-generated photos from LAION Aesthetic & RealQA, with human aesthetic scores (1–5 scale) |
| **UGC Reward Model** | Qwen2.5-VL fine-tuned with GRPO; learns from relative rankings for robust aesthetic scoring |
| **Editing Benchmark** | 1,017 real-world photos covering portraits, landscapes, urban scenes, food, low-light, and more |

---

## Code

> **Coming soon!** Code, pretrained models, and demo will be released here. Star the repo to stay updated.

---

## Citation

```bibtex
@article{yao2025photoagent,
  title   = {PhotoAgent: Agentic Photo Editing with Exploratory Visual Aesthetic Planning},
  author  = {Yao, Mingde and You, Zhiyuan and Tam, King-Man and Wang, Menglu and Xue, Tianfan},
  year    = {2025}
}
```

## License

This project is released under the [MIT License](LICENSE).
