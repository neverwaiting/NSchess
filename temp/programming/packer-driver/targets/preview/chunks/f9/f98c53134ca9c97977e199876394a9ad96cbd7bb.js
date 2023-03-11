System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, SpriteFrame, resources, log, _dec, _class, _crd, ccclass, property, Board;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      SpriteFrame = _cc.SpriteFrame;
      resources = _cc.resources;
      log = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c6f924V6pFBRZLXtIatLwU2", "Board", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'SpriteFrame', 'resources', 'Sprite', 'log']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Board", Board = (_dec = ccclass('Board'), _dec(_class = class Board extends Component {
        constructor() {
          super(...arguments);
          this.firstPiece_ = null;
          this.pieceSpriteFrames_ = void 0;
        }

        start() {
          this.initAllData();
        }

        loadPieceImages(path) {
          resources.loadDir(path, SpriteFrame, function (err, assets) {
            log(assets);
          });
        }

        initAllData() {
          this.loadPieceImages("images/pieces/style1");
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f98c53134ca9c97977e199876394a9ad96cbd7bb.js.map