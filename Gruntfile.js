const IDI = require('openchs-idi');

module.exports = IDI.configure({
    "name": "internal-demo-1",
    "chs-admin": "admin",
    "org-name": "Internal Demo 1",
    "org-admin": "internal-demo-1-admin",
    "secrets": '../secrets.json',
    "files": {
        "adminUsers": {
            "prod": ["users/dev-admin-user.json"]
        },
        "forms": [],
        "formMappings": [],
        "formDeletions": [],
        "formAdditions": [],
        "catchments": [],
        "checklistDetails": [],
        "concepts": [],
        "locations": [],
        "programs": [],
        "encounterTypes": [],
        "operationalEncounterTypes": [],
        "operationalPrograms": [],
        "subjectTypes": [],
        "operationalSubjectTypes": [],
        "users": {
            "dev": []
        },
        "rules": [
        ],
        "organisationSql": [
            /* "create_organisation.sql"*/
        ]
    }
});
