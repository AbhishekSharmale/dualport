<template>
  <div class="dual-portfolio">
    <!-- Scroll Progress Bar -->
    <div class="scroll-progress" :style="{ '--scroll-progress': scrollProgress }"></div>
    
    <!-- OS Mode Toggle -->
    <button class="os-toggle" @click="toggleOSMode" title="Enter OS Mode">
      💻
    </button>

    <!-- OS Mode Overlay -->
    <div v-if="osMode" class="os-overlay">
      <div class="os-loading" v-if="!osLoaded">
        <div class="loading-spinner"></div>
        <p>Loading OS Interface...</p>
      </div>
      <iframe 
        :src="osUrl" 
        class="os-iframe"
        @load="osLoaded = true"
        @error="osError = true"
        :style="{ opacity: osLoaded ? 1 : 0 }"
      ></iframe>
      <div v-if="osError" class="os-error">
        <h3>🚀 OS Interface Coming Soon!</h3>
        <p>The revolutionary OS portfolio experience is being deployed...</p>
        <div class="os-preview">
          <div class="preview-screen">
            <div class="boot-animation">
              <div class="boot-text">ABHISHEK_OS</div>
              <div class="loading-dots">Loading<span class="dots">...</span></div>
            </div>
          </div>
        </div>
        <p class="demo-note">For now, enjoy the modern scroll experience below!</p>
        <button @click="closeOSMode" class="back-btn">Back to Portfolio</button>
      </div>
      <button class="close-os" @click="closeOSMode">✕</button>
    </div>

    <!-- Regular Portfolio -->
    <div v-else class="portfolio-content">
      <!-- Hero Section with Unique Scroll -->
      <section class="hero magnetic-section">
        <div class="hero-bg parallax-bg"></div>
        <div class="hero-content">
          <h1 class="hero-title scroll-reveal">
            <span class="line">ABHISHEK</span>
            <span class="line">SHARMALE</span>
          </h1>
          <p class="hero-subtitle scroll-reveal">
            Cloud Engineer crafting scalable, reliable infrastructure
          </p>
          <div class="hero-stats scroll-reveal">
            <div class="stat-item" v-for="stat in stats" :key="stat.label">
              <span class="stat-number">{{ stat.value }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
          </div>
        </div>
        <div class="scroll-hint">
          <div class="scroll-line"></div>
          <span>Scroll to explore</span>
        </div>
      </section>

      <!-- Projects with Horizontal Scroll -->
      <section class="projects-section">
        <div class="container">
          <h2 class="section-title scroll-reveal">Featured Work</h2>
          <div class="horizontal-scroll" ref="horizontalScroll">
            <div 
              v-for="project in projects" 
              :key="project.id"
              class="project-card magnetic-section"
            >
              <div class="project-visual">
                <div class="project-gradient" :style="{ background: project.gradient }"></div>
                <div class="project-content">
                  <span class="project-type">{{ project.type }}</span>
                  <h3>{{ project.title }}</h3>
                  <p>{{ project.description }}</p>
                  <div class="project-achievements">
                    <div v-for="achievement in project.achievements" :key="achievement">
                      ✓ {{ achievement }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills with Morphing Animation -->
      <section class="skills-section">
        <div class="container">
          <h2 class="section-title scroll-reveal">Technical Arsenal</h2>
          <div class="skills-morphing">
            <div 
              v-for="(category, index) in skillCategories" 
              :key="category.name"
              class="skill-category scroll-reveal"
              :style="{ animationDelay: index * 0.2 + 's' }"
            >
              <h3>{{ category.name }}</h3>
              <div class="skills-blob">
                <div 
                  v-for="skill in category.skills" 
                  :key="skill.name"
                  class="skill-bubble"
                  :style="{ '--skill-level': skill.level + '%' }"
                >
                  <span class="skill-icon">{{ skill.icon }}</span>
                  <span class="skill-name">{{ skill.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact with Magnetic Effect -->
      <section class="contact-section">
        <div class="container">
          <div class="contact-content magnetic-section">
            <h2 class="scroll-reveal">Ready to Build Something Amazing?</h2>
            <p class="scroll-reveal">Let's discuss your next cloud infrastructure project</p>
            <div class="contact-methods scroll-reveal">
              <a href="mailto:hire.abhisheksharmale@gmail.com" class="contact-btn magnetic-section">
                <span class="btn-icon">📧</span>
                <span>Get In Touch</span>
              </a>
              <button @click="toggleOSMode" class="contact-btn secondary magnetic-section">
                <span class="btn-icon">💻</span>
                <span>Launch OS Interface</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const osMode = ref(false)
const osLoaded = ref(false)
const osError = ref(false)
const scrollProgress = ref(0)
const osUrl = computed(() => {
  return process.dev ? 'http://localhost:3002' : 'https://dualport.pages.dev/os'
})

const stats = ref([
  { value: '99.9%', label: 'Uptime Delivered' },
  { value: '3+', label: 'Years Experience' },
  { value: '40%', label: 'Faster Deployments' }
])

const projects = ref([
  {
    id: 1,
    type: 'Infrastructure',
    title: 'Platform Reliability & Automation',
    description: 'Built self-healing infrastructure with automated Terraform provisioning and comprehensive monitoring pipelines using Azure DevOps.',
    achievements: ['Achieved 99.9% system uptime', 'Reduced deployment time by 40%', 'Automated infrastructure provisioning'],
    tech: ['Azure', 'Terraform', 'Kubernetes', 'Azure DevOps', 'Prometheus'],
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    id: 2,
    type: 'Migration',
    title: 'Cross-Cloud Data Migration',
    description: 'Seamless Azure to AWS migration with zero data loss, including disaster recovery and backup solutions implementation.',
    achievements: ['Zero data loss migration', 'Built comprehensive DR solutions', 'Cross-cloud compatibility'],
    tech: ['Azure', 'AWS', 'Docker', 'Terraform', 'PowerShell'],
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    id: 3,
    type: 'CI/CD',
    title: 'Advanced Pipeline Optimization',
    description: 'Multi-stage deployment pipeline with automated testing and rollback capabilities for enterprise applications.',
    achievements: ['40% faster deployments', 'Zero-downtime releases', 'Automated rollback system'],
    tech: ['Azure DevOps', 'Docker', 'Kubernetes', 'Helm'],
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  }
])

const skillCategories = ref([
  {
    name: 'Cloud Platforms',
    skills: [
      { name: 'Microsoft Azure', icon: '☁️', level: 95 },
      { name: 'Amazon AWS', icon: '🚀', level: 85 },
      { name: 'Google Cloud', icon: '🌐', level: 75 }
    ]
  },
  {
    name: 'DevOps & Automation',
    skills: [
      { name: 'Kubernetes', icon: '⚙️', level: 90 },
      { name: 'Docker', icon: '📦', level: 95 },
      { name: 'Terraform', icon: '🏗️', level: 90 },
      { name: 'Azure DevOps', icon: '🔄', level: 95 }
    ]
  },
  {
    name: 'Monitoring & Security',
    skills: [
      { name: 'Prometheus', icon: '📊', level: 85 },
      { name: 'Grafana', icon: '📈', level: 85 },
      { name: 'PowerShell', icon: '💻', level: 90 },
      { name: 'Bash', icon: '⚙️', level: 85 }
    ]
  }
])

const toggleOSMode = () => {
  osMode.value = true
  osLoaded.value = false
  osError.value = false
}

const closeOSMode = () => {
  osMode.value = false
  osLoaded.value = false
  osError.value = false
}

const retryOS = () => {
  osError.value = false
  osLoaded.value = false
  // Force iframe reload
  const iframe = document.querySelector('.os-iframe')
  if (iframe) {
    iframe.src = iframe.src
  }
}

const updateScrollProgress = () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = scrollTop / docHeight
}

onMounted(() => {
  // Scroll progress tracking
  window.addEventListener('scroll', updateScrollProgress)
  
  // Scroll reveal animations
  const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
        }
      })
    }, { threshold: 0.1 })
    
    document.querySelectorAll('.scroll-reveal').forEach(el => {
      observer.observe(el)
    })
  }
  
  nextTick(observeElements)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress)
})

useHead({
  title: 'Abhishek Sharmale - Cloud Engineer Portfolio',
  meta: [
    { name: 'description', content: 'Cloud Engineer with dual-experience portfolio featuring modern scroll effects and hidden OS interface' }
  ]
})
</script>

<style scoped>
.dual-portfolio {
  min-height: 100vh;
}

/* OS Mode Overlay */
.os-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.os-iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.os-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #00ff00;
  font-family: 'JetBrains Mono', monospace;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #333;
  border-top: 3px solid #00ff00;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.close-os {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #ff4444;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  z-index: 10001;
  transition: all 0.2s;
}

.close-os:hover {
  background: #ff6666;
  transform: scale(1.1);
}

.os-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ff4444;
  font-family: 'JetBrains Mono', monospace;
  text-align: center;
  padding: 2rem;
}

.os-error h3 {
  color: #ff4444;
  margin-bottom: 1rem;
}

.os-error code {
  background: #333;
  padding: 1rem;
  border-radius: 4px;
  color: #00ff00;
  margin: 1rem 0;
  display: block;
}

.os-preview {
  margin: 2rem 0;
}

.preview-screen {
  width: 300px;
  height: 200px;
  background: #000;
  border: 2px solid #00ff00;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.boot-animation {
  text-align: center;
  color: #00ff00;
  font-family: 'JetBrains Mono', monospace;
}

.boot-text {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px #00ff00;
}

.loading-dots {
  font-size: 0.9rem;
}

.dots {
  animation: blink 1.5s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.demo-note {
  color: #888;
  font-style: italic;
  margin: 1rem 0;
}

.back-btn,
.retry-btn {
  background: #00ff00;
  color: #000;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 1rem;
}

.back-btn:hover,
.retry-btn:hover {
  background: #00aa00;
}

/* Hero Section */
.hero {
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 120%;
  height: 120%;
  background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0a0a0f 100%);
  will-change: transform;
}

.hero-content {
  text-align: center;
  z-index: 2;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  line-height: 0.9;
  margin-bottom: 2rem;
}

.hero-title .line {
  display: block;
  background: linear-gradient(135deg, #8b5cf6, #3b82f6, #ec4899);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  color: #94a3b8;
  margin-bottom: 3rem;
}

.hero-stats {
  display: flex;
  gap: 3rem;
  justify-content: center;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-label {
  color: #64748b;
  font-size: 0.9rem;
}

.scroll-hint {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: #64748b;
}

.scroll-line {
  width: 2px;
  height: 3rem;
  background: linear-gradient(to bottom, transparent, #3b82f6, transparent);
  animation: scrollPulse 2s infinite;
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.3; transform: scaleY(1); }
  50% { opacity: 1; transform: scaleY(1.2); }
}

/* Projects Section */
.projects-section {
  padding: 8rem 0;
  background: rgba(26, 26, 46, 0.3);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.horizontal-scroll {
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  padding: 2rem 0;
  scroll-snap-type: x mandatory;
}

.project-card {
  min-width: 400px;
  height: 500px;
  scroll-snap-align: center;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
}

.project-visual {
  height: 100%;
  position: relative;
}

.project-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.9;
}

.project-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  color: white;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
}

.project-type {
  background: rgba(255,255,255,0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  margin-bottom: 1rem;
  display: inline-block;
}

.project-content h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.project-achievements {
  margin-top: 1rem;
}

.project-achievements div {
  color: #10b981;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

/* Skills Section */
.skills-section {
  padding: 8rem 0;
  background: #0a0a0f;
}

.skills-morphing {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
}

.skill-category {
  background: rgba(26, 26, 46, 0.5);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
}

.skill-category h3 {
  color: #3b82f6;
  font-size: 1.3rem;
  margin-bottom: 2rem;
  text-align: center;
}

.skills-blob {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.skill-bubble {
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  border-radius: 50px;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-weight: 500;
  transform: scale(calc(var(--skill-level) / 100));
  transition: transform 0.3s ease;
}

.skill-bubble:hover {
  transform: scale(1.1);
}

/* Contact Section */
.contact-section {
  padding: 8rem 0;
  background: rgba(26, 26, 46, 0.3);
}

.contact-content {
  text-align: center;
}

.contact-content h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 1rem;
}

.contact-content p {
  color: #94a3b8;
  font-size: 1.2rem;
  margin-bottom: 3rem;
}

.contact-methods {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.contact-btn {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.contact-btn:not(.secondary) {
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  color: white;
}

.contact-btn.secondary {
  background: rgba(59, 130, 246, 0.2);
  color: #3b82f6;
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.contact-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);
}

@media (max-width: 768px) {
  .hero-stats {
    gap: 2rem;
  }
  
  .horizontal-scroll {
    padding-left: 2rem;
  }
  
  .project-card {
    min-width: 300px;
  }
  
  .skills-morphing {
    grid-template-columns: 1fr;
  }
  
  .contact-methods {
    flex-direction: column;
    align-items: center;
  }
}
</style>