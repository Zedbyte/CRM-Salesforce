import { LightningElement, track } from 'lwc';

import getPackagesByCountry from '@salesforce/apex/TravelPackageController.getPackagesByCountry';




export default class TravelPackageSelector extends LightningElement {

    @track selectedCountry = '';

    @track packages = [];

    @track error;




    get countryOptions() {

        return [

            { label: 'India', value: 'India' },

            { label: 'France', value: 'France' },

            { label: 'Philippines', value: 'Philippines' },

            { label: 'USA', value: 'USA' },

            { label: 'Saudi Arabia', value: 'Saudi Arabia' },

            { label: 'Switzerland', value: 'Switzerland' },

            { label: 'Thailand', value: 'Thailand' },

            { label: 'Maldives', value: 'Maldives' },

            { label: 'Dubai', value: 'Dubai' },

            { label: 'Sri Lanka', value: 'Sri Lanka' },

            { label: 'Bangkok', value: 'Bangkok' },

            { label: 'Singapore', value: 'Singapore' },

            { label: 'Myanmar', value: 'Myanmar' },

            { label: 'Nepal', value: 'Nepal' },




        ];

    }




    handleCountryChange(event) {

        this.selectedCountry = event.detail.value;

        this.packages = [];

        this.error = undefined;




        getPackagesByCountry({ country: this.selectedCountry })

            .then(result => {

                this.packages = result;

            })

            .catch(error => {

                this.error = error.body.message;

            });

    }

}
