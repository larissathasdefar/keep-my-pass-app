/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
declare const _PassDetail_query$ref: unique symbol;
export type PassDetail_query$ref = typeof _PassDetail_query$ref;
export type PassDetail_query = {
    readonly pass: {
        readonly id: string;
        readonly website: string | null;
        readonly login: string | null;
        readonly password: string | null;
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
        }
      ]
    }
  ]
};
(node as any).hash = '46d1c162ce5541e5ec46d0efdc093e58';
export default node;
