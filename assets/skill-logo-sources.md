# Skill logo sources

- Most brand paths come from [Simple Icons](https://github.com/simple-icons/simple-icons), imported by name so unused icons are excluded from the production bundle.
- AWS, DynamoDB, Oracle, and PowerShell SVGs come from [Devicon v2.17.0](https://github.com/devicons/devicon/tree/v2.17.0/icons), with its license retained in `public/skill-logos/LICENSE.devicon`.
- The BeyondTrust symbol retains the geometry and color from its [official logo](https://images.ctfassets.net/ahmdpntb02m6/asset-1507867/de50441d8b0b0dcba7a23dc7f5ab1812/BeyondTrust_LOGO_Hi-Res_color-horiz.svg), provided in the [media kit](https://www.beyondtrust.com/press/media-files).
- CloudWatch and CloudTrail reuse the existing local portfolio assets.
- General concepts use lucide-react icons; adjacent text labels remain the accessible names.

Logo mappings and dark-background rendering live in `src/components/SkillLogo.tsx`.
