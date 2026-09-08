import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { homedir } from 'node:os';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const skillName = 'gpt-image-2-style-library';
const source = join(root, 'agents', 'skills', skillName);
const highScoreBrandSource = join(root, 'src', 'assets', 'highscore-beacon-logo-pack');
const targetDefinitions = {
  codex: {
    label: 'Codex',
    root: join(process.env.CODEX_HOME || join(homedir(), '.codex'), 'skills')
  },
  'claude-code': {
    label: 'Claude Code',
    root: join(process.env.CLAUDE_HOME || join(homedir(), '.claude'), 'skills')
  },
  agents: {
    label: 'Shared agent skills',
    root: join(process.env.AGENTS_HOME || join(homedir(), '.agents'), 'skills')
  }
};
const targetAliases = {
  all: Object.keys(targetDefinitions),
  codex: ['codex'],
  claude: ['claude-code'],
  'claude-code': ['claude-code'],
  agents: ['agents'],
  shared: ['agents']
};
const rawTargets = process.argv.slice(2);

if (!existsSync(join(source, 'SKILL.md'))) {
  throw new Error(`Skill source is missing: ${source}`);
}

if (!existsSync(highScoreBrandSource)) {
  throw new Error(`HighScore brand asset source is missing: ${highScoreBrandSource}`);
}

function selectedTargets() {
  const names = rawTargets.length ? rawTargets : ['all'];
  const selected = new Set();
  for (const name of names) {
    const normalized = name.toLowerCase();
    const matches = targetAliases[normalized];
    if (!matches) {
      throw new Error(`Unknown install target: ${name}. Use all, codex, claude-code, or agents.`);
    }
    for (const match of matches) selected.add(match);
  }
  return [...selected].map((name) => targetDefinitions[name]);
}

for (const targetDefinition of selectedTargets()) {
  const target = join(targetDefinition.root, skillName);
  const targetBrandAssets = join(target, 'assets', 'highscore-beacon-logo-pack');

  mkdirSync(targetDefinition.root, { recursive: true });
  rmSync(target, { recursive: true, force: true });
  cpSync(source, target, { recursive: true });

  mkdirSync(join(target, 'assets'), { recursive: true });
  cpSync(highScoreBrandSource, targetBrandAssets, { recursive: true });

  console.log(`Installed ${skillName} for ${targetDefinition.label}: ${target}`);
  console.log(`Installed HighScore brand assets: ${targetBrandAssets}`);
}
