// TODO append(node)?
// TODO append(function)?
d3_selectionPrototype.append = function(name) {
  if (!!(name && name.nodeType === 1)) {
    return this.select(function() {
      return this.appendChild(name);
    });
  }

  name = d3.ns.qualify(name);

  function append() {
    return this.appendChild(d3_document.createElementNS(this.namespaceURI, name));
  }

  function appendNS() {
    return this.appendChild(d3_document.createElementNS(name.space, name.local));
  }

  return this.select(name.local ? appendNS : append);
};
