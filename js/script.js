// Stampiamo a schermo un elenco di dischi con la relativa copertina e info, ottenute con una chiamata AJAX

const createRecord = "https://flynn.boolean.careers/exercises/api/array/music";

var app = new Vue ({
    el: "#app",
    data: {
        listaRecords: []
    },
    mounted: function() {
        axios.get(createRecord)
        .then(risposta => {
            this.listaRecords = risposta.data.response
        })
    }
})