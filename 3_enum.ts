enum Membership {
    Simple,
    Standart,
    Premium
}

const membership = Membership.Standart;
const membershipReverse = Membership[2];

console.log(membership); // 1
console.log(membershipReverse); // 'Premium'

enum SocialMedia {
    VK = 'VK',
    Twitter = 'Twitter',
    Instagram = 'Instagram',
    total = 3
}

console.log(SocialMedia);
// {
//   '3': 'total',
//   VK: 'VK',
//   Twitter: 'Twitter',
//   Instagram: 'Instagram',
//   total: 3
// }
