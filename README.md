# Noteagents Dev

## Developer Platform

**Noteagents Dev** is the developer platform repository, providing the CLI tools, Agent Runtime, and development infrastructure for the NoteAgents ecosystem. This repository is focused on developer experience, agent orchestration, and runtime capabilities.

---

## 📋 Overview

Noteagents Dev contains the essential tools and runtime components for developers working with the NoteAgents platform:

- **CLI** - Command-line interface for agent orchestration
- **Agent Runtime** - Execution environment for AI agents
- **Task Management** - Pipeline and task execution framework
- **Skills** - Reusable agent capabilities
- **MCP Integration** - Model Context Protocol servers
- **LSP** - Language Server Protocol integration

---

## 🏗️ Repository Structure

```
Noteagents-dev/
├── .gitignore          # Git ignore configuration
├── turbo.json          # Turborepo task configuration
├── tsconfig.json       # TypeScript configuration
├── cli/               # Command-line interface
│   ├── main.ts         # CLI entry point
│   └── commands/      # CLI commands
│       ├── agents/    # Agent-related commands
│       ├── audit/     # Audit commands
│       ├── build/     # Build commands
│       ├── doctor/    # Diagnosis commands
│       ├── init/      # Initialization commands
│       ├── readiness/ # Readiness checks
│       └── status/    # Status commands
└── agent-runtime/     # Agent runtime environment
    ├── executor/      # Task executor
    ├── planner/       # Task planner
    ├── .placeholder/  # Placeholder modules
    └── tsconfig.json  # Runtime TypeScript config
```

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/deevo-solucoes-finaceiras/Noteagents-dev.git
cd Noteagents-dev

# Install dependencies
pnpm install

# Build the CLI
pnpm build

# Run the CLI
pnpm exec noteagents --help

# Start the agent runtime
pnpm exec noteagents doctor
```

---

## 🔧 Technology Stack

- **Runtime**: Node.js 20+
- **Package Manager**: pnpm 10+
- **Framework**: Turborepo for task orchestration
- **TypeScript**: Strict configuration
- **CLI**: Custom command-line tool with agent orchestration
- **Runtime**: Agent execution framework with permission checking

---

## 📦 CLI Commands

The CLI includes the following commands:

| Command | Description |
|---------|-------------|
| `noteagents init` | Initialize a new NoteAgents project |
| `noteagents doctor` | Diagnose project and environment health |
| `noteagents status` | Show current project status |
| `noteagents audit` | Run audit on project |
| `noteagents analyze` | Analyze codebase and dependencies |
| `noteagents readiness` | Check project readiness |
| `noteagents agents list` | List available agents |
| `noteagents agents run <nome>` | Run a specific agent |
| `noteagents evidence [--id <id>]` | View evidence records |
| `noteagents test` | Run tests |
| `noteagents build` | Build project |
| `noteagents fix` | Activate error-fixer agent |
| `noteagents git` | Git operations |
| `noteagents github` | GitHub operations |

---

## 🔧 Agent Runtime

The agent runtime features:

- Planner/executor pattern for task decomposition
- Permission checking against forbidden/allowed tasks
- SHA-256 cache with TTL for performance
- File-based locking with stale detection
- Atomic file writes for concurrency safety
- Evidence record recording for audit trail
- Configurable retry and timeout behavior
- Concurrent process safety

---

## 🔗 Ecosystem Integration

This repository integrates with:

- **NoteAgents Core**: https://github.com/deevo-solucoes-finaceiras/NoteAgents
- **NoteAgents Administrativo**: https://github.com/viniamaral2026-cpu/NoteAgents-administrativo
- **NoteAgents Community**: https://github.com/deevo-solucoes-finaceiras/NoteAgents-comunidade

---

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm build` | Build all packages |
| `pnpm dev` | Start development mode |
| `pnpm test` | Run tests |
| `pnpm typecheck` | TypeScript type checking |
| `pnpm doctor` | Run diagnostics |
| `pnpm audit` | Run security audit |

---

## 📜 License

The license definitive must be defined before the first public release.

---

## 🤝 Contributing

Please read the following before contributing:

- `GOVERNANCE.md` - Governance policies
- Project issues and pull requests follow the repository's contribution guidelines

See `ARCHITECTURAL-FREEZE-1.0.md` for architectural decisions that must be followed.