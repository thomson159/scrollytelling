// import { Experiment } from "../../../lib/types";
import { Cyllinder } from "../../components/cyllinder";

const x = [
  {
    "filename": "",
    "title": "Web 2 App",
    "href": "",
    "tags": [],
    "og": null,
    "number": 1,
    "contributors": [
      {
        "id": "MDQ6VXNlcjQzODk0MzQz",
        "url": "https://web2app.app",
        "name": "web2app.app",
        "avatarUrl": "",
        "email": "",
        "company": ""
      }
    ]
  },
  {
    "filename": "",
    "title": "Eko Zakatek",
    "href": "",
    "tags": [],
    "og": null,
    "number": 1,
    "contributors": [
      {
        "id": "MDQ6VXNlcjQzODk0MzQ2",
        "url": "https://eko-zakatek.pl/",
        "name": "eko-zakatek.pl",
        "avatarUrl": "",
        "email": "",
        "company": ""
      }
    ]
  },
  {
    "filename": "",
    "title": "Pan Brzytwa",
    "href": "",
    "tags": [],
    "og": null,
    "number": 1,
    "contributors": [
      {
        "id": "MDQ6VXNlcjQz23k0Mz23",
        "url": "https://pan-brzytwa.pl/",
        "name": "pan-brzytwa.pl",
        "avatarUrl": "",
        "email": "",
        "company": ""
      }
    ]
  },
  {
    "filename": "",
    "title": "Bilet",
    "href": "",
    "tags": [],
    "og": null,
    "number": 1,
    "contributors": [
      {
        "id": "MDQ6VXNlcjQzODk0Mz23",
        "url": "https://bilet-f7cf6.web.app/",
        "name": "bilet-f7cf6.web.app",
        "avatarUrl": "",
        "email": "",
        "company": ""
      }
    ]
  },
];

export const LabCylinder = async () => {
  // const experiments = await fetch(
  //   "https://lab.basement.studio/experiments.json",
  //   { next: { revalidate: 1 } }
  // ).then((res) => res.json());

  // const y = [...x].json()

  // const filteredExperiments = x.filter(
  //   (experiment: any) => experiment.og !== null
  // ) as Experiment[];

  return <Cyllinder experiments={x} />;
};
