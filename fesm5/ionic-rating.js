import { __spread } from 'tslib';
import { Component, ChangeDetectionStrategy, forwardRef, ChangeDetectorRef, Input, Output, HostListener, EventEmitter, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IonRatingComponent = /** @class */ (function () {
    function IonRatingComponent(cd) {
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
    IonRatingComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.rate) {
            this.update(this.rate);
        }
        if (changes.starsNumber) {
            this.rangeStarsNumber = __spread(Array(changes.starsNumber.currentValue + 1).keys()).slice(1);
        }
    };
    /**
     * @private
     * @param {?} value
     * @param {?=} internalChange
     * @return {?}
     */
    IonRatingComponent.prototype.update = /**
     * @private
     * @param {?} value
     * @param {?=} internalChange
     * @return {?}
     */
    function (value, internalChange) {
        if (internalChange === void 0) { internalChange = true; }
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
    };
    /**
     * @param {?} rate
     * @return {?}
     */
    IonRatingComponent.prototype.onClick = /**
     * @param {?} rate
     * @return {?}
     */
    function (rate) {
        this.update(this.resettable && this.rate === rate ? 0 : rate);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    IonRatingComponent.prototype.onMouseEnter = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!(this.disabled || this.readonly)) {
            this.hoverRate = value;
        }
        this.hover.emit(value);
    };
    /**
     * @return {?}
     */
    IonRatingComponent.prototype.onMouseLeave = /**
     * @return {?}
     */
    function () {
        this.leave.emit(this.hoverRate);
        this.hoverRate = 0;
    };
    /**
     * @return {?}
     */
    IonRatingComponent.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        if (this.onTouched) {
            this.onTouched();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    IonRatingComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.update(value, false);
        this.cd.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    IonRatingComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    IonRatingComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    IonRatingComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
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
                            function () { return IonRatingComponent; })),
                            multi: true
                        }
                    ],
                    styles: [":host{--star-color:gray;--star-color-filled:orange;display:inline-block}ion-button{--padding-start:0;--padding-end:0;--color:var(--star-color);--color-focused:var(--star-color);--color-activated:var(--star-color)}ion-button.filled{--color:var(--star-color-filled);--color-focused:var(--star-color-filled);--color-activated:var(--star-color-filled)}ion-button.readonly{--opacity:1}"]
                }] }
    ];
    /** @nocollapse */
    IonRatingComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
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
    return IonRatingComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IonicRatingModule = /** @class */ (function () {
    function IonicRatingModule() {
    }
    IonicRatingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, IonicModule],
                    exports: [IonRatingComponent],
                    declarations: [IonRatingComponent]
                },] }
    ];
    return IonicRatingModule;
}());

export { IonRatingComponent, IonicRatingModule };
//# sourceMappingURL=ionic-rating.js.map
