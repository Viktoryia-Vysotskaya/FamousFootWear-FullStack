"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const role_1 = require("./enums/role");
const db = new client_1.PrismaClient();
function getProducts() {
    return [
        {
            id: 'prod1',
            title: "Women's Vl Court 3.0 Sneaker",
            photo: 'Photo1',
            price: 74.99,
            description: "The Women's Adidas VL Court 3.0 Sneaker combines the versatility of an iconic casual look with a modern fresh attitude. With the classic T-Toe design reinterpreted for a fresh appeal, you'll be sure to spark curiosity in this street look.\n\n" +
                '- Synthetic leather & suede upper in a sneaker style with a round toe\n' +
                '- Lace up front\n' +
                '- Made with a series of recycled materials, this upper features at least 50% recycled content\n' +
                '- Iconic Adidas 3 stripe detail\n' +
                '- Padded collar and tongue\n' +
                '- Smooth lining with a padded insole\n' +
                '- Vulcanized midsole\n' +
                '- Durable rubber outsole',
        },
        {
            id: 'prod2',
            title: "Women's Chuck Taylor All Star Madison High Top Sneaker",
            photo: 'Photo2',
            price: 64.99,
            description: 'High, low and everywhere in between; the Women’s Converse Chuck Taylor All Star Madison High Top Sneaker.\n\n' +
                '- Canvas upper in a fashion sneaker style with a round rubber toe\n' +
                '- Lace-up style\n' +
                '- Cushioned collar and tongue\n' +
                '- Classic port holes and logo patch\n' +
                '- Soft canvas lining and cushioned insole\n' +
                '- Wraparound rubber midsole\n' +
                '- Vulcanized rubber outsole',
        },
        {
            id: 'prod3',
            title: "Women's Waffle Debut Retro Sneaker",
            photo: 'Photo3',
            price: 69.98,
            description: "Retro gets modernized with the Women's Nike Waffle Debut Retro Sneaker.\n\n" +
                '- Mesh upper in an athletic sneaker style with a round toe\n' +
                '- Lace-up closure\n' +
                '- Swoosh wraps around your heel to form a pull tab\n' +
                '- Padded collar and exposed foam tongue\n' +
                '- Soft suede overlays nod to vintage materials while textile underlays add durability\n' +
                '- Perforations on heel\n' +
                '- Lifted foam midsoles\n' +
                '- Rubber Waffle outsole adds durable traction and heritage style',
        },
        {
            id: 'prod4',
            title: "Women's Court Legacy Lift Platform Sneaker",
            photo: 'Photo4',
            price: 89.99,
            description: "Elevate your style with the Women's Nike Court Legacy Lift Platform Sneaker.\n\n" +
                '- Synthetic leather upper in a platform sneaker style with a round toe\n' +
                '- Lace-up front\n' +
                '- Subtly layered upper keeps it classic and easy to wear\n' +
                '- Padded collar and tongue\n' +
                '- Smooth lining with a padded insole\n' +
                '- Platform midsole\n' +
                '- Made from at least 20% recycled materials by weight\n' +
                '- Rubber outsole delivers traction and durability',
        },
        {
            id: 'prod5',
            title: "Women's Court Vision Low Sneaker",
            photo: 'Photo5',
            price: 79.99,
            description: "Get old-school style in the Women's Nike Court Vision Low Sneaker.\n\n" +
                '- Leather and synthetic leather upper in a lifestyle sneaker style\n' +
                '- Lace-up closure\n' +
                '- Padded collar and tongue for increased comfort\n' +
                '- For some styles, the leather upper has been replaced with recycled and synthetic materials that keep the soul of the original style\n' +
                '- Soft lining with cushioned insole\n' +
                '- Durable rubber outsole\n' +
                '- Some styles made with at least 20% recycled material by weight',
        },
        {
            id: 'prod6',
            title: "Women's Air Max Bella 5 Training Shoe",
            photo: 'Photo6',
            price: 79.98,
            description: "Combine the bounce and beauty of Max Air cushioning during demanding workouts with the Women's Nike Air Max Bella 5 Training Shoe.\n\n" +
                '- Textured mesh upper in a training shoe style with a round toe\n' +
                '- Lace-up closure\n' +
                '- Pull tabs on the tongue and heel\n' +
                '- Stretchy strap crosses over midfoot\n' +
                '- Sleeve-like construction\n' +
                '- Foam insole\n' +
                '- Raised edging braces your foot during side-to-side movement\n' +
                '- Max Air unit in the heel\n' +
                '- Foam midsole\n' +
                '- Flat rubber outsole with rubber Smart Traction tread',
        },
        {
            id: 'prod7',
            title: "Men's Air Max Alpha Trainer 5 Sneaker",
            photo: 'Photo7',
            price: 94.99,
            description: "Finish your last rep with power and rack it with a roar that stuns the gym floor in the Men's Nike Air Max Alpha Trainer 5 Sneaker.\n\n" +
                '- Mesh upper in a sneaker style with a round toe\n' +
                '- Lace-up front\n' +
                '- Padded collar\n' +
                '- Smooth lining with a padded insole\n' +
                '- Flat wide base gives you enhanced stability\n' +
                '- Foam midsole with a Max Air unit at the heel\n' +
                '- Traction rubber tread outsole',
        },
        {
            id: 'prod8',
            title: "Men's Court Vision Mid Sneaker",
            photo: 'Photo8',
            price: 89.99,
            description: "Get old-school style in the Men's Nike Court Vision Mid Sneaker.\n\n" +
                '- Leather and synthetic leather upper in a high-top lifestyle sneaker style\n' +
                '- Lace-up closure\n' +
                '- Padded collar and tongue for increased comfort\n' +
                '- For some styles, the leather upper has been replaced with recycled and synthetic materials that keep the soul of the original style\n' +
                '- Soft lining with cushioned insole\n' +
                '- Durable rubber outsole\n' +
                '- Some styles made with at least 20% recycled material by weight',
        },
        {
            id: 'prod9',
            title: "Men's Air Max Excee Sneaker",
            photo: 'Photo9',
            price: 94.99,
            description: "A new twist on an iconic look: the Men's Nike Air Max Excee Sneaker.\n\n" +
                '- Mesh, leather, and suede upper in a lifestyle sneaker style\n' +
                '- Slip-on entry with lace-up closure\n' +
                '- Padded collar and tongue for increased comfort\n' +
                '- Synthetic leather overlays\n' +
                '- Soft lining with a cushioned insole\n' +
                '- Foam midsole with a durable rubber outsole\n' +
                '- Visible Air unit',
        },
        {
            id: 'prod10',
            title: "Men's Vision Mid Winter Sneaker",
            photo: 'Photo10',
            price: 99.99,
            description: "Updated traction pattern. Durable materials. Metal hardware. Check, check and check. The Men's Nike Vision Mid Winter Sneaker lets you bring your retro hoops vibes into wintertime.\n\n" +
                '- Synthetic leather upper in a sneaker style with a round toe\n' +
                '- Lace-up front\n' +
                '- Metal lacing hardware\n' +
                '- Nike Swoosh detail on the side\n' +
                '- Heel pull tab\n' +
                '- Plush padded collar and tongue to keep you warm\n' +
                '- Warm plush lining with a padded insole\n' +
                '- Rubber outsole has an updated pattern with larger lugs for better traction and durability',
        },
        {
            id: 'prod11',
            title: "Men's Hypnotic LS Sneaker",
            photo: 'Photo11',
            price: 79.99,
            description: "Sleek, stylish, and comfortable, you can't go wrong with the Men's Puma Hypnotic LS Sneaker.\n\n" +
                '- Suede and mesh upper in a sneaker style with a round toe\n' +
                '- Lace-up front\n' +
                '- Heel pull tab\n' +
                '- Padded collar and tongue\n' +
                '- Synthetic lining with a padded insole\n' +
                '- Softride foam midsole\n' +
                '- Durable rubber outsole',
        },
        {
            id: 'prod12',
            title: "Men's Club 5v5 Low Top Sneaker",
            photo: 'Photo12',
            price: 69.99,
            description: "Stylish and comfortable, the Men's Puma Club 5v5 Low Top Sneaker.\n\n" +
                '- Synthetic leather upper in a sneaker style with a round toe\n' +
                '- Lace-up front\n' +
                '- Side Puma logo detail\n' +
                '- Padded collar and tongue\n' +
                '- Smooth lining with a padded insole\n' +
                '- Durable rubber outsole',
        },
    ];
}
function getUsers() {
    return [
        {
            id: 'user1',
            name: 'Kate Jo',
            email: 'katejo@example.com',
            address: '458 Str.Big, NY',
            role: role_1.Role.USER,
        },
        {
            id: 'user2',
            name: 'John Doe',
            email: 'johndoe@example.com',
            address: '578 Str.Low, London',
            role: role_1.Role.ADMIN,
        },
    ];
}
function getPasswords() {
    return [
        {
            user: { connect: { id: 'user1' } },
            hashedPassword: 'hashed_password_1',
        },
        {
            user: { connect: { id: 'user2' } },
            hashedPassword: 'hashed_password_2',
        },
    ];
}
function getCarts() {
    return [
        {
            id: 'cart1',
            user: { connect: { id: 'user1' } },
        },
        {
            id: 'cart2',
            user: { connect: { id: 'user2' } },
        },
    ];
}
function getCartItems() {
    return [
        {
            cart: { connect: { id: 'cart1' } },
            product: { connect: { id: 'prod1' } },
            amount: 1,
            color: 'Whispering Willow',
            size: '9US',
            comment: 'Please, deliver faster!',
        },
        {
            cart: { connect: { id: 'cart2' } },
            product: { connect: { id: 'prod2' } },
            amount: 2,
            color: 'Velvet Twilight',
            size: '11US',
            comment: 'Gift wrap, please!',
        },
    ];
}
function getOrders() {
    return [
        {
            id: 'order1',
            user: { connect: { id: 'user1' } },
            date: new Date(),
            priceSum: 74.99,
            comment: 'Please, deliver faster!',
            clientName: 'Kate Jo',
            email: 'katejo@example.com',
            address: '458 Str.Big, NY',
        },
    ];
}
function getOrderItems() {
    return [
        {
            order: { connect: { id: 'order1' } },
            product: { connect: { id: 'prod1' } },
            amount: 1,
            color: 'Whispering Willow',
            size: '9US',
            comment: 'Please, deliver faster!',
        },
    ];
}
async function seed() {
    await db.orderItem.deleteMany();
    await db.order.deleteMany();
    await db.cartItem.deleteMany();
    await db.cart.deleteMany();
    await db.user.deleteMany();
    await db.product.deleteMany();
    for (const product of getProducts()) {
        await db.product.create({ data: product });
    }
    for (const user of getUsers()) {
        await db.user.create({ data: user });
    }
    for (const password of getPasswords()) {
        await db.password.create({ data: password });
    }
    for (const cart of getCarts()) {
        await db.cart.create({ data: cart });
    }
    for (const cartItem of getCartItems()) {
        await db.cartItem.create({ data: cartItem });
    }
    for (const order of getOrders()) {
        await db.order.create({ data: order });
    }
    for (const orderItem of getOrderItems()) {
        await db.orderItem.create({ data: orderItem });
    }
}
seed()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await db.$disconnect();
});
//# sourceMappingURL=seed.js.map