/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type PassChangePasswordInput = {
    readonly id: string;
    readonly password: string;
    readonly clientMutationId?: string | null;
};
export type EditPassMutationVariables = {
    readonly input: PassChangePasswordInput;
};
export type EditPassMutationResponse = {
    readonly PassChangePassword: {
        readonly error: string | null;
        readonly pass: {
            readonly id: string;
            readonly website: string | null;
            readonly password: string | null;
            readonly user: string | null;
        } | null;
    } | null;
};
export type EditPassMutation = {
    readonly response: EditPassMutationResponse;
    readonly variables: EditPassMutationVariables;
};



/*
mutation EditPassMutation(
  $input: PassChangePasswordInput!
) {
  PassChangePassword(input: $input) {
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
    "type": "PassChangePasswordInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "PassChangePassword",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "PassChangePasswordPayload",
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
    "name": "EditPassMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "EditPassMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "EditPassMutation",
    "id": null,
    "text": "mutation EditPassMutation(\n  $input: PassChangePasswordInput!\n) {\n  PassChangePassword(input: $input) {\n    error\n    pass {\n      id\n      website\n      password\n      user\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'd50bd633fb0baeffd14fd5a10bbdf63b';
export default node;
