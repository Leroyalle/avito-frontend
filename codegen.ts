import { API_URL } from './src/constants/env';
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: API_URL,
  documents: ['./src/graphql/**/*.graphql'],
  ignoreNoDocuments: true,
  generates: {
    './src/graphql/generated/output.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
    },
  },
};

export default config;
