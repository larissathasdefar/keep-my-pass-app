/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type UserLoginWithEmailInput = {
    readonly email: string;
    readonly password: string;
    readonly clientMutationId?: string | null;
};
export type LoginMutationVariables = {
    readonly input: UserLoginWithEmailInput;
};
export type LoginMutationResponse = {
    readonly UserLoginWithEmail: {
        readonly token: string | null;
        readonly error: string | null;
        readonly clientMutationId: string | null;
    } | null;
};
export type LoginMutation = {
    readonly response: LoginMutationResponse;
    readonly variables: LoginMutationVariables;
};



/*
mutation LoginMutation(
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
    "name": "LoginMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "LoginMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "LoginMutation",
    "id": null,
    "text": "mutation LoginMutation(\n  $input: UserLoginWithEmailInput!\n) {\n  UserLoginWithEmail(input: $input) {\n    token\n    error\n    clientMutationId\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '1493359fc280714764e719be7eba4905';
export default node;
