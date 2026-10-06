"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listAgents = listAgents;
async function listAgents() {
    // Read agents from the local agents directory
    const fs = require("fs");
    const path = require("path");
    const agentsDir = path.join(__dirname, "..", "..", "agents");
    try {
        const files = fs.readdirSync(agentsDir);
        const jsonFiles = files.filter((f) => f.endsWith(".json"));
        const agents = [];
        for (const file of jsonFiles) {
            const filePath = path.join(agentsDir, file);
            const content = fs.readFileSync(filePath, "utf-8");
            const agent = JSON.parse(content);
            agents.push(agent.identity);
        }
        return agents;
    }
    catch {
        return [];
    }
}
