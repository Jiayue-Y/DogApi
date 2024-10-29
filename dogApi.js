// script.js

async function fetchBreeds() {
    const url = 'https://dogapi.dog/api/v2/breeds';

    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log('Dog Breeds:', json.data.map(breed => breed.attributes.name));
    } catch (error) {
        console.error('Error fetching dog breeds:', error);
    }
}

async function fetchBreedDetails(breedId) {
    const url = `https://dogapi.dog/api/v2/breeds/${breedId}`;

    try {
        const response = await fetch(url);
        const json = await response.json();
        
        console.log('Breed Details:', {
            Name: json.data.attributes.name,
            Description: json.data.attributes.description,
            OtherAttributes: json.data.attributes
        });
    } catch (error) {
        console.error('Error fetching breed details:', error);
    }
}

async function fetchDogFacts() {
    const url = 'https://dogapi.dog/api/v2/facts';

    try {
        const response = await fetch(url);
        const json = await response.json();
        
        console.log('Dog Facts:', json.data.map(fact => fact.attributes.body));
    } catch (error) {
        console.error('Error fetching dog facts:', error);
    }
}

async function fetchDogGroups() {
    const url = 'https://dogapi.dog/api/v2/groups';

    try {
        const response = await fetch(url);
        const json = await response.json();
        
        console.log('Dog Groups:', json.data.map(group => group.attributes.name));
    } catch (error) {
        console.error('Error fetching dog groups:', error);
    }
}

fetchBreeds();
fetchBreedDetails("68f47c5a-5115-47cd-9849-e45d3c378f12");
fetchDogFacts();
fetchDogGroups();

//export { fetchBreeds, fetchBreedDetails, fetchDogFacts, fetchDogGroups };
