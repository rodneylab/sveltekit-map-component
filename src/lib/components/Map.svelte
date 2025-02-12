<script lang="ts">
	import { setMap } from '$lib/shared/actions/map';

	let {
		id,
		location,
		zoom = 19,
		style = 'width:425px; height:350px',
		markerMarkup = '',
		mapboxAccessToken,
	}: {
		id: string;
		location: {
			latitude: number;
			longitude: number;
		};
		zoom: number;
		style: string;
		markerMarkup: string;
		mapboxAccessToken: string;
	} = $props();

	let { latitude, longitude } = $derived(location);
</script>

<svelte:head>
	<link rel="preconnect" href="https://api.mapbox.com" />
	<link rel="dns-prefetch" href="https://api.mapbox.com" />
</svelte:head>

<figure
	use:setMap={{ latitude, longitude, zoom, mapboxAccessToken, markerMarkup }}
	{id}
	{style}
></figure>
