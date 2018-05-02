"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
exports.logger = new winston_1.Logger({
    transports: [
        new winston_1.transports.Console()
    ]
});
