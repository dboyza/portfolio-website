export type Project = {
  id: string;
  title: string;
  description: string;
  details?: string[];
  image: string;
  imageAlt: string;
  links: {
    label: string;
    href: string;
  }[];
  stack: string[];
};

export type SkillGroup = {
  title: string;
  icon: string;
  items: string[];
};

export type Certification = {
  name: string;
  issuer: string;
  href: string;
  badge: string;
  icon: string;
};

export const profile = {
  name: 'Your Name',
  greeting: "Hi! I'm Your Name",
  title: 'Cloud & DevOps Engineer',
  location: 'Your City',
  credentialLine:
    'Cloud builder | AWS, Azure, Kubernetes, Terraform & Linux focused',
  focus: 'Loves Infrastructure as Code',
  email: 'hello@example.com',
  resumeHref: '#contact',
  avatar: '/profile-portrait.png',
  aboutAvatar: '/avatar-about.svg',
  views: '4751',
};

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const terminalLines = [
  'Welcome to my interactive portfolio!',
  "Type 'help' to list available commands.",
  'cloud-resume:~$',
];

export const aboutParagraphs = [
  'Hey! I am a Cloud & DevOps Engineer who enjoys automating infrastructure, designing CI/CD pipelines, and making cloud environments easier to operate.',
  'This version uses original placeholder content while closely matching the structure, spacing, and dark visual rhythm of the reference portfolio.',
];

export const projects: Project[] = [
  {
    id: 'ecs-blueprint',
    title: 'AWS-ECS-Blueprint - Private Web on Fargate',
    description:
      'Terraform blueprint for private web apps on ECS Fargate, with two frontend options: private S3 delivery behind CloudFront or a private frontend served from ECS.',
    details: [
      'API traffic can stay private through CloudFront to an internal ALB, while RDS, service discovery, endpoints, backups, and IaC validation stay inside the platform boundary.',
    ],
    image: '/project-ecs.svg',
    imageAlt: 'Architecture diagram placeholder for an ECS Fargate private web platform',
    links: [
      { label: 'Repo', href: '#' },
      { label: 'Guide', href: '#' },
    ],
    stack: [
      'AWS ECS Fargate',
      'CloudFront',
      'WAF',
      'ALB',
      'Route 53',
      'S3',
      'ACM',
      'RDS',
      'Cloud Map',
      'CloudWatch',
      'VPC Endpoints',
      'Terraform',
      'GitHub Actions',
      'Terratest',
      'Infracost',
      'TFLint',
      'Checkov',
      'tfsec',
      'Bash',
      'Python',
    ],
  },
  {
    id: 'microservices',
    title: 'mini-microservices - Secure Polyglot Microservices',
    description:
      'Two implementations of the same microservices platform: Spring Boot with Angular and MySQL, and Node.js with React and Postgres.',
    details: [
      'Both repositories emphasize DevSecOps delivery with dependency review, SAST, secret scanning, SBOM generation, container analysis, smoke tests, and quality gates.',
    ],
    image: '/project-microservices.svg',
    imageAlt: 'Dashboard placeholder for deployed microservices',
    links: [
      { label: 'Repo', href: '#' },
      { label: 'Demo', href: '#' },
    ],
    stack: [
      'Spring Boot',
      'Angular',
      'Node.js',
      'React',
      'FastAPI',
      'Nginx',
      'Docker Compose',
      'MySQL',
      'PostgreSQL',
      'GitHub Actions',
      'CodeQL',
      'Gitleaks',
      'Trivy',
      'OWASP ZAP',
      'SonarQube',
    ],
  },
  {
    id: 'kubleops',
    title: 'KubleOps - Cloud-Native DevOps Platform',
    description:
      'AWS EKS platform with private networking, reusable Terraform modules, GitOps delivery, Argo CD, Helm, autoscaling, and cluster monitoring.',
    image: '/project-kubernetes.svg',
    imageAlt: 'Dark architecture diagram placeholder for a Kubernetes operations platform',
    links: [
      { label: 'Repo', href: '#' },
      { label: 'Manifests', href: '#' },
    ],
    stack: [
      'AWS EKS',
      'EC2',
      'VPC',
      'ALB',
      'ECR',
      'IAM/IRSA',
      'Terraform',
      'Kubernetes',
      'Helm',
      'Argo CD',
      'CircleCI',
      'Karpenter',
      'ExternalDNS',
      'Prometheus',
      'Grafana',
      'Trivy',
    ],
  },
  {
    id: 'ecoauto',
    title: 'EcoAuto - Cost-Optimized AWS Hosting',
    description:
      'Modular Terraform architecture for cost-optimized AWS hosting, combining autoscaling, databases, private S3, CloudFront, IAM, and edge routing.',
    details: [
      'Event-driven automation keeps origins in sync, supports scheduling, cleans up snapshots, and includes optional WAF, observability, queueing, and cost-saving profiles.',
    ],
    image: '/project-ecoauto.svg',
    imageAlt: 'Architecture diagram placeholder for cost-optimized AWS hosting',
    links: [{ label: 'Repo', href: '#' }],
    stack: [
      'AWS EC2',
      'Auto Scaling',
      'RDS',
      'S3',
      'CloudFront OAC',
      'Lambda',
      'Lambda@Edge',
      'Route 53',
      'ACM',
      'IAM',
      'CloudWatch',
      'EventBridge',
      'SQS',
      'DLQ',
      'WAF',
      'Terraform',
      'GitLab CI',
      'TFLint',
      'tfsec',
      'gitleaks',
    ],
  },
  {
    id: 'cloud-resume',
    title: 'Cloud Resume Challenge - Resume Site on AWS',
    description:
      'Cloud Resume Challenge website on AWS with global delivery, custom-domain TLS, deployment checks, and a serverless visitor counter.',
    image: '/project-resume.svg',
    imageAlt: 'Cloud resume architecture placeholder',
    links: [
      { label: 'Repo', href: '#' },
      { label: 'Live', href: '#' },
    ],
    stack: [
      'S3',
      'CloudFront',
      'ACM',
      'Route 53',
      'Lambda',
      'API Gateway',
      'DynamoDB',
      'CloudWatch',
      'SNS',
      'IAM',
      'Terraform',
      'GitHub Actions',
    ],
  },
  {
    id: 'talos-bootstrap',
    title: 'Talos-HyperV-Bootstrap',
    description:
      'Interactive PowerShell bootstrap flow for creating and preparing Talos Linux Kubernetes clusters on Hyper-V.',
    image: '/project-terminal.svg',
    imageAlt: 'Terminal placeholder for a PowerShell Talos bootstrap script',
    links: [
      { label: 'Repo', href: '#' },
      { label: 'Demo', href: '#' },
    ],
    stack: ['PowerShell', 'Talos Linux', 'Kubernetes', 'Hyper-V'],
  },
  {
    id: 'k3s-cluster',
    title: 'k3s-Cluster-Setup',
    description:
      'PowerShell tool to create and manage local k3s Kubernetes clusters on Ubuntu Multipass VMs for fast lab environments.',
    image: '/project-k3s.svg',
    imageAlt: 'Local Kubernetes cluster placeholder diagram',
    links: [
      { label: 'Repo', href: '#' },
      { label: 'Demo', href: '#' },
    ],
    stack: ['PowerShell', 'k3s', 'Kubernetes', 'Multipass', 'Hyper-V', 'Ubuntu VMs'],
  },
  {
    id: 'optichat',
    title: 'OptiChat - Scalable Messaging System',
    description:
      'Messaging prototype based on Spring Boot and ActiveMQ, containerized with Docker and released through Jenkins quality gates.',
    image: '/project-optichat.svg',
    imageAlt: 'Messaging system placeholder diagram',
    links: [{ label: 'Repo', href: '#' }],
    stack: [
      'Java',
      'Spring Boot',
      'Maven',
      'ActiveMQ',
      'Docker',
      'Jenkins',
      'Kubernetes',
      'KEDA',
      'Argo CD',
      'Prometheus',
      'Grafana Alerts',
      'SonarQube',
    ],
  },
  {
    id: 'release-automation',
    title: 'Release Automation Platform - Enterprise Internal Project',
    description:
      'Enterprise CI and deployment architecture connecting issue tracking, source control, build stages, image scanning, artifact delivery, and environment promotion.',
    image: '/project-release.svg',
    imageAlt: 'Enterprise release automation architecture placeholder',
    links: [{ label: 'Case Study', href: '#' }],
    stack: [
      'Jira',
      'GitLab',
      'Jenkins',
      'Maven',
      'SonarQube',
      'Docker',
      'Trivy',
      'Nexus',
      'Ansible',
      'OpenShift',
      'WildFly',
      'WebSphere',
      'PostgreSQL',
      'Oracle Database',
      'Prometheus',
      'Grafana',
      'Selenium',
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Cloud & Infrastructure',
    icon: 'cloud',
    items: ['AWS', 'Microsoft Azure', 'OpenStack'],
  },
  {
    title: 'CI/CD & DevOps',
    icon: 'settings',
    items: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'CircleCI', 'Argo CD', 'SonarQube', 'Nexus'],
  },
  {
    title: 'Containers & Orchestration',
    icon: 'boxes',
    items: ['Docker', 'Docker Compose', 'Kubernetes', 'OpenShift', 'Helm', 'KEDA', 'cert-manager', 'Karpenter'],
  },
  {
    title: 'Infrastructure as Code & Configuration Management',
    icon: 'code',
    items: ['Terraform', 'Ansible'],
  },
  {
    title: 'Monitoring & Logging',
    icon: 'activity',
    items: ['Prometheus', 'Grafana', 'ELK Stack', 'CloudWatch'],
  },
  {
    title: 'Databases & Servers',
    icon: 'database',
    items: ['PostgreSQL', 'MySQL', 'Oracle SQL', 'MongoDB', 'WildFly', 'WebSphere'],
  },
  {
    title: 'Version Control & Collaboration',
    icon: 'git',
    items: ['Git', 'GitHub', 'GitLab', 'Jira'],
  },
  {
    title: 'Linux Distributions',
    icon: 'server',
    items: ['Ubuntu', 'CentOS', 'RHEL', 'Amazon Linux', 'Talos Linux'],
  },
  {
    title: 'Networking & Service Mesh',
    icon: 'network',
    items: ['Istio', 'Cilium', 'Traefik', 'Ingress', 'DNS', 'Load Balancing'],
  },
  {
    title: 'Security',
    icon: 'shield',
    items: ['HashiCorp Vault', 'Falco', 'Trivy'],
  },
  {
    title: 'Languages & Scripting',
    icon: 'braces',
    items: ['Python', 'Bash', 'PowerShell', 'Groovy', 'Java', 'JavaScript', 'SQL', 'YAML'],
  },
  {
    title: 'Virtualization & Platforms',
    icon: 'monitor',
    items: ['VMware', 'VirtualBox', 'Proxmox', 'Vagrant'],
  },
];

export const certifications: Certification[] = [
  {
    name: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    href: '#',
    badge: '/badge-aws.svg',
    icon: 'aws',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    href: '#',
    badge: '/badge-cloud.svg',
    icon: 'aws',
  },
  {
    name: 'Security+',
    issuer: 'CompTIA',
    href: '#',
    badge: '/badge-security-plus.svg',
    icon: 'security',
  },
];

export const socialLinks = [
  { label: 'GitHub', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Resume', href: profile.resumeHref },
  { label: 'Email', href: `mailto:${profile.email}` },
];
