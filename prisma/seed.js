const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding IronCore Fitness DB...');

  await prisma.classSession.deleteMany();
  await prisma.trainer.deleteMany();
  await prisma.membershipPlan.deleteMany();

  await prisma.classSession.createMany({
    data: [
      { time: '06:00 AM', name: 'Dawn Powerlifting & Deadlift Max', coach: 'Jaxson "The Titan" Reed', category: 'Strength' },
      { time: '08:30 AM', name: 'High-Octane CrossFit & Conditioning', coach: 'Sasha "Valkyrie" Petrov', category: 'HIIT' },
      { time: '05:30 PM', name: 'Olympic Weightlifting Technique', coach: 'Jaxson "The Titan" Reed', category: 'Technique' }
    ]
  });

  await prisma.trainer.createMany({
    data: [
      { name: 'Jaxson "The Titan" Reed', specialty: 'Powerlifting & Hypertrophy', pr: '750 lb Deadlift PR', bio: 'Former Arnold Classic champion specializing in elite strength gains.', image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=400&auto=format&fit=crop' },
      { name: 'Sasha "Valkyrie" Petrov', specialty: 'HIIT & Functional Conditioning', pr: 'CrossFit Games Finalist', bio: 'Master of athletic endurance and metabolic conditioning.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400&auto=format&fit=crop' }
    ]
  });

  await prisma.membershipPlan.createMany({
    data: [
      { name: 'Athletic Pro Pass', price: '$149/mo', perks: '24/7 Facility Access, Recovery Sauna, Unlimited Group Classes' },
      { name: 'Elite Titan Coaching Pass', price: '$299/mo', perks: '1-on-1 Personal Trainer, Custom Nutrition Plan, Cryotherapy' }
    ]
  });

  console.log('IronCore Fitness DB seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
