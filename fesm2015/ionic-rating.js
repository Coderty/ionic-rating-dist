import { EventEmitter, Component, ChangeDetectionStrategy, forwardRef, ChangeDetectorRef, Input, Output, HostListener, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonRatingComponent {
    /**
     * @param {?} cd
     */
    constructor(cd) {
        this.cd = cd;
        this.starsNumber = 5;
        this.hover = new EventEmitter();
        this.leave = new EventEmitter();
        this.rateChange = new EventEmitter();
        this.rangeStarsNumber = [1, 2, 3, 4, 5];
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.rate) {
            this.update(this.rate);
        }
        if (changes.starsNumber) {
            this.rangeStarsNumber = [...Array(changes.starsNumber.currentValue + 1).keys()].slice(1);
        }
    }
    /**
     * @private
     * @param {?} value
     * @param {?=} internalChange
     * @return {?}
     */
    update(value, internalChange = true) {
        if (!(this.readonly || this.disabled || this.rate === value)) {
            this.rate = value;
            this.rateChange.emit(this.rate);
        }
        if (internalChange) {
            if (this.onChange) {
                this.onChange(this.rate);
            }
            if (this.onTouched) {
                this.onTouched();
            }
        }
    }
    /**
     * @param {?} rate
     * @return {?}
     */
    onClick(rate) {
        this.update(this.resettable && this.rate === rate ? 0 : rate);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onMouseEnter(value) {
        if (!(this.disabled || this.readonly)) {
            this.hoverRate = value;
        }
        this.hover.emit(value);
    }
    /**
     * @return {?}
     */
    onMouseLeave() {
        this.leave.emit(this.hoverRate);
        this.hoverRate = 0;
    }
    /**
     * @return {?}
     */
    onBlur() {
        if (this.onTouched) {
            this.onTouched();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.update(value, false);
        this.cd.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
IonRatingComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-rating',
                template: "<ion-button *ngFor=\"let i of rangeStarsNumber\" type=\"button\" fill=\"clear\" [disabled]=\"disabled || readonly\"\n  (mouseenter)=\"onMouseEnter(i)\" (click)=\"onClick(i)\" [class.filled]=\"i <= hoverRate || (!hoverRate && i <= rate)\"\n  [class.readonly]=\"readonly\">\n  <ion-icon slot=\"icon-only\" name=\"star\" [size]=\"size\">\n  </ion-icon>\n</ion-button>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => IonRatingComponent)),
                        multi: true
                    }
                ],
                styles: [":host{--star-color:gray;--star-color-filled:orange;display:inline-block}ion-button{--padding-start:0;--padding-end:0;--color:var(--star-color);--color-focused:var(--star-color);--color-activated:var(--star-color)}ion-button.filled{--color:var(--star-color-filled);--color-focused:var(--star-color-filled);--color-activated:var(--star-color-filled)}ion-button.readonly{--opacity:1}"]
            }] }
];
/** @nocollapse */
IonRatingComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
IonRatingComponent.propDecorators = {
    starsNumber: [{ type: Input }],
    rate: [{ type: Input }],
    readonly: [{ type: Input }],
    resettable: [{ type: Input }],
    size: [{ type: Input }],
    hover: [{ type: Output }],
    leave: [{ type: Output }],
    rateChange: [{ type: Output }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave', [],] }],
    onBlur: [{ type: HostListener, args: ['blur', [],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonicRatingModule {
}
IonicRatingModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, IonicModule],
                exports: [IonRatingComponent],
                declarations: [IonRatingComponent]
            },] }
];

export { IonRatingComponent, IonicRatingModule };
//# sourceMappingURL=ionic-rating.js.map
