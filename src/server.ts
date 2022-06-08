import * as express from "express";
import * as expressGraphQL from 'express-graphql';
import { env } from './environment/environment';
import { books,authors} from "./data/data";
import {RootQueryType } from './type/type'
import {schema} from "./schema/schema";

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull
} = require('graphql')
const app = express.default();

app.use('/graphql', expressGraphQL.graphqlHTTP({
  schema: schema,
  graphiql: true
}))
app.listen(env.host.port ? env.host.port : 8888, () => console.log('Server Running'))