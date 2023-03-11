System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Piece, _crd, PieceType;

  _export("Piece", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fcd2b14yNZHgITbD0wKxctJ", "Piece", undefined);

      (function (PieceType) {
        PieceType[PieceType["PIECE_TYPE_KING"] = 0] = "PIECE_TYPE_KING";
        PieceType[PieceType["PIECE_TYPE_ADVISOR"] = 1] = "PIECE_TYPE_ADVISOR";
        PieceType[PieceType["PIECE_TYPE_BISHOP"] = 2] = "PIECE_TYPE_BISHOP";
        PieceType[PieceType["PIECE_TYPE_KNIGHT"] = 3] = "PIECE_TYPE_KNIGHT";
        PieceType[PieceType["PIECE_TYPE_ROOK"] = 4] = "PIECE_TYPE_ROOK";
        PieceType[PieceType["PIECE_TYPE_CANNON"] = 5] = "PIECE_TYPE_CANNON";
        PieceType[PieceType["PIECE_TYPE_PAWN"] = 6] = "PIECE_TYPE_PAWN";
        PieceType[PieceType["PIECE_TYPE_NUM"] = 7] = "PIECE_TYPE_NUM";
        PieceType[PieceType["PIECE_TYPE_NONE"] = 8] = "PIECE_TYPE_NONE";
      })(PieceType || (PieceType = {}));

      _export("Piece", Piece = class Piece {
        constructor() {
          this.type_ = void 0;
          this.pos_ = void 0;
          this.show_ = void 0;
          this.name_ = void 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=477e2b9a32902806ba3126a7737311a5a2a309c5.js.map