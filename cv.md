---
layout: default
title: "Curriculum Vitae"
description: "Comprehensive CV of Matthew Cockayne including education, research experience, publications, and achievements."
---

<div class="cv-embed">
  <div class="cv-actions" style="margin-bottom: 2rem; text-align: center;">
    <a href="{{ site.cv_pdf }}" class="btn btn-primary" target="_blank">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7,10 12,15 17,10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>
      Download PDF Version
    </a>
  </div>
  
  <!-- Embedded PDF Viewer -->
  <iframe 
    src="{{ site.cv_pdf }}" 
    class="cv-iframe"
    title="Matthew Cockayne - Curriculum Vitae">
    <p>Your browser does not support PDF viewing. Please <a href="{{ site.cv_pdf }}">download the CV</a> to view it.</p>
  </iframe>
</div>

## Quick Overview

### Research Interests
Responsible AI methodologies for healthcare with applications in medical image analysis. Focus on interpretable and fair deep learning through concept bottleneck models, fairness evaluation, bias mitigation, and uncertainty quantification. Expertise in robustness evaluation, clinical validation, and translational research for dermatological and cardiovascular diagnosis.

### Education
- **PhD in Computer Science** (2023-2026 Expected)  
  *{{ site.institution }}* - Competition-funded Department Studentship  
  Thesis: *Responsible AI for Dermatological Prediction*  
  2 first-author publications, 1 co-authored paper in minor revisions, 2 manuscripts in preparation
  
- **MSc in Artificial Intelligence and Data Science** (2021-2022)  
  *{{ site.institution }}* - **Distinction**  
  Data Analyst Internship, Turing Network Development Research Associate
  
- **BSc in Physics** (2018-2021)  
  *{{ site.institution }}* - **First Class Honours**

### Key Research Projects
- **DermFormer**: Transformer-based multi-modal architecture for robust skin cancer detection with state-of-the-art performance on Derm7pt dataset
- **Zero-Shot Segmentation**: CAM-guided foundation models (SAM/MedSAM) for automated dermoscopy analysis on ISIC datasets (35k+ images)
- **Fairness-Aware Learning**: Curriculum learning reducing performance disparities across Fitzpatrick skin types for equitable melanoma detection
- **Concept Bottleneck Models**: Information-theoretic analysis and interpretable non-linear classifiers for clinical transparency
- **Bias Mitigation**: Cardiovascular disease mortality prediction using multi-center MINAP dataset (400k+ patients)

### Publications
- **2 First-Author Papers**: Pattern Analysis and Applications (2025), AIIH 2025 Conference (Oral Presentation)
- **1 Co-Authored Paper**: AI & Ethics (Minor Revisions)
- **2 Manuscripts in Preparation**: Concept bottleneck models, fairness-aware curriculum learning

### Technical Skills
- **Programming**: Python, LaTeX, R, SQL
- **ML Frameworks**: PyTorch, TensorFlow, Keras, scikit-learn, Hugging Face Transformers
- **Computer Vision**: OpenCV, torchvision, TIMM, Segment Anything Model (SAM)
- **Explainable AI**: CAM, GradCAM, integrated gradients, attention visualization, SHAP
- **Fairness & Bias**: Aequitas, Fairlearn, demographic parity, equalized odds, adversarial debiasing
- **Medical Imaging**: MONAI, SimpleITK, dermoscopy analysis, clinical validation
- **Development**: Git/GitHub, Jupyter, Weights & Biases, HPC cluster management, SLURM

### Professional Service
- **Peer Review**: Engineering Applications of Artificial Intelligence (4 reviews, 2024-2025)
- **Leadership**: PGR Representative (3 years), Student Representative (3 years)
- **Teaching**: Laboratory Demonstrator (4 years), Guest Lecturer on Deep Learning & Responsible AI

---

*For the most up-to-date version of my CV, please download the PDF above. For specific inquiries about my background or experience, feel free to [contact me](/contact).*
