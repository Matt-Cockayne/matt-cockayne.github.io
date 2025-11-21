---
title: "Classification-to-Segmentation: Zero-Shot Skin Lesion Segmentation"
duration: "2024 - 2025"
role: "Lead Researcher & Developer"
status: "Published - AIIH 2025 (Oral Presentation)"
technologies:
  - "PyTorch"
  - "Computer Vision"
  - "Explainable AI"
  - "Medical Image Segmentation"
  - "Class Activation Mapping"
  - "Foundation Models"
collaborators:
  - "Dr. Marco Ortolani (Supervisor)"
  - "Dr. Baidaa Al-Bander (Supervisor)"
links:
  - name: "Conference Paper"
    url: "https://doi.org/10.1007/978-3-032-00656-1_24"
  - name: "GitHub Repository"
    url: "https://github.com/xraikeele/Classification-to-Segmentation"
  - name: "Interactive Demo"
    url: "/assets/projects/Zero_Shot_Segmentation_Demo.html"
  - name: "Presentation Slides"
    url: "#"
---

## Project Overview

Classification-to-Segmentation presents a novel zero-shot approach for skin lesion segmentation that leverages classification models trained only on image-level labels to generate pixel-level segmentation masks. By combining Class Activation Maps (CAM) with MedSAM (medical Segment Anything Model), this work demonstrates how to achieve segmentation **without requiring any pixel-level annotations** during training—dramatically reducing annotation costs and time.

### Key Innovation
Zero-shot segmentation by transforming classification explanations into segmentation prompts through a sophisticated dual-prompt strategy.

### Performance Highlights
- **Best Method**: MobileNetV2 finetuned (IoU: 0.366, Dice: 0.510)
- **Zero-shot Capability**: Competitive performance using only ImageNet weights (IoU: 0.337)
- **98.75% Failure Reduction**: Adaptive CAM selection eliminates complete segmentation failures
- **Cost Effective**: No pixel-level annotations required for training

## The Problem

Medical image segmentation traditionally requires expensive pixel-level annotations:
- **Time-Consuming**: Hours per image for expert annotation
- **Costly**: Requires specialized medical expertise
- **Bottleneck**: Limits dataset size and model development
- **Impractical**: Difficult to scale to multiple diseases and organs

**Question**: Can we achieve useful segmentation using only inexpensive image-level labels?

## Our Solution

### Three-Stage Pipeline

#### Stage 1: Classification
Train binary classifiers (melanoma vs. benign) on ISIC 2017 using only image-level labels:
- **Models**: ResNet50, MobileNetV2, EfficientNet, ViT, Swin Transformer
- **Training**: Standard supervised learning with binary cross-entropy
- **Data**: 2,000 training images with simple class labels

#### Stage 2: CAM-Based Prompt Generation
Transform classifier attention into segmentation prompts:

**Dual Prompt Strategy:**
1. **Bounding Box Generation**
   - Threshold CAM heatmap at 0.5
   - Extract region of interest (ROI)
   - Add 10% padding for robustness

2. **Point Sampling**
   - Probabilistic sampling from CAM peaks
   - Power amplification (30x) for confidence regions
   - 10 points per image for robust prompting

**Multiple CAM Methods Evaluated:**
- GradCAM
- GradCAM++
- AblationCAM
- ScoreCAM

#### Stage 3: MedSAM Segmentation
Use foundation model with CAM-generated prompts:
- Encode image at 1024×1024 resolution
- Generate 10 masks with perturbed prompts
- Select best mask via IoU (or confidence if no ground truth)
- Post-processing: morphological operations

### Adaptive CAM Selection
Key innovation: Instead of using one CAM method for all images, dynamically select the best method per image based on intermediate results. This "best method" approach simulates clinical workflow where multiple options are available.

## Experimental Results

### Quantitative Performance (ISIC 2017 Test Set)

#### Best Overall Results
| Model | Training | Precision | Recall | F1 | IoU | Dice |
|-------|----------|-----------|--------|-----|-----|------|
| **MobileNetV2** | **Finetuned** | **0.764** | **0.547** | **0.510** | **0.366** | **0.510** |
| **Swin** | **Finetuned** | **0.750** | **0.534** | **0.498** | **0.357** | **0.498** |
| MobileNetV2 | Zero-shot | 0.740 | 0.468 | 0.470 | 0.337 | 0.470 |
| ResNet50 | Finetuned | 0.739 | 0.496 | 0.475 | 0.337 | 0.475 |

#### Baseline Comparisons
| Method | IoU | Dice | Annotation Required |
|--------|-----|------|---------------------|
| SAM (manual prompts) | 0.672 | 0.805 | Ground-truth boxes |
| MedSAM (manual prompts) | 0.671 | 0.782 | Ground-truth boxes |
| **Ours (automated)** | **0.366** | **0.510** | **None** ✓ |

**Key Insight**: Our automated method achieves ~54% of manual prompting performance while requiring **zero pixel-level annotations**.

### CAM Method Performance

Individual CAM method results (Finetuned Swin):
| CAM Method | Precision | Recall | F1 | IoU | Dice |
|------------|-----------|--------|-----|-----|------|
| **GradCAM** | **0.487** | **0.400** | **0.345** | **0.236** | **0.345** |
| AblationCAM | 0.294 | 0.329 | 0.268 | 0.180 | 0.268 |
| ScoreCAM | 0.365 | 0.301 | 0.263 | 0.177 | 0.263 |
| GradCAM++ | 0.254 | 0.165 | 0.155 | 0.096 | 0.155 |
| RandomCAM | 0.286 | 0.329 | 0.225 | 0.148 | 0.225 |

**Note**: GradCAM++ performed worse than random, highlighting the importance of method selection!

### Key Findings

1. **Domain Training Matters**: Fine-tuned models substantially outperform zero-shot across all architectures
2. **CNN Superiority**: MobileNetV2 and ResNet50 outperform transformers for CAM-based localization
3. **Adaptive Selection Critical**: Best method approach reduces complete failures by 98.75%
4. **Zero-shot Viability**: ImageNet weights alone achieve competitive results (IoU: 0.337)
5. **CAM Method Variability**: Substantial performance differences between CAM techniques

## Interactive Demonstration

Explore the complete zero-shot segmentation pipeline with real ISIC examples. Interact with the demo below or [open in full screen](/assets/projects/Zero_Shot_Segmentation_Demo.html).

<div style="border: 2px solid #ddd; border-radius: 8px; padding: 10px; margin: 20px 0; background-color: #f9f9f9;">
  <iframe src="/assets/projects/Zero_Shot_Segmentation_Demo.html" 
          style="width: 100%; height: 800px; border: none; border-radius: 4px;" 
          title="Zero-Shot Segmentation Demo">
  </iframe>
</div>

**Demo Features:**
- **Step-by-step Pipeline**: Visual walkthrough of all stages
- **5 Real ISIC Cases**: Diverse lesion types and difficulties
- **CAM Visualization**: See how classifiers attend to lesions
- **Prompt Generation**: Understand bounding box and point sampling
- **MedSAM Inference**: Watch foundation model segment in real-time
- **Results Comparison**: Ground truth vs. predicted masks
- **Performance Metrics**: IoU, Dice, Precision, Recall per case

**What Makes This Demo Special:**
Uses **ImageNet pre-trained weights only** to demonstrate truly zero-shot capability—no domain-specific training required!

## Technical Contributions

### 1. Novel Zero-Shot Paradigm
First work to systematically combine CAM explanations with foundation models for medical image segmentation without pixel-level supervision.

### 2. Dual-Prompt Strategy
Innovative combination of bounding boxes and sampled points provides robust guidance to foundation models.

### 3. Comprehensive CAM Evaluation
Systematic comparison of 5 CAM methods across 5 architectures reveals critical insights about explainability method selection.

### 4. Adaptive Selection Framework
Best method approach addresses CAM method unreliability and architecture-specific performance variations.

### 5. Complete Reproducible Pipeline
Open-source implementation with trained models, demo data, and comprehensive documentation.

## Real-World Applications

### Clinical Deployment
- **Rapid Prototyping**: Quickly develop segmentation for new diseases
- **Cost Reduction**: Eliminate expensive pixel annotation requirements
- **Screening Systems**: Deploy in resource-limited settings
- **Multi-disease Support**: Scale to multiple conditions efficiently

### Research Applications
- **Dataset Creation**: Generate pseudo-labels for semi-supervised learning
- **Active Learning**: Identify difficult cases needing expert annotation
- **Model Bootstrapping**: Initialize segmentation models without pixel labels
- **Explainability Research**: Bridge classification and segmentation

## Technical Skills Demonstrated

- **Deep Learning**: Multi-architecture implementation (CNNs, Transformers)
- **Explainable AI**: Class activation mapping, gradient-based explanations
- **Foundation Models**: MedSAM integration and prompt engineering
- **Medical Imaging**: Preprocessing, augmentation, evaluation protocols
- **Computer Vision**: Image segmentation, morphological operations
- **Statistical Analysis**: Multi-model comparison, robustness evaluation
- **Software Engineering**: Modular codebase, reproducible research

## Challenges & Limitations

### Current Challenges
1. **Performance Gap**: ~54% of manual prompting performance leaves room for improvement
2. **Case Difficulty**: Diffuse lesions and high clutter remain challenging
3. **CAM Reliability**: Not all explanations are truthful or localized
4. **Ground Truth Variability**: Inconsistent annotation styles in dataset

### Future Directions
1. **Better CAM Methods**: Develop more reliable localization techniques
2. **Multi-scale Fusion**: Combine multiple CAM resolutions
3. **Uncertainty Estimation**: Quantify prediction confidence
4. **Active Learning**: Selectively request annotations for difficult cases
5. **Foundation Model Fine-tuning**: Adapt MedSAM specifically for CAM prompts

## Open Source & Reproducibility

Complete research package available on GitHub:

- ✅ **Training Code**: All classification model implementations
- ✅ **CAM Methods**: Multiple explainability techniques
- ✅ **Segmentation Pipeline**: End-to-end inference code
- ✅ **Demo Notebook**: Interactive exploration tool
- ✅ **Trained Models**: Best checkpoints for all architectures
- ✅ **Sample Data**: 5 ISIC examples with masks
- ✅ **Documentation**: Comprehensive README and setup guide

**Environment**: `requirements.txt` provided for easy reproduction

## Publication Details

**Cockayne, M. J.**, Ortolani, M., & Al-Bander, B. (2025). Classification-to-Segmentation: Class Activation Mapping for Zero-Shot Skin Lesion Segmentation. In *International Conference on AI in Healthcare (AIIH 2025)*. Springer. **[Oral Presentation]**

https://doi.org/10.1007/978-3-032-00656-1_24

## Recognition

- ✅ Accepted as **Oral Presentation** at AIIH 2025 (Cambridge)
- ✅ Published in Springer Conference Proceedings
- ✅ Featured in PhD research portfolio
- ✅ Complete open-source release

## Impact & Significance

This work addresses a fundamental challenge in medical AI: **how to achieve pixel-level understanding with only image-level supervision**. By demonstrating competitive zero-shot segmentation performance, we:

- **Reduce Barriers**: Make segmentation accessible without pixel annotations
- **Enable Scaling**: Support rapid deployment to new diseases and organs
- **Bridge Tasks**: Connect classification explanations to segmentation
- **Advance XAI**: Show practical applications of explainability methods

The approach is particularly valuable for rare diseases, resource-limited settings, and rapid prototyping scenarios where pixel annotation is impractical.

---

*This project demonstrates how explainable AI techniques can be leveraged not just for interpretation, but as functional components in practical medical imaging pipelines.*

**Questions or collaboration opportunities?** [Contact me](/contact) to discuss this research.
