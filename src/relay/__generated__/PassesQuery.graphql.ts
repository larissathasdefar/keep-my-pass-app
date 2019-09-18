/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { PassesQuery_passes$ref } from "./PassesQuery_passes.graphql";
export type PassesQueryVariables = {};
export type PassesQueryResponse = {
    readonly " $fragmentRefs": PassesQuery_passes$ref;
};
export type PassesQuery = {
    readonly response: PassesQueryResponse;
    readonly variables: PassesQueryVariables;
};



/*
query PassesQuery {
  ...PassesQuery_passes
}

fragment PassesQuery_passes on Query {
  passes {
    edges {
      node {
        id
        website
        login
        password
      }
    }
  }
}
*/

const node: ConcreteRequest = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "PassesQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "PassesQuery_passes",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PassesQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "passes",
        "storageKey": null,
        "args": null,
        "concreteType": "PassConnection",
        "plural": false,
        "selections": [
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
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "PassesQuery",
    "id": null,
    "text": "query PassesQuery {\n  ...PassesQuery_passes\n}\n\nfragment PassesQuery_passes on Query {\n  passes {\n    edges {\n      node {\n        id\n        website\n        login\n        password\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
(node as any).hash = '2692659233cc2a7858d2cd11a124dae8';
export default node;
