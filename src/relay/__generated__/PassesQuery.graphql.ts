/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { PassesQuery_passes$ref } from "./PassesQuery_passes.graphql";
export type PassesQueryVariables = {
    readonly email: string;
};
export type PassesQueryResponse = {
    readonly " $fragmentRefs": PassesQuery_passes$ref;
};
export type PassesQuery = {
    readonly response: PassesQueryResponse;
    readonly variables: PassesQueryVariables;
};



/*
query PassesQuery(
  $email: String!
) {
  ...PassesQuery_passes
}

fragment PassesQuery_passes on Query {
  passes(email: $email) {
    edges {
      node {
        website
        login
        password
        _id
        id
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "email",
    "type": "String!",
    "defaultValue": null
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
        "name": "PassesQuery_passes",
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
        "args": [
          {
            "kind": "Variable",
            "name": "email",
            "variableName": "email"
          }
        ],
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
                    "name": "_id",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
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
    "text": "query PassesQuery(\n  $email: String!\n) {\n  ...PassesQuery_passes\n}\n\nfragment PassesQuery_passes on Query {\n  passes(email: $email) {\n    edges {\n      node {\n        website\n        login\n        password\n        _id\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '38af68389b3aca571f0c27d52d5c403f';
export default node;
