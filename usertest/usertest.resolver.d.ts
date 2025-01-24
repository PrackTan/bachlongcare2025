import { UsertestService } from './usertest.service';
import { CreateUsertestInput } from './dto/create-usertest.input';
import { UpdateUsertestInput } from './dto/update-usertest.input';
export declare class UsertestResolver {
    private readonly usertestService;
    constructor(usertestService: UsertestService);
    create(createUsertestInput: CreateUsertestInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(updateUsertestInput: UpdateUsertestInput): string;
    remove(id: number): string;
}
