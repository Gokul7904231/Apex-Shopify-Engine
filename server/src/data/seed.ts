import { PrismaClient } from '@prisma/client';
import { demoProducts, demoCustomers, demoOrders } from './demo-data';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database from demo-data.ts...');
  
  // 1. Seed Products
  console.log('Inserting products...');
  for (const product of demoProducts) {
    await prisma.product.upsert({
      where: { id: product.id },
      update: {},
      create: {
        id: product.id,
        title: product.title,
        description: product.description,
        vendor: product.vendor,
        productType: product.productType,
        price: product.price,
        compareAtPrice: product.compareAtPrice,
        inventory: product.inventory,
        sku: product.sku,
        image: product.image,
        createdAt: new Date(product.createdAt),
        updatedAt: new Date(product.updatedAt),
        tags: {
          create: product.tags.map(tag => ({ tag }))
        }
      }
    });
  }

  // 2. Seed Customers
  console.log('Inserting customers...');
  for (const customer of demoCustomers) {
    await prisma.customer.upsert({
      where: { id: customer.id },
      update: {},
      create: {
        id: customer.id,
        firstName: customer.firstName,
        lastName: customer.lastName,
        email: customer.email,
        ordersCount: customer.ordersCount,
        totalSpent: customer.totalSpent,
      }
    });
  }

  // 3. Seed Orders and LineItems
  console.log('Inserting orders...');
  for (const order of demoOrders) {
    await prisma.order.upsert({
      where: { id: order.id },
      update: {},
      create: {
        id: order.id,
        orderNumber: order.orderNumber,
        customerId: order.customerId,
        totalPrice: order.totalPrice,
        createdAt: new Date(order.createdAt),
        financialStatus: order.financialStatus,
        fulfillmentStatus: order.fulfillmentStatus,
        lineItems: {
          create: order.lineItems.map(item => ({
            productId: item.productId,
            title: item.title,
            quantity: item.quantity,
            price: item.price
          }))
        }
      }
    });
  }

  console.log('Seeding complete! ✨');
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
