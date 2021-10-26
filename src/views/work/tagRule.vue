<template>
  <div>tagRule</div>
</template>

<script>
export default {
  data() {
    return {
      userGroupAll: [
        {
          labelStrategyId: new Date().getTime(),
          rulesDesc: [
            {
              id: new Date().getTime(),
              ruleRelation: "and",
              rules: [
                {
                  id: new Date().getTime(),
                  ruleRelation: "and", // 关系绑定值
                  ruleIndex1: "0", // 级联选择器第一级
                  ruleIndex2: "0", // 级联选择器第二级
                  ruleData: "", // 级联选择器第三级
                  ruleName: "1", // 第一个选项的返现值
                  ruleEval: "=", // 第二个选项绑定值
                  ruleCondition: "1", // 第三个选项的绑定值
                  ruleConditionName: "", // 第三个选项的返现值
                  tagDescType: "" // 标记的分类
                }
              ]
            }
          ],
          smtInfoList: [{ smtCode: "", smtName: "", priority: "" }]
        },
        {
          labelStrategyId: new Date().getTime(),
          rulesDesc: [
            {
              id: new Date().getTime(),
              ruleRelation: "and",
              rules: [
                {
                  id: new Date().getTime(),
                  ruleRelation: "and", // 关系绑定值
                  ruleIndex1: "0", // 级联选择器第一级
                  ruleIndex2: "0", // 级联选择器第二级
                  ruleData: "", // 级联选择器第三级
                  ruleName: "", // 第一个选项的返现值
                  ruleEval: "=", // 第二个选项绑定值
                  ruleCondition: "", // 第三个选项的绑定值
                  ruleConditionName: "", // 第三个选项的返现值
                  tagDescType: "" // 标记的分类
                },
                {
                  id: new Date().getTime(),
                  ruleRelation: "and", // 关系绑定值
                  ruleIndex1: "0", // 级联选择器第一级
                  ruleIndex2: "0", // 级联选择器第二级
                  ruleData: "", // 级联选择器第三级
                  ruleName: "2", // 第一个选项的返现值
                  ruleEval: "=", // 第二个选项绑定值
                  ruleCondition: "2", // 第三个选项的绑定值
                  ruleConditionName: "", // 第三个选项的返现值
                  tagDescType: "" // 标记的分类
                }
              ]
            }
          ],
          smtInfoList: [{ smtCode: "", smtName: "", priority: "" }]
        },
        {
          labelStrategyId: new Date().getTime(),
          rulesDesc: [
            {
              id: new Date().getTime(),
              ruleRelation: "and",
              rules: [
                {
                  id: new Date().getTime(),
                  ruleRelation: "and", // 关系绑定值
                  ruleIndex1: "0", // 级联选择器第一级
                  ruleIndex2: "0", // 级联选择器第二级
                  ruleData: "", // 级联选择器第三级
                  ruleName: "1", // 第一个选项的返现值
                  ruleEval: "=", // 第二个选项绑定值
                  ruleCondition: "1", // 第三个选项的绑定值
                  ruleConditionName: "", // 第三个选项的返现值
                  tagDescType: "" // 标记的分类
                }
              ]
            }
          ],
          smtInfoList: [{ smtCode: "", smtName: "", priority: "" }]
        }
      ]
    };
  },
  created() {
    this.tagRule();
  },
  methods: {
    tagRule() {
      let isAllyes = false;
      this.userGroupAll.some((item, index) => {
        //标记
        let result0;

        if (index == 0) {
          console.log("11result0", result0);
          console.log("isAllyes", isAllyes);
          result0 = item.rulesDesc.some((item2, index2) => {
            // let result = item2.rules.some((item3, index3) => {
            //   if (index3 == 0) {
            //     if (item3.ruleName) {
            //       if (item3.ruleCondition) {
            //         isAllyes = true;
            //       } else {
            //         console.log("请填写标记");
            //         return true;
            //       }
            //     } else {
            //       isAllyes = false;
            //     }
            //   } else {
            //     if (item3.ruleName) {
            //       if (!isAllyes) {
            //         console.log("请填写标记");
            //         return true;
            //       }
            //       if (item3.ruleCondition) {
            //         isAllyes = true;
            //       } else {
            //         console.log("请填写标记");
            //         return true;
            //       }
            //     } else {
            //       if (isAllyes) {
            //         console.log("请填写标记");
            //         return true;
            //       }
            //     }
            //   }
            // });
            let result;
            if (index2 == 0) {
              result = item2.rules.some((item3, index3) => {
                if (index3 == 0) {
                  if (item3.ruleName) {
                    if (item3.ruleCondition) {
                      isAllyes = true;
                    } else {
                      console.log("请填写标记");
                      return true;
                    }
                  } else {
                    isAllyes = false;
                  }
                } else {
                  if (item3.ruleName) {
                    if (!isAllyes) {
                      console.log("请填写标记");
                      return true;
                    }
                    if (item3.ruleCondition) {
                      isAllyes = true;
                    } else {
                      console.log("请填写标记");
                      return true;
                    }
                  } else {
                    if (isAllyes) {
                      console.log("请填写标记");
                      return true;
                    }
                  }
                }
              });
              // return result;
            } else {
              let isAllyes2 = isAllyes; //上个组状态
              result = item2.rules.some((item3, index3) => {
                if (index3 == 0) {
                  if (item3.ruleName) {
                    if (item3.ruleCondition) {
                      isAllyes = true;
                    } else {
                      console.log("请填写标记");
                      return true;
                    }
                  } else {
                    isAllyes = false;
                  }
                } else {
                  if (item3.ruleName) {
                    if (!isAllyes) {
                      console.log("请填写标记");
                      return true;
                    }
                    if (item3.ruleCondition) {
                      isAllyes = true;
                    } else {
                      console.log("请填写标记");
                      return true;
                    }
                  } else {
                    if (isAllyes) {
                      console.log("请填写标记");
                      return true;
                    }
                  }
                }
              });

              if (!result) {
                if (isAllyes2) {
                  if (!isAllyes) {
                    console.log("请填写标记"); //全有 全空
                    result = true;
                  }
                } else {
                  if (isAllyes) {
                    console.log("请填写标记"); // 全空  全有
                    result = true;
                  }
                }
              }
            }
            return result;
          });
          return result0;
        } else {
          console.log("22result0", result0);
          console.log("isAllyes", isAllyes);
          let isAllyes0 = isAllyes; //上个组状态

          result0 = item.rulesDesc.some((item2, index2) => {
            // let result = item2.rules.some((item3, index3) => {
            //   if (index3 == 0) {
            //     if (item3.ruleName) {
            //       if (item3.ruleCondition) {
            //         isAllyes = true;
            //       } else {
            //         console.log("请填写标记");
            //         return true;
            //       }
            //     } else {
            //       isAllyes = false;
            //     }
            //   } else {
            //     if (item3.ruleName) {
            //       if (!isAllyes) {
            //         console.log("请填写标记");
            //         return true;
            //       }
            //       if (item3.ruleCondition) {
            //         isAllyes = true;
            //       } else {
            //         console.log("请填写标记");
            //         return true;
            //       }
            //     } else {
            //       if (isAllyes) {
            //         console.log("请填写标记");
            //         return true;
            //       }
            //     }
            //   }
            // });
            let result;
            if (index2 == 0) {
              result = item2.rules.some((item3, index3) => {
                if (index3 == 0) {
                  if (item3.ruleName) {
                    if (item3.ruleCondition) {
                      isAllyes = true;
                    } else {
                      console.log("请填写标记");
                      return true;
                    }
                  } else {
                    isAllyes = false;
                  }
                } else {
                  if (item3.ruleName) {
                    if (!isAllyes) {
                      console.log("请填写标记");
                      return true;
                    }
                    if (item3.ruleCondition) {
                      isAllyes = true;
                    } else {
                      console.log("请填写标记");
                      return true;
                    }
                  } else {
                    if (isAllyes) {
                      console.log("请填写标记");
                      return true;
                    }
                  }
                }
              });
              // return result;
            } else {
              let isAllyes2 = isAllyes; //上个组状态
              result = item2.rules.some((item3, index3) => {
                if (index3 == 0) {
                  if (item3.ruleName) {
                    if (item3.ruleCondition) {
                      isAllyes = true;
                    } else {
                      console.log("请填写标记");
                      return true;
                    }
                  } else {
                    isAllyes = false;
                  }
                } else {
                  if (item3.ruleName) {
                    if (!isAllyes) {
                      console.log("请填写标记");
                      return true;
                    }
                    if (item3.ruleCondition) {
                      isAllyes = true;
                    } else {
                      console.log("请填写标记");
                      return true;
                    }
                  } else {
                    if (isAllyes) {
                      console.log("请填写标记");
                      return true;
                    }
                  }
                }
              });

              if (!result) {
                if (isAllyes2) {
                  if (!isAllyes) {
                    console.log("请填写标记"); //全有 全空
                    result = true;
                  }
                } else {
                  if (isAllyes) {
                    console.log("请填写标记"); // 全空  全有
                    result = true;
                  }
                }
              }
            }
            return result;
          });

          if (!result0) {
            console.log("isAllyes0", isAllyes0);
            if (isAllyes0) {
              if (!isAllyes) {
                console.log("请填写标记"); //全有 全空
                result0 = true;
              }
            } else {
              if (isAllyes) {
                console.log("请填写标记"); // 全空  全有
                result0 = true;
              }
            }
          }
        }

        // return result0;
        if (result0) {
          return result0;
        } else {
          //菜单名称
          if (isAllyes) {
            let menuResult = item.smtInfoList.some((item, index) => {
              if (!item.smtCode || !item.priority) {
                console.log("请填写菜单名称项");
                result0 = true;
                return true;
              }
            });
          } else {
            let menuResult2 = item.smtInfoList.every((item, index) => {
              if (!item.smtCode && !item.priority) {               
                return true;
              }else{
                console.log("请填写菜单名称项");
                return false
              }
            });
            result0 = !menuResult2
          }
          return result0;
        }
      });
    }
  }
};
</script>

<style>
</style>