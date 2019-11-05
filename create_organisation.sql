select create_db_user('internal-demo-1-ihmp', 'password');

INSERT into organisation(name, db_user, uuid, parent_organisation_id)
SELECT 'Internal Demo 1', 'internal-demo-1-ihmp', 'd0b7c3da-434f-4f21-b68e-615985172b48', id
FROM organisation
WHERE name = 'IHMP';