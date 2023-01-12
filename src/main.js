import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import FontAwesomeIcon from "@/utils/fontawesome-icons";

const app = createApp(App)

app.component("FontAwesomeIcon", FontAwesomeIcon)

app.use(router)

let autocomplete;
let address1Field;
let address2Field;
let postalField;

function initAutocomplete() {
  address1Field = document.querySelector("#aadressHotell");
  address2Field = document.querySelector("#address2");
  postalField = document.querySelector("#postcode");
  autocomplete = new google.maps.places.Autocomplete(address1Field, {
    fields: ["address_components", "geometry"],
    types: ["address"],
  });
  autocomplete.addListener("place_changed", fillInAddress);
}

function fillInAddress() {
  const place = autocomplete.getPlace();
  let address1 = "";
  let postcode = "";

  for (const component of place.address_components) {
    const componentType = component.types[0];

    switch (componentType) {
      case "street_number": {
        address1 = `${component.long_name} ${address1}`;
        break;
      }

      case "route": {
        address1 += component.short_name;
        break;
      }

      case "postal_code": {
        postcode = `${component.long_name}${postcode}`;
        break;
      }

      case "postal_code_suffix": {
        postcode = `${postcode}-${component.long_name}`;
        break;
      }
      case "country":
        document.querySelector("#country").value = component.long_name;
        break;
    }
  }

  address1Field.value = address1;
  postalField.value = postcode;
  address2Field.focus();
}

window.initAutocomplete = initAutocomplete;

app.mount('#app')
