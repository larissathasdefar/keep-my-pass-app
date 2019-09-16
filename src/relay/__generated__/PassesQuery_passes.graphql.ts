/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
declare const _PassesQuery_passes$ref: unique symbol;
export type PassesQuery_passes$ref = typeof _PassesQuery_passes$ref;
export type PassesQuery_passes = {
    readonly website: string | null;
    readonly login: string | null;
    readonly password: string | null;
    readonly _id: string | null;
    readonly " $refType": PassesQuery_passes$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "PassesQuery_passes",
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
(node as any).hash = '6122d16ee6111f0e1d5530827323716a';
export default node;
