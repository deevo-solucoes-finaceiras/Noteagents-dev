"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = status;
async function status(project = process.cwd()) {
    console.log(`Showing status for project: ${project}`);
}
