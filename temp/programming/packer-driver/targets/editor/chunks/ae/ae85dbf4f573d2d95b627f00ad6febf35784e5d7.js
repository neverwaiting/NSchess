System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, SpriteFrame, resources, log, _dec, _class, _crd, ccclass, property, PieceType, SIDE_TYPE, Board;

  function _reportPossibleCrUseOfPiece(extras) {
    _reporterNs.report("Piece", "./Piece", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
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

      (function (PieceType) {
        PieceType[PieceType["PIECE_TYPE_KING"] = 0] = "PIECE_TYPE_KING";
        PieceType[PieceType["PIECE_TYPE_ADVISOR"] = 1] = "PIECE_TYPE_ADVISOR";
        PieceType[PieceType["PIECE_TYPE_BISHOP"] = 2] = "PIECE_TYPE_BISHOP";
        PieceType[PieceType["PIECE_TYPE_KNIGHT"] = 3] = "PIECE_TYPE_KNIGHT";
        PieceType[PieceType["PIECE_TYPE_ROOK"] = 4] = "PIECE_TYPE_ROOK";
        PieceType[PieceType["PIECE_TYPE_CANNON"] = 5] = "PIECE_TYPE_CANNON";
        PieceType[PieceType["PIECE_TYPE_PAWN"] = 6] = "PIECE_TYPE_PAWN";
      })(PieceType || (PieceType = {}));

      (function (SIDE_TYPE) {
        SIDE_TYPE[SIDE_TYPE["SIDE_TYPE_RED"] = 0] = "SIDE_TYPE_RED";
        SIDE_TYPE[SIDE_TYPE["SIDE_TYPE_BLACK"] = 1] = "SIDE_TYPE_BLACK";
      })(SIDE_TYPE || (SIDE_TYPE = {}));

      _export("Board", Board = (_dec = ccclass('Board'), _dec(_class = class Board extends Component {
        constructor(...args) {
          super(...args);
          this.firstPiece_ = null;
          this.pieceSpriteFrames_ = void 0;
          this.initFenString_ = "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR w";
          this.pieces_ = new Array();
        }

        start() {
          this.initAllData();
        }

        loadPieceImages(path) {
          resources.loadDir(path, SpriteFrame, function (err, assets) {
            for (let spriteFrame of assets) log(spriteFrame.name);
          });
        }

        initPieces() {
          this.pieces_ = new Array(64);
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
//# sourceMappingURL=ae85dbf4f573d2d95b627f00ad6febf35784e5d7.js.map