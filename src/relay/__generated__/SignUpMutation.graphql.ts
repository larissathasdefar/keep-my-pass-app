/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type UserRegisterWithEmailInput = {
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly clientMutationId?: string | null;
};
export type SignUpMutationVariables = {
    readonly input: UserRegisterWithEmailInput;
};
export type SignUpMutationResponse = {
    readonly UserRegisterWithEmail: {
        readonly token: string | null;
        readonly error: string | null;
    } | null;
};
export type SignUpMutation = {
    readonly response: SignUpMutationResponse;
    readonly variables: SignUpMutationVariables;
};



/*
mutation SignUpMutation(
  $input: UserRegisterWithEmailInput!
) {
  UserRegisterWithEmail(input: $input) {
    token
    error
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UserRegisterWithEmailInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "UserRegisterWithEmail",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UserRegisterWithEmailPayload",
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
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "SignUpMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SignUpMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "SignUpMutation",
    "id": null,
    "text": "mutation SignUpMutation(\n  $input: UserRegisterWithEmailInput!\n) {\n  UserRegisterWithEmail(input: $input) {\n    token\n    error\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '1f7847e9ec8981e17dffa93b2aa01a63';
export default node;
