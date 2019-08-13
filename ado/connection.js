"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var azdev = require("azure-devops-node-api");
// your collection url
var orgUrl = "https://dev.azure.com/csefy19";
//let token: string = "unykb4a2qjvzkg665iz3vyjywnbvp2wkf4mfljorkgqdjqbwmcua" // e.g "cbdeb34vzyuk5l4gxc4qfczn3lko3avfkfqyb47etahq6axpcqha"; 
var QueryHelper = /** @class */ (function () {
    function QueryHelper(token, project) {
        this.token = token;
        this.project = project;
        var authHandler = azdev.getPersonalAccessTokenHandler(token);
        this.connection = new azdev.WebApi(orgUrl, authHandler);
    }
    QueryHelper.prototype.runQuery = function (wiql) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.connection.getWorkItemApi()];
                    case 1:
                        _a.workItemTracking = _b.sent();
                        return [2 /*return*/, this.workItemTracking.queryByWiql({ query: wiql })];
                }
            });
        });
    };
    QueryHelper.prototype.getFields = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.connection.getWorkItemApi()];
                    case 1:
                        _a.workItemTracking = _b.sent();
                        return [2 /*return*/, this.workItemTracking.getFields(this.project)];
                }
            });
        });
    };
    QueryHelper.prototype.getField = function (field) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.connection.getWorkItemApi()];
                    case 1:
                        _a.workItemTracking = _b.sent();
                        return [2 /*return*/, this.workItemTracking.getField(field, this.project)];
                }
            });
        });
    };
    QueryHelper.prototype.getWorkItems = function (ids) {
        return __awaiter(this, void 0, void 0, function () {
            var authHandler, connection, workItemTracking;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        authHandler = azdev.getPersonalAccessTokenHandler(this.token);
                        connection = new azdev.WebApi(orgUrl, authHandler);
                        return [4 /*yield*/, connection.getWorkItemTrackingApi()];
                    case 1:
                        workItemTracking = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                workItemTracking.getWorkItems(ids)
                                    .then(function (result) {
                                    resolve(result);
                                })["catch"](function (e) {
                                    reject(e);
                                });
                            })];
                }
            });
        });
    };
    QueryHelper.prototype.loadParticipantByIndustry = function (industry, startday, endday) {
        return __awaiter(this, void 0, void 0, function () {
            var authHandler, connection, workItemTracking, querystring, that, objects, count;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        authHandler = azdev.getPersonalAccessTokenHandler(this.token);
                        connection = new azdev.WebApi(orgUrl, authHandler);
                        return [4 /*yield*/, connection.getWorkItemTrackingApi()];
                    case 1:
                        workItemTracking = _a.sent();
                        querystring = "\nSELECT\n    [System.Id],\n    [System.Title],\n    [System.WorkItemType]\nFROM workitemLinks\nWHERE\n    (\n        [Source].[System.WorkItemType] = 'Organization'\n        AND [Source].[CSEngineering-V2-Orgs.CSEIndustry] = '" + industry + "'\n    )\n    AND (\n        [System.Links.LinkType] = 'System.LinkTypes.Hierarchy-Forward'\n    )\n    AND (\n        [Target].[System.WorkItemType] = 'Participant'\n        AND [Target].[CSEngineering-V2.ParticipationStartDate] >= '" + startday + "'\n        AND [Target].[CSEngineering-V2.ParticipationStartDate] <= '" + endday + "'\n    )\nMODE (Recursive)\n        \n        ";
                        that = this;
                        objects = {};
                        count = 0;
                        //let workItemTracking: wita.IWorkItemTrackingApi = await this.connection.getWorkItemApi();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                workItemTracking.queryByWiql({ query: querystring })
                                    .then(function (result) {
                                    var _this = this;
                                    console.log(Object.keys(result));
                                    result.workItemRelations.forEach(function (item, idx) { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            if (item.source != null && !objects[item.source.id]) {
                                                objects[item.source.id] = {};
                                                objects[item.source.id].value = null;
                                                objects[item.source.id].children = [];
                                            }
                                            if (item.target != null && !objects[item.target.id]) {
                                                objects[item.target.id] = {};
                                                objects[item.target.id].value = null;
                                                objects[item.target.id].children = [];
                                                if (item.source != null) {
                                                    objects[item.source.id].children.push(item.target.id);
                                                }
                                            }
                                            return [2 /*return*/];
                                        });
                                    }); });
                                    resolve(objects);
                                    // let keys =  Object.keys(objects)
                                    // let count = 0;
                                    // keys.forEach((key, idx)=>{
                                    //     that.loadWorkItem(key).then(res=>{
                                    //         objects[key] = res
                                    //         count++;
                                    //         console.log(keys[idx] + " loaded! "+count+"/"+keys.length);
                                    //         if(count == keys.length) {
                                    //             resolve(objects)
                                    //         } 
                                    //     }).catch(e=>{
                                    //         count++;
                                    //         console.log(keys[idx] + " not loaded! "+count+"/"+keys.length);
                                    //         if(count == keys.length) {
                                    //             resolve(objects)
                                    //         } 
                                    //     })
                                    // })
                                    // function myloadWorkItem(idx) {
                                    //     that.loadWorkItem(keys[idx]).then(res=>{
                                    //         objects[keys[idx]] = res
                                    //         console.log(keys[idx] + " loaded! "+idx+"/"+keys.length);
                                    //         if(idx == keys.length-1) {
                                    //             resolve(objects)
                                    //         } else {
                                    //             myloadWorkItem(idx+1)
                                    //         }
                                    //     }).catch(e=>{
                                    //         console.log(keys[idx] + " not loaded! "+idx+"/"+keys.length);
                                    //         if(idx == keys.length-1) {
                                    //             resolve(objects)
                                    //         } else {
                                    //             myloadWorkItem(idx+1)
                                    //         }
                                    //     })
                                    // }
                                    // myloadWorkItem(0)
                                })["catch"](function (e) {
                                    reject(e);
                                });
                            })];
                }
            });
        });
    };
    QueryHelper.prototype.loadWorkItem = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var authHandler, connection, workItemTracking;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        authHandler = azdev.getPersonalAccessTokenHandler(this.token);
                        connection = new azdev.WebApi(orgUrl, authHandler);
                        return [4 /*yield*/, connection.getWorkItemTrackingApi()];
                    case 1:
                        workItemTracking = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                workItemTracking.getWorkItem(id).then(function (res) {
                                    resolve(res);
                                })["catch"](function (e) {
                                    reject(e);
                                });
                            })];
                }
            });
        });
    };
    // [CSEngineering-V2.ParticipationStartDate],
    // [CSEngineering-V2.ActivityDuration]
    QueryHelper.prototype.loadWorkitems = function (ids, fields, workitemtype) {
        return __awaiter(this, void 0, void 0, function () {
            var authHandler, connection, workItemTracking, querystring, that, objects, count;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        authHandler = azdev.getPersonalAccessTokenHandler(this.token);
                        connection = new azdev.WebApi(orgUrl, authHandler);
                        return [4 /*yield*/, connection.getWorkItemTrackingApi()];
                    case 1:
                        workItemTracking = _a.sent();
                        querystring = "\n        SELECT\n    [System.Id],\n    [System.Title],\n    [System.AssignedTo],\n    [System.State],\n    " + fields.join(',') + "\nFROM workitems\nWHERE\n    [System.WorkItemType] = '" + workitemtype + "'\n    AND [System.Id] IN (" + ids.join(",") + ")";
                        that = this;
                        objects = {};
                        count = 0;
                        //let workItemTracking: wita.IWorkItemTrackingApi = await this.connection.getWorkItemApi();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                workItemTracking.queryByWiql({ query: querystring })
                                    .then(function (result) {
                                    console.log(Object.keys(result));
                                    objects = result;
                                    resolve(objects);
                                })["catch"](function (e) {
                                    reject(e);
                                });
                            })];
                }
            });
        });
    };
    return QueryHelper;
}());
exports.QueryHelper = QueryHelper;
