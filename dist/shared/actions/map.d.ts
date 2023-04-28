import 'leaflet/dist/leaflet.css';
interface MapNodeProps {
	latitude: number;
	longitude: number;
	zoom: number;
	mapboxAccessToken: string;
	markerMarkup?: string;
}
export declare function setMap(
	mapElement: HTMLElement,
	mapProps: MapNodeProps
): {
	update({ latitude, longitude, zoom }: MapNodeProps): Promise<void>;
};
export {};
