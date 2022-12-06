<script lang="ts">
	import { setMap } from '$lib/shared/actions/map';

	export let id: string;
	export let location: {
		latitude: number;
		longitude: number;
	};
	export let zoom: number = 19;
	export let style: string = 'width:425px; height:350px';
	export let markerMarkup: string = '';
	export let mapboxAccessToken: string;

	let { latitude, longitude } = location;
	$: ({ latitude, longitude } = location);
</script>

<svelte:head>
	<link rel="preconnect" href="https://api.mapbox.com" />
	<link rel="dns-prefetch" href="https://api.mapbox.com" />
</svelte:head>

<figure use:setMap={{ latitude, longitude, zoom, mapboxAccessToken, markerMarkup }} {id} {style} />
