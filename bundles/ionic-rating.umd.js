(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common'), require('@ionic/angular')) :
    typeof define === 'function' && define.amd ? define('ionic-rating', ['exports', '@angular/core', '@angular/forms', '@angular/common', '@ionic/angular'], factory) :
    (global = global || self, factory(global['ionic-rating'] = {}, global.ng.core, global.ng.forms, global.ng.common, global.angular));
}(this, function (exports, core, forms, common, angular) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IonRatingComponent = /** @class */ (function () {
        function IonRatingComponent(cd) {
            this.cd = cd;
            this.starsNumber = 5;
            this.hover = new core.EventEmitter();
            this.leave = new core.EventEmitter();
            this.rateChange = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'ion-rating',
                        template: "<ion-button *ngFor=\"let i of rangeStarsNumber\" type=\"button\" fill=\"clear\" [disabled]=\"disabled || readonly\"\n  (mouseenter)=\"onMouseEnter(i)\" (click)=\"onClick(i)\" [class.filled]=\"i <= hoverRate || (!hoverRate && i <= rate)\"\n  [class.readonly]=\"readonly\">\n  <ion-icon slot=\"icon-only\" name=\"star\" [size]=\"size\">\n  </ion-icon>\n</ion-button>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
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
            { type: core.ChangeDetectorRef }
        ]; };
        IonRatingComponent.propDecorators = {
            starsNumber: [{ type: core.Input }],
            rate: [{ type: core.Input }],
            readonly: [{ type: core.Input }],
            resettable: [{ type: core.Input }],
            size: [{ type: core.Input }],
            hover: [{ type: core.Output }],
            leave: [{ type: core.Output }],
            rateChange: [{ type: core.Output }],
            onMouseLeave: [{ type: core.HostListener, args: ['mouseleave', [],] }],
            onBlur: [{ type: core.HostListener, args: ['blur', [],] }]
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
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, forms.FormsModule, angular.IonicModule],
                        exports: [IonRatingComponent],
                        declarations: [IonRatingComponent]
                    },] }
        ];
        return IonicRatingModule;
    }());

    exports.IonRatingComponent = IonRatingComponent;
    exports.IonicRatingModule = IonicRatingModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ionic-rating.umd.js.map
