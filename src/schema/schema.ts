import {GraphQLSchema} from "graphql";
import {RootMutationType, RootQueryType} from "../type/type";

export const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
})