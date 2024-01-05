export default {
    "version": 8,
    "name": "Basemap-black_NEW",
    "metadata": {
        "mapbox:print": {
            "units": "cm",
            "width": 21.59,
            "height": 27.94,
            "resolution": 300,
            "format": "png"
        },
        "mapbox:type": "default",
        "mapbox:uiParadigm": "layers",
        "mapbox:decompiler": {
            "id": "clqxoutc0006f01pma0c9hsb6",
            "componentVersion": "6.0.0",
            "strata": [
                {
                    "id": "monochrome-dark-v1",
                    "order": [
                        ["land-and-water", "land"],
                        "land Mask",
                        "contour",
                        ["land-and-water", "water"],
                        ["land-and-water", "built"],
                        ["transit", "built"],
                        ["buildings", "built"],
                        ["road-network", "tunnels-case"],
                        ["road-network", "tunnels"],
                        ["transit", "ferries"],
                        ["road-network", "surface"],
                        ["transit", "surface"],
                        ["road-network", "surface-icons"],
                        ["road-network", "bridges"],
                        ["transit", "bridges"],
                        ["road-network", "traffic-and-closures"],
                        ["buildings", "extruded"],
                        ["transit", "elevated"],
                        ["admin-boundaries", "admin"],
                        ["buildings", "building-labels"],
                        "Building",
                        ["road-network", "road-labels"],
                        ["transit", "ferry-aerialway-labels"],
                        ["natural-features", "natural-labels"],
                        ["point-of-interest-labels", "poi-labels"],
                        ["transit", "transit-labels"],
                        ["place-labels", "place-labels"],
                        "ming-an-chen"
                    ]
                }
            ],
            "overrides": {
                "land-and-water": {
                    "landuse": {"paint": {"fill-color": {"remove": true}}},
                    "land": {
                        "paint": {
                            "background-color": [
                                "interpolate",
                                ["linear"],
                                ["zoom"],
                                11,
                                "hsla(0, 0%, 0%, 0)",
                                13,
                                "#000000"
                            ]
                        }
                    },
                    "water": {"paint": {"fill-color": "hsl(0, 0%, 15%)"}},
                    "wetland-pattern": {
                        "paint": {
                            "fill-opacity": [
                                "interpolate",
                                ["linear"],
                                ["zoom"],
                                10,
                                0,
                                10.5,
                                0
                            ]
                        }
                    }
                },
                "road-network": {
                    "road-label-navigation": {
                        "layout": {
                            "text-field": [
                                "coalesce",
                                ["get", "name_zh-Hant"],
                                ["get", "name"]
                            ]
                        },
                        "paint": {"text-color": "hsl(0, 0%, 54%)"}
                    },
                    "road-secondary-tertiary-navigation": {
                        "paint": {"line-color": "#303030"}
                    },
                    "road-street-navigation": {
                        "paint": {"line-color": "#303030"}
                    }
                },
                "point-of-interest-labels": {},
                "place-labels": {
                    "settlement-major-label": {"paint": {"text-opacity": 0}},
                    "settlement-subdivision-label": {
                        "paint": {"text-opacity": 0}
                    },
                    "settlement-minor-label": {"paint": {"text-opacity": 0}}
                },
                "transit": {"airport-label": {"paint": {"text-opacity": 0}}},
                "natural-features": {
                    "natural-point-label": {"paint": {"text-opacity": 0}},
                    "waterway-label": {
                        "layout": {
                            "text-field": [
                                "coalesce",
                                ["get", "name_en"],
                                ["get", "name"]
                            ]
                        },
                        "paint": {"text-opacity": 0}
                    },
                    "natural-line-label": {
                        "layout": {
                            "text-field": [
                                "coalesce",
                                ["get", "name_en"],
                                ["get", "name"]
                            ]
                        },
                        "paint": {"text-opacity": 0}
                    },
                    "water-point-label": {
                        "layout": {
                            "text-field": [
                                "coalesce",
                                ["get", "name_en"],
                                ["get", "name"]
                            ]
                        },
                        "paint": {"text-opacity": 0}
                    }
                },
                "buildings": {
                    "building": {
                        "paint": {
                            "fill-pattern": ["to-string", ["get", "height"]]
                        }
                    }
                }
            },
            "components": {
                "land-and-water": "6.0.0",
                "buildings": "6.0.0",
                "road-network": "6.0.0",
                "admin-boundaries": "6.0.0",
                "natural-features": "6.0.0",
                "point-of-interest-labels": "6.0.0",
                "transit": "6.0.0",
                "place-labels": "6.0.0"
            },
            "propConfig": {
                "land-and-water": {
                    "color-base": "rgb(97, 86, 86)",
                    "transitionLandOnZoom": true,
                    "landStyle": "Outdoors",
                    "waterStyle": "Shadow",
                    "landcover": true,
                    "landuse": true,
                    "color-greenspace": "hsl(185, 5%, 64%)",
                    "color-airport": "rgb(43, 10, 230)"
                },
                "buildings": {
                    "color-base": "rgb(97, 86, 86)",
                    "houseNumbers": false,
                    "3D": false,
                    "haloWidth": 1.9,
                    "underground": false
                },
                "road-network": {
                    "color-base": "rgb(97, 86, 86)",
                    "roadsSize": 1,
                    "roadsFont": [
                        "Poppins SemiBold",
                        "Arial Unicode MS Regular"
                    ]
                },
                "admin-boundaries": {
                    "color-base": "rgb(97, 86, 86)",
                    "color-admin-boundary": "hsl(0, 94%, 45%)",
                    "admin0Width": 1.3,
                    "admin1Width": 1.6
                },
                "natural-features": {
                    "color-base": "rgb(97, 86, 86)",
                    "labelStyle": "Text only",
                    "density": 4,
                    "poiEtcFont": ["Overpass Black", "Arial Unicode MS Regular"]
                },
                "point-of-interest-labels": {
                    "color-base": "rgb(97, 86, 86)",
                    "labelStyle": "Text only",
                    "density": 1,
                    "color-greenspace": "hsl(185, 5%, 64%)",
                    "poiEtcFont": [
                        "Overpass Black",
                        "Arial Unicode MS Regular"
                    ],
                    "controlDensityByClass": false
                },
                "transit": {
                    "color-airport": "rgb(43, 10, 230)",
                    "roadsFont": [
                        "Poppins SemiBold",
                        "Arial Unicode MS Regular"
                    ],
                    "icon-color-scheme": "monochrome",
                    "aerialways": false,
                    "transitLabels": false,
                    "railwayStyle": false,
                    "roadsSize": 1,
                    "ferries": false,
                    "poiEtcFont": [
                        "Overpass Black",
                        "Arial Unicode MS Regular"
                    ],
                    "color-base": "rgb(97, 86, 86)"
                },
                "place-labels": {
                    "color-base": "rgb(97, 86, 86)",
                    "settlementsMajorFont": [
                        "DIN Pro Bold",
                        "Arial Unicode MS Regular"
                    ],
                    "settlementsMajorSize": 2,
                    "settlementsMinorSize": 1.3,
                    "countryLabelStyle": "Text and icon",
                    "language": "Traditional Chinese"
                }
            }
        },
        "mapbox:thumb": "data:image/webp;base64,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",
        "mapbox:autocomposite": true,
        "mapbox:sdk-support": {
            "android": "9.3.0",
            "ios": "5.10.0",
            "js": "1.10.0"
        },
        "mapbox:origin": "monochrome-dark-v1",
        "mapbox:groups": {
            "Road network, traffic-and-closures": {
                "name": "Road network, traffic-and-closures",
                "collapsed": false
            },
            "Transit, transit-labels": {
                "name": "Transit, transit-labels",
                "collapsed": true
            },
            "Administrative boundaries, admin": {
                "name": "Administrative boundaries, admin",
                "collapsed": true
            },
            "Land & water, built": {
                "name": "Land & water, built",
                "collapsed": true
            },
            "Transit, bridges": {"name": "Transit, bridges", "collapsed": true},
            "Transit, surface": {"name": "Transit, surface", "collapsed": true},
            "Land & water, land": {
                "name": "Land & water, land",
                "collapsed": true
            },
            "Road network, bridges": {
                "name": "Road network, bridges",
                "collapsed": true
            },
            "Road network, tunnels": {
                "name": "Road network, tunnels",
                "collapsed": true
            },
            "Road network, road-labels": {
                "name": "Road network, road-labels",
                "collapsed": true
            },
            "Buildings, built": {"name": "Buildings, built", "collapsed": true},
            "Natural features, natural-labels": {
                "name": "Natural features, natural-labels",
                "collapsed": true
            },
            "Road network, surface": {
                "name": "Road network, surface",
                "collapsed": true
            },
            "Place labels, place-labels": {
                "name": "Place labels, place-labels",
                "collapsed": true
            },
            "Point of interest labels, poi-labels": {
                "name": "Point of interest labels, poi-labels",
                "collapsed": true
            },
            "Road network, tunnels-case": {
                "name": "Road network, tunnels-case",
                "collapsed": true
            },
            "Transit, built": {"name": "Transit, built", "collapsed": true},
            "Road network, surface-icons": {
                "name": "Road network, surface-icons",
                "collapsed": true
            },
            "Land & water, water": {
                "name": "Land & water, water",
                "collapsed": true
            }
        }
    },
    "center": [121.30100900000002, 24.992824999999996],
    "zoom": 16,
    "bearing": 139.3515765570096,
    "pitch": 53.00000000000002,
    "lights": [],
    "sources": {
        "composite": {
            "url": "mapbox://mapbox.mapbox-terrain-v2,mapbox.mapbox-streets-v8,andychenming.clqxsfe8m9ag11tr0mn90alwg-6ty18",
            "type": "vector"
        }
    },
    "sprite": "mapbox://sprites/andychenming/clqxoutc0006f01pma0c9hsb6/33cmhdiq7y3az9tindn1byps4",
    "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "land",
            "type": "background",
            "metadata": {
                "mapbox:featureComponent": "land-and-water",
                "mapbox:group": "Land & water, land"
            },
            "layout": {},
            "paint": {
                "background-color": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    11,
                    "hsla(0, 0%, 0%, 0)",
                    13,
                    "#000000"
                ]
            }
        },
        {
            "id": "landcover-outdoors",
            "type": "fill",
            "metadata": {
                "mapbox:featureComponent": "land-and-water",
                "mapbox:group": "Land & water, land"
            },
            "source": "composite",
            "source-layer": "landcover",
            "maxzoom": 12,
            "layout": {},
            "paint": {
                "fill-color": [
                    "match",
                    ["get", "class"],
                    "snow",
                    "rgb(128, 113, 113)",
                    "hsl(167, 5%, 12%)"
                ],
                "fill-opacity": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    2,
                    0.3,
                    12,
                    0
                ],
                "fill-antialias": false
            }
        },
        {
            "id": "national-park",
            "type": "fill",
            "metadata": {
                "mapbox:featureComponent": "land-and-water",
                "mapbox:group": "Land & water, land"
            },
            "source": "composite",
            "source-layer": "landuse_overlay",
            "minzoom": 5,
            "filter": ["==", ["get", "class"], "national_park"],
            "layout": {},
            "paint": {
                "fill-color": "hsl(185, 5%, 64%)",
                "fill-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    5,
                    0,
                    6,
                    0.75,
                    10,
                    0.35
                ]
            }
        },
        {
            "id": "national-park_tint-band",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "land-and-water",
                "mapbox:group": "Land & water, land"
            },
            "source": "composite",
            "source-layer": "landuse_overlay",
            "minzoom": 9,
            "filter": ["==", ["get", "class"], "national_park"],
            "layout": {"line-cap": "round"},
            "paint": {
                "line-color": "hsl(185, 6%, 59%)",
                "line-width": [
                    "interpolate",
                    ["exponential", 1.4],
                    ["zoom"],
                    9,
                    1,
                    14,
                    8
                ],
                "line-offset": [
                    "interpolate",
                    ["exponential", 1.4],
                    ["zoom"],
                    9,
                    0,
                    14,
                    -2.5
                ],
                "line-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    9,
                    0,
                    10,
                    0.75
                ],
                "line-blur": 3
            }
        },
        {
            "id": "landuse",
            "type": "fill",
            "metadata": {
                "mapbox:featureComponent": "land-and-water",
                "mapbox:group": "Land & water, land"
            },
            "source": "composite",
            "source-layer": "landuse",
            "minzoom": 5,
            "filter": [
                "match",
                ["get", "class"],
                ["park", "airport", "glacier", "pitch", "sand", "facility"],
                true,
                ["agriculture", "wood", "grass", "scrub"],
                true,
                "cemetery",
                true,
                false
            ],
            "layout": {},
            "paint": {
                "fill-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    5,
                    0,
                    6,
                    [
                        "match",
                        ["get", "class"],
                        ["agriculture", "wood", "grass", "scrub"],
                        0,
                        "glacier",
                        0.5,
                        1
                    ],
                    15,
                    [
                        "match",
                        ["get", "class"],
                        "agriculture",
                        0.75,
                        ["wood", "glacier"],
                        0.5,
                        "grass",
                        0.4,
                        "scrub",
                        0.2,
                        1
                    ]
                ]
            }
        },
        {
            "id": "pitch-outline",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "land-and-water",
                "mapbox:group": "Land & water, land"
            },
            "source": "composite",
            "source-layer": "landuse",
            "minzoom": 15,
            "filter": ["==", ["get", "class"], "pitch"],
            "layout": {},
            "paint": {"line-color": "hsl(167, 3%, 12%)"}
        },
        {
            "id": "land Mask",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    0,
                    "hsla(185, 0%, 100%, 0.28)",
                    18,
                    "hsla(185, 0%, 99%, 0.76)",
                    22,
                    "hsl(185, 0%, 99%)"
                ],
                "background-opacity": 0,
                "background-pattern": "airport-11"
            }
        },
        {
            "id": "contour",
            "type": "fill-extrusion",
            "source": "composite",
            "source-layer": "contour",
            "layout": {"visibility": "none"},
            "paint": {
                "fill-extrusion-height": [
                    "interpolate",
                    ["linear"],
                    ["get", "ele"],
                    20,
                    0,
                    8840,
                    8840
                ],
                "fill-extrusion-color": "#030303",
                "fill-extrusion-opacity": 0.95
            }
        },
        {
            "id": "waterway-shadow",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "land-and-water",
                "mapbox:group": "Land & water, water"
            },
            "source": "composite",
            "source-layer": "waterway",
            "minzoom": 8,
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 11, "round"],
                "line-join": "round"
            },
            "paint": {
                "line-color": "rgb(28, 25, 25)",
                "line-width": [
                    "interpolate",
                    ["exponential", 1.3],
                    ["zoom"],
                    9,
                    ["match", ["get", "class"], ["canal", "river"], 0.1, 0],
                    20,
                    ["match", ["get", "class"], ["canal", "river"], 8, 3]
                ],
                "line-translate": [
                    "interpolate",
                    ["exponential", 1.2],
                    ["zoom"],
                    7,
                    ["literal", [0, 0]],
                    16,
                    ["literal", [-1, -1]]
                ],
                "line-translate-anchor": "viewport",
                "line-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    8,
                    0,
                    8.5,
                    1
                ]
            }
        },
        {
            "id": "water-shadow",
            "type": "fill",
            "metadata": {
                "mapbox:featureComponent": "land-and-water",
                "mapbox:group": "Land & water, water"
            },
            "source": "composite",
            "source-layer": "water",
            "layout": {},
            "paint": {
                "fill-color": "rgb(28, 25, 25)",
                "fill-translate": [
                    "interpolate",
                    ["exponential", 1.2],
                    ["zoom"],
                    7,
                    ["literal", [0, 0]],
                    16,
                    ["literal", [-1, -1]]
                ],
                "fill-translate-anchor": "viewport"
            }
        },
        {
            "id": "waterway",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "land-and-water",
                "mapbox:group": "Land & water, water"
            },
            "source": "composite",
            "source-layer": "waterway",
            "minzoom": 8,
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 11, "round"],
                "line-join": "round"
            },
            "paint": {
                "line-color": "rgb(53, 49, 49)",
                "line-width": [
                    "interpolate",
                    ["exponential", 1.3],
                    ["zoom"],
                    9,
                    ["match", ["get", "class"], ["canal", "river"], 0.1, 0],
                    20,
                    ["match", ["get", "class"], ["canal", "river"], 8, 3]
                ],
                "line-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    8,
                    0,
                    8.5,
                    1
                ]
            }
        },
        {
            "id": "water",
            "type": "fill",
            "metadata": {
                "mapbox:featureComponent": "land-and-water",
                "mapbox:group": "Land & water, water"
            },
            "source": "composite",
            "source-layer": "water",
            "layout": {},
            "paint": {"fill-color": "hsl(0, 0%, 15%)"}
        },
        {
            "id": "wetland",
            "type": "fill",
            "metadata": {
                "mapbox:featureComponent": "land-and-water",
                "mapbox:group": "Land & water, water"
            },
            "source": "composite",
            "source-layer": "landuse_overlay",
            "minzoom": 5,
            "filter": [
                "match",
                ["get", "class"],
                ["wetland", "wetland_noveg"],
                true,
                false
            ],
            "paint": {
                "fill-color": "rgb(78, 59, 59)",
                "fill-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    10,
                    0.25,
                    10.5,
                    0.15
                ]
            }
        },
        {
            "id": "wetland-pattern",
            "type": "fill",
            "metadata": {
                "mapbox:featureComponent": "land-and-water",
                "mapbox:group": "Land & water, water"
            },
            "source": "composite",
            "source-layer": "landuse_overlay",
            "minzoom": 5,
            "filter": [
                "match",
                ["get", "class"],
                ["wetland", "wetland_noveg"],
                true,
                false
            ],
            "layout": {},
            "paint": {
                "fill-color": "rgb(78, 59, 59)",
                "fill-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    10,
                    0,
                    10.5,
                    0
                ],
                "fill-pattern": "wetland",
                "fill-translate-anchor": "viewport"
            }
        },
        {
            "id": "land-structure-polygon",
            "type": "fill",
            "metadata": {
                "mapbox:featureComponent": "land-and-water",
                "mapbox:group": "Land & water, built"
            },
            "source": "composite",
            "source-layer": "structure",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", ["geometry-type"], "Polygon"],
                ["==", ["get", "class"], "land"]
            ],
            "layout": {},
            "paint": {"fill-color": "rgb(66, 61, 61)"}
        },
        {
            "id": "land-structure-line",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "land-and-water",
                "mapbox:group": "Land & water, built"
            },
            "source": "composite",
            "source-layer": "structure",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", ["geometry-type"], "LineString"],
                ["==", ["get", "class"], "land"]
            ],
            "layout": {"line-cap": "round"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.99],
                    ["zoom"],
                    14,
                    0.75,
                    20,
                    40
                ],
                "line-color": "rgb(66, 61, 61)"
            }
        },
        {
            "id": "aeroway-polygon",
            "type": "fill",
            "metadata": {
                "mapbox:featureComponent": "transit",
                "mapbox:group": "Transit, built"
            },
            "source": "composite",
            "source-layer": "aeroway",
            "minzoom": 11,
            "filter": [
                "all",
                ["==", ["geometry-type"], "Polygon"],
                [
                    "match",
                    ["get", "type"],
                    ["runway", "taxiway", "helipad"],
                    true,
                    false
                ]
            ],
            "layout": {},
            "paint": {
                "fill-color": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    "rgb(44, 39, 69)",
                    16,
                    "rgb(33, 22, 97)"
                ],
                "fill-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    11,
                    0,
                    11.5,
                    1
                ]
            }
        },
        {
            "id": "aeroway-line",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "transit",
                "mapbox:group": "Transit, built"
            },
            "source": "composite",
            "source-layer": "aeroway",
            "minzoom": 9,
            "filter": ["==", ["geometry-type"], "LineString"],
            "layout": {},
            "paint": {
                "line-color": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    "rgb(44, 39, 69)",
                    16,
                    "rgb(33, 22, 97)"
                ],
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    9,
                    ["match", ["get", "type"], "runway", 1, 0.5],
                    18,
                    ["match", ["get", "type"], "runway", 80, 20]
                ]
            }
        },
        {
            "id": "building-outline",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "buildings",
                "mapbox:group": "Buildings, built"
            },
            "source": "composite",
            "source-layer": "building",
            "minzoom": 15,
            "filter": [
                "all",
                ["!=", ["get", "type"], "building:part"],
                ["==", ["get", "underground"], "false"]
            ],
            "layout": {},
            "paint": {
                "line-color": "rgb(52, 51, 51)",
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    15,
                    0.75,
                    20,
                    3
                ],
                "line-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ]
            }
        },
        {
            "id": "building",
            "type": "fill",
            "metadata": {
                "mapbox:featureComponent": "buildings",
                "mapbox:group": "Buildings, built"
            },
            "source": "composite",
            "source-layer": "building",
            "minzoom": 15,
            "filter": [
                "all",
                ["!=", ["get", "type"], "building:part"],
                ["==", ["get", "underground"], "false"]
            ],
            "layout": {},
            "paint": {
                "fill-color": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    "rgb(66, 63, 63)",
                    16,
                    "rgb(58, 58, 58)"
                ],
                "fill-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ],
                "fill-outline-color": "rgb(52, 51, 51)",
                "fill-pattern": ["to-string", ["get", "height"]]
            }
        },
        {
            "id": "tunnel-street-minor-low",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, tunnels-case"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", ["get", "structure"], "tunnel"],
                [
                    "step",
                    ["zoom"],
                    [
                        "match",
                        ["get", "class"],
                        ["street", "street_limited", "primary_link", "track"],
                        true,
                        false
                    ],
                    14,
                    [
                        "match",
                        ["get", "class"],
                        [
                            "street",
                            "street_limited",
                            "track",
                            "primary_link",
                            "secondary_link",
                            "tertiary_link",
                            "service"
                        ],
                        true,
                        false
                    ]
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    [
                        "match",
                        ["get", "class"],
                        ["street", "street_limited", "primary_link"],
                        2,
                        "track",
                        1,
                        0.5
                    ],
                    18,
                    [
                        "match",
                        ["get", "class"],
                        ["street", "street_limited", "primary_link"],
                        18,
                        12
                    ]
                ],
                "line-color": "rgb(59, 55, 55)",
                "line-opacity": ["step", ["zoom"], 1, 14, 0]
            }
        },
        {
            "id": "tunnel-street-minor-case",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, tunnels-case"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", ["get", "structure"], "tunnel"],
                [
                    "step",
                    ["zoom"],
                    [
                        "match",
                        ["get", "class"],
                        ["street", "street_limited", "primary_link", "track"],
                        true,
                        false
                    ],
                    14,
                    [
                        "match",
                        ["get", "class"],
                        [
                            "street",
                            "street_limited",
                            "track",
                            "primary_link",
                            "secondary_link",
                            "tertiary_link",
                            "service"
                        ],
                        true,
                        false
                    ]
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-color": "rgb(93, 90, 90)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    [
                        "match",
                        ["get", "class"],
                        ["street", "street_limited", "primary_link"],
                        2,
                        "track",
                        1,
                        0.5
                    ],
                    18,
                    [
                        "match",
                        ["get", "class"],
                        ["street", "street_limited", "primary_link"],
                        18,
                        12
                    ]
                ],
                "line-opacity": ["step", ["zoom"], 0, 14, 1],
                "line-dasharray": [3, 3]
            }
        },
        {
            "id": "tunnel-primary-secondary-tertiary-case",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, tunnels-case"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", ["get", "structure"], "tunnel"],
                [
                    "match",
                    ["get", "class"],
                    ["primary", "secondary", "tertiary"],
                    true,
                    false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    10,
                    ["match", ["get", "class"], "primary", 1, 0.75],
                    18,
                    2
                ],
                "line-color": "rgb(93, 90, 90)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    ["match", ["get", "class"], "primary", 0.75, 0.1],
                    18,
                    ["match", ["get", "class"], "primary", 32, 26]
                ],
                "line-dasharray": [3, 3]
            }
        },
        {
            "id": "tunnel-major-link-case",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, tunnels-case"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", ["get", "structure"], "tunnel"],
                [
                    "match",
                    ["get", "class"],
                    ["motorway_link", "trunk_link"],
                    true,
                    false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-color": "rgb(93, 90, 90)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-dasharray": [3, 3]
            }
        },
        {
            "id": "tunnel-motorway-trunk-case",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, tunnels-case"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", ["get", "structure"], "tunnel"],
                ["match", ["get", "class"], ["motorway", "trunk"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    10,
                    1,
                    18,
                    2
                ],
                "line-color": "rgb(93, 90, 90)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-dasharray": [3, 3]
            }
        },
        {
            "id": "tunnel-construction",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, tunnels-case"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                ["==", ["get", "structure"], "tunnel"],
                ["==", ["get", "class"], "construction"],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": "rgb(59, 55, 55)",
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [0.4, 0.8]],
                    15,
                    ["literal", [0.3, 0.6]],
                    16,
                    ["literal", [0.2, 0.3]],
                    17,
                    ["literal", [0.2, 0.25]],
                    18,
                    ["literal", [0.15, 0.15]]
                ]
            }
        },
        {
            "id": "tunnel-major-link",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, tunnels"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", ["get", "structure"], "tunnel"],
                [
                    "match",
                    ["get", "class"],
                    ["motorway_link", "trunk_link"],
                    true,
                    false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": "rgb(59, 55, 55)"
            }
        },
        {
            "id": "tunnel-street-minor",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, tunnels"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", ["get", "structure"], "tunnel"],
                [
                    "step",
                    ["zoom"],
                    [
                        "match",
                        ["get", "class"],
                        ["street", "street_limited", "primary_link", "track"],
                        true,
                        false
                    ],
                    14,
                    [
                        "match",
                        ["get", "class"],
                        [
                            "street",
                            "street_limited",
                            "track",
                            "primary_link",
                            "secondary_link",
                            "tertiary_link",
                            "service"
                        ],
                        true,
                        false
                    ]
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    [
                        "match",
                        ["get", "class"],
                        ["street", "street_limited", "primary_link"],
                        2,
                        "track",
                        1,
                        0.5
                    ],
                    18,
                    [
                        "match",
                        ["get", "class"],
                        ["street", "street_limited", "primary_link"],
                        18,
                        12
                    ]
                ],
                "line-color": "rgb(59, 55, 55)",
                "line-opacity": ["step", ["zoom"], 0, 14, 1]
            }
        },
        {
            "id": "tunnel-primary-secondary-tertiary",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, tunnels"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", ["get", "structure"], "tunnel"],
                [
                    "match",
                    ["get", "class"],
                    ["primary", "secondary", "tertiary"],
                    true,
                    false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    ["match", ["get", "class"], "primary", 0.75, 0.1],
                    18,
                    ["match", ["get", "class"], "primary", 32, 26]
                ],
                "line-color": "rgb(59, 55, 55)"
            }
        },
        {
            "id": "tunnel-oneway-arrow-blue",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, tunnels"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                ["==", ["get", "structure"], "tunnel"],
                ["==", ["get", "oneway"], "true"],
                [
                    "step",
                    ["zoom"],
                    [
                        "match",
                        ["get", "class"],
                        [
                            "primary",
                            "secondary",
                            "street",
                            "street_limited",
                            "tertiary"
                        ],
                        true,
                        false
                    ],
                    16,
                    [
                        "match",
                        ["get", "class"],
                        [
                            "primary",
                            "secondary",
                            "tertiary",
                            "street",
                            "street_limited",
                            "primary_link",
                            "secondary_link",
                            "tertiary_link",
                            "service",
                            "track"
                        ],
                        true,
                        false
                    ]
                ]
            ],
            "layout": {
                "symbol-placement": "line",
                "icon-image": [
                    "step",
                    ["zoom"],
                    "oneway-small",
                    17,
                    [
                        "match",
                        ["get", "class"],
                        [
                            "primary",
                            "secondary",
                            "tertiary",
                            "street",
                            "street_limited"
                        ],
                        "oneway-large",
                        "oneway-small"
                    ],
                    18,
                    "oneway-large"
                ],
                "symbol-spacing": 200,
                "icon-rotation-alignment": "map"
            },
            "paint": {}
        },
        {
            "id": "tunnel-motorway-trunk",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, tunnels"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", ["get", "structure"], "tunnel"],
                ["match", ["get", "class"], ["motorway", "trunk"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-color": "rgb(59, 55, 55)"
            }
        },
        {
            "id": "tunnel-oneway-arrow-white",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, tunnels"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 16,
            "filter": [
                "all",
                ["==", ["get", "structure"], "tunnel"],
                [
                    "match",
                    ["get", "class"],
                    ["motorway", "motorway_link", "trunk", "trunk_link"],
                    true,
                    false
                ],
                ["==", ["get", "oneway"], "true"]
            ],
            "layout": {
                "symbol-placement": "line",
                "icon-image": [
                    "step",
                    ["zoom"],
                    "oneway-white-small",
                    17,
                    "oneway-white-large"
                ],
                "symbol-spacing": 200
            },
            "paint": {}
        },
        {
            "id": "turning-feature-outline",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                ["==", ["geometry-type"], "Point"],
                [
                    "match",
                    ["get", "class"],
                    ["turning_circle", "turning_loop"],
                    true,
                    false
                ]
            ],
            "layout": {
                "icon-image": "turning-circle-outline",
                "icon-size": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    0.122,
                    18,
                    0.969,
                    20,
                    1
                ],
                "icon-allow-overlap": true,
                "icon-ignore-placement": true,
                "icon-padding": 0,
                "icon-rotation-alignment": "map"
            },
            "paint": {}
        },
        {
            "id": "road-minor-low",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                [
                    "step",
                    ["zoom"],
                    ["==", ["get", "class"], "track"],
                    14,
                    [
                        "match",
                        ["get", "class"],
                        ["track", "secondary_link", "tertiary_link", "service"],
                        true,
                        false
                    ]
                ],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 14, "round"],
                "line-join": ["step", ["zoom"], "miter", 14, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    ["match", ["get", "class"], "track", 1, 0.5],
                    18,
                    12
                ],
                "line-color": "rgb(87, 81, 81)",
                "line-opacity": ["step", ["zoom"], 1, 14, 0]
            }
        },
        {
            "id": "road-minor-case",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                [
                    "step",
                    ["zoom"],
                    ["==", ["get", "class"], "track"],
                    14,
                    [
                        "match",
                        ["get", "class"],
                        ["track", "secondary_link", "tertiary_link", "service"],
                        true,
                        false
                    ]
                ],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 14, "round"],
                "line-join": ["step", ["zoom"], "miter", 14, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-color": "rgb(58, 58, 58)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    ["match", ["get", "class"], "track", 1, 0.5],
                    18,
                    12
                ],
                "line-opacity": ["step", ["zoom"], 0, 14, 1]
            }
        },
        {
            "id": "road-street-low",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "filter": [
                "all",
                [
                    "match",
                    ["get", "class"],
                    ["street", "street_limited", "primary_link"],
                    true,
                    false
                ],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 14, "round"],
                "line-join": ["step", ["zoom"], "miter", 14, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": "rgb(87, 81, 81)",
                "line-opacity": ["step", ["zoom"], 1, 14, 0]
            }
        },
        {
            "id": "road-street-case",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "filter": [
                "all",
                [
                    "match",
                    ["get", "class"],
                    ["street", "street_limited", "primary_link"],
                    true,
                    false
                ],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 14, "round"],
                "line-join": ["step", ["zoom"], "miter", 14, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-color": "rgb(58, 58, 58)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-opacity": ["step", ["zoom"], 0, 14, 1]
            }
        },
        {
            "id": "road-secondary-tertiary-case",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 8,
            "filter": [
                "all",
                [
                    "match",
                    ["get", "class"],
                    ["secondary", "tertiary"],
                    true,
                    false
                ],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 14, "round"],
                "line-join": ["step", ["zoom"], "miter", 14, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    10,
                    0.75,
                    18,
                    2
                ],
                "line-color": "rgb(58, 58, 58)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.1,
                    18,
                    26
                ],
                "line-opacity": ["step", ["zoom"], 0, 10, 1]
            }
        },
        {
            "id": "road-primary-case",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 7,
            "filter": [
                "all",
                ["==", ["get", "class"], "primary"],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 14, "round"],
                "line-join": ["step", ["zoom"], "miter", 14, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    10,
                    1,
                    18,
                    2
                ],
                "line-color": "rgb(58, 58, 58)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-opacity": ["step", ["zoom"], 0, 10, 1]
            }
        },
        {
            "id": "road-major-link-case",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 10,
            "filter": [
                "all",
                [
                    "match",
                    ["get", "class"],
                    ["motorway_link", "trunk_link"],
                    true,
                    false
                ],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 14, "round"],
                "line-join": ["step", ["zoom"], "miter", 14, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-color": "rgb(58, 58, 58)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-opacity": ["step", ["zoom"], 0, 11, 1]
            }
        },
        {
            "id": "road-motorway-trunk-case",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 5,
            "filter": [
                "all",
                ["match", ["get", "class"], ["motorway", "trunk"], true, false],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 14, "round"],
                "line-join": ["step", ["zoom"], "miter", 14, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    10,
                    1,
                    18,
                    2
                ],
                "line-color": "rgb(58, 58, 58)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-opacity": [
                    "step",
                    ["zoom"],
                    ["match", ["get", "class"], "motorway", 1, 0],
                    6,
                    1
                ]
            }
        },
        {
            "id": "road-construction",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                ["==", ["get", "class"], "construction"],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": "rgb(87, 81, 81)",
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [0.4, 0.8]],
                    15,
                    ["literal", [0.3, 0.6]],
                    16,
                    ["literal", [0.2, 0.3]],
                    17,
                    ["literal", [0.2, 0.25]],
                    18,
                    ["literal", [0.15, 0.15]]
                ]
            }
        },
        {
            "id": "road-major-link",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 10,
            "filter": [
                "all",
                [
                    "match",
                    ["get", "class"],
                    ["motorway_link", "trunk_link"],
                    true,
                    false
                ],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 13, "round"],
                "line-join": ["step", ["zoom"], "miter", 13, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": "rgb(87, 81, 81)"
            }
        },
        {
            "id": "road-polygon",
            "type": "fill",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                ["==", ["geometry-type"], "Polygon"],
                [
                    "match",
                    ["get", "class"],
                    [
                        "primary",
                        "secondary",
                        "tertiary",
                        "primary_link",
                        "secondary_link",
                        "tertiary_link",
                        "trunk",
                        "trunk_link",
                        "street",
                        "street_limited",
                        "track",
                        "service"
                    ],
                    true,
                    false
                ],
                ["match", ["get", "structure"], ["none", "ford"], true, false]
            ],
            "layout": {},
            "paint": {
                "fill-color": "rgb(87, 81, 81)",
                "fill-outline-color": "rgb(58, 58, 58)"
            }
        },
        {
            "id": "road-minor",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                [
                    "step",
                    ["zoom"],
                    ["==", ["get", "class"], "track"],
                    14,
                    [
                        "match",
                        ["get", "class"],
                        ["track", "secondary_link", "tertiary_link", "service"],
                        true,
                        false
                    ]
                ],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 14, "round"],
                "line-join": ["step", ["zoom"], "miter", 14, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    ["match", ["get", "class"], "track", 1, 0.5],
                    18,
                    12
                ],
                "line-color": "rgb(87, 81, 81)",
                "line-opacity": ["step", ["zoom"], 0, 14, 1]
            }
        },
        {
            "id": "road-street",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "filter": [
                "all",
                [
                    "match",
                    ["get", "class"],
                    ["street", "street_limited", "primary_link"],
                    true,
                    false
                ],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 14, "round"],
                "line-join": ["step", ["zoom"], "miter", 14, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": "rgb(87, 81, 81)",
                "line-opacity": ["step", ["zoom"], 0, 14, 1]
            }
        },
        {
            "id": "road-secondary-tertiary",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 8,
            "filter": [
                "all",
                [
                    "match",
                    ["get", "class"],
                    ["secondary", "tertiary"],
                    true,
                    false
                ],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 14, "round"],
                "line-join": ["step", ["zoom"], "miter", 14, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.1,
                    18,
                    26
                ],
                "line-color": "rgb(87, 81, 81)"
            }
        },
        {
            "id": "road-primary",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 6,
            "filter": [
                "all",
                ["==", ["get", "class"], "primary"],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 14, "round"],
                "line-join": ["step", ["zoom"], "miter", 14, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-color": "rgb(87, 81, 81)"
            }
        },
        {
            "id": "road-oneway-arrow-blue",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                ["==", ["get", "oneway"], "true"],
                [
                    "step",
                    ["zoom"],
                    [
                        "match",
                        ["get", "class"],
                        [
                            "primary",
                            "secondary",
                            "tertiary",
                            "street",
                            "street_limited"
                        ],
                        true,
                        false
                    ],
                    16,
                    [
                        "match",
                        ["get", "class"],
                        [
                            "primary",
                            "secondary",
                            "tertiary",
                            "street",
                            "street_limited",
                            "primary_link",
                            "secondary_link",
                            "tertiary_link",
                            "service",
                            "track"
                        ],
                        true,
                        false
                    ]
                ],
                ["match", ["get", "structure"], ["none", "ford"], true, false]
            ],
            "layout": {
                "symbol-placement": "line",
                "icon-image": [
                    "step",
                    ["zoom"],
                    "oneway-small",
                    17,
                    [
                        "match",
                        ["get", "class"],
                        [
                            "primary",
                            "secondary",
                            "tertiary",
                            "street",
                            "street_limited"
                        ],
                        "oneway-large",
                        "oneway-small"
                    ],
                    18,
                    "oneway-large"
                ],
                "symbol-spacing": 200,
                "icon-rotation-alignment": "map"
            },
            "paint": {}
        },
        {
            "id": "road-motorway-trunk",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all",
                ["match", ["get", "class"], ["motorway", "trunk"], true, false],
                ["match", ["get", "structure"], ["none", "ford"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 13, "round"],
                "line-join": ["step", ["zoom"], "miter", 13, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-color": "rgb(87, 81, 81)"
            }
        },
        {
            "id": "road-rail",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "transit",
                "mapbox:group": "Transit, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                [
                    "match",
                    ["get", "class"],
                    ["major_rail", "minor_rail"],
                    true,
                    false
                ],
                ["match", ["get", "structure"], ["none", "ford"], true, false]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-color": "rgb(58, 58, 58)",
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    0.5,
                    20,
                    1
                ]
            }
        },
        {
            "id": "level-crossing",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface-icons"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 16,
            "filter": ["==", ["get", "class"], "level_crossing"],
            "layout": {
                "icon-image": "level-crossing",
                "icon-allow-overlap": true
            },
            "paint": {}
        },
        {
            "id": "road-oneway-arrow-white",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface-icons"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 16,
            "filter": [
                "all",
                ["==", ["get", "oneway"], "true"],
                [
                    "match",
                    ["get", "class"],
                    ["motorway", "trunk", "motorway_link", "trunk_link"],
                    true,
                    false
                ],
                ["match", ["get", "structure"], ["none", "ford"], true, false]
            ],
            "layout": {
                "symbol-placement": "line",
                "icon-image": [
                    "step",
                    ["zoom"],
                    "oneway-white-small",
                    17,
                    "oneway-white-large"
                ],
                "symbol-spacing": 200
            },
            "paint": {}
        },
        {
            "id": "turning-feature",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface-icons"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                ["==", ["geometry-type"], "Point"],
                [
                    "match",
                    ["get", "class"],
                    ["turning_circle", "turning_loop"],
                    true,
                    false
                ]
            ],
            "layout": {
                "icon-image": "turning-circle",
                "icon-size": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    0.095,
                    18,
                    1
                ],
                "icon-allow-overlap": true,
                "icon-ignore-placement": true,
                "icon-padding": 0,
                "icon-rotation-alignment": "map"
            },
            "paint": {}
        },
        {
            "id": "bridge-street-minor-low",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                [
                    "step",
                    ["zoom"],
                    [
                        "match",
                        ["get", "class"],
                        ["street", "street_limited", "primary_link", "track"],
                        true,
                        false
                    ],
                    14,
                    [
                        "match",
                        ["get", "class"],
                        [
                            "street",
                            "street_limited",
                            "track",
                            "primary_link",
                            "secondary_link",
                            "tertiary_link",
                            "service"
                        ],
                        true,
                        false
                    ]
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 14, "round"],
                "line-join": ["step", ["zoom"], "miter", 14, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    [
                        "match",
                        ["get", "class"],
                        ["street", "street_limited", "primary_link"],
                        2,
                        "track",
                        1,
                        0.5
                    ],
                    18,
                    [
                        "match",
                        ["get", "class"],
                        ["street", "street_limited", "primary_link"],
                        18,
                        12
                    ]
                ],
                "line-color": "rgb(87, 81, 81)",
                "line-opacity": ["step", ["zoom"], 1, 14, 0]
            }
        },
        {
            "id": "bridge-street-minor-case",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                [
                    "step",
                    ["zoom"],
                    [
                        "match",
                        ["get", "class"],
                        ["street", "street_limited", "primary_link", "track"],
                        true,
                        false
                    ],
                    14,
                    [
                        "match",
                        ["get", "class"],
                        [
                            "street",
                            "street_limited",
                            "track",
                            "primary_link",
                            "secondary_link",
                            "tertiary_link",
                            "service"
                        ],
                        true,
                        false
                    ]
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-color": "rgb(58, 58, 58)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    [
                        "match",
                        ["get", "class"],
                        ["street", "street_limited", "primary_link"],
                        2,
                        "track",
                        1,
                        0.5
                    ],
                    18,
                    [
                        "match",
                        ["get", "class"],
                        ["street", "street_limited", "primary_link"],
                        18,
                        12
                    ]
                ],
                "line-opacity": ["step", ["zoom"], 0, 14, 1]
            }
        },
        {
            "id": "bridge-primary-secondary-tertiary-case",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                [
                    "match",
                    ["get", "class"],
                    ["primary", "secondary", "tertiary"],
                    true,
                    false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    10,
                    ["match", ["get", "class"], "primary", 1, 0.75],
                    18,
                    2
                ],
                "line-color": "rgb(58, 58, 58)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    ["match", ["get", "class"], "primary", 0.75, 0.1],
                    18,
                    ["match", ["get", "class"], "primary", 32, 26]
                ],
                "line-opacity": ["step", ["zoom"], 0, 10, 1]
            }
        },
        {
            "id": "bridge-major-link-case",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                [
                    "match",
                    ["get", "class"],
                    ["motorway_link", "trunk_link"],
                    true,
                    false
                ],
                ["<=", ["get", "layer"], 1],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-color": "rgb(58, 58, 58)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ]
            }
        },
        {
            "id": "bridge-motorway-trunk-case",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                ["match", ["get", "class"], ["motorway", "trunk"], true, false],
                ["<=", ["get", "layer"], 1],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    10,
                    1,
                    18,
                    2
                ],
                "line-color": "rgb(58, 58, 58)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ]
            }
        },
        {
            "id": "bridge-construction",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                ["==", ["get", "class"], "construction"],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": "rgb(87, 81, 81)",
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [0.4, 0.8]],
                    15,
                    ["literal", [0.3, 0.6]],
                    16,
                    ["literal", [0.2, 0.3]],
                    17,
                    ["literal", [0.2, 0.25]],
                    18,
                    ["literal", [0.15, 0.15]]
                ]
            }
        },
        {
            "id": "bridge-major-link",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                [
                    "match",
                    ["get", "class"],
                    ["motorway_link", "trunk_link"],
                    true,
                    false
                ],
                ["<=", ["get", "layer"], 1],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {"line-cap": "round", "line-join": "round"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": "rgb(87, 81, 81)"
            }
        },
        {
            "id": "bridge-street-minor",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                [
                    "step",
                    ["zoom"],
                    [
                        "match",
                        ["get", "class"],
                        ["street", "street_limited", "primary_link", "track"],
                        true,
                        false
                    ],
                    14,
                    [
                        "match",
                        ["get", "class"],
                        [
                            "street",
                            "street_limited",
                            "track",
                            "primary_link",
                            "secondary_link",
                            "tertiary_link",
                            "service"
                        ],
                        true,
                        false
                    ]
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 14, "round"],
                "line-join": ["step", ["zoom"], "miter", 14, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    [
                        "match",
                        ["get", "class"],
                        ["street", "street_limited", "primary_link"],
                        2,
                        "track",
                        1,
                        0.5
                    ],
                    18,
                    [
                        "match",
                        ["get", "class"],
                        ["street", "street_limited", "primary_link"],
                        18,
                        12
                    ]
                ],
                "line-color": "rgb(87, 81, 81)",
                "line-opacity": ["step", ["zoom"], 0, 14, 1]
            }
        },
        {
            "id": "bridge-primary-secondary-tertiary",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                [
                    "match",
                    ["get", "class"],
                    ["primary", "secondary", "tertiary"],
                    true,
                    false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 14, "round"],
                "line-join": ["step", ["zoom"], "miter", 14, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    ["match", ["get", "class"], "primary", 0.75, 0.1],
                    18,
                    ["match", ["get", "class"], "primary", 32, 26]
                ],
                "line-color": "rgb(87, 81, 81)"
            }
        },
        {
            "id": "bridge-oneway-arrow-blue",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                ["==", ["get", "oneway"], "true"],
                [
                    "step",
                    ["zoom"],
                    [
                        "match",
                        ["get", "class"],
                        [
                            "primary",
                            "secondary",
                            "tertiary",
                            "street",
                            "street_limited"
                        ],
                        true,
                        false
                    ],
                    16,
                    [
                        "match",
                        ["get", "class"],
                        [
                            "primary",
                            "secondary",
                            "tertiary",
                            "street",
                            "street_limited",
                            "primary_link",
                            "secondary_link",
                            "tertiary_link",
                            "service",
                            "track"
                        ],
                        true,
                        false
                    ]
                ]
            ],
            "layout": {
                "symbol-placement": "line",
                "icon-image": [
                    "step",
                    ["zoom"],
                    "oneway-small",
                    17,
                    [
                        "match",
                        ["get", "class"],
                        [
                            "primary",
                            "secondary",
                            "tertiary",
                            "street",
                            "street_limited"
                        ],
                        "oneway-large",
                        "oneway-small"
                    ],
                    18,
                    "oneway-large"
                ],
                "symbol-spacing": 200,
                "icon-rotation-alignment": "map"
            },
            "paint": {}
        },
        {
            "id": "bridge-motorway-trunk",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                ["match", ["get", "class"], ["motorway", "trunk"], true, false],
                ["<=", ["get", "layer"], 1],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {"line-cap": "round", "line-join": "round"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-color": "rgb(87, 81, 81)"
            }
        },
        {
            "id": "bridge-major-link-2-case",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                [">=", ["get", "layer"], 2],
                [
                    "match",
                    ["get", "class"],
                    ["motorway_link", "trunk_link"],
                    true,
                    false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-color": "rgb(58, 58, 58)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ]
            }
        },
        {
            "id": "bridge-motorway-trunk-2-case",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                [">=", ["get", "layer"], 2],
                ["match", ["get", "class"], ["motorway", "trunk"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    10,
                    1,
                    18,
                    2
                ],
                "line-color": "rgb(58, 58, 58)",
                "line-gap-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ]
            }
        },
        {
            "id": "bridge-major-link-2",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                [">=", ["get", "layer"], 2],
                [
                    "match",
                    ["get", "class"],
                    ["motorway_link", "trunk_link"],
                    true,
                    false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {"line-cap": "round", "line-join": "round"},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": "rgb(87, 81, 81)"
            }
        },
        {
            "id": "bridge-motorway-trunk-2",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                [">=", ["get", "layer"], 2],
                ["match", ["get", "class"], ["motorway", "trunk"], true, false],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 14, "round"],
                "line-join": ["step", ["zoom"], "miter", 14, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-color": "rgb(87, 81, 81)"
            }
        },
        {
            "id": "bridge-oneway-arrow-white",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 16,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                [
                    "match",
                    ["get", "class"],
                    ["motorway", "trunk", "motorway_link", "trunk_link"],
                    true,
                    false
                ],
                ["==", ["get", "oneway"], "true"]
            ],
            "layout": {
                "symbol-placement": "line",
                "icon-image": [
                    "step",
                    ["zoom"],
                    "oneway-white-small",
                    17,
                    "oneway-white-large"
                ],
                "symbol-spacing": 200
            },
            "paint": {}
        },
        {
            "id": "bridge-rail",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "transit",
                "mapbox:group": "Transit, bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                ["==", ["get", "structure"], "bridge"],
                [
                    "match",
                    ["get", "class"],
                    ["major_rail", "minor_rail"],
                    true,
                    false
                ]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-color": "rgb(58, 58, 58)",
                "line-width": [
                    "interpolate",
                    ["exponential", 1.5],
                    ["zoom"],
                    14,
                    0.5,
                    20,
                    1
                ]
            }
        },
        {
            "id": "admin-1-boundary-bg",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "admin-boundaries",
                "mapbox:group": "Administrative boundaries, admin"
            },
            "source": "composite",
            "source-layer": "admin",
            "minzoom": 7,
            "filter": [
                "all",
                ["==", ["get", "admin_level"], 1],
                ["==", ["get", "maritime"], "false"],
                ["match", ["get", "worldview"], ["all", "US"], true, false]
            ],
            "layout": {"line-join": "bevel"},
            "paint": {
                "line-color": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    8,
                    "rgb(66, 61, 61)",
                    16,
                    "hsl(0, 100%, 40%)"
                ],
                "line-width": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    7,
                    6,
                    12,
                    8.8
                ],
                "line-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    7,
                    0,
                    8,
                    0.75
                ],
                "line-dasharray": [1, 0],
                "line-blur": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    3,
                    0,
                    8,
                    4.800000000000001
                ]
            }
        },
        {
            "id": "admin-0-boundary-bg",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "admin-boundaries",
                "mapbox:group": "Administrative boundaries, admin"
            },
            "source": "composite",
            "source-layer": "admin",
            "minzoom": 1,
            "filter": [
                "all",
                ["==", ["get", "admin_level"], 0],
                ["==", ["get", "maritime"], "false"],
                ["match", ["get", "worldview"], ["all", "US"], true, false]
            ],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    3,
                    4.55,
                    10,
                    10.4
                ],
                "line-color": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    6,
                    "rgb(66, 61, 61)",
                    8,
                    "hsl(0, 100%, 40%)"
                ],
                "line-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    3,
                    0,
                    4,
                    0.5
                ],
                "line-blur": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    3,
                    0,
                    10,
                    2.6
                ]
            }
        },
        {
            "id": "admin-1-boundary",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "admin-boundaries",
                "mapbox:group": "Administrative boundaries, admin"
            },
            "source": "composite",
            "source-layer": "admin",
            "minzoom": 2,
            "filter": [
                "all",
                ["==", ["get", "admin_level"], 1],
                ["==", ["get", "maritime"], "false"],
                ["match", ["get", "worldview"], ["all", "US"], true, false]
            ],
            "layout": {"line-join": "round", "line-cap": "round"},
            "paint": {
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [2, 0]],
                    7,
                    ["literal", [2, 2, 6, 2]]
                ],
                "line-width": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    7,
                    1.2000000000000002,
                    12,
                    2.4000000000000004
                ],
                "line-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    2,
                    0,
                    3,
                    1
                ],
                "line-color": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    3,
                    "hsl(0, 55%, 40%)",
                    7,
                    "hsl(0, 94%, 50%)"
                ]
            }
        },
        {
            "id": "admin-0-boundary",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "admin-boundaries",
                "mapbox:group": "Administrative boundaries, admin"
            },
            "source": "composite",
            "source-layer": "admin",
            "minzoom": 1,
            "filter": [
                "all",
                ["==", ["get", "admin_level"], 0],
                ["==", ["get", "disputed"], "false"],
                ["==", ["get", "maritime"], "false"],
                ["match", ["get", "worldview"], ["all", "US"], true, false]
            ],
            "layout": {"line-join": "round", "line-cap": "round"},
            "paint": {
                "line-color": "hsl(0, 94%, 45%)",
                "line-width": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    3,
                    0.65,
                    10,
                    2.6
                ],
                "line-dasharray": [10, 0]
            }
        },
        {
            "id": "admin-0-boundary-disputed",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "admin-boundaries",
                "mapbox:group": "Administrative boundaries, admin"
            },
            "source": "composite",
            "source-layer": "admin",
            "minzoom": 1,
            "filter": [
                "all",
                ["==", ["get", "disputed"], "true"],
                ["==", ["get", "admin_level"], 0],
                ["==", ["get", "maritime"], "false"],
                ["match", ["get", "worldview"], ["all", "US"], true, false]
            ],
            "layout": {"line-join": "round"},
            "paint": {
                "line-color": "hsl(0, 94%, 45%)",
                "line-width": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    3,
                    0.65,
                    10,
                    2.6
                ],
                "line-dasharray": [
                    "step",
                    ["zoom"],
                    ["literal", [3.25, 3.25]],
                    6,
                    ["literal", [2.5, 2.5]],
                    7,
                    ["literal", [2, 2.25]],
                    8,
                    ["literal", [1.75, 2]]
                ]
            }
        },
        {
            "id": "road-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, road-labels"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 10,
            "filter": [
                "step",
                ["zoom"],
                [
                    "match",
                    ["get", "class"],
                    ["motorway", "trunk", "primary", "secondary", "tertiary"],
                    true,
                    false
                ],
                12,
                [
                    "match",
                    ["get", "class"],
                    [
                        "motorway",
                        "trunk",
                        "primary",
                        "secondary",
                        "tertiary",
                        "street",
                        "street_limited"
                    ],
                    true,
                    false
                ],
                15,
                [
                    "match",
                    ["get", "class"],
                    ["path", "pedestrian", "golf", "ferry", "aerialway"],
                    false,
                    true
                ]
            ],
            "layout": {
                "text-size": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    10,
                    [
                        "match",
                        ["get", "class"],
                        [
                            "motorway",
                            "trunk",
                            "primary",
                            "secondary",
                            "tertiary"
                        ],
                        10,
                        [
                            "motorway_link",
                            "trunk_link",
                            "primary_link",
                            "secondary_link",
                            "tertiary_link",
                            "street",
                            "street_limited"
                        ],
                        9,
                        6.5
                    ],
                    18,
                    [
                        "match",
                        ["get", "class"],
                        [
                            "motorway",
                            "trunk",
                            "primary",
                            "secondary",
                            "tertiary"
                        ],
                        16,
                        [
                            "motorway_link",
                            "trunk_link",
                            "primary_link",
                            "secondary_link",
                            "tertiary_link",
                            "street",
                            "street_limited"
                        ],
                        14,
                        13
                    ]
                ],
                "text-max-angle": 30,
                "text-font": ["Poppins SemiBold", "Arial Unicode MS Regular"],
                "symbol-placement": "line",
                "text-padding": 1,
                "text-rotation-alignment": "map",
                "text-pitch-alignment": "viewport",
                "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]],
                "text-letter-spacing": 0.01
            },
            "paint": {
                "text-color": "rgb(194, 190, 190)",
                "text-halo-color": "rgb(34, 32, 32)",
                "text-halo-width": 1,
                "text-halo-blur": 1
            }
        },
        {
            "id": "road-intersection",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, road-labels"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                ["==", ["get", "class"], "intersection"],
                ["has", "name"]
            ],
            "layout": {
                "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]],
                "icon-image": "intersection",
                "icon-text-fit": "both",
                "icon-text-fit-padding": [1, 2, 1, 2],
                "text-size": [
                    "interpolate",
                    ["exponential", 1.2],
                    ["zoom"],
                    15,
                    9,
                    18,
                    12
                ],
                "text-font": ["DIN Pro Bold", "Arial Unicode MS Bold"]
            },
            "paint": {"text-color": "hsl(230, 57%, 64%)"}
        },
        {
            "id": "road-number-shield",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, road-labels"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 6,
            "filter": [
                "all",
                ["has", "reflen"],
                ["<=", ["get", "reflen"], 6],
                [
                    "step",
                    ["zoom"],
                    ["==", ["geometry-type"], "Point"],
                    11,
                    [">", ["get", "len"], 5000],
                    12,
                    [">", ["get", "len"], 2500],
                    13,
                    [">", ["get", "len"], 1000],
                    14,
                    true
                ]
            ],
            "layout": {
                "text-size": 9,
                "icon-image": [
                    "concat",
                    ["get", "shield"],
                    "-",
                    ["to-string", ["get", "reflen"]]
                ],
                "icon-rotation-alignment": "viewport",
                "text-max-angle": 38,
                "symbol-spacing": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    11,
                    150,
                    14,
                    200
                ],
                "text-font": ["DIN Pro Bold", "Arial Unicode MS Bold"],
                "symbol-placement": ["step", ["zoom"], "point", 11, "line"],
                "text-rotation-alignment": "viewport",
                "text-field": ["get", "ref"],
                "text-letter-spacing": 0.05
            },
            "paint": {
                "text-color": [
                    "match",
                    ["get", "shield_text_color"],
                    "white",
                    "hsl(0, 0%, 100%)",
                    "yellow",
                    "hsl(50, 100%, 70%)",
                    "orange",
                    "hsl(25, 100%, 75%)",
                    "blue",
                    "hsl(230, 57%, 44%)",
                    "hsl(230, 18%, 13%)"
                ]
            }
        },
        {
            "id": "road-exit-shield",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, road-labels"
            },
            "source": "composite",
            "source-layer": "motorway_junction",
            "minzoom": 14,
            "filter": ["all", ["has", "reflen"], ["<=", ["get", "reflen"], 9]],
            "layout": {
                "text-field": ["get", "ref"],
                "text-size": 9,
                "icon-image": [
                    "concat",
                    "motorway-exit-",
                    ["to-string", ["get", "reflen"]]
                ],
                "text-font": ["DIN Pro Bold", "Arial Unicode MS Bold"]
            },
            "paint": {
                "text-color": "hsl(0, 0%, 100%)",
                "text-translate": [0, 0]
            }
        },
        {
            "id": "waterway-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "natural-features",
                "mapbox:group": "Natural features, natural-labels"
            },
            "source": "composite",
            "source-layer": "natural_label",
            "minzoom": 13,
            "filter": [
                "all",
                [
                    "match",
                    ["get", "class"],
                    ["canal", "river", "stream"],
                    ["match", ["get", "worldview"], ["all", "US"], true, false],
                    ["disputed_canal", "disputed_river", "disputed_stream"],
                    [
                        "all",
                        ["==", ["get", "disputed"], "true"],
                        [
                            "match",
                            ["get", "worldview"],
                            ["all", "US"],
                            true,
                            false
                        ]
                    ],
                    false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "text-font": ["DIN Pro Italic", "Arial Unicode MS Regular"],
                "text-max-angle": 30,
                "symbol-spacing": [
                    "interpolate",
                    ["linear", 1],
                    ["zoom"],
                    15,
                    250,
                    17,
                    400
                ],
                "text-size": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    13,
                    12,
                    18,
                    16
                ],
                "symbol-placement": "line",
                "text-pitch-alignment": "viewport",
                "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]]
            },
            "paint": {"text-color": "rgb(117, 108, 108)", "text-opacity": 0}
        },
        {
            "id": "natural-line-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "natural-features",
                "mapbox:group": "Natural features, natural-labels"
            },
            "source": "composite",
            "source-layer": "natural_label",
            "minzoom": 4,
            "filter": [
                "all",
                [
                    "match",
                    ["get", "class"],
                    ["glacier", "landform"],
                    ["match", ["get", "worldview"], ["all", "US"], true, false],
                    ["disputed_glacier", "disputed_landform"],
                    [
                        "all",
                        ["==", ["get", "disputed"], "true"],
                        [
                            "match",
                            ["get", "worldview"],
                            ["all", "US"],
                            true,
                            false
                        ]
                    ],
                    false
                ],
                ["==", ["geometry-type"], "LineString"],
                ["<=", ["get", "filterrank"], 4]
            ],
            "layout": {
                "text-size": [
                    "step",
                    ["zoom"],
                    ["step", ["get", "sizerank"], 18, 5, 12],
                    17,
                    ["step", ["get", "sizerank"], 18, 13, 12]
                ],
                "text-max-angle": 30,
                "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]],
                "text-font": ["Overpass Black", "Arial Unicode MS Regular"],
                "symbol-placement": "line-center",
                "text-pitch-alignment": "viewport"
            },
            "paint": {
                "text-halo-width": 0.5,
                "text-halo-color": "rgb(34, 32, 32)",
                "text-halo-blur": 0.5,
                "text-color": "rgb(194, 190, 190)",
                "text-opacity": 0
            }
        },
        {
            "id": "natural-point-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "natural-features",
                "mapbox:group": "Natural features, natural-labels"
            },
            "source": "composite",
            "source-layer": "natural_label",
            "minzoom": 4,
            "filter": [
                "all",
                [
                    "match",
                    ["get", "class"],
                    ["dock", "glacier", "landform", "water_feature", "wetland"],
                    ["match", ["get", "worldview"], ["all", "US"], true, false],
                    [
                        "disputed_dock",
                        "disputed_glacier",
                        "disputed_landform",
                        "disputed_water_feature",
                        "disputed_wetland"
                    ],
                    [
                        "all",
                        ["==", ["get", "disputed"], "true"],
                        [
                            "match",
                            ["get", "worldview"],
                            ["all", "US"],
                            true,
                            false
                        ]
                    ],
                    false
                ],
                ["==", ["geometry-type"], "Point"],
                ["<=", ["get", "filterrank"], 4]
            ],
            "layout": {
                "text-size": [
                    "step",
                    ["zoom"],
                    ["step", ["get", "sizerank"], 18, 5, 12],
                    17,
                    ["step", ["get", "sizerank"], 18, 13, 12]
                ],
                "icon-image": "",
                "text-font": ["Overpass Black", "Arial Unicode MS Regular"],
                "text-offset": ["literal", [0, 0]],
                "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]]
            },
            "paint": {
                "icon-opacity": [
                    "step",
                    ["zoom"],
                    ["step", ["get", "sizerank"], 0, 5, 1],
                    17,
                    ["step", ["get", "sizerank"], 0, 13, 1]
                ],
                "text-halo-color": "rgb(34, 32, 32)",
                "text-halo-width": 0.5,
                "text-halo-blur": 0.5,
                "text-color": "rgb(194, 190, 190)",
                "text-opacity": 0
            }
        },
        {
            "id": "water-line-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "natural-features",
                "mapbox:group": "Natural features, natural-labels"
            },
            "source": "composite",
            "source-layer": "natural_label",
            "filter": [
                "all",
                [
                    "match",
                    ["get", "class"],
                    ["bay", "ocean", "reservoir", "sea", "water"],
                    ["match", ["get", "worldview"], ["all", "US"], true, false],
                    [
                        "disputed_bay",
                        "disputed_ocean",
                        "disputed_reservoir",
                        "disputed_sea",
                        "disputed_water"
                    ],
                    [
                        "all",
                        ["==", ["get", "disputed"], "true"],
                        [
                            "match",
                            ["get", "worldview"],
                            ["all", "US"],
                            true,
                            false
                        ]
                    ],
                    false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "text-size": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    7,
                    ["step", ["get", "sizerank"], 24, 6, 18, 12, 12],
                    10,
                    ["step", ["get", "sizerank"], 18, 9, 12],
                    18,
                    ["step", ["get", "sizerank"], 18, 9, 16]
                ],
                "text-max-angle": 30,
                "text-letter-spacing": [
                    "match",
                    ["get", "class"],
                    "ocean",
                    0.25,
                    ["sea", "bay"],
                    0.15,
                    0
                ],
                "text-font": ["DIN Pro Italic", "Arial Unicode MS Regular"],
                "symbol-placement": "line-center",
                "text-pitch-alignment": "viewport",
                "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]]
            },
            "paint": {"text-color": "rgb(117, 108, 108)"}
        },
        {
            "id": "water-point-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "natural-features",
                "mapbox:group": "Natural features, natural-labels"
            },
            "source": "composite",
            "source-layer": "natural_label",
            "filter": [
                "all",
                [
                    "match",
                    ["get", "class"],
                    ["bay", "ocean", "reservoir", "sea", "water"],
                    ["match", ["get", "worldview"], ["all", "US"], true, false],
                    [
                        "disputed_bay",
                        "disputed_ocean",
                        "disputed_reservoir",
                        "disputed_sea",
                        "disputed_water"
                    ],
                    [
                        "all",
                        ["==", ["get", "disputed"], "true"],
                        [
                            "match",
                            ["get", "worldview"],
                            ["all", "US"],
                            true,
                            false
                        ]
                    ],
                    false
                ],
                ["==", ["geometry-type"], "Point"]
            ],
            "layout": {
                "text-line-height": 1.3,
                "text-size": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    7,
                    ["step", ["get", "sizerank"], 24, 6, 18, 12, 12],
                    10,
                    ["step", ["get", "sizerank"], 18, 9, 12]
                ],
                "text-font": ["DIN Pro Italic", "Arial Unicode MS Regular"],
                "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]],
                "text-letter-spacing": [
                    "match",
                    ["get", "class"],
                    "ocean",
                    0.25,
                    ["bay", "sea"],
                    0.15,
                    0.01
                ],
                "text-max-width": [
                    "match",
                    ["get", "class"],
                    "ocean",
                    4,
                    "sea",
                    5,
                    ["bay", "water"],
                    7,
                    10
                ]
            },
            "paint": {"text-color": "rgb(117, 108, 108)", "text-opacity": 0}
        },
        {
            "id": "poi-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "point-of-interest-labels",
                "mapbox:group": "Point of interest labels, poi-labels"
            },
            "source": "composite",
            "source-layer": "poi_label",
            "minzoom": 6,
            "filter": [
                "<=",
                ["get", "filterrank"],
                ["+", ["step", ["zoom"], 0, 16, 1, 17, 2], 1]
            ],
            "layout": {
                "text-size": [
                    "step",
                    ["zoom"],
                    ["step", ["get", "sizerank"], 18, 5, 12],
                    17,
                    ["step", ["get", "sizerank"], 18, 13, 12]
                ],
                "icon-image": "",
                "text-font": ["Overpass Black", "Arial Unicode MS Regular"],
                "text-offset": [0, 0],
                "text-anchor": [
                    "step",
                    ["zoom"],
                    ["step", ["get", "sizerank"], "center", 5, "top"],
                    17,
                    ["step", ["get", "sizerank"], "center", 13, "top"]
                ],
                "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]]
            },
            "paint": {
                "text-halo-color": "rgb(34, 32, 32)",
                "text-halo-width": 0.5,
                "text-halo-blur": 0.5,
                "text-color": [
                    "step",
                    ["zoom"],
                    [
                        "step",
                        ["get", "sizerank"],
                        "rgb(125, 116, 116)",
                        5,
                        "rgb(163, 155, 155)"
                    ],
                    17,
                    [
                        "step",
                        ["get", "sizerank"],
                        "rgb(125, 116, 116)",
                        13,
                        "rgb(163, 155, 155)"
                    ]
                ]
            }
        },
        {
            "id": "airport-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "transit",
                "mapbox:group": "Transit, transit-labels"
            },
            "source": "composite",
            "source-layer": "airport_label",
            "minzoom": 8,
            "filter": [
                "match",
                ["get", "class"],
                ["military", "civil"],
                ["match", ["get", "worldview"], ["all", "US"], true, false],
                ["disputed_military", "disputed_civil"],
                [
                    "all",
                    ["==", ["get", "disputed"], "true"],
                    ["match", ["get", "worldview"], ["all", "US"], true, false]
                ],
                false
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": ["step", ["get", "sizerank"], 18, 9, 12],
                "icon-image": [
                    "step",
                    ["get", "sizerank"],
                    ["concat", ["get", "maki"], "-15"],
                    9,
                    ["concat", ["get", "maki"], "-11"]
                ],
                "text-font": ["Overpass Black", "Arial Unicode MS Regular"],
                "text-offset": [0, 0.75],
                "text-rotation-alignment": "viewport",
                "text-anchor": "top",
                "text-field": [
                    "step",
                    ["get", "sizerank"],
                    ["coalesce", ["get", "name_en"], ["get", "name"]],
                    15,
                    ["get", "ref"]
                ],
                "text-letter-spacing": 0.01,
                "text-max-width": 9
            },
            "paint": {
                "text-color": "rgb(43, 10, 230)",
                "text-halo-color": "rgb(255, 255, 255)",
                "text-halo-width": 1,
                "text-opacity": 0
            }
        },
        {
            "id": "settlement-subdivision-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "place-labels",
                "mapbox:group": "Place labels, place-labels"
            },
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 10,
            "maxzoom": 15,
            "filter": [
                "all",
                [
                    "match",
                    ["get", "class"],
                    "settlement_subdivision",
                    ["match", ["get", "worldview"], ["all", "US"], true, false],
                    "disputed_settlement_subdivision",
                    [
                        "all",
                        ["==", ["get", "disputed"], "true"],
                        [
                            "match",
                            ["get", "worldview"],
                            ["all", "US"],
                            true,
                            false
                        ]
                    ],
                    false
                ],
                ["<=", ["get", "filterrank"], 4]
            ],
            "layout": {
                "text-field": [
                    "coalesce",
                    ["get", "name_zh-Hant"],
                    ["get", "name"]
                ],
                "text-transform": "uppercase",
                "text-font": ["DIN Pro Regular", "Arial Unicode MS Regular"],
                "text-letter-spacing": [
                    "match",
                    ["get", "type"],
                    "suburb",
                    0.15,
                    0.1
                ],
                "text-max-width": 7,
                "text-padding": 3,
                "text-size": [
                    "interpolate",
                    ["cubic-bezier", 0.5, 0, 1, 1],
                    ["zoom"],
                    11,
                    ["match", ["get", "type"], "suburb", 11, 10.5],
                    15,
                    ["match", ["get", "type"], "suburb", 17, 16]
                ]
            },
            "paint": {
                "text-halo-color": "rgb(34, 32, 32)",
                "text-halo-width": 1,
                "text-color": "rgb(165, 158, 158)",
                "text-halo-blur": 0.5,
                "text-opacity": 0
            }
        },
        {
            "id": "settlement-minor-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "place-labels",
                "mapbox:group": "Place labels, place-labels"
            },
            "source": "composite",
            "source-layer": "place_label",
            "maxzoom": 15,
            "filter": [
                "all",
                ["<=", ["get", "filterrank"], 3],
                [
                    "match",
                    ["get", "class"],
                    "settlement",
                    ["match", ["get", "worldview"], ["all", "US"], true, false],
                    "disputed_settlement",
                    [
                        "all",
                        ["==", ["get", "disputed"], "true"],
                        [
                            "match",
                            ["get", "worldview"],
                            ["all", "US"],
                            true,
                            false
                        ]
                    ],
                    false
                ],
                [
                    "step",
                    ["zoom"],
                    true,
                    8,
                    [">=", ["get", "symbolrank"], 11],
                    10,
                    [">=", ["get", "symbolrank"], 12],
                    11,
                    [">=", ["get", "symbolrank"], 13],
                    12,
                    [">=", ["get", "symbolrank"], 15],
                    13,
                    [">=", ["get", "symbolrank"], 11],
                    14,
                    [">=", ["get", "symbolrank"], 13]
                ]
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": [
                    "interpolate",
                    ["cubic-bezier", 0.2, 0, 0.9, 1],
                    ["zoom"],
                    3,
                    [
                        "step",
                        ["get", "symbolrank"],
                        15.600000000000001,
                        9,
                        14.3,
                        10,
                        13.65,
                        12,
                        12.35,
                        14,
                        11.05,
                        16,
                        8.450000000000001,
                        17,
                        5.2
                    ],
                    13,
                    [
                        "step",
                        ["get", "symbolrank"],
                        32.5,
                        9,
                        29.900000000000002,
                        10,
                        27.3,
                        11,
                        24.7,
                        12,
                        23.400000000000002,
                        13,
                        22.1,
                        15,
                        19.5
                    ]
                ],
                "icon-image": [
                    "step",
                    ["zoom"],
                    [
                        "case",
                        ["==", ["get", "capital"], 2],
                        "border-dot-13",
                        [
                            "step",
                            ["get", "symbolrank"],
                            "dot-11",
                            9,
                            "dot-10",
                            11,
                            "dot-9"
                        ]
                    ],
                    8,
                    ""
                ],
                "text-font": ["DIN Pro Regular", "Arial Unicode MS Regular"],
                "text-justify": [
                    "step",
                    ["zoom"],
                    [
                        "match",
                        ["get", "text_anchor"],
                        ["left", "bottom-left", "top-left"],
                        "left",
                        ["right", "bottom-right", "top-right"],
                        "right",
                        "center"
                    ],
                    8,
                    "center"
                ],
                "text-offset": [
                    "step",
                    ["zoom"],
                    [
                        "match",
                        ["get", "capital"],
                        2,
                        [
                            "match",
                            ["get", "text_anchor"],
                            "bottom",
                            ["literal", [0, -0.3]],
                            "bottom-left",
                            ["literal", [0.3, -0.1]],
                            "left",
                            ["literal", [0.45, 0.1]],
                            "top-left",
                            ["literal", [0.3, 0.1]],
                            "top",
                            ["literal", [0, 0.3]],
                            "top-right",
                            ["literal", [-0.3, 0.1]],
                            "right",
                            ["literal", [-0.45, 0]],
                            "bottom-right",
                            ["literal", [-0.3, -0.1]],
                            ["literal", [0, -0.3]]
                        ],
                        [
                            "match",
                            ["get", "text_anchor"],
                            "bottom",
                            ["literal", [0, -0.25]],
                            "bottom-left",
                            ["literal", [0.2, -0.05]],
                            "left",
                            ["literal", [0.4, 0.05]],
                            "top-left",
                            ["literal", [0.2, 0.05]],
                            "top",
                            ["literal", [0, 0.25]],
                            "top-right",
                            ["literal", [-0.2, 0.05]],
                            "right",
                            ["literal", [-0.4, 0.05]],
                            "bottom-right",
                            ["literal", [-0.2, -0.05]],
                            ["literal", [0, -0.25]]
                        ]
                    ],
                    8,
                    ["literal", [0, 0]]
                ],
                "text-anchor": [
                    "step",
                    ["zoom"],
                    ["get", "text_anchor"],
                    8,
                    "center"
                ],
                "text-field": [
                    "coalesce",
                    ["get", "name_zh-Hant"],
                    ["get", "name"]
                ],
                "text-max-width": 7
            },
            "paint": {
                "text-color": [
                    "step",
                    ["get", "symbolrank"],
                    "rgb(194, 190, 190)",
                    11,
                    "rgb(163, 155, 155)",
                    16,
                    "rgb(148, 139, 139)"
                ],
                "text-halo-color": "rgb(34, 32, 32)",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-opacity": 0
            }
        },
        {
            "id": "settlement-major-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "place-labels",
                "mapbox:group": "Place labels, place-labels"
            },
            "source": "composite",
            "source-layer": "place_label",
            "maxzoom": 15,
            "filter": [
                "all",
                ["<=", ["get", "filterrank"], 3],
                [
                    "match",
                    ["get", "class"],
                    "settlement",
                    ["match", ["get", "worldview"], ["all", "US"], true, false],
                    "disputed_settlement",
                    [
                        "all",
                        ["==", ["get", "disputed"], "true"],
                        [
                            "match",
                            ["get", "worldview"],
                            ["all", "US"],
                            true,
                            false
                        ]
                    ],
                    false
                ],
                [
                    "step",
                    ["zoom"],
                    false,
                    8,
                    ["<", ["get", "symbolrank"], 11],
                    10,
                    ["<", ["get", "symbolrank"], 12],
                    11,
                    ["<", ["get", "symbolrank"], 13],
                    12,
                    ["<", ["get", "symbolrank"], 15],
                    13,
                    [">=", ["get", "symbolrank"], 11],
                    14,
                    [">=", ["get", "symbolrank"], 13]
                ]
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": [
                    "interpolate",
                    ["cubic-bezier", 0.2, 0, 0.9, 1],
                    ["zoom"],
                    8,
                    ["step", ["get", "symbolrank"], 36, 9, 34, 10, 30],
                    15,
                    [
                        "step",
                        ["get", "symbolrank"],
                        56,
                        9,
                        52,
                        10,
                        46,
                        11,
                        42,
                        12,
                        40,
                        13,
                        38,
                        15,
                        32
                    ]
                ],
                "icon-image": [
                    "step",
                    ["zoom"],
                    [
                        "case",
                        ["==", ["get", "capital"], 2],
                        "border-dot-13",
                        [
                            "step",
                            ["get", "symbolrank"],
                            "dot-11",
                            9,
                            "dot-10",
                            11,
                            "dot-9"
                        ]
                    ],
                    8,
                    ""
                ],
                "text-font": ["DIN Pro Bold", "Arial Unicode MS Regular"],
                "text-justify": [
                    "step",
                    ["zoom"],
                    [
                        "match",
                        ["get", "text_anchor"],
                        ["left", "bottom-left", "top-left"],
                        "left",
                        ["right", "bottom-right", "top-right"],
                        "right",
                        "center"
                    ],
                    8,
                    "center"
                ],
                "text-offset": [
                    "step",
                    ["zoom"],
                    [
                        "match",
                        ["get", "capital"],
                        2,
                        [
                            "match",
                            ["get", "text_anchor"],
                            "bottom",
                            ["literal", [0, -0.3]],
                            "bottom-left",
                            ["literal", [0.3, -0.1]],
                            "left",
                            ["literal", [0.45, 0.1]],
                            "top-left",
                            ["literal", [0.3, 0.1]],
                            "top",
                            ["literal", [0, 0.3]],
                            "top-right",
                            ["literal", [-0.3, 0.1]],
                            "right",
                            ["literal", [-0.45, 0]],
                            "bottom-right",
                            ["literal", [-0.3, -0.1]],
                            ["literal", [0, -0.3]]
                        ],
                        [
                            "match",
                            ["get", "text_anchor"],
                            "bottom",
                            ["literal", [0, -0.25]],
                            "bottom-left",
                            ["literal", [0.2, -0.05]],
                            "left",
                            ["literal", [0.4, 0.05]],
                            "top-left",
                            ["literal", [0.2, 0.05]],
                            "top",
                            ["literal", [0, 0.25]],
                            "top-right",
                            ["literal", [-0.2, 0.05]],
                            "right",
                            ["literal", [-0.4, 0.05]],
                            "bottom-right",
                            ["literal", [-0.2, -0.05]],
                            ["literal", [0, -0.25]]
                        ]
                    ],
                    8,
                    ["literal", [0, 0]]
                ],
                "text-anchor": [
                    "step",
                    ["zoom"],
                    ["get", "text_anchor"],
                    8,
                    "center"
                ],
                "text-field": [
                    "coalesce",
                    ["get", "name_zh-Hant"],
                    ["get", "name"]
                ],
                "text-max-width": 7
            },
            "paint": {
                "text-color": [
                    "step",
                    ["get", "symbolrank"],
                    "rgb(194, 190, 190)",
                    11,
                    "rgb(163, 155, 155)",
                    16,
                    "rgb(148, 139, 139)"
                ],
                "text-halo-color": "rgb(34, 32, 32)",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-opacity": 0
            }
        },
        {
            "id": "state-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "place-labels",
                "mapbox:group": "Place labels, place-labels"
            },
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 3,
            "maxzoom": 9,
            "filter": [
                "match",
                ["get", "class"],
                "state",
                ["match", ["get", "worldview"], ["all", "US"], true, false],
                "disputed_state",
                [
                    "all",
                    ["==", ["get", "disputed"], "true"],
                    ["match", ["get", "worldview"], ["all", "US"], true, false]
                ],
                false
            ],
            "layout": {
                "text-size": [
                    "interpolate",
                    ["cubic-bezier", 0.85, 0.7, 0.65, 1],
                    ["zoom"],
                    4,
                    ["step", ["get", "symbolrank"], 10, 6, 9.5, 7, 9],
                    9,
                    ["step", ["get", "symbolrank"], 24, 6, 18, 7, 14]
                ],
                "text-transform": "uppercase",
                "text-font": ["DIN Pro Bold", "Arial Unicode MS Bold"],
                "text-field": [
                    "coalesce",
                    ["get", "name_zh-Hant"],
                    ["get", "name"]
                ],
                "text-letter-spacing": 0.15,
                "text-max-width": 6
            },
            "paint": {
                "text-color": "rgb(125, 116, 116)",
                "text-halo-color": "rgb(34, 32, 32)",
                "text-halo-width": 1
            }
        },
        {
            "id": "country-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "place-labels",
                "mapbox:group": "Place labels, place-labels"
            },
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 1,
            "maxzoom": 10,
            "filter": [
                "match",
                ["get", "class"],
                "country",
                ["match", ["get", "worldview"], ["all", "US"], true, false],
                "disputed_country",
                [
                    "all",
                    ["==", ["get", "disputed"], "true"],
                    ["match", ["get", "worldview"], ["all", "US"], true, false]
                ],
                false
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": [
                    "interpolate",
                    ["cubic-bezier", 0.2, 0, 0.7, 1],
                    ["zoom"],
                    1,
                    ["step", ["get", "symbolrank"], 11, 4, 9, 5, 8],
                    9,
                    ["step", ["get", "symbolrank"], 28, 4, 22, 5, 21]
                ],
                "icon-image": ["step", ["zoom"], "dot-11", 7, ""],
                "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"],
                "text-justify": [
                    "step",
                    ["zoom"],
                    [
                        "match",
                        ["get", "text_anchor"],
                        ["left", "bottom-left", "top-left"],
                        "left",
                        ["right", "bottom-right", "top-right"],
                        "right",
                        "center"
                    ],
                    7,
                    "center"
                ],
                "text-offset": [
                    "step",
                    ["zoom"],
                    [
                        "match",
                        ["get", "text_anchor"],
                        "bottom",
                        ["literal", [0, -0.25]],
                        "bottom-left",
                        ["literal", [0.2, -0.05]],
                        "left",
                        ["literal", [0.4, 0.05]],
                        "top-left",
                        ["literal", [0.2, 0.05]],
                        "top",
                        ["literal", [0, 0.25]],
                        "top-right",
                        ["literal", [-0.2, 0.05]],
                        "right",
                        ["literal", [-0.4, 0.05]],
                        "bottom-right",
                        ["literal", [-0.2, -0.05]],
                        ["literal", [0, -0.25]]
                    ],
                    7,
                    ["literal", [0, 0]]
                ],
                "text-anchor": [
                    "step",
                    ["zoom"],
                    ["coalesce", ["get", "text_anchor"], "bottom"],
                    7,
                    "center"
                ],
                "text-field": [
                    "coalesce",
                    ["get", "name_zh-Hant"],
                    ["get", "name"]
                ],
                "text-max-width": 6
            },
            "paint": {
                "text-color": "rgb(129, 119, 119)",
                "text-halo-color": "rgb(34, 32, 32)",
                "text-halo-width": 1.25
            }
        },
        {
            "id": "ming-an-chen",
            "type": "fill-extrusion",
            "source": "composite",
            "source-layer": "MING-AN_CHEN",
            "layout": {"fill-extrusion-edge-radius": 0.7},
            "paint": {
                "fill-extrusion-height": 150,
                "fill-extrusion-color": "rgb(18, 34, 211)",
                "fill-extrusion-vertical-gradient": false,
                "fill-extrusion-opacity": 0.49
            }
        }
    ],
    "created": "2024-01-03T11:21:59.041Z",
    "modified": "2024-01-03T14:41:10.972Z",
    "id": "clqxoutc0006f01pma0c9hsb6",
    "owner": "andychenming",
    "visibility": "private",
    "protected": false,
    "draft": false
}