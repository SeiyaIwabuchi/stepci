"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultText = void 0;
const chalk_1 = __importDefault(require("chalk"));
exports.defaultText = `${chalk_1.default.blue('Welcome!')}
Step CI is an open-source framework, which helps you automate API testing and monitoring

- ${chalk_1.default.bold('Language-agnostic')}. Configure easily using YAML, JSON or JavaScript
- ${chalk_1.default.bold('REST, GraphQL, gRPC, tRPC, SOAP')}. Test different API types in one workflow
- ${chalk_1.default.bold('Self-hosted')}. Test services on your network, locally and CI/CD
- ${chalk_1.default.bold('Integrated')}. Play nicely with others

${chalk_1.default.cyanBright('Give us your feedback on')} ${chalk_1.default.cyanBright.underline('https://step.ci/feedback')}`;
