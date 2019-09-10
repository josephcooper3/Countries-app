import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: '#app',
    data: {
      countries: [],
      countrySelected: null
    },
    mounted(){
      this.fetchCountries();
    },
    methods: {
      fetchCountries: function () {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(result => result.json())
        .then(data => this.countries = data)
        .catch(console.error);
      }
    }
  })
})