"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsertestResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const usertest_service_1 = require("./usertest.service");
const create_usertest_input_1 = require("./dto/create-usertest.input");
const update_usertest_input_1 = require("./dto/update-usertest.input");
let UsertestResolver = class UsertestResolver {
    constructor(usertestService) {
        this.usertestService = usertestService;
    }
    create(createUsertestInput) {
        return this.usertestService.create(createUsertestInput);
    }
    findAll() {
        return this.usertestService.findAll();
    }
    findOne(id) {
        return this.usertestService.findOne(id);
    }
    update(updateUsertestInput) {
        return this.usertestService.update(updateUsertestInput.id, updateUsertestInput);
    }
    remove(id) {
        return this.usertestService.remove(id);
    }
};
exports.UsertestResolver = UsertestResolver;
__decorate([
    (0, graphql_1.Mutation)('createUsertest'),
    __param(0, (0, graphql_1.Args)('createUsertestInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_usertest_input_1.CreateUsertestInput]),
    __metadata("design:returntype", void 0)
], UsertestResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Query)('usertest'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsertestResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)('usertest'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsertestResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)('updateUsertest'),
    __param(0, (0, graphql_1.Args)('updateUsertestInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_usertest_input_1.UpdateUsertestInput]),
    __metadata("design:returntype", void 0)
], UsertestResolver.prototype, "update", null);
__decorate([
    (0, graphql_1.Mutation)('removeUsertest'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsertestResolver.prototype, "remove", null);
exports.UsertestResolver = UsertestResolver = __decorate([
    (0, graphql_1.Resolver)('Usertest'),
    __metadata("design:paramtypes", [usertest_service_1.UsertestService])
], UsertestResolver);
//# sourceMappingURL=usertest.resolver.js.map