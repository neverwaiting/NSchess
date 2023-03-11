import { _decorator, Component, Node, SpriteFrame, resources, Sprite, log } from 'cc';
import { Piece } from './Piece';
const { ccclass, property } = _decorator;

enum PieceType {
    PIECE_TYPE_KING = 0,
    PIECE_TYPE_ADVISOR = 1,
    PIECE_TYPE_BISHOP = 2,
    PIECE_TYPE_KNIGHT = 3,
    PIECE_TYPE_ROOK = 4,
    PIECE_TYPE_CANNON = 5,
    PIECE_TYPE_PAWN = 6,
    PIECE_TYPE_NUM = 7,
    PIECE_TYPE_NONE = 8
}

enum SIDE_TYPE {
    SIDE_TYPE_RED = 0,
    SIDE_TYPE_BLACK = 1
}

@ccclass('Board')
export class Board extends Component {
    firstPiece_: Node | null = null
    pieceSpriteFrames_: Array<SpriteFrame>

    initFenString_: string = "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR w"
    pieces_: Array<Piece> = new Array<Piece>

    getPieceTypeByChar(c: string): PieceType {
        switch(c.toUpperCase()) {
            case "K":
                return PieceType.PIECE_TYPE_KING
            case "A":
                return PieceType.PIECE_TYPE_ADVISOR
            case "B":
                return PieceType.PIECE_TYPE_BISHOP
            case "N":
                return PieceType.PIECE_TYPE_KNIGHT
            case "R":
                return PieceType.PIECE_TYPE_ROOK
            case "C":
                return PieceType.PIECE_TYPE_CANNON
            case "P":
                return PieceType.PIECE_TYPE_PAWN
            default: 
                return PieceType.PIECE_TYPE_NONE
        }
    }

    start() {
        this.initAllData()
    }

    loadPieceImages(path: string) {
        resources.loadDir(path, SpriteFrame, function(err, assets) {
            for (let spriteFrame of assets)
                log(spriteFrame.name)
        })
    }

    initPieces() {
        this.pieces_ = new Array<Piece>(64)
    }

    initAllData() {
        this.loadPieceImages("images/pieces/style1")
    }

    update(deltaTime: number) {
        
    }
}

