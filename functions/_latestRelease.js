// Helpers for locating latest Windows .exe release in Firebase Storage.

function isExe(name) {
  return typeof name === 'string' && name.toLowerCase().endsWith('.exe');
}

async function findLatestExe(bucket, prefix) {
  const [files] = await bucket.getFiles({ prefix });
  const exeFiles = files.filter((f) => isExe(f.name || f.id));
  if (!exeFiles.length) return null;

  let best = null;
  let bestUpdated = 0;

  for (const f of exeFiles) {
    let meta = f.metadata;
    if (!meta || !meta.updated) {
      try {
        const [m] = await f.getMetadata();
        meta = m;
      } catch (_) {}
    }

    const updated = meta?.updated ? Date.parse(meta.updated) : 0;
    if (!best || updated > bestUpdated) {
      best = { file: f, meta, updatedMs: updated };
      bestUpdated = updated;
    }
  }

  return best;
}

module.exports = { findLatestExe };
