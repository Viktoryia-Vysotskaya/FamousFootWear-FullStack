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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let OrdersService = class OrdersService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findAll(userId) {
        if (userId) {
            return this.prismaService.order.findMany({
                where: {
                    userId: userId,
                },
                include: {
                    orderItems: true,
                },
            });
        }
        else {
            return this.prismaService.order.findMany({
                include: {
                    orderItems: true,
                },
            });
        }
    }
    async findOne(id) {
        return this.prismaService.order.findUnique({
            where: { id },
            include: {
                orderItems: true,
            },
        });
    }
    async create(data) {
        const orderInput = {
            user: {
                connect: {
                    id: data.userId,
                },
            },
            date: new Date(data.date),
            priceSum: data.priceSum,
            comment: data.comment,
            clientName: data.clientName,
            email: data.email,
            address: data.address,
        };
        return this.prismaService.order.create({ data: orderInput });
    }
    async update(id, data) {
        return this.prismaService.order.update({
            where: { id },
            data,
        });
    }
    async remove(id) {
        await this.prismaService.order.delete({ where: { id } });
        return { message: 'Order and its items successfully deleted.' };
    }
    async createOrderItem(data) {
        const orderItemInput = {
            order: {
                connect: {
                    id: data.orderId,
                },
            },
            product: {
                connect: {
                    id: data.productId,
                },
            },
            amount: data.amount,
            color: data.color,
            size: data.size,
            comment: data.comment,
        };
        return this.prismaService.orderItem.create({ data: orderItemInput });
    }
    async createOrderFromCart(cart) {
        let totalSum = 0;
        for (const item of cart.cartItems) {
            const product = await this.prismaService.product.findUnique({
                where: { id: item.productId },
            });
            if (product) {
                const priceAsFloat = parseFloat(product.price.toString());
                if (!isNaN(priceAsFloat)) {
                    totalSum += item.amount * priceAsFloat;
                }
            }
        }
        const orderInput = {
            user: {
                connect: {
                    id: cart.userId,
                },
            },
            date: new Date(),
            priceSum: totalSum,
            comment: cart.comment,
            clientName: cart.clientName,
            email: cart.email,
            address: cart.address,
        };
        const newOrder = await this.prismaService.order.create({
            data: orderInput,
        });
        for (const cartItem of cart.cartItems) {
            const orderItemInput = {
                order: {
                    connect: {
                        id: newOrder.id,
                    },
                },
                product: {
                    connect: {
                        id: cartItem.productId,
                    },
                },
                amount: cartItem.amount,
                color: cartItem.color,
                size: cartItem.size,
                comment: cartItem.comment,
            };
            await this.prismaService.orderItem.create({ data: orderItemInput });
        }
        return newOrder;
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrdersService);
//# sourceMappingURL=orders.service.js.map