---
layout: project
title: "ConceptAudit: Mechanistic Interpretability of Concept Bottleneck Models"
short_title: "ConceptAudit"
date: 2026-04-01
status: "active"
github: "https://github.com/Matt-Cockayne/portfolio/tree/main/BirdCBM"
tags: ["AI Safety", "Mechanistic Interpretability", "Concept Bottleneck Models", "Linear Probing", "Explainable AI", "Deep Learning"]
technologies: ["PyTorch", "ConvNeXt", "Python", "scikit-learn", "Matplotlib"]
description: "A mechanistic interpretability audit of Concept Bottleneck Models: probing four backbone stages to quantify when and where concepts emerge, whether the bottleneck is faithful, and how a non-concept information pathway grows during training — with direct implications for AI safety."
keywords: "concept bottleneck models, mechanistic interpretability, AI safety, linear probing, bottleneck leakage, concept emergence, CUB-200-2011, ConvNeXt, interpretability audit, concept fidelity"
author: "Matthew J. Cockayne"
thumbnail: "/assets/projects/conceptaudit/fig8_cbm_prediction.png"
og_image: "/assets/projects/conceptaudit/fig8_cbm_prediction.png"
featured: true
---

## Overview

**ConceptAudit** is a mechanistic interpretability study that asks: *does the declared reasoning inside a Concept Bottleneck Model (CBM) account for its actual computation?*

Concept Bottleneck Models \[Koh et al., ICML 2020\] insert an explicit layer of human-readable binary attributes between perception and prediction. The architectural design implies a guarantee: an interpretability auditor reading the concept predictions obtains a complete account of the model's reasoning. **ConceptAudit challenges this guarantee**, using linear probing at four backbone depths to trace how concepts emerge, how the internal geometry relates to semantic structure, and importantly how much species-relevant information bypasses the declared concept channel entirely.

A novel *leakage trajectory* analysis tracks the faithfulness of the bottleneck across training checkpoints, revealing the exact epoch at which the undeclared (non-concept) pathway becomes the dominant source of task information. This has direct implications for **AI safety and interpretability auditing**: a model can satisfy an architectural interpretability requirement while routing the majority of its computation through an uninspectable internal pathway.

### Key Findings

| Result | Value |
|--------|-------|
| Concept AUC at final stage (CBM) | 0.760 |
| Concept AUC at final stage (Standard classifier) | 0.753 |
| Full backbone species accuracy | 86.3% |
| Binary concept channel accuracy | 42.3% |
| Bottleneck leakage score at convergence | **0.989** |
| Epoch of concept–residual crossover | **Epoch 14 / 50** |

---

## Dataset & Architecture

<div class="image-grid">
  <div class="image-item">
    <img src="/assets/projects/conceptaudit/fig7_cub_data_example.png" alt="CUB-200-2011 data examples — 3 species × 3 test images">
    <p><strong>CUB-200-2011</strong>: 11,788 images, 200 bird species, 312 binary attribute annotations per image. Three species shown: Mallard, Tree Swallow, and Common Yellowthroat. Images are cropped to their ground-truth bounding box; attribute badges on the first column show the three most specific annotations for that individual.</p>
  </div>
</div>

The model is a **ConvNeXt-Base backbone** (88M parameters, ImageNet-1K pretrained) with 265 concept prediction heads and a linear species classifier. Training is *sequential*: 30 epochs of binary cross-entropy concept supervision, followed by 20 epochs of frozen-backbone species training.

### CBM Inference Pipeline

<div class="image-grid">
  <div class="image-item">
    <img src="/assets/projects/conceptaudit/fig8_cbm_prediction.png" alt="CBM inference: concept bottleneck prediction panel">
    <p><strong>CBM Inference Example.</strong> Left: a Green Violetear test image, correctly identified at 48.5% confidence. Centre: the 10 highest-probability concept predictions, coloured by agreement with ground-truth annotations (blue = correct, orange = incorrect). Right: top-10 species predictions with the ground-truth class highlighted in blue. The mix of correct and incorrect concept predictions illustrates how the bottleneck can arrive at the right answer through a partially wrong intermediate representation.</p>
  </div>
</div>

---

## Research Questions & Results

### RQ1: Where Do Concepts Emerge?

<div class="image-grid">
  <div class="image-item">
    <img src="/assets/projects/conceptaudit/fig1_concept_emergence_summary.png" alt="Mean concept probe AUC vs backbone depth for CBM, Standard, and Untrained">
    <p><strong>Concept emergence vs depth.</strong> Mean probe AUC ± 1σ across 265 concepts at four ConvNeXt stages. Both trained models exhibit a sharp jump at Stage 3→4 (+0.10 AUC). The untrained backbone declines with depth (0.557→0.528), confirming that concept separability is learned rather than architecturally given.</p>
  </div>
  <div class="image-item">
    <img src="/assets/projects/conceptaudit/fig2_separability_by_group.png" alt="Concept separability by semantic category">
    <p><strong>Separability by concept category.</strong> Colour (size) and colour (hue) concepts are most linearly separable at Stage 4 (AUC ≈ 0.78); shape concepts plateau at 0.705. The gap between CBM (solid) and Standard classifier (dashed) is negligible across all semantic groups — the concept training objective does not meaningfully reshape internal representations.</p>
  </div>
</div>

**Key takeaway**: The concept bottleneck training objective provides only **+0.0075 AUC** over standard species classification for internal concept separability. Interpretability advantage resides entirely in the output layer, not in a richer internal geometry.

### RQ2: Does Representation Geometry Reflect Semantic Structure?

<div class="image-grid">
  <div class="image-item">
    <img src="/assets/projects/conceptaudit/fig3_cka_by_layer.png" alt="CKA between probe-weight similarity and ground-truth co-occurrence">
    <p><strong>Centered Kernel Alignment (CKA)</strong> between the probe-weight cosine similarity matrix and the ground-truth Jaccard co-occurrence matrix. CKA peaks at Stage 3 (0.872), then decreases slightly at Stage 4 (0.857) as the deepest layer reorganises for discriminative classification at the expense of semantic geometry. All values are significant (p&lt;0.01, 100 permutations).</p>
  </div>
  <div class="image-item">
    <img src="/assets/projects/conceptaudit/fig6_prevalence_scatter.png" alt="Concept prevalence vs probe AUC">
    <p><strong>Prevalence vs AUC scatter.</strong> Rare concepts (&lt;5% of images) achieve comparable AUC (0.743) to common ones (≥30%, AUC 0.781). However, F1 score for rare concepts is substantially lower (0.183 vs 0.669) due to majority-class imbalance — an important caveat for any system that relies on rare attribute detection for safety-critical decisions.</p>
  </div>
</div>

### RQ3: Is the Concept Bottleneck Faithful?

<div class="image-grid">
  <div class="image-item" style="max-width: 600px; margin: 0 auto;">
    <img src="/assets/projects/conceptaudit/fig4_leakage_static.png" alt="Bottleneck fidelity decomposition at Stage 4">
    <p><strong>Bottleneck fidelity at convergence.</strong> The backbone encodes 86.3% species accuracy, but binary concept predictions expose only 42.3%. The residual (non-concept) pathway achieves 85.3% accuracy — a leakage score of <strong>0.989</strong>. This means 98.9% of the task-relevant information not explainable by chance resides in the undeclared pathway. Continuous concept scores (69.5%) also leave a 16.8 percentage-point gap versus the full representation.</p>
  </div>
</div>

> **AI Safety Implication**: A practitioner auditing the concept predictions would observe reasonable, semantically coherent outputs — yet the model's actual prediction relies overwhelmingly on an uninspectable residual pathway. The interpretability guarantee is architectural, not computational.

### RQ4: How Does Bottleneck Fidelity Evolve During Training?

<div class="image-grid">
  <div class="image-item">
    <img src="/assets/projects/conceptaudit/fig5_leakage_trajectory_annotated.png" alt="Leakage trajectory across training epochs">
    <p><strong>Leakage trajectory across 50 training epochs.</strong> <em>Left</em>: concept accuracy (solid) decreases as BCE supervision forces sigmoid outputs toward binary predictions, stripping continuous discriminative signal. The residual (dashed) is stable. The two cross at <strong>epoch 14</strong>. <em>Right</em>: leakage score rises from 0.793 to 0.857 over Phase 1. Backbone freezing (Phase 2, epoch 30+) locks in the gap at −10.2 percentage points.</p>
  </div>
</div>

The binarisation process that creates human-readable concepts is precisely the mechanism that degrades bottleneck faithfulness — a **fundamental Pareto trade-off** between interpretability and fidelity.

---

## AI Safety Implications

This work addresses a question central to AI safety: *does an interpretability audit surface provide a faithful account of a model's computation?*

**1. Audit evasion without intent.** No adversarial behaviour is required for the bottleneck to fail. The architecture simply does not prevent task-relevant information from residing in the backbone outside the declared concept subspace.

**2. Checkpoint-dependent guarantees.** Leakage increases monotonically with training. An interpretability audit at epoch 2 (leakage 0.793) provides stronger guarantees than the same audit at convergence (0.857). Interpretability certificates should be tied to specific checkpoints.

**3. Binarisation as mechanism.** The operation that makes concepts human-readable (BCE supervision toward {0,1}) is the same operation that strips continuous discriminative signal from the concept channel. Soft-concept variants would partially mitigate this at the cost of binary semantics.

**4. Capability monitoring analogy.** The leakage trajectory methodology is structurally analogous to a *capability-emergence monitor*: it detects when task-relevant information diverges from the declared interpretable channel. The same approach can monitor safety-critical models for the development of unintended task pathways during fine-tuning.

---

## Methods

```
Image
  │
  ▼
ConvNeXt-Base Backbone (4 stages)
  │                │
  │            [Linear Probes]
  │             per (stage, concept)
  │             → AUC per concept
  │             → CKA geometry
  │
  ▼
265 Concept Heads  ← Binary Cross-Entropy (Phase 1)
  │
  ▼
Linear Task Predictor ← Species Cross-Entropy (Phase 2, backbone frozen)
  │
  ▼
200 Species Classes
  │
  ▼
[Leakage Analysis]
  Project out concept subspace via OLS
  Measure residual species accuracy
  Track across training checkpoints
```

**Linear probing**: L2-regularised logistic regression (C=1.0, lbfgs, max 5000 iters) per (layer, concept) pair, trained on train-set activations, evaluated on held-out test-set activations.

**Leakage formula**:

<p style="text-align:center; font-size:1.05em; margin: 1em 0;">
  <em>ℓ</em> = ( Acc<sub>residual</sub> − 1/<em>K</em> ) / ( Acc<sub>full</sub> − 1/<em>K</em> + <em>ε</em> )
</p>

where *K* = 200 species classes. *ℓ* = 0 indicates the non-concept pathway is at chance; *ℓ* = 1 indicates it retains the full representation's accuracy.

---

## Reproducibility

All experiments were run on a single NVIDIA A100 GPU. The conda environment and training scripts are fully reproducible:

```bash
# Create environment
conda env create -f environment.yml
conda activate CBM-env

# Train model
python examples/train_cbm.py \
    --data_path ~/datasets/CUB_200_2011 \
    --backbone convnext_base \
    --output_dir outputs/cbm_convnext

# Run linear probing
python examples/run_probing.py \
    --data_path ~/datasets/CUB_200_2011 \
    --checkpoint outputs/cbm_convnext/best_model.pth

# Run leakage trajectory (AI safety extension)
python examples/analyse_leakage_dynamics.py \
    --checkpoint_dir outputs/cbm_convnext \
    --data_path ~/datasets/CUB_200_2011 \
    --output_dir outputs/leakage_dynamics

# Generate all paper figures
python scripts/generate_paper_figures.py
python scripts/generate_showcase_figures.py
```
