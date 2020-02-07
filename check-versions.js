
const schemas =  require('./maas-schemas/package.json').version;
const ts =  require('./maas-schemas-ts/package.json').version;

if (schemas !== ts) {
    console.error(`Packages version mismatch (${schemas}!=${ts})`);
    process.exit(1);
} else {
    console.error(`Packages versions match (${schemas})`);
}
