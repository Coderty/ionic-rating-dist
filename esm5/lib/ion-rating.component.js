/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
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
            this.rangeStarsNumber = tslib_1.__spread(Array(changes.starsNumber.currentValue + 1).keys()).slice(1);
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
export { IonRatingComponent };
if (false) {
    /** @type {?} */
    IonRatingComponent.prototype.starsNumber;
    /** @type {?} */
    IonRatingComponent.prototype.rate;
    /** @type {?} */
    IonRatingComponent.prototype.readonly;
    /** @type {?} */
    IonRatingComponent.prototype.resettable;
    /** @type {?} */
    IonRatingComponent.prototype.size;
    /** @type {?} */
    IonRatingComponent.prototype.hover;
    /** @type {?} */
    IonRatingComponent.prototype.leave;
    /** @type {?} */
    IonRatingComponent.prototype.rateChange;
    /** @type {?} */
    IonRatingComponent.prototype.hoverRate;
    /** @type {?} */
    IonRatingComponent.prototype.disabled;
    /** @type {?} */
    IonRatingComponent.prototype.rangeStarsNumber;
    /** @type {?} */
    IonRatingComponent.prototype.onChange;
    /** @type {?} */
    IonRatingComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    IonRatingComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLXJhdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb25pYy1yYXRpbmcvIiwic291cmNlcyI6WyJsaWIvaW9uLXJhdGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFVBQVUsRUFDVix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFlBQVksRUFHYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekU7SUE0QkUsNEJBQW9CLEVBQXFCO1FBQXJCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBZGhDLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBS2YsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDbkMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDbkMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFHbEQscUJBQWdCLEdBQWtCLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBSUYsQ0FBQzs7Ozs7SUFFN0Msd0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLElBQUksRUFBRTtZQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QjtRQUNELElBQUcsT0FBTyxDQUFDLFdBQVcsRUFBQztZQUNyQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsaUJBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMxRjtJQUNILENBQUM7Ozs7Ozs7SUFFTyxtQ0FB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RSxFQUFFO3lCQU03QixZQUFZLFNBQUMsTUFBTSxFQUFFLEVBQUU7O0lBdUIxQix5QkFBQztDQUFBLEFBOUZELElBOEZDO1NBakZZLGtCQUFrQjs7O0lBQzdCLHlDQUF5Qjs7SUFDekIsa0NBQXNCOztJQUN0QixzQ0FBMkI7O0lBQzNCLHdDQUE2Qjs7SUFDN0Isa0NBQXVCOztJQUN2QixtQ0FBNkM7O0lBQzdDLG1DQUE2Qzs7SUFDN0Msd0NBQWtEOztJQUNsRCx1Q0FBa0I7O0lBQ2xCLHNDQUFrQjs7SUFDbEIsOENBQThDOztJQUM5QyxzQ0FBOEI7O0lBQzlCLHVDQUFzQjs7Ozs7SUFFVixnQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW9uLXJhdGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9pb24tcmF0aW5nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW9uLXJhdGluZy5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBJb25SYXRpbmdDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSW9uUmF0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHN0YXJzTnVtYmVyID0gNTtcbiAgQElucHV0KCkgcmF0ZTogbnVtYmVyO1xuICBASW5wdXQoKSByZWFkb25seTogYm9vbGVhbjtcbiAgQElucHV0KCkgcmVzZXR0YWJsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgc2l6ZTogYm9vbGVhbjtcbiAgQE91dHB1dCgpIGhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSBsZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgcmF0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBob3ZlclJhdGU6IG51bWJlcjtcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIHJhbmdlU3RhcnNOdW1iZXI6IEFycmF5PG51bWJlcj4gPSBbMSwyLDMsNCw1XTtcbiAgb25DaGFuZ2U6IChfOiBudW1iZXIpID0+IHZvaWQ7XG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMucmF0ZSkge1xuICAgICAgdGhpcy51cGRhdGUodGhpcy5yYXRlKTtcbiAgICB9XG4gICAgaWYoY2hhbmdlcy5zdGFyc051bWJlcil7XG4gICAgICB0aGlzLnJhbmdlU3RhcnNOdW1iZXIgPSBbLi4uQXJyYXkoY2hhbmdlcy5zdGFyc051bWJlci5jdXJyZW50VmFsdWUgKyAxKS5rZXlzKCldLnNsaWNlKDEpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlKHZhbHVlOiBudW1iZXIsIGludGVybmFsQ2hhbmdlID0gdHJ1ZSk6IHZvaWQge1xuICAgIGlmICghKHRoaXMucmVhZG9ubHkgfHwgdGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJhdGUgPT09IHZhbHVlKSkge1xuICAgICAgdGhpcy5yYXRlID0gdmFsdWU7XG4gICAgICB0aGlzLnJhdGVDaGFuZ2UuZW1pdCh0aGlzLnJhdGUpO1xuICAgIH1cbiAgICBpZiAoaW50ZXJuYWxDaGFuZ2UpIHtcbiAgICAgIGlmICh0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5yYXRlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9uVG91Y2hlZCkge1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2socmF0ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGUodGhpcy5yZXNldHRhYmxlICYmIHRoaXMucmF0ZSA9PT0gcmF0ZSA/IDAgOiByYXRlKTtcbiAgfVxuXG4gIG9uTW91c2VFbnRlcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKCEodGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRvbmx5KSkge1xuICAgICAgdGhpcy5ob3ZlclJhdGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5ob3Zlci5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBbXSlcbiAgb25Nb3VzZUxlYXZlKCk6IHZvaWQge1xuICAgIHRoaXMubGVhdmUuZW1pdCh0aGlzLmhvdmVyUmF0ZSk7XG4gICAgdGhpcy5ob3ZlclJhdGUgPSAwO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicsIFtdKVxuICBvbkJsdXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub25Ub3VjaGVkKSB7XG4gICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlKHZhbHVlLCBmYWxzZSk7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlPyhpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cbn1cbiJdfQ==