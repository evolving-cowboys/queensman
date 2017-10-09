export function Descriptor(grpcDescriptor) {
  const package_path = [];
  let processedComponent = grpcDescriptor;

  while (typeof(processedComponent) !== 'function') {
    const keys = Object.keys(processedComponent);

    // TODO: mb this can be improved
    if (keys.length > 1) break;
    const key = keys[0];
    if (typeof(processedComponent[key]) !== 'function') {
      processedComponent = processedComponent[key];
      package_path.push(key);
    }
  }

  this.package = package_path.join('.');
  this.services = {};

  Object.entries(processedComponent).forEach(([name, grpcObject]) => {
    if (grpcObject.name === 'ServiceClient') {
      this.services[name] = grpcObject;
    }
  });
  Object.freeze(this.services);
}
