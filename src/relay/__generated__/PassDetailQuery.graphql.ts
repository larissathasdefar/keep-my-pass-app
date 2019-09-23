/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { PassDetail_query$ref } from "./PassDetail_query.graphql";
export type PassDetailQueryVariables = {
    readonly id: string;
};
export type PassDetailQueryResponse = {
    readonly " $fragmentRefs": PassDetail_query$ref;
};
export type PassDetailQuery = {
    readonly response: PassDetailQueryResponse;
    readonly variables: PassDetailQueryVariables;
};



/*
query PassDetailQuery(
  $id: ID!
) {
  ...PassDetail_query
}

fragment PassDetail_query on Query {
  pass(id: $id) {
    website
    login
    password
    id
  }
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "PassDetailQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "PassDetail_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PassDetailQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "pass",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id"
          }
        ],
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
    "name": "PassDetailQuery",
    "id": null,
    "text": "query PassDetailQuery(\n  $id: ID!\n) {\n  ...PassDetail_query\n}\n\nfragment PassDetail_query on Query {\n  pass(id: $id) {\n    website\n    login\n    password\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '28427db21e904d93e360f00a4b114568';
export default node;
