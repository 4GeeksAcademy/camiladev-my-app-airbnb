"use client";

import { divIcon } from "leaflet";
import Link from "next/link";
import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import { useMap } from "react-leaflet/hooks";
import { Property } from "@/app/components/home/types";

interface PropertiesMapProps {
  properties: Property[];
}

const PRICE_PIN_ICON = divIcon({
  className: "price-pin-icon",
  html: '<div class="h-3 w-3 rounded-full border border-white bg-rose-500 shadow"></div>',
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

const URUGUAY_CENTER: [number, number] = [-32.9, -56.1];
const URUGUAY_BOUNDS: [[number, number], [number, number]] = [
  [-35.2, -58.6],
  [-30.0, -53.1],
];

interface FitMapToPropertiesProps {
  properties: Property[];
}

const FitMapToProperties = ({ properties }: FitMapToPropertiesProps) => {
  const map = useMap();

  useEffect(() => {
    if (properties.length === 0) {
      map.setView(URUGUAY_CENTER, 7);
      return;
    }

    const points = properties.map((property) => [property.coordinates.lat, property.coordinates.lng] as [number, number]);

    map.fitBounds(points, {
      padding: [24, 24],
      maxZoom: 12,
    });
  }, [map, properties]);

  return null;
};

const toCurrency = (value: number) => {
  return `$U ${value.toLocaleString("es-UY")}`;
};

export const PropertiesMap = ({ properties }: PropertiesMapProps) => {
  return (
    <MapContainer
      center={URUGUAY_CENTER}
      zoom={7}
      minZoom={6}
      maxZoom={14}
      maxBounds={URUGUAY_BOUNDS}
      maxBoundsViscosity={0.8}
      scrollWheelZoom
      className="h-full w-full"
      attributionControl={false}
    >
      <FitMapToProperties properties={properties} />

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {properties.map((property) => (
        <Marker
          key={property.id}
          position={[property.coordinates.lat, property.coordinates.lng]}
          icon={PRICE_PIN_ICON}
        >
          <Tooltip direction="top" offset={[0, -8]} opacity={0.95} permanent>
            <span className="rounded-full border border-zinc-200 bg-white px-2 py-1 text-[11px] font-semibold text-zinc-900 shadow-sm">
              {property.title}
            </span>
          </Tooltip>

          <Popup>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-zinc-900">{property.title}</p>
              <p className="text-xs text-zinc-600">{property.location}</p>
              <p className="text-xs font-semibold text-zinc-900">{toCurrency(property.pricePerNight)} / noche</p>
              <Link href={`/rooms/${property.id}`} className="text-xs font-semibold text-rose-600 underline">
                Ver detalle
              </Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
