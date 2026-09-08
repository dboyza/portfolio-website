import {
  ArrowDownToLine,
  Database,
  FolderKey,
  Network,
  Route,
  Settings2,
  Users,
  type LucideIcon,
} from 'lucide-react';
import {
  siAnsible,
  siApachegroovy,
  siDocker,
  siElasticstack,
  siGit,
  siGithub,
  siGitlab,
  siGnubash,
  siHelm,
  siJenkins,
  siJira,
  siKubernetes,
  siLinux,
  siMysql,
  siPostgresql,
  siPython,
  siRedhat,
  siTerraform,
  siTraefikproxy,
  siVault,
  siVirtualbox,
  siVmware,
  siYaml,
  type SimpleIcon,
} from 'simple-icons';

const brands: Record<string, SimpleIcon> = {
  Terraform: siTerraform,
  Ansible: siAnsible,
  Jenkins: siJenkins,
  'GitLab CI': siGitlab,
  Git: siGit,
  GitHub: siGithub,
  GitLab: siGitlab,
  Jira: siJira,
  Docker: siDocker,
  Kubernetes: siKubernetes,
  Helm: siHelm,
  Traefik: siTraefikproxy,
  VMware: siVmware,
  VirtualBox: siVirtualbox,
  'ELK Stack': siElasticstack,
  'HashiCorp Vault': siVault,
  PostgreSQL: siPostgresql,
  MySQL: siMysql,
  Linux: siLinux,
  RHEL: siRedhat,
  Python: siPython,
  Bash: siGnubash,
  Groovy: siApachegroovy,
  YAML: siYaml,
};

const images: Record<string, string> = {
  AWS: '/skill-logos/amazonwebservices.svg',
  BeyondTrust: '/skill-logos/beyondtrust.svg',
  CloudWatch: '/skill-cloudwatch.svg',
  CloudTrail: '/skill-cloudtrail.svg',
  'Oracle SQL': '/skill-logos/oracle.svg',
  DynamoDB: '/skill-logos/dynamodb.svg',
  PowerShell: '/skill-logos/powershell.svg',
};

const concepts: Record<string, LucideIcon> = {
  DNS: Network,
  'Load Balancing': Route,
  'Active Directory': Users,
  'Group Policy': Settings2,
  SSSD: FolderKey,
  Ingress: ArrowDownToLine,
  SQL: Database,
};

const SkillLogo = ({ skill, size = 17 }: { skill: string; size?: number }) => {
  const brand = brands[skill];
  if (brand) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        className="shrink-0"
        style={{
          fill:
            brand === siGithub
              ? '#d9e2ed'
              : `color-mix(in srgb, #${brand.hex} 65%, #e2e8f0)`,
        }}
        aria-hidden="true"
        focusable="false"
      >
        <path d={brand.path} />
      </svg>
    );
  }

  if (images[skill]) {
    return (
      <img
        src={images[skill]}
        width={size}
        height={size}
        alt=""
        aria-hidden="true"
        className="shrink-0 object-contain"
        style={{
          width: size,
          height: size,
          filter: skill === 'AWS' ? 'brightness(0) invert(1)' : undefined,
        }}
        loading="lazy"
        decoding="async"
      />
    );
  }

  const Icon = concepts[skill] ?? Database;
  return (
    <Icon
      size={size}
      strokeWidth={1.6}
      className="shrink-0 text-sky-200/80"
      aria-hidden="true"
    />
  );
};

export default SkillLogo;
