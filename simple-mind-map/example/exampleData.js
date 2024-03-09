const createFullData = () => {
  return {
    "image": "/enJFNMHnedQTYTESGfDkctCp2.jpeg",
    "imageTitle": "图片名称",
    "imageSize": {
      "width": 1000,
      "height": 563
    },
    "icon": ['priority_1'],
    "tag": ["标签1", "标签2"],
    "hyperlink": "http://lxqnsys.com/",
    "hyperlinkTitle": "理想青年实验室",
    "note": "理想青年实验室\n一个有意思的角落",
    // 自定义位置
    // "customLeft": 1318,
    // "customTop": 374.5
  };
}

/** 
 * @Author: 王林 
 * @Date: 2021-04-15 22:23:24 
 * @Desc: 节点较多示例数据 
 */
const data1 = {
  "root": {
    "data": {
      "text": "根节点"
    },
    "children": [
      {
        "data": {
          "text": "二级节点1",
          "expand": true,
        },
        "children": [{
          "data": {
            "text": "分支主题",
            ...createFullData()
          },
          "children": [{
            "data": {
              "text": "分支主题",
            },
          }, {
            "data": {
              "text": "分支主题",
            },
            "children": [{
              "data": {
                "text": "分支主题",
                ...createFullData()
              },
            }, {
              "data": {
                "text": "分支主题",
              },
            }, {
              "data": {
                "text": "分支主题",
              },
              "children": [{
                "data": {
                  "text": "分支主题",
                },
              }, {
                "data": {
                  "text": "分支主题",
                },
                "children": [{
                  "data": {
                    "text": "分支主题",
                  },
                }, {
                  "data": {
                    "text": "分支主题",
                  },
                  "children": [{
                    "data": {
                      "text": "分支主题",
                    },
                  }, {
                    "data": {
                      "text": "分支主题",
                    },
                    "children": [{
                      "data": {
                        "text": "分支主题",
                      },
                    }, {
                      "data": {
                        "text": "分支主题",
                      },
                    }, {
                      "data": {
                        "text": "分支主题",
                      },
                    }, {
                      "data": {
                        "text": "分支主题",
                      },
                    }]
                  }, {
                    "data": {
                      "text": "分支主题",
                    },
                  }, {
                    "data": {
                      "text": "分支主题",
                    },
                  }]
                }, {
                  "data": {
                    "text": "分支主题",
                  },
                }, {
                  "data": {
                    "text": "分支主题",
                  },
                }]
              }, {
                "data": {
                  "text": "分支主题",
                },
              }, {
                "data": {
                  "text": "分支主题",
                },
              }]
            }, {
              "data": {
                "text": "分支主题",
              },
            }]
          }, {
            "data": {
              "text": "分支主题",
            },
          }, {
            "data": {
              "text": "分支主题",
            },
          }]
        }]
      },
      {
        "data": {
          "text": "二级节点2",
          "expand": true,
        },
        "children": [{
          "data": {
            "text": "分支主题",
          },
        }, {
          "data": {
            "text": "分支主题",
          },
          "children": [{
            "data": {
              "text": "分支主题",
            },
          }, {
            "data": {
              "text": "分支主题",
            },
          }, {
            "data": {
              "text": "分支主题",
            },
          }, {
            "data": {
              "text": "分支主题",
            },
          }]
        }, {
          "data": {
            "text": "分支主题",
          },
        }, {
          "data": {
            "text": "分支主题",
          },
        }]
      },
      {
        "data": {
          "text": "二级节点3",
          "expand": true,
        },
        "children": [{
          "data": {
            "text": "分支主题",
          },
          "children": [{
            "data": {
              "text": "分支主题",
            },
          }, {
            "data": {
              "text": "分支主题",
            },
            "children": [{
              "data": {
                "text": "分支主题",
              },
            }, {
              "data": {
                "text": "分支主题",
              },
            }, {
              "data": {
                "text": "分支主题",
              },
            }, {
              "data": {
                "text": "分支主题",
              },
            }]
          }, {
            "data": {
              "text": "分支主题",
            },
          }, {
            "data": {
              "text": "分支主题",
            },
          }]
        }]
      },
      {
        "data": {
          "text": "二级节点4",
          "expand": true,
        },
        "children": [{
          "data": {
            "text": "分支主题",
          },
          "children": [{
            "data": {
              "text": "分支主题",
            },
            "children": [{
              "data": {
                "text": "分支主题",
              },
              "children": [{
                "data": {
                  "text": "分支主题",
                },
              }, {
                "data": {
                  "text": "分支主题",
                },
              }, {
                "data": {
                  "text": "分支主题",
                },
              }, {
                "data": {
                  "text": "分支主题",
                },
              }]
            }, {
              "data": {
                "text": "分支主题",
              },
            }, {
              "data": {
                "text": "分支主题",
              },
            }, {
              "data": {
                "text": "分支主题",
              },
            }]
          }, {
            "data": {
              "text": "分支主题",
            },
          }, {
            "data": {
              "text": "分支主题",
            },
            "children": [{
              "data": {
                "text": "分支主题",
              },
            }, {
              "data": {
                "text": "分支主题",
              },
            }, {
              "data": {
                "text": "分支主题",
              },
            }, {
              "data": {
                "text": "分支主题",
              },
              "children": [{
                "data": {
                  "text": "分支主题",
                },
                "children": [{
                  "data": {
                    "text": "分支主题",
                  },
                }, {
                  "data": {
                    "text": "分支主题",
                  },
                }, {
                  "data": {
                    "text": "分支主题",
                  },
                }, {
                  "data": {
                    "text": "分支主题",
                  },
                }]
              }, {
                "data": {
                  "text": "分支主题",
                },
                "children": [{
                  "data": {
                    "text": "分支主题",
                  },
                }, {
                  "data": {
                    "text": "分支主题",
                  },
                  "children": [{
                    "data": {
                      "text": "分支主题",
                    },
                  }, {
                    "data": {
                      "text": "分支主题",
                    },
                  }, {
                    "data": {
                      "text": "分支主题",
                    },
                  }, {
                    "data": {
                      "text": "分支主题",
                    },
                  }]
                }, {
                  "data": {
                    "text": "分支主题",
                  },
                }, {
                  "data": {
                    "text": "分支主题",
                  },
                }]
              }, {
                "data": {
                  "text": "分支主题",
                },
              }, {
                "data": {
                  "text": "分支主题",
                },
              }]
            }]
          }, {
            "data": {
              "text": "分支主题",
            },
            "children": [{
              "data": {
                "text": "分支主题",
              },
            }, {
              "data": {
                "text": "分支主题",
              },
              "children": [{
                "data": {
                  "text": "分支主题",
                },
              }, {
                "data": {
                  "text": "分支主题",
                },
                "children": [{
                  "data": {
                    "text": "分支主题",
                  },
                }, {
                  "data": {
                    "text": "分支主题",
                  },
                }, {
                  "data": {
                    "text": "分支主题",
                  },
                }, {
                  "data": {
                    "text": "分支主题",
                  },
                }]
              }, {
                "data": {
                  "text": "分支主题",
                },
              }, {
                "data": {
                  "text": "分支主题",
                },
              }]
            }, {
              "data": {
                "text": "分支主题",
              },
              "children": [{
                "data": {
                  "text": "分支主题",
                },
              }, {
                "data": {
                  "text": "分支主题",
                },
              }, {
                "data": {
                  "text": "分支主题",
                },
              }, {
                "data": {
                  "text": "分支主题",
                },
              }]
            }, {
              "data": {
                "text": "分支主题",
              },
              "children": [{
                "data": {
                  "text": "分支主题",
                },
              }, {
                "data": {
                  "text": "分支主题",
                },
              }, {
                "data": {
                  "text": "分支主题",
                },
              }, {
                "data": {
                  "text": "分支主题",
                },
              }]
            }]
          }]
        }]
      },
    ]
  }
}

/** 
 * javascript comment 
 * @Author: 王林25 
 * @Date: 2021-07-12 13:49:43 
 * @Desc: 真实场景数据 
 */
const data2 = {
  "root": {
    "data": {
      "text": "一周安排"
    },
    "children": [
      {
        "data": {
          "text": "生活"
        },
        "children": [
          {
            "data": {
              "text": "锻炼"
            },
            "children": [
              {
                "data": {
                  "text": "晨跑"
                },
                "children": [
                  {
                    "data": {
                      "text": "7:00-8:00"
                    },
                    "children": []
                  }
                ]
              },
              {
                "data": {
                  "text": "夜跑"
                },
                "children": [
                  {
                    "data": {
                      "text": "20:00-21:00"
                    },
                    "children": []
                  }
                ]
              }
            ]
          },
          {
            "data": {
              "text": "饮食"
            },
            "children": [
              {
                "data": {
                  "text": "早餐"
                },
                "children": [
                  {
                    "data": {
                      "text": "8:30"
                    },
                    "children": []
                  }
                ]
              },
              {
                "data": {
                  "text": "午餐"
                },
                "children": [
                  {
                    "data": {
                      "text": "11:30"
                    },
                    "children": []
                  }
                ]
              },
              {
                "data": {
                  "text": "晚餐"
                },
                "children": [
                  {
                    "data": {
                      "text": "19:00"
                    },
                    "children": []
                  }
                ]
              }
            ]
          },
          {
            "data": {
              "text": "休息"
            },
            "children": [
              {
                "data": {
                  "text": "午休"
                },
                "children": [
                  {
                    "data": {
                      "text": "12:30-13:00"
                    },
                    "children": []
                  }
                ]
              },
              {
                "data": {
                  "text": "晚休"
                },
                "children": [
                  {
                    "data": {
                      "text": "23:00-6:30"
                    },
                    "children": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "data": {
          "text": "工作日\n周一至周五"
        },
        "children": [
          {
            "data": {
              "text": "日常工作"
            },
            "children": [
              {
                "data": {
                  "text": "9:00-18:00"
                },
                "children": []
              }
            ]
          },
          {
            "data": {
              "text": "工作总结"
            },
            "children": [
              {
                "data": {
                  "text": "21:00-22:00"
                },
                "children": []
              }
            ]
          }
        ]
      },
      {
        "data": {
          "text": "学习"
        },
        "children": [
          {
            "data": {
              "text": "工作日"
            },
            "children": [
              {
                "data": {
                  "text": "早间新闻"
                },
                "children": [
                  {
                    "data": {
                      "text": "8:00-8:30"
                    },
                    "children": []
                  }
                ]
              },
              {
                "data": {
                  "text": "阅读"
                },
                "children": [
                  {
                    "data": {
                      "text": "21:00-23:00"
                    },
                    "children": []
                  }
                ]
              }
            ]
          },
          {
            "data": {
              "text": "休息日"
            },
            "children": [
              {
                "data": {
                  "text": "财务管理"
                },
                "children": [
                  {
                    "data": {
                      "text": "9:00-10:30"
                    },
                    "children": []
                  }
                ]
              },
              {
                "data": {
                  "text": "职场技能"
                },
                "children": [
                  {
                    "data": {
                      "text": "14:00-15:30"
                    },
                    "children": []
                  }
                ]
              },
              {
                "data": {
                  "text": "其他书籍"
                },
                "children": [
                  {
                    "data": {
                      "text": "16:00-18:00"
                    },
                    "children": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "data": {
          "text": "休闲娱乐"
        },
        "children": [
          {
            "data": {
              "text": "看电影"
            },
            "children": [
              {
                "data": {
                  "text": "1~2部"
                },
                "children": []
              }
            ]
          },
          {
            "data": {
              "text": "逛街"
            },
            "children": [
              {
                "data": {
                  "text": "1~2次"
                },
                "children": []
              }
            ]
          }
        ]
      }
    ]
  }
}

/** 
 * javascript comment 
 * @Author: 王林25 
 * @Date: 2021-07-12 14:29:10 
 * @Desc: 极简数据 
 */
const data3 = {
  "root": {
    "data": {
      "text": "根节点"
    },
    "children": [
      {
        "data": {
          "text": "二级节点"
        },
        "children": [
          {
            "data": {
              "text": "分支主题"
            },
            "children": []
          },
          {
            "data": {
              "text": "分支主题"
            },
            "children": []
          }
        ]
      }
    ]
  }
}

const data4 = {
  "root": {
    "data": {
      "text": "根节点"
    },
    "children": [
      {
        "data": {
          "text": "二级节点1"
        },
        "children": [
          {
            "data": {
              "text": "子节点1-1"
            },
            "children": []
          },
          {
            "data": {
              "text": "子节点1-2"
            },
            "children": [
              {
                "data": {
                  "text": "子节点1-2-1"
                },
                "children": []
              },
              {
                "data": {
                  "text": "子节点1-2-2"
                },
                "children": []
              },
              {
                "data": {
                  "text": "子节点1-2-3"
                },
                "children": []
              }
            ]
          }
        ]
      },
      {
        "data": {
          "text": "二级节点2"
        },
        "children": [
          {
            "data": {
              "text": "子节点2-1"
            },
            "children": [
              {
                "data": {
                  "text": "子节点2-1-1"
                },
                "children": [
                  {
                    "data": {
                      "text": "子节点2-1-1-1"
                    },
                    "children": []
                  },
                ]
              }
            ]
          },
          {
            "data": {
              "text": "子节点2-2"
            },
            "children": []
          }
        ]
      }
    ]
  }
}

// 带概要
const data5 = {
  "root": {
    "data": {
      "text": "根节点"
    },
    "children": [
      {
        "data": {
          "text": "二级节点",
          "generalization": {
            "text": "概要",
          }
        },
        "children": [
          {
            "data": {
              "text": "分支主题"
            },
            "children": []
          },
          {
            "data": {
              "text": "分支主题"
            },
            "children": []
          }
        ]
      },
    ]
  }
}

// 富文本数据v0.4.0+，需要使用RichText插件才支持富文本编辑
const richTextData = {
  "root": {
    "data": {
      "text": "<a href='http://lxqnsys.com/' target='_blank'>理想去年实验室</a>",
      "richText": true
    },
    "children": []
  }
}

const rootData = {
  "root": {
    "data": {
      "text": "根节点"
    },
    "children": []
  }
}

const data6 = {
  root: {
    "data": {
      "text": "船舶制造"
    },
    "id": "0",
    "uuid": "0e937a55-3e18-4114-b6c0-32aedd3b1ad6",
    "children": [
      {
        "children": [
          {
            "children": [
              {
                "children": [
                  {
                    "children": [],
                    "expand": false,
                    "focused": false,
                    "id": "1693293866093",
                    "label": "船用钢材",
                    "linkId": [],
                    "newNode": true,
                    "pid": "1693293857885",
                    "rules": [],
                    "style": {
                      "background": "#d0ebfa",
                      "color": "#333333"
                    },
                    "uuid": "26a4ed10-6ee0-4c54-8e20-ecec002f4608",
                    "level": 4,
                    "data": {
                      "text": "船用钢材",
                      "lineWidth": 3,
                      "paddingX": 8,
                      "paddingY": 3,
                      "expand": false,
                      "uuid": "26a4ed10-6ee0-4c54-8e20-ecec002f4608"
                    }
                  },
                  {
                    "children": [],
                    "expand": false,
                    "focused": false,
                    "id": "1693293872141",
                    "label": "船用铝材",
                    "linkId": [
                      "38737d0fdfff4c0bf88e92b1d5eef667",
                      "7a14b74fade0574a8790a2fc5cad7cda",
                      "459cfcdd967d101ef591e85622125a91",
                      "6b68fbc0f6c649a86650c0008baba50b",
                      "f639c38bc257bb943c4764d1e8ed45c7",
                      "7e63c29b3819fbfd0438011a98f14584",
                      "4e7b1527cbb1bc21a286c4fe8ae0e548",
                      "fed2cf68100203b17da17a9347447938",
                      "9afe888fe764d9e229a9702597a2b295",
                      "49b4b49e9cb6e5ddb61f3c8564e1f7ea",
                      "c70d949b5c993b2cdd6ace1c61f237f9",
                      "c1f8da72bcaa2fc5bc6748a2d46c5472",
                      "72c10d236c35dc16dc4e0644dfcd42c6",
                      "7992fd442bcf2ef19a825c2e8a711db2",
                      "5ba38da218dfce4198662e26fc3db850",
                      "09cfd1ae44ef76bcf60e55d94f995523",
                      "a1f1ac4db7e6ad7e7b65a68f8a48c483",
                      "cdea3773d8da076d94415af53716059b",
                      "e7dd7a74ef090ea87f9015b63f7b1489",
                      "7856bb82c8b76003fda24b3ab929c4f9",
                      "92f62c16f3c153d66cb656c2749a7607",
                      "23a9e2ed0af1eece7ca65e698e7d6c32",
                      "3c0b3fb5b1a963255422eef5058f63b8",
                      "aae572a4343a8e52bce6dfbd51842840",
                      "6dc5c40434cce5e7fa57e2f1c5a7a2f9",
                      "13803afafc0844b745076fa34fbfaa28",
                      "77fc2cac31fb3022a2ab195ac4bafa30",
                      "24490c3f33f971ac959b946a687aab25",
                      "374eb5741bb3f1e98b1d54e6386924d5",
                      "b642e6bfc8bdd0bb31bde008d50b2377",
                      "f597b77d1f9339c56497f972b355111b",
                      "81a038bb0c23f2d5167f0c625280e877",
                      "9165eec195583b2e0440957bde1f829f",
                      "2fcae8b43d1bb6ca8aeaca941bd3a0ed",
                      "8bf50b4161dc123756c877d66f4a13ab",
                      "2d8f88a5e6d1b13d577e2238b88c7ec2",
                      "697c7b33b4d8d5e453da6205d24f9abb",
                      "4cbb27325445eb81affd4da38f8f323d"
                    ],
                    "newNode": true,
                    "pid": "1693293857885",
                    "rules": [],
                    "style": {
                      "background": "#d0ebfa",
                      "color": "#333333"
                    },
                    "uuid": "73223d36-95f5-4061-9abe-abf643df456b",
                    "level": 4,
                    "data": {
                      "text": "船用铝材",
                      "lineWidth": 3,
                      "paddingX": 8,
                      "paddingY": 3,
                      "expand": false,
                      "uuid": "73223d36-95f5-4061-9abe-abf643df456b"
                    }
                  }
                ],
                "expand": true,
                "focused": false,
                "id": "1693293857885",
                "label": "船舶主体材料",
                "linkId": [],
                "newNode": true,
                "pid": "1693293851829",
                "rules": [],
                "style": {
                  "background": "#d0ebfa",
                  "color": "#333333"
                },
                "uuid": "aedac609-d0e1-407a-b6cf-bff9dc0352e2",
                "level": 3,
                "data": {
                  "text": "船舶主体材料",
                  "lineWidth": 3,
                  "paddingX": 8,
                  "paddingY": 3,
                  "expand": false,
                  "uuid": "aedac609-d0e1-407a-b6cf-bff9dc0352e2"
                }
              }
            ],
            "expand": true,
            "focused": false,
            "id": "1693293851829",
            "label": "船舶原材料",
            "linkId": [],
            "newNode": true,
            "pid": "-1",
            "rules": [],
            "style": {
              "background": "#d0ebfa",
              "color": "#333333"
            },
            "uuid": "31b186e3-f09e-432a-9daa-b550d69bd383",
            "level": 2,
            "data": {
              "text": "船舶原材料",
              "lineWidth": 3,
              "paddingX": 8,
              "paddingY": 3,
              "expand": false,
              "uuid": "31b186e3-f09e-432a-9daa-b550d69bd383"
            }
          },
          {
            "children": [
              {
                "children": [
                  {
                    "children": [],
                    "expand": false,
                    "focused": false,
                    "id": "1693293904349",
                    "label": "船用高性能塑料及树脂",
                    "linkId": [
                      "32f5be22d10097ee4a9d0e2aaada2131",
                      "13aafe017cd2ab5466f54e68d81ee51c",
                      "6aa7f1d0c461ec870d513626aa304a23",
                      "27b7f765ae761a225681a56c15f22c41",
                      "6abd414c42df28dfa68cc2a4d43da7c2",
                      "7adefd3a4fc97afa6ff05d23dab42371",
                      "d7fe2a0513a4bab33f50dd8c42736eb9",
                      "8e59054f1490c1e8ac887f6939a04d34",
                      "02fb1d08ae6e98e84fcdd14b71687c96",
                      "2592601026a8387894ed6cb440aea732",
                      "d9b90b94650170a93266004d9abbb662",
                      "9b2603b5b2cdb8a88f95094f1198476c",
                      "20d30184241fe141ee3efd02a85416af",
                      "7621d6a5491d6b31514b706aa42f6594",
                      "8501fdc0a14272f7f767dfdef225bc8d",
                      "0a2993978df519ca18d97a018f6dd82e",
                      "d8a81dccedfcc5824e4154158a5c2cc9",
                      "e2d0c20b2a6be8ebfc270b98c90a0935",
                      "b5af61d4c5bc22895bf6312706c4f6e2",
                      "c0b2a00657d0df2dc03c9c4e83dc4af8",
                      "1e102dc17558b834991d62f9acf58981",
                      "664826af332a1250403d7f1f809d58d5",
                      "70ba9f3414cea70cc037247535ec0adf",
                      "ada4989d85b8ef0a54edc6f8a88c10fe",
                      "40c2ad3a399619dd54b0f4f4559b4028",
                      "9965497cf1e274f0b895e891d540904c",
                      "8f841558726e89a69a8a7f5ce3b999dd",
                      "b4bb899903b678a63c907b35b4fa0ae4",
                      "0cd8dab4995fbc27cf1018d9c23d7528",
                      "f7431b4135c2dffe05a75c712045b077",
                      "a67f007d2d7bde421f9d7995f15108bf",
                      "00038f6265574bacfb8bda57f1f4eec0",
                      "b01a043c9394f7167f769ae453e454b8",
                      "5dcc52cc1993273aab4da0a09a10d318",
                      "4d91e4de9852b5aabc51a56dd4e26a99",
                      "c510f3a8eea24ea31478375ad49bf723",
                      "66f71c49210c5ea7e5cf976546a28aff",
                      "691f3a52200bcfa6ba2c389be184b7b9",
                      "a96ac6be105a3b605b624366b476506f",
                      "f65d0fce035f2a0b76e2798cd4263804",
                      "defa99a0f8bb736020e8881d8307c9b6",
                      "bb4197f2f1f88754c7e8ccdba8edf39a",
                      "e5924c7dbbc7c699764b1dd823fc43f0",
                      "2b90bfff272c5cfd7e8655fecd0d0974",
                      "a686800aa5724093e10b15fc2d3ae25c",
                      "1992dccc0c2a8a0cfec3c0070c54cee5",
                      "91e03337e97a5e81b043dcf43322647f",
                      "5660e12ff10ced08754bdcc5a887a0f7",
                      "caba774f9e582a489dd8cea6c63bb426",
                      "3ede801b30c49d713db895af4ec3bdc7",
                      "14cc6ba63e94a5bd695418c1442eae85",
                      "12ebca6fc28aabebc0d16bfbc2c484bf",
                      "3a8f50a6c575cd8e223bcd9196b8a0ac",
                      "e013b990460077815514257663df2186",
                      "4309c4b2b46a576a0853b93cfd6bf3f4",
                      "74f0b22aa91a69bda86969164a9e8ea1",
                      "d00212458ceb390044770ad898196e9b",
                      "254ba08c8ce1c1c638ac992bb2b13d58",
                      "40a934b9d871bb99649a58a50f4ba0ce",
                      "8baa1c1faeaa65927cd209680b3a88f1",
                      "3c05cf4402797a00a1981cd323670f8f",
                      "7c4ac0e5e033829b7b30ac9eaa548930",
                      "839a765fa4a6be1c9d236375ec1b18a6",
                      "f352416dde18ac9a14c08a1dcd9ba52b",
                      "9364e67c48d16932e84cfdcaa4743524",
                      "4743094663ee6648268ed413ca88eaf6",
                      "6d8da3c6f6b8c478db7c8c7df01ff7a2",
                      "2f94d28c08d8cbd404e999d47e0dd62e",
                      "0d32d2bad03491ad8d45b45269a04641",
                      "704162200273a2b0586479febb2afcf2",
                      "7789a1d2776c49611b5edfdd12893048",
                      "d34e56f9c726af79cd7de97edd339ffc",
                      "c7b8618bae3cca5f2c36927fd4e4ddef",
                      "56a86edba2dd1d1cbce57478ffb74255",
                      "fc2c510c701832ef6e3958b1253d7e34",
                      "8b0a562da92ae753ea8cb4d9bf84d8b7",
                      "c3e9715fbf2e47b35b488c7cb71f8ef8",
                      "b0168ea825508f855f3531a44e1fb0db",
                      "c209fe32385853f239e96bed0d5733c8",
                      "db40ceb595643efafaca8e7f08748b60",
                      "484c18d4701f2cf329af0bdd6addba79",
                      "fbda35412776c0e7ddbe7f9320aa1052",
                      "69ec5f38d5b26a40dc4b38b3e151d7fa",
                      "bca570f6ba5f3434b37ad203e7f77a8c",
                      "a3a766f5e23419432e49f47a3c06c84d",
                      "bd82c857267908304db6d771b422b9a1",
                      "4debd26c9f485c284af714435329f6d0",
                      "2b2871e9c109153ad26fe936d002b754",
                      "a00c73ee2d8acd2fd0fed8bc5862564a",
                      "290c8cad3b7882c71c43803e0bad087e",
                      "21094d1e63f9fbc27b58dc035ca3026d",
                      "30ae805d65b9206aba2cf1fb9c91c684",
                      "421687541258fd559af5e90418da4384",
                      "4e8a0f7803ebc89617384056d3d2e998",
                      "4983b26d1ba3ffb292c26d2ef7ea4ce4",
                      "63b9539e2a1f88582cb1c4bc70311bef",
                      "029ee605f8c25788f8d4264c7f6482e5",
                      "5d1c6d2ce4ff61659b2ed1e5e3804ad8",
                      "47574b8196c7411a6447e046cd619051",
                      "6b6732fc4987ab52f08ad9f6536e00d3",
                      "18d37a50353d8d510f621c90f635caa5",
                      "8fa1f0beb4ba3f69730967324a3ff0b5",
                      "8d0be29ec43bf3748cf63739dab37de5",
                      "1b7605a0fc1b06ac5404ce5402b5ed2e",
                      "c005139f4856d4157cbc393622fc7074",
                      "0baf563fc3e0229403eafd7372615d9d",
                      "99e43ca673e8b9e06af861a33f3476f9",
                      "c26437901eedc4c4902ff6193ac95240",
                      "fc7f47154d8df36ec924198e9a481614",
                      "e04f0a96be8a9f88b6fb825ffcd540b1",
                      "8005779fb87a7526960686073a844861",
                      "3540b52ed05c6260a2cb6839cb5f89a3",
                      "d88d590d68e88b5172767dfe30034e2d",
                      "7ffe91a139931ab74447eac129d0073c",
                      "9e15159d5c26065245cc8bbfc9eb5286",
                      "e67d1cc3181b9c2391917950bcbf13b5",
                      "925a14759daea2fb5f01ae70e2affaa2",
                      "241c01d26f752ea841f3ced7f1b07f64",
                      "db9283a3bb9644f220678cca394d9e2d",
                      "e9a950af6598c7f987258d11c46ad48e",
                      "0a7967210712a94b7ccf1c38f70b73b1",
                      "723979eaea875955085d6b44bab7cace",
                      "0db214c923c8e8fc1753d17fa9fdbb97",
                      "66710b18cfcd8d2d82cf360e14800eec",
                      "a1caccabfa6589c3229cc05bfd67a8cb",
                      "5211248c7ebadc686a33994a03d3c07e",
                      "d7d555d86e1d0f95b4f26671e16173b0",
                      "bacd83adf3347189dc71d64950f80f70",
                      "d472ddd58a8733244032db6381523e80",
                      "52c9b7e38ef95f3752d2e325070690f4",
                      "a912a3682d812401bed6dfeb11879c05",
                      "56c5765b1601782d9ea59e2d655aa722",
                      "9c64ee9a0ca56fd66129e34167475479",
                      "eada44c92920344c278d3c0cee112956",
                      "5f77f4d06b73f3eb038af44d699d68d5",
                      "20e70d4f426170c11dff822086dc6d22"
                    ],
                    "newNode": true,
                    "pid": "1693293891414",
                    "rules": [],
                    "style": {
                      "background": "#d0ebfa",
                      "color": "#333333"
                    },
                    "uuid": "21d0baf3-7b3c-467f-a337-c434b8782bc5",
                    "level": 4,
                    "data": {
                      "text": "船用高性能塑料及树脂",
                      "lineWidth": 3,
                      "paddingX": 8,
                      "paddingY": 3,
                      "expand": false,
                      "uuid": "21d0baf3-7b3c-467f-a337-c434b8782bc5"
                    }
                  },
                  {
                    "children": [],
                    "expand": false,
                    "focused": false,
                    "id": "1693293910205",
                    "label": "船用化学纤维",
                    "linkId": [
                      "e889a3aeb1cba75bdc1b38afb7e7a813",
                      "ff3c75619163fcecc00ca321408a53ea",
                      "09b4b20db18570f24a41bce1b9cec0bb",
                      "bcde89ae20ede36822a9433da0a629fb",
                      "fee13fc221b7e583094d87d7d7c133cb",
                      "b4dca05e0ad90dbe717f5a11f55a8525",
                      "bb13e26b2e77582be384970e7067b923",
                      "a1622b22cf39f391eac060b6b00ba7b8",
                      "3c716995767aeee78eada8f6d04cd18d",
                      "533ead937feddea772ffabcdf9606df9",
                      "06b50e671423e2f967d756685bed789d",
                      "b31636d68ebaee46a3a0029932c70cd1",
                      "5783fa680e261d06076c685a29636393",
                      "0f934156eb9bdc1037e7052d252e6a33",
                      "f0bea0dceb2d140b91d28b530a6e28ee",
                      "44337520d119fd3ea521b828533c5934"
                    ],
                    "newNode": true,
                    "pid": "1693293891414",
                    "rules": [],
                    "style": {
                      "background": "#d0ebfa",
                      "color": "#333333"
                    },
                    "uuid": "65a5001d-7483-4b89-b04c-5bfb46570aed",
                    "level": 4,
                    "data": {
                      "text": "船用化学纤维",
                      "lineWidth": 3,
                      "paddingX": 8,
                      "paddingY": 3,
                      "expand": false,
                      "uuid": "65a5001d-7483-4b89-b04c-5bfb46570aed"
                    }
                  },
                  {
                    "children": [],
                    "expand": false,
                    "focused": false,
                    "id": "1693293915637",
                    "label": "船用合成橡胶及弹性体",
                    "linkId": [
                      "d2b0ed5b725ff22ca6796553d1cba948",
                      "b8092cb821cace1d7bdfd30d8a87e49b",
                      "3c4020e0186608353e38d28b132defa5",
                      "525d4dbc4002dc6bbaecf55c25b7c271",
                      "e131b7b948a0a4ecf11ba7a454cab282",
                      "915720fdfee85f750f1b284471ca355b",
                      "f086d52934af3e94c79db4ecef3b9120",
                      "dbfcf6f8ada26eb9ccb0bcf584f1ec0c",
                      "75fc9288aeaf3ebea6b93c0447e15515",
                      "cdb2f10ddb2c471349cbaa06dd2e661c",
                      "2ab20c6a914b15d3c95cdff88b077ad3",
                      "29474283c3316cf91219a212d8523c73",
                      "52d1ad6fdc228a41a457059f5109f908",
                      "befabf67bf17b1855b0e374bed0f0d38",
                      "deac5a82192b734c94c7f514ad3d601d",
                      "d5799834cbab7122247ee5dedd9ce943",
                      "2fef4c218e23c508c9adf45deeff4362",
                      "30ac9a6010933ccab087f4d399995f50",
                      "0890be7a425cb1cbf11a563d8b206180",
                      "e7eedd4587faf9d0159396f9481a5ee5",
                      "79bed8508d9718a0e77ec205f7db20ac",
                      "bef15daa5dc511226ed9e19f719a2eeb",
                      "32c39faf6977ce1606dd5ad73ea96292",
                      "dd9304d72e4e8626d5e69949e87bfd7d",
                      "bde0889e1b8656c7b0baadf1d99e53bb",
                      "e635ea4bb92ed61d5dfd8fd1c4363afb",
                      "1fc68a55fe473c329a55478d5ca01ec1",
                      "da491d0098ea49678fe413f689d76d15",
                      "1c0dd734b2729769909e344cc9960866",
                      "39bda81291ee1abd7e75bfebd9d632e9",
                      "bc25242d3d5be04fb4fe5b35b6ce0669",
                      "8ee8ecbd617816e1a34d9f5f8bf37a52",
                      "ab3555af3f6d6eadf9716ea6c9917d9f",
                      "3a0feebbe4dc72c10efca3629c237622",
                      "ee548e433fef3cf8793d9dffede4b17c",
                      "c6bae6cf8c64cb5bc8ece93e8b93bb17",
                      "c420ad41bb5489126efcf31bed1dfe81",
                      "73aa256ffa5f352baa4e18f9a86fd02e",
                      "d62d741de31f9002511d1d3e9efeedf9",
                      "cc4eca09a4a8e5ebb30646606e4f0525",
                      "8454c4fc1463171c9d102763ea55e70a",
                      "1f827d88287a0dab46ff11d8fb13c5e7",
                      "4785f9f8d795e8b414ba102776850294",
                      "e05d9572d729e3070dfed070dec8a6be",
                      "4ffa7441b5f6730a58324ee7be4d2223",
                      "f04ecdb0bb5f29bc8365adedeca04a80",
                      "73e4df7b1fd02f27e65fe655a0952b0d",
                      "a438d1e4168f4fd8bcf7e49e7cdb8eeb",
                      "92b1fc5389bca417324d472003368527",
                      "6c08848c73c35ffd6799fdf0c952918b",
                      "e1bebf505a66a164071f4704fc3eb146",
                      "d5dc3fbec87cb7b804f7639e0cacde25",
                      "c418ba04cf521a3844a276a6b22ecae4",
                      "ae2bd8327993f28fec7951052b0952dd",
                      "a2b6340d40ee6bd1485ce5fc35b5334c",
                      "eab8ac1f738bc6fe49cbf5e3d8847455",
                      "bc1a4d41c596260b2b972d9d0cef6e24",
                      "edd6675907c2f12bdb4f6e0172e312cf",
                      "c89cf5dcd040d1d5e67499e770949a7e",
                      "28253c668539531c3fcc6c8c2f36de8c",
                      "74d4d769603ed71ced3ff438b88976fd",
                      "be06a80601a8a51731672238ad3673d9",
                      "af3c649c2ccec6a4030fcf26284d7b66",
                      "4e368145d4a98cce3ee71fafbaba4092",
                      "6544b980dca9713ea12a7d85e205437b",
                      "243ac431050d1634d0ad5e03be6f5d9b",
                      "7bdda4cc74dd351005a997c92fc32772",
                      "eac81022500a248eb3e15f27d1e6c998",
                      "6c15103f6449e82b1fc87acbff1af39d",
                      "20932644a0d82c76355708ab460cd9b4",
                      "c5543da94d32e7805ea4000b3b377ceb",
                      "302ca14bbc2c8f1f0622789340f83bc4",
                      "30a43d50dfe7242af05eb3ee0d38190c",
                      "6a82e489ab0d279dedeedd095d2018f2",
                      "286616030ed22f9c2d9b9e4fe48aee68"
                    ],
                    "newNode": true,
                    "pid": "1693293891414",
                    "rules": [],
                    "style": {
                      "background": "#d0ebfa",
                      "color": "#333333"
                    },
                    "uuid": "78a995ae-01cd-45f5-b58e-7c1a0a11c567",
                    "level": 4,
                    "data": {
                      "text": "船用合成橡胶及弹性体",
                      "lineWidth": 3,
                      "paddingX": 8,
                      "paddingY": 3,
                      "expand": false,
                      "uuid": "78a995ae-01cd-45f5-b58e-7c1a0a11c567"
                    }
                  },
                  {
                    "children": [],
                    "expand": false,
                    "focused": false,
                    "id": "1693293921166",
                    "label": "船用胶黏剂",
                    "linkId": [
                      "54b11435f1abd4aca6e5083078864553",
                      "d6385ae6d8d7d9a140c33b1f39878ee4",
                      "4708dd446d85c50b8381ddd04d46e9ff",
                      "7c8aecaa67034eb089de4375e5efdd2d",
                      "5985321facebe6f093e7703348bd5de3",
                      "c9b67167d715235b1743ab93aaf7d1ed",
                      "81a4eadc556f567c32a9d52cb6a484c4",
                      "164e6264927ff7cfd0992ad45f8a2901",
                      "85dda17b1040366d4b566c46fed9b239",
                      "a2b342f5e147f873fff180daf30fa305",
                      "12cab122d2bd39eaeb97ad9ba093002d",
                      "433c5be106f71aa809be604418e21a35",
                      "1a1e46c98d11cf1e7e1b48c9fe39ca20",
                      "9a218868cc340ddc8eee5a110d21daef",
                      "0d4c03f4d245a111464ae9dc11a8acbc",
                      "60b6a5a13d036e22d7f690b2a9932d3d",
                      "d5aff6baaa56a07794d541b31e79ea49",
                      "9eebdf29d089349e9f17a29bf9286e05",
                      "01119bc982e15e721f4b00b613f25b74",
                      "8b36358bb0a6c4116070c340af7c01fd"
                    ],
                    "newNode": true,
                    "pid": "1693293891414",
                    "rules": [],
                    "style": {
                      "background": "#d0ebfa",
                      "color": "#333333"
                    },
                    "uuid": "4d3950ae-3a6e-4878-a8b5-1e52419a959a",
                    "level": 4,
                    "data": {
                      "text": "船用胶黏剂",
                      "lineWidth": 3,
                      "paddingX": 8,
                      "paddingY": 3,
                      "expand": false,
                      "uuid": "4d3950ae-3a6e-4878-a8b5-1e52419a959a"
                    }
                  }
                ],
                "expand": true,
                "focused": false,
                "id": "1693293891414",
                "label": "船用复合材料",
                "linkId": [],
                "newNode": true,
                "pid": "1693293883877",
                "rules": [],
                "style": {
                  "background": "#d0ebfa",
                  "color": "#333333"
                },
                "uuid": "ef2371fb-6d47-415c-ba57-b97e2231a0eb",
                "level": 3,
                "data": {
                  "text": "船用复合材料",
                  "lineWidth": 3,
                  "paddingX": 8,
                  "paddingY": 3,
                  "expand": false,
                  "uuid": "ef2371fb-6d47-415c-ba57-b97e2231a0eb"
                }
              },
              {
                "children": [],
                "expand": false,
                "focused": false,
                "id": "1693808503089",
                "label": "船用涂料",
                "linkId": [
                  "0029f3746e7b47beddb9c6f23034a783",
                  "691956a461a1b211f52b48e88ffcdcdf",
                  "2bd8b25f0b3722f26d5234c351d0592f",
                  "83087bd050c00bfc1882d25c1d662a5d",
                  "f91ee190e52203f8d9c0bbab43634d86",
                  "1fde7803d2e7f062ce907b6b715aa4b9",
                  "de2d15605bf6b5484e9c1a2ab8a355cf",
                  "d7774cf909c786aeeee4032bf2e4446b",
                  "a7e1f4caef93d5940b6864a8ae6e3ef0",
                  "bdddf3ca96ba9ddb55b5cbb09879377b",
                  "2907541f589e24cda2091c941d96ec60",
                  "93f472bbe9e183b4f51f92f2c6824aba",
                  "b735c2361cc0a59af84e541d6707be02",
                  "420ad8a8ffb90ddfa3f3fb7484544939",
                  "33ff1cc076f4802209f2ada4df37e370",
                  "7030cbb24dc11b146b058b3e355d9c9a",
                  "517a87934bf74a740625cdbbef842879",
                  "b917db0abd1bea353550d2b9e9c9030b",
                  "d2c009038936e52b5766adb01fdd554a",
                  "439ae45e6e633291b3aa649a3f020567",
                  "8c89df02ce17be6857d7b8c9243c3fd5",
                  "aec11e219189047d6d5c2926fc27ae4d",
                  "0000f771772927b1a99493ac252d50fc",
                  "141e2b3f483914a63e31d499ffadbf16",
                  "c1174207fc819eb0f5c2dc8a470d8701",
                  "b098c6f8c7bcbf7f8c2f1c24ebfe25f4",
                  "93f6fa112a931939cff40659bb0ab663",
                  "efb07c85b887600c3684899d55051c69",
                  "629ab7edf613046bb45b682272e6febb",
                  "3802b9d6b0ba0130f8835c19c4148ce1",
                  "d2cc684197492dd35e5c6b9b7996a4b4"
                ],
                "newNode": true,
                "pid": "1693293883877",
                "rules": [],
                "style": {
                  "background": "#d0ebfa",
                  "color": "#333333"
                },
                "uuid": "6aa348fb-1124-442b-906b-dbf2330f257e",
                "level": 3,
                "data": {
                  "text": "船用涂料",
                  "lineWidth": 3,
                  "paddingX": 8,
                  "paddingY": 3,
                  "expand": false,
                  "uuid": "6aa348fb-1124-442b-906b-dbf2330f257e"
                }
              }
            ],
            "expand": true,
            "focused": false,
            "id": "1693293883877",
            "label": "其他船用材料",
            "linkId": [],
            "newNode": true,
            "pid": "-1",
            "rules": [],
            "style": {
              "background": "#d0ebfa",
              "color": "#333333"
            },
            "uuid": "bc7b7672-066f-49d9-a2a0-06d4461f0120",
            "level": 2,
            "data": {
              "text": "其他船用材料",
              "lineWidth": 3,
              "paddingX": 8,
              "paddingY": 3,
              "expand": false,
              "uuid": "bc7b7672-066f-49d9-a2a0-06d4461f0120"
            }
          },
          {
            "children": [
              {
                "children": [],
                "expand": false,
                "focused": false,
                "id": "1693293955006",
                "label": "船舶设计软件",
                "linkId": [
                  "04376e0892f451744881767d0b8dceb1",
                  "2b13becb0418735dd7f30f68b7163395",
                  "0adb4d80539dc75a9b544c04728b538d",
                  "b4058404a96b25fe4112d281b61fd213",
                  "1df46c24a40ac38cd40f22099da56746",
                  "fabd58bfd1eeac2a2b71c812671f9c36",
                  "284dceff4ba504f643c486ba1e69be0a",
                  "7805cdb90538ec48fc9f5f45d1c8ac44",
                  "4df9ca32c97353da3ea31dda9dc20ae6",
                  "061aba986ddb23b41c36747ef87edc3c",
                  "5c3d08459c3299a9cfe90d926c303cfb",
                  "485b5af21f712e885f0dc05dbbd0b643",
                  "078f10c98d1bc72a95dabd032f2408a5",
                  "6a9572a7008b183eb7406339d9355130",
                  "5e280b028ca5f684aad4e78a7e7bdd08",
                  "095e98ded63a0c169cc07395055ff2cd",
                  "7435472968e5f51cab085b651b0dfe1c",
                  "1befebde2687cd042edc3dec95606aa4",
                  "55b6f8fadbbdeb5bbb082c8218602c81",
                  "5e978cf65cc771685670f9b2fa988aee",
                  "bf3006407d1a38490e34fdc9ff829a11",
                  "7d2e358010a47b2e47618213b4e8e3f2",
                  "c1605c6f73fa7644fff7a88ed9fd0eb7",
                  "72e09fa6c8b6a63b7b36a38e92d7ff47",
                  "85483b37f67211bab93900301b04cea5",
                  "785ffff44027470ab51df58b24c6d1a2",
                  "b098d2923b6392e9a8c20bd71927ccde",
                  "aaa9ec4264996990070352887a6f6f59",
                  "d56f829cddd11e2fe3e6891ac77e86ab",
                  "2b5460ccaa03237db22a86169e7671eb",
                  "66516e9b1bfa98de73b59fa7ed321eaf",
                  "5568f949970ad4e9f45568933aca4c91",
                  "5c0ae4e92168b76c9b1b5ea9670e5cff",
                  "6bfceb586fd262ed2b22237d9caeef13",
                  "eb201d9604dbf0b7d119ab142d58cee4",
                  "6d54a3e8ccd295e823700d64050b0729",
                  "b4267b2d07209e5f229eca0a87caef95",
                  "94594654dfd0f2ee8678d07ed5a60b65",
                  "afe03c76624cefa6f2143246c63570f8",
                  "ff37cf069e13fbde0168def34d01fb78",
                  "fecaa8d5e1e697dc0a7c7939339a0b3a",
                  "912379039d7c8711bfaf023c62fb9ae0",
                  "84d7037b00f34638fedf08e4ab59a4a1",
                  "2cc3b68b53d7172c4a88eff8d5bdf2d6",
                  "5a24cf260a40e6bc93e63d11e216775c",
                  "c6906d95af8c0266dbebdc55477c7298",
                  "97967b3a9f90dff2d417f80d1e300e8f",
                  "a6ab975e74b3e2356ec7383d1f69bfdf",
                  "378c0715b7bd4e7845443a9f97b3ebc1",
                  "4398439b6e1da1ff81b04dae80932de8",
                  "5c19e73060bb564d13b950b1162c2fee",
                  "c5c3282623c29c4e832efaa24a9587d8",
                  "3083351f4fb2a7eee2c86b9f10ef90da",
                  "c502f80b4512e7d86191ce477c90c566",
                  "3a8668bbd551aa235e9ddef1abc70e2b",
                  "a97786039e95a15a2c2f2d3ed5095292",
                  "8322a5b2a51f5d7af92cda2647b4b5ba",
                  "32d008052e519ce0af10d45a439605ee",
                  "dda0466d6cac071910713d19bdfc7709",
                  "439288dfe46fed7fd83dcf93885eecb9",
                  "2934545bb887621c267df70fc700db0f",
                  "49cef4a7c59e6f130b41693256b0d2e0",
                  "f3c2a370da0e03cdd382e250122ab928",
                  "1ef73d944920fc1736d50f9e143a450a",
                  "8008127ff917c50eac3e455e1b0a2082",
                  "3ede8268307fd337f77424df3e3f3853",
                  "807687f4c10baec856a84d30456e1715",
                  "9f7c46f72e8e6c53a466e88a7dd3e0b4",
                  "9e654730af4deaf11794b1fdab68080f",
                  "055766f7c03c64faf5fa09dd8fa3b15e",
                  "73420a72951b6c8bfa490b46dd4d0050",
                  "7fc8e51d4eba866cca8b854ba471ca66",
                  "519b6bf48e5e37d7c0b2bbc7ae2aa20d",
                  "13802a1ee9afaf3a3d3d3364594b927c",
                  "20151b6a8eba378213ce176985eebdbb",
                  "8e3821b7f759cba4b1ae8a91dbe82237",
                  "dd43b1744d751ea86c4ba5f428508bc0",
                  "2feacbb000c69c138c58f695e404de04",
                  "e13150367a20c173aa4856058bf1fb9e",
                  "6f00c8969e70fe192c95b25f9b73f989",
                  "e550dc375c01f9c8e161523c950e56d2",
                  "7eb043054488619e17dfa671bef99ce0",
                  "644c6547a0202da31234423dd76e6ee0",
                  "cd96751bcc21d1f3df21c91f30f90922",
                  "3841217263d92a6e05e5a9dd93d37f05",
                  "e6d71a543693661c0cee995e5b514f23",
                  "e31f8f8590d934722f87b1955ffc3734",
                  "25df61609b9f3086fd3066840bcd8fc2",
                  "baf042e093ba5d405aeb863cec0b72c6",
                  "691e3dc6f92f19d4096a16270d9fc928",
                  "3871d9e3715b202e84a6c2a5d1108632",
                  "912c59c74dc92630fadee608ed430721",
                  "26dc145ee13c50146c0160afb13c2745",
                  "a3785239fe83c50256491ce889c1001d",
                  "272d8cbf135b6d3ade61c0b97bafec8a",
                  "4ea5d810dc6b6abb08642f2cbba5660e",
                  "685c38a34c07792d25219a2e345aff67",
                  "8781e5b924319aeaae8975d24ffffe4c",
                  "d7dcda0c5f225b35ab62a83e17641aac",
                  "fef02d8c57bec21e663a2b41a715fbfc",
                  "074295d8920dd3ac4cd88fda7e9b2bc0",
                  "33d5420656d1f3f7bcb74244dc95fecc",
                  "059246ca1c3643582e99d39ff06fc56a",
                  "de0537d504a1a369186208a965143385",
                  "6f0343364a8a21f2024a10490b0f5526",
                  "4f1409ff25a259e35999834f82eeef9e",
                  "ffce271f9aab6e00fc57e33a791f102f",
                  "8ccfeefcd7f914a0902f80fe07856532",
                  "cb2b186a8bbfcf481baac54bf6dfe77f",
                  "3aa04551f3567b70de084348dfa75ade",
                  "5d3380cc11281a33518462c4b960d70c",
                  "680679f7ece1f0f5ea92574fc6f12f63",
                  "cb9b3598ce9e58aa410bdffdb414ef1e",
                  "c773e4d07c479c2a9e48fbf9fc454a2f",
                  "497274da6ff40b367579e3636faf96db",
                  "6b8e116818d6e84e346b2cc0d006677d",
                  "c41343ff9f119ee44ea6f5ebbe2d1808",
                  "775eac02a490090eaf42fe32c4cfaee6",
                  "f2e577244c59e0ba15ab433244df2954",
                  "a74cd7635737bf33d8a284db943e3ca9",
                  "5ddb82350e688379a91409384b6774cc",
                  "2bc4f6484694c46b8e81aac297ad705d",
                  "a4b2a50d1bf0cbd7db3f1df9f5c47e5e",
                  "7e6c89f09a4041cf0fbeea9a07f79197",
                  "5ad8ad2d120225b32ce007e64be1d5a2",
                  "faf6aa869664e21f56e00a131451daaf",
                  "eb1f05960f35c191bccb98dcffe2e642",
                  "d02c486ba115cb86c6a41d36f9220508",
                  "209877bd3434d67b7758a5fcb7523ad1",
                  "f90564518d75e08377f844ebcbf067cd",
                  "7e31585375216316b80ffdc9ecaf2829",
                  "8735c3f5e7384fc3bcbb1cc6af793f1f",
                  "239cd116d24b3007e0593991be37cff7",
                  "7f8d031892e2336a4667e913090bbb71",
                  "ae15562c81560b863bd7771e06c66318",
                  "f8a3373be9d9647937695dfe477a8769",
                  "a0a58aa5aa498a296b55f4e3d8744c09",
                  "ee874e92f25ae54abb2400382c16335c",
                  "95b86a290bb37d98542c6a8349874836",
                  "be325c5a862cb1b630c33cf703845663",
                  "5ef136592ba88e47b78d478cc53dad55",
                  "31f9a6215841498c08660156baf6d59a",
                  "de31c6a7706e1224794eccfdaa4d2f26",
                  "760d0e3504944ecedf14ec48f167a88e",
                  "2e484610fffd98c74217dc37c98d5d02",
                  "492215dd42509a36cdb377c9a2aec4a5",
                  "66a49f73f991c33b1161e161be968417",
                  "d39973870790e5d7b7101cbf03ee0233",
                  "b2170035a3972cf0aeb30858d5cb2b95",
                  "de2d25fd8757a6011defd0816fab23eb",
                  "6a4fdeafee6429158e606eef59258bed",
                  "7daf80b3ca5fce4f9d40f33654b10ed1",
                  "56240883ed0ef9d48ff287ff1a2ac4b0",
                  "c53fe6994d6286a413766c6871fb8a2b",
                  "025ec002866b054bd1e495957b3e3efa",
                  "8eef4dd645847097d8f9f40ac388713e",
                  "857ec66d9f5593639805978bc74818d1",
                  "753843544907c7ef78d3ee7c63d74026",
                  "e4a64a4bab466a7cd48ee6a7ae3fbe2e",
                  "0a382464e7738ed7098aa6bc674740a0",
                  "b80b740b6f4fc0cbce0256c2e6e01bce",
                  "bb22c07cd39e7579b7c933d6217acc55",
                  "0f82b3047cd6f0ac9a0cf047c8a01b76",
                  "466f94209c5721f7be867463d4ad4c83",
                  "28137033adb5813f61ae4f13ca2594a3",
                  "cd4bb1616c53a3006ad0930f5fc07cfd",
                  "e4cd701f4a8dfcc604536da0b614acf8",
                  "e46273ff8a1fb4ee7e585d1c642d8ddd",
                  "8e0f63f2d5e4f6667bc4750b857d4c6b",
                  "bfac937120782b1d6e39f8afacbbfe8b",
                  "628918ea87f6e060016d644dcfb67ae5",
                  "17a317ebe3505ec56dd5e5ae6f1ddc25",
                  "a1ff5af28c6cea42f2ff9b664db4a308",
                  "4027381d527af7ee65ee35a0c2dfcc28",
                  "a9507f1f08549d89ce9e7d2a9f7b1319",
                  "527997003fcf75322253b7064e1ba8e2",
                  "d58b71de3d5f0a22abec5d08c63af1df",
                  "e26ec74c4a49e8afacc08044a80a2252",
                  "23aa0ab9d158f2fa722e2aaf444f0e58",
                  "da0441656a8d5f2f2801a648480e480d",
                  "67855346d5163aa24c72803d958d150f",
                  "44438470427155cdcc322df9f6776755",
                  "f118c142099c7d3c0ce589c11bef79fa",
                  "d1f6399c29b2729c41a2b609f441c99d",
                  "6ab9996d53f1c02505302ff7153bccaa",
                  "42e2eb9764399015851b539e59630987",
                  "d647976540f237077abc458713aa3e3b",
                  "a2a10d3f8e2e2f69db2f0ad43637b2b7",
                  "fbb636dfa6be0b49550d36117a8107f8",
                  "50767609707bb50343ad586f5e60af2d",
                  "d20e3ed7119a3b9af8e7239d73a5dc56",
                  "a4d0ca736674b6d18d83cf9abcb74376",
                  "692a8aea1376c419677c2f212ee46eb3",
                  "2145b648028c12fd73eccc7be4ef2fbe",
                  "6245b025ad33f4a43194e1a4849c9175",
                  "a75e16680916a037462aa923460b7cbf",
                  "08946cf20c7183050298c72d4127f9de",
                  "f52839003a4987aca29fb99146a67bad",
                  "cbed4f1b3a86c6cf845fb5da49a3ff02",
                  "896cf71ef0004a1e9ade65d0b2a032b8",
                  "dacb289ff3afc1e37742d4c21260650a",
                  "2b8a93ed29a2cf3d8b1955318740d9c1",
                  "21a318339a51d418e3ee803148fb3372",
                  "658ce469d71e961e1d1480ec01b73ca0",
                  "57805466cd178b12260e80f8e71cd4e6",
                  "8a58a2eb47095116410773fa2b3f9fb1",
                  "a6920cdfff65f78cc201c1566e1c1d0c",
                  "7109a80a1c168ee9b261892b052a3512",
                  "19daf82390f6ea5755b2c8966c8a6215",
                  "90f9255e6695a3c7636d17f9f4fb4b63",
                  "809e182e5ec23a1e8b8b4fed1efd93cf",
                  "d64ae3eef4b99ca1801584e603b49a1a",
                  "3b5771a2acf30fec090a1e0ddf9a4d3e",
                  "65cf77e98b3c9e4e660b9d0bafdeb30c",
                  "44f97a3a69c0de385528f83b62f18b3f",
                  "59b8111f327ebb63959722a8b0587d73",
                  "681aedabc34f3f79f59c834706d9b194",
                  "ee87352bd78b5a997e80dea0d5eae01d",
                  "d56087ca4f2b204c337f5297bab992c0",
                  "a2a59661c16d805d44cddf588b41553b",
                  "3de6fb186f6e65ca1206bd19c03f6baa",
                  "514d483fb6fca7c40aeb5c4052fed577",
                  "eb598a231d88460f917f248c104eba72",
                  "9463c75b2b2d0fdc65a153f83fec804d",
                  "ad1a8393f9f14706614271d08e4b1a1f",
                  "acd1a3e0d0bdf1007eba108a4a34cbfb",
                  "efbc191eb901d631062b6d463ff138f2",
                  "f913c5dde68399b03045e59a99409fd6",
                  "775d2d4306739534c1037835edb673bb",
                  "d8dd301c387720b789a70deb377c7a0f",
                  "c786ae4b00579edca3aea08547324fb8",
                  "54eef9a567f9a254e76572d6b5071b62",
                  "473555a5f3e0bf245cf126003adea5eb",
                  "58ba9d5825eca413b63fccef674ed7b5",
                  "3dc7bf9b18b186191ea0b3a0bb4b0982",
                  "f5d8d24154be2caa0b3349d969910b9c",
                  "3d9f4506809d3bc5a9f03f49efce5fe8",
                  "9e95953963e74ddf2471e7f67d3bc364",
                  "b8a83e4c8993cd5acfbdcb26fba4f8b0",
                  "61656ff05b265ab6ee8abb0643a862ff",
                  "b8b17d331ac646c0dbcf3aef24a7c021",
                  "41a87fb5299f810cf4f6db9b3e50ae15",
                  "6b038ef2fa5a4966f0909998a2dcb0e6",
                  "be03345e7a06a039ae23cdc43bf69843",
                  "89652f298a2d7a2ecd3e1a8b8f322576",
                  "08e5766fd46e8d5e70cf7be564bb81b4",
                  "9341dd50248c9c92fb476322d261ae8e",
                  "46f9bc462f4a20a26d7ce8376e55092e",
                  "64b009d54982975e5cefc906e2051a18",
                  "05580c1807016a75cce6185891390001",
                  "f231b4af152cc4ec7cee82babbd299d9",
                  "3de4eb80e34aea6c7868ecfeaa060ba8",
                  "4e35fa4e7a579d1342fb34cd557ec081",
                  "6102f31e9755c9d4c0b1cb44b19fbfc8",
                  "21bb609bdda9782b426129565222d71f",
                  "d441011994e603a514d1724559b84f09",
                  "a96078056236d3baa6210cd2ddce36b3",
                  "110f039c94b2816b7cfc16382a7aba75",
                  "091362e415a1d56e94074dfb428b6d6f",
                  "1e0b2110c1b4d29f7823786e2beec6eb",
                  "b8812feb623155074552292fc80e625d",
                  "3dafeec97462a05556dfdedf495dd1f3",
                  "f89843b9a29fcc69a24bb5451dc77621",
                  "e07e3b0993f7602bf734a316edf3ccbc",
                  "765cec19b71f4fb81256171807719ef0",
                  "66c3276fff0b4d424fd136aa011e58fc",
                  "0b67f6be3f0f1f4fec8211897f790603",
                  "7598cd4c12864448745d2dd69301af88",
                  "0e342b15a2f16c34785810091385a724",
                  "e1471a710f3dde26d3165ad91a9cdca2",
                  "e433cfaa59c6cc892de01b84ec09ba93",
                  "02a15a42200b206e48dbeb92d294140c",
                  "8528be4c52461af9ac0b680e2e1cbc35"
                ],
                "newNode": true,
                "pid": "1693293950270",
                "rules": [],
                "style": {
                  "background": "#d0ebfa",
                  "color": "#333333"
                },
                "uuid": "470df945-5dd7-498a-aa9a-744d1f95ee30",
                "level": 3,
                "data": {
                  "text": "船舶设计软件",
                  "lineWidth": 3,
                  "paddingX": 8,
                  "paddingY": 3,
                  "expand": false,
                  "uuid": "470df945-5dd7-498a-aa9a-744d1f95ee30"
                }
              },
              {
                "children": [],
                "expand": false,
                "focused": false,
                "id": "1693293961550",
                "label": "船舶设计方案",
                "linkId": [
                  "1687e9460fe87394d7994dd41a54b570",
                  "34bd6080aa1e2670df22377454aa5fc0",
                  "e484fa192d0d2e325c9ec91f964c0991",
                  "01e6ea4f77bbca857eeab665c94777ba",
                  "2b9ca9b4a488dab4bbc5fce4909adda1",
                  "9a3e0dc412c80d6ef065e0de0f77718d",
                  "c9fbdd501bca8d5c806d254d85b0d0db",
                  "a27860d1ee54463e5959367e654a7392",
                  "5eb56999ceda80b0ada513519fd5d1a5",
                  "9c3cce325a1b94b5845c31fb018e06bf",
                  "9be82af0d009f841712098422434975c",
                  "a39c6afa493ed20eb01819a42a95d16d",
                  "761fb02baa2561c002b33f7010d448a8",
                  "18fc52f72c10fb59e411442f10348a41",
                  "d4efd6c71df3fa6b2e76871c7e322955",
                  "17e10e5e02db32e55dc58146c23dfa5d",
                  "589aad3d65ed338bf850060b30387b60",
                  "ef8462c7d12ddf55134cd885ffcca83d"
                ],
                "newNode": true,
                "pid": "1693293950270",
                "rules": [],
                "style": {
                  "background": "#d0ebfa",
                  "color": "#333333"
                },
                "uuid": "1fb1f24a-2b57-4a52-9fd3-74673cd67431",
                "level": 3,
                "data": {
                  "text": "船舶设计方案",
                  "lineWidth": 3,
                  "paddingX": 8,
                  "paddingY": 3,
                  "expand": false,
                  "uuid": "1fb1f24a-2b57-4a52-9fd3-74673cd67431"
                }
              }
            ],
            "expand": true,
            "focused": false,
            "id": "1693293950270",
            "label": "船舶设计",
            "linkId": [],
            "newNode": true,
            "pid": "-1",
            "rules": [],
            "style": {
              "background": "#d0ebfa",
              "color": "#333333"
            },
            "uuid": "41702eba-f742-47c5-a950-ac6b9f268916",
            "level": 2,
            "data": {
              "text": "船舶设计",
              "lineWidth": 3,
              "paddingX": 8,
              "paddingY": 3,
              "expand": false,
              "uuid": "41702eba-f742-47c5-a950-ac6b9f268916"
            }
          }
        ],
        "expand": true,
        "focused": false,
        "id": "-1",
        "label": "上游",
        "linkId": [],
        "newNode": true,
        "pid": "0",
        "rules": [],
        "style": {
          "background": "#d0ebfa",
          "color": "#333333"
        },
        "uuid": "c0cab8e2-6bef-4bd5-82a8-bc7902cb3a8a",
        "level": 1,
        "data": {
          "text": "上游",
          "lineWidth": 5,
          "paddingX": 15,
          "paddingY": 5,
          "expand": false,
          "uuid": "c0cab8e2-6bef-4bd5-82a8-bc7902cb3a8a"
        }
      },
      {
        "children": [
          {
            "children": [
              {
                "children": [
                  {
                    "children": [
                      {
                        "children": [],
                        "expand": false,
                        "focused": false,
                        "id": "1693294400660",
                        "label": "船用绞车",
                        "linkId": [
                          "0a9fde4222944d7103b271ab61a9d6fa",
                          "ef151abda99d113a1a51b120173702e8",
                          "71623913c8e098bccf5e44d810f01832",
                          "f56a3e725a7a0790ae5061322fc740e3",
                          "8db7f1e498942fd9e21111ec624f463b",
                          "3f38cdc16aaef8722375c34e86fa3eb6",
                          "17ac48fe55e7822d3e70b2541bab532a",
                          "c645e3dc4c78b3186e6e77782fd97b0e",
                          "3b291852252e53faa785c0a58151e0e2",
                          "6c4ee34410d4c36c42fda07f5dbc2555",
                          "ab9339f675f5ce2c73e8552e7e6d3816",
                          "55c551b27c906ea420077e6a064e03cc",
                          "6f8d2f3658901bef890d80b3d7d4e18a",
                          "ca77c5b38ea9c2489f39f263adf1a00f",
                          "68c17c4bf6ea371182249ebc8d890bf7",
                          "fdc1c05dc7785f28d2fd47505b80b8d2",
                          "f4b0a69465ecd8b6859fc10228cc8277",
                          "b661f60ff77715f6cce191e820af88c7",
                          "f505b2f53f6b45a6a48bacae4250774a",
                          "b83ca2650a60b6e2abe699e2a65cf77e",
                          "5653ab3ed0067d22b4741f7e1bd4802a",
                          "14227dca82f96904f85b18ac63836525",
                          "fbad1775b8b391b5b4a63528918f41ec",
                          "26acf5bd0fba1ffc862b535fe1d176b8",
                          "d0b012c4e4ce38b6572b8bf7ecbbb781",
                          "ef4e2732f66017e66d8d4f2717e8a979",
                          "5b426ea01b99d74cf4bb2029bd01400e",
                          "2f2b709eb7f03fe86bf13822c360cb46",
                          "74fa07bd9d9b0a0766af4d1a2ac73dab",
                          "9908d79b8aa710244680c2ece4fd096b",
                          "353d835f66e0c4dd62959d3a1228d2ce",
                          "dc3da9b0a1df27fca6655a5e53ba1b50",
                          "45204778e47176c252fccd544d50f7d6",
                          "71f7630c81ce695449301d78c43f887f",
                          "e9588f223d310a9dafaf1973a8571af5",
                          "4c1bebdde0cb954cc7acc3b6143b3126",
                          "306d5369112ab518b1351e3f43b0583b",
                          "0fcbabba02885f471e7481ebadb07aa1",
                          "a4cbaf65fe650624a20c368bf46a0fc3",
                          "0143d10083244a3abc076fdb3817028e",
                          "329078ebd595e683addb751a577a776d",
                          "f01f539b587496526a36a5194e3a56f6",
                          "402828a6777dddd09d9e34c234d80a40",
                          "41f6c0b6e5317611b92ee8ee8a613ddf",
                          "69385d559550ff5194afd3ffd8ffa476",
                          "f2a041eeca349c0425ef64c18cbebb76",
                          "822369493f69ed149fa3431f189b1641",
                          "09cd3ec61f0670d68d097097d78bc3e6",
                          "bda8ee78fbeec9a1d4bfdbb52c739a03",
                          "2d9eee6210ce00f8f8e0b7f4b0ec672d",
                          "6f4797824a090730a630090512c68106",
                          "5320cf893dd25ec36826ca38ce3a929e",
                          "c4029bfc0371caad0adfc75cd3041172",
                          "c9b7f3aa7c341ea92f1d698ba11a4ab5",
                          "bfd449e6089080eaeb2684f3ee2b2c92",
                          "035879b02e1d1d82186d9464ddf18d3c",
                          "edcb81258d19a3feb99a1eaa1179959c",
                          "41e87b044a0699d0b1d2e01962fdbce2",
                          "acb25e15ed90414607e0c4db58c5f7df",
                          "40967e8e6c3e06b08249b443750fe1da",
                          "4e9bbb3575ca5e43dbade567fd0c1c9e",
                          "4cc6ead294427079246efd9ad297d5eb",
                          "3d31efb0c9b159b37bfc8dbd45a2a001",
                          "fe024bc5b226632a8a956e334ae7961c",
                          "065a206c3b058af1ad7d8cab5fb54d68",
                          "be79ca3300c7f5110db8fae9bccf084e",
                          "d344ffad4f5fac1f33c5c99f722ba194",
                          "8823ae7477be3b518a8f6bb4326dfd0c",
                          "cbe237d5eb6297176a9be5239c9b1380",
                          "5d1ec8923a53e8e45cf6c520ba972e0d",
                          "f22433f3af0fe5477955678d4209b383",
                          "cf035e0cc15e4b3e4ead681d90c6b73a",
                          "1f2f9525e7e37a039613c833940a51ff",
                          "72ec0aa389f70e4a07f8044eaede301c",
                          "b03013905d9a9c485c8d82eaf4f58aab",
                          "7cd2a90b424f4802e9eb9614b8cdb7cf",
                          "2132d28547631cd9a910cb3ebe93203d",
                          "4db9954789e997f6a4a2b81048fe956f",
                          "087e4b8063fea9495227aafaa0259a1e",
                          "eab97a25178a4c6bdb5f0bfe282aa52d",
                          "3a734aaaeac37d4076f5dc7014089ec2"
                        ],
                        "newNode": true,
                        "pid": "1693294380141",
                        "rules": [],
                        "style": {
                          "background": "#cef2f5",
                          "color": "#333333"
                        },
                        "level": 5,
                        "uuid": "3092f393-f2d8-4c25-81f6-b81146b7b7f3",
                        "data": {
                          "text": "船用绞车",
                          "lineWidth": 3,
                          "paddingX": 8,
                          "paddingY": 3,
                          "expand": false,
                          "uuid": "3092f393-f2d8-4c25-81f6-b81146b7b7f3"
                        }
                      },
                      {
                        "children": [],
                        "expand": false,
                        "focused": false,
                        "id": "1693294409382",
                        "label": "锚链",
                        "linkId": [
                          "c02d02581cce3be04f8dabe465e9de93",
                          "2152c3375253eb42f577c181e9fa617d",
                          "d4f4854e9cfb0d0bd7f81692fd8da008",
                          "fbff14103fcb2bf7761930c188fca2f0",
                          "27c88e8278b4ebfb3da53b9aae3eaaa9",
                          "68f3d9f4da5f86144ee3a5b2999bbe94",
                          "c93d365b42fb313dcc6380a05513c23d",
                          "5f351e59ae535feefcaf1406f251f91b",
                          "ea4751939b603266c99ce4bc7db0b76a",
                          "c34b90a49c492e672d512cc3aae19a62",
                          "26045737e485f01716d654f0924e43dc",
                          "e77f9a23769965bde13a9de519d3c68c",
                          "c5a29619685789049400759104349870",
                          "531d22c5bf5f4660b3eca8b240191da2",
                          "a49b25da507b57515bf6aa24b6df9513",
                          "3e9e260e1e4bc4d6f31a3eb1dc515d74",
                          "69932d46f9a6b76ba2e0e537786b22b8",
                          "4dfdf97f03cae4e8308cee2ca2b4f022",
                          "bfc41063304614c3af7616466d0f363a",
                          "a5b058cbe18f4de96e9b4c5de0f339fb",
                          "bc49744164cae66ca3cdda230889874a",
                          "48734ea8c0e9564a5ca63a3aeebb7e2d",
                          "f3c3b0b9336999a91e7cd578c6fbf06a",
                          "4aa6b0ff130523664cca14251b7e3a9a",
                          "362fafc07634dcf4025f07281c41b018",
                          "80b1bba6d35df5a0519f591d068f94b9",
                          "b14c89e1cf81a2e4e77cf542fccf4e84",
                          "66287ae8dfdd28cb478f179d8c0cc1a0",
                          "4bdf67fb840362d471ac2f0b85924b25",
                          "f84b3f1d258f21f39e66095c46b83220",
                          "e1e97574bf92a8aff724158213cf7f4b",
                          "3833d5c31a565d5656fe48e4e1523428",
                          "dbef81852e0c7597073158c9c7fadc00",
                          "7cffd930427cc73ae23a42656d756392",
                          "0a755a92fded7ee60deaf2619d6c36cd",
                          "3081656e67688e8a54cee46fe5e49255",
                          "1ba4a2bfd6d1268965e934e84cc78503",
                          "1addd8be1f994a863675daca0dc016dc",
                          "34d89ff1187e841dd59c38c09c1c6995",
                          "f84233b51c6f1ce8ba6d3a281049f590",
                          "b7a0e06cae1c064d0849b00c33f1b5c6"
                        ],
                        "newNode": true,
                        "pid": "1693294380141",
                        "rules": [],
                        "style": {
                          "background": "#cef2f5",
                          "color": "#333333"
                        },
                        "level": 5,
                        "uuid": "d636e144-6022-483b-88a4-468c0defacb4",
                        "data": {
                          "text": "锚链",
                          "lineWidth": 3,
                          "paddingX": 8,
                          "paddingY": 3,
                          "expand": false,
                          "uuid": "d636e144-6022-483b-88a4-468c0defacb4"
                        }
                      },
                      {
                        "children": [],
                        "expand": false,
                        "focused": false,
                        "id": "1693294417157",
                        "label": "克令吊（船用吊机、起重机）",
                        "linkId": [
                          "d13c9ef422956307f6cf4c75827e1668",
                          "3f4cf71774fc68b70ca791ce823d1b22",
                          "a37a9514db1de6f39300a21569ae5625",
                          "5766a5e4fdacb1ddf143a298c710cba2",
                          "44228312617c80b17c8949b18ea75361",
                          "79c424100c047e4907b53b9304e3a8d0",
                          "e8b04e77d7dfabfaf11505f5ceab275c",
                          "7de61dbb75ed09dd9a95477929c33a98",
                          "5f4fbe3c87872500f8ce7abf29a36bc3",
                          "0fb98fe7dc44fe3a8e9b883a6b3df21c",
                          "fe62672089a2a561521412a7b1928dcf",
                          "8ed28b396c6cbb69bec2a2df99b05476",
                          "ad74306b01c674bb9e16e5ff692e2aca",
                          "fad579646274ffaa5759c9a162678cae",
                          "f6aa8507f34f48a1323b163364d3fcf2",
                          "49a7ce26d2e1e90a71743bc3abedc60f",
                          "603baf6daa831ee619b3cb8c1bfd9aec",
                          "32ddf65c383cd8d149c4e86215363078",
                          "8e2b424e2cf3d174868c23bc32eb269a",
                          "d047750b226a92a3b60df782973fb711",
                          "1297b4aaed830325b8e9bc64bb416790",
                          "0f1e528eb488119eed8417211be40f3d",
                          "55aa08bbcc46b14447efc2e79c77a6a4",
                          "528f2bd238ee581d1035aea89e63868a",
                          "303371aa907d2581d3abde4b1ec26223",
                          "48f039eabb12b16bee5220fdb96c7e39",
                          "afb677b37de1ac671950453843630f64",
                          "a61c62bcbd75adc5dd454250ded17286",
                          "9dabe0ec875e61f17a5e9ce9dffb615d",
                          "fd2184999907ed6a3e92f83f125c7244",
                          "71556bb2c386400a80b5bf2fc5bddafd",
                          "16fef933da5ed0f52efac299a2fe1481",
                          "1f6537b4b1355e258230f4297a03f466",
                          "f3d37e012ef81a6799785daa563ad226",
                          "b20d78568b35b098347922690ecb56e5",
                          "87aa034b7fb6a8c96da10f1d5738c6f2",
                          "8259e6b6a0896e5dd9f361bc64e6dcbb",
                          "d39d6bf5e3fe05728bfe28b071d0c144",
                          "e8a81726ef19067c674767cd3f0e914f",
                          "b2826def8b9076c00ae177b6cba60694",
                          "defa52cdd270fb91520e26c14ba0efd7",
                          "ffd514e79026ae875bf890e2e4154a9b",
                          "12e1aecfac2755f3f9e22dc9f6976010",
                          "012e880b157e512f6bbbd4e7582de439",
                          "465c0edc6628f59740b91c065c455b70",
                          "d897c6d42a5ea418b76c893fcc795d60",
                          "061e44ee0976d8a4f2938df532a50264",
                          "f291e3705533d51b594a673bf652699c",
                          "a6c3d4ebcafb8ccd4e5ee5c222162479",
                          "1ac60e3b220c61326144fd812512fa2f",
                          "5bd4b14b2b28a3c1cb1fd96c3853be3a",
                          "7ef60602521817fcd44edf1d3c2f26d6",
                          "564454fca9f5cf53c06da550f5d5e538",
                          "9e5e4dbe72d8f5f98b5c943441b5ed99",
                          "39c548c851a85fc4527df08f97f84787",
                          "fcc7c3f40e18d1a3ed34d151660b37b3",
                          "3d85722a09e5d1a2d55db0f61325c3c5",
                          "6728468276bc22c7dc37a0ded4584074",
                          "a486274d587ca5ef1e049859384f6d1a",
                          "e72bc4957af41ff670af6a9df8c01069",
                          "1a0b39e75b6684f0c8e0e6221a301254",
                          "d1d0182000fc72489cad623e5d03a36b",
                          "5c88918852485628f4be58e40724d524",
                          "f77a15233104ae9b8a6d569e5db50364",
                          "b4127badb50f9d0c0d939007e7a05ca8",
                          "9fe1357dd561b5ac6ac3a5afe389d227",
                          "42af9fcaca9fa2a7dd23f9b3b82de38e"
                        ],
                        "newNode": true,
                        "pid": "1693294380141",
                        "rules": [],
                        "style": {
                          "background": "#cef2f5",
                          "color": "#333333"
                        },
                        "level": 5,
                        "uuid": "122446a0-9f73-4491-86d7-d876c93ff950",
                        "data": {
                          "text": "克令吊（船用吊机、起重机）",
                          "lineWidth": 3,
                          "paddingX": 8,
                          "paddingY": 3,
                          "expand": false,
                          "uuid": "122446a0-9f73-4491-86d7-d876c93ff950"
                        }
                      },
                      {
                        "children": [],
                        "expand": false,
                        "focused": false,
                        "id": "1693294423629",
                        "label": "系泊链",
                        "linkId": [],
                        "newNode": true,
                        "pid": "1693294380141",
                        "rules": [],
                        "style": {
                          "background": "#cef2f5",
                          "color": "#333333"
                        },
                        "level": 5,
                        "uuid": "ef6ae23a-8dc9-4df5-afc4-5f8dfe19457b",
                        "data": {
                          "text": "系泊链",
                          "lineWidth": 3,
                          "paddingX": 8,
                          "paddingY": 3,
                          "expand": false,
                          "uuid": "ef6ae23a-8dc9-4df5-afc4-5f8dfe19457b"
                        }
                      },
                      {
                        "children": [],
                        "expand": false,
                        "focused": false,
                        "id": "1693294429213",
                        "label": "舱口盖",
                        "linkId": [
                          "1c8950bbcddcca10dda3eaea64e315ff",
                          "7cfad10e603c89088f60c37e839c0915",
                          "99a9ffa83a780351418142e1cc7c75af",
                          "203d3c2c05a6ebd8263278638a319e22",
                          "d5080c4d7c38411b16ec104d9c598624",
                          "1e3e8d0fdf3d19faab727646713f7553",
                          "3d9f3e24d097aff173f2b272db594e3c",
                          "b949c308878f39e2e7d71a94126b23e5",
                          "4c6a6cab2c3568e47f6d5a35ac23e660",
                          "80d6634c16f277494004ad446b9e7122",
                          "1196a64227a388a25aaf0fecf43b1ff1",
                          "b21f0c7e225c9b9b238908d94364a884",
                          "e18012e4317f14603704f22aa74052f1",
                          "e1c0d2f75aeaecb1f86a39483a5d6298",
                          "a389fe3218fc06f9e7d8caeccd959e5d",
                          "e5fe981675f04b714cb14c952bc97b43",
                          "45fc029ec392075813a168983b81a4f2"
                        ],
                        "newNode": true,
                        "pid": "1693294380141",
                        "rules": [],
                        "style": {
                          "background": "#cef2f5",
                          "color": "#333333"
                        },
                        "level": 5,
                        "uuid": "c995fb68-a900-4d10-8aad-dcbe0f629062",
                        "data": {
                          "text": "舱口盖",
                          "lineWidth": 3,
                          "paddingX": 8,
                          "paddingY": 3,
                          "expand": false,
                          "uuid": "c995fb68-a900-4d10-8aad-dcbe0f629062"
                        }
                      },
                      {
                        "children": [],
                        "expand": false,
                        "focused": false,
                        "id": "1693294435892",
                        "label": "导缆器",
                        "linkId": [],
                        "newNode": true,
                        "pid": "1693294380141",
                        "rules": [],
                        "style": {
                          "background": "#cef2f5",
                          "color": "#333333"
                        },
                        "level": 5,
                        "uuid": "ee645317-f329-43cf-9ac0-bd3846639cb7",
                        "data": {
                          "text": "导缆器",
                          "lineWidth": 3,
                          "paddingX": 8,
                          "paddingY": 3,
                          "expand": false,
                          "uuid": "ee645317-f329-43cf-9ac0-bd3846639cb7"
                        }
                      },
                      {
                        "children": [],
                        "expand": false,
                        "focused": false,
                        "id": "1693294444717",
                        "label": "艏侧推",
                        "linkId": [],
                        "newNode": true,
                        "pid": "1693294380141",
                        "rules": [],
                        "style": {
                          "background": "#cef2f5",
                          "color": "#333333"
                        },
                        "level": 5,
                        "uuid": "7dc8f469-87ac-4aac-adfd-701a1302f697",
                        "data": {
                          "text": "艏侧推",
                          "lineWidth": 3,
                          "paddingX": 8,
                          "paddingY": 3,
                          "expand": false,
                          "uuid": "7dc8f469-87ac-4aac-adfd-701a1302f697"
                        }
                      },
                      {
                        "children": [],
                        "expand": false,
                        "focused": false,
                        "id": "1693294450837",
                        "label": "导缆滚轮",
                        "linkId": [],
                        "newNode": true,
                        "pid": "1693294380141",
                        "rules": [],
                        "style": {
                          "background": "#cef2f5",
                          "color": "#333333"
                        },
                        "level": 5,
                        "uuid": "5ec37fc4-36f5-4529-afa9-16c2d6d99cea",
                        "data": {
                          "text": "导缆滚轮",
                          "lineWidth": 3,
                          "paddingX": 8,
                          "paddingY": 3,
                          "expand": false,
                          "uuid": "5ec37fc4-36f5-4529-afa9-16c2d6d99cea"
                        }
                      },
                      {
                        "children": [],
                        "expand": false,
                        "focused": false,
                        "id": "1693294456949",
                        "label": "舵机",
                        "linkId": [
                          "66fd0596fd04faf5787847a4abc9820c",
                          "b2b0b5d9ac60b4af6b7d332f5b2eb866",
                          "4d186748f765b035ff11523d69444bda",
                          "cd694103afdfd71908eac007e3968754",
                          "ae9e7a724e4e2de431662b4684088bce",
                          "9bbe9338b0b77c97a26971adf88048ad",
                          "c17b4e44c11c2bf147c88315ded4c607",
                          "7b3cd886aca1db33d0a0bd177cf39be5",
                          "7febdc60ec1cdafa28522863bcbd7a74",
                          "5481dcb3726e1b1a24427ad6ce6ccec4",
                          "1a0fb541cbee8abc39903bbfc1ea7179",
                          "3345c90762e7f0a694f25985b46209b8",
                          "2da2023f11acd0b9fa0d5b5b13a62c64",
                          "e55fbe4a506ed08243c7d858d1236db8",
                          "2339b1445cbd9af94f63bbce0034c2ad",
                          "41eb85c81543ff26fb724c32cdef9cdd",
                          "10ed9bc70195db60d1f424bdb4413b03",
                          "2ea65223edd046d637b9ffb81005b69e",
                          "2baf718f8f57ed29d2af511fbeac1e9f",
                          "26714fdfc32c7aaccb882f6f9a8849d7",
                          "3ed8be7fe05c54badd768e1145dd15dc",
                          "bdeaa83b2ef1fd33bd8aed96676bc68e",
                          "fd923b127b1a43fdb4332fe73c112f8b"
                        ],
                        "newNode": true,
                        "pid": "1693294380141",
                        "rules": [],
                        "style": {
                          "background": "#cef2f5",
                          "color": "#333333"
                        },
                        "level": 5,
                        "uuid": "4b33bc78-fea8-4c74-a435-009752f55afb",
                        "data": {
                          "text": "舵机",
                          "lineWidth": 3,
                          "paddingX": 8,
                          "paddingY": 3,
                          "expand": false,
                          "uuid": "4b33bc78-fea8-4c74-a435-009752f55afb"
                        }
                      },
                      {
                        "children": [],
                        "expand": false,
                        "focused": false,
                        "id": "1693294463301",
                        "label": "缆桩",
                        "linkId": [],
                        "newNode": true,
                        "pid": "1693294380141",
                        "rules": [],
                        "style": {
                          "background": "#cef2f5",
                          "color": "#333333"
                        },
                        "level": 5,
                        "uuid": "52b74cc5-23fc-4c46-bb17-efddd3113e21",
                        "data": {
                          "text": "缆桩",
                          "lineWidth": 3,
                          "paddingX": 8,
                          "paddingY": 3,
                          "expand": false,
                          "uuid": "52b74cc5-23fc-4c46-bb17-efddd3113e21"
                        }
                      },
                      {
                        "children": [],
                        "expand": false,
                        "focused": false,
                        "id": "1693294474773",
                        "label": "锚机",
                        "linkId": [],
                        "newNode": true,
                        "pid": "1693294380141",
                        "rules": [],
                        "style": {
                          "background": "#cef2f5",
                          "color": "#333333"
                        },
                        "level": 5,
                        "uuid": "3f4139ee-2285-4edb-94a0-013296b86a30",
                        "data": {
                          "text": "锚机",
                          "lineWidth": 3,
                          "paddingX": 8,
                          "paddingY": 3,
                          "expand": false,
                          "uuid": "3f4139ee-2285-4edb-94a0-013296b86a30"
                        }
                      }
                    ],
                    "expand": false,
                    "focused": false,
                    "id": "1693294380141",
                    "label": "外舾装设备（甲板机械）",
                    "linkId": [],
                    "newNode": true,
                    "pid": "1693294371452",
                    "rules": [],
                    "style": {
                      "background": "#cef2f5",
                      "color": "#333333"
                    },
                    "level": 4,
                    "uuid": "cdd0e2cd-396b-42a4-9397-c1c898e50537",
                    "data": {
                      "text": "外舾装设备（甲板机械）",
                      "lineWidth": 3,
                      "paddingX": 8,
                      "paddingY": 3,
                      "expand": false,
                      "uuid": "cdd0e2cd-396b-42a4-9397-c1c898e50537"
                    }
                  },
                  {
                    "children": [
                      {
                        "children": [],
                        "expand": false,
                        "focused": false,
                        "id": "1693294507380",
                        "label": "船舶舱室设备",
                        "linkId": [
                          "596a6bf67beb0957cb032d363e595750",
                          "fa2cb2b9d07d0549cdc0c7f45cf97f52",
                          "73da39a5c2216d45b48704d76dc54c74",
                          "c6c878725422860809fd6523c3209305",
                          "2beab240fb9241a9f36cb9c79f69f3f3",
                          "7fd543a26640ad8fedfe90aff2b0fb93",
                          "161fbe4d417821c440c868997551e3a4",
                          "1db1bda072a531221a617515195d3ddd",
                          "a306b470c347289623da9738c5ae17b1",
                          "30e88368ca5b309782f235dbc7f34441",
                          "fad7e6fd3f1937725ea78cff1ca502e3",
                          "840fc6ef2c89c6d129620e649ed1693c",
                          "e0a21780a218ff18b96f5f8fbc70a929",
                          "577548efd6791023f88062f94b6de01b",
                          "de7a3753f73e819bbfa423e67619fcc1",
                          "f54fa8a21ce891f7d952aad346c7de98",
                          "64554372d07694a67307d145df9c2e5e",
                          "b9e07ad3b808638adfd10fd6683609f1",
                          "5c92db152e99f4b5c53757d74600112b",
                          "b003bdd7dabd96ea61a9895af2760961",
                          "4abea6a1bec17e72379e5f5b676d2463",
                          "370f6cba4def964b73a5d53fc958dde1",
                          "6c6d9869b486e3a1046e0296a8139963",
                          "f09ab8db5963bee33f297b31b83324aa"
                        ],
                        "newNode": true,
                        "pid": "1693294386429",
                        "rules": [],
                        "style": {
                          "background": "#cef2f5",
                          "color": "#333333"
                        },
                        "level": 5,
                        "uuid": "39379e4c-08b6-4984-9bc5-002f8f4dcc85",
                        "data": {
                          "text": "船舶舱室设备",
                          "lineWidth": 3,
                          "paddingX": 8,
                          "paddingY": 3,
                          "expand": false,
                          "uuid": "39379e4c-08b6-4984-9bc5-002f8f4dcc85"
                        }
                      },
                      {
                        "children": [],
                        "expand": false,
                        "focused": false,
                        "id": "1693294513365",
                        "label": "船用防火门",
                        "linkId": [
                          "7b22d4c33c1a501a0263a1ee75462426",
                          "859d2838cc45bb621305733092935ea9",
                          "c1126766436ee165383b45d6905e1899",
                          "855af9b734596a509a92089f1648eb8b",
                          "fe71f381411d7ceee9b706763c7b45a0",
                          "8f60d05d9c8fb737d9c3ea847c174e67",
                          "62e553db9fa99c13b66bbf9adafbe586"
                        ],
                        "newNode": true,
                        "pid": "1693294386429",
                        "rules": [],
                        "style": {
                          "background": "#cef2f5",
                          "color": "#333333"
                        },
                        "level": 5,
                        "uuid": "be0de97d-2101-4949-a226-14acdec85050",
                        "data": {
                          "text": "船用防火门",
                          "lineWidth": 3,
                          "paddingX": 8,
                          "paddingY": 3,
                          "expand": false,
                          "uuid": "be0de97d-2101-4949-a226-14acdec85050"
                        }
                      }
                    ],
                    "expand": false,
                    "focused": false,
                    "id": "1693294386429",
                    "label": "内舾装设备",
                    "linkId": [],
                    "newNode": true,
                    "pid": "1693294371452",
                    "rules": [],
                    "style": {
                      "background": "#cef2f5",
                      "color": "#333333"
                    },
                    "level": 4,
                    "uuid": "082b84d9-7bad-425a-8fa3-179dbef874de",
                    "data": {
                      "text": "内舾装设备",
                      "lineWidth": 3,
                      "paddingX": 8,
                      "paddingY": 3,
                      "expand": false,
                      "uuid": "082b84d9-7bad-425a-8fa3-179dbef874de"
                    }
                  }
                ],
                "expand": false,
                "focused": false,
                "id": "1693294371452",
                "label": "舾装设备",
                "linkId": [],
                "newNode": true,
                "pid": "1693294363037",
                "rules": [],
                "style": {
                  "background": "#cef2f5",
                  "color": "#333333"
                },
                "level": 3,
                "uuid": "52b85d74-1dd0-4e50-b7c7-0e7fc16a4fbe",
                "data": {
                  "text": "舾装设备",
                  "lineWidth": 3,
                  "paddingX": 8,
                  "paddingY": 3,
                  "expand": false,
                  "uuid": "52b85d74-1dd0-4e50-b7c7-0e7fc16a4fbe"
                }
              },
              {
                "children": [
                  {
                    "children": [],
                    "expand": false,
                    "focused": false,
                    "id": "1693294532773",
                    "label": "船用锅炉",
                    "linkId": [
                      "f9ee12ec789c9c91b9a772cb0a507192",
                      "d34320e8af8c054deccc2cdb49bc49bc",
                      "f81f3f7481ba2f9ad132873f379949cd",
                      "ec185f8adeb5693ad43edf6fc6c9cecb",
                      "7eaa9f2174d7738264a58168dd4296ae",
                      "cd894fd9fceb0f2ba7bca2c17fba5796",
                      "34f63331f545f67e63e6bd8bfdfba9d5",
                      "d0979a7d6c27b4d77d92ac4d99ad6994",
                      "61ad7dc43d8ac1b4ea17a779740654f4",
                      "2ec1b0476751f28773d8a641c7b966af",
                      "411e522b4768c3afd04b35e7040d0672",
                      "b6b06ce7d78bdd93c3ec7dfda43ac4b3",
                      "363d1a1896c636c7cf38f2530c9dda62",
                      "13a2b99c49e14f056e917a5054ae9bed",
                      "990daa2e7c25335165596579496af3ea"
                    ],
                    "newNode": true,
                    "pid": "1693294526388",
                    "rules": [],
                    "style": {
                      "background": "#cef2f5",
                      "color": "#333333"
                    },
                    "level": 4,
                    "uuid": "b5f39a34-9548-4321-b3c2-ca364fd9187c",
                    "data": {
                      "text": "船用锅炉",
                      "lineWidth": 3,
                      "paddingX": 8,
                      "paddingY": 3,
                      "expand": false,
                      "uuid": "b5f39a34-9548-4321-b3c2-ca364fd9187c"
                    }
                  },
                  {
                    "children": [
                      {
                        "children": [],
                        "expand": false,
                        "focused": false,
                        "id": "1693294553260",
                        "label": "制冷压缩机",
                        "linkId": [
                          "dc801ec46dd9c4538ec6f3be18f4ad36",
                          "c0c6e36b354491b20f506924b297fa41",
                          "0cd090603ed210a9645b93cb6699911c",
                          "fd9794e006d5eeb1704fb8abef88f417",
                          "8e5f4d17c0620db90ec9b477a0957c8f",
                          "30965ad141cccae46627d4b9ae8bf56d",
                          "9d8ed6490a8e0a773eff1a4d3589a845",
                          "60d76cb63e05ebc85f6bf6af24ac0514",
                          "76472ddd693396a1502ccf091556ff38",
                          "dc8bf54615bb17cabfd7332990142b0b",
                          "3ba81e8a88cf27c84b62d90b5d84647b",
                          "fed7a7b1731eb2ab3e66f65d434d4e58",
                          "3c3a53acb174c6e5dff8f3a96d878bf2",
                          "0366816e1d81a9e5f11abc9960687f4c",
                          "8dee92be6cdfd9c5926a04b3559ac03f",
                          "48e59c172d54d991b9538ecc38673b29",
                          "083563b2ba22c7f877e94b3296757585",
                          "12ae0a7f310712a870f33c106f31dc8d",
                          "a846402d05071e63c276ee0cfec25ce4",
                          "8eb56b3ed954c52c8a188ddbc7dbcec7",
                          "0715594df010e3b39e41e80f03906ab0",
                          "c1329e7f94551e68609546e4478bb005",
                          "893882c21eab464bd96963abfd77b398",
                          "1c4ca336dcb1dc8536cf2f7ced2b9298",
                          "6c72b6ed26b356f6c99835a64feef954",
                          "c81c98306d55f79f3b30b28de89efb2b",
                          "c3ac1f0060e8acadac780339bf234d2a",
                          "33652719efa6eece8946c01f28214e15",
                          "0926d7619ebb1626d219aae281407f16",
                          "00a4783d0345a8b8c39f85f6820f4a06",
                          "4a6e0e56dfb13f59453565b16e857b1b",
                          "b1c0d44fb0f44de338bccaa88ea9745f",
                          "77054703717a4429f3b20d48e327a414",
                          "1691ae3bb54c79497b7d37e86beaedcf",
                          "06d47d016c95c6936c2d7f15221a651e",
                          "fce3242ed93510814cec1d2cc8c18904",
                          "6dbbeb219faa9d049a83e79b36b407e1",
                          "27cc9719eb13c5cfd196b1bb69375bc5",
                          "d1a8c2ce4c2727b7719527ed0373e98b",
                          "ca928210196be34b758c78cfc0bf4309",
                          "352722a04cb7773cd9608c338888ef9d",
                          "ac151b2bc06502fe344b36978116bb2f",
                          "b9b3e9b112a491905db9dc869139407f",
                          "9e63c99048955d5442491abbd5282688",
                          "1a968b1ce7b503df96306a7bcfa9dbaf",
                          "f9f46915e3a4ae4e28c50fbcec9f3e36",
                          "d63c502061b7ffe78b24f25ec6ba4bc0",
                          "ed921bd5aa9fcb0b4390e7f5151a7729",
                          "60253cd0c71e0efbc7e6425d8195081f",
                          "4a061bc343281347e77fc00a5c91de23",
                          "0c861da4a6a699be3ef48b7483627028",
                          "76b7785bedf784a29308b83548347673",
                          "f3a09768558ba19c0872777e11dd7f5c",
                          "6405432f0449f0c07d1fe1398ea4d041",
                          "922e0dc3c22acf713784df5b08ad6ede",
                          "fe95415ec1a2c70635c4fd119af65e5e",
                          "8cbe1ad33770eeaf3cf0d34958b76ee6",
                          "ed0ee577a4b63de0e398408e626b6fc9",
                          "ab4c25f283ce7516bf219d958fcde20f",
                          "4dcc4d250978b5effacff4a0d0d592fd",
                          "b1153755530f63c7c1a9c7de8294490a",
                          "83cfca1c0f89f472b4827eb77c30eac4",
                          "5f0b662767a5f66e1986531ececc4735",
                          "47c82ccf177b439587f567c89228d1d3",
                          "29dd89d38d778b290d6e473ca2ef2de8",
                          "4976286ac8031f2f6cfb6e90b75e8477",
                          "e01bc97cfec5fdd43ccd77300942d968",
                          "36b90eb24b552468f08cf0399bcc6fa2",
                          "2596caadf3133583ef35971949e692f9",
                          "981a689ed3d67915e8c64eef22d992d6",
                          "295378311c33cfa37d4766f5c531370a",
                          "21bf549171b1b5f7e9f06e578978324e",
                          "d026f05450a68a01c0f3c4e893bab903",
                          "6704b4690d1c3c17f3278a905e902f7f",
                          "dc6fe5f3181aafdb21fcf36072f2a997",
                          "8a0035790f9d1fcd72dc00070073e178",
                          "eabcaff3d2d804b4afa9f891ed4c1885",
                          "cf234b75e9569eebed8e50e81f5521a2",
                          "786a9cc251e36c52078e25de16dacb1e",
                          "30b71291e0c5c25fc324cad435d23020",
                          "e1f06d20c5b05612af43268532330036",
                          "b40c43c19b85057f299ca5b48b870c38",
                          "69d57e0616ddd2ea7a5bba114cf347d9",
                          "97a1fde55f18c99aec41a3e1735f39a6",
                          "6909380444ca77acbcb42db8f4406bae",
                          "5c0967af4a0bc597b224e4b3dccfccba",
                          "2d3aaf606b9c039faf6216c2287f88e3",
                          "169b0e30b9d98865dcafad76aa5dfbb4",
                          "7ef970cffc337a648de2787269e9a988",
                          "10a6164408855db7578e96869a546307",
                          "b2584593461b86b6f067d48e20cf020c",
                          "14d9b57b48aa7dd5a4f7f43670c1cd5b",
                          "dfaea78396b9a00ec17c9932d01fbd33",
                          "b1d89127ce5dc31bfc5286045fde5fca",
                          "9c13ae6a35d5f4ca4a8d25bf7f6e3e6b",
                          "ab8f3c07423cc831262747b3ad2d306f",
                          "306b3c3f9c697301a99de837d21ebbd7"
                        ],
                        "newNode": true,
                        "pid": "1693294540661",
                        "rules": [],
                        "style": {
                          "background": "#cef2f5",
                          "color": "#333333"
                        },
                        "level": 5,
                        "uuid": "2a1ae061-03e9-40ca-ae7d-02ab0bb64a90",
                        "data": {
                          "text": "制冷压缩机",
                          "lineWidth": 3,
                          "paddingX": 8,
                          "paddingY": 3,
                          "expand": false,
                          "uuid": "2a1ae061-03e9-40ca-ae7d-02ab0bb64a90"
                        }
                      },
                      {
                        "children": [],
                        "expand": false,
                        "focused": false,
                        "id": "1693294560284",
                        "label": "冷凝换热装置",
                        "linkId": [
                          "bc68b377d33c0c4158f9df5a452dd2e4",
                          "ecad0a02518767069cf17845dfada50a",
                          "02e4792f3f27c03e06b5b9daabfc37db",
                          "47b28e8a2150a978f0f489c2d3a93385",
                          "a7f04dc5be41718b00f5c22bd5182527",
                          "8925eed7a2e6a8632e2811dae68f5030",
                          "5b40022cefdfba3b90c2595b8d64f778",
                          "1aae45fa4118a9eef29905bb1faec370",
                          "e5e7fffc7f1c4fc26b0f21cbc292c4c1",
                          "f60107d67805672219eb1338b6eca714",
                          "72e3fc10f74eeab2a9a51016e874d1c9",
                          "795e0c3d51430e23f42b8a641272c093",
                          "392474c298bb450d88cbfaa7d9efeb42",
                          "09f496009aacd00b0042d48ca991083e",
                          "4cfdc19213ebd9cd40a1c80cdefd7d19",
                          "1f04781028fa43a320085443f9275510",
                          "a07e1eecfdd5648a92973b0af269f3f6",
                          "0d3122eae78bfda92364e055afc660d9",
                          "8f710bb6578e470ddd213610121aa289",
                          "11a21401dd047c0208d5986b2a27b130",
                          "10b1eae9f60fad37e403bba6dd7bba0a",
                          "40890eb8a5918edb850ca34572f5fd68",
                          "42b10c15b68f7319415851b24119abf1",
                          "29e16c9ccf8d8a0a63cbe47ae9afa071",
                          "2bf6134e2f4f59132dba7882b25d1b72",
                          "82d63d1bcb0bfd4effd4a51fa6ad858e",
                          "d983ad1186f96314b2d308389b272aad",
                          "74f312073a3c73fb1844fc0f83a5ad55",
                          "b931a1190f269ebe311b9e394430897b",
                          "632ad167688b76463d562cf8cf238769",
                          "6cc5ddaa4cc611a0ee6a9cd71fe32554",
                          "9e5ffda05d6e92cdee4fa02576a22f94",
                          "a3c139d98291ffd020a87af239d035e6",
                          "e596b90900fbed0a1c428fb05e002c24",
                          "0e114f5c9ac8d8c867bdfe540b140d6c",
                          "f9a06dbacd8503688aad3ec33e0fac31",
                          "ed8e74d6bae6180f23c99dd4d232f1a6",
                          "38688a55479390b76da14448917f80d2",
                          "bf17b77ec74fc759d23fb6ae3c45a05e",
                          "54e88957cccc3336e8ae04cdffc465c7",
                          "8b6fefb0b256848ea01061885d8ccedc",
                          "c5ceb8d4381385338dc861b8a5ee1c38",
                          "57dae0b1d8bcc59b6bd283e78dcfaabc",
                          "b8ba5d84038ddc5c11ff1bba9a471647",
                          "919396e512f095ab8c54ba27e5658e66",
                          "ad6af7c80220b80978a390eac08c14ff",
                          "3dadbecd86d0882db0aaf0e43310d200",
                          "1caa14eb575ac48994c3d1a3567f07e1",
                          "12ffe446fa36474201abcd4710c5018a",
                          "92ce40f199b2ac1e76609f7679e5002e",
                          "6ac99204de6b91241942e99d9a283b13",
                          "4a9ac28d9c15e25f73f7f11abca18bf3",
                          "9afa92be8e056bdbfc0b7636f685a375",
                          "6f31eb47671a8b03b567b265c765c000",
                          "565cf2a97ce179daf26615aef754f29a",
                          "bed8ab464d15ffe7c1b70f63e8a74da1",
                          "349c9831192d665b06a7a51c35856613",
                          "c65e40b4db16b0433198251f1b303b6b",
                          "61502dd69324c7e6139e8abb7fec3e64",
                          "a16c7b2bce69baac0561e56d5e3e9d72",
                          "aef8d029bb57eb26f4f6be89a0cfd4f2",
                          "2f43131c7eab437bb6b1598cddeb6006",
                          "db61ec01acaca03559a63f7c4061b7f2",
                          "35386b3f59a13e1475b1543ef7854b26",
                          "e23a8272129397721159f8f80557ed57",
                          "c0a714ca83e4a44a2d17ab7d9307e12e",
                          "82a8ebd87b7d8bd9eaeaaf942c61c416",
                          "f0410af1f4ed32d17052506ffc1b83b3",
                          "ff5a53261edfc756bdc94b61970358d2",
                          "13953eda2fc9c81fd210ece95a5943ca",
                          "a8e12282ceab8e95d44498598c2ac18a",
                          "c9b82da446abbf7ea942e5e18fa7f16f",
                          "423a9e02bd5e9a3a7f8747cca248863d",
                          "c32e1bc34f573fa033212d36150f9a8b",
                          "5ebd1580b11c20e74320d2806eeaa1ae",
                          "6a7b4a8d58157717ecaba4993eb6d56e",
                          "48b2ec624f14951536c6af5493828df6",
                          "7d5855e339673b0800002ce4e2fdf254",
                          "f8b47a10dd24d087d5914e2c941e0c3e",
                          "3d857c940087de8cb92537def55b0f52",
                          "ce2ee03939228f4bd670a57a2709bf98",
                          "7f70a8af441f28c5e920b43c2d935386",
                          "38216b596d977eb483ffff80f0ac75bb",
                          "79165b35c1bbcc2f19a7378f161eec32",
                          "00b5c675f4e6a37db16cc936839ab13c",
                          "41971004ca5fa03db4998b88047febeb",
                          "e42afe82de1bce0f6b57d9c7573e0131",
                          "a69edca6391d4d80179b61a935a95712",
                          "f14616d8415efbbf35c3d1fb174b1b83",
                          "5e147f915fecc8ea2d3fd0d151a85f9a",
                          "cc864ab4ffa40872d355bc0bdc3b60dd",
                          "f0fa69d4c4fe72941be6def47e0a1e38",
                          "0c93aa9336ca92b5c5d4f09b8e9f43e8",
                          "bcf3698a1990e5fa382b473459f8ff05",
                          "13768f0b001baee5c0d9f483bb9e662d",
                          "2d269fa4034e37b1412e673f3fe25dfc",
                          "135ea75f6ee8560c4cd5a08f3492ed98",
                          "19d66a1fb9a90c164011ac99253ebd83",
                          "5df777404194de7fb04d17a77f1770c2",
                          "595d43329b27cfe313d223c71458f6e6",
                          "f456a5a7f350bddaf51fc4077f46f770",
                          "b9d3fa4e93813b4cd76ef18d761032ba",
                          "7bcdf01d9a8be060f256ac6fc056fe29",
                          "cdd8a93c4e1c61e29f1bf996ed619d6c",
                          "a1b9fdb3c8bccaf00aa9046305204325",
                          "04f1a3e1cf233eb32ee4181c1cbe1cb7",
                          "c271f99ad15e100a12b21a7eb343cf04",
                          "9713402b1e57c31b1ce5f67f5a4483ee",
                          "c3f7faf3eabf3eadbc3fa1c5bc63bae2",
                          "cb7bc841dcdf156caaef573d17a67d3a",
                          "5c6cc79154014c163f672091208d153e",
                          "89412c904bb9cd0c0a0339e7fd82cc86",
                          "2ba75fe491f5dcd3f3b612f011a45936",
                          "ba23d755e67d7ec9959cb7407b5476f5",
                          "805e48715f937f9be73b82798b15a6e3",
                          "e2332557c32a2aa2b4ab709169990380",
                          "2c2c69cfc97c6e5ded010d3326de3f9b",
                          "cadf7e81619f4310bcc4a0cb025a9b75",
                          "1fec1db993026acd7657b60b47ec84ac",
                          "289eaa52255996b356725c61cdc56b01",
                          "3c6cb06f08c87425e0d3c93547c40de2",
                          "a74f29bb3789acd83df656fecb3b3b96",
                          "808e437914ea4ed1187bc980ff0e8a11",
                          "899817b030fc028bd7af4b9f4f1f1e1a",
                          "2bd0acd1bcb9a588f6cb794e67545984",
                          "39921aa3d004ae6b923b96e58388dfe4",
                          "da8553f6e4bb0fcfe50c3c0e42d792bb",
                          "a7035e24fdb9dccb5d9cad29574d872f",
                          "320a9481c190981fc68786f17f830dff",
                          "5b3f88b67b91e158585ff23f73dc7e04",
                          "b3c6b33d50c59b9318cdced5d7a0080a"
                        ],
                        "newNode": true,
                        "pid": "1693294540661",
                        "rules": [],
                        "style": {
                          "background": "#cef2f5",
                          "color": "#333333"
                        },
                        "level": 5,
                        "uuid": "4e8b060c-a9cf-4338-808e-8b0da9562b95",
                        "data": {
                          "text": "冷凝换热装置",
                          "lineWidth": 3,
                          "paddingX": 8,
                          "paddingY": 3,
                          "expand": false,
                          "uuid": "4e8b060c-a9cf-4338-808e-8b0da9562b95"
                        }
                      },
                      {
                        "children": [],
                        "expand": false,
                        "focused": false,
                        "id": "1693294568036",
                        "label": "空气压缩机",
                        "linkId": [
                          "9d6adac86460472f3dab53fab87f1c2d",
                          "5065bbe93c7dcdbc7b3a3226e38d7fba",
                          "d4c2fc72d075e77c1e0dff0f0f50850a",
                          "a51ed1fe2c38622792f7aa3054bd887d",
                          "ac93e77cb1dff5db9e80e6ed55cd8ae5",
                          "c2a48f5e784b9dea0a155cfad7b860cf",
                          "06da92140d6e3c7e0aa93c734f99b7d7",
                          "0ef955f5af3de229b668dea05a448552",
                          "0576eb47174413be128ada56801d246b",
                          "3ea20a5087462d57196eaeb2b8647d24",
                          "2d8c47c973104004975273dc23d7ae0d",
                          "06c020f1f56233de360e023583711730",
                          "7811a9cc106ba3c735e1678adf9aa092",
                          "6c579a63399025bf50e4ee2e51810dde",
                          "b1c9a7515cb4946ac7fc48ee88d1f22a",
                          "7f118352b3f93a307cda82a83e841abb",
                          "673f9349786c8abebbf0d6692359dd06",
                          "b526ec00e9ad1bf37be87d6cc859b043",
                          "142b9541d83bf4df1941ee223db748c4",
                          "2e7538ec158804aaa80a4aa9c3dc065c",
                          "b1fa472ac25314aae29bd4d16a22857f",
                          "08aa290f10494155e2622458a871fa1e",
                          "c26be4969f76fe26d63978adf453ac16"
                        ],
                        "newNode": true,
                        "pid": "1693294540661",
                        "rules": [],
                        "style": {
                          "background": "#cef2f5",
                          "color": "#333333"
                        },
                        "level": 5,
                        "uuid": "b108f6e8-d076-480b-96e7-53b15993bc99",
                        "data": {
                          "text": "空气压缩机",
                          "lineWidth": 3,
                          "paddingX": 8,
                          "paddingY": 3,
                          "expand": false,
                          "uuid": "b108f6e8-d076-480b-96e7-53b15993bc99"
                        }
                      },
                      {
                        "children": [],
                        "expand": false,
                        "focused": false,
                        "id": "1693294575236",
                        "label": "空调器",
                        "linkId": [],
                        "newNode": true,
                        "pid": "1693294540661",
                        "rules": [],
                        "style": {
                          "background": "#cef2f5",
                          "color": "#333333"
                        },
                        "level": 5,
                        "uuid": "d7c73fd0-fd57-404e-bc94-8d9a941a846d",
                        "data": {
                          "text": "空调器",
                          "lineWidth": 3,
                          "paddingX": 8,
                          "paddingY": 3,
                          "expand": false,
                          "uuid": "d7c73fd0-fd57-404e-bc94-8d9a941a846d"
                        }
                      },
                      {
                        "children": [],
                        "expand": false,
                        "focused": false,
                        "id": "1693294582180",
                        "label": "蒸发器",
                        "linkId": [
                          "8a88fb679b4423cd8aa11284246d3092",
                          "e889b8c5542ae4316839ff7972d90605",
                          "5b9dfa20c858bee8c4f867de7e853d4f",
                          "cee626b16c4690f57e09b763a3b13d55",
                          "314073961fba5d3f1e947d98c7112c64",
                          "3bdce1d507b820705bfa9fec0b856600",
                          "162945c3fa2fc81f3804af86775fd170",
                          "8e89d5d645bb875adf537906e0272611",
                          "f120f7867fb0603e7c5701caff280587",
                          "afc5f8601b5451df09508f7505f16e59",
                          "44ebe54f7c8809fe3b12555b964cadb7",
                          "4a86e8cc951f6c60c60d6abc5bd76c16",
                          "80d3bedd33e1d77a31534e18faeb3e3c",
                          "ef7854c80901dfbc42be1d92690dab46",
                          "108cda9eba34f8300a4dfbb08486db5b",
                          "15904d0d109a202d9a13b025200823e2",
                          "45821d3ba78474ecbdb9f6a4fb1ed005",
                          "7c559370486bf8b15685b4b4237a6c7a",
                          "1044a70ae75849903d06331a03b1cd59",
                          "ca172ee98cad678d96ace32ff30bbb77",
                          "538b0e1359ef749088a7f5de43b14dfb",
                          "d4e6c054e5f8c0a21ded0bceafdc5059",
                          "b34f2ea6d61ec391933115414e9f3f69",
                          "918c6e087e90b4021206b7f32515a46c",
                          "68e4a87662972fe801c57870914c73d1",
                          "0da247a7c0e344edba0c4fa3ce03a904",
                          "579d30ff70ad4ad9ea3eabea96392fdf",
                          "d97c6b7cdd3ad8e96ce8e6b4eca1960e",
                          "adbfa6776d64d6759e35a89c5fe66b5d",
                          "521c25eeb24519d4f30a378ff3c30037",
                          "7aef11d36e1d21253db7eddd82361ec2",
                          "913fcf239ef934e552a23cb8ef37cc0d",
                          "36bf268775d7e6235e10bd2e44b6fb64",
                          "56f0bf63e4530752bb8f79fdbfbf77de",
                          "9d498e89049a91ea30987477b032b2dd",
                          "ae9fec12da366831ac0c5479dbac0bf8",
                          "03d01e1d94661f6007e130ba2621c9a8",
                          "5fa7e5618f1104a730aa3eff92ac1fed",
                          "f0b420a4c83dc31fbf6202d7963904b8",
                          "cd45f9566b78770468ca78dac7360b38",
                          "9e68dadc53c5171664e3d164a17da015",
                          "921c6d45aaa8d8b7de10d757f745e074",
                          "6dc89a03267a01c525e62851e51ffc29",
                          "6dec38ce72b2d0c3b6ca8dba04ed4c67",
                          "432588ba6d1662be9ffcaaa9dc955bab",
                          "959c6e0087378f0f7ffaefcc8e7c47fd",
                          "a20c494aa7d1fddae58a7fe8e4d899fa",
                          "0606161dcc96d64943b65d9538168e19",
                          "8c3124d78ef12ccf468f44368f208a4b",
                          "e36e759cfe036ad3599f868927cdae38",
                          "66d738b9bdd3d3f955355a219bc1b33d",
                          "668f89bb0cfa77fd47c40cd65509f213",
                          "c9f1eecabf1ba307b1822f9a74ab2362",
                          "57df3c7bf918bad8dda98bcb7efc7e4c",
                          "afe6e93de26e97c17e1fc1c137e2895f",
                          "c23fa8a37eb3034245bee9c0e94095bc",
                          "70700c16985c034f761ec6ea5d32c067",
                          "244fb284ad404a6c0fbe0c22cb6a1b3e",
                          "e2bdf987be734926766dc74da4f5d11a",
                          "b9e68cb4669338dc0ae878ef22c76a39",
                          "3e9c3b66a5b498549abd6397349e49fa",
                          "9ba07e69446e28ac0f826f798f9acc6d",
                          "6ebf9fed7640ec0f1010ae0a5107572f",
                          "6ead579635803efb84cb856640326515",
                          "255f65def65fbd046745ff843ccd157b",
                          "c94051e7716522e851ed804ba4ae5906",
                          "20d6dbea8549f84696f885fbc8ee58ce",
                          "5c1ba6843b914c6d4898510bb3b78e29",
                          "dbccaabb2b85ac3e0b25819deb1f6b12",
                          "8780408c889a8c790ff7535d936aaace",
                          "e963fd1a25a7be00251a49427e42af08",
                          "1f86d066cb69329335b0f245377608cf",
                          "5a0c5caf35212919fc52d2becfe3dfb9",
                          "a2c193414f51f8f697f556a75d181a17",
                          "ab9e75442b0704e248eae149a232dbe5",
                          "61539972d75f166ba65c32debd70c298",
                          "d19341000efac2eb7b87898f0abd7207",
                          "bb66697d6edd5e2278cc7a84f2f96f4c",
                          "4cdb774f49f6d36739728a3e5abb772c",
                          "89cc5e60bfad0ca05810ff2e420f3d6e",
                          "f85ab643d4026774ef2e570a39388d65",
                          "dbcaf75defaa5eeed985ae3646c59aa0",
                          "fdfb4d38f533fe3aaf153cf738dfaed4",
                          "12e4056e8ff563da816db09b3dbc0a7f",
                          "bffb1a9a323637bf489e79f5622899d0",
                          "3299207320aeb20cf79214fcb64ea899",
                          "c0a3eb7568953c4341bcc7187726482c",
                          "0d0efddbc33c78f9e340de9ed2d09571",
                          "a2799d897580dce409354db7e55f23b7",
                          "d5ed858797db735e0d155177d64a248e"
                        ],
                        "newNode": true,
                        "pid": "1693294540661",
                        "rules": [],
                        "style": {
                          "background": "#cef2f5",
                          "color": "#333333"
                        },
                        "level": 5,
                        "uuid": "c88e0dcc-c911-42bb-b18d-05313fb8897d",
                        "data": {
                          "text": "蒸发器",
                          "lineWidth": 3,
                          "paddingX": 8,
                          "paddingY": 3,
                          "expand": false,
                          "uuid": "c88e0dcc-c911-42bb-b18d-05313fb8897d"
                        }
                      }
                    ],
                    "expand": false,
                    "focused": false,
                    "id": "1693294540661",
                    "label": "制冷和空调装置",
                    "linkId": [],
                    "newNode": true,
                    "pid": "1693294526388",
                    "rules": [],
                    "style": {
                      "background": "#cef2f5",
                      "color": "#333333"
                    },
                    "level": 4,
                    "uuid": "52352bca-7bc7-40ee-a520-b737a643a3b0",
                    "data": {
                      "text": "制冷和空调装置",
                      "lineWidth": 3,
                      "paddingX": 8,
                      "paddingY": 3,
                      "expand": false,
                      "uuid": "52352bca-7bc7-40ee-a520-b737a643a3b0"
                    }
                  },
                  {
                    "children": [
                      {
                        "children": [],
                        "expand": false,
                        "focused": false,
                        "id": "1693294624084",
                        "label": "舱底泵",
                        "linkId": [
                          "1b1da3ddcab9b7ae752419a3c849a3f8",
                          "2c221c13fbcc2c46268e1248263c81ac",
                          "213875052ca45117f73bb90d670ed437",
                          "d22431d0d902dd7f5b9c1b1574ed7266",
                          "da9d4b7cb5563b689fdb137ae455146a",
                          "acb63d9f33822cefa5e5ad80d6a9dd5d",
                          "57a933fa5e1146f4acddebd88c4cff5c",
                          "642952341c217c1646399d95472d8a14",
                          "df19323bd10471d06b39306134559692",
                          "6946d2223c9939acc7929c6272619887",
                          "cdc29ff19653c420d9df2e8c65e36c3b",
                          "e5197df85dc435fb1bb6c54c6e5334bc"
                        ],
                        "newNode": true,
                        "pid": "1693294615284",
                        "rules": [],
                        "style": {
                          "background": "#cef2f5",
                          "color": "#333333"
                        },
                        "level": 5,
                        "uuid": "0ba67d67-76a7-4de6-84d7-826e991704e1",
                        "data": {
                          "text": "舱底泵",
                          "lineWidth": 3,
                          "paddingX": 8,
                          "paddingY": 3,
                          "expand": false,
                          "uuid": "0ba67d67-76a7-4de6-84d7-826e991704e1"
                        }
                      },
                      {
                        "children": [],
                        "expand": false,
                        "focused": false,
                        "id": "1693294630357",
                        "label": "锅炉给水泵",
                        "linkId": [
                          "bb8dc7f61db82716a0ba4afe16fdf579",
                          "44c5b1f164bcc441d2a5d1181308261d",
                          "3d9f988ba29dc4084f9d45dfa7bc897e",
                          "cda715f3072fdfd94f5f773bae085a42",
                          "e98fa8b77a0fbff39ebfd7d9c31ea73a",
                          "e620f639237ce47da2f28c5198de6897",
                          "aa2b7138dba65c2eedf62ace650225e4",
                          "11464cc4cff74f7e2f76dea2043e6a1b",
                          "e45adb3fc132e27b56a7eec20f2204ca",
                          "124394939a40434ea96d889f4a620dd4",
                          "fc990be02381bb43b2c9efbfba039f79",
                          "f887802188931f4ab3854500ca8ab4e7",
                          "d0108e6f3b0e6faccb6d8262bfec5123",
                          "95fc69619fee1ad6be0d2ed8d65ec6ec",
                          "709e96922d5f290b17d2e26cfff25b57",
                          "765fd1f2215af81e4b696cbb3c5ee0b5",
                          "06a35c82428e87aef3c78c4e1edf856b",
                          "b3e1f50ddf9aede8bad7844afd586645",
                          "101ed3bec99ff0210581c5a5dfc36619",
                          "ee33689ad71724e3fc39154dc14fa9ce",
                          "9d19ffe1122497966de1e912d5b4718b",
                          "ad6dd999d71dd045b47d5ddc8822e3e5",
                          "a6dfb5fafa39ca75743623a32cdbb5c0",
                          "67d467263d8564f7fcf24b35b53b7a78",
                          "71f88c5db70802d23d1baa01e31d8234",
                          "6f80cd519867a0dc9e230ecc354b421c",
                          "916ea1d844de56f2e1a63d6f6ae801fd",
                          "1d4095ea8ed45197adc8bcb470f5444f",
                          "75d91a353fb1a0f20887b071b2f72cc9",
                          "0e59b6f44edb01c7429bbcd8ab30e7a2",
                          "3834d8ab12af36a19b531602ad444b51",
                          "fe57675874650afff18a11fae389427d",
                          "63e0dbf73d63c3c3bed43553f74ff8ca",
                          "41ddd82855b6ae8745e17e0cec7fbe8a",
                          "ab5ea442fa9bef6697de44d031ccd9a6",
                          "218db8dc0f411816c9952d839695ed49",
                          "a677a23efcdb12a68cd655d85feafe12",
                          "75ee894fd2900df396d2d59ae1ef2703",
                          "36fc30c3fe3e8641635869de180b4bdf",
                          "e1f2936ca249fdf06f48ee6b70077f4a",
                          "3406ba8188badb3c2e5b4839ea1f498a",
                          "c3453309ef8181bb4fd469ba3254d04a",
                          "367d9e39a2e335771f669591fea00997",
                          "655595e7ff9be40ade3b59c6cdfeb667",
                          "c14b7ec77f5d3d6741d3414583fcf5e7",
                          "2841bf34c33cc8283a5b8af526752bd1",
                          "fdcfe496a8a5cbe39834ea578b025670",
                          "07a7e2fae8521185d93fe20bd068372f",
                          "ed27dd4cfc8e1cc067ad5246c556ddf8",
                          "b663d1fffa2e67446709c0aa203e9c17",
                          "cc8447d948d769dab7f819bd860e6b4e",
                          "b3571f887c2bdfc165a1788cce2ada9b",
                          "be6e7a3caeeaf521b966c28252c19414",
                          "4dd21944d02237013e92e5902e9120c9",
                          "3c2bb9d761e2de6712f331b2ba0bc055",
                          "0e58a7c19eb8cf7840d2eceb94d0cfa9",
                          "8a513bca5299210c2f346dbc1648d235",
                          "95bb4aff42f3d33c2bd6bb5eddc8fa53",
                          "b625f551d1157b32acf5b6bb6ac121dd",
                          "5d68fb85db0611e65e81871ab013a5bc",
                          "54d12bf0c9921f5840de25050910485c",
                          "9b024bc1ccf9eb538d52fd7cccf5e3b8",
                          "593efba57307106d2e137dbe301babf2",
                          "11dcd8d8fa9abe3b779aa24a8728b8e6",
                          "e61a4a101e3ffad785d00b67add0be6f",
                          "17d1dfcb3ad0468a819a40cfdeea7e79",
                          "517a2036d8e4d2b5842f49dbc391d9bd",
                          "159939642c853a03c4783ec584db1d2a",
                          "904524921c5675f0c51776b3f8032334",
                          "865170a48c0f09e4e3508c062410104c",
                          "b0ecc14e3ec38d07310035399c16ac42",
                          "b6cd8cb4e2793a558ffc0825c0343a0f",
                          "0ee47d911f59b2063c8e6aec9bf47108",
                          "898c841b4eb0df1ed14c4876c392935b",
                          "5f347b412e30abbc0495d833b4c8d7e3",
                          "a5502bcddc7df6622fc277b45513d150",
                          "694cb8ee964bbed808cc9ee1a6aa8abd",
                          "2b3a68c787cf42ed43419a259bff2a98",
                          "5063d69af1b61ae06c5cddbdb45b333a",
                          "2b6cd85f9439f601260a47cfcda20c0c",
                          "413ff55f5fb88e0b78546e5be9b6fda0",
                          "0b3f81b16c24f68145868f71a5fd1279",
                          "c4b35dac11b96979168814b18d5f6513",
                          "4e361c205e7a285f190a580ecc8ad0cc",
                          "fff231ba701da0e3213671374ba1a26a",
                          "6ec74302e7e869d6b33cd5acf829d07d",
                          "ff40784116d708b0402f1abe5b0a2184",
                          "1980d65c4a70ab40f7384e7a71ae8ff5",
                          "45391615b601251db46146581005b2e3",
                          "be68e555f5406f4f12b6adf7b684b239",
                          "d3ed79777705643ac86ee6cbae8d01ca"
                        ],
                        "newNode": true,
                        "pid": "1693294615284",
                        "rules": [],
                        "style": {
                          "background": "#cef2f5",
                          "color": "#333333"
                        },
                        "level": 5,
                        "uuid": "85a57ebb-817d-45a8-a281-e762df7d73f0",
                        "data": {
                          "text": "锅炉给水泵",
                          "lineWidth": 3,
                          "paddingX": 8,
                          "paddingY": 3,
                          "expand": false,
                          "uuid": "85a57ebb-817d-45a8-a281-e762df7d73f0"
                        }
                      },
                      {
                        "children": [],
                        "expand": false,
                        "focused": false,
                        "id": "1693294635876",
                        "label": "输油泵",
                        "linkId": [
                          "02869a517dc89e1194a71445aac2cc86",
                          "2cdb34138ecb50a7aacfbfabb36449b9",
                          "199d06b8b669f76499828bf3fa48f190",
                          "406d8892c31cc721489d2bce2c08c8dc",
                          "038b1a3e6717e95db87d315f8025b5ed",
                          "58986aaec0e5047005b8bc1506de3f2c",
                          "e64084663224139ab29ccd12d963bab6",
                          "457bcb4682c5d943bea04c2c337a1493",
                          "a163570c430b08d5a9ac9b2a10ab9a16",
                          "ae9d27178a55ce52c31d343d4fc06fcd",
                          "1088e122668b872fd32f079a8ad923a6",
                          "1f3e62502e8532db9f54fb9a2a0a031a",
                          "b8957dd1a92bb53057a837f00244b6f6",
                          "5d5f2fa421bd24110a2c21090b75ad97",
                          "3cd29d4d70aa4f745150c7dbe830a4a3",
                          "7442dfb0f5af03b6ff133dbe09c834a1",
                          "0ef920a7d7bd8c83f39dab643b469fd5",
                          "bbc97afa84d60df6679d62b4727d1efe",
                          "a8ea21a8e1f687e5b4796967a9bb1f58",
                          "3059a11430796b247bcd50c656d0c447",
                          "f6e18377aaa7af02ba389cfc99f9cd67",
                          "32be9778194754ddef72b5c987ceb075",
                          "c62811cf7a0eefa0f0e48a157591c496",
                          "4f656eadd061d6867326f053c9c77526",
                          "e0757940fd9a360a352b0431bb151cf2",
                          "e4f618a868231dcb0903f01069861a0c",
                          "076edae16b5c355095b7777f08f91270",
                          "06b07b236be404c1500462bcc0d477c7",
                          "d00393111014a309d259998e114936cc",
                          "1faacc414c5f8e000c7f15e47a7ef573",
                          "5b820b57192711d7a80cbe84928adad7",
                          "9c9910c9ff0d90042347e48b147a3cf3",
                          "e66e4635d5fd0d4b252d9fbbe4acb33d",
                          "0aea53d3492ad7f57c306b5eed38dfed",
                          "7af41dfe96a40dca0a8c433800c9a841",
                          "21bc13d01a0a419193de7d2bbac3bd8d",
                          "04288d59791d49d91a177c3598942a52",
                          "3702ad617b9f856925b745f5ab648065",
                          "c138c342518c0b53b5bb00a7772d5c08",
                          "1a8a60572b5c59f4f94f94dbb1499ac6",
                          "48696e3c23a956a1903f6a9f79c0d9ce",
                          "0d2d18d6d15c4c3dc8bce34ef6284774",
                          "28bc67cdf1662df70bd9bd37fb08479d",
                          "7c0e9c4f5b5e1a9c266dce83ffa12664",
                          "b60a78fdd90fb5fc3dd4a0e95c31a9bf",
                          "2d9d8cb94d3cfbe28c77d7c2bab77c91",
                          "abd659617a7504a11e37c0ba5b4541b9",
                          "d17c2c6f5850c3b438ab85c8b0c303b0",
                          "a72f2c30eecee0ba4ae21aef23059fb8",
                          "a477bc9c5f1f7345a5598922bd422c19"
                        ],
                        "newNode": true,
                        "pid": "1693294615284",
                        "rules": [],
                        "style": {
                          "background": "#cef2f5",
                          "color": "#333333"
                        },
                        "level": 5,
                        "uuid": "caa3bfaa-cd23-42e8-a4f8-b99bdabae55c",
                        "data": {
                          "text": "输油泵",
                          "lineWidth": 3,
                          "paddingX": 8,
                          "paddingY": 3,
                          "expand": false,
                          "uuid": "caa3bfaa-cd23-42e8-a4f8-b99bdabae55c"
                        }
                      }
                    ],
                    "expand": false,
                    "focused": false,
                    "id": "1693294615284",
                    "label": "船用泵",
                    "linkId": [],
                    "newNode": true,
                    "pid": "1693294526388",
                    "rules": [],
                    "style": {
                      "background": "#cef2f5",
                      "color": "#333333"
                    },
                    "level": 4,
                    "uuid": "f6650c86-c88d-4f49-96c0-d0ee4478f7be",
                    "data": {
                      "text": "船用泵",
                      "lineWidth": 3,
                      "paddingX": 8,
                      "paddingY": 3,
                      "expand": false,
                      "uuid": "f6650c86-c88d-4f49-96c0-d0ee4478f7be"
                    }
                  },
                  {
                    "children": [],
                    "expand": false,
                    "focused": false,
                    "id": "1693294649340",
                    "label": "船舶管路系统",
                    "linkId": [
                      "b7e01339b365ada7ef62fd65a3924aa2",
                      "c2f4edc52f7ad5b478e53244eaa6af29",
                      "367a77fb3c0117d831564ca105c1cffb",
                      "6ae5bae5d2a08c0f84aad910baa81ee8",
                      "781784a113c5b1f9cc23cc8d8b71d8ae",
                      "4c3226dc51228a128bbd1b26e81891f2",
                      "41efd16b304ecad248de7f0d805d6caf",
                      "52f03c8d101fa1d3730cfc24a7d7d2ce",
                      "80b5e00ea50ea41b0b8003aaf1ed8bc8",
                      "b951ca18136cd374a6ba79462ecfc3a2"
                    ],
                    "newNode": true,
                    "pid": "1693294526388",
                    "rules": [],
                    "style": {
                      "background": "#cef2f5",
                      "color": "#333333"
                    },
                    "level": 4,
                    "uuid": "cb5314ef-3b2d-48dd-a4ac-a3ce26f4e4f5",
                    "data": {
                      "text": "船舶管路系统",
                      "lineWidth": 3,
                      "paddingX": 8,
                      "paddingY": 3,
                      "expand": false,
                      "uuid": "cb5314ef-3b2d-48dd-a4ac-a3ce26f4e4f5"
                    }
                  },
                  {
                    "children": [],
                    "expand": false,
                    "focused": false,
                    "id": "1693294663060",
                    "label": "造水装置",
                    "linkId": [
                      "33ca3de4a951f13b6baef00f16b8e530",
                      "06bbc6fd021864f617445794461c5757",
                      "67ca71c6df5a0eab2c1c592ac223e334",
                      "64130a26edc4987efe819fa253e8de2e",
                      "b615f71b03d51a59ace2ee60e0984b25",
                      "8f974b8994c86a6bced089239bc74dc4",
                      "5ce5526874bf7b853f9d21ac0c5e40ef",
                      "af421afbef6a799dd05076169fb73886",
                      "d63e669cc61fcc40bf3da12996adbcf1",
                      "4bec7a1d3f4e2d7a54b934fc7686735c",
                      "208918425048c1ca7673b2a8b6abcdfa",
                      "47677e30043d1d9784428a40f9dba99f",
                      "2b966e02d843a7951744168866b180e1",
                      "40b2e26aae94c1aabb1bd8e89c647ac5",
                      "c254391394c5d3ce3b89907c0011f73c",
                      "123dd15bd768c5cefc71ec0687751d8a",
                      "da91657ffa4647bf74db2e9cdab4b36e",
                      "8bc8116ac457554045eacf2246ecbe0f",
                      "cf3ea41ce3159e4de917cf9082bb3fb7",
                      "8bfc5a2d9587cd763aece71bd6bdc5f8",
                      "4c1738ff403f39190ff89c4ca794ed0c",
                      "446f9056a6b535eaba1ce92e4d70e6d0",
                      "6e317af12642365ef1c07121d4e909e8",
                      "cb38246b22385b5af64dcb56c0ab29b0",
                      "9b70d761f30f088c967b26d4e6570886",
                      "bf083f63fc3e753a0dca4f902e3dcd8c",
                      "0c74b38e2d9ba0ed39629b14b0d090cf",
                      "2b031f16466afda62372edf77d14c231",
                      "e7086a5fd63b8202066a6c41d4887554",
                      "8a306fa8e321f6a3bb3caf4ac420f125",
                      "c009c9bb588f747e6fd94e275b45a9f9",
                      "9867a3f6a7f6b664f50ec7a31ad64e58",
                      "015cd61ff3dfa29d1a4bb139b0b73952",
                      "8313f150295a090d440fa83721d55578",
                      "45d56282b565548040596b6968ea41b9",
                      "6c7b2534b5ab7e415ba0c300e41b370b",
                      "d1cb2e25968fc6613b172d9f9d0e0b07",
                      "e0ec7d07aa3babd2d3c4b4077e1cbaec",
                      "60218d841154e907ae17f1b3cf27c675",
                      "509e22d97113964477096dd80c8866d4",
                      "938996932e34aea9645bb4499bbad6bd",
                      "a28ce8e88efda85696b4cddac0ba183a",
                      "a4dfd127830273911ed4a1de40af41d9"
                    ],
                    "newNode": true,
                    "pid": "1693294526388",
                    "rules": [],
                    "style": {
                      "background": "#cef2f5",
                      "color": "#333333"
                    },
                    "level": 4,
                    "uuid": "aba74e11-3efd-43be-b70d-91779d865100",
                    "data": {
                      "text": "造水装置",
                      "lineWidth": 3,
                      "paddingX": 8,
                      "paddingY": 3,
                      "expand": false,
                      "uuid": "aba74e11-3efd-43be-b70d-91779d865100"
                    }
                  }
                ],
                "expand": false,
                "focused": false,
                "id": "1693294526388",
                "label": "动力设备",
                "linkId": [],
                "newNode": true,
                "pid": "1693294363037",
                "rules": [],
                "style": {
                  "background": "#cef2f5",
                  "color": "#333333"
                },
                "level": 3,
                "uuid": "ff3c4b67-7512-4445-8e9e-7cc39a2cfbd9",
                "data": {
                  "text": "动力设备",
                  "lineWidth": 3,
                  "paddingX": 8,
                  "paddingY": 3,
                  "expand": false,
                  "uuid": "ff3c4b67-7512-4445-8e9e-7cc39a2cfbd9"
                }
              }
            ],
            "expand": false,
            "focused": false,
            "id": "1693294363037",
            "label": "船舶配套设备",
            "linkId": [],
            "newNode": true,
            "pid": "-2",
            "rules": [],
            "style": {
              "background": "#cef2f5",
              "color": "#333333"
            },
            "level": 2,
            "uuid": "dd57e871-e52d-49a6-a90c-ced2d0a3c98f",
            "data": {
              "text": "船舶配套设备",
              "lineWidth": 3,
              "paddingX": 8,
              "paddingY": 3,
              "expand": false,
              "uuid": "dd57e871-e52d-49a6-a90c-ced2d0a3c98f"
            }
          },
          {
            "children": [
              {
                "children": [
                  {
                    "children": [
                      {
                        "children": [
                          {
                            "children": [],
                            "expand": false,
                            "focused": false,
                            "id": "1693295843698",
                            "label": "船用柴油机",
                            "linkId": [
                              "8ea3c519c73b3a160eca3bdad16f1999",
                              "7c8aecaa67034eb089de4375e5efdd2d",
                              "c9b67167d715235b1743ab93aaf7d1ed",
                              "164e6264927ff7cfd0992ad45f8a2901",
                              "85dda17b1040366d4b566c46fed9b239",
                              "a2b342f5e147f873fff180daf30fa305",
                              "12cab122d2bd39eaeb97ad9ba093002d",
                              "433c5be106f71aa809be604418e21a35",
                              "1a1e46c98d11cf1e7e1b48c9fe39ca20",
                              "9a218868cc340ddc8eee5a110d21daef",
                              "0d4c03f4d245a111464ae9dc11a8acbc",
                              "60b6a5a13d036e22d7f690b2a9932d3d",
                              "b16123166c44654d09ee5d230102f7e1",
                              "30ed9da486bfb460f3d972936a632092",
                              "6f0fd97506241cdd7fbc521acfd1d400",
                              "fb8ce0fe52dce94adac0e969a359d736",
                              "5732514cd86d5b09c9b254f87024af6d",
                              "2783c1f2e71fe1f603ff3036ad351c19",
                              "4537eec17ccbab00a061f023d02bce91",
                              "cf1437fc0a87f589ac6341f4c5363c2e",
                              "b79bf046f4267c60cc0893265cad652d",
                              "f35c5303ff547adf786796ef3bf4abbe",
                              "845f157fa41141b45165c7a233d8ca53",
                              "1a412649224414a43b9c998aa91dad49",
                              "47ff646c5ac3b490ad9b9dac3aa50592",
                              "8e3fd78da323d7604570c60bad41c002",
                              "3ce3d92f304a8082845e50cde0f46baf",
                              "57d95aadf13100d5b806ad8f6f6b0ce9",
                              "98cb4ba1d8b641cfeae5dd965876fbf0",
                              "5658d3a35ac435deb6dfbf1b78822c0f",
                              "9efa92452326c866cf4858fa8af827a5",
                              "4e451b40f0789507165d7d0d9974b153",
                              "7ca64b50489dbe41539dfb8437a58a69",
                              "ed9d679ed61ef61392be561a94540f2e",
                              "be67747a584d752fb533197d78bf3825",
                              "d847f5669c4d5eac2ca42f02337d6f0e",
                              "36f4c88f9baad4646ef130c9511c176d",
                              "a8d6c400f24b99005c24092ca23bd78b",
                              "a7d8961b163868e5e96774f3c028dd93",
                              "b075f595c0e0216d8d5ab7087a8762b6",
                              "f29f1b2115e685be3fe1ada35b433010",
                              "0ae07021b60f8c65012f2049613a32c7",
                              "3b98a303ef87e0b1b52e2b11f6ceef0b",
                              "19284a8b14f430035f6ed8ed15cec6f0",
                              "ec6acaedeeb09a5b0c8b524f7e586d56",
                              "80c771b533293ff16ac23799a123a458"
                            ],
                            "newNode": true,
                            "pid": "1693295790778",
                            "rules": [],
                            "style": {
                              "background": "#cef2f5",
                              "color": "#333333"
                            },
                            "level": 6,
                            "uuid": "b44cd2d0-575d-4ed6-a016-180e49584da0",
                            "data": {
                              "text": "船用柴油机",
                              "lineWidth": 3,
                              "paddingX": 8,
                              "paddingY": 3,
                              "expand": false,
                              "uuid": "b44cd2d0-575d-4ed6-a016-180e49584da0"
                            }
                          },
                          {
                            "children": [],
                            "expand": false,
                            "focused": false,
                            "id": "1693295851802",
                            "label": "船用燃气轮机",
                            "linkId": [
                              "51e1232d86fbfdeb794634619001ed32",
                              "e7b47f7e4174174c6151f20b3b0da004",
                              "9dc7ca453f57b9fc3b838fe8a0c66a07",
                              "13cb1c3d7cf7430e2be349c76fb51e31",
                              "ffb8e38ba2d8813fbeb78791255fbe16",
                              "d8f13770fd9a9a14a5ce686b2e51a7fc",
                              "185deb37cce15068862122d459e9c0d7",
                              "2f86014dd0d5de98571adc73c7e93dd7",
                              "930f5f46635defd3066c2def97329629",
                              "a8ba2d336c575a87af60d2092d3efb7a"
                            ],
                            "newNode": true,
                            "pid": "1693295790778",
                            "rules": [],
                            "style": {
                              "background": "#cef2f5",
                              "color": "#333333"
                            },
                            "level": 6,
                            "uuid": "ce13ea17-b19d-46a6-9fce-64a2e98b9e15",
                            "data": {
                              "text": "船用燃气轮机",
                              "lineWidth": 3,
                              "paddingX": 8,
                              "paddingY": 3,
                              "expand": false,
                              "uuid": "ce13ea17-b19d-46a6-9fce-64a2e98b9e15"
                            }
                          }
                        ],
                        "expand": false,
                        "focused": false,
                        "id": "1693295790778",
                        "label": "船舶主机（发动机）",
                        "linkId": [],
                        "newNode": true,
                        "pid": "1693295773074",
                        "rules": [],
                        "style": {
                          "background": "#cef2f5",
                          "color": "#333333"
                        },
                        "level": 5,
                        "uuid": "3e842c43-5ea3-418b-8a0f-eb113ee82c50",
                        "data": {
                          "text": "船舶主机（发动机）",
                          "lineWidth": 3,
                          "paddingX": 8,
                          "paddingY": 3,
                          "expand": false,
                          "uuid": "3e842c43-5ea3-418b-8a0f-eb113ee82c50"
                        }
                      },
                      {
                        "children": [
                          {
                            "children": [],
                            "expand": false,
                            "focused": false,
                            "id": "1693295875393",
                            "label": "船用减速器",
                            "linkId": [
                              "7f7e94219b3969a5d1dc2cb878ef8e81",
                              "4aefb6ba652b3f2378facbed8ab99742",
                              "981c1dc4cc27045c1f20d0ad747c6eb9",
                              "83fe7c120780fb30ceacb6ab031507a3",
                              "22f2c6cf21c1d3a0c051410ad1f7d281",
                              "45a290b24f8118fda768caee6df9dc75",
                              "ae3e469c1756eaef1a4ca838f90b1bf7",
                              "89150dbb5b3e834a2d79fd4141b4c1fb",
                              "4b76d30ab13f89d06e4d1976190ae15c",
                              "79524d8e558b07f3981ffa7d41b20de2",
                              "580f7a7a4e1385be53087afd38e5d76d",
                              "a1e2a543c947fca2b726d225586932bc",
                              "378741ed304b48c8fdd4d0b2b7d765e2",
                              "c57322f46aabc5822e5dba9ea28a7be9",
                              "84aaecf4e9f5cfa5f12a33e04c43e9b3",
                              "fd0f1fbcac81ed06711540d3d8e85675",
                              "3731146f083d6e42f5c0aad282516e65",
                              "d42fc4cda847e294bb212d0712f36413",
                              "0ad5af1e1034cde55e5c44b2abfe3592",
                              "45b716c073a76b9eef94da6a3777fda6",
                              "547c547fa5013c3075494ac56c46e075",
                              "ee9d5fd6ab0089084989d5d1745c47d8",
                              "160423f71ad09fe456286891834ab7c1",
                              "f8062bd3981bdcf489b2549e0a3ed43c",
                              "cac7f660ddbdd29854a75ad6c8390768",
                              "e69a6b7bea321a8b8deaf9c480971d26",
                              "205a59aba276fb157d9280effb267e03",
                              "63131ce02c26cca2793f7a8b200d7d01",
                              "ad456fd711efbbbed30e7eea1059e89f",
                              "47d4345e316e26eb4e0d9329a39566c5",
                              "30484c94226237454276fd43bf8a7d90",
                              "1b2a38e663e1190ddf481f7814b450f4",
                              "f039f713ecc4b01bea0e392740519948"
                            ],
                            "newNode": true,
                            "pid": "1693295867146",
                            "rules": [],
                            "style": {
                              "background": "#cef2f5",
                              "color": "#333333"
                            },
                            "level": 6,
                            "uuid": "193f9b52-d90e-4dbb-98e0-16c16f01a4b4",
                            "data": {
                              "text": "船用减速器",
                              "lineWidth": 3,
                              "paddingX": 8,
                              "paddingY": 3,
                              "expand": false,
                              "uuid": "193f9b52-d90e-4dbb-98e0-16c16f01a4b4"
                            }
                          },
                          {
                            "children": [],
                            "expand": false,
                            "focused": false,
                            "id": "1693295881657",
                            "label": "船用离合器",
                            "linkId": [
                              "4660ff3745f37d3e9695c453a3fb703a",
                              "abbf628001cd19ae65f5dc6fe8494b11",
                              "71a951959d6f819b27a467a076c0789b",
                              "6b16abac9b1a2c2d80a848030dee7caa",
                              "ee639c39c7a1c8091118639f6312d3a3",
                              "fb77117a58d64ee81ac8d09da64ce591",
                              "4beac366b5ab5b092b0c2441c3c1afa4",
                              "0bafafed2efc431ba064f0aea1be5f00",
                              "ded4812759294e7d1c6e881821c49b0f",
                              "8218098bbaf145c786e1bf747475b931",
                              "02bee6f9d549a9ce770c2456f6848ac6",
                              "20a048a86b0a42b698b454be14d09526",
                              "4bc5b19344f321b71ec171055ef67fb1",
                              "b55aa80b311a4b4f861f1554fe28464e",
                              "3cab3e650b33cd31737ef59e568bf39f",
                              "e8b32690e2f10d280ef798b5bfaf4282",
                              "5b078009e9748206fabc66b85af124ce"
                            ],
                            "newNode": true,
                            "pid": "1693295867146",
                            "rules": [],
                            "style": {
                              "background": "#cef2f5",
                              "color": "#333333"
                            },
                            "level": 6,
                            "uuid": "d9a4266e-59c5-4581-a551-1932c6199be9",
                            "data": {
                              "text": "船用离合器",
                              "lineWidth": 3,
                              "paddingX": 8,
                              "paddingY": 3,
                              "expand": false,
                              "uuid": "d9a4266e-59c5-4581-a551-1932c6199be9"
                            }
                          },
                          {
                            "children": [],
                            "expand": false,
                            "focused": false,
                            "id": "1693295889161",
                            "label": "船用联轴器",
                            "linkId": [
                              "f94f1e5d8e495a8303ed155d29fe103b",
                              "fec44b5d74f66dc30f378310f0253736",
                              "85ba4ac6f14ef5bcb911697ae50a014a",
                              "af07d07a2080d4e581a38da1d7cb506b",
                              "9323ecbde449018d5ce09b5fb0fbceb2",
                              "966b59ba8bf12988782deefdfa07e7c2",
                              "8c03b600cf6ca2314fef80443e4f8c38",
                              "52430153c618f9295b22b902db9b3f3f",
                              "d225a997b55c8d4a7d2f22a21c0e7ca6",
                              "c7925a6e2b0e854be9d81f0568c10eab",
                              "611b6d8b9c8c9208e8e5604acd7d0bcc",
                              "4c79fa60a6b1942a5844694b1265c232",
                              "1995958014796b6695b3a379758e58d9"
                            ],
                            "newNode": true,
                            "pid": "1693295867146",
                            "rules": [],
                            "style": {
                              "background": "#cef2f5",
                              "color": "#333333"
                            },
                            "level": 6,
                            "uuid": "3a7150f1-666b-4bbe-a6dd-fc1b2d66bc49",
                            "data": {
                              "text": "船用联轴器",
                              "lineWidth": 3,
                              "paddingX": 8,
                              "paddingY": 3,
                              "expand": false,
                              "uuid": "3a7150f1-666b-4bbe-a6dd-fc1b2d66bc49"
                            }
                          },
                          {
                            "children": [],
                            "expand": false,
                            "focused": false,
                            "id": "1693295895129",
                            "label": "船用偶合器",
                            "linkId": [
                              "6aa5554e08dec2ebf8716ad8a5db92b8",
                              "46fae25277a6612d83f6f1a4fb3af4f6",
                              "e3f3ed14f272d77a5a4a87aeea183024",
                              "f6f843ce9f77862be1826b6bb1f1caa5",
                              "1d3ce79a54b800cc147092f7d61c4606",
                              "50007986c6093d2f165b4bca4c940dc9",
                              "adbec33774895638fa82d51a84d174ca",
                              "66da190783c1457e703bf2836d4bc4b8",
                              "f8cdf67e37d59cd1efab40ebcdf11c71",
                              "02f501da03aa2c38154fc21a96ea0d3d",
                              "ca4ddc7f358ba045bca332678340be62",
                              "a4a8939bcf5a5fede1ce867b9c7fe06a",
                              "331b1e465bd19ba3831eebbde34f555b",
                              "594ff755eed73ef7bedc1cf53848758a",
                              "0077016f3ba9b66f3821fd11132b94a4",
                              "dea5be5b0b43497a48c73afc6d87a57c",
                              "54c3fab3cae464eda042ab4d8676ae2a",
                              "24d5c3f45f27ec5573ca59d2f10c40fb",
                              "0e77f674ed9db0d5c5ae09e6fe03eb4a",
                              "760dcae5a55d44f0eb56fa29371cf1e3",
                              "79fa3debe0d35954336c42a70ed0f57d",
                              "e03e479a2436042c7be12c5bb5d61d21",
                              "0727104557a90f59b761db9f7fba2391",
                              "251d7009349c2936c8f5612cbf106fa5",
                              "dd918c1c87cb20418210927c8e237752"
                            ],
                            "newNode": true,
                            "pid": "1693295867146",
                            "rules": [],
                            "style": {
                              "background": "#cef2f5",
                              "color": "#333333"
                            },
                            "level": 6,
                            "uuid": "a2224ee4-40f4-4397-b319-f595d352672c",
                            "data": {
                              "text": "船用偶合器",
                              "lineWidth": 3,
                              "paddingX": 8,
                              "paddingY": 3,
                              "expand": false,
                              "uuid": "a2224ee4-40f4-4397-b319-f595d352672c"
                            }
                          },
                          {
                            "children": [],
                            "expand": false,
                            "focused": false,
                            "id": "1693295901497",
                            "label": "船用活塞",
                            "linkId": [
                              "c40f3d31dfc592825ad07092285264be",
                              "eb84d296b1c8ec9bca55c6de8359ec23",
                              "4a3a8d321910fc0dad4862a974effee9",
                              "d32a528791c678ac0100b6ae8da9b2fa",
                              "0c88b8f77a255c269c8898d0cfb2b0ae",
                              "bba1ea8345aa263ef340156502529503",
                              "d86b6c41d56a5d2f65e4f2490eef13db",
                              "e5a24bdc55a5888cd65cab2597694bcd",
                              "61115a18133d6d7e0de7f89786dc11bb",
                              "61aeba37965c7950ea7ffe7d6348061d",
                              "5d106a68a2bb49a5a4a858e751109b5a",
                              "fda1a9b09ba82f7a2e2b683b28ef1e5f",
                              "92c853e6ee3f9f56fa4b576efaf7c3f6",
                              "c0c7b0cea5a5fd876c8c5d5206b0b29b",
                              "b2aeb797ed2bc0360aeca12179e92a5f",
                              "b05d8ff71ec089f5c4e70b11a3bf6bd9",
                              "c3108198fb6fbc84f6bcb4a5d53b7fda",
                              "399b56bf5c6397f24bc70953e86eb455",
                              "6b3c6d14b4704710bfd046375b603f11",
                              "c1c3c2dc737dbf94436fbc463174478e",
                              "3de953af7f0bc503867828badc2b1cfc",
                              "ad4fb788af0cde0911b751e55f9a1916",
                              "a5c0906d934950f418ade28a4c07fd70",
                              "2e86cf7cade39fa90b44010dc35da770",
                              "a1626892f9ff7ed01b727a9e36d1cc3c",
                              "ba569549bf7e5491e9f560e90fa11990",
                              "6d7030284c4458f78080a48ac60852c3"
                            ],
                            "newNode": true,
                            "pid": "1693295867146",
                            "rules": [],
                            "style": {
                              "background": "#cef2f5",
                              "color": "#333333"
                            },
                            "level": 6,
                            "uuid": "f0fff104-6a4c-4b61-8553-9db851d98694",
                            "data": {
                              "text": "船用活塞",
                              "lineWidth": 3,
                              "paddingX": 8,
                              "paddingY": 3,
                              "expand": false,
                              "uuid": "f0fff104-6a4c-4b61-8553-9db851d98694"
                            }
                          },
                          {
                            "children": [],
                            "expand": false,
                            "focused": false,
                            "id": "1693295908746",
                            "label": "推力轴承",
                            "linkId": [
                              "a9d4cc4cdeca18a4a988292ab63f7516",
                              "7a43c86f3dcab3def986c2b30760072f",
                              "e4f8f6621495c37746479a5e56bb497b",
                              "ad165a54f97d8cd4cb94cea55047fd5d",
                              "0187ff52d201c4ae7f42100a26caf174",
                              "16d52aa9ca63349de63ae5521f287a56",
                              "4815820d6a3a0a4b1e4ddb4a24d5ec55",
                              "4dc6a33ee0126fcf325647d37d49bb0b",
                              "7ebcddf984f04f3318e84d558665a29c",
                              "b42a064afe7a387671cab4d84b8d5046",
                              "0dc78ae4e7ceb5b7e809f735e4ef8253",
                              "d29cf97e4b80b5bff3940f006a1af0e9",
                              "36a8df8e85dd4c85daffe6873d3de075",
                              "c7ad0ad3ff0b7c2ec7c00b4e4245906a",
                              "fb385e8e95aef120951ebd6a4c33511c",
                              "fe4b4fa8859150d3993d26286c0dbaaf",
                              "f3cc5afeb396f800aa2a12977a575ec7",
                              "d4cbc202d153d6c7ed56b431a8900c27",
                              "d60548088e1a750dd3f7283686b48010",
                              "9743a4e73fa2b1c6f476e34b92a8ae5b",
                              "70ab9ec835639565045e0e025c7c5eda",
                              "6c350bafc8c9b6826e7f5fdd9653952c",
                              "13dca1b9b6c5773b8ce8a5519a415748",
                              "731fc4323b9b833d6acedd061a99b298",
                              "12336fa8c08f27331c6ce13fa3e85597",
                              "930cf6313c2bda9e0cb84058febb55a3",
                              "cf8770542de3e490a17a835c794f4c97",
                              "84f36d6bf9ef4b50bd583a4f8f90c62c",
                              "7034c62e8afb424c1ce6fa08592920da",
                              "8a5c9522f90abf2a3360c72d571431f4",
                              "be7860c119d2b70a9acb0bcf8d58c125",
                              "0e99b44a18591db4d97aba148b73d43c",
                              "827c8189d9cb3c809bf6c1b10eb8b5fc",
                              "7497cad2bd4af9c223493c9d170b6817",
                              "a768cdd331fc398f90e1d2fe02231a2e",
                              "0bfaa6954d7efecf798bfc511a9eadc4",
                              "f8a2dcb287b1150ce3801d5184b4cab5",
                              "4509292070676f16d7d8d861f9144f99",
                              "396975f0eb0c6125c6af452168cc18e4",
                              "56e09dd4f8b82337bc148699d97f8c48",
                              "dbd7758bd30d771147425bc6e912ff87",
                              "3bac7fdbca8987f4cda41d42d707c306",
                              "0a6540621bfbdd753f14e031ec02a0f3",
                              "7b3e36b3a6082bb148291cb183b7fb1b",
                              "011e61371bc6a07258ce388706a6fba0",
                              "0ac82d63f89aea1ecfcab1f52022466a",
                              "1ce5a76889f21014bfea649ef26ac8c0",
                              "ef4d85dc77de863a559f5ab193725d4a",
                              "4cfa70e4f58887bf2e959389f8ee8599",
                              "5b5705641f13947fdc3f22b946fcd730",
                              "087be7c70cababaae76e45175773ad51",
                              "cf031303e439c0e5ccd0f95f6ec6af31",
                              "79ec6e9ea6838e879b06afac1dd1d278",
                              "c5bf078423e4077d1598d32f70744389",
                              "dcefed9027080d19f15df5d49302e0d3",
                              "a0ca49fdb726e05224bf91b4168c1a63",
                              "e7bad7e11ab7575e51b175a881606cfa",
                              "ba6958102b21df54ec906e2f407643b4",
                              "6c74e50dbf38e0374c3298873f3a5ce7",
                              "a72150ae25efdf2ee064aff229560e8c"
                            ],
                            "newNode": true,
                            "pid": "1693295867146",
                            "rules": [],
                            "style": {
                              "background": "#cef2f5",
                              "color": "#333333"
                            },
                            "level": 6,
                            "uuid": "c9814add-c31c-44d3-989e-41e9e450cc13",
                            "data": {
                              "text": "推力轴承",
                              "lineWidth": 3,
                              "paddingX": 8,
                              "paddingY": 3,
                              "expand": false,
                              "uuid": "c9814add-c31c-44d3-989e-41e9e450cc13"
                            }
                          },
                          {
                            "children": [],
                            "expand": false,
                            "focused": false,
                            "id": "1693295916473",
                            "label": "船舶轴系",
                            "linkId": [
                              "498f5a8f5f6e2a764b95d066cc871e9d",
                              "bca87e5c6fa9cd3ecd55496bd2aaef3a",
                              "6e0def466df2844d27b02e1793fc31e9",
                              "fbd5c0f6525725ef0937821912682c22"
                            ],
                            "newNode": true,
                            "pid": "1693295867146",
                            "rules": [],
                            "style": {
                              "background": "#cef2f5",
                              "color": "#333333"
                            },
                            "level": 6,
                            "uuid": "05262618-5d44-4db8-9552-acd240cb26a3",
                            "data": {
                              "text": "船舶轴系",
                              "lineWidth": 3,
                              "paddingX": 8,
                              "paddingY": 3,
                              "expand": false,
                              "uuid": "05262618-5d44-4db8-9552-acd240cb26a3"
                            }
                          }
                        ],
                        "expand": false,
                        "focused": false,
                        "id": "1693295867146",
                        "label": "船舶传动装置",
                        "linkId": [],
                        "newNode": true,
                        "pid": "1693295773074",
                        "rules": [],
                        "style": {
                          "background": "#cef2f5",
                          "color": "#333333"
                        },
                        "level": 5,
                        "uuid": "2dea638c-068d-45e2-8d3d-86ad2123de52",
                        "data": {
                          "text": "船舶传动装置",
                          "lineWidth": 3,
                          "paddingX": 8,
                          "paddingY": 3,
                          "expand": false,
                          "uuid": "2dea638c-068d-45e2-8d3d-86ad2123de52"
                        }
                      },
                      {
                        "children": [],
                        "expand": false,
                        "focused": false,
                        "id": "1693295924985",
                        "label": "船舶推进器",
                        "linkId": [
                          "ee2fa47136a7fe60f26565ddf0a63a44",
                          "b8462c0c273311a9f38bb5abcdf84491",
                          "dda2baf525050d93874dc96f3f45e42b",
                          "d4eb09587209e7bc9f3499d7d3f7ffbc",
                          "38737d0fdfff4c0bf88e92b1d5eef667",
                          "7a14b74fade0574a8790a2fc5cad7cda",
                          "459cfcdd967d101ef591e85622125a91",
                          "f639c38bc257bb943c4764d1e8ed45c7",
                          "7e63c29b3819fbfd0438011a98f14584",
                          "4e7b1527cbb1bc21a286c4fe8ae0e548",
                          "fed2cf68100203b17da17a9347447938",
                          "9afe888fe764d9e229a9702597a2b295",
                          "49b4b49e9cb6e5ddb61f3c8564e1f7ea",
                          "c1f8da72bcaa2fc5bc6748a2d46c5472",
                          "72c10d236c35dc16dc4e0644dfcd42c6",
                          "5ba38da218dfce4198662e26fc3db850",
                          "09cfd1ae44ef76bcf60e55d94f995523",
                          "a1f1ac4db7e6ad7e7b65a68f8a48c483",
                          "7856bb82c8b76003fda24b3ab929c4f9",
                          "462a487a68724bdef47b7b5362c78ee4",
                          "303b5c698334d6780f1e1b46e64b9371",
                          "80157c6794ba3ecebe4bc04df09eafd3",
                          "10c475835039a90cc1b7ceecc104fa51",
                          "b5712af679c6fc21bffc7f9cf74d7b81",
                          "91beeff5e7996400567dd0278d58b828",
                          "74d82ff1751aedf36fa8afa7a8a0c6e8",
                          "67ce4038a74fe138e5251b277db7f42e",
                          "ac9bbb76ca17de13b74acc365abdbb33",
                          "328dee016f4bdbf7b597ccc382fe560d",
                          "b4ab514ecb16629986041d7f5dfaf008",
                          "51235c6c59cbe55f931f06ac260d32c4",
                          "c6979d08866cedd01269c9045d1a4e53",
                          "483d9ce2ab0f89df660415ceea2ed830",
                          "1c5f6f26eb9983ea44d084e7b5b6d218",
                          "b1e8ce6629c86d7f7660ea1dba87d051",
                          "3c47836334fa034c9813fa059e432951",
                          "56f2d2d8f31446569b34e6dfb1106a8e",
                          "48991d2e87320ee8268a9181229a0168",
                          "82c2910237827eab6bd74754a318d894",
                          "2207700948734bf52b76cea6e571a44d",
                          "9fccb80d6dd0939dbec363b82278dca4",
                          "9423145e8afa0bf3e06e3a60fa1d0a69",
                          "66068c5eaefbe60d8273d643451c607e",
                          "f0baed9c5d9b0887b34c8d08599fe586",
                          "1af1d74bb5fca0bb200e5b96777d35c9",
                          "cf37aa79ab74a53dacd786edcdc43f15",
                          "a39db7f3b2e3dd47f585747426bb04e6",
                          "26a9838cea183d054ccf5be3c243f893",
                          "3eb35ee8dfc6962980563d838d73f6f8",
                          "283b6287220634d48b6f879857c183d5"
                        ],
                        "newNode": true,
                        "pid": "1693295773074",
                        "rules": [],
                        "style": {
                          "background": "#cef2f5",
                          "color": "#333333"
                        },
                        "level": 5,
                        "uuid": "b8a54ece-3d21-4496-8098-339f966f72cd",
                        "data": {
                          "text": "船舶推进器",
                          "lineWidth": 3,
                          "paddingX": 8,
                          "paddingY": 3,
                          "expand": false,
                          "uuid": "b8a54ece-3d21-4496-8098-339f966f72cd"
                        }
                      }
                    ],
                    "expand": false,
                    "focused": false,
                    "id": "1693295773074",
                    "label": "主动力系统",
                    "linkId": [],
                    "newNode": true,
                    "pid": "1693295651042",
                    "rules": [],
                    "style": {
                      "background": "#cef2f5",
                      "color": "#333333"
                    },
                    "level": 4,
                    "uuid": "37bfbd9d-67ae-4e8a-b167-833e7362039c",
                    "data": {
                      "text": "主动力系统",
                      "lineWidth": 3,
                      "paddingX": 8,
                      "paddingY": 3,
                      "expand": false,
                      "uuid": "37bfbd9d-67ae-4e8a-b167-833e7362039c"
                    }
                  },
                  {
                    "children": [
                      {
                        "children": [],
                        "expand": false,
                        "focused": false,
                        "id": "1693295963250",
                        "label": "船用发电机",
                        "linkId": [
                          "d0f32e701757c8174379dda265f970b9",
                          "e04913206df0620a776cc71ab81d04cd",
                          "2b704b7265c273b17addf380c7412ca2",
                          "73587a8f7e18acca7ef8b7533e3e55df",
                          "4c6a6cab2c3568e47f6d5a35ac23e660",
                          "b16123166c44654d09ee5d230102f7e1",
                          "f5453925328ed27bf2a512d5411648d8",
                          "e0d5c0feee3b8d67b5a0495617cda23b",
                          "30ed9da486bfb460f3d972936a632092",
                          "6f0fd97506241cdd7fbc521acfd1d400",
                          "2b2be90f8b365a808c514fea791a760a",
                          "e2236aeca078ad44d1f532fb3f9b2d41",
                          "60caac311cafbfa459505e2a36187880",
                          "3e120163535490c46f9bf14da5119740",
                          "2b3cdd6f31c472994b3e9793ad0a995e",
                          "679dc1a243762690c6c86d4239727d6a",
                          "23acea3c82725c374dfe2b8801a6e371",
                          "32476384e3ec8f84d6492f907afd5c4d",
                          "ba002b3a4df10dabd10ea343269bbace",
                          "2f7050ddbfbc736b1e84ab89da3cef30",
                          "32bbd9bb7bcc8182290c9c624829ec76",
                          "cb9568fb65054d63af98c1d5a0b3d50c",
                          "40a7c3ed4319cda6046fb437edd57cdc",
                          "45a9b08e2022f47ff5998fa771a3304d",
                          "8f2c12076b1f5734d4377ff2b734ff74",
                          "562bf7735d87e912d5b871d0df786281",
                          "89087ec38bc77893d04f400df91b4f02",
                          "27844249f3b8a0830666bc53c2e4c567",
                          "4b40950aea9b9c67d109e6b18a1d93eb"
                        ],
                        "newNode": true,
                        "pid": "1693295942482",
                        "rules": [],
                        "style": {
                          "background": "#cef2f5",
                          "color": "#333333"
                        },
                        "level": 5,
                        "uuid": "837c6544-5696-4ae3-9ab6-f5fbc78fd076",
                        "data": {
                          "text": "船用发电机",
                          "lineWidth": 3,
                          "paddingX": 8,
                          "paddingY": 3,
                          "expand": false,
                          "uuid": "837c6544-5696-4ae3-9ab6-f5fbc78fd076"
                        }
                      },
                      {
                        "children": [],
                        "expand": false,
                        "focused": false,
                        "id": "1693295970146",
                        "label": "船用电源",
                        "linkId": [
                          "41771379eed03c4754a33a28fcbda1a0",
                          "2c9b7fe03d7dabef91101a651b289261",
                          "13d1fd1cc56b5515c1d53ff4485664d1",
                          "5f566b1f822d0152919b1b71b86f8098",
                          "c226f09bf5db2d89a9ce891723638671",
                          "ed1742b3a1325b7d627e7562e25e29dd",
                          "9cf0a21a42c5b1eca8c375701e75219c",
                          "16296bb8d9eea61083303ea394a4db36",
                          "91be4787fa4dc9d4bd59aa3a87f7320a",
                          "2dea2f6249306b9de7d9b7c116bd7c19",
                          "cab63b40269b4f08f568b1d7c13e60c6",
                          "c6d756d9a1acb25878b69bf460c9e564",
                          "88a4e0581c178d84bda3a8a14a51d590",
                          "c3f83256abd1beb6b52ffc38342da2ad",
                          "989cad4b626d0a00a3b95d385d1599a6",
                          "b8e8ffc71d324108edd14c7f1247bea3",
                          "eb25eeb7d04689c16d3687fb56dba022"
                        ],
                        "newNode": true,
                        "pid": "1693295942482",
                        "rules": [],
                        "style": {
                          "background": "#cef2f5",
                          "color": "#333333"
                        },
                        "level": 5,
                        "uuid": "40c64281-b6d2-4006-945e-e5b8ba27f4ee",
                        "data": {
                          "text": "船用电源",
                          "lineWidth": 3,
                          "paddingX": 8,
                          "paddingY": 3,
                          "expand": false,
                          "uuid": "40c64281-b6d2-4006-945e-e5b8ba27f4ee"
                        }
                      },
                      {
                        "children": [],
                        "expand": false,
                        "focused": false,
                        "id": "1693295977730",
                        "label": "船用配电盘",
                        "linkId": [
                          "a1b61eb9055872b241cd69e0f7510e6d",
                          "b250f89a91473fee8e8cdd273ad9357e",
                          "f1dbb227dc0c971c6983e1202b746551",
                          "17f4fe836c1ae5f9ef3df54f43ccf9e1",
                          "5d5215ddecd3ae01218dbe89a7e58d9c",
                          "4a324426f4a811772dc11ad8d15b4168",
                          "568f2263a8dcc1cc4d64b63b71521ab8",
                          "bc203a3e88b7692832d1aba7d9665132",
                          "f6ae0de88dfc8ce3b8d65914671db222",
                          "5f132903f98e9107f67a9e873f32b845",
                          "75df53867d707664ac80d17eb931e93f",
                          "683aa136e9dd5bb7f3544dfe283cbdee",
                          "251d91f3d606b82991c074a34cfcb2ec",
                          "c0dd690d5937d7d7811480fc5ad7c7d8"
                        ],
                        "newNode": true,
                        "pid": "1693295942482",
                        "rules": [],
                        "style": {
                          "background": "#cef2f5",
                          "color": "#333333"
                        },
                        "level": 5,
                        "uuid": "0afbdef1-865d-4c16-b923-fe4a505012f5",
                        "data": {
                          "text": "船用配电盘",
                          "lineWidth": 3,
                          "paddingX": 8,
                          "paddingY": 3,
                          "expand": false,
                          "uuid": "0afbdef1-865d-4c16-b923-fe4a505012f5"
                        }
                      },
                      {
                        "children": [],
                        "expand": false,
                        "focused": false,
                        "id": "1693295983682",
                        "label": "船用电线电缆",
                        "linkId": [
                          "45c8f28a656fddfc51bf17d35c2cc452",
                          "33ac0c9f4e6bec8a43c59be68aeea907",
                          "f14a09a09bcc2720b232112f48bae446",
                          "fae9bea216965f065c49d29df0de0c74",
                          "df405e264ba4742ae040d0639cf2039c",
                          "513fcdb93aa058475acd1bb6b2cd00ad",
                          "c83cc43cb0c15ddf851fc3c44ad601d9",
                          "79751a8927073a462f0401c72eaa8d31",
                          "4c8de5f8cec1c2c0a99bd4a9b11624ff",
                          "b2e2fee78f32384522c682dc32a3a4a9",
                          "9e2cfb3f3e206b3b918b88284e6c2187",
                          "3e2e3eebcb5caf4da26f95bc9f9d4e0a",
                          "902a682677e046adb5a84cf4771f445c",
                          "45af3a942760adbad0d484731b68f79e",
                          "764249003875db9ba965a62d2b0b2456",
                          "7d212fb2c5a1c165ce529a7d2c2320fb",
                          "4d5611bbe599f557f6c23e624a4a1170",
                          "cad433ddc68ad255d9aa1a46ec3a86cf",
                          "768c0003c0bb59a9029fb2c64e00b8e0",
                          "51d333785ee5820c9ced150084c713e3",
                          "bd0a6dd2107186f04a25d97c6dd58e7e",
                          "4b1317d6e3a4f8fd496b9417f6740bae",
                          "ffc68d8ded49e4caef880ef597a21701",
                          "951992054931b85f9752e228670d2632",
                          "cae7fa1664dfc457ed790cfe7dcb9668",
                          "cbc69aaaa80eaa90cabd92c4f15200ab"
                        ],
                        "newNode": true,
                        "pid": "1693295942482",
                        "rules": [],
                        "style": {
                          "background": "#cef2f5",
                          "color": "#333333"
                        },
                        "level": 5,
                        "uuid": "5fe2a850-bff0-4481-ad1a-5a337de7b8ff",
                        "data": {
                          "text": "船用电线电缆",
                          "lineWidth": 3,
                          "paddingX": 8,
                          "paddingY": 3,
                          "expand": false,
                          "uuid": "5fe2a850-bff0-4481-ad1a-5a337de7b8ff"
                        }
                      }
                    ],
                    "expand": false,
                    "focused": false,
                    "id": "1693295942482",
                    "label": "辅助动力系统（辅机）",
                    "linkId": [],
                    "newNode": true,
                    "pid": "1693295651042",
                    "rules": [],
                    "style": {
                      "background": "#cef2f5",
                      "color": "#333333"
                    },
                    "level": 4,
                    "uuid": "612d4835-c856-4fe7-9c1b-e9ccb15e4f67",
                    "data": {
                      "text": "辅助动力系统（辅机）",
                      "lineWidth": 3,
                      "paddingX": 8,
                      "paddingY": 3,
                      "expand": false,
                      "uuid": "612d4835-c856-4fe7-9c1b-e9ccb15e4f67"
                    }
                  },
                  {
                    "children": [
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "children": [],
                                "expand": false,
                                "focused": false,
                                "id": "1693296044282",
                                "label": "船舶广播",
                                "linkId": [
                                  "90a0b51fc266e63aa26345b0e6732898"
                                ],
                                "newNode": true,
                                "pid": "1693296038202",
                                "rules": [],
                                "style": {
                                  "background": "#cef2f5",
                                  "color": "#333333"
                                },
                                "level": 7,
                                "uuid": "49c42530-3894-4a24-83cf-e4ebc9352e23",
                                "data": {
                                  "text": "船舶广播",
                                  "lineWidth": 3,
                                  "paddingX": 8,
                                  "paddingY": 3,
                                  "expand": false,
                                  "uuid": "49c42530-3894-4a24-83cf-e4ebc9352e23"
                                }
                              },
                              {
                                "children": [],
                                "expand": false,
                                "focused": false,
                                "id": "1693296052218",
                                "label": "传令钟（车钟）",
                                "linkId": [
                                  "51d91a5ef6338fbaf48d4fb2e622a83a",
                                  "be61b025ecd4ec5b2a43a974a1443fca",
                                  "af5f321e7212a32070e797367b6c40d0"
                                ],
                                "newNode": true,
                                "pid": "1693296038202",
                                "rules": [],
                                "style": {
                                  "background": "#cef2f5",
                                  "color": "#333333"
                                },
                                "level": 7,
                                "uuid": "595fe430-b394-4d0d-b430-157c36a1b3f8",
                                "data": {
                                  "text": "传令钟（车钟）",
                                  "lineWidth": 3,
                                  "paddingX": 8,
                                  "paddingY": 3,
                                  "expand": false,
                                  "uuid": "595fe430-b394-4d0d-b430-157c36a1b3f8"
                                }
                              },
                              {
                                "children": [],
                                "expand": false,
                                "focused": false,
                                "id": "1693296058754",
                                "label": "报警系统",
                                "linkId": [
                                  "b74b6e6e76adb78151dbb6f65a1f911d",
                                  "9067a44ce70b56750f21db59b358cb74",
                                  "300556ad9efcbe1e6ecac37df6f7de75",
                                  "ad90d71db855388a98380d3c52af1b34",
                                  "2be88a7684e34a1698744dff65b2196f",
                                  "4b98f694da16540e6b0997ab46a7ac1f",
                                  "a6a1be1072c7c790476acd3631454a38",
                                  "c6bd52296ba57172ab61e4181722bba5",
                                  "f4942f8d701754b0c0f952e124b7b51c",
                                  "551600ae454958bb4e5c9dac5724fa3a",
                                  "a1671f18b842cc6af274adcde66fd466",
                                  "2e155ec2253732b9cfd9b0864d810fb4",
                                  "be32e4513195c328d3909f8b363147fc",
                                  "b3242e89c9eafce13827d355d5ac31e4",
                                  "b8ed0e801ed2ab0c101d8e8d5c014ad5",
                                  "e4ac209d715904cede92a53f7de0762c",
                                  "92f9d0baa725c8e21188afa7d96d4089",
                                  "85f1071c20ecf1746fdc3d46ab259722",
                                  "75c54acb375c4f96b35b045a75e181d1",
                                  "8c6052843652ab00f183cd5e26616a13",
                                  "e4cb656fa2b0112d55bc1cfc4b5c3605",
                                  "d6ee4b81c4b57abb46fed6212db63c5a",
                                  "36da5561516b1cb59f270b463741ced7",
                                  "a128758090ac8865833a40771fe5d8c2",
                                  "c07c2f24af1c5d1bc0e2ed7995ac1b45",
                                  "4d3542ef398c4ce329a57fd931361cb3",
                                  "1b6230aa3a757328465376ddfa024431",
                                  "718b990b2df123767ff1067270645aaf",
                                  "9f80af7372be4951b2897f2ecd316701",
                                  "4374bedd620640c83b754f47d8c18c81",
                                  "be010414167840f48932f210acc554d3",
                                  "c2f24a821a5e84e6c9864b3f19c8d23f",
                                  "9238db6aa05947af2b9ac180c148f2c8",
                                  "17554cee4fb04a0ca79f7047bd5037c7",
                                  "7ca39ecaa19a6275af0c3ca26e2372d1",
                                  "2345b5a48fb0badef0e88c7509ed5de5",
                                  "500f7113a9b119f4fb56959606085959",
                                  "15680ffe5aff73ae705da9346918f5cc",
                                  "77d765fcf34d01db579c44ffbc1bd277",
                                  "96af661dda307782d1c03724ea0904f4",
                                  "3cda399caa44d8e4f042d9ff7066c3b7",
                                  "eb482872357329f61e63803bddd1241e",
                                  "84cfee7f5870b4c130e573db4669a1e5",
                                  "0b153ffb3ed86cc162b5efe5e3759639",
                                  "55e8a98417c01da0bd722906ec987205",
                                  "2152057c323e49562e31970ed6eeba9f"
                                ],
                                "newNode": true,
                                "pid": "1693296038202",
                                "rules": [],
                                "style": {
                                  "background": "#cef2f5",
                                  "color": "#333333"
                                },
                                "level": 7,
                                "uuid": "87a7a273-9888-4cb0-b410-d0816f7a4c27",
                                "data": {
                                  "text": "报警系统",
                                  "lineWidth": 3,
                                  "paddingX": 8,
                                  "paddingY": 3,
                                  "expand": false,
                                  "uuid": "87a7a273-9888-4cb0-b410-d0816f7a4c27"
                                }
                              }
                            ],
                            "expand": false,
                            "focused": false,
                            "id": "1693296038202",
                            "label": "船用有线通信系统",
                            "linkId": [],
                            "newNode": true,
                            "pid": "1693296024850",
                            "rules": [],
                            "style": {
                              "background": "#cef2f5",
                              "color": "#333333"
                            },
                            "level": 6,
                            "uuid": "8702512d-7f2d-4ed2-9267-2c740ef22391",
                            "data": {
                              "text": "船用有线通信系统",
                              "lineWidth": 3,
                              "paddingX": 8,
                              "paddingY": 3,
                              "expand": false,
                              "uuid": "8702512d-7f2d-4ed2-9267-2c740ef22391"
                            }
                          },
                          {
                            "children": [],
                            "expand": false,
                            "focused": false,
                            "id": "1693296068706",
                            "label": "船用无线通信系统",
                            "linkId": [
                              "ddf366ac21ff2fa7e9885ad3871a8607",
                              "dd50655ccb9ac0259323246183ad7160",
                              "8841dd6eeffd697525d443daef776c86"
                            ],
                            "newNode": true,
                            "pid": "1693296024850",
                            "rules": [],
                            "style": {
                              "background": "#cef2f5",
                              "color": "#333333"
                            },
                            "level": 6,
                            "uuid": "7487d935-465b-4272-9ed6-082ec9c5c3cb",
                            "data": {
                              "text": "船用无线通信系统",
                              "lineWidth": 3,
                              "paddingX": 8,
                              "paddingY": 3,
                              "expand": false,
                              "uuid": "7487d935-465b-4272-9ed6-082ec9c5c3cb"
                            }
                          }
                        ],
                        "expand": false,
                        "focused": false,
                        "id": "1693296024850",
                        "label": "船舶通信系统",
                        "linkId": [],
                        "newNode": true,
                        "pid": "1693296014826",
                        "rules": [],
                        "style": {
                          "background": "#cef2f5",
                          "color": "#333333"
                        },
                        "level": 5,
                        "uuid": "9cfe0ad3-0879-499f-bd98-b733e5bb94f1",
                        "data": {
                          "text": "船舶通信系统",
                          "lineWidth": 3,
                          "paddingX": 8,
                          "paddingY": 3,
                          "expand": false,
                          "uuid": "9cfe0ad3-0879-499f-bd98-b733e5bb94f1"
                        }
                      },
                      {
                        "children": [
                          {
                            "children": [],
                            "expand": false,
                            "focused": false,
                            "id": "1693296109274",
                            "label": "船舶导航系统",
                            "linkId": [
                              "298a1f63ccd3f1d359079ac7fe601c4a",
                              "94b86e582ebc059a1d86bbb7f1399992",
                              "164042046806a466c33dde0dc146378a",
                              "0322edb6cd25d3af29069dbe5059a927",
                              "164a5d0ffee58c83abebf69387c52258",
                              "531acd739b5fa265126d0f9da7e6c047",
                              "0b057629f069a37d00812212a96436f5",
                              "1bcbde8f77078bada4198107f941efef",
                              "2506b2d5cf513de0f16cdf1aee689b76",
                              "8936028c3bc359fb03cdbb50bcd729d4",
                              "d797474a5c4b5bb4b856372af4906080",
                              "c012f7e1193903178236cf6620d58547",
                              "efaa65f9880b0b5669577976b6c65f0a",
                              "540dc8f5007abbb35b9105de8e0bfbec",
                              "21b09d69539a79055dd3ff15585b2aea",
                              "ed79a140a0fbd18b9975e194af8534c3",
                              "cef790b8d66930ce53e3fb4c7bbfd081",
                              "d5893c295e007bc8ba47ca970406e98b",
                              "6d39480577219514a503f8c81a8ab627",
                              "f62970f2851b98b455487fad7fc3babb",
                              "848308039d190e50d8235e9eee8639c5",
                              "276a4f9610ee065be8fe1162b7e43171",
                              "c8aa02687dd16b724b0c9c8ce2888ad7",
                              "9488d8f8d316eb061ae02270be8fe41c",
                              "d780c39d142bac75b5c4b7bba1b492f9",
                              "cbc7070531f78b0b6f2489bd86b00c29",
                              "55502d052b070ab4286bc0cf96c81481",
                              "d5ef39d298429c5b78933e5be70c0f10",
                              "9b728307442a9f95a2e494a9c6b8d09a",
                              "ed998370d268e794e23ac40ce13268f0",
                              "a62d36bd3cd1f065f30f4a916a0441d1",
                              "23f8c79fd394ff40669459f2e51d214a",
                              "95d839fade09ba4c76515a7491448f1b",
                              "2397a51d15326b4e5ac79eb9c3910ff6",
                              "61542ac022e59d1ba46d0d1fe6eec270",
                              "37a7675496c819eaadba8486930bf94d",
                              "decf6edcdcaaadee39871b9ab9e7f740",
                              "ad5e244db178beb0d604686432cabb9c"
                            ],
                            "newNode": true,
                            "pid": "1693296086234",
                            "rules": [],
                            "style": {
                              "background": "#cef2f5",
                              "color": "#333333"
                            },
                            "level": 6,
                            "uuid": "d6d0df4e-4f6d-4799-a471-8bb7b5455a37",
                            "data": {
                              "text": "船舶导航系统",
                              "lineWidth": 3,
                              "paddingX": 8,
                              "paddingY": 3,
                              "expand": false,
                              "uuid": "d6d0df4e-4f6d-4799-a471-8bb7b5455a37"
                            }
                          },
                          {
                            "children": [
                              {
                                "children": [],
                                "expand": false,
                                "focused": false,
                                "id": "1693296126833",
                                "label": "罗经",
                                "linkId": [
                                  "83241cd77bc9eed4d51e9f380355ff5d",
                                  "d9c2ed1464bda940b5cdd06e552f5477",
                                  "27fdb1df1376d9cd5ca09805b7935f3c",
                                  "4ffb920059a9ca03f5b9870f069128be",
                                  "3c42da1aff1620e3313ab58c3c472804",
                                  "6a84118a7fc2b689ad2460076ab5c1b6",
                                  "ba5b81f2029ffb2bd64b3a84e97846a8",
                                  "30b38e546aac41cbbffef81e50a1cae3",
                                  "1f836dcfe60f96f1175ddd2ccac937ec",
                                  "80ef3386e11c04817baf010045d64293",
                                  "a2790ff61ea2835a733f81fb72cef2b6",
                                  "336f12a6d634707e423d4428d81a9a7d",
                                  "c518fcea97c7845776ede2ecd66c815d",
                                  "e736fc140b8cfa166138d6445d94d79d",
                                  "07e90a30bd1922a2bfe74a1e9e041603",
                                  "49755457bc6bc13043fe7044ccc784de",
                                  "3a6c0e120cc1813fa5e3fdcd80c07ef7"
                                ],
                                "newNode": true,
                                "pid": "1693296118257",
                                "rules": [],
                                "style": {
                                  "background": "#cef2f5",
                                  "color": "#333333"
                                },
                                "level": 7,
                                "uuid": "a6055eba-a89a-4d3b-a6c8-4def94fad073",
                                "data": {
                                  "text": "罗经",
                                  "lineWidth": 3,
                                  "paddingX": 8,
                                  "paddingY": 3,
                                  "expand": false,
                                  "uuid": "a6055eba-a89a-4d3b-a6c8-4def94fad073"
                                }
                              },
                              {
                                "children": [],
                                "expand": false,
                                "focused": false,
                                "id": "1693296135177",
                                "label": "计程仪",
                                "linkId": [
                                  "efd20a54c6e8c558cf1187c85fba5a4a",
                                  "3fac4962c2ffb66c3cab10baf83ba803",
                                  "38e75b9a07263f450715d276d03e5dee"
                                ],
                                "newNode": true,
                                "pid": "1693296118257",
                                "rules": [],
                                "style": {
                                  "background": "#cef2f5",
                                  "color": "#333333"
                                },
                                "level": 7,
                                "uuid": "6664c121-70db-4705-9650-4f9662596dcc",
                                "data": {
                                  "text": "计程仪",
                                  "lineWidth": 3,
                                  "paddingX": 8,
                                  "paddingY": 3,
                                  "expand": false,
                                  "uuid": "6664c121-70db-4705-9650-4f9662596dcc"
                                }
                              },
                              {
                                "children": [],
                                "expand": false,
                                "focused": false,
                                "id": "1693296142657",
                                "label": "气象仪",
                                "linkId": [
                                  "e9710886c2a200e2290fee8a185fd304",
                                  "413ac86f33c02df717eb48aa2e8e5f4c",
                                  "fdd3956adb3dd7b523fc8e910b6f383d",
                                  "217fe914672c50d54012483293820280",
                                  "afdae627ed02e25ad24b86775377c52c",
                                  "6f45c17e340d8129572fdc6a3974e946",
                                  "e518d1be0c00a1af835cd6c6ba2204fd",
                                  "0880a22b2d5404b96afedef2c475927d",
                                  "3a1175b5f402682f5aef36a11003e035",
                                  "6af45ff4ce68ab64566b500e7b8950b6",
                                  "34bdaf8f75df95c9bdba74135b2ea236",
                                  "9a49fa6ffaa462028cf0b5e1e04503a4",
                                  "fceeeaf9fd3bb5e459df743444df40bb",
                                  "4daac74b8f58a66df92dc1a8bc1b19a2",
                                  "ca52c94d851c236e952ac1b090b3c92b",
                                  "2272cbdaa644d7574619b72bd5b33eda",
                                  "0e3219760c4a9a173fb20fbeb9017fbc",
                                  "f4addffcc0b295b82840cee07a367d52",
                                  "776b9a2cd3fdfa9403a24198748c1fdc",
                                  "34011c259865b043f778c2a8fb64d389",
                                  "0f9873a3855a6f19eeda425aeb4f0901",
                                  "82c5c694351d4747d1f52cdcf9ded46c",
                                  "434b63328b44cb74c89d5e5fb4873b66",
                                  "1aea42b4a953ab122b631f0696ac1691",
                                  "61f0e0e645930ecae698309ccc7f18b7",
                                  "094e45d4f409895e19d09d367a8e2863",
                                  "c15bb78221550a6c4e08d434ce5a8905",
                                  "71e22d8c73c406b4c59121962668ac8a",
                                  "7edd91665f333af8857d783b1a3ca120",
                                  "d41a2c1720473e48d229248f47d8e235",
                                  "c9033c3acc9d563da83b86d5c4780a39",
                                  "0d035444d49a43b0f851b102499f4e22",
                                  "6a22c49d48e4da8fd44d6fe145e5b7c9",
                                  "d2a8fcbcfdabe53cee87363a9ec51821"
                                ],
                                "newNode": true,
                                "pid": "1693296118257",
                                "rules": [],
                                "style": {
                                  "background": "#cef2f5",
                                  "color": "#333333"
                                },
                                "level": 7,
                                "uuid": "a2dba06b-c7d7-4dd2-8fca-0917a7b3298e",
                                "data": {
                                  "text": "气象仪",
                                  "lineWidth": 3,
                                  "paddingX": 8,
                                  "paddingY": 3,
                                  "expand": false,
                                  "uuid": "a2dba06b-c7d7-4dd2-8fca-0917a7b3298e"
                                }
                              },
                              {
                                "children": [],
                                "expand": false,
                                "focused": false,
                                "id": "1693296150945",
                                "label": "测深仪",
                                "linkId": [
                                  "276c2276065498d946c47eebb487c69c",
                                  "5781f4eee7cfa7ba9b30cd18c3c986ba",
                                  "4c6042007b261a022e1f300cda6b99d4",
                                  "b7e834bca0fab2688498484bc0cd6da4",
                                  "dc61b99bf343715e4b923d3fbd3dedcb",
                                  "96ccd590a59f1ff3aeee1a17c46d7221",
                                  "28cb8d43c0f295418d7a868b12d7309a",
                                  "c530db389adc1127d8b462130dd74d1c",
                                  "b3d498938736406b375ed0fdf2eaf93a",
                                  "9e170806c3cdfb9f43f53db8fa990616",
                                  "e45a6c2a9afb551f9ea6e9a7e7668dd8",
                                  "fec2b44a73c7d87261d02353d9443138",
                                  "1da6899573aba27373dda5bf49530a6c",
                                  "e512395d665667c9223cb5dd9c0bca65",
                                  "ffe06232cc29458aa323bc206a420e72",
                                  "647481169d147e67f10654dadff00f11",
                                  "b9f34b0a6c19d58089a4f4fa4679c13c",
                                  "897f539fbbbb34aa35ba2175f1469d71",
                                  "940ff7ab27e56917573aa03652a18f19",
                                  "e2b7f67dca76ecca731bc2de006ddda1",
                                  "58b72de4499ab45653d296edbd3e32d5",
                                  "a1a7a7be0076ea7b35ebe0444cd3dcbf",
                                  "4f358247e6a65b7d88529dc6845e1073",
                                  "ee4217b2884e7b06eb5bda6509891a15",
                                  "97e7c3cd2a9155a9223d89d1ca781b89",
                                  "2b83fc3900da0a07b6803e2bf6b18280",
                                  "1d7f2be043dfe5611708663adcca90ed",
                                  "421bb8ce96334f72f90362d59eb3e168",
                                  "9daa4b5c1d568cf6db50e60f39df5e2d",
                                  "e68c7b5878e7261c95c6c581d406631f",
                                  "d1cb6bb00c237efacbd21efa475b594b",
                                  "8e6397a33c7bbaee96628e21d8288bc2",
                                  "fc4b35beb92b5e8a1e8ba5f26fce8083",
                                  "46507a32f750b7467047779f632b9b66",
                                  "d38a64c2585d5d8c160dfc0ca5a2c1b2",
                                  "10fac371cd88edc961996da3515fb668"
                                ],
                                "newNode": true,
                                "pid": "1693296118257",
                                "rules": [],
                                "style": {
                                  "background": "#cef2f5",
                                  "color": "#333333"
                                },
                                "level": 7,
                                "uuid": "480cf3e9-e99e-41da-ae7f-41d0cb63d928",
                                "data": {
                                  "text": "测深仪",
                                  "lineWidth": 3,
                                  "paddingX": 8,
                                  "paddingY": 3,
                                  "expand": false,
                                  "uuid": "480cf3e9-e99e-41da-ae7f-41d0cb63d928"
                                }
                              },
                              {
                                "children": [],
                                "expand": false,
                                "focused": false,
                                "id": "1693296158489",
                                "label": "测向仪",
                                "linkId": [
                                  "cd5a170ba83f6d9b73bfb90d871cb9bb",
                                  "2d5e842b6cb1f918e08120a07fdd9167",
                                  "db971cda3a86e58a98c1110974d9caad",
                                  "7375ce432f1218137c4a2cce100f990e",
                                  "27442ac7c824f05e91865266ac12f352",
                                  "ec64e6907e84ea777782776ee054f3da",
                                  "22e4f2e8d33d79566ec6571be2c4f517",
                                  "4c49ab901224b8a17b254deb30ef452a",
                                  "3bd2dbcc17d4f869270b251bf0d39253",
                                  "dccbc45979ba42ea1bc263d8edaee317",
                                  "32143b72aaa203b4d43faa28f633e486"
                                ],
                                "newNode": true,
                                "pid": "1693296118257",
                                "rules": [],
                                "style": {
                                  "background": "#cef2f5",
                                  "color": "#333333"
                                },
                                "level": 7,
                                "uuid": "5cc5c1f9-4855-4b1d-9366-a20568da8c96",
                                "data": {
                                  "text": "测向仪",
                                  "lineWidth": 3,
                                  "paddingX": 8,
                                  "paddingY": 3,
                                  "expand": false,
                                  "uuid": "5cc5c1f9-4855-4b1d-9366-a20568da8c96"
                                }
                              },
                              {
                                "children": [],
                                "expand": false,
                                "focused": false,
                                "id": "1693296167473",
                                "label": "导航雷达",
                                "linkId": [
                                  "24c5a0b76fc81fc2cfa1a6f7c24cc6c3",
                                  "937f5ab0ab451e42c4f34699e9254b93",
                                  "dfd612239eee1cd9eac802926d037911",
                                  "44d8aa2001a9845d6f9a5e14705a3cb7",
                                  "7e56198e23ac994d3157d33f86a55c39",
                                  "5ff9a5b0ec0fbb7d2c7553b37a74c90b",
                                  "c4d7cbdc19421c9186a1b8481e5ea827",
                                  "8a98ca04e9b8cc60d8640ecf45bf6b6a",
                                  "c5fcaf5066ccd1faf382e49811b5e82d",
                                  "f5f49ea9f969b61f3fb5780a6bc5e8c5",
                                  "43b77c89cd1e23653e49e55274fb53cd",
                                  "dff1a1b3c55800534943c07bc2d15834",
                                  "9c78139e29a81c06c886c6788367381f",
                                  "f95f8bfeca99edbaf1d4ee025768bfd8",
                                  "b02b073347f9f3f093875a6e288e0422",
                                  "b7414cfa50e2cd04e967a0f327db1fa7",
                                  "4779142105e8aa28a44317503ea62fe2",
                                  "c67b66a91414a790f5f6b3be84f98e86",
                                  "0bf23a80930eafe0162fe516626610dd",
                                  "b62efd18bd36d458a81e14f72398793e",
                                  "24d68ba4a627ca6aef7c8b4c40dc8340",
                                  "db851bd4d74436c03513318b04d79b16",
                                  "9299cbdb988538e2ff0aba43a07c4f7b",
                                  "12e92d5cb416767c8c91ce8a9cf1c45f",
                                  "d2fa89df3f156cde00d333675230a19f",
                                  "73dd5937f0b74c49d2f24d84b8260afb",
                                  "0b59c033c599a1920cfde31624d2256b",
                                  "081207211b60fb2257a9b08fda82e37c",
                                  "e61d33cccc09ca2d21ffac6537a7e3a0",
                                  "c808f1dad54d98eed85fad159c8b0751",
                                  "8f1177a4b880cdbb3fe76bf5dad3cd8f",
                                  "8ed7ed549cc19584e1fd9382065b5d87",
                                  "2ac01ee75b916fe154b3ae172c0da644",
                                  "ebaeaa32f42feded7496225fabd40923",
                                  "dc49d018d348a89574f99e502c28dd13",
                                  "a7cfeeff23e7151807fd6dc12b52f3e4",
                                  "d97681336c9c409abce9a0518694bb59",
                                  "042dbef4149dc975a9114563f0f6547d",
                                  "61a660c1345b85a28c97252267560b5a",
                                  "67cd424f33e91c4033018828b4b14a88",
                                  "6034e8cff3d3f8464954dce58268f7e1",
                                  "872f5367c5d39ead530643e489475e7f",
                                  "22258f0b0d85277ffae4809d23e95c36",
                                  "695c77b4d3889531f76cbed42990b679",
                                  "7273b1853e90cb430499fa97e97ab6a0",
                                  "0fac7f82e90158fcbf43018457a90966",
                                  "5c1647ee04b0b2376dea10a9b91cdd91",
                                  "29a0a8cf6cae7efa3d3389d61e86c0e6",
                                  "613e2a64d0abdd6e37bfcb58238f8641",
                                  "bd5eee3136d90976f9ab792774198200",
                                  "8ce10c17a76ee71f7d8dac72edf5443d",
                                  "284867dc2a2b18880a8c6b3b021a4f1d",
                                  "cf66af04fcdd682880044f4ec1a02750",
                                  "72b473a10f9bcdde2e78f890f1196ea2",
                                  "d90611ca95af053fc130706f515c27ee",
                                  "aa26852f84b9bd8e3eb06a7b87d39847",
                                  "c794448d547baa0d39132c45ae6e7346",
                                  "ea72eb531367d5c67a0f34dd5e8931b3",
                                  "72a8a6e85dce02b64fee969f16bbac94",
                                  "de7aed0553d563eccb3b7db6407cd909",
                                  "30d77e71f51ebe8ecb3b053ca8f75af1",
                                  "6f6dcb640276dfac85ed396a768f46dc",
                                  "7a7d472db981978094c2b20ef64e0bb1",
                                  "29c3d293859b65e636cc3a7c065943ee",
                                  "58ede7d92569236e65f9f4d3fd6fda31",
                                  "21fbb8e7b46207ff1168e49f54266c4f",
                                  "4cc83a63b28ecb83f6ded8628968563d",
                                  "5460c844b6497214ebe4311047ba8a5d",
                                  "975a6aaa6dd2f4ef1bff50177e3b322e",
                                  "68387c414104e6f7c00a762ff0c09806",
                                  "186d814199fad1e769c1d33932f553e0",
                                  "7074705a43077d3213767cecc6270140",
                                  "154dcf50e83f493760fd2c4464913d7f",
                                  "469f851dd242e4ad006abffd675db6a9",
                                  "95d30257a80666c79dd673bcede2ffb4",
                                  "cfb65eab3672bb7f16017a3b2d5d89db",
                                  "176dbe211d1ad2d3dfaf9b2adede5302",
                                  "f3cb8a64996df4a5d1057c1e6f0b1edf"
                                ],
                                "newNode": true,
                                "pid": "1693296118257",
                                "rules": [],
                                "style": {
                                  "background": "#cef2f5",
                                  "color": "#333333"
                                },
                                "level": 7,
                                "uuid": "e38fbbc8-e21e-453b-ab56-ec710840ee14",
                                "data": {
                                  "text": "导航雷达",
                                  "lineWidth": 3,
                                  "paddingX": 8,
                                  "paddingY": 3,
                                  "expand": false,
                                  "uuid": "e38fbbc8-e21e-453b-ab56-ec710840ee14"
                                }
                              }
                            ],
                            "expand": false,
                            "focused": false,
                            "id": "1693296118257",
                            "label": "船舶导航设备",
                            "linkId": [],
                            "newNode": true,
                            "pid": "1693296086234",
                            "rules": [],
                            "style": {
                              "background": "#cef2f5",
                              "color": "#333333"
                            },
                            "level": 6,
                            "uuid": "54353476-4fa8-4dae-b742-ecc57811e848",
                            "data": {
                              "text": "船舶导航设备",
                              "lineWidth": 3,
                              "paddingX": 8,
                              "paddingY": 3,
                              "expand": false,
                              "uuid": "54353476-4fa8-4dae-b742-ecc57811e848"
                            }
                          }
                        ],
                        "expand": false,
                        "focused": false,
                        "id": "1693296086234",
                        "label": "船舶导航系统及设备",
                        "linkId": [],
                        "newNode": true,
                        "pid": "1693296014826",
                        "rules": [],
                        "style": {
                          "background": "#cef2f5",
                          "color": "#333333"
                        },
                        "level": 5,
                        "uuid": "b16908cf-17a0-48cd-b0b5-a49e76a0132b",
                        "data": {
                          "text": "船舶导航系统及设备",
                          "lineWidth": 3,
                          "paddingX": 8,
                          "paddingY": 3,
                          "expand": false,
                          "uuid": "b16908cf-17a0-48cd-b0b5-a49e76a0132b"
                        }
                      },
                      {
                        "children": [],
                        "expand": false,
                        "focused": false,
                        "id": "1693296181505",
                        "label": "船舶显控系统",
                        "linkId": [
                          "8e760a410739473fde1e8a57bea2a1ad",
                          "b1dbbd1bae06d4c5a670d48493880286",
                          "fc5d5c00f9a86aea4eb7049079cb22fc",
                          "97f7140f86e1f6c6bcbd5de08b8f3471",
                          "4a4fb26ae23d29c1d56d84c0cf560f02",
                          "45d6ff5896494e0c0bf00bda217967f2",
                          "4b302caf24d8ad66cb676322b3149ec1",
                          "f716dacf3401505ef03871109f2b6e41",
                          "5d5da6ad4cfd9b7f0efab2f36026244f",
                          "9b266b4904c3506863b620a719d31e76",
                          "0782a1cf1a5d78df8dbc3841a73cb55c",
                          "63b6ca397ba4e856efcbc4e4836282ce",
                          "ddfa46c7ffc0fdcb1e141a48054f30d7",
                          "62005cf95ed9abab9cc2ed0eb77e52d0",
                          "d53ca8da74f4ec5409df8557aa38cb8a",
                          "7648de2166ad2b520b61e63986e55205",
                          "fc455c9ff8bc9365eb4d406f8e799045",
                          "2f85657992cdc4c750436074f3570df9",
                          "12dc57b42f8e93c358984d889600e9f9",
                          "901a07463b0bd2b6fb717e0f4de68aaf",
                          "40d91e946edcfbdb2e342af51923c4e0",
                          "0c1931e30c757fe7ca69c6650a44635f",
                          "77bcba1518ba46c5d576daef9a2a777c",
                          "a3b38ad524ad8a30be66365adc913dab",
                          "d127ac42844bcffc1e66e3fbde9b189e",
                          "2dcb2f7f4b8e0c993d1ee194d8c9dd70",
                          "7391dd59ee1ce7de072e76c4c0d2b8da",
                          "e6ff76026e7dc06671e87b6f76a82c5d",
                          "97eb68e34c9071ada113ad49d2b80132",
                          "d2e598e3284e4937734c72100665af78",
                          "205070f2fa787495028b7cfe4fc5bf9c",
                          "ca60238731973997419ae5fecf028351",
                          "cb68ca4f1109df1fedf3148943d43185",
                          "c2b942549e7842a2fd4e8659739b065f",
                          "9adc3c0d974bbac4e22107f50d97cdf7",
                          "7444b8f8f5f20272c2a226ccfe51c176"
                        ],
                        "newNode": true,
                        "pid": "1693296014826",
                        "rules": [],
                        "style": {
                          "background": "#cef2f5",
                          "color": "#333333"
                        },
                        "level": 5,
                        "uuid": "3975177f-4431-4f63-a619-2ebd1f751039",
                        "data": {
                          "text": "船舶显控系统",
                          "lineWidth": 3,
                          "paddingX": 8,
                          "paddingY": 3,
                          "expand": false,
                          "uuid": "3975177f-4431-4f63-a619-2ebd1f751039"
                        }
                      },
                      {
                        "children": [],
                        "expand": false,
                        "focused": false,
                        "id": "1693296190441",
                        "label": "船舶控制管理系统",
                        "linkId": [
                          "690ea9b14e4b84ab8b7c585f6db7931a",
                          "e577239be7b10aa39c744464460f2a38",
                          "f1571472f6d3775e9d008a83463354ef",
                          "575de0eb28d523c4c6d663b7791e2f26",
                          "11562cdcf2c36d680f4bb8bdb99534aa",
                          "6a78275afe100c4831a45508e0adc349",
                          "fb706e1ce9598fe78dfbcfa3f6b9b41a",
                          "8c594220fbf51382d360e7a2dc75a28c",
                          "751c945f49acb081c51f466bb5f4e4b3",
                          "20a56326d96ba89eb3843b552025c250",
                          "8b6c747752410492953d135e7d210b1c",
                          "33c4a2f940b0c2b14cf9a27e4d3b8447",
                          "c96148fd815ef9337067da0a192b45bc",
                          "cab5892215b20350cc85ed65f256920d",
                          "3e6803bcd1c1a30a5345daf72a954ee8",
                          "f834a32f7cb0dc7e2a55190a810e92bf",
                          "4309a4fadfbb22d275830d20ebe4ca44",
                          "1fdf33d579dbc01be237fd9af2205b99",
                          "ebb4e8da155fe41667d612b0f979b2ee",
                          "901d6363e8a33444da04647ab6596bc5",
                          "78ea7c216fc65063f926a786aba4ca72",
                          "624700c4b6f1f6d920be81563db585b4",
                          "d738eaa51be76fad49c4b771e0e87a9a",
                          "eaf8aaef92ceb3d7b59c321534e1d8c3",
                          "d61208c59726c0ca2367940d4d6186e5",
                          "d4e00085f774790a7b14dc81cd33c25c"
                        ],
                        "newNode": true,
                        "pid": "1693296014826",
                        "rules": [],
                        "style": {
                          "background": "#cef2f5",
                          "color": "#333333"
                        },
                        "level": 5,
                        "uuid": "1ae54f95-8438-44fa-9fc5-1e935570c0b7",
                        "data": {
                          "text": "船舶控制管理系统",
                          "lineWidth": 3,
                          "paddingX": 8,
                          "paddingY": 3,
                          "expand": false,
                          "uuid": "1ae54f95-8438-44fa-9fc5-1e935570c0b7"
                        }
                      }
                    ],
                    "expand": false,
                    "focused": false,
                    "id": "1693296014826",
                    "label": "船舶电子系统",
                    "linkId": [],
                    "newNode": true,
                    "pid": "1693295651042",
                    "rules": [],
                    "style": {
                      "background": "#cef2f5",
                      "color": "#333333"
                    },
                    "level": 4,
                    "uuid": "a08eaf82-44a8-4e05-92dc-b76cdb194167",
                    "data": {
                      "text": "船舶电子系统",
                      "lineWidth": 3,
                      "paddingX": 8,
                      "paddingY": 3,
                      "expand": false,
                      "uuid": "a08eaf82-44a8-4e05-92dc-b76cdb194167"
                    }
                  }
                ],
                "expand": false,
                "focused": false,
                "id": "1693295651042",
                "label": "船舶动力系统",
                "linkId": [],
                "newNode": true,
                "pid": "1693295641562",
                "rules": [],
                "style": {
                  "background": "#cef2f5",
                  "color": "#333333"
                },
                "level": 3,
                "uuid": "270300e1-3049-49a8-8b60-d970913fa9cc",
                "data": {
                  "text": "船舶动力系统",
                  "lineWidth": 3,
                  "paddingX": 8,
                  "paddingY": 3,
                  "expand": false,
                  "uuid": "270300e1-3049-49a8-8b60-d970913fa9cc"
                }
              }
            ],
            "expand": false,
            "focused": false,
            "id": "1693295641562",
            "label": "船舶系统",
            "linkId": [],
            "newNode": true,
            "pid": "-2",
            "rules": [],
            "style": {
              "background": "#cef2f5",
              "color": "#333333"
            },
            "level": 2,
            "uuid": "221ba80f-7663-41f0-9eba-d0bc94605443",
            "data": {
              "text": "船舶系统",
              "lineWidth": 3,
              "paddingX": 8,
              "paddingY": 3,
              "expand": false,
              "uuid": "221ba80f-7663-41f0-9eba-d0bc94605443"
            }
          },
          {
            "children": [
              {
                "children": [],
                "expand": false,
                "focused": false,
                "id": "1693297290719",
                "label": "船舶壳装（船体建造）",
                "linkId": [
                  "1de096760e8df5777537aef9a21829bd",
                  "c9d5b10726738a4391f1672249d10712",
                  "ce7738947402ebca572946269b65ddd0",
                  "a9d65f32bd28d8d5b6fda8023085a606",
                  "86978079aa209c3ee3a63c7f674edaae",
                  "876468cad1c2316aac5478e631d2675c",
                  "89b397c177dced32bbd326a65e9f1a4c",
                  "7032caeff485453fa47c48c378d0e778",
                  "af8cf2e8af417b9b80cd67eb2fd7926b",
                  "4fa84895fdabefe3904900f502e82ff7",
                  "b51a3b7824d64154955838ee4b352c24",
                  "073a08edbfd563055655338dfc1a1976",
                  "e1bdde9945e16a2530fdc14acbeddf9e",
                  "b57f5adc169dcd3536e3f7a1ce5f6617",
                  "b7499e244c8e29b0653296dcb764cd25",
                  "4b37b3c21c5bc9e90b91be8c30005593",
                  "eb90847589ebd81d81cb8cba963a315c",
                  "48498a9327aafd163bffa60228a5cfc5",
                  "965c504aa1ecdfbf0ea03c75587ca1d7",
                  "2c939398a8b5f7f1478bc6ffcb7bb29b",
                  "df12e0c7c4b564d04b09359e17f158ab",
                  "e0ed1c0f4008f33218ceac0a23081cfe",
                  "f57a2f69e7c7c4817bd10ca16ea3ffef",
                  "11978533c387a137cfda76d252fbc635",
                  "938abd1b296963d89377b4c78b5f251b",
                  "20b7fa8a5cc8b0f8db6251348014ab65",
                  "032d51703ae2d5301f6113efcc29fb42",
                  "cce09b1e38b21d201878e8ee31c841b5",
                  "155e98dc1ba512ebe0d48e615b7a4f02"
                ],
                "newNode": true,
                "pid": "1693297282055",
                "rules": [],
                "style": {
                  "background": "#cef2f5",
                  "color": "#333333"
                },
                "level": 3,
                "uuid": "d7b6c957-a01c-4679-ba39-f123c8d0437c",
                "data": {
                  "text": "船舶壳装（船体建造）",
                  "lineWidth": 3,
                  "paddingX": 8,
                  "paddingY": 3,
                  "expand": false,
                  "uuid": "d7b6c957-a01c-4679-ba39-f123c8d0437c"
                }
              },
              {
                "children": [],
                "expand": false,
                "focused": false,
                "id": "1693297296935",
                "label": "船舶涂装",
                "linkId": [
                  "48b9c2acd81a465c48348898a27625f1",
                  "934276a773ce8ac5725e780cb5684bba",
                  "b75cbc728ea6483cb089a35f9afbcfb7",
                  "f48a7c3f44709cdf7dabc0c5ac0046c1"
                ],
                "newNode": true,
                "pid": "1693297282055",
                "rules": [],
                "style": {
                  "background": "#cef2f5",
                  "color": "#333333"
                },
                "level": 3,
                "uuid": "62763f5a-3219-4a93-906d-3c724f7eabc6",
                "data": {
                  "text": "船舶涂装",
                  "lineWidth": 3,
                  "paddingX": 8,
                  "paddingY": 3,
                  "expand": false,
                  "uuid": "62763f5a-3219-4a93-906d-3c724f7eabc6"
                }
              }
            ],
            "expand": false,
            "focused": false,
            "id": "1693297282055",
            "label": "船舶总装",
            "linkId": [],
            "newNode": true,
            "pid": "-2",
            "rules": [],
            "style": {
              "background": "#cef2f5",
              "color": "#333333"
            },
            "level": 2,
            "uuid": "08b48d3e-00b3-43c2-b6d3-344e11bc85ae",
            "data": {
              "text": "船舶总装",
              "lineWidth": 3,
              "paddingX": 8,
              "paddingY": 3,
              "expand": false,
              "uuid": "08b48d3e-00b3-43c2-b6d3-344e11bc85ae"
            }
          }
        ],
        "expand": false,
        "focused": false,
        "id": "-2",
        "label": "中游",
        "linkId": [],
        "newNode": true,
        "pid": "0",
        "rules": [],
        "style": {
          "background": "#cef2f5",
          "color": "#333333"
        },
        "uuid": "4d2b68a8-0bd2-4936-bc34-8a2c427b6592",
        "level": 1,
        "data": {
          "text": "中游",
          "lineWidth": 5,
          "paddingX": 15,
          "paddingY": 5,
          "expand": false,
          "uuid": "4d2b68a8-0bd2-4936-bc34-8a2c427b6592"
        }
      },
      {
        "children": [
          {
            "children": [
              {
                "children": [
                  {
                    "children": [
                      {
                        "children": [],
                        "expand": false,
                        "focused": false,
                        "id": "1693297407447",
                        "label": "油船",
                        "linkId": [
                          "fc8cd0fa04d25c5f2f7d32d314ea6de6",
                          "2d9c47c57daef0fcadeb206082fc3ab4",
                          "00f1da2b66dda02d86d793394850f55b"
                        ],
                        "newNode": true,
                        "pid": "1693297399750",
                        "rules": [],
                        "style": {
                          "background": "#e0e4f8",
                          "color": "#333333"
                        },
                        "uuid": "a861c557-8279-4b05-841d-088986d4dc10",
                        "level": 5,
                        "data": {
                          "text": "油船",
                          "lineWidth": 3,
                          "paddingX": 8,
                          "paddingY": 3,
                          "expand": false,
                          "uuid": "a861c557-8279-4b05-841d-088986d4dc10"
                        }
                      },
                      {
                        "children": [],
                        "expand": false,
                        "focused": false,
                        "id": "1693297413199",
                        "label": "液化天然气船",
                        "linkId": [
                          "850314ed13d813f1efb6c6a9a64454e0",
                          "173825f54a61a3f2cc041ebead64ffbb",
                          "297ec4485397d98649212b86b70af237",
                          "38737d0fdfff4c0bf88e92b1d5eef667",
                          "7a14b74fade0574a8790a2fc5cad7cda",
                          "459cfcdd967d101ef591e85622125a91",
                          "6b68fbc0f6c649a86650c0008baba50b",
                          "f639c38bc257bb943c4764d1e8ed45c7",
                          "7e63c29b3819fbfd0438011a98f14584",
                          "4e7b1527cbb1bc21a286c4fe8ae0e548",
                          "fed2cf68100203b17da17a9347447938",
                          "9afe888fe764d9e229a9702597a2b295",
                          "49b4b49e9cb6e5ddb61f3c8564e1f7ea",
                          "c1f8da72bcaa2fc5bc6748a2d46c5472",
                          "72c10d236c35dc16dc4e0644dfcd42c6",
                          "5ba38da218dfce4198662e26fc3db850",
                          "09cfd1ae44ef76bcf60e55d94f995523",
                          "a1f1ac4db7e6ad7e7b65a68f8a48c483",
                          "7856bb82c8b76003fda24b3ab929c4f9",
                          "b774b25d5b17c886776a01c10dad2ae1",
                          "6e40ca34db3ae30fb7c974a44df080c3",
                          "8fc31a1337f31469d6f87eec0f3424ed",
                          "74124c2b03cde4d3ef63552b51247d1c",
                          "114981c73d18364d750bc19315ee418a",
                          "0430b5285db816d1be903fd5bdc5146d",
                          "582143708b622e1286e5b87c08bba19e",
                          "198f26c66d546853384f028c2873bf80",
                          "749545a63869c2ed6754018ff0cad1bc",
                          "e1dbd97bf2ac4f37360b44793dbe248d",
                          "6e119eed62d4c2e73da6b571783bfb1f",
                          "0807b4a328a0e3f2769270d93da78440",
                          "79ceda5fe17771a74473aeb7758063c6",
                          "b649810ce15503edff7c1c252b3e6af8",
                          "58ab2953bcf3041c4750b7db055f3747",
                          "69ca1cfe5ed3ea9f8eb2038d41b7d8be",
                          "8fecbe1ce16906cfb64f8d0628b08a1b",
                          "632a98f6f461fe165ffde22ff34d913a",
                          "78178fd2c65c99e06849a21f544104c8"
                        ],
                        "newNode": true,
                        "pid": "1693297399750",
                        "rules": [],
                        "style": {
                          "background": "#e0e4f8",
                          "color": "#333333"
                        },
                        "uuid": "679e1021-b4dd-4274-abd4-20d6db472778",
                        "level": 5,
                        "data": {
                          "text": "液化天然气船",
                          "lineWidth": 3,
                          "paddingX": 8,
                          "paddingY": 3,
                          "expand": false,
                          "uuid": "679e1021-b4dd-4274-abd4-20d6db472778"
                        }
                      }
                    ],
                    "expand": true,
                    "focused": false,
                    "id": "1693297399750",
                    "label": "液货船",
                    "linkId": [],
                    "newNode": true,
                    "pid": "1693297388358",
                    "rules": [],
                    "style": {
                      "background": "#e0e4f8",
                      "color": "#333333"
                    },
                    "uuid": "7fbab3b3-0ea0-45c2-ad24-c5b3000be188",
                    "level": 4,
                    "data": {
                      "text": "液货船",
                      "lineWidth": 3,
                      "paddingX": 8,
                      "paddingY": 3,
                      "expand": false,
                      "uuid": "7fbab3b3-0ea0-45c2-ad24-c5b3000be188"
                    }
                  },
                  {
                    "children": [],
                    "expand": false,
                    "focused": false,
                    "id": "1693297428063",
                    "label": "散货船",
                    "linkId": [
                      "a96fd30c44f133ea5c43ca06c9402d94",
                      "78091a59207013303bde721a62101323",
                      "64b655bac29c2564ace4a7670fb3b042",
                      "a589d962b6a73bcf1bcdf06abf02508c",
                      "cd7b4dad243f94c9e8d3ab3feb04e09f",
                      "93961f76379fd367210a392c49fae64e",
                      "c3b1b567196328fa37c646a3bc598633",
                      "629706808a710b464c4664922ae23d8a",
                      "f20629cecff08ca6e9e3efa450e89936",
                      "289ac5b995966da459dfe445ec7870ee",
                      "3d8ece5a1c686961d03e7d7302f94ea5",
                      "5f7671f59e5ba661397f9a2d2fee3e42",
                      "96defa03df15d82eeb774ea7d7fa1cfb",
                      "c2324814f895758112dbbc83ab060411",
                      "9ed4bba1b237c8b28a0208b2c362dcc3",
                      "f457bcde50473bb598521e910c8a8e38",
                      "cf85dc4a6f7f1c4021f4ded3a5cf94c8",
                      "ae2fc18504f1f6610a1aab912e465a87",
                      "73bf6f580c54743df03fb2a12d29495c",
                      "b7c7b0698e76cc38740ef4328afe8547",
                      "2fae8a9c2fdf1a0580f48216dedf7e6d",
                      "3e92600efc9a0edb4790b5ccbf591661",
                      "0aac3473b611ce82b0d469cb69154b03",
                      "f0aa498ae1f7d0bab43c7c98024ca439",
                      "967f9e0b0e6889dd474ee4e0ed25e064",
                      "f94f41b85d94159ad25b340279ceeb41",
                      "bb8064e5ad39c281c348ea186c58f7be",
                      "37a2a6c37440fa9fea433d679514fd41",
                      "43ca0e81c4c475cbbd747d743f740803",
                      "679e38c97f08b0c222acc3a0c80ea70d",
                      "805f71dbf4b0dd67ece82b92cc6ace02",
                      "65a292a15a4925d107040402bd93fcc2"
                    ],
                    "newNode": true,
                    "pid": "1693297388358",
                    "rules": [],
                    "style": {
                      "background": "#e0e4f8",
                      "color": "#333333"
                    },
                    "uuid": "6b019383-86fe-4b0a-9d66-5d64a84db15a",
                    "level": 4,
                    "data": {
                      "text": "散货船",
                      "lineWidth": 3,
                      "paddingX": 8,
                      "paddingY": 3,
                      "expand": false,
                      "uuid": "6b019383-86fe-4b0a-9d66-5d64a84db15a"
                    }
                  },
                  {
                    "children": [],
                    "expand": false,
                    "focused": false,
                    "id": "1693297434823",
                    "label": "集装箱船",
                    "linkId": [
                      "1f24a57089d95025ed4659fa1f4b042d",
                      "cff5b1879e67ab93ca2d716ce55f15c7",
                      "f38120c2f02fdad04da6d4153a39c0c6",
                      "785c8c64e8975e6858564d3c925b8232",
                      "492c0c773902915c8500a5047ddc29ca",
                      "773f81578c1ff561046b147db9f13e9f",
                      "a3b5e966554df2531b10e62abacd5b96",
                      "a7ac1b61de40006fb2ecfdfd130de86e",
                      "15bdd0414125400095979091f48d928e",
                      "4c8dbd840a638fa7045c64e068a6faa8",
                      "5e83dffc797ac0bed21c6e3b15e39c99",
                      "a3d751c0b11da22e321978e175b7bf1b",
                      "39d74fef68fb6f549a5a8dbdbfcb00d4",
                      "0cb10ec032530e492801d247ddee76d3",
                      "bef9a27bf87246fa61c68b3c4bd0401c",
                      "9ae208b79efdea24c9f4c6cf64fb4c38",
                      "a840d82afeff37f6bbd2263985672c34",
                      "3b0246321450f030e53ad7dbd2055141",
                      "bae504704e8fdf1a4e862717f23edbae",
                      "a0f33c563aa2b60f8c7182109fb2bccf",
                      "65d0af9ecf4cc68632ff4f69f0bb076b",
                      "739673f2598afae9416031d29d724f8a",
                      "74885a7d44bf84b3f3bd00996c1abde6",
                      "ddb673f5afd82357f15c26a8393ec3f9",
                      "abde357617fcfe736d8995adec966d36",
                      "7f82ead82d7d528670214bb774ab7caf"
                    ],
                    "newNode": true,
                    "pid": "1693297388358",
                    "rules": [],
                    "style": {
                      "background": "#e0e4f8",
                      "color": "#333333"
                    },
                    "uuid": "0fd36f6b-3e19-4291-aff3-4b5ef40a3451",
                    "level": 4,
                    "data": {
                      "text": "集装箱船",
                      "lineWidth": 3,
                      "paddingX": 8,
                      "paddingY": 3,
                      "expand": false,
                      "uuid": "0fd36f6b-3e19-4291-aff3-4b5ef40a3451"
                    }
                  }
                ],
                "expand": true,
                "focused": false,
                "id": "1693297388358",
                "label": "货运船舶",
                "linkId": [],
                "newNode": true,
                "pid": "1693297381166",
                "rules": [],
                "style": {
                  "background": "#e0e4f8",
                  "color": "#333333"
                },
                "uuid": "1607a9d9-d2d9-4283-a8a5-95470875fc80",
                "level": 3,
                "data": {
                  "text": "货运船舶",
                  "lineWidth": 3,
                  "paddingX": 8,
                  "paddingY": 3,
                  "expand": false,
                  "uuid": "1607a9d9-d2d9-4283-a8a5-95470875fc80"
                }
              },
              {
                "children": [
                  {
                    "children": [],
                    "expand": false,
                    "focused": false,
                    "id": "1693297460007",
                    "label": "客滚船",
                    "linkId": [
                      "3d7042eaa6d251721f6edaf0c4fe0b69",
                      "89dc2cd59f46cb6cf12121caec4d2497"
                    ],
                    "newNode": true,
                    "pid": "1693297450279",
                    "rules": [],
                    "style": {
                      "background": "#e0e4f8",
                      "color": "#333333"
                    },
                    "level": 4,
                    "uuid": "53be4705-7324-4d7a-b6ea-2b8e8673e854",
                    "data": {
                      "text": "客滚船",
                      "lineWidth": 3,
                      "paddingX": 8,
                      "paddingY": 3,
                      "expand": false,
                      "uuid": "53be4705-7324-4d7a-b6ea-2b8e8673e854"
                    }
                  },
                  {
                    "children": [],
                    "expand": false,
                    "focused": false,
                    "id": "1693297466943",
                    "label": "邮轮",
                    "linkId": [
                      "32733ce875e0b2516b86f93bd713e0a7",
                      "78bc480fcf7eb1e82393356f14a9f2f0",
                      "38c0c9e2be90b19c4ca6ea80409ecc96",
                      "6f79e8e0118900815f5bf3b501e1c0d4"
                    ],
                    "newNode": true,
                    "pid": "1693297450279",
                    "rules": [],
                    "style": {
                      "background": "#e0e4f8",
                      "color": "#333333"
                    },
                    "level": 4,
                    "uuid": "ac8f968d-91dd-4ce3-93e9-99516940ab7c",
                    "data": {
                      "text": "邮轮",
                      "lineWidth": 3,
                      "paddingX": 8,
                      "paddingY": 3,
                      "expand": false,
                      "uuid": "ac8f968d-91dd-4ce3-93e9-99516940ab7c"
                    }
                  },
                  {
                    "children": [],
                    "expand": false,
                    "focused": false,
                    "id": "1693297474310",
                    "label": "游艇",
                    "linkId": [
                      "694738159fef6ab963a861dbebcb0088",
                      "f469b4244ff3a5b2912094582c2a9976",
                      "8899bf3c711c6f10b45d9cc588e6f200",
                      "66b0f1a8785a18c4abb6715746d25952",
                      "ed36aac9f8e396afbf199020c7cc8a2f",
                      "34b995967c9b6265fbb7aec62c735424",
                      "97b8a59f9a854408d2e345cd579f8d02",
                      "3b3d6d66d189df00c58c296b35007ef1",
                      "6ed1c8a885fba35e39dce03644ac3c96",
                      "1ec03d8ecdf6508edd16437491b40758",
                      "19dd50b3a22f78eb0d58fe5bf6bd9c17",
                      "053effbcc4a6c0f52250ba12e8ab63ef",
                      "782a80284a8cf6d973019553f0173ea9",
                      "628319f44a968fcf9653ae02acd8fcde",
                      "6294c1725d7b38eadf687031ecbbf32f",
                      "c37fb3808d68098875ea85ac4bc4ee1f",
                      "f5453925328ed27bf2a512d5411648d8",
                      "e6bb1d526ac77f7a2cda534c78d84a7b",
                      "bfd01193fe0f0903fe42b7928ff5f93e",
                      "fa5ba992c4425334e0ae0c7c86c724ea",
                      "b4fb238db772b09dd6b5fb644d50d0c7",
                      "f7b9f98f2a679638b0c4d6b815191559",
                      "f5deb001adf4c76c6847235a50617a6c",
                      "ce47c1fba67932cd2611b035d5255045",
                      "c8a9dfc0ee3e4aca77b4bd0f07104d50",
                      "c2115819978562c6b29381a201720baa",
                      "aeaf50bc2f16b53eb9d26211809c06ee",
                      "ade19ad0b7052307342d37daee1de6a0",
                      "5ae5a3fd1320bed922ece4771d938fd8",
                      "8284245f08d035eda8bb48f66240724d",
                      "7de2a208629d6b7135f908e49c5ea870",
                      "848e517ad4fc1cc225f7dc349d5f3bec",
                      "7c7a87a9c8c0d977b92aa16bf8e78e88"
                    ],
                    "newNode": true,
                    "pid": "1693297450279",
                    "rules": [],
                    "style": {
                      "background": "#e0e4f8",
                      "color": "#333333"
                    },
                    "level": 4,
                    "uuid": "65c69bd8-c6cf-4ea0-a92a-247fa9dff9ec",
                    "data": {
                      "text": "游艇",
                      "lineWidth": 3,
                      "paddingX": 8,
                      "paddingY": 3,
                      "expand": false,
                      "uuid": "65c69bd8-c6cf-4ea0-a92a-247fa9dff9ec"
                    }
                  }
                ],
                "expand": false,
                "focused": false,
                "id": "1693297450279",
                "label": "客运船舶",
                "linkId": [],
                "newNode": true,
                "pid": "1693297381166",
                "rules": [],
                "style": {
                  "background": "#e0e4f8",
                  "color": "#333333"
                },
                "uuid": "6f70b0d9-b3d0-43e1-8856-14c5129facee",
                "level": 3,
                "data": {
                  "text": "客运船舶",
                  "lineWidth": 3,
                  "paddingX": 8,
                  "paddingY": 3,
                  "expand": false,
                  "uuid": "6f70b0d9-b3d0-43e1-8856-14c5129facee"
                }
              },
              {
                "children": [
                  {
                    "children": [],
                    "expand": false,
                    "focused": false,
                    "id": "1693297495526",
                    "label": "捕捞船",
                    "linkId": [
                      "e4ede5ec61b0261cb6bc4bc2ac9894a6",
                      "cef63b55e489d2361da8b9e97fbde4f6",
                      "35332ebee382d41e64d8e29ba68804b7",
                      "da7fc76e61e956cd636b0978e2530256",
                      "b0908747e4abe67b0066c94cef06ae5a"
                    ],
                    "newNode": true,
                    "pid": "1693297484894",
                    "rules": [],
                    "style": {
                      "background": "#e0e4f8",
                      "color": "#333333"
                    },
                    "level": 4,
                    "uuid": "b8412f39-41b5-4cab-b9d5-b34bbb571ba6",
                    "data": {
                      "text": "捕捞船",
                      "lineWidth": 3,
                      "paddingX": 8,
                      "paddingY": 3,
                      "expand": false,
                      "uuid": "b8412f39-41b5-4cab-b9d5-b34bbb571ba6"
                    }
                  },
                  {
                    "children": [],
                    "expand": false,
                    "focused": false,
                    "id": "1693297503294",
                    "label": "养殖船",
                    "linkId": [
                      "0a11cf150c7ecb815c477ebd8e8b6f52",
                      "15ec32b68aaec4a2805583044b6fb19e",
                      "a3904919d058a86be920d2c0066923f3",
                      "4c1a661d47f6465c12ef43ecae6bdee3",
                      "061e24918141029b6aa2d2941b6d1c90",
                      "970d17002bf836454117ea571275b121",
                      "cef944ed767dbaa9a071685fa1d37e72",
                      "8d66307b4958dc7e09ca8ac2ce4a7ff4",
                      "999436bc3b882943684a573db0330829",
                      "b0ac403792bb5688ef1ba61adab7b8f0",
                      "c0ab67d86ee025d42e9149090f85faa7",
                      "079052cdae6fd95aba3d0fb1844b75db",
                      "164df23971ff534fa5c2171739aa5bbe",
                      "8c54fd5404bf4df181f263f3c3e2c928",
                      "46e35504410cc7c2c4061abb680a17da",
                      "4845220dbc172068a4c7739b9f435884",
                      "31a180b5fa864887a3e576a59a9a88ca",
                      "787149e0174dea5d027ccd30d8604466",
                      "a7f53a74d2146495e02f76cadf3636a1",
                      "2eebef277de009ce9778be634ce1043d"
                    ],
                    "newNode": true,
                    "pid": "1693297484894",
                    "rules": [],
                    "style": {
                      "background": "#e0e4f8",
                      "color": "#333333"
                    },
                    "level": 4,
                    "uuid": "2da754e9-000a-4ef7-a1de-cf211697e709",
                    "data": {
                      "text": "养殖船",
                      "lineWidth": 3,
                      "paddingX": 8,
                      "paddingY": 3,
                      "expand": false,
                      "uuid": "2da754e9-000a-4ef7-a1de-cf211697e709"
                    }
                  }
                ],
                "expand": false,
                "focused": false,
                "id": "1693297484894",
                "label": "渔业船舶",
                "linkId": [],
                "newNode": true,
                "pid": "1693297381166",
                "rules": [],
                "style": {
                  "background": "#e0e4f8",
                  "color": "#333333"
                },
                "uuid": "9ed018d4-9d88-462c-968f-812fdf92ef5f",
                "level": 3,
                "data": {
                  "text": "渔业船舶",
                  "lineWidth": 3,
                  "paddingX": 8,
                  "paddingY": 3,
                  "expand": false,
                  "uuid": "9ed018d4-9d88-462c-968f-812fdf92ef5f"
                }
              }
            ],
            "expand": true,
            "focused": false,
            "id": "1693297381166",
            "label": "船舶制造成套设备",
            "linkId": [],
            "newNode": true,
            "pid": "-3",
            "rules": [],
            "style": {
              "background": "#e0e4f8",
              "color": "#333333"
            },
            "uuid": "73670161-7410-4574-80f3-b890dfd8dd40",
            "level": 2,
            "data": {
              "text": "船舶制造成套设备",
              "lineWidth": 3,
              "paddingX": 8,
              "paddingY": 3,
              "expand": false,
              "uuid": "73670161-7410-4574-80f3-b890dfd8dd40"
            }
          },
          {
            "children": [
              {
                "children": [],
                "expand": true,
                "focused": false,
                "id": "1693297847046",
                "label": "船舶航运服务",
                "linkId": [
                  "649827b152c5eff30fbfc62f514ca79b",
                  "d587703524304bb4b68a6e8a9c9ccff1",
                  "1043bfd92f0eb4a19aaaa0a55616e1a8",
                  "c15d88ed2187ac3fcce84f537758044e",
                  "fb282c7616ec6fc948450a97c29a0201",
                  "e30e757a2146781b78808fab2412c743",
                  "09df164e690414c666d911d00da66ad4",
                  "fda69cb90cfdc21e13d9b290be8462c7",
                  "c3948636e7c688d9e19aa0d03a946f6c",
                  "9e23783708469b4f6c9302d7e09de7e6",
                  "7a35d30071fba1e435d2f4ef5a3b8e64",
                  "4ad6a1333dc76221468f044e6deb48fd",
                  "f7fefc712864dd8d44f6ad4a1d05eda3",
                  "e7e6bd2c3c41484636cbafa1567a7c1e",
                  "b8b25c23baca7af67debb4c17b2f9e86",
                  "8e4688d0eaed5b54400159156fe54829",
                  "daa8904ec40763a5638bb558297e9522",
                  "a465879240fdd1e2a77623b69e606677",
                  "d6fa2376158984d0efa2cbe12a09251c",
                  "1b32a462e4ed5199a14f4d98e6b3c8f9",
                  "a375ac807f585d439027da1cc0b65847",
                  "5952f2175e320e625739ec3b83aea8ac",
                  "236e365dc396cc133615a7fad2f7b39c",
                  "e0abb01717869c016757caaa3de46f0e",
                  "581291c95102db7d65e9da1de73e971f",
                  "1ed6c044a2d523581c0e1f716b023243",
                  "aaf3993a6ab1c2c06db7bd8e541682fe",
                  "4268020cce5c02a3b63dc27ca19d1046",
                  "8a9b81f9a9b7e4d214203dc4249e0b1e",
                  "3475422c6beb651a2e12f686a4193f47",
                  "586d7fddb1afed3d0f85d2c6efbf35f3",
                  "b06e991cd5dbcdb4bb5cc5e634965693",
                  "fb5d42141c6555af16955986950a05ca",
                  "864631d5c509b11ee18cc8d8d427b5fc",
                  "28b0be4fb264c9e0fd2a10b45ff4b5a6",
                  "2aaf7702a54d8e3064745375eced1e98",
                  "cd3f086a6b764cd02e158f599bf8969f",
                  "88d2d7b1d7240011e64647c6121bab24",
                  "5188eee78a6f678a510f8cbf46dabb82",
                  "56fe04112b57969f13b02883d6475dd4",
                  "51e32400262e840d44b66c8e8af688bd",
                  "caa55f1649571805b8dfe2151bd0963a",
                  "fac162c2abc4ccf670b88f9986dddd5c",
                  "f9b6f94d576dc7c34e0c14fd99bcd735",
                  "490ac0b153029ef6e308cb2b00f716ab",
                  "5be4a9b28b47b342ee872b8337968d09",
                  "f8773516d5931d03c0440e954750937a",
                  "51f90cf1b0b8d1d8de3cae91e3ff856c",
                  "137419a784a1b23b9e8fed8ecfdb518e",
                  "94674591bb41602e154f10d60183b8c6",
                  "503cc9d5913873908b9496bc28cd6862",
                  "99644bab554a28a9fb3cf2024703afb5",
                  "a07c6b016f8e38d73b95fb88880a90d2",
                  "ce90251be5116377b50023908a2f8bdc",
                  "1cba3097b85606e22e754465d764e75e",
                  "e90591f6910ed53a0b2cae7b98fc818b",
                  "c46b0b083978dafa8f5d255241aae293",
                  "a14269529d076557fcaf53b4c4b2d47b",
                  "2495aa63231881efc5df5e4bc4c2fdf8",
                  "32ae60a434a9c9f6a55daa2af3b8781f",
                  "e1402b23e7cf67331127949813a86a7a",
                  "4e618cc82189c3f6a85fe772c7759f2b",
                  "f2c557fd723eaf5c4097e0ef6b88d58b",
                  "05d5b7a41592fbdc506bfbe14fafb9eb",
                  "f4c77d1795621a997fa9974ea0449836",
                  "48d3478c44e4e33b4b9ba410544a42cc",
                  "a81d7bc98677600e81e481f792412cef",
                  "5c5741480a9fe9c001a2281bdb60cf76",
                  "6d86a8113f8d62519088050d924ac566",
                  "ea55128eeb4793239ded8990d4941c28",
                  "ac45daf9b4419c6258102d66e6dfcd8d",
                  "46198945b006840f11b18a396c3a793f",
                  "51eaaae74ddba7d01fee95fee1743f1b",
                  "a3229a59c36eb084e5a8a730d96ab1a6",
                  "872ba5e3b42347fe094ec1a67238af11",
                  "db61382dccc7fc96f3b16746b2d0cb2b",
                  "4a429db26af12c2039c975e66cab5331",
                  "2af5db6e81a5f763b3f5d845c90d991a",
                  "a810816be3cd7e35eb79501e229baec2",
                  "f841a67118590725c12c293a0f6c4253",
                  "3222d92856df7521c704b915ad759894",
                  "8e4ab08a191a3d032ffad748e7166173",
                  "0984548b4fac98d14282b8d17d86c8d5",
                  "408f4ddaf986496dc83bf75529d8f094",
                  "c2e929766e318791b6c3632826a49363",
                  "86f3aa3137f69e77ad3b5b477d63138f",
                  "37b924094c4d2852151c4f6adcf94f14",
                  "7699fe3ad72c149b3e565ada45b692e1",
                  "86dcfcdbacb7118e70124e838d8121b6",
                  "ea35bcb2cf45ad130aaaf4e126f0c3d5",
                  "985300e8a23d0603d5b53dc2768801d3",
                  "0e1a9353c7408839a052ae91513d46b3",
                  "271e81a3ca13f47712724a41c844f95d",
                  "98ab44347bffb61693dc6f3970055a5e",
                  "dcf594b14f056caa14314fc90e0f45a6",
                  "54f0cae0d769180a3f63a761ca895a1c",
                  "653269a29b8e344bd2207ccb823fc61c",
                  "3ec21ae898b20a33adfbf63e5dfbd6ca",
                  "ece1ebd2f6d89a676c0100046bead1f9",
                  "63b6dc3a6c9e6b5602f9dcbd5132dd33",
                  "aafec72013ebe8805892970502b9b521",
                  "6cdedbdfd6b1e829efa63c75feacffa3",
                  "399e7aa44c72e6de025c53313abfb6f6",
                  "2626cd8655460ac6b837e2a42b9f8a08",
                  "1edb7e4ca578759444f4bd6ab4f4469d",
                  "2df316757f3b6f85b6b9f657080de8f6",
                  "63174248107e38efde6a054395d2c05f",
                  "775c03e00a90b396878c89a55f77f58c",
                  "6c54de088a23629b9e7577eeb79a8227",
                  "38692dc699ec4b1a1646f69a897356b2",
                  "59a24cd8a6948d84133a5c47efe77ddb",
                  "f1e0d19e0ef2888548c6b45eca8174cf",
                  "0b92c69b57bca1d82372d808a5521a81",
                  "479d98b8fa292c34299f89d2f9b39401",
                  "58840db544c6dcd9ea6f33ca2de6add9",
                  "fc3261325a44664f6120dfe82bd3b143",
                  "8934a7f1ce060ab92f9c8aae49ad1972",
                  "c525d039bb17ca06b43a46db42a2e1ca",
                  "c4e72be668b79a781c76915251091553",
                  "9393c45ac1766700ff13bc230f5068e4",
                  "7c96f4b454a999e7f9eb268d791bf6df",
                  "1e4bd81bf55f5badec5bb08a4840489a",
                  "4655fb645011d0025a12660f72ad6460",
                  "a661a94fec415c86300e31549b52dff2",
                  "5c7669b534689e0563dc2dbb66b36c08",
                  "a17ddd43cb8dc2cc08ac3c3e36cd5919",
                  "f93d1f7f18bc62ad081240d3924372e5",
                  "5c59af4796ee60fc4f8c03d4254c43c4",
                  "d3860c2a9f0b949619f4ef57bb4cafdc",
                  "49aab5b12f277fcb4b580f93826747ef",
                  "28ce3eefc6335990f8144ee71e1b3232",
                  "e7b08a458a4d3451546b34c073a93550",
                  "410965393235edf0d1d8d41716896fa1",
                  "353bce2a0d08da6253c6287b172bc4e1",
                  "2ec3163e69019a4df7cc232ef9350bae",
                  "3cb00c9034a540ddd1d582df80ed536f",
                  "4d3ec5addef78c167f44ae23a38073d7",
                  "2838276749a3fde3675cc840ccd7a858",
                  "b304506e63cc4ae3f368b68caa59244b",
                  "6cce54591784dff447604620ec220a5b",
                  "2d14b4dcc177c1a2a484fe7643e7184b",
                  "1b3c65e0c597552484692690758156ae",
                  "865f07a75b500473db7fd3234b076178",
                  "161493f1b4217784655d81473f69a154",
                  "02cdabc06bfaf4b46944c36d0836eac7",
                  "0a0b207eaeb2ebedef6f4d34b4a3d081",
                  "4a6a5cae7864a3bf9b3bfbac46cd504c",
                  "0f31872149bebf3e33535f95cd8bbed3",
                  "7c8654722321e28d37607d350f867b74",
                  "dd69b869e906e5f345c086822a6a0833",
                  "87142493e97c0cb4e5c9fefbfd3e0ac5",
                  "d1a2950d774b5eeaf7452551e5efb1e3",
                  "562e591f0a6296aed1214249c25973e8",
                  "971b4714e5296ba8fa544f215f525a47",
                  "ef660ec8d23317e7b33b95f6a5a156c6",
                  "0fc10cd193ca66f2817cdf148d865c95",
                  "5f75fed9804f1651506c4400c85192eb",
                  "c83dc4508f1ea4d86f8ecd419403ddcb",
                  "390e892876f3c76740f95753db8ee6bb",
                  "24b1dd0a2bcb94f1904df056dd0d614c",
                  "182d66925397fa738409c832da809ee3",
                  "b87cd2f485dd2b3af5746a97f37e3b68"
                ],
                "newNode": true,
                "pid": "1693297838238",
                "rules": [],
                "style": {
                  "background": "#e0e4f8",
                  "color": "#333333"
                },
                "uuid": "90bdf112-54a2-4a7b-9429-e0534c4e18fd",
                "level": 3,
                "data": {
                  "text": "船舶航运服务",
                  "lineWidth": 3,
                  "paddingX": 8,
                  "paddingY": 3,
                  "expand": false,
                  "uuid": "90bdf112-54a2-4a7b-9429-e0534c4e18fd"
                }
              },
              {
                "children": [],
                "expand": true,
                "focused": false,
                "id": "1693297855006",
                "label": "船舶改装改造服务",
                "linkId": [
                  "848516b4563391e0fb29fd08888d0f42"
                ],
                "newNode": true,
                "pid": "1693297838238",
                "rules": [],
                "style": {
                  "background": "#e0e4f8",
                  "color": "#333333"
                },
                "uuid": "ebb4d1d6-e6d5-45c0-a4b9-edacbbfb75a4",
                "level": 3,
                "data": {
                  "text": "船舶改装改造服务",
                  "lineWidth": 3,
                  "paddingX": 8,
                  "paddingY": 3,
                  "expand": false,
                  "uuid": "ebb4d1d6-e6d5-45c0-a4b9-edacbbfb75a4"
                }
              },
              {
                "children": [],
                "expand": true,
                "focused": false,
                "id": "1693297861190",
                "label": "船舶维护修理服务",
                "linkId": [
                  "dd100c034ed7d3537468832df5599adb",
                  "c9e8986d161aab004aad07dc236bdd46",
                  "34c11350642d6331cf005696e9f3bc36",
                  "a3f1cd85d43dfee36b7cd803c2a55563",
                  "da73e002911aeb8128ecfcab7431662b",
                  "40869208232007484e585670fe1f8788",
                  "6f0bd1f540506e267dfefd076e121083",
                  "a20145020330d183bee07411dfbf8ddc",
                  "4adeb0bed59c1ac0007ff561337a9b5f",
                  "a2418ebb9093d59c078cd663f231f0b0",
                  "e59bc45e03a540a7a982529e3e040256",
                  "eb54c86849b6fd409f64347337dfb181",
                  "1975b12ca00ecea1798254aab52e0b75"
                ],
                "newNode": true,
                "pid": "1693297838238",
                "rules": [],
                "style": {
                  "background": "#e0e4f8",
                  "color": "#333333"
                },
                "uuid": "04f6e64d-1075-404e-998d-8718df261d38",
                "level": 3,
                "data": {
                  "text": "船舶维护修理服务",
                  "lineWidth": 3,
                  "paddingX": 8,
                  "paddingY": 3,
                  "expand": false,
                  "uuid": "04f6e64d-1075-404e-998d-8718df261d38"
                }
              },
              {
                "children": [],
                "expand": true,
                "focused": false,
                "id": "1693297868006",
                "label": "船舶修造平台（船台、船坞）",
                "linkId": [
                  "26930a5332a76b899ea59278b3f1d9ce",
                  "57064e0cd1a2f85b43c0c026ffd0bf22",
                  "f24abf6f947ba3e60c9730c8637ab2d2",
                  "b64bb82397513388c64cd652e858b907",
                  "527f946ab5a1e7856f9746cc73b2e7c7",
                  "6c9165cb66c6a7d93fb60b8ae256a8cf",
                  "c990005174cb36869951acb53e672942"
                ],
                "newNode": true,
                "pid": "1693297838238",
                "rules": [],
                "style": {
                  "background": "#e0e4f8",
                  "color": "#333333"
                },
                "uuid": "496fdf30-0c31-4473-8a91-bd516f352b0c",
                "level": 3,
                "data": {
                  "text": "船舶修造平台（船台、船坞）",
                  "lineWidth": 3,
                  "paddingX": 8,
                  "paddingY": 3,
                  "expand": false,
                  "uuid": "496fdf30-0c31-4473-8a91-bd516f352b0c"
                }
              }
            ],
            "expand": true,
            "focused": false,
            "id": "1693297838238",
            "label": "船舶配套服务及平台",
            "linkId": [],
            "newNode": true,
            "pid": "-3",
            "rules": [],
            "style": {
              "background": "#e0e4f8",
              "color": "#333333"
            },
            "uuid": "a28e0edd-2780-4232-a8fe-ebd417c9ef02",
            "level": 2,
            "data": {
              "text": "船舶配套服务及平台",
              "lineWidth": 3,
              "paddingX": 8,
              "paddingY": 3,
              "expand": false,
              "uuid": "a28e0edd-2780-4232-a8fe-ebd417c9ef02"
            }
          }
        ],
        "expand": true,
        "focused": false,
        "id": "-3",
        "label": "下游",
        "linkId": [],
        "newNode": true,
        "pid": "0",
        "rules": [],
        "style": {
          "background": "#e0e4f8",
          "color": "#333333"
        },
        "uuid": "89d3d3d1-cb71-431e-9bb9-e3ae01611198",
        "level": 1,
        "data": {
          "text": "下游",
          "lineWidth": 5,
          "paddingX": 15,
          "paddingY": 5,
          "expand": false,
          "uuid": "89d3d3d1-cb71-431e-9bb9-e3ae01611198"
        }
      }
    ],
    "label": "船舶制造"
  }

}

export default {
  // ...data1,
  // ...data2,
  // ...data3,
  // ...data4,
  // ...data5,
  ...data6,
  // ...rootData,
  "theme": {
    "template": "classic4",
    "config": {
      // 自定义配置...
    }
  },
  // "layout": "logicalStructure",
  "layout": "mindMap",
  // "layout": "catalogOrganization"
  // "layout": "organizationStructure",
  "config": {}
}