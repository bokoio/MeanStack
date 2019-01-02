var LeaveOrderGard = /** @class */ (function () {
    function LeaveOrderGard() {
    }
    LeaveOrderGard.prototype.canDeactivate = function (orderComponent, activateRoute, routerState) {
        if (!orderComponent.isOrderCompleted()) {
            return window.confirm('Deseja deistir da compra?');
        }
        else {
            return true;
        }
    };
    return LeaveOrderGard;
}());
export { LeaveOrderGard };
//# sourceMappingURL=leave-order.gard.js.map