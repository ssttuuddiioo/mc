// Temporary test code - DO NOT PUBLISH
map.on('load', () => {
  // your layer code ...

  // Inspector: click on any building and log its data
  map.on('click', (e) => {
    const f = map.queryRenderedFeatures(e.point, { layers: ['building'] })[0];
    if (f) {
      console.log("Feature ID:", f.id);
      console.log("Properties:", f.properties);
      alert(JSON.stringify({ id: f.id, ...f.properties }, null, 2));
    }
  });
});








