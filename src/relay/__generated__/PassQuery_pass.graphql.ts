/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
declare const _PassQuery_pass$ref: unique symbol;
export type PassQuery_pass$ref = typeof _PassQuery_pass$ref;
export type PassQuery_pass = {
    readonly website: string | null;
    readonly login: string | null;
    readonly password: string | null;
    readonly id: string;
    readonly " $refType": PassQuery_pass$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "PassQuery_pass",
  "type": "Pass",
  "metadata": null,
  "argumentDefinitions": [],
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
};
(node as any).hash = '986ab0978fc2ad9d6beb59c82e0e05c1';
export default node;
