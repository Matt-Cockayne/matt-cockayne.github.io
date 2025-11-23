---
title: "MedXAI: Medical Image Explainability Toolkit"
duration: "2024 - 2025"
role: "Research Engineer & Developer"
status: "Active Development"
technologies:
  - "PyTorch"
  - "Explainable AI"
  - "Medical Imaging"
  - "Gradio"
  - "Computer Vision"
  - "Python"
links:
  - name: "GitHub Repository"
    url: "https://github.com/Matt-Cockayne/MedXAI"
  - name: "Interactive Demo"
    url: "#" # Add when deployed
  - name: "Documentation"
    url: "https://github.com/Matt-Cockayne/MedXAI/blob/main/README.md"
---

## Project Overview

MedXAI is a comprehensive PyTorch-based framework for explainable AI in medical imaging. It provides unified implementations of multiple explainability methods with quantitative evaluation metrics, specifically designed to bridge the gap between deep learning predictions and clinical interpretability.

### Key Features
- **6 XAI Methods**: GradCAM, GradCAM++, Integrated Gradients, RISE, LIME, SHAP
- **Quantitative Evaluation**: Deletion/Insertion AUC, faithfulness metrics
- **Medical Dataset Support**: Pre-configured for MedMNIST (DermaMNIST, PneumoniaMNIST, ChestMNIST)
- **Interactive Interface**: Gradio-based web application for real-time explanations
- **Educational Tutorials**: Step-by-step Jupyter notebooks for each method

## The Challenge

As deep learning models become increasingly prevalent in medical imaging, a critical gap emerges: while these models achieve impressive diagnostic accuracy, their "black box" nature limits clinical adoption. Radiologists and clinicians need to understand *why* a model makes specific predictions to:

- **Build Trust**: Validate that models focus on clinically relevant features
- **Detect Bias**: Identify when models learn spurious correlations or artifacts
- **Clinical Integration**: Support diagnostic workflows with interpretable evidence
- **Regulatory Compliance**: Meet explainability requirements for medical AI systems

## Our Solution

MedXAI provides a unified framework comparing multiple explainability approaches, each with distinct advantages:

### Gradient-Based Methods
- **GradCAM**: Fast class activation mapping using gradients (~10ms)
- **GradCAM++**: Enhanced localization for multiple objects (~15ms)
- **Integrated Gradients**: Path-based attribution with theoretical guarantees (~50ms)

### Perturbation-Based Methods
- **RISE**: Model-agnostic importance estimation through input sampling (~30s)
- **LIME**: Local interpretable explanations via superpixel perturbation (~60s)

### Game Theory Approach
- **SHAP**: SHapley Additive exPlanations with consistency guarantees (~100ms)

## Technical Architecture

### Core Components

```python
# Unified explainer interface
explainers = {
    'GradCAM': GradCAM(model, 'layer4', device),
    'LIME': LIME(model, device),
    'SHAP': SHAP(model, device)
}

# Generate explanations
for name, explainer in explainers.items():
    heatmap = explainer.explain(image, target_class=label)
```

### Evaluation Framework

**Deletion AUC**: Measures confidence degradation when removing important pixels (lower is better)

**Insertion AUC**: Measures confidence improvement when adding important pixels (higher is better)

**Faithfulness Metrics**: Quantifies correlation between attributions and model behavior

### Visualization Pipeline

All methods produce comparable heatmap outputs that overlay on medical images, enabling:
- Side-by-side method comparison
- Quantitative performance curves
- Clinical interpretation guidance

## Implementation Highlights

### 1. Multi-Method Comparison

![GradCAM Examples](/assets/projects/medxai/gradcam_examples.png)
*GradCAM visualizations showing heatmaps, overlays, and high-confidence regions across multiple samples.*

![LIME Analysis](/assets/projects/medxai/lime_explanation.png)
*LIME superpixel-based explanations identifying positive and negative feature contributions.*

![SHAP Attributions](/assets/projects/medxai/shap_comparison.png)
*SHAP game-theoretic attributions with positive (red) and negative (blue) feature importance.*

### 2. Medical Dataset Applications

**DermaMNIST (Skin Lesion Classification)**
![DermaMNIST Comparison](/assets/projects/medxai/dermamnist_comparison.png)
*Multi-method comparison for 7-class skin lesion classification task.*

**PneumoniaMNIST (Pneumonia Detection)**
![PneumoniaMNIST Results](/assets/projects/medxai/pneumoniamnist_comparison.png)
*Binary classification explanations for pediatric chest X-ray pneumonia detection.*

### 3. Quantitative Evaluation

![Deletion/Insertion Curves](/assets/projects/medxai/dermamnist_curves.png)
*Faithfulness metrics showing how each method's identified regions affect model confidence.*

## Interactive Web Interface

Built with Gradio, the interface provides:

### Tutorial Mode
- Train a CNN on MNIST digits with live progress
- Generate explanations with LIME, SHAP, and GradCAM
- Compare methods side-by-side with interpretation guides
- Educational content on XAI theory and best practices

### Medical Dataset Mode
- Browse DermaMNIST, PneumoniaMNIST, ChestMNIST samples
- Select multiple explainability methods simultaneously
- View real-time generation with performance metrics
- Export high-resolution visualizations

```bash
# Launch interface
python interface/app.py --share
```

## Performance Characteristics

| Method | Speed | Resolution | Model Access | Best Use Case |
|--------|-------|------------|--------------|---------------|
| GradCAM | Very Fast | Feature map | Gradients | Quick CNN explanations |
| GradCAM++ | Fast | Feature map | Gradients | Multiple objects |
| Integrated Gradients | Fast | Input size | Gradients | Complete attributions |
| RISE | Slow | Input size | Black-box | Model-agnostic |
| LIME | Very Slow | Superpixel | Black-box | Local interpretability |
| SHAP | Fast | Input size | Gradients | Consistent attributions |

## Clinical Interpretation Guidelines

The toolkit emphasizes responsible XAI application in medical contexts:

### Best Practices
1. **Validate with Experts**: Always have clinicians review explanations
2. **Compare Methods**: Use 2-3 techniques to identify consistent patterns
3. **Assess Quantitatively**: Validate with deletion/insertion metrics
4. **Document Limitations**: Communicate when model focus deviates from expectations
5. **Consider Context**: Align explanations with disease manifestations

### Common Pitfalls
- **Spurious Correlations**: Models focusing on artifacts vs. pathology
- **Resolution Limits**: Low-res heatmaps missing fine-grained features
- **Batch Effects**: Dataset-specific biases in learned features

## Educational Resources

### Tutorial Notebooks

Interactive Jupyter notebooks with complete implementations and explanations:

<div style="margin: 20px 0;">

#### 1. LIME Tutorial
**Perturbation-based local explanations**  
[📖 View on GitHub](https://github.com/Matt-Cockayne/MedXAI/blob/main/notebooks/01_LIME_Tutorial.ipynb) | [🌐 View HTML](/assets/notebooks/medxai/01_LIME_Tutorial.html)

<details>
<summary>📺 Preview Notebook</summary>
<iframe src="/assets/notebooks/medxai/01_LIME_Tutorial.html" 
        style="width: 100%; height: 600px; border: 1px solid #ddd; border-radius: 4px; margin-top: 10px;">
</iframe>
</details>

---

#### 2. SHAP Tutorial
**Game-theoretic feature attribution**  
[📖 View on GitHub](https://github.com/Matt-Cockayne/MedXAI/blob/main/notebooks/02_SHAP_Tutorial.ipynb) | [🌐 View HTML](/assets/notebooks/medxai/02_SHAP_Tutorial.html)

<details>
<summary>📺 Preview Notebook</summary>
<iframe src="/assets/notebooks/medxai/02_SHAP_Tutorial.html" 
        style="width: 100%; height: 600px; border: 1px solid #ddd; border-radius: 4px; margin-top: 10px;">
</iframe>
</details>

---

#### 3. GradCAM Tutorial
**Gradient-based visualization fundamentals**  
[📖 View on GitHub](https://github.com/Matt-Cockayne/MedXAI/blob/main/notebooks/03_GradCAM_Tutorial.ipynb) | [🌐 View HTML](/assets/notebooks/medxai/03_GradCAM_Tutorial.html)

<details>
<summary>📺 Preview Notebook</summary>
<iframe src="/assets/notebooks/medxai/03_GradCAM_Tutorial.html" 
        style="width: 100%; height: 600px; border: 1px solid #ddd; border-radius: 4px; margin-top: 10px;">
</iframe>
</details>

---

#### 4. DermaMNIST Tutorial
**Skin lesion classification (7 classes)**  
[📖 View on GitHub](https://github.com/Matt-Cockayne/MedXAI/blob/main/notebooks/04_DermaMNIST_Explainability_Tutorial.ipynb) | [🌐 View HTML](/assets/notebooks/medxai/04_DermaMNIST_Explainability_Tutorial.html)

<details>
<summary>📺 Preview Notebook</summary>
<iframe src="/assets/notebooks/medxai/04_DermaMNIST_Explainability_Tutorial.html" 
        style="width: 100%; height: 600px; border: 1px solid #ddd; border-radius: 4px; margin-top: 10px;">
</iframe>
</details>

---

#### 5. PneumoniaMNIST Tutorial
**Pneumonia detection (binary classification)**  
[📖 View on GitHub](https://github.com/Matt-Cockayne/MedXAI/blob/main/notebooks/05_PneumoniaMNIST_Explainability_Tutorial.ipynb) | [🌐 View HTML](/assets/notebooks/medxai/05_PneumoniaMNIST_Explainability_Tutorial.html)

<details>
<summary>📺 Preview Notebook</summary>
<iframe src="/assets/notebooks/medxai/05_PneumoniaMNIST_Explainability_Tutorial.html" 
        style="width: 100%; height: 600px; border: 1px solid #ddd; border-radius: 4px; margin-top: 10px;">
</iframe>
</details>

---

#### 6. ChestMNIST Tutorial
**Multi-disease classification (14 classes)**  
[📖 View on GitHub](https://github.com/Matt-Cockayne/MedXAI/blob/main/notebooks/06_ChestMNIST_Explainability_Tutorial.ipynb) | [🌐 View HTML](/assets/notebooks/medxai/06_ChestMNIST_Explainability_Tutorial.html)

<details>
<summary>📺 Preview Notebook</summary>
<iframe src="/assets/notebooks/medxai/06_ChestMNIST_Explainability_Tutorial.html" 
        style="width: 100%; height: 600px; border: 1px solid #ddd; border-radius: 4px; margin-top: 10px;">
</iframe>
</details>

</div>

**What's Included:**
- Theory and mathematical formulation
- Step-by-step implementation with code
- Visual examples and interpretation guides
- Quantitative evaluation metrics
- Clinical context and best practices

**Try Them Yourself:**
- 📖 View on GitHub (rendered with outputs)
- 🌐 Open full HTML version in new tab
- 📺 Preview inline with collapsible sections
- 💻 Clone repo and run locally with Jupyter
- 🚀 Upload to [Google Colab](https://colab.research.google.com/) to run in browser

## Technical Skills Demonstrated

- **Deep Learning**: PyTorch implementation of explainability algorithms
- **Medical AI**: Domain-specific evaluation and interpretation frameworks
- **Software Engineering**: Modular architecture, clean interfaces, documentation
- **Visualization**: matplotlib/OpenCV for publication-quality figures
- **Web Development**: Gradio interface for interactive demonstrations
- **Research Communication**: Comprehensive tutorials and documentation

## Use Cases & Applications

### 1. Model Debugging
Identify when models learn shortcuts or focus on irrelevant features during development.

### 2. Clinical Validation
Verify that production models focus on anatomically/pathologically relevant regions.

### 3. Regulatory Compliance
Generate explainability reports for medical AI regulatory submissions.

### 4. Educational Tool
Teach medical students and residents about AI decision-making in diagnostics.

### 5. Research Platform
Standardized framework for XAI method comparison in academic studies.

## Future Development

### Planned Features
- **Additional Methods**: Attention Rollout, LayerCAM, Score-CAM
- **3D Medical Imaging**: CT, MRI volumetric data support
- **Pointing Game Metric**: Localization accuracy evaluation
- **DICOM Integration**: Clinical workflow compatibility
- **Batch Processing**: Automated report generation for datasets

### Research Directions
- Comparative analysis of XAI methods on diverse medical imaging tasks
- Validation studies with clinical experts
- Integration with DermFormer for melanoma detection explanations
- Adversarial robustness evaluation of explanations

## Open Source Philosophy

MedXAI is designed for research reproducibility and clinical translation:

- ✅ **MIT License**: Permissive for academic and commercial use
- ✅ **Comprehensive Documentation**: README, API docs, tutorials
- ✅ **Modular Design**: Easy to extend with new methods
- ✅ **Educational Focus**: Learn-by-example approach
- ✅ **Active Development**: Regular updates and improvements

## Related Publications

This toolkit supports ongoing research in trustworthy medical AI:

- **DermFormer Paper**: Could integrate XAI for melanoma detection explanations
- **Robustness Analysis**: XAI methods under data corruption
- **Clinical Validation**: Expert evaluation of explanation quality

## Installation & Quick Start

```bash
# Clone repository
git clone https://github.com/Matt-Cockayne/MedXAI.git
cd MedXAI

# Install dependencies
pip install -r requirements.txt

# Launch interface
python interface/app.py
```

### Basic Usage

```python
from utils import load_model, get_medical_dataset
from explainers import GradCAM, LIME, SHAP

# Load model and data
model = load_model('resnet50', num_classes=7)
dataset = get_medical_dataset('dermamnist')
image, label = dataset[0]

# Generate explanations
gradcam = GradCAM(model, 'layer4', device='cuda')
heatmap = gradcam.explain(image.unsqueeze(0), target_class=label)
```

## Impact & Recognition

- **Clinical Relevance**: Addresses critical need for interpretable medical AI
- **Educational Value**: Used for teaching XAI concepts
- **Research Tool**: Supports comparative XAI studies
- **Open Source**: Contributing to transparent, trustworthy AI in healthcare

## Citation

If you use MedXAI in your research:

```bibtex
@software{medxai,
  author = {Cockayne, Matthew J.},
  title = {MedXAI: Medical Image Explainability Toolkit},
  year = {2025},
  url = {https://github.com/Matt-Cockayne/MedXAI}
}
```

---

*MedXAI represents a commitment to making AI in healthcare transparent, trustworthy, and clinically actionable. By providing robust explainability tools with rigorous evaluation, this toolkit supports the responsible deployment of deep learning in medical imaging.*

**Questions or collaboration opportunities?** [Get in touch](/contact) to discuss this project further.
