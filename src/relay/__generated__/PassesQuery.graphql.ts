/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type PassesQueryVariables = {};
export type PassesQueryResponse = {
    readonly passes: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly website: string | null;
                readonly login: string | null;
                readonly password: string | null;
            };
        } | null>;
    } | null;
};
export type PassesQuery = {
    readonly response: PassesQueryResponse;
    readonly variables: PassesQueryVariables;
};



/*
query PassesQuery {
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

const node: ConcreteRequest = (function(){
var v0 = [
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "PassesQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "PassesQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "PassesQuery",
    "id": null,
    "text": "query PassesQuery {\n  passes {\n    edges {\n      node {\n        id\n        website\n        login\n        password\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'b748e9e83bd12a1c72ad6f4753a9b862';
export default node;
