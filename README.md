# HospitalRun Core

<div align="center">

![Status](https://img.shields.io/badge/Status-developing-brightgree) [![Version](https://img.shields.io/github/v/release/hospitalrun/hospitalrun-core)](https://github.com/HospitalRun/hospitalrun-core/releases) ![GitHub CI](https://github.com/HospitalRun/hospitalrun-core/workflows/GitHub%20CI/badge.svg) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/HospitalRun/hospitalrun-core.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/HospitalRun/hospitalrun-core/context:javascript) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) 
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) ![dependabot](https://api.dependabot.com/badges/status?host=github&repo=HospitalRun/hospitalrun-core) [![Slack](https://hospitalrun-slackin.herokuapp.com/badge.svg)](https://hospitalrun-slackin.herokuapp.com)

</div>

This repository will host all elements shared between Frontend and Backend, including CouchDB design-documents and schemas.

### CouchDB design and example documents
The repository also hosts design documents and examples from version 1.0.0-beta, to be used as a reference for development purpose.

```
src/design-documents
└── v1
    ├── appointments_by_date.ts
    ├── appointments_by_patient.ts
    ├── auth.ts
    ├── closed_incidents_by_user.ts
    ├── custom_form_by_type.ts
    ├── imaging_by_status.ts
    ├── incident_by_date.ts
    ├── incident_by_friendly_id.ts
    ├── inventory_by_friendly_id.ts
    ├── inventory_by_name.ts
    ├── inventory_by_type.ts
    ├── inventory_purchase_by_date_received.ts
    ├── inventory_purchase_by_expiration_date.ts
    ├── inventory_request_by_item.ts
    ├── inventory_request_by_status.ts
    ├── invoice_by_patient.ts
    ├── invoice_by_status.ts
    ├── lab_by_status.ts
    ├── medication_by_status.ts
    ├── open_incidents_by_user.ts
    ├── patient_by_admission.ts
    ├── patient_by_display_id.ts
    ├── patient_by_status.ts
    ├── photo_by_patient.ts
    ├── photo_by_procedure.ts
    ├── photo_by_visit.ts
    ├── pricing_by_category.ts
    ├── procedure_by_date.ts
    ├── report_by_visit.ts
    ├── sequence_by_prefix.ts
    ├── surgical_appointments_by_date.ts
    ├── visit_by_date.ts
    ├── visit_by_discharge_date.ts
    └── visit_by_patient.ts
```
```
src/examples-documents
└── v1
    ├── appointments_by_date.json
    ├── appointments_by_patient.json
    ├── closed_incidents_by_user.json
    ├── custom_form_by_type.json
    ├── imaging_by_status.json
    ├── incident_by_date.json
    ├── incident_by_friendly_id.json
    ├── inventory_by_friendly_id.json
    ├── inventory_by_name.json
    ├── inventory_by_type.json
    ├── inventory_by_type2.json
    ├── inventory_purchase_by_date_received.json
    ├── inventory_purchase_by_expiration_date.json
    ├── inventory_request_by_item.json
    ├── inventory_request_by_status.json
    ├── invoice_by_patient.json
    ├── invoice_by_status.json
    ├── invoice_by_status2.json
    ├── lab_by_status.json
    ├── medication_by_status.json
    ├── open_incidents_by_user.json
    ├── patient_by_admission.json
    ├── patient_by_display_id.json
    ├── patient_by_status.json
    ├── photo_by_patient.json
    ├── photo_by_procedure.json
    ├── photo_by_visit.json
    ├── pricing_by_category.json
    ├── procedure_by_date.json
    ├── report_by_visit.json
    ├── sequence_by_prefix.json
    ├── surgical_appointments_by_date.json
    ├── visit_by_date.json
    ├── visit_by_discharge_date.json
    └── visit_by_patient.json
```

<hr />

# Behind HospitalRun

## Hosted by

[<img src="https://github.com/openjs-foundation/cross-project-council/blob/master/logos/openjsf-color.png?raw=true" width="120px;"/>](https://openjsf.org/projects/#atlarge)

## Sponsors

[![Sponsors](https://opencollective.com/hospitalrun/sponsors.svg?width=890)](https://opencollective.com/hospitalrun/contribute/sponsors-336/checkout)

## Backers

[![Backers](https://opencollective.com/hospitalrun/backers.svg?width=890)](https://opencollective.com/hospitalrun/contribute/backers-335/checkout)

## Lead Maintainer

[<img src="https://avatars2.githubusercontent.com/u/1620916?s=460&v=4" width="100px;"/><br /><sub><b>Maksim Sinik</b></sub>](https://github.com/fox1t)<br />

## [Core Maintainers](https://github.com/orgs/HospitalRun/teams/core-maintainers)

<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/18731800?s=460&v=4" width="100px;"/><br /><sub><b>Jack Meyer</b></sub>](https://github.com/jackcmeyer) | [<img src="https://avatars0.githubusercontent.com/u/6388707?s=460&v=4" width="100px;"/><br /><sub><b>Matteo Vivona</b></sub>](https://github.com/tehKapa) |
|---|---|

## [Core Contributors](https://github.com/orgs/HospitalRun/teams/core-contributor)

<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/25089405?s=460&v=4" width="100px;"/><br /><sub><b>Stefano Casasola</b></sub>](https://github.com/irvelervel) |  [<img src="https://avatars2.githubusercontent.com/u/8810755?s=460&u=495b69e528066f88944d8ce487ce39afe01b9ccb&v=4" width="100px;"/><br /><sub><b>Kumiko Kashii</b></sub>](https://github.com/kumikokashii) | [<img src="https://avatars3.githubusercontent.com/u/603924?s=460&v=4" width="100px;"/><br /><sub><b>Grace Lau</b></sub>](https://github.com/lauggh) | [<img src="https://avatars2.githubusercontent.com/u/26657904?s=460&u=d960bf3d95ae0c9bb858f1f069fff03e51254ddb&v=4" width="100px;"/><br /><sub><b>Stefano Miceli</b></sub>](https://github.com/StefanoMiC) |
|---|---|---|---|

## Medical Supervisor

[<img src="https://avatars2.githubusercontent.com/u/24660474?s=460&v=4" width="100px;"/><br /><sub><b>M.D. Daniele Piccolo</b></sub>](https://it.linkedin.com/in/danielepiccolo)<br />

## Past Contributors

[<img src="https://avatars2.githubusercontent.com/u/8914893?s=460&v=4" width="100px;"/><br /><sub><b>Michael Daly</b></sub>](https://github.com/MichaelDalyDev)<br />

## Contributors

[![Contributors](https://opencollective.com/hospitalrun/contributors.svg?width=960&button=false)](https://github.com/HospitalRun/hospitalrun-frontend/graphs/contributors)

## Founders

<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/609052?s=460&v=4" width="100px;"/><br /><sub><b>John Kleinschmidtr</b></sub>](https://github.com/jkleinsc) | [<img src="https://avatars0.githubusercontent.com/u/929261?s=400&v=4" width="100px;"/><br /><sub><b>Joel Worrall</b></sub>](https://github.com/tangollama)  | [<img src="https://avatars0.githubusercontent.com/u/1319791?s=460&v=4" width="100px;"/><br /><sub><b>Joel Glovier</b></sub>](https://github.com/jglovier)  |
|---|---|---|

# License

Released under the [MIT license](LICENSE).
