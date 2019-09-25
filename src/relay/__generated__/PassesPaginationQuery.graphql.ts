/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { Passes_query$ref } from "./Passes_query.graphql";
export type PassesPaginationQueryVariables = {
    readonly count: number;
    readonly cursor?: string | null;
};
export type PassesPaginationQueryResponse = {
    readonly " $fragmentRefs": Passes_query$ref;
};
export type PassesPaginationQuery = {
    readonly response: PassesPaginationQueryResponse;
    readonly variables: PassesPaginationQueryVariables;
};



/*
query PassesPaginationQuery(
  $count: Int!
  $cursor: String
) {
  ...Passes_query
}

fragment Passes_query on Query {
  passes(first: $count, after: $cursor) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        id
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
    "name": "first",
    "variableName": "count"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "PassesPaginationQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Passes_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PassesPaginationQuery",
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
        "filters": null
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "PassesPaginationQuery",
    "id": null,
    "text": "query PassesPaginationQuery(\n  $count: Int!\n  $cursor: String\n) {\n  ...Passes_query\n}\n\nfragment Passes_query on Query {\n  passes(first: $count, after: $cursor) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        id\n        website\n        login\n        password\n        __typename\n      }\n      cursor\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '4dc46f7f0eca4a323ec69746e5f78762';
export default node;