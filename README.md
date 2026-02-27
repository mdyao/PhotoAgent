# PhotoAgent: Agentic Photo Editing with Exploratory Visual Aesthetic Planning

<p align="center">
  <a href="https://mdyao.github.io/PhotoAgent/"><b>Project Page</b></a> &nbsp;|&nbsp;
  <b>Paper (Coming)</b> &nbsp;|&nbsp;
  <b>Demo (Coming)</b> &nbsp;|&nbsp;
  <b>Dataset (Coming)</b>
</p>

PhotoAgent is an autonomous photo editing agent that formulates image editing as a long-horizon decision-making problem. It reasons over user aesthetic intent, plans multi-step editing actions via Monte Carlo Tree Search (MCTS), and iteratively refines results through closed-loop execution with memory and visual feedback — no step-by-step prompts required.

## Highlights

- **Closed-loop planning** — Perceive–plan–execute–evaluate cycle with action memory. No open-loop, single-shot edits.
- **Exploratory aesthetic planning** — MCTS-based planner explores editing trajectories and avoids short-sighted or irreversible decisions.
- **Rich toolset** — Orchestrates GPT-Image-1, Flux.1 Kontext, Step1X-Edit, Nano Banana, ZImage, and more.
- **Scene-aware design** — Fine-grained scene classification (portrait, landscape, urban, food, low-light, indoor) with scene-specific editing strategies.
- **UGC-oriented evaluation** — UGC-Edit dataset (~7,000 photos) and reward model trained via GRPO on Qwen2.5-VL.

## Code

Code and pretrained models will be released here. Stay tuned!

## Authors

[Mingde Yao](https://mdyao.github.io/)<sup>1,5</sup>, [Zhiyuan You](https://zhiyuanyou.github.io/)<sup>1,6</sup>, Tam-King Man<sup>4</sup>, Menglu Wang<sup>3</sup>, [Tianfan Xue](https://tianfan.info/)<sup>1,2,5</sup>

<sup>1</sup>Multimedia Laboratory, The Chinese University of Hong Kong  
<sup>2</sup>Shanghai AI Laboratory  
<sup>3</sup>University of Science and Technology of China  
<sup>4</sup>Institute of Science Tokyo  
<sup>5</sup>CPII under InnoHK  
<sup>6</sup>Shenzhen Institute of Advanced Technology, Chinese Academy of Sciences

## Citation

```bibtex
@article{yao2025photoagent,
  title   = {PhotoAgent: Agentic Photo Editing with Exploratory Visual Aesthetic Planning},
  author  = {Yao, Mingde and You, Zhiyuan and Man, Tam-King and Wang, Menglu and Xue, Tianfan},
  year    = {2025}
}
```

## License

This project is released under the [MIT License](LICENSE).
