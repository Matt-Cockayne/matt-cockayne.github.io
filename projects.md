---
layout: default
title: "Projects"
description: "Research projects, software applications, and innovative solutions developed by Matthew Cockayne in AI and machine learning."
---

<div class="section-header">
  <p class="section-description">
    Explore my current and completed projects spanning artificial intelligence research, software development, and practical applications of machine learning.
  </p>
</div>

## PhD Research Projects

<div class="grid grid-2">
  <div class="card animate-on-scroll">
    <h3 class="card-title">DermFormer: Nested Multi-modal Vision Transformers for Robust Skin Cancer Detection.</h3>
    <div class="card-meta">Published • Pattern Analysis and Applications, 2025</div>
    <div class="card-content">
      <p>State-of-the-art multi-modal transformer architecture for robust skin cancer detection achieving 0.779 diagnosis accuracy. Combines dermoscopic images, clinical images, and patient metadata through entropy-weighted ensemble learning.</p>
      <p><strong>Key Achievements:</strong></p>
      <ul>
        <li>Superior robustness to real-world corruptions (noise, blur, compression)</li>
        <li>Entropy-weighted ensemble for dynamic modality fusion</li>
        <li>Multi-task learning across 8 classification tasks</li>
        <li>Interactive demos with real Derm7pt cases</li>
      </ul>
    </div>
    <div class="card-tags">
      <span class="tag">Medical AI</span>
      <span class="tag">Transformers</span>
      <span class="tag">Multi-modal</span>
      <span class="tag">PyTorch</span>
    </div>
    <div style="margin-top: 1rem;">
      <a href="/projects/dermformer" class="btn btn-primary">View Project →</a>
    </div>
  </div>

  <div class="card animate-on-scroll">
    <h3 class="card-title">SkinCBM: Interpretable Diagnosis via Concept Bottlenecks</h3>
    <div class="card-meta">Active Development • 2025</div>
    <div class="card-content">
      <p>Educational implementation of Concept Bottleneck Models for interpretable skin cancer diagnosis. Forces reasoning through human-understandable dermatological concepts, enabling clinician validation and correction of model predictions.</p>
      <p><strong>Key Features:</strong></p>
      <ul>
        <li>7-point checklist: Clinically validated dermatological concepts</li>
        <li>Concept intervention: Test-time correction by domain experts</li>
        <li>Information-theoretic analysis: Completeness and synergy metrics</li>
        <li>3 comprehensive tutorials with sample data included</li>
      </ul>
    </div>
    <div class="card-tags">
      <span class="tag">Interpretability</span>
      <span class="tag">Medical AI</span>
      <span class="tag">Concept Learning</span>
      <span class="tag">PyTorch</span>
    </div>
    <div style="margin-top: 1rem;">
      <a href="/projects/skincbm" class="btn btn-primary">View Project →</a>
    </div>
  </div>

  <div class="card animate-on-scroll">
    <h3 class="card-title">MedXAI: Medical Image Explainability Toolkit</h3>
    <div class="card-meta">Active Development • 2024-2025</div>
    <div class="card-content">
      <p>Comprehensive PyTorch framework for explainable AI in medical imaging. Provides unified implementations of 6 XAI methods with quantitative evaluation metrics, bridging the gap between model predictions and clinical interpretability.</p>
      <p><strong>Key Features:</strong></p>
      <ul>
        <li>6 XAI methods: GradCAM, GradCAM++, Integrated Gradients, RISE, LIME, SHAP</li>
        <li>Quantitative evaluation: Deletion/Insertion AUC, faithfulness metrics</li>
        <li>Interactive Gradio interface with live demonstrations</li>
        <li>6 comprehensive tutorial notebooks with medical datasets</li>
      </ul>
    </div>
    <div class="card-tags">
      <span class="tag">Explainable AI</span>
      <span class="tag">Medical Imaging</span>
      <span class="tag">PyTorch</span>
      <span class="tag">Gradio</span>
    </div>
    <div style="margin-top: 1rem;">
      <a href="/projects/medxai" class="btn btn-primary">View Project →</a>
    </div>
  </div>

  <div class="card animate-on-scroll">
    <h3 class="card-title">Classification-to-Segmentation</h3>
    <div class="card-meta">Published • AIIH 2025 [Oral Presentation]</div>
    <div class="card-content">
      <p>Novel zero-shot segmentation approach using Class Activation Maps to guide foundation models. Achieves segmentation without pixel-level annotations, dramatically reducing annotation costs.</p>
      <p><strong>Key Innovations:</strong></p>
      <ul>
        <li>Zero-shot segmentation (IoU: 0.366) without pixel annotations</li>
        <li>Dual-prompt strategy (bounding box + sampled points)</li>
        <li>Adaptive CAM selection: 98.75% failure reduction</li>
        <li>Interactive demo with truly zero-shot capability</li>
      </ul>
    </div>
    <div class="card-tags">
      <span class="tag">Explainable AI</span>
      <span class="tag">Foundation Models</span>
      <span class="tag">Zero-Shot Learning</span>
      <span class="tag">CAM</span>
    </div>
    <div style="margin-top: 1rem;">
      <a href="/projects/classification-to-segmentation" class="btn btn-primary">View Project →</a>
    </div>
  </div>
</div>

## Interactive Demonstrations

All projects include comprehensive interactive demos showcasing the complete pipelines:

<div class="grid grid-2" style="margin-top: 1rem;">
  <div class="card animate-on-scroll">
    <h3 class="card-title">DermFormer Demos</h3>
    <div class="card-content">
      <ul>
        <li><strong>Interactive Inference</strong>: Multi-modal predictions with real Derm7pt cases</li>
        <li><strong>Robustness Analysis</strong>: Performance under 18 corruption types</li>
      </ul>
    </div>
    <a href="/projects/dermformer#interactive-demonstrations" class="btn btn-secondary">Launch Demos</a>
  </div>
  
  <div class="card animate-on-scroll">
    <h3 class="card-title">SkinCBM Tutorials</h3>
    <div class="card-content">
      <ul>
        <li><strong>Quick Demo</strong>: Try CBMs on sample dermoscopy images (no dataset!)</li>
        <li><strong>Concept Intervention</strong>: Correct predictions by modifying concepts</li>
      </ul>
    </div>
    <a href="/projects/skincbm#interactive-tutorials" class="btn btn-secondary">View Tutorials</a>
  </div>
  
  <div class="card animate-on-scroll">
    <h3 class="card-title">MedXAI Interface</h3>
    <div class="card-content">
      <ul>
        <li><strong>Tutorial Mode</strong>: Train CNN on MNIST with LIME, SHAP, GradCAM</li>
        <li><strong>Medical Datasets</strong>: Interactive XAI on DermaMNIST, PneumoniaMNIST, ChestMNIST</li>
      </ul>
    </div>
    <a href="/projects/medxai#interactive-web-interface" class="btn btn-secondary">View Details</a>
  </div>
  
  <div class="card animate-on-scroll">
    <h3 class="card-title">Classification-to-Segmentation Demo</h3>
    <div class="card-content">
      <ul>
        <li><strong>Zero-Shot Pipeline</strong>: Complete CAM-to-segmentation workflow</li>
        <li><strong>5 ISIC Examples</strong>: Diverse lesion types with ground truth comparison</li>
      </ul>
    </div>
    <a href="/projects/classification-to-segmentation#interactive-demonstration" class="btn btn-secondary">Launch Demo</a>
  </div>
</div>

## Research Impact

<div class="card animate-on-scroll" style="margin-top: 2rem;">
  <div class="card-content">
    <p><strong>Combined Contributions:</strong></p>
    <ul>
      <li><strong>2 Published Papers</strong> in high-impact venues (Springer)</li>
      <li><strong>2 Open-Source Toolkits</strong> enabling reproducible research (MedXAI, SkinCBM)</li>
      <li><strong>State-of-the-art Results</strong> on benchmark datasets</li>
      <li><strong>Open Source</strong> implementations with comprehensive documentation</li>
      <li><strong>Interactive Demos</strong> for reproducibility and exploration</li>
      <li><strong>Clinical Relevance</strong> addressing real-world deployment challenges</li>
      <li><strong>Educational Resources</strong> with 9+ comprehensive tutorial notebooks</li>
    </ul>
  </div>
</div>

## Open Source & Reproducible Research

<div class="card animate-on-scroll">
  <h3 class="card-title">Commitment to Open Science</h3>
  <div class="card-content">
    <p>I believe in the importance of open, reproducible research that advances the field and enables others to build upon my work. All my research projects include comprehensive documentation, code, and data to ensure full reproducibility.</p>
    
    <div class="grid grid-2" style="margin-top: 1rem;">
      <div>
        <h4>Open Research Practices</h4>
        <ul>
          <li><strong>Open Source Code</strong> - All research implementations publicly available</li>
          <li><strong>Reproducible Results</strong> - Detailed documentation and setup instructions</li>
          <li><strong>Open Data</strong> - Datasets and preprocessing scripts shared when possible</li>
          <li><strong>Transparent Methods</strong> - Complete experimental protocols and hyperparameters</li>
        </ul>
      </div>
      <div>
        <h4>Research Repositories</h4>
        <ul>
          <li><strong>PhD Research</strong> - Implementations</li>
          <li><strong>Healthcare AI</strong> - Privacy-preserving medical AI models</li>
          <li><strong>Tutorial Projects</strong> - Educational AI/ML implementations</li>
        </ul>
      </div>
    </div>
    
    <div style="margin-top: 1.5rem;">
      <h4>Reproducibility Standards</h4>
      <p>Each project repository includes:</p>
      <ul>
        <li><strong>Comprehensive README</strong> with setup and usage instructions</li>
        <li><strong>Environment Files</strong> (requirements.txt, conda environment.yml)</li>
        <li><strong>Example Datasets</strong> and data preprocessing scripts</li>
        <li><strong>Unit Tests</strong> and validation procedures</li>
        <li><strong>Results Reproduction</strong> scripts and notebooks</li>
        <li><strong>Documentation</strong> with theoretical background and implementation details</li>
      </ul>
    </div>
  </div>
  <div style="margin-top: 1rem;">
    <a href="https://github.com/{{ site.github_username }}" class="btn btn-secondary" target="_blank">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
      View Research Repositories
    </a>
  </div>
</div>

---

*Interested in collaborating on a project or learning more about my work? Feel free to [contact me](/contact) to discuss opportunities.*