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

export type Degree = {
  title: string;
  school: string;
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
  greeting: "Hi! I'm Dylan Boyza",
  title: 'Cloud & DevSecOps Engineer',
  location: 'Pennsylvania',
  credentialLine: 'AWS, Ansible, Terraform, Python, Linux',
  focus: 'Loves technology',
  email: 'dboyza19@gmail.com',
  linkedinHref: 'https://www.linkedin.com/in/dboyza/',
  resumeHref: '/DYLAN_BOYZA_RESUME.pdf',
  avatar: '/profile-portrait.png',
};

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Degrees', href: '#degrees' },
  { label: 'Contact', href: '#contact' },
];

export const aboutParagraphs = [
  'I’m a DevSecOps Engineer focused on cloud security, infrastructure automation, and secure platform engineering. I work with AWS, Ansible, Terraform, Python, Linux/Windows systems, and CI/CD tools to build reliable, repeatable environments and reduce manual work.',
  'I enjoy turning messy or manual processes into scalable systems that are easier for teams to operate. I’m especially interested in cloud platform engineering, backend infrastructure, AI/ML platform support, and automation tools that improve both speed and security.',
];

export const careerDirection: CareerDirection = {
  lookingFor:
    'I am looking for cloud, DevOps, infrastructure, automation, or security-adjacent roles where I can help teams build reliable systems with AWS, Terraform, Linux, and Python.',
  currentlyBuilding: [
    'AWS architecture',
    'Terraform modules',
    'Python automation',
    'Linux operations',
    'Cloud security',
    'Portfolio projects',
  ],
};

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
    items: ['AWS', 'Microsoft Azure', 'Terraform', 'Ansible', 'DNS', 'Load Balancing'],
  },
  {
    title: 'DevOps & Automation',
    icon: 'settings',
    items: ['Jenkins', 'GitLab CI', 'Git', 'GitHub', 'GitLab', 'Jira'],
  },
  {
    title: 'Containers & Platform Engineering',
    icon: 'boxes',
    items: ['Docker', 'Kubernetes', 'Helm', 'Ingress', 'Traefik', 'VMware', 'VirtualBox'],
  },
  {
    title: 'Monitoring, Logging & Security',
    icon: 'shield',
    items: ['ELK Stack', 'CloudWatch', 'CloudTrail', 'HashiCorp Vault'],
  },
  {
    title: 'Databases & Data',
    icon: 'database',
    items: ['PostgreSQL', 'MySQL', 'Oracle SQL', 'DynamoDB', 'SQL'],
  },
  {
    title: 'Systems & Scripting',
    icon: 'server',
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
    name: 'Security+',
    issuer: 'CompTIA',
    href: 'https://cp.certmetrics.com/CompTIA/en/public/verify/credential/22FVXVFQ8E1ECZYJ',
    badge: '/badge-comptia-security-plus.png',
    icon: 'security',
  },
];

export const degrees: Degree[] = [
  {
    title: 'Computer Science - Major',
    school: 'Penn State',
    timeframe: '2019-2023',
    description:
      'A future degree entry will live here with the school name, program, dates, and a short academic summary.',
    focusAreas: ['Coding', 'Data Structures & Algorithms', 'Computer Architecture'],
  },
  {
    title: 'Cybersecurity - Minor',
    school: 'Penn State',
    timeframe: '2019-2023',
    description:
      'Use this block for another completed program, in-progress degree, certificate program, or relevant coursework.',
    focusAreas: ['Networking', 'Cryptography', 'Computer security'],
  },
];

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/dboyza' },
  { label: 'LinkedIn', href: profile.linkedinHref },
  { label: 'Resume', href: profile.resumeHref },
  { label: 'Email', href: `mailto:${profile.email}` },
];
