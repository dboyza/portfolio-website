import {
  Boxes,
  Cloud,
  Code2,
  Database,
  Server,
  Settings,
  Shield,
  type LucideIcon,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { coreStack, skillGroups } from '../data/portfolio';

const iconMap: Record<string, LucideIcon> = {
  cloud: Cloud,
  settings: Settings,
  boxes: Boxes,
  database: Database,
  server: Server,
  shield: Shield,
};

const deviconUrl = (name: string, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;

const simpleIconUrl = (slug: string, color?: string) =>
  `https://cdn.simpleicons.org/${slug}${color ? `/${color}` : ''}`;

const skillLogos: Record<string, string> = {
  AWS: '/skill-aws.svg',
  'Microsoft Azure': deviconUrl('azure'),
  'Active Directory': simpleIconUrl('microsoft', '5E5E5E'),
  'Group Policy': simpleIconUrl('windows', '0078D4'),
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
  Linux: simpleIconUrl('linux', 'FCC624'),
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

        <div className="mx-auto mt-7 flex max-w-4xl flex-wrap items-center justify-center gap-2 rounded-lg border border-white/12 bg-white/[0.025] px-4 py-4">
          <span className="mr-1 text-xs font-black uppercase tracking-[0.18em] text-gold-500">
            Core Stack
          </span>
          {coreStack.map((skill) => {
            const logo = skillLogos[skill];

            return (
              <span
                key={`core-${skill}`}
                className="inline-flex min-h-8 items-center gap-2 rounded-full border border-white/16 px-3 text-sm font-bold text-slate-200"
              >
                {logo ? (
                  <img
                    src={logo}
                    alt=""
                    className="h-4 w-4 object-contain"
                    loading="lazy"
                    aria-hidden="true"
                  />
                ) : (
                  <Code2 size={15} className="text-gold-500" aria-hidden="true" />
                )}
                <span className="whitespace-nowrap">{skill}</span>
              </span>
            );
          })}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = iconMap[group.icon] ?? Code2;

            return (
              <section
                key={group.title}
                className="min-w-0 rounded-lg border border-white/12 bg-white/[0.025] p-4"
              >
                <h3 className="mb-4 flex items-center gap-2 text-base font-black leading-tight text-slate-100">
                  <Icon size={20} className="shrink-0 text-gold-500" />
                  <span className="min-w-0 text-balance">{group.title}</span>
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => {
                    const logo = skillLogos[skill];

                    return (
                      <span
                        key={`${group.title}-${skill}`}
                        className="inline-flex min-h-8 max-w-full items-center gap-2 rounded-full border border-white/14 px-3 text-sm font-bold text-slate-300"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center">
                          {logo ? (
                            <img
                              src={logo}
                              alt=""
                              className="h-5 w-5 object-contain"
                              loading="lazy"
                              aria-hidden="true"
                            />
                          ) : (
                            <Icon
                              size={16}
                              className="text-gold-500"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                        <span className="min-w-0 truncate">{skill}</span>
                      </span>
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
