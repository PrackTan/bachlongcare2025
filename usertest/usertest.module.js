"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsertestModule = void 0;
const common_1 = require("@nestjs/common");
const usertest_service_1 = require("./usertest.service");
const usertest_resolver_1 = require("./usertest.resolver");
let UsertestModule = class UsertestModule {
};
exports.UsertestModule = UsertestModule;
exports.UsertestModule = UsertestModule = __decorate([
    (0, common_1.Module)({
        providers: [usertest_resolver_1.UsertestResolver, usertest_service_1.UsertestService],
    })
], UsertestModule);
//# sourceMappingURL=usertest.module.js.map