// Stampiamo a schermo un elenco di dischi con la relativa copertina e info, ottenute con una chiamata AJAX
// BONUS: Creare una select con i seguenti generi: pop, rock, metal e jazz. In base a cosa scegliamo nella select vedremo solo i corrispondenti cd

const createRecord = "https://flynn.boolean.careers/exercises/api/array/music";

var app = new Vue ({
    el: "#app",
    data: {
        listaRecords: [],
        genereAttuale: "all"
    },
    mounted: function() {
        axios.get(createRecord)
        .then(risposta => {
            this.listaRecords = risposta.data.response
        })
    },
    methods: {
        selectGenere () {
            axios.get(createRecord)
            .then(risposta => {
                if (this.genereAttuale !== "all") {
                    risposta.data.response = risposta.data.response.filter(element => element.genre.toLowerCase() === this.genereAttuale);
                }
                this.listaRecords = risposta.data.response
            })
        }
    }
})