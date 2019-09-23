/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
declare const _PassDetail_query$ref: unique symbol;
export type PassDetail_query$ref = typeof _PassDetail_query$ref;
export type PassDetail_query = {
    readonly pass: {
        readonly website: string | null;
        readonly login: string | null;
        readonly password: string | null;
        readonly id: string;
    } | null;
    readonly " $refType": PassDetail_query$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "PassDetail_query",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "id",
      "type": "ID!"
    }
  ],
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
};
(node as any).hash = '87d0f4494ca169f089bd303d50b22cd1';
export default node;
