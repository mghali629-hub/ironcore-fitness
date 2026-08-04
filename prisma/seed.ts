import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding IronCore Fitness database...');

  await prisma.trainer.deleteMany();
  await prisma.classSession.deleteMany();
  await prisma.membershipPlan.deleteMany();

  await prisma.trainer.create({
    data: {
      name: 'Marcus Vance',
      specialty: 'Powerlifting, VBT Analysis, Biomechanics',
      pr: '585 lb Deadlift / 495 lb Squat',
      bio: 'USAPL Senior Coach & CSCS Head Strength Specialist with 12+ years preparing national powerlifters.',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80',
    },
  });

  await prisma.classSession.createMany({
    data: [
      {
        name: 'Heavy Barbell Strength & Deadlift Peaking',
        coach: 'Marcus Vance',
        time: 'Mon, Wed, Fri — 06:00 AM',
        category: 'Powerlifting',
      },
      {
        name: 'High-Intensity Athletic Conditioning & Turf Sleds',
        coach: 'Marcus Vance',
        time: 'Tue, Thu — 05:30 PM',
        category: 'Conditioning',
      },
    ],
  });

  await prisma.membershipPlan.createMany({
    data: [
      {
        name: 'Pro Athlete All-Access',
        price: '$189/mo',
        perks: '24/7 Eleiko Access, InBody 770 Scans, Sauna & Recovery Suite, Unlimited Classes',
      },
      {
        name: 'VIP Powerbuilding Tier',
        price: '$279/mo',
        perks: 'Includes 2 Monthly 1-on-1 VBT Video Analysis Sessions + Personal Locker',
      },
    ],
  });

  console.log('IronCore Fitness database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
