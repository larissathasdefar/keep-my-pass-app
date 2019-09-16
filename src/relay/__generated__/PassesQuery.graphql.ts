/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { PassesQuery_passes$ref } from "./PassesQuery_passes.graphql";
export type PassesQueryVariables = {
    readonly email: string;
};
export type PassesQueryResponse = {
    readonly passes: ReadonlyArray<{
        readonly " $fragmentRefs": PassesQuery_passes$ref;
    }> | null;
};
export type PassesQuery = {
    readonly response: PassesQueryResponse;
    readonly variables: PassesQueryVariables;
};



/*
query PassesQuery(
  $email: String!
) {
  passes(email: $email) {
    ...PassesQuery_passes
    id
  }
}

fragment PassesQuery_passes on Pass {
  website
  login
  password
  _id
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
],
v1 = [
  {
    "kind": "Variable",
    "name": "email",
    "variableName": "email"
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
        "kind": "LinkedField",
        "alias": null,
        "name": "passes",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Pass",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "PassesQuery_passes",
            "args": null
          }
        ]
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
        "concreteType": "Pass",
        "plural": true,
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
  },
  "params": {
    "operationKind": "query",
    "name": "PassesQuery",
    "id": null,
    "text": "query PassesQuery(\n  $email: String!\n) {\n  passes(email: $email) {\n    ...PassesQuery_passes\n    id\n  }\n}\n\nfragment PassesQuery_passes on Pass {\n  website\n  login\n  password\n  _id\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '887a7af1f2b2e73e33bb2c8ecf657d78';
export default node;
