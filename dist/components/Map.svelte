<script>
	import { setMap } from '../shared/actions/map';
	export let id;
	export let location;
	export let zoom = 19;
	export let style = 'width:425px; height:350px';
	export let markerMarkup = '';
	export let mapboxAccessToken;
	let { latitude, longitude } = location;
	$: ({ latitude, longitude } = location);
</script>

<svelte:head>
	<link rel="preconnect" href="https://api.mapbox.com" />
	<link rel="dns-prefetch" href="https://api.mapbox.com" />
</svelte:head>

<figure use:setMap={{ latitude, longitude, zoom, mapboxAccessToken, markerMarkup }} {id} {style} />
