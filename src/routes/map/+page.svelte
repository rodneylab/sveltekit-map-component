<script lang="ts">
	import Map from '$lib/components/Map.svelte';
	import website from '$lib/config/website';

	const { mapboxAccessToken } = website;

	const locations = [
		{ latitude: 51.50162, longitude: -0.14115 }, // Buckingha Palace
		{ latitude: 51.5007029, longitude: -0.1245872 }, // Big Ben
		{ latitude: 51.50333, longitude: -0.11969 }, // London Eye
		{ latitude: 51.5055166, longitude: -0.0753662 }, // Tower Bridge
		{ latitude: 51.50456, longitude: -0.08658 } // The Shard
	];

	let index = 0;
	$: location = locations[index];
	const locationCount = locations.length;

	function handleNext() {
		index = (index + 1) % locationCount;
	}

	const zoom = 16;
</script>

<svelte:head><title>Map</title></svelte:head>

<main>
	<h1>Map</h1>
	<Map
		id="my-map"
		{location}
		{zoom}
		markerMarkup="<p>We are <strong>here</strong>!</p>"
		{mapboxAccessToken}
	/>
	<button on:click={handleNext}>Fly to next attraction</button>
</main>
