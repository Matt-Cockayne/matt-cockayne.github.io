---
title: "DermFormer: Multi-modal Skin Cancer Detection"
duration: "2023 - 2025"
role: "Lead Researcher & Developer"
status: "Published - Pattern Analysis and Applications"
technologies:
  - "PyTorch"
  - "Computer Vision"
  - "Medical AI"
  - "Transformers"
  - "Multi-modal Learning"
  - "Python"
collaborators:
  - "Dr. Marco Ortolani (Supervisor)"
  - "Dr. Baidaa Al-Bander (Supervisor)"
links:
  - name: "Published Paper (Open Access)"
    url: "https://doi.org/10.1007/s10044-025-01572-0"
  - name: "Free Read-Only Access"
    url: "https://rdcu.be/eQT3s"
  - name: "GitHub Repository"
    url: "https://github.com/xraikeele/DermFormer"
  - name: "Interactive Demo"
    url: "/assets/projects/DermFormer_Interactive_Demo.html"
  - name: "Robustness Analysis Demo"
    url: "/assets/projects/DermFormer_Robustness_Demo.html"
---

## Project Overview

DermFormer is a transformer-based multi-modal architecture for robust skin cancer detection that maintains high diagnostic accuracy while demonstrating resilience to real-world data variations. Published in *Pattern Analysis and Applications* (Springer Nature, 2025), this work addresses critical challenges in deploying AI systems for clinical dermatology.

### Key Achievement
- **State-of-the-art Performance**: 0.779 diagnosis accuracy, 0.684 F-score on Derm7pt dataset
- **Superior Robustness**: Maintains performance under realistic corruptions (noise, blur, compression)
- **Multi-modal Integration**: Combines dermoscopic images, clinical images, and patient metadata
- **Clinical Relevance**: Addresses adoption barriers for automated diagnostic systems

## The Problem

While deep learning shows strong potential for automated skin cancer detection, clinical adoption faces a critical challenge: models often improve accuracy on pristine lab data while compromising reliability under the corrupted or noisy inputs typical of real-world settings. Existing multi-modal fusion strategies inadequately address this performance-robustness trade-off.

## Our Solution

DermFormer introduces two key innovations:

### 1. Entropy-Weighted Ensemble Classification
Dynamic adjustment of modality contributions based on prediction confidence, enabling intelligent feature selection when individual modalities are corrupted or unreliable.

### 2. Hybrid Fusion Mechanism
Preserves uni-modal representations while capturing inter-modality relationships through:
- Hierarchical transformers for each modality
- Cross-attention for modality integration
- Nested architecture design for feature extraction at multiple scales

## Technical Architecture

### Multi-modal Input Processing
- **Dermoscopic Images**: High-resolution skin lesion images (1024×1024)
- **Clinical Images**: Standard camera photos showing broader context
- **Tabular Metadata**: Patient demographics, lesion location, characteristics

### Model Components
1. **NeST Vision Transformers**: Hierarchical feature extraction from images
2. **Tabular Encoder**: Dense networks for metadata processing
3. **Cross-Modal Attention**: Bidirectional information flow between modalities
4. **Entropy-Weighted Ensemble**: Confidence-based dynamic fusion

### Multi-task Learning
Simultaneous prediction of:
- Primary diagnosis (5 classes: melanoma, basal cell carcinoma, etc.)
- Seven-point checklist criteria (clinical assessment features)

## Experimental Validation

### Dataset
**Derm7pt**: Specialized dermoscopy dataset with multi-modal data and comprehensive annotations
- Training: 403 cases
- Validation: 202 cases  
- Test: 403 cases

### Performance Metrics

| Task | Accuracy | F-score | AUC |
|------|----------|---------|-----|
| **Diagnosis** | **0.779** | **0.684** | 0.845 |
| Pigment Network | 0.822 | 0.715 | 0.889 |
| Streaks | 0.778 | 0.623 | 0.831 |
| Pigmentation | 0.765 | 0.701 | 0.872 |
| Regression | 0.743 | 0.598 | 0.798 |
| Dots/Globules | 0.798 | 0.687 | 0.854 |
| Blue-Whitish Veil | 0.812 | 0.645 | 0.867 |
| Vascular Structures | 0.801 | 0.634 | 0.843 |

### Robustness Testing

DermFormer was systematically evaluated under 18 types of common corruptions across 5 severity levels:

**Corruption Categories:**
- **Noise**: Gaussian, shot, impulse
- **Blur**: Defocus, motion, zoom, glass
- **Weather**: Snow, frost, fog, brightness
- **Digital**: JPEG compression, pixelation, elastic transform, contrast

**Key Finding**: DermFormer maintains superior performance compared to baseline architectures even under severe corruptions, demonstrating true clinical viability.

## Interactive Demonstrations

### Demo 1: Interactive Inference
Explore DermFormer's multi-modal inference pipeline with real Derm7pt cases. Interact with the demo below or [open in full screen](/assets/projects/DermFormer_Interactive_Demo.html).

<div style="border: 2px solid #ddd; border-radius: 8px; padding: 10px; margin: 20px 0; background-color: #f9f9f9;">
  <iframe src="/assets/projects/DermFormer_Interactive_Demo.html" 
          style="width: 100%; height: 800px; border: none; border-radius: 4px;" 
          title="DermFormer Interactive Demo">
  </iframe>
</div>

**What You'll See:**
- Multi-task prediction outputs for all 8 classification tasks
- Branch-level analysis (Clinical, Dermoscopic, Combined, Meta-Combined)
- Entropy weighting visualization
- Confidence scores and uncertainty quantification

### Demo 2: Robustness Analysis
Systematic evaluation of model resilience to real-world variations. Interact with the demo below or [open in full screen](/assets/projects/DermFormer_Robustness_Demo.html).

<div style="border: 2px solid #ddd; border-radius: 8px; padding: 10px; margin: 20px 0; background-color: #f9f9f9;">
  <iframe src="/assets/projects/DermFormer_Robustness_Demo.html" 
          style="width: 100%; height: 800px; border: none; border-radius: 4px;" 
          title="DermFormer Robustness Demo">
  </iframe>
</div>

**Insights Demonstrated:**
- Performance maintained under realistic clinical conditions
- Entropy weighting enables graceful degradation
- Multi-modal fusion provides redundancy and resilience

## Research Contributions

1. **Novel Architecture**: First entropy-weighted ensemble for multi-modal medical imaging
2. **Robustness Framework**: Comprehensive evaluation methodology for clinical AI
3. **State-of-the-art Results**: Best reported performance on Derm7pt benchmark
4. **Open Source**: Complete implementation, trained models, and reproducible experiments

## Clinical Impact

By maintaining performance under realistic clinical conditions, DermFormer addresses a critical adoption barrier for automated diagnostic systems:

- **Earlier Detection**: Enables screening in resource-limited settings
- **Reduced Variability**: Consistent performance across imaging conditions
- **Clinical Trust**: Transparent, interpretable predictions with uncertainty
- **Scalability**: Supports melanoma detection at scale across diverse healthcare settings

## Technical Skills Demonstrated

- **Deep Learning**: Custom transformer architectures, attention mechanisms
- **Medical AI**: Multi-modal fusion, clinical evaluation protocols
- **Computer Vision**: Image preprocessing, augmentation, feature extraction
- **Ensemble Learning**: Confidence-based dynamic weighting strategies
- **Research Methodology**: Systematic experimentation, statistical validation
- **Software Engineering**: Modular codebase, reproducible research practices

## Future Directions

- **Federated Learning**: Privacy-preserving multi-institutional model training
- **Few-Shot Adaptation**: Rapid specialization to new lesion types or populations
- **Explainability**: Visual attention maps and decision justifications
- **Clinical Deployment**: Web-based diagnostic assistance tool
- **Dataset Expansion**: Integration with HAM10000, ISIC archives

## Open Source & Reproducibility

All components of this research are publicly available:

- ✅ **Complete Source Code**: Training, inference, evaluation scripts
- ✅ **Trained Models**: Best checkpoint (211MB) available for download
- ✅ **Interactive Demos**: Jupyter notebooks with example cases
- ✅ **Documentation**: Comprehensive README, API docs, tutorials
- ✅ **Experimental Protocol**: Hyperparameters, data splits, evaluation metrics

**Reproducibility Standards Met:**
- Fixed random seeds for deterministic results
- Environment files (conda, pip requirements)
- Unit tests and validation procedures
- Detailed experimental logs

## Publication Details

**Cockayne, M. J.**, Ortolani, M., & Al-Bander, B. (2025). DermFormer: Nested Multi-modal Vision Transformers for Robust Skin Cancer Detection. *Pattern Analysis and Applications*, 28(4), 194. https://doi.org/10.1007/s10044-025-01572-0

**Citation:**
```bibtex
@article{cockayne_dermformer_2025,
  title = {DermFormer: nested multi-modal vision transformers for robust skin cancer detection},
  author = {Cockayne, Matthew J. and Ortolani, Marco and Al-Bander, Baidaa},
  journal = {Pattern Analysis and Applications},
  volume = {28},
  number = {4},
  pages = {194},
  year = {2025},
  doi = {10.1007/s10044-025-01572-0}
}
```

## Recognition

- ✅ Published in *Pattern Analysis and Applications* (Springer Nature)
- ✅ State-of-the-art results on Derm7pt benchmark
- ✅ Featured in Keele University PhD research showcase
- ✅ Open access publication for maximum research impact

---

*This project represents a significant contribution to making AI-assisted dermatology reliable and trustworthy in real-world clinical settings, supporting earlier melanoma detection and improved patient outcomes.*

**Interested in collaboration or have questions?** [Contact me](/contact) to discuss this work further.
