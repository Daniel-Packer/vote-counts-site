import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import { dsv } from "d3-fetch";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";
const csvUrl =
  "https://raw.githubusercontent.com/Daniel-Packer/vote-counts/main/data/county_pivot_odds_c2.csv";

interface MapChartProps {
  setTooltip: React.Dispatch<React.SetStateAction<JSX.Element>>;
  onMouseMove: (e: React.MouseEvent) => void;
  onMouseLeave: (e: React.MouseEvent) => void;
  onMouseEnter: (e: React.MouseEvent) => void;
}

interface countyData {
  county_fips: string;
  pivot_odds: number;
  log_pivot_odds: number;
}

const MapChart = ({ setTooltip, onMouseMove, onMouseEnter, onMouseLeave }: MapChartProps) => {
  const [data, setData] = useState(Array<countyData>);

  useEffect(() => {
    dsv(",", csvUrl, (d) => {
      return {
        county_fips: d.county_fips,
        pivot_odds: Number(d.pivot_odds),
        log_pivot_odds: Number(d.log_pivot_odds),
      };
    }).then((counties) => {
      setData(counties);
    });
  }, []);

  const colorScale = scaleLinear([-14, 0], ["gray", "blue"]);

  return (
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const cur = data.find((s) => s.county_fips === geo.id);
            return (
              <Geography
                className="county"
                key={geo.rsmKey}
                geography={geo}
                fill={cur ? colorScale(cur.log_pivot_odds) : "#EEE"}
                
                onMouseMove={onMouseMove}
                onMouseEnter={(e) => {
                  onMouseEnter(e);
                  const prob = cur
                    ? (100 * cur.pivot_odds).toFixed(6) + "%"
                    : "no election recorded";
                  const tooltipString = (
                    <>
                      {geo.properties.name} <br /> {prob}
                    </>
                  );
                  setTooltip(tooltipString);
                }}
                onMouseLeave={onMouseLeave}
              ></Geography>
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;
