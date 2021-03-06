import { EventEmitter, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class IonRatingComponent implements ControlValueAccessor, OnChanges {
    private cd;
    starsNumber: number;
    rate: number;
    readonly: boolean;
    resettable: boolean;
    size: boolean;
    hover: EventEmitter<number>;
    leave: EventEmitter<number>;
    rateChange: EventEmitter<number>;
    hoverRate: number;
    disabled: boolean;
    rangeStarsNumber: Array<number>;
    onChange: (_: number) => void;
    onTouched: () => void;
    constructor(cd: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    private update;
    onClick(rate: number): void;
    onMouseEnter(value: number): void;
    onMouseLeave(): void;
    onBlur(): void;
    writeValue(value: any): void;
    registerOnChange(fn: (_: number) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState?(isDisabled: boolean): void;
}
