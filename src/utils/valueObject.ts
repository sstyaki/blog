export abstract class ValueObject<T extends string, K> {
    readonly valueObjectType: T | undefined;
    protected constructor(
        readonly value: K
    ) {
        if (!this.isValid()) {
            throw new Error();
        }
    }

    equals(v: ValueObject<T, K>): boolean {
        return this.value == v.value;
    }

    protected abstract isValid(): boolean;
}