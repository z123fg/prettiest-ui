var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
var counter = 0;
var Button = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "primary" : _b, _c = _a.variant, variant = _c === void 0 ? "contained" : _c, children = _a.children, _d = _a.size, size = _d === void 0 ? "medium" : _d, _e = _a.disabled, disabled = _e === void 0 ? false : _e, onClick = _a.onClick, className = _a.className, rest = __rest(_a, ["color", "variant", "children", "size", "disabled", "onClick", "className"]);
    var _f = useState(null), cursorPos = _f[0], setCursorPos = _f[1];
    var _g = useState([]), ripples = _g[0], setRipples = _g[1];
    useEffect(function () {
        //create a ripple
        if (cursorPos === null)
            return;
        var newRipple = (_jsx("div", { className: "btn-ripple-".concat(color, "-").concat(variant), style: {
                position: "absolute",
                top: cursorPos.y,
                left: cursorPos.x,
                transform: "translate(-50%, -50%)",
            }, onAnimationEnd: function () {
                setRipples(function (prev) {
                    var nextRipples = __spreadArray([], prev, true);
                    nextRipples.shift();
                    return nextRipples;
                });
            } }, counter++));
        setRipples(function (prev) { return __spreadArray(__spreadArray([], prev, true), [newRipple], false); });
    }, [cursorPos]);
    var handleClick = function (e) {
        var _a = e.nativeEvent, offsetX = _a.offsetX, offsetY = _a.offsetY;
        setCursorPos({ x: offsetX, y: offsetY });
        onClick === null || onClick === void 0 ? void 0 : onClick(e);
    };
    var constructClassName = function () {
        var colorVariantCls = "btn-".concat(color, "-").concat(variant);
        var sizeCls = "btn-".concat(size);
        return ["btn", colorVariantCls, sizeCls].join(" ");
    };
    return (_jsxs("button", __assign({ disabled: disabled, className: constructClassName() + (className ? " " + className : ""), onClick: handleClick }, rest, { children: [children, _jsx("span", { children: ripples })] })));
};
export default Button;
//# sourceMappingURL=Button.js.map