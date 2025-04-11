import 'dotenv/config';

const apolloConfig = {
  client: {
    service: {
      name: 'my-backend',
      url: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/graphql',
    },
    includes: ['src/**/*.{ts,tsx,graphql}'],
    excludes: ['**/__generated__/**'],
  },
};

export default apolloConfig;
