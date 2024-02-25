import { createTemplate } from '../../mod.ts';

export const fixtureTemplate = createTemplate<
  'feature.name',
  { feature: { name: string } }
>`export { ${'feature.name'} } from './${(
  { feature },
) => feature.name.toLowerCase()}.ts;'`;

//  TODO(@ebntly): Add more tests.
export const fixtures = [
  {
    data: {
      feature: {
        name: 'ExampleException',
      },
    },
    expected: `export { ExampleException } from './exampleexception.ts;'`,
  },
];
