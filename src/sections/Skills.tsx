import {
  Activity,
  Boxes,
  Braces,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Monitor,
  Network,
  Server,
  Settings,
  Shield,
  type LucideIcon,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { skillGroups } from '../data/portfolio';

const iconMap: Record<string, LucideIcon> = {
  cloud: Cloud,
  settings: Settings,
  boxes: Boxes,
  code: Code2,
  activity: Activity,
  database: Database,
  git: GitBranch,
  server: Server,
  network: Network,
  shield: Shield,
  braces: Braces,
  monitor: Monitor,
};

const deviconUrl = (name: string, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;

const simpleIconUrl = (slug: string, color?: string) =>
  `https://cdn.simpleicons.org/${slug}${color ? `/${color}` : ''}`;

const skillLogos: Record<string, string> = {
  AWS: simpleIconUrl('amazonaws', 'FF9900'),
  'Microsoft Azure': deviconUrl('azure'),
  Jenkins: deviconUrl('jenkins'),
  'GitLab CI': deviconUrl('gitlab'),
  Docker: deviconUrl('docker'),
  Kubernetes: deviconUrl('kubernetes'),
  Helm: deviconUrl('helm'),
  Terraform: deviconUrl('terraform'),
  Ansible: deviconUrl('ansible'),
  'ELK Stack': deviconUrl('elasticsearch'),
  CloudWatch: '/skill-cloudwatch.svg',
  CloudTrail: '/skill-cloudtrail.svg',
  PostgreSQL: deviconUrl('postgresql'),
  MySQL: deviconUrl('mysql'),
  'Oracle SQL': deviconUrl('oracle'),
  DynamoDB: deviconUrl('dynamodb'),
  Git: deviconUrl('git'),
  GitHub: simpleIconUrl('github', 'FFFFFF'),
  GitLab: deviconUrl('gitlab'),
  Jira: deviconUrl('jira'),
  Ubuntu: deviconUrl('ubuntu'),
  CentOS: deviconUrl('centos'),
  RHEL: deviconUrl('redhat'),
  'Amazon Linux': '/skill-amazon-linux.svg',
  Traefik: simpleIconUrl('traefikproxy', '24A1C1'),
  'HashiCorp Vault': simpleIconUrl('vault', 'FFEC6E'),
  Python: deviconUrl('python'),
  Bash: simpleIconUrl('gnubash', '4EAA25'),
  PowerShell: deviconUrl('powershell'),
  Groovy: deviconUrl('groovy'),
  SQL: simpleIconUrl('sqlite', '003B57'),
  YAML: simpleIconUrl('yaml', 'CB171E'),
  VMware: simpleIconUrl('vmware', '607078'),
  VirtualBox: simpleIconUrl('virtualbox', '183A61'),
};

const Skills = () => {
  return (
    <section id="skills" className="section-rule py-10 sm:py-16">
      <div className="wide-shell">
        <SectionHeading title="Skills" />

        <div className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => {
            const Icon = iconMap[group.icon] ?? Code2;

            return (
              <section key={group.title} className="min-w-0">
                <h3 className="mb-4 flex min-h-20 flex-col items-center justify-start gap-2 text-center text-lg font-bold leading-6 text-slate-200">
                  <Icon size={22} className="shrink-0 text-gold-500" />
                  <span className="max-w-64">{group.title}</span>
                </h3>

                <div className="grid gap-2">
                  {group.items.map((skill) => {
                    const logo = skillLogos[skill];

                    return (
                      <div
                        key={`${group.title}-${skill}`}
                        className="flex min-h-9 items-center gap-3 rounded-lg border border-white/17 px-3 text-sm font-bold text-slate-300"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center">
                          {logo ? (
                            <img
                              src={logo}
                              alt={`${skill} logo`}
                              className="h-5 w-5 object-contain"
                              loading="lazy"
                            />
                          ) : (
                            <Icon
                              size={16}
                              className="text-gold-500"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                        <span className="min-w-0 break-words">{skill}</span>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
