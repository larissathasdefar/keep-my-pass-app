/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
declare const _PassesQuery_passes$ref: unique symbol;
export type PassesQuery_passes$ref = typeof _PassesQuery_passes$ref;
export type PassesQuery_passes = {
    readonly passes: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly website: string | null;
                readonly login: string | null;
                readonly password: string | null;
                readonly _id: string | null;
            };
        } | null>;
    } | null;
    readonly " $refType": PassesQuery_passes$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "PassesQuery_passes",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "email",
      "type": "String!"
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "passes",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "email",
          "variableName": "email"
        }
      ],
      "concreteType": "PassConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "PassEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
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
                  "name": "_id",
                  "args": null,
                  "storageKey": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
(node as any).hash = 'cd4b242a38287e2df87780d1652c7803';
export default node;
