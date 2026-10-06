"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readiness = readiness;
async function readiness(project = process.cwd()) {
    console.log(`Checking readiness for project: ${project}`);
}
