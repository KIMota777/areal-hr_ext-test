'use strict';

module.exports = {
    up: function (pgm) {
        pgm.createTable('organizations', {
            id: { type: 'BIGSERIAL', primaryKey: true },
            name: { type: 'VARCHAR(255)', notNull: true },
            comment: { type: 'TEXT' },
            created_at: { type: 'TIMESTAMPTZ', default: pgm.func('NOW()') },
            updated_at: { type: 'TIMESTAMPTZ', default: pgm.func('NOW()') },
            deleted_at: { type: 'TIMESTAMPTZ' }
        });

        pgm.createTable('departments', {
            id: { type: 'BIGSERIAL', primaryKey: true },
            org_id: { type: 'BIGINT', references: 'organizations(id)' },
            parent_id: { type: 'BIGINT', references: 'departments(id)' },
            name: { type: 'VARCHAR(255)', notNull: true },
            comment: { type: 'TEXT' },
            created_at: { type: 'TIMESTAMPTZ', default: pgm.func('NOW()') },
            updated_at: { type: 'TIMESTAMPTZ', default: pgm.func('NOW()') },
            deleted_at: { type: 'TIMESTAMPTZ' }
        });

        pgm.createTable('positions', {
            id: { type: 'BIGSERIAL', primaryKey: true },
            name: { type: 'VARCHAR(255)', notNull: true },
            created_at: { type: 'TIMESTAMPTZ', default: pgm.func('NOW()') },
            updated_at: { type: 'TIMESTAMPTZ', default: pgm.func('NOW()') },
            deleted_at: { type: 'TIMESTAMPTZ' }
        });
    },

    down: function (pgm) {
        pgm.dropTable('positions');
        pgm.dropTable('departments');
        pgm.dropTable('organizations');
    }
};