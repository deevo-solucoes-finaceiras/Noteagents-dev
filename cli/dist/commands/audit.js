"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.audit = audit;
async function audit(project = process.cwd()) {
    console.log(`Running audit for project: ${project}`);
}
