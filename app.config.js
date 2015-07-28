/**
 * This file/module contains all configuration for the themes.
 */
module.exports = {
    /**
     * The `build_dir` folder is where our projects are compiled during
     * development and the `compile_dir` folder is where our app resides once it's
     * completely built.
     */
    ngconstant: {
        // Options for all targets
        options: {
            name: "config",
            dest: "src/app/config.js",
            constants: {
                global: {
                    gitrepo: "https://github.com/shawnaparadee/pmt-test"
                }
            }
        },
        // theme targets
        spatialdev: {
            constants: {
                config: {
                    theme: {
                        alias: "spatialdev",
                        name: "Spatial Development International, LLC",
                        url: "http://www.spatialdev.com"
                    },
                    links: {
                        socialmedia: {
                            google: "http://plus.google.com/112965145498262825170",
                            linkedin: "http://linkedin.com/spatial-development-international",
                            github: "http://github.com/spatialdev",
                            twitter: "http://www.twitter.com/spatialdev"
                        }
                    },
                    login: {
                        title: "The Portfolio Mapping Tool (PMT)",
                        subtitle: "Login here to the Portfolio Managment Tool (PMT). This is an AngularJS application, using a modular framework approach."
                    },
                    about: {
                        info: {
                            enable: true
                        },
                        map: {
                            enable: true,
                            location: {
                                lat: 47.60,
                                lng: -122.33,
                                zoom: 12
                            }
                        },
                        linechart: {
                            enable: true,
                            labels: ["2010", "2011", "2012", "2013", "2014"],
                            series: ["Staff", "Projects", "Countries"],
                            data: [[2, 4, 8, 12, 16], [2, 8, 9, 12, 18], [1, 3, 6, 8, 12]]
                        }
                    }
                }
            }
        },
        bmgf: {
            constants: {
                config: {
                    theme: {
                        alias: "bmgf",
                        name: "Bill & Melinda Gates Foundation",
                        url: "http://www.gatesfoundation.org/"
                    },
                    links: {
                        socialmedia: {
                            google: "http://plus.google.com/explore/GatesFoundation",
                            linkedin: "http://www.linkedin.com/company/bill-&-melinda-gates-foundation",
                            github: "",
                            twitter: "http://www.twitter.com/gatesfoundation"
                        }
                    },
                    login: {
                        title: "Welcome to the BMGF Portfolio Mapping Tool (PMT)!",
                        subtitle: "By logging into this demo site you are reaffirming your acceptance of the previously acknowledged terms of use."
                    },
                    about: {
                        info: {
                            enable: true
                        },
                        map: {
                            enable: true,
                            location: {
                                lat: 0.35,
                                lng: 26.28,
                                zoom: 4
                            }
                        },
                        linechart: {
                            enable: true,
                            labels: ["Cassava", "Legumes", "Maize", "Rice", "Sorghum", "Sweet Potato", "Wheat", "Yams", "Millet"],
                            series: ["AGRA", "BMGF"],
                            data: [[0, 5, 8, 1, 6, 8, 0, 7, 8], [15, 10, 28, 5, 25, 24, 7, 18, 21]],
                            colours: ["#A237AB", "#40AB37", "#C797CD", "#CDAC97", "#FDF25C", "#949FB1", "#4D5360"]
                        }
                    }
                }
            }
        }
    }
};
