// @flow

import React, { Component } from "react"

import { Map, SVGOverlay, TileLayer } from "./components"

const center = [7.894532454655228, 98.35295134899502]
const rectangle = [
      [7.896050847504184, 98.35042685119629],
      [7.895240847504183, 98.35213685119629]
]

export default class SVGOverlayExample extends Component<{}> {
      state = {
            screen: [
                  [
                        51.2,
                        49,
                        46.6,
                        44.1,
                        41.6,
                        39.5,
                        38.2,
                        37,
                        35.7,
                        34.8,
                        33.5,
                        32.6,
                        31.9,
                        31.2,
                        30.4,
                        30.1,
                        29.7,
                        29.3,
                        29.2,
                        29.1
                  ],
                  [
                        51.8,
                        49.4,
                        47.1,
                        44.7,
                        42.4,
                        40.1,
                        38.8,
                        37.8,
                        36.7,
                        35.8,
                        34.9,
                        33.6,
                        32.8,
                        31.9,
                        31.1,
                        30.5,
                        30.1,
                        29.5,
                        29.3,
                        29.2
                  ],
                  [
                        51.3,
                        48.8,
                        46.3,
                        44.1,
                        42,
                        39.8,
                        38.8,
                        37.9,
                        37.1,
                        36.3,
                        35.5,
                        34.3,
                        33.3,
                        32.3,
                        31.3,
                        30.7,
                        30.4,
                        30,
                        29.7,
                        29.5
                  ],
                  [
                        50.7,
                        48.1,
                        45.5,
                        43.5,
                        41.5,
                        39.6,
                        38.7,
                        38.1,
                        37.5,
                        36.8,
                        36.8,
                        36,
                        34.9,
                        33.8,
                        32.7,
                        31.6,
                        30.9,
                        30.6,
                        30.6,
                        30.3
                  ],
                  [
                        50.5,
                        47.8,
                        45.1,
                        43.2,
                        41.4,
                        39.5,
                        38.8,
                        38.3,
                        37.8,
                        37.3,
                        36.7,
                        35.8,
                        34.9,
                        34,
                        33,
                        32.3,
                        31.7,
                        31.2,
                        30.8,
                        30.4
                  ],
                  [
                        50.2,
                        47.4,
                        44.8,
                        43,
                        41.2,
                        39.4,
                        38.9,
                        38.9,
                        38.6,
                        38.4,
                        38.1,
                        37.8,
                        37.4,
                        36.7,
                        36,
                        35.3,
                        34.5,
                        33.7,
                        32.8,
                        32.1
                  ],
                  [
                        50.1,
                        47.3,
                        44.6,
                        42.9,
                        41.1,
                        39.3,
                        38.9,
                        38.8,
                        38.7,
                        38.6,
                        38.5,
                        38.3,
                        37.9,
                        37.4,
                        36.8,
                        36,
                        34.9,
                        33.9,
                        33,
                        32.5
                  ],
                  [
                        51.1,
                        48.3,
                        45.6,
                        43.6,
                        41.6,
                        39.6,
                        39.2,
                        39,
                        39.8,
                        38.7,
                        38.7,
                        38.7,
                        38.4,
                        38,
                        37.6,
                        36.9,
                        34.9,
                        34.1,
                        33.6,
                        33.1
                  ],
                  [
                        52.1,
                        49.3,
                        46.3,
                        44.3,
                        42.1,
                        40,
                        39.4,
                        39.1,
                        38.9,
                        38.8,
                        39,
                        39.2,
                        39,
                        38.7,
                        38.4,
                        37.8,
                        36.9,
                        36.9,
                        36,
                        35.2
                  ],
                  [
                        53.1,
                        50.3,
                        47.4,
                        45.1,
                        42.7,
                        40.3,
                        39.6,
                        39.2,
                        38.9,
                        38.9,
                        39.2,
                        39.6,
                        39.5,
                        38.6,
                        37.9,
                        37.1,
                        36.4,
                        35.9,
                        35.5,
                        34.5
                  ]
            ]
      }

      handleClick = e => {
            console.log(e.latlng)
      }

      render() {
            return (
                  <Map center={center} zoom={20} onClick={this.handleClick}>
                        <TileLayer
                              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <SVGOverlay bounds={rectangle}>
                              <rect
                                    x="0"
                                    y="0"
                                    width="100%"
                                    height="100%"
                                    fill="white"
                              />
                              {this.state.screen.map((arr, indexx) => {
                                    return (
                                          <>
                                                {arr.map((subarr, indexy) => {
                                                      return (
                                                            <text
                                                                  fontSize="7"
                                                                  x={`${indexy *
                                                                        5}%`}
                                                                  y={`${(indexx +
                                                                        1) *
                                                                        10}%`}
                                                            >
                                                                  {subarr
                                                                        .toString()
                                                                        .includes(
                                                                              "."
                                                                        )
                                                                        ? subarr
                                                                        : subarr +
                                                                          ".0"}
                                                            </text>
                                                      )
                                                })}
                                          </>
                                    )
                              })}
                        </SVGOverlay>
                  </Map>
            )
      }
}
