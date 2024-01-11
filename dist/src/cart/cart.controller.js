"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartController = void 0;
const common_1 = require("@nestjs/common");
const cart_service_1 = require("./cart.service");
const jwt_auth_guard_1 = require("../auth/quards/jwt-auth.guard");
const create_cart_item_dto_1 = require("./dtos/create-cart-item.dto");
let CartController = class CartController {
    constructor(cartService) {
        this.cartService = cartService;
    }
    getUserCart(req) {
        const userId = req.user.id;
        return this.cartService.getUserCart(userId);
    }
    async addCartItem(req, createCartItemDto) {
        const userId = req.user.id;
        return this.cartService.addCartItem(userId, createCartItemDto);
    }
    async deleteCartItem(cartItemId) {
        return this.cartService.deleteCartItem(cartItemId);
    }
    async updateCartItem(cartItemId, updateData) {
        return this.cartService.updateCartItem(cartItemId, updateData);
    }
};
exports.CartController = CartController;
__decorate([
    (0, common_1.Get)('/'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "getUserCart", null);
__decorate([
    (0, common_1.Post)('/add'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_cart_item_dto_1.CreateCartItemDto]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "addCartItem", null);
__decorate([
    (0, common_1.Delete)('/:cartItemId'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('cartItemId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "deleteCartItem", null);
__decorate([
    (0, common_1.Put)('/:cartItemId'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('cartItemId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_cart_item_dto_1.CreateCartItemDto]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "updateCartItem", null);
exports.CartController = CartController = __decorate([
    (0, common_1.Controller)('cart'),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], CartController);
//# sourceMappingURL=cart.controller.js.map