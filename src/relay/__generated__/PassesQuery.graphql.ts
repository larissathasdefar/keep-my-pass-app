/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { PassesQuery_query$ref } from "./PassesQuery_query.graphql";
export type PassesQueryVariables = {
    readonly count: number;
    readonly cursor?: string | null;
    readonly email: string;
};
export type PassesQueryResponse = {
    readonly " $fragmentRefs": PassesQuery_query$ref;
};
export type PassesQuery = {
    readonly response: PassesQueryResponse;
    readonly variables: PassesQueryVariables;
};



/*
query PassesQuery(
  $count: Int!
  $cursor: String
  $email: String!
) {
  ...PassesQuery_query
}

fragment PassesQuery_query on Query {
  passes(first: $count, after: $cursor, email: $email) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        id
        _id
        website
        login
        password
        __typename
      }
      cursor
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "email",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "email",
    "variableName": "email"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "PassesQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "PassesQuery_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PassesQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "passes",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "PassConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfoExtended",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasNextPage",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "endCursor",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "PassEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Pass",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "_id",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "website",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "login",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "password",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cursor",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "passes",
        "args": (v1/*: any*/),
        "handle": "connection",
        "key": "Passes_passes",
        "filters": [
          "email"
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "PassesQuery",
    "id": null,
    "text": "query PassesQuery(\n  $count: Int!\n  $cursor: String\n  $email: String!\n) {\n  ...PassesQuery_query\n}\n\nfragment PassesQuery_query on Query {\n  passes(first: $count, after: $cursor, email: $email) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        id\n        _id\n        website\n        login\n        password\n        __typename\n      }\n      cursor\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '192e18be25b7866d5ac402d29344ffe0';
export default node;
