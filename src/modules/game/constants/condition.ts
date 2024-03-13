import {ValueObject} from "../../../utils/valueObject";

export class Condition extends ValueObject<"Condition", ConditionType> {
    constructor(readonly value: number) {
        super(value);
    }

    protected isValid(): boolean {
        return false;
    }
}

export const ConditionType = {
    HAPPY: 8,
    GENKI: 7,
    SOKOSOKO: 6,
    BOCHIBOCHI: 5,
    ANMARI: 4,
    YABAME: 3,
    DAMESOU: 2,
    MURI: 1,
    SHINDA: 0,
};

export type ConditionType = (typeof ConditionType)[keyof typeof ConditionType];