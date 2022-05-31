


/**
 * 
 * @param {Array} columns 
 * @param {object} record 
 * @param {object} metaData 
 * @param {object} locationState 
 * @returns 
 */
export function resolveColumns(columns, record = {}, metaData = {}, locationState) {
  const schema = typeof columns === 'function' ? columns(record, metaData) : columns;
  const section = schema && typeof schema === 'object' && schema.section || false;
  const sectionColumns = section && locationState && locationState.schemaId && section.find(_ => _.schemaId === locationState.schemaId) || false;

  return (sectionColumns && sectionColumns.columns) || (schema && schema.columns) || schema;
}


 /**
 * 
 * @param {integer} bytes 
 * @param {integer} decimals 
 * @returns 
 */
  export function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
  
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  }