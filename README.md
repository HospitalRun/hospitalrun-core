# HospitalRun Core

<div align="center">

![Status](https://img.shields.io/badge/Status-developing-brightgree) [![Version](https://img.shields.io/github/v/release/hospitalrun/hospitalrun-core)](https://github.com/HospitalRun/hospitalrun-core/releases) ![GitHub CI](https://github.com/HospitalRun/hospitalrun-core/workflows/GitHub%20CI/badge.svg) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/HospitalRun/hospitalrun-core.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/HospitalRun/hospitalrun-core/context:javascript) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) ![Code scanning](https://github.com/HospitalRun/hospitalrun-core/workflows/Code%20scanning/badge.svg)
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

# License

Released under the [MIT license](LICENSE).
