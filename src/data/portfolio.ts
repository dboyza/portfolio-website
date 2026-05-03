export type Project = {
  id: string;
  title: string;
  description: string;
  links: {
    label: string;
    href: string;
  }[];
  stack: string[];
  featured?: boolean;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Certification = {
  name: string;
  issuer: string;
  href: string;
};

export const profile = {
  name: 'Your Name',
  greeting: "Hi! I'm Your Name",
  title: 'Cloud & DevOps Engineer',
  location: 'Your City, Country',
  tagline:
    'Cloud, automation, security, and reliable delivery for production systems.',
  focus: 'Loves Infrastructure as Code',
  email: 'hello@example.com',
  resumeHref: '#contact',
  avatar: '/avatar-placeholder.svg',
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
  'npm run deploy-portfolio',
  'checking cloud patterns...',
  'shipping resilient infrastructure notes...',
  'status: open for thoughtful work',
];

export const aboutParagraphs = [
  'I am a cloud and DevOps practitioner focused on practical infrastructure, clear automation, and systems that are easier to operate under pressure.',
  'This portfolio is a placeholder version: projects, certifications, links, and biography are structured so they can be replaced with real details without redesigning the page.',
];

export const projects: Project[] = [
  {
    id: 'cloud-platform',
    title: 'Cloud Platform Blueprint',
    description:
      'Reference architecture for private web workloads, managed delivery pipelines, and observable cloud environments.',
    links: [
      { label: 'Repo', href: '#' },
      { label: 'Demo', href: '#' },
    ],
    stack: [
      'AWS',
      'Terraform',
      'GitHub Actions',
      'CloudFront',
      'VPC',
      'Monitoring',
      'Security scanning',
    ],
    featured: true,
  },
  {
    id: 'microservices',
    title: 'Secure Microservices Lab',
    description:
      'Containerized services with automated testing, dependency scanning, release checks, and clear runtime boundaries.',
    links: [
      { label: 'Repo', href: '#' },
      { label: 'Walkthrough', href: '#' },
    ],
    stack: [
      'React',
      'Node.js',
      'PostgreSQL',
      'Docker',
      'Nginx',
      'CodeQL',
      'Trivy',
      'SBOM',
    ],
  },
  {
    id: 'kubernetes',
    title: 'Kubernetes Operations Kit',
    description:
      'Cluster delivery example covering GitOps, ingress, autoscaling, image scanning, and dashboard-ready observability.',
    links: [{ label: 'Repo', href: '#' }],
    stack: [
      'Kubernetes',
      'Helm',
      'Argo CD',
      'Prometheus',
      'Grafana',
      'Karpenter',
      'ExternalDNS',
    ],
  },
  {
    id: 'resume',
    title: 'Serverless Resume Site',
    description:
      'Personal site pattern using static hosting, global delivery, a serverless visitor counter, and deployment checks.',
    links: [
      { label: 'Repo', href: '#' },
      { label: 'Live', href: '#' },
    ],
    stack: [
      'S3',
      'CloudFront',
      'Lambda',
      'API Gateway',
      'DynamoDB',
      'Route 53',
      'GitHub Actions',
    ],
  },
  {
    id: 'iac-security',
    title: 'IaC Security Workflow',
    description:
      'Pull request workflow that validates cloud changes with linting, policy checks, drift detection, and cost review.',
    links: [{ label: 'Repo', href: '#' }],
    stack: [
      'Terraform',
      'TFLint',
      'Checkov',
      'tfsec',
      'Infracost',
      'Gitleaks',
      'GitHub Actions',
    ],
  },
  {
    id: 'automation',
    title: 'Release Automation Console',
    description:
      'Internal-style deployment flow connecting issue tracking, build stages, artifacts, image checks, and environment promotion.',
    links: [{ label: 'Case Study', href: '#' }],
    stack: [
      'Jira',
      'Jenkins',
      'Docker',
      'Ansible',
      'OpenShift',
      'Nexus',
      'SonarQube',
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Cloud & Infrastructure',
    items: ['AWS', 'Azure', 'Linux', 'VPC Design', 'CloudFront', 'Route 53'],
  },
  {
    title: 'CI/CD & Automation',
    items: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'Bash', 'PowerShell'],
  },
  {
    title: 'Containers & Orchestration',
    items: ['Docker', 'Kubernetes', 'Helm', 'Argo CD', 'Ingress', 'KEDA'],
  },
  {
    title: 'Infrastructure as Code',
    items: ['Terraform', 'Ansible', 'TFLint', 'Checkov', 'Drift detection'],
  },
  {
    title: 'Security & Observability',
    items: ['CodeQL', 'Trivy', 'Gitleaks', 'Prometheus', 'Grafana', 'CloudWatch'],
  },
  {
    title: 'Languages & Data',
    items: ['TypeScript', 'Python', 'SQL', 'YAML', 'PostgreSQL', 'MongoDB'],
  },
];

export const certifications: Certification[] = [
  {
    name: 'Cloud Certification Placeholder',
    issuer: 'Issuer Name',
    href: '#',
  },
  {
    name: 'Kubernetes Certification Placeholder',
    issuer: 'Issuer Name',
    href: '#',
  },
  {
    name: 'Security Certification Placeholder',
    issuer: 'Issuer Name',
    href: '#',
  },
  {
    name: 'Infrastructure as Code Certification Placeholder',
    issuer: 'Issuer Name',
    href: '#',
  },
];

export const socialLinks = [
  { label: 'GitHub', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Email', href: `mailto:${profile.email}` },
  { label: 'Resume', href: profile.resumeHref },
];
