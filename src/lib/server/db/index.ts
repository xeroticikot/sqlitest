import Database from 'better-sqlite3';

const db = new Database("db.sqlite3", { verbose: console.log });

export function getInitialPages(limit = 50) {
    const sql = `
    select * from wagtailcore_page
    `;
    const stmnt = db.prepare(sql);
    const rows = stmnt.all({ limit });
    return rows;
}
