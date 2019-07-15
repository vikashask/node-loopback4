import { Model } from '@loopback/repository';
export declare class Test extends Model {
    name: string;
    contact: any;
}
export interface TestRelations {
}
export declare type TestWithRelations = Test & TestRelations;
