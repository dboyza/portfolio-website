export type Project = {
  id: string;
  title: string;
  labType?: string;
  status?: string;
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
  summary?: string;
  items: string[];
};

export type Certification = {
  name: string;
  issuer: string;
  href: string;
  badge: string;
  icon: string;
};

export type Degree = {
  school: string;
  programs: string[];
  timeframe: string;
  description: string;
  focusAreas: string[];
};

export type CareerDirection = {
  lookingFor: string;
  currentlyBuilding: string[];
};

export const profile = {
  name: 'Dylan Boyza',
  greeting: "Hi, I'm",
  title: 'Software Engineer',
  location: 'Pennsylvania',
  credentialLine: 'MLOps, AWS, Kubernetes, Python, Terraform',
  focus: 'Loves technology',
  email: 'dboyza19@gmail.com',
  linkedinHref: 'https://www.linkedin.com/in/dboyza/',
  resumeHref: '/DYLAN_BOYZA_RESUME.pdf',
  avatar: '/profile-portrait-820.jpg',
};

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const aboutParagraphs = [
  'I am currently a Software Engineer at JPMorganChase working on an internal agentic platform and model serving.',
  'I’m especially interested in platform engineering, cloud infrastructure, backend systems, and automation tools that improve speed, reliability, and security.',
];

export const careerDirection: CareerDirection = {
  lookingFor:
    'I’m building MLOps experience at JPMorganChase while growing deeper expertise in platform engineering, cloud infrastructure, and production automation.',
  currentlyBuilding: [
    'MLOps',
    'Platform engineering',
    'Kubernetes',
    'Python automation',
    'Cloud infrastructure',
    'Observability',
  ],
};

export const projects: Project[] = [
  {
    id: 'pytuitor',
    title: 'Pytuitor',
    labType: 'Terminal Learning Tool',
    status: 'Release candidate',
    description:
      'An offline Python tutor for learning by building and repairing programs in your terminal.',
    details: [
      'It includes 75 lessons, 12 projects, and 21 chapters with local progress, interactive checks, hints, and reference solutions.',
    ],
    image: '/project-pytuitor.svg',
    imageAlt: 'Pytuitor logo showing an open book with a terminal prompt',
    links: [
      { label: 'Repo', href: 'https://github.com/dboyza/pytuitor' },
    ],
    stack: ['Python', 'Textual', 'uv', 'pytest'],
  },
  {
    id: 'gptskins',
    title: 'GPTskins',
    labType: 'Browser Extension',
    description:
      'A browser extension that gives ChatGPT editor-inspired themes and bundled coding fonts.',
    details: [
      'Choose from 34 palettes and 7 font options, with preferences synced in browser storage and no backend or external runtime dependencies.',
    ],
    image: '/project-gptskins.svg',
    imageAlt: 'GPTskins logo',
    links: [
      { label: 'Repo', href: 'https://github.com/dboyza/GPTskins' },
    ],
    stack: ['JavaScript', 'Manifest V3', 'Chrome Extensions', 'Playwright'],
  },
  {
    id: 'xpubshield',
    title: 'XpubShield',
    labType: 'Desktop Security Tool',
    status: 'v0.1.3',
    description:
      'A watch-only desktop app for reviewing Bitcoin wallets, coins, and transactions before signing.',
    details: [
      'Review coins, fees, change, and partially signed Bitcoin transactions on macOS and Windows without storing private keys or signing transactions.',
    ],
    image: '/project-xpubshield.png',
    imageAlt: 'XpubShield logo showing an orange X inside a teal shield',
    links: [
      { label: 'Repo', href: 'https://github.com/dboyza/XpubShield' },
    ],
    stack: ['Rust', 'Tauri', 'React', 'TypeScript', 'SQLite'],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Cloud & Infrastructure',
    icon: 'cloud',
    summary: 'Designing repeatable cloud and network foundations for secure workloads.',
    items: ['AWS', 'Terraform', 'Ansible'],
  },
  {
    title: 'System Administration',
    icon: 'network',
    summary: 'Managing identity, access, naming, and Linux integration for enterprise environments.',
    items: ['DNS', 'Load Balancing', 'Active Directory', 'Group Policy', 'SSSD', 'BeyondTrust'],
  },
  {
    title: 'DevOps & Automation',
    icon: 'settings',
    summary: 'Connecting code, pipelines, tickets, and releases into cleaner delivery loops.',
    items: ['Jenkins', 'GitLab CI', 'Git', 'GitHub', 'GitLab', 'Jira'],
  },
  {
    title: 'Containers & Platform Engineering',
    icon: 'boxes',
    summary: 'Running services on container platforms with practical routing and virtualization support.',
    items: ['Docker', 'Kubernetes', 'Helm', 'Ingress', 'Traefik', 'VMware', 'VirtualBox'],
  },
  {
    title: 'Monitoring, Logging & Security',
    icon: 'shield',
    summary: 'Improving visibility, auditability, and secret handling across environments.',
    items: ['ELK Stack', 'CloudWatch', 'CloudTrail', 'HashiCorp Vault'],
  },
  {
    title: 'Databases & Data',
    icon: 'database',
    summary: 'Working with relational and cloud-native data stores that support backend systems.',
    items: ['PostgreSQL', 'MySQL', 'Oracle SQL', 'DynamoDB', 'SQL'],
  },
  {
    title: 'Systems & Scripting',
    icon: 'server',
    summary: 'Automating Linux and Windows operations with scripts, shells, and practical systems knowledge.',
    items: [
      'Linux',
      'RHEL',
      'Python',
      'Bash',
      'PowerShell',
      'Groovy',
      'YAML',
    ],
  },
];

export const coreStack = ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins', 'Linux', 'Python'];

export const certifications: Certification[] = [
  {
    name: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    href: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/aff76c7b9f634d7ca27f8aa5b4c3a868',
    badge: '/badge-aws-solutions-architect-associate.png',
    icon: 'aws',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    href: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/77c63a01f5b9423da3607bd5a0db8270',
    badge: '/badge-aws-cloud-practitioner.png',
    icon: 'aws',
  },
  {
    name: 'HashiCorp Certified: Terraform Associate (004)',
    issuer: 'HashiCorp',
    href: 'https://www.credly.com/badges/f740cfc2-7246-4752-9875-07c8fb841e05/public_url',
    badge: '/badge-terraform-associate-004.png',
    icon: 'terraform',
  },
  {
    name: 'Security+',
    issuer: 'CompTIA',
    href: 'https://cp.certmetrics.com/CompTIA/en/public/verify/credential/22FVXVFQ8E1ECZYJ',
    badge: '/badge-comptia-security-plus.png',
    icon: 'security',
  },
];

export const degrees: Degree[] = [
  {
    school: 'Penn State',
    programs: ['B.S. Computer Science, Major', 'Cybersecurity, Minor'],
    timeframe: '2019-2023',
    description: 'Academic foundation in software engineering, systems, networking, and security.',
    focusAreas: [
      'Software Development',
      'Data Structures & Algorithms',
      'Computer Architecture',
      'Networking',
      'Cryptography',
      'Computer Security',
    ],
  },
];

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/dboyza' },
  { label: 'LinkedIn', href: profile.linkedinHref },
  { label: 'Resume', href: profile.resumeHref },
  { label: 'Email', href: `mailto:${profile.email}` },
];
