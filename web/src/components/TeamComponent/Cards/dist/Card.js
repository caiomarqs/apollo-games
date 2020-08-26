"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Card = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var actions_1 = require("../../../actions");
var Badges_1 = require("./Badges");
var Icons_1 = require("../../Icons");
var _Card = /** @class */ (function (_super) {
    __extends(_Card, _super);
    function _Card() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onDeleteClicked = function (member) {
            _this.props.deleteTeamMember(member);
        };
        _this.compileProfileImage = function (img) {
            var defaultImage = new Image().src = '/uploads/fb91a1e8a763-principal_bg.jpeg';
            var dprofileImage = new Image().src = "/uploads/" + img;
            if (img !== 'null' && img) {
                return (react_1["default"].createElement("img", { className: "img-container", src: dprofileImage })
                // <div
                //   className="img-container"
                //   style={{ backgroundImage: `url(/uploads/${img})` }}
                // />
                );
            }
            return (react_1["default"].createElement("img", { className: "img-container", src: defaultImage })
            // <div
            //   className="img-container"
            //   style={{
            //     backgroundImage: "url('/uploads/fb91a1e8a763-principal_bg.jpeg')",
            //   }}
            // />
            );
        };
        _this.isInDashBord = function (status, profile) {
            if (status === void 0) { status = false; }
            if (status === true) {
                return (react_1["default"].createElement("div", { className: "optionsButton" },
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/backend/dashboard/team/update/member/" + profile._id + "/" + profile.team },
                        react_1["default"].createElement(Icons_1.Pencil, { fill: "#ABABAB" })),
                    react_1["default"].createElement("div", { onClick: function () { return _this.onDeleteClicked(profile); } },
                        react_1["default"].createElement(Icons_1.Gabage, { fill: "#ABABAB" }))));
            }
        };
        return _this;
    }
    _Card.prototype.render = function () {
        var _a = this.props, profile = _a.profile, isInDashboard = _a.isInDashboard;
        var name = profile.name, desc = profile.desc, contacts = profile.contacts, img = profile.img;
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("li", { key: profile.name, className: "card-container" },
                this.isInDashBord(isInDashboard, profile),
                react_1["default"].createElement("div", { className: "profile-card" },
                    this.compileProfileImage(img),
                    react_1["default"].createElement("div", { className: "profile-info" },
                        react_1["default"].createElement("h6", null, name),
                        react_1["default"].createElement("p", { className: "profile-desc" }, desc.valueOf()),
                        contacts !== undefined ? react_1["default"].createElement(Badges_1.Badges, { contacts: contacts }) : react_1["default"].createElement(react_1["default"].Fragment, null))))));
    };
    return _Card;
}(react_1["default"].Component));
exports.Card = react_redux_1.connect(null, { deleteTeamMember: actions_1.deleteTeamMember })(_Card);
