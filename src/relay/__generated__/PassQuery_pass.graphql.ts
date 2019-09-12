/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
declare const _PassQuery_pass$ref: unique symbol;
export type PassQuery_pass$ref = typeof _PassQuery_pass$ref;
export type PassQuery_pass = {
    readonly website: string | null;
    readonly login: string | null;
    readonly password: string | null;
    readonly _id: string | null;
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
      "name": "_id",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '8a33626aba34429f55e57baed3fd725d';
export default node;
