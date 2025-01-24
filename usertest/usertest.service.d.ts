import { CreateUsertestInput } from './dto/create-usertest.input';
import { UpdateUsertestInput } from './dto/update-usertest.input';
export declare class UsertestService {
    create(createUsertestInput: CreateUsertestInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUsertestInput: UpdateUsertestInput): string;
    remove(id: number): string;
}
