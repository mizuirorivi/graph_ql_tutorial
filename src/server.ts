import * as express from "express";
import * as expressGraphQL from 'express-graphql';
import { env } from './environment/environment';
import { schema } from "./schema/schema";
import { createComplexityLimitRule } from 'graphql-validation-complexity';
import { GraphQLError } from "graphql";

// create express application
const app = express.default();

// create validation rule for graphql
const ComplexityimitRule = createComplexityLimitRule(1000, {
  scalarCost: 10,
  objectCost: 10, // Default is 0.
});

app.use('/graphql', expressGraphQL.graphqlHTTP({
  schema: schema,
  // limit query nest
  validationRules: [ComplexityimitRule],
  graphiql: true
}))
app.listen(env.host.port ? env.host.port : 8888, () => console.log('Server Running'))