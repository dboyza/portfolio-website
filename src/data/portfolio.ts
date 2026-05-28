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
  name: 'Dylan Boyza',
  greeting: "Hi! I'm Dylan Boyza",
  title: 'Cloud & DevOps Engineer',
  location: 'Pennsylvania',
  credentialLine: 'AWS, Ansible, Terraform, Python, Linux',
  focus: 'Loves technology',
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
    id: 'placeholder-cloud-lab',
    title: 'Placeholder Cloud Lab',
    description:
      'A future cloud infrastructure project will live here with a short summary, links, and a clean architecture preview.',
    details: [
      'Replace this card with a real project once the repository, screenshots, and deployment notes are ready.',
    ],
    image: '/project-placeholder-cloud.svg',
    imageAlt: 'Placeholder cloud project diagram',
    links: [
      { label: 'Repo', href: '#' },
      { label: 'Demo', href: '#' },
    ],
    stack: ['AWS', 'Terraform', 'Ansible', 'Linux'],
  },
  {
    id: 'placeholder-automation-tool',
    title: 'Placeholder Automation Tool',
    description:
      'A future automation or scripting project will live here with a practical summary and a focused stack list.',
    details: [
      'Use this slot for a polished project card once the code, README, and screenshots are ready to share.',
    ],
    image: '/project-placeholder-automation.svg',
    imageAlt: 'Placeholder automation project diagram',
    links: [
      { label: 'Repo', href: '#' },
      { label: 'Notes', href: '#' },
    ],
    stack: ['Python', 'Ansible', 'Bash', 'Linux'],
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
