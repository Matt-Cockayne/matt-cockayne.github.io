---
layout: project
title: "SkinCBM: Concept Bottleneck Models for Interpretable Medical Diagnosis"
short_title: "SkinCBM"
date: 2025-11-23
status: "active"
github: "https://github.com/Matt-Cockayne/SynergyCBM/tree/main/SkinCBM"
tags: ["Explainable AI", "Medical Imaging", "Interpretability", "Deep Learning", "Dermatology"]
technologies: ["PyTorch", "Python", "Jupyter", "ResNet"]
description: "Educational implementation of Concept Bottleneck Models for interpretable skin cancer diagnosis through human-understandable concepts."
thumbnail: "/assets/projects/skincbm/demo_case_578.png"
featured: true
---

## Overview

**SkinCBM** is a clean, educational implementation of **Concept Bottleneck Models (CBMs)** for skin cancer diagnosis. Unlike traditional black-box neural networks, CBMs force all reasoning through human-interpretable concepts, enabling clinicians to understand, validate, and even correct model predictions.

### What Makes CBMs Different?

Traditional models directly map images to predictions, making their reasoning opaque:
```
Image → [Black Box] → Diagnosis
```

CBMs introduce an interpretable bottleneck of human-understandable concepts:
```
Image → Concepts → Diagnosis
         ↓
    Interpretable!
    (can intervene)
```

**Example workflow**: Instead of directly predicting "Melanoma", the model first identifies dermatological features:
- ✓ Irregular border: 92%
- ✓ Asymmetric shape: 78%
- ✗ Blue-white veil: 15% ← **Clinician can correct this!**
- ✓ Multiple colors: 88%

Then uses these concepts to make the final diagnosis.

---

## Key Features

### 🎯 Interpretable Architecture
- **Two-stage reasoning**: Explicit concept prediction followed by diagnosis
- **7-point checklist**: Clinically validated dermatological concepts
- **Linear predictor**: Direct visualization of concept importance

### 🔧 Concept Intervention
- **Test-time correction**: Modify incorrect concept predictions
- **Human-in-the-loop**: Incorporate expert knowledge
- **Systematic analysis**: Study impact of each concept on diagnosis

### 📊 Information-Theoretic Analysis
- **Concept completeness**: Measure information sufficiency
- **Synergy analysis**: Identify concept interactions
- **Mutual information**: Quantify concept-task relationships

### 🎓 Educational Implementation
- **Clean codebase**: Well-documented, modular architecture
- **Interactive tutorials**: 3 comprehensive Jupyter notebooks
- **Sample data included**: No dataset required for quick demos
- **HPC-ready**: SLURM scripts for cluster deployment

---

## Visual Examples

### Concept Prediction Examples

<div class="image-grid">
  <div class="image-item">
    <img src="/assets/projects/skincbm/demo_case_578.png" alt="Case 578: Melanoma with high 7-point score">
    <p><strong>Case 578</strong>: Melanoma with multiple positive concepts (7-point score: 7)</p>
  </div>
  <div class="image-item">
    <img src="/assets/projects/skincbm/demo_case_596.png" alt="Case 596: Melanoma with moderate features">
    <p><strong>Case 596</strong>: Melanoma with moderate dermatological features</p>
  </div>
</div>

### Individual Case Intervention Analysis

<div class="image-grid">
  <div class="image-item">
    <img src="/assets/projects/skincbm/intervention_case_578.png" alt="Intervention analysis for Case 578">
    <p><strong>Intervention Impact</strong>: Effect of correcting each concept on diagnosis confidence</p>
  </div>
  <div class="image-item">
    <img src="/assets/projects/skincbm/intervention_case_7.png" alt="Intervention analysis for Case 7">
    <p><strong>Case 7 Analysis</strong>: Identifying critical concepts through systematic intervention</p>
  </div>
</div>

### Systematic Intervention Analysis Across Dataset

Our comprehensive intervention analysis reveals how concept corrections impact model predictions across the entire test set. These visualizations demonstrate the reliability and clinical utility of the CBM approach.

<div class="image-grid">
  <div class="image-item">
    <img src="/assets/projects/skincbm/1_performance_comparison.png" alt="Performance comparison: Original vs Corrected predictions">
    <p><strong>Performance Improvement</strong>: Original model accuracy vs. performance after concept intervention. Shows significant improvement when concepts are corrected by domain experts.</p>
  </div>
  <div class="image-item">
    <img src="/assets/projects/skincbm/2_concept_impact_analysis.png" alt="Concept impact analysis showing relative importance">
    <p><strong>Concept Importance</strong>: Relative impact of each dermatological concept on diagnosis accuracy. Reveals which features are most critical for melanoma detection.</p>
  </div>
</div>

<div class="image-grid">
  <div class="image-item">
    <img src="/assets/projects/skincbm/3_intervention_direction_analysis.png" alt="Intervention direction analysis">
    <p><strong>Intervention Direction</strong>: Analysis of how correcting concepts from 0→1 vs 1→0 affects predictions. Asymmetric patterns reveal model biases and concept reliability.</p>
  </div>
  <div class="image-item">
    <img src="/assets/projects/skincbm/4_confusion_matrices.png" alt="Confusion matrices before and after intervention">
    <p><strong>Confusion Matrix Comparison</strong>: Model predictions before (left) and after (right) systematic concept correction. Demonstrates reduced misclassification rates.</p>
  </div>
</div>

**Key Findings from Systematic Analysis**:
- 📈 **Performance Gain**: Concept intervention improves accuracy by ~15-20% on misclassified cases
- 🎯 **Critical Concepts**: Blue-whitish veil and atypical vascular pattern show highest impact
- ⚖️ **Intervention Asymmetry**: Correcting false negatives (0→1) has larger impact than false positives (1→0)
- 🔍 **Clinical Validation**: Results align with dermatological literature on melanoma indicators

---

## Interactive Tutorials

Explore the complete implementation through interactive Jupyter notebooks:

### 1. Quick Demo with Sample Data
**No dataset required!** Try CBMs on 4 sample dermoscopy images.

<details>
<summary><strong>View Tutorial</strong> (Click to expand)</summary>
<iframe src="/assets/notebooks/skincbm/02_demo_with_sample_data.html" 
        width="100%" 
        height="600px" 
        style="border: 1px solid #ddd; border-radius: 4px;">
</iframe>
<p><em>Tutorial covers: Loading images, concept prediction, model interpretation, basic intervention</em></p>
<p><a href="https://github.com/Matt-Cockayne/SynergyCBM/blob/main/SkinCBM/notebooks/02_demo_with_sample_data.ipynb" target="_blank">View on GitHub →</a></p>
</details>

### 2. Concept Intervention Deep Dive
**Learn how to correct model predictions** by intervening on concept predictions.

<details>
<summary><strong>View Tutorial</strong> (Click to expand)</summary>
<iframe src="/assets/notebooks/skincbm/03_demo_intervention.html" 
        width="100%" 
        height="600px" 
        style="border: 1px solid #ddd; border-radius: 4px;">
</iframe>
<p><em>Tutorial covers: Single concept intervention, systematic analysis, visualization techniques</em></p>
<p><a href="https://github.com/Matt-Cockayne/SynergyCBM/blob/main/SkinCBM/notebooks/03_demo_intervention.ipynb" target="_blank">View on GitHub →</a></p>
</details>

### 3. Full Training Walkthrough
**Complete training pipeline** on the Derm7pt dataset with evaluation and analysis.

<details>
<summary><strong>View Tutorial</strong> (Click to expand)</summary>
<iframe src="/assets/notebooks/skincbm/01_cbm_training_walkthrough.html" 
        width="100%" 
        height="600px" 
        style="border: 1px solid #ddd; border-radius: 4px;">
</iframe>
<p><em>Tutorial covers: Data loading, model training, evaluation metrics, information-theoretic analysis</em></p>
<p><a href="https://github.com/Matt-Cockayne/SynergyCBM/blob/main/SkinCBM/notebooks/01_cbm_training_walkthrough.ipynb" target="_blank">View on GitHub →</a></p>
</details>

---

## Technical Details

### Architecture

**Concept Encoder**: ResNet-50 backbone with independent concept heads
```python
ConceptEncoder(
    backbone='resnet50',        # Pretrained on ImageNet
    num_concepts=7,              # 7-point dermatological checklist
    dropout=0.3                  # Regularization for small datasets
)
```

**Task Predictor**: Linear classifier for maximum interpretability
```python
LinearTaskPredictor(
    num_concepts=7,
    num_classes=2               # Melanoma vs. Nevus
)
```

### Training Strategies

1. **Joint Training** (default): Train concepts and task predictor simultaneously
2. **Sequential Training**: Train concepts first, then freeze and train task predictor
3. **Independent Training**: Use ground-truth concepts for task predictor training

### Performance

On Derm7pt dataset (~2,000 dermoscopy images):

| Metric | 50 Epochs | 100 Epochs |
|--------|-----------|------------|
| **Concept Accuracy** | 75-80% | 75-82% |
| **Task F1 Score** | 68-72% | 70-75% |
| **Training Time (V100)** | ~10 min | ~20 min |

**Trade-off**: ~5% accuracy vs black-box models, but gain full interpretability + intervention capability.

### Information-Theoretic Metrics

- **Concept Completeness**: Measures if concepts contain sufficient information for task
- **Synergy**: Quantifies concept interactions and redundancy
- **Mutual Information**: Concept-task relationship strength

---

## Quick Start

### Installation
```bash
git clone https://github.com/Matt-Cockayne/SynergyCBM.git
cd SynergyCBM/SkinCBM
pip install -r requirements.txt
```

### Quick Demo (No Dataset Required!)
```bash
python3 examples/demo_sample_data.py
```

### Train on Full Dataset
```bash
python3 examples/train_basic_cbm.py \
    --data_path /path/to/derm7pt \
    --epochs 50 \
    --output_dir ./outputs/my_cbm
```

### Use Trained Model
```python
from src.models.basic_cbm import ConceptBottleneckModel

# Load model
model = ConceptBottleneckModel.load("outputs/my_cbm/best_model.pth")

# Predict concepts and diagnosis
concepts, logits = model(image)

# Intervene on incorrect concept
concepts[:, 2] = 1.0  # Correct concept 2
corrected_logits = model.predict_from_concepts(concepts)
```

---

## Repository Structure

```
SkinCBM/
├── src/
│   ├── models/
│   │   └── basic_cbm.py              # Core CBM implementation
│   ├── data/
│   │   ├── base_loader.py            # Abstract dataset interface
│   │   └── derm7pt_loader.py         # Derm7pt dataset loader
│   ├── training/
│   │   └── trainer.py                # Training utilities
│   └── utils/
│       └── information_theory.py     # MI, synergy, completeness
│
├── examples/
│   ├── train_basic_cbm.py            # Full training script
│   ├── demo_sample_data.py           # Quick demo (3 samples)
│   ├── demo_intervention.py          # Intervention examples
│   └── intervention_analysis.py      # Systematic analysis
│
├── notebooks/
│   ├── 01_cbm_training_walkthrough.ipynb
│   ├── 02_demo_with_sample_data.ipynb
│   ├── 03_demo_intervention.ipynb
│   └── sample_data_derm7pt/          # 4 sample cases
│
└── docs/                             # Comprehensive documentation
    ├── ARCHITECTURE.md
    ├── QUICKSTART.md
    └── DATASETS.md
```

---

## Clinical Significance

### Why Interpretability Matters in Medical AI

1. **Trust**: Clinicians can validate model reasoning against medical knowledge
2. **Safety**: Identify reliance on spurious correlations or dataset artifacts
3. **Regulation**: Meet explainability requirements for medical device approval
4. **Education**: Train residents by showing which features indicate malignancy
5. **Collaboration**: Enable human-AI partnership through concept intervention

### 7-Point Checklist

The model uses the clinically validated 7-point checklist for melanoma diagnosis:

1. **Atypical pigment network** (2 points)
2. **Blue-whitish veil** (2 points)
3. **Atypical vascular pattern** (2 points)
4. **Irregular streaks** (1 point)
5. **Irregular pigmentation** (1 point)
6. **Irregular dots and globules** (1 point)
7. **Regression structures** (1 point)

**Clinical rule**: Score ≥ 3 suggests melanoma, requiring biopsy.

---

## Documentation

Comprehensive guides available in the repository:

- **[INSTALLATION.md](https://github.com/Matt-Cockayne/SynergyCBM/blob/main/SkinCBM/docs/INSTALLATION.md)** - Setup and dependencies
- **[QUICKSTART.md](https://github.com/Matt-Cockayne/SynergyCBM/blob/main/SkinCBM/docs/QUICKSTART.md)** - 5-minute tutorial
- **[ARCHITECTURE.md](https://github.com/Matt-Cockayne/SynergyCBM/blob/main/SkinCBM/docs/ARCHITECTURE.md)** - Model design deep dive
- **[DATASETS.md](https://github.com/Matt-Cockayne/SynergyCBM/blob/main/SkinCBM/docs/DATASETS.md)** - Data loading and preparation

---

## Research Context

### Related Publications

This implementation builds on foundational CBM research:

- **Koh et al. (2020)**: [Concept Bottleneck Models](https://arxiv.org/abs/2007.04612) - Original CBM paper
- **Sawicki et al. (2023)**: Information-theoretic analysis of concept completeness
- **Argaw et al. (2022)**: Clinical validation of 7-point checklist in melanoma diagnosis

### Novel Contributions

- **Educational focus**: Clear documentation of design decisions and trade-offs
- **Information theory integration**: Novel completeness and synergy metrics
- **Production-ready code**: Clean, modular implementation suitable for extension
- **Sample data**: Enables exploration without full dataset access

---

## Future Directions

### Planned Enhancements

- **Concept discovery**: Automatic extraction of concepts from data
- **Multi-task learning**: Extend to multiple skin lesion types
- **Uncertainty quantification**: Confidence intervals for concepts and predictions
- **Active learning**: Identify which concepts need human annotation
- **Comparative analysis**: Benchmark against other interpretability methods

### Research Questions

- Can CBMs match black-box performance with better concept quality?
- What is the optimal number of concepts for completeness vs. redundancy?
- How does concept intervention impact model trust in clinical settings?
- Can information-theoretic metrics predict model reliability?

---

## Citation

If you use SkinCBM in your research, please cite:

```bibtex
@software{skincbm2025,
  title={SkinCBM: Concept Bottleneck Models for Medical Diagnosis},
  author={Cockayne, Matthew J.},
  year={2025},
  url={https://github.com/Matt-Cockayne/SynergyCBM/tree/main/SkinCBM}
}
```

---

## Resources

- **GitHub Repository**: [SkinCBM on GitHub](https://github.com/Matt-Cockayne/SynergyCBM/tree/main/SkinCBM)
- **Interactive Tutorials**: 3 comprehensive Jupyter notebooks (see above)
- **Sample Data**: 4 dermoscopy cases included in repository
- **Documentation**: Complete guides in `docs/` folder

---

<div class="project-meta">
  <p><strong>Status</strong>: Active Development | <strong>License</strong>: MIT</p>
  <p><strong>Last Updated</strong>: November 2025</p>
</div>

<style>
.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.image-item {
  text-align: center;
}

.image-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin-bottom: 0.5rem;
}

.image-item p {
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.5rem;
}

details {
  margin: 1rem 0;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

details summary {
  cursor: pointer;
  font-weight: 600;
  color: #0066cc;
  padding: 0.5rem;
}

details summary:hover {
  color: #0052a3;
}

details[open] summary {
  margin-bottom: 1rem;
  border-bottom: 2px solid #0066cc;
}

iframe {
  margin-top: 1rem;
}

.project-meta {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid #e9ecef;
  text-align: center;
  color: #666;
}
</style>
