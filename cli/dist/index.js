"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const init_js_1 = require("./commands/init.js");
const doctor_js_1 = require("./commands/doctor.js");
const status_js_1 = require("./commands/status.js");
const audit_js_1 = require("./commands/audit.js");
const analyze_js_1 = require("./commands/analyze.js");
const readiness_js_1 = require("./commands/readiness.js");
const list_js_1 = require("./commands/agents/list.js");
commander_1.program
    .name("noteagents")
    .description("Autonomous Engineering Agent Runtime")
    .version("1.0.0");
commander_1.program
    .command("init")
    .description("Initialize the runtime and analyze project")
    .option("-p, --project <path>", "Project root path", process.cwd())
    .action(async (options) => {
    await (0, init_js_1.initialize)(options.project);
});
commander_1.program
    .command("doctor")
    .description("Audit the environment")
    .option("-p, --project <path>", "Project root path", process.cwd())
    .action(async (options) => {
    await (0, doctor_js_1.doctor)(options.project);
});
commander_1.program
    .command("status")
    .description("Show project status")
    .option("-p, --project <path>", "Project root path", process.cwd())
    .action(async (options) => {
    await (0, status_js_1.status)(options.project);
});
commander_1.program
    .command("audit")
    .description("Run project audit")
    .option("-p, --project <path>", "Project root path", process.cwd())
    .action(async (options) => {
    await (0, audit_js_1.audit)(options.project);
});
commander_1.program
    .command("analyze")
    .description("Analyze project structure")
    .option("-p, --project <path>", "Project root path", process.cwd())
    .action(async (options) => {
    await (0, analyze_js_1.analyze)(options.project);
});
commander_1.program
    .command("readiness")
    .description("Check project readiness")
    .option("-p, --project <path>", "Project root path", process.cwd())
    .action(async (_options) => {
    await (0, readiness_js_1.readiness)(_options.project);
});
// Agent commands
commander_1.program
    .command("agents")
    .description("Manage agents")
    .option("-p, --project <path>", "Project root path", process.cwd());
commander_1.program
    .command("agents list")
    .description("List registered agents")
    .option("-p, --project <path>", "Project root path", process.cwd())
    .action(async () => {
    const agents = await (0, list_js_1.listAgents)();
    console.log("Registered agents:");
    agents.forEach((name) => console.log(`  - ${name}`));
});
commander_1.program.parseAsync(process.argv);
