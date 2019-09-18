/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type UserLoginWithEmailInput = {
    readonly email: string;
    readonly password: string;
    readonly clientMutationId?: string | null;
};
export type UserMutationVariables = {
    readonly input: UserLoginWithEmailInput;
};
export type UserMutationResponse = {
    readonly UserLoginWithEmail: {
        readonly token: string | null;
        readonly error: string | null;
        readonly clientMutationId: string | null;
    } | null;
};
export type UserMutation = {
    readonly response: UserMutationResponse;
    readonly variables: UserMutationVariables;
};



/*
mutation UserMutation(
  $input: UserLoginWithEmailInput!
) {
  UserLoginWithEmail(input: $input) {
    token
    error
    clientMutationId
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UserLoginWithEmailInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "UserLoginWithEmail",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UserLoginWithEmailPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "token",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "error",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UserMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "UserMutation",
    "id": null,
    "text": "mutation UserMutation(\n  $input: UserLoginWithEmailInput!\n) {\n  UserLoginWithEmail(input: $input) {\n    token\n    error\n    clientMutationId\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'fea9f8b8edd739b213390b1a59a33afb';
export default node;
