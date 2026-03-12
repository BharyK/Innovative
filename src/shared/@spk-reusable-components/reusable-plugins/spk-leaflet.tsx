import { Fragment } from 'react'
import { MapContainer, TileLayer, CircleMarker, Popup, Polyline, Rectangle, Polygon, Circle, Marker } from "react-leaflet";
import L from 'leaflet'; // Import leaflet
import iconUrl from '../../../assets/images/brand-logos/marker-icon.png'
import { LatLngExpression, PathOptions } from 'leaflet';
import 'leaflet/dist/leaflet.css';


interface SpkLeafletProps {
  position: LatLngExpression;
  Circlepostion?: LatLngExpression;
  Zoom: number;
  scrollWheel?: boolean;
  Customclass?: string;
  Id?: string;
  CirclepathOptions?: PathOptions;
  MarkerpathOptions?: PathOptions;
  PolylinepathOptions?: PathOptions;
  Customicon?: boolean;
  Polyllinepositions?: LatLngExpression[];
  PolygonpathOptions?: PathOptions;
  Polygonposition?: LatLngExpression[];
  ReactanglepathOptions?: PathOptions;
  Bounds?: LatLngExpression[]; // for rectangle
  MUltipolygonposition?: LatLngExpression[][];
  Multipolyineposition?: LatLngExpression[][];
}

const SpkLeaflet: FC<SpkLeafletProps> = ({ position,
  Circlepostion, Zoom, scrollWheel, Customclass, Id, CirclepathOptions, MarkerpathOptions, PolylinepathOptions, Customicon = false,
  Polyllinepositions, PolygonpathOptions, Polygonposition, ReactanglepathOptions, Bounds, MUltipolygonposition, Multipolyineposition
}) => {
  const customIcon = L.icon({
    iconUrl: iconUrl, // Replace with your icon path
  });
  return (
    <Fragment>
      <MapContainer center={position} zoom={Zoom} scrollWheelZoom={scrollWheel} className={Customclass} id={Id} style={{ height: "300px" }}>

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

        />
        {Id === "leaflet3" ?
          <Circle center={Circlepostion} pathOptions={CirclepathOptions} radius={200} />
          : ''
        }
        {(Id === "leaflet3" || Id === "leaflet2") ?
          <CircleMarker
            center={[51.51, -0.12]}
            pathOptions={MarkerpathOptions}
            radius={20}
          >
            <Popup>Popup in CircleMarker</Popup>
          </CircleMarker>
          : ''
        }

        {Id === "leaflet3" ?
          <>
            <Polyline pathOptions={PolylinepathOptions} positions={Polyllinepositions} />
            <Polyline pathOptions={PolylinepathOptions} positions={Multipolyineposition} />
            <Polygon pathOptions={PolygonpathOptions} positions={Polygonposition} />
            <Polygon pathOptions={PolygonpathOptions} positions={MUltipolygonposition} />
            <Rectangle bounds={Bounds} pathOptions={ReactanglepathOptions} />
          </>
          : ''
        }
        {Customicon ?
          <Marker position={position} icon={customIcon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          : ""

        }

      </MapContainer>
    </Fragment>
  )
}

export default SpkLeaflet