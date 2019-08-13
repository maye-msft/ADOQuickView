var scenarios = {
    "entities": [
        {
            "name": "SCADA",
            "keywords": "SCADA"
        },
        {
            "name": "OPC Unified Architecture",
            "keywords": "OPC Unified Architecture\nOPC UA"
        },
        {
            "name": "Overall equipment effectiveness",
            "keywords": "Overall equipment effectiveness\nOEE"
        },
        {
            "name": "Remote terminal unit",
            "keywords": "Remote terminal unit\nRTU"
        },
        {
            "name": "Programmable logic controller",
            "keywords": "Programmable logic controller\nPLC"
        },
        {
            "name": "Manufacturing execution system",
            "keywords": "Manufacturing execution system\nMES"
        },
        {
            "name": "Predictive Maintenance",
            "keywords": "Predictive Maintenance\n"
        },
        {
            "name": "Anomaly",
            "keywords": "Anomaly\nAbnormal"
        },
        {
            "name": "machine learning",
            "keywords": "machine learning\nAI technologies\ncognitive"
        },
        {
            "name": "maintenance solution",
            "keywords": "maintenance solution"
        },
        {
            "name": "quality",
            "keywords": "quality\nservice engineers\nrepair service"
        },
        {
            "name": "alert",
            "keywords": "alert\nerror\nalarm"
        },
        {
            "name": "Vision",
            "keywords": "vision\nphoto\noptimally\ncustom vision\nMachine Vision\nPhotograph\nCamera\nVideo\nOptimal maintenance"
        },
        {
            "name": "Mixed reality",
            "keywords": "Mixed reality\nHoloLens"
        },
        {
            "name": "monitoring",
            "keywords": "monitoring\ndetection"
        },
        {
            "name": "Safety",
            "keywords": "Safety\nintelligent security"
        },
        {
            "name": "factory",
            "keywords": "factory\nplant\nworkplace"
        },
        {
            "name": "face recognition",
            "keywords": "face recognition"
        },
        {
            "name": "Chatbot",
            "keywords": "Speech recognition\nChatbot\nInternet bot\nVirtual assistant\nLUIS\nspeech\nchatbot\nbot platform\nbot framework"
        },
        {
            "name": "logistic",
            "keywords": "warehouse\nlogistic\ninventory\nrouting"
        },
        {
            "name": "MQTT",
            "keywords": "MQTT"
        },
        {
            "name": "Robotics",
            "keywords": "Robotics"
        },
        {
            "name": "Open Hack",
            "keywords": "open hack\nopenhack"
        },
        {
            "name": "migrate",
            "keywords": "migrate\nmigration"
        },
        {
            "name": "supply chain",
            "keywords": "supply chain"
        },
        {
            "name": "Semiconductor",
            "keywords": "Semiconductor\nchip design"
        },
        {
            "name": "optimization",
            "keywords": "optimization"
        }
    ],
    "categories": [
        {
            "name": "Connected Factory",
            "rules": [
                {
                    "name": "Rule",
                    "primaryobjects": [
                        {
                            "name": "SCADA",
                            "keywords": "SCADA"
                        },
                        {
                            "name": "OPC Unified Architecture",
                            "keywords": "OPC Unified Architecture\nOPC UA"
                        },
                        {
                            "name": "Overall equipment effectiveness",
                            "keywords": "Overall equipment effectiveness\nOEE"
                        },
                        {
                            "name": "Remote terminal unit",
                            "keywords": "Remote terminal unit\nRTU"
                        },
                        {
                            "name": "Programmable logic controller",
                            "keywords": "Programmable logic controller\nPLC"
                        },
                        {
                            "name": "Manufacturing execution system",
                            "keywords": "Manufacturing execution system\nMES"
                        },
                        {
                            "name": "MQTT",
                            "keywords": "MQTT"
                        },
                        {
                            "name": "Robotics",
                            "keywords": "Robotics"
                        }
                    ],
                    "secondaryobjects": []
                }
            ]
        },
        {
            "name": "Predictive Maintenance",
            "rules": [
                {
                    "name": "Rule",
                    "primaryobjects": [
                        {
                            "name": "machine learning",
                            "keywords": "machine learning"
                        }
                    ],
                    "secondaryobjects": [
                        {
                            "name": "maintenance solution",
                            "keywords": "maintenance solution"
                        }
                    ]
                },
                {
                    "name": "Rule",
                    "primaryobjects": [
                        {
                            "name": "Predictive Maintenance",
                            "keywords": "Predictive Maintenance\n"
                        }
                    ],
                    "secondaryobjects": []
                },
                {
                    "name": "Rule",
                    "primaryobjects": [
                        {
                            "name": "Anomaly",
                            "keywords": "Anomaly\nAbnormal"
                        }
                    ],
                    "secondaryobjects": [
                        {
                            "name": "monitoring",
                            "keywords": "monitoring\ndetection"
                        },
                        {
                            "name": "alert",
                            "keywords": "alert\nerror\nalarm"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Cognitive Quality",
            "rules": [
                {
                    "name": "Rule",
                    "primaryobjects": [
                        {
                            "name": "quality",
                            "keywords": "quality\nservice engineers\nrepair service"
                        },
                        {
                            "name": "Vision",
                            "keywords": "vision\nphoto\noptimally\ncustom vision\nMachine Vision\nPhotograph\nCamera\nVideo\nOptimal maintenance"
                        }
                    ],
                    "secondaryobjects": [
                        {
                            "name": "machine learning",
                            "keywords": "machine learning\nAI technologies\ncognitive"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Mixed Reality",
            "rules": [
                {
                    "name": "Rule",
                    "primaryobjects": [
                        {
                            "name": "Mixed reality",
                            "keywords": "Mixed reality\nHoloLens"
                        }
                    ],
                    "secondaryobjects": []
                }
            ]
        },
        {
            "name": "Service Bot",
            "rules": [
                {
                    "name": "Rule",
                    "primaryobjects": [
                        {
                            "name": "Chatbot",
                            "keywords": "Speech recognition\nChatbot\nInternet bot\nVirtual assistant\nLUIS\nspeech\nchatbot\nbot platform\nbot framework"
                        }
                    ],
                    "secondaryobjects": []
                }
            ]
        },
        {
            "name": "Healthy & Safety",
            "rules": [
                {
                    "name": "Rule",
                    "primaryobjects": [
                        {
                            "name": "Safety",
                            "keywords": "Safety\nintelligent security"
                        }
                    ],
                    "secondaryobjects": [
                        {
                            "name": "factory",
                            "keywords": "factory\nplant\nworkplace"
                        },
                        {
                            "name": "logistic",
                            "keywords": "warehouse\nlogistic\ninventory\nrouting"
                        }
                    ]
                },
                {
                    "name": "Rule",
                    "primaryobjects": [
                        {
                            "name": "face recognition",
                            "keywords": "face recognition"
                        }
                    ],
                    "secondaryobjects": [
                        {
                            "name": "logistic",
                            "keywords": "warehouse\nlogistic\ninventory\nrouting"
                        },
                        {
                            "name": "factory",
                            "keywords": "factory\nplant\nworkplace"
                        }
                    ]
                },
                {
                    "name": "Rule",
                    "primaryobjects": [
                        {
                            "name": "Safety",
                            "keywords": "Safety\nintelligent security"
                        }
                    ],
                    "secondaryobjects": [
                        {
                            "name": "monitoring",
                            "keywords": "monitoring\ndetection"
                        },
                        {
                            "name": "Vision",
                            "keywords": "vision\nphoto\noptimally\ncustom vision\nMachine Vision\nPhotograph\nCamera\nVideo\nOptimal maintenance"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Openhack",
            "rules": [
                {
                    "name": "Rule",
                    "primaryobjects": [
                        {
                            "name": "Open Hack",
                            "keywords": "open hack\nopenhack"
                        }
                    ],
                    "secondaryobjects": []
                }
            ]
        },
        {
            "name": "Migration",
            "rules": [
                {
                    "name": "Rule",
                    "primaryobjects": [
                        {
                            "name": "migrate",
                            "keywords": "migrate\nmigration"
                        }
                    ],
                    "secondaryobjects": []
                }
            ]
        },
        {
            "name": "Supply Chain",
            "rules": [
                {
                    "name": "Rule",
                    "primaryobjects": [
                        {
                            "name": "supply chain",
                            "keywords": "supply chain"
                        }
                    ],
                    "secondaryobjects": []
                }
            ]
        },
        {
            "name": "Semiconductor ",
            "rules": [
                {
                    "name": "Rule",
                    "primaryobjects": [
                        {
                            "name": "Semiconductor",
                            "keywords": "Semiconductor\nchip design"
                        }
                    ],
                    "secondaryobjects": []
                }
            ]
        }
    ]
}