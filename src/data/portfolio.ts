export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
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
  avatar: '/avatar-hero.svg',
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
    image: '/project-ecs.svg',
    links: [
      { label: 'Repo', href: '#' },
      { label: 'Guide', href: '#' },
    ],
    stack: ['AWS', 'ECS', 'Fargate', 'Terraform', 'CloudFront', 'S3', 'VPC'],
  },
  {
    id: 'microservices',
    title: 'mini-microservices - Secure Polyglot Microservices',
    description:
      'Two implementations of the same microservices platform: Spring Boot with Angular and MySQL, and Node.js with React and Postgres.',
    image: '/project-microservices.svg',
    links: [
      { label: 'Repo', href: '#' },
      { label: 'Demo', href: '#' },
    ],
    stack: ['Spring Boot', 'Angular', 'Node.js', 'React', 'MySQL', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'kubleops',
    title: 'KubleOps - Cloud-Native DevOps Platform',
    description:
      'AWS EKS platform with private networking, reusable Terraform modules, GitOps delivery, Argo CD, Helm, autoscaling, and cluster monitoring.',
    image: '/project-kubernetes.svg',
    links: [
      { label: 'Repo', href: '#' },
      { label: 'Manifests', href: '#' },
    ],
    stack: ['AWS', 'EKS', 'Terraform', 'Argo CD', 'Helm', 'Karpenter', 'Prometheus'],
  },
  {
    id: 'ecoauto',
    title: 'EcoAuto - Cost-Optimized AWS Hosting',
    description:
      'Modular Terraform architecture for cost-optimized AWS hosting, combining autoscaling, databases, private S3, CloudFront, IAM, and edge routing.',
    image: '/project-ecoauto.svg',
    links: [{ label: 'Repo', href: '#' }],
    stack: ['Terraform', 'EC2', 'RDS', 'CloudFront', 'Route 53', 'Lambda@Edge'],
  },
  {
    id: 'cloud-resume',
    title: 'Cloud Resume Challenge - Resume Site on AWS',
    description:
      'Cloud Resume Challenge website on AWS with global delivery, custom-domain TLS, and a serverless visitor counter.',
    image: '/project-resume.svg',
    links: [
      { label: 'Repo', href: '#' },
      { label: 'Live', href: '#' },
    ],
    stack: ['S3', 'CloudFront', 'Lambda', 'API Gateway', 'DynamoDB', 'GitHub Actions'],
  },
  {
    id: 'talos-bootstrap',
    title: 'Talos-HyperV-Bootstrap',
    description:
      'Interactive PowerShell bootstrap flow for creating and preparing Talos Linux Kubernetes clusters on Hyper-V.',
    image: '/project-terminal.svg',
    links: [{ label: 'Case Study', href: '#' }],
    stack: ['PowerShell', 'Talos Linux', 'Hyper-V', 'Kubernetes', 'Networking'],
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
    items: ['Python', 'Bash', 'PowerShell', 'Groovy', 'Java', 'JavaScript'],
  },
  {
    title: 'Virtualization & Platforms',
    icon: 'monitor',
    items: ['VMware', 'VirtualBox', 'Proxmox', 'Vagrant'],
  },
];

export const certifications: Certification[] = [
  {
    name: 'Kubestronaut',
    issuer: 'The Linux Foundation',
    href: '#',
    badge: '/badge-kube.svg',
    icon: 'award',
  },
  {
    name: 'Certified Kubernetes Security Specialist (CKS)',
    issuer: 'The Linux Foundation',
    href: '#',
    badge: '/badge-cks.svg',
    icon: 'kube',
  },
  {
    name: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'The Linux Foundation',
    href: '#',
    badge: '/badge-cka.svg',
    icon: 'kube',
  },
  {
    name: 'Certified Kubernetes Application Developer (CKAD)',
    issuer: 'The Linux Foundation',
    href: '#',
    badge: '/badge-ckad.svg',
    icon: 'kube',
  },
  {
    name: 'Kubernetes and Cloud Native Security Associate (KCSA)',
    issuer: 'The Linux Foundation',
    href: '#',
    badge: '/badge-kcsa.svg',
    icon: 'kube',
  },
  {
    name: 'Kubernetes and Cloud Native Associate (KCNA)',
    issuer: 'The Linux Foundation',
    href: '#',
    badge: '/badge-kcna.svg',
    icon: 'kube',
  },
  {
    name: 'Red Hat Certified System Administrator (RHCSA)',
    issuer: 'Red Hat',
    href: '#',
    badge: '/badge-redhat.svg',
    icon: 'hat',
  },
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
    name: 'HashiCorp Terraform Associate (003)',
    issuer: 'HashiCorp',
    href: '#',
    badge: '/badge-terraform.svg',
    icon: 'terraform',
  },
  {
    name: 'Microsoft Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    href: '#',
    badge: '/badge-azure.svg',
    icon: 'microsoft',
  },
  {
    name: 'Cisco Network Security',
    issuer: 'Cisco',
    href: '#',
    badge: '/badge-cisco.svg',
    icon: 'cisco',
  },
];

export const socialLinks = [
  { label: 'GitHub', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Email', href: `mailto:${profile.email}` },
  { label: 'Resume', href: profile.resumeHref },
];
