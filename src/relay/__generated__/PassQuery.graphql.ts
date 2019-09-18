/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { PassQuery_pass$ref } from "./PassQuery_pass.graphql";
export type PassQueryVariables = {
    readonly id: string;
};
export type PassQueryResponse = {
    readonly pass: {
        readonly " $fragmentRefs": PassQuery_pass$ref;
    } | null;
};
export type PassQuery = {
    readonly response: PassQueryResponse;
    readonly variables: PassQueryVariables;
};



/*
query PassQuery(
  $id: ID!
) {
  pass(id: $id) {
    ...PassQuery_pass
    id
  }
}

fragment PassQuery_pass on Pass {
  website
  login
  password
  id
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "PassQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "pass",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Pass",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "PassQuery_pass",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PassQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "pass",
        "storageKey": null,
        "args": (v1/*: any*/),
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
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "PassQuery",
    "id": null,
    "text": "query PassQuery(\n  $id: ID!\n) {\n  pass(id: $id) {\n    ...PassQuery_pass\n    id\n  }\n}\n\nfragment PassQuery_pass on Pass {\n  website\n  login\n  password\n  id\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '4bf5dd9c5503719c04d0c42b29e14151';
export default node;
