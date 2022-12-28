async function initAll() {
var dataLinks;
await fetch('mylink.json').then(res => res.json()).then(json => dataLinks = json)
var vm = new Vue({el: '#links', data: {dataLinks}})
}
initAll()
