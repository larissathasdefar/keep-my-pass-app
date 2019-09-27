/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type PassCreateInput = {
    readonly website: string;
    readonly login: string;
    readonly password: string;
    readonly clientMutationId?: string | null;
};
export type CreatePassMutationVariables = {
    readonly input: PassCreateInput;
};
export type CreatePassMutationResponse = {
    readonly PassCreate: {
        readonly error: string | null;
        readonly pass: {
            readonly id: string;
            readonly website: string | null;
            readonly password: string | null;
            readonly user: string | null;
        } | null;
    } | null;
};
export type CreatePassMutation = {
    readonly response: CreatePassMutationResponse;
    readonly variables: CreatePassMutationVariables;
};



/*
mutation CreatePassMutation(
  $input: PassCreateInput!
) {
  PassCreate(input: $input) {
    error
    pass {
      id
      website
      password
      user
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "PassCreateInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "PassCreate",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "PassCreatePayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "error",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "pass",
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
            "name": "password",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "user",
            "args": null,
            "storageKey": null
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
    "name": "CreatePassMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreatePassMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreatePassMutation",
    "id": null,
    "text": "mutation CreatePassMutation(\n  $input: PassCreateInput!\n) {\n  PassCreate(input: $input) {\n    error\n    pass {\n      id\n      website\n      password\n      user\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'c5120aef1eb4896e10a2894d02d5e8f7';
export default node;
