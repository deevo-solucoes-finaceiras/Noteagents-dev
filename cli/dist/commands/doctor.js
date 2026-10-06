"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doctor = doctor;
async function doctor(project = process.cwd()) {
    console.log(`Running doctor audit for project: ${project}`);
}
