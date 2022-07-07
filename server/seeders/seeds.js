const userSeeds = require('./userSeed.json');
const reviewSeeds = require('./reviewtSeed.json');
const db = require('../config/connection');
const { Review, User } = require('../models');

db.once('open', async () => {
  try {
    await Review.deleteMany({});
    await User.deleteMany({});
    await User.create(userSeeds);

    for (let i = 0; i < reviewSeeds.length; i++) {
      const { _id, reviewUser } = await Review.create(reviewSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: reviewUser },
        {
          $addToSet: {
            reviews: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('finished seeding');
  process.exit(0);
});