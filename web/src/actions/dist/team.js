"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.deleteTeamMember = exports.updateTeamMember = exports.addTeamMember = exports.fetchTeam = void 0;
var axios_1 = require("axios");
var lodash_1 = require("lodash");
var types_1 = require("./types");
var history_1 = require("../history");
exports.fetchTeam = function (team) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var response, res, error_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios_1["default"].get("/api/team/fetch/" + team)];
            case 1:
                response = _b.sent();
                res = (_a = {},
                    _a[team] = response.data,
                    _a);
                dispatch({
                    type: types_1.ActionTypes.fetchTeam,
                    payload: res
                });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                console.log(error_1.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
exports.addTeamMember = function (member) { return function (dispatch, getState) { return __awaiter(void 0, void 0, void 0, function () {
    var imgFile, data, img, response, updated, res, error_2;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 6]);
                if (!member.img) return [3 /*break*/, 3];
                imgFile = new FormData();
                data = member.img;
                imgFile.append('img', data[0]);
                return [4 /*yield*/, axios_1["default"].post('/api/service/add/image', imgFile)];
            case 1: return [4 /*yield*/, (_b.sent()).data];
            case 2:
                img = _b.sent();
                member.img = img;
                _b.label = 3;
            case 3:
                if (!member.contacts) {
                    member.contacts = {};
                }
                return [4 /*yield*/, axios_1["default"].post('/api/team/add/member', lodash_1["default"].omit(member, '_id'))];
            case 4:
                response = _b.sent();
                updated = __spreadArrays(getState().teams[member.team], [response.data]);
                res = (_a = {},
                    _a[member.team] = updated,
                    _a);
                dispatch({
                    type: types_1.ActionTypes.fetchTeam,
                    payload: res
                });
                history_1.history.push('/backend/dashboard');
                return [3 /*break*/, 6];
            case 5:
                error_2 = _b.sent();
                console.log(error_2);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); }; };
exports.updateTeamMember = function (member) { return function (dispatch, getState) { return __awaiter(void 0, void 0, void 0, function () {
    var older, older_img, imgFile, data, img, withoutUnUpdatedMember, updated, makeObjectsWithArray, serializeUpdated, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                if (!(typeof member.img !== 'string' && member.img)) return [3 /*break*/, 4];
                older = lodash_1["default"].filter(getState().teams[member.team], function (m) {
                    return m._id === member._id;
                });
                older_img = older[0].img;
                return [4 /*yield*/, axios_1["default"]["delete"]("/api/service/delete/image/" + older_img)];
            case 1:
                _a.sent();
                imgFile = new FormData();
                data = member.img;
                imgFile.append('img', data[0]);
                return [4 /*yield*/, axios_1["default"].post('/api/service/add/image', imgFile)];
            case 2: return [4 /*yield*/, (_a.sent()).data];
            case 3:
                img = _a.sent();
                member.img = img;
                _a.label = 4;
            case 4: return [4 /*yield*/, axios_1["default"].patch("/api/team/update/member/" + member._id, lodash_1["default"].omit(member, '_id'))];
            case 5:
                _a.sent();
                withoutUnUpdatedMember = lodash_1["default"].map(getState().teams, function (m) {
                    var team = lodash_1["default"].map(m, function (n) {
                        if (n._id !== member._id) {
                            return n;
                        }
                    });
                    team = team.filter(function (element) {
                        return element !== undefined;
                    });
                    return team;
                });
                updated = lodash_1["default"].map(withoutUnUpdatedMember, function (m) {
                    if (m[0].team === member.team) {
                        m.push(member);
                        return m;
                    }
                    else {
                        return m;
                    }
                });
                makeObjectsWithArray = lodash_1["default"].map(updated, function (m) {
                    var _a;
                    return _a = {}, _a[m[0].team] = m, _a;
                });
                serializeUpdated = lodash_1["default"].merge.apply(lodash_1["default"], __spreadArrays([{}], makeObjectsWithArray));
                dispatch({
                    type: types_1.ActionTypes.fetchTeam,
                    payload: serializeUpdated
                });
                history_1.history.push('/backend/dashboard');
                return [3 /*break*/, 7];
            case 6:
                error_3 = _a.sent();
                console.log(error_3);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); }; };
exports.deleteTeamMember = function (member) { return function (dispatch, getState) { return __awaiter(void 0, void 0, void 0, function () {
    var res, error_4;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                if (!(member.img !== 'null' &&
                    member.img !== null &&
                    member.img !== undefined)) return [3 /*break*/, 2];
                return [4 /*yield*/, axios_1["default"]["delete"]("/api/service/delete/image/" + member.img)];
            case 1:
                _b.sent();
                _b.label = 2;
            case 2: return [4 /*yield*/, axios_1["default"]["delete"]("/api/team/delete/member/" + member._id)];
            case 3:
                _b.sent();
                res = (_a = {},
                    _a[member.team] = lodash_1["default"].filter(getState().teams[member.team], function (oldMember) {
                        return oldMember._id !== member._id;
                    }),
                    _a);
                dispatch({
                    type: types_1.ActionTypes.fetchTeam,
                    payload: res
                });
                return [3 /*break*/, 5];
            case 4:
                error_4 = _b.sent();
                console.log(error_4);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); }; };
